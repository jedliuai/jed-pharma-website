import assert from "node:assert/strict";
import { readFile, access, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { contentUpdatedAt } from "../src/config/content-meta.mjs";

const output = resolve("dist");
const origin = "https://pharma.jedliuai.com";
const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map((match) => [match[1], match[2]]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "g"))].map((match) => attributes(match[0]));
const text = (html) => html.replace(/<[^>]*>/g, "").trim();
const pages = new Map();

for (const [route, filename, lang] of [["/", "index.html", "en"], ["/zh/", "zh/index.html", "zh-CN"]]) {
  const html = await readFile(resolve(output, filename), "utf8");
  const links = tags(html, "link");
  const meta = tags(html, "meta");
  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
  assert.equal(tags(html, "html")[0]?.lang, lang, `${route}: document language`);
  assert.equal(h1.length, 1, `${route}: exactly one H1`);
  assert.ok(text(h1[0][1]).includes("Jed Liu"), `${route}: meaningful text H1`);
  assert.ok(/<title>[^<]+<\/title>/.test(html), `${route}: page title`);
  assert.ok(meta.find((item) => item.name === "description")?.content.length > 40, `${route}: description`);
  assert.ok(!meta.find((item) => item.name === "robots")?.content.includes("noindex"), `${route}: indexable`);
  assert.equal(links.find((item) => item.rel === "canonical")?.href, `${origin}${route}`, `${route}: canonical`);
  for (const [language, url] of [["en", `${origin}/`], ["zh-CN", `${origin}/zh/`], ["x-default", `${origin}/`]]) {
    assert.equal(links.find((item) => item.hreflang === language)?.href, url, `${route}: ${language} alternate`);
  }
  const json = html.match(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(json, `${route}: server-rendered JSON-LD`);
  const graph = JSON.parse(json)["@graph"];
  const person = graph.find((item) => item["@type"] === "Person");
  const profile = graph.find((item) => item["@type"] === "ProfilePage");
  const faq = graph.find((item) => item["@type"] === "FAQPage");
  assert.equal(person["@id"], "https://jedliuai.com/#person", `${route}: shared person identity`);
  assert.equal(profile.mainEntity["@id"], person["@id"], `${route}: profile entity reference`);
  assert.match(profile.dateModified, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/, `${route}: ProfilePage modification must include time and timezone, not a date-only value`);
  assert.ok(Number.isFinite(Date.parse(profile.dateModified)), `${route}: valid modification timestamp`);
  assert.equal(profile.dateModified.slice(0, 10), contentUpdatedAt, `${route}: timestamp matches the visible content date`);
  assert.ok(Date.parse(profile.dateModified) <= Date.now(), `${route}: modification timestamp is not in the future`);
  assert.equal(faq.mainEntity.length, 6, `${route}: six FAQ entries`);
  for (const question of faq.mainEntity) {
    assert.ok(text(html).includes(question.name), `${route}: visible FAQ question`);
    assert.ok(text(html).includes(question.acceptedAnswer.text), `${route}: visible FAQ answer`);
  }
  for (const image of tags(html, "img")) {
    assert.ok("alt" in image, `${route}: image alt attribute`);
    if (image.src?.startsWith("/")) await access(resolve(output, image.src.slice(1)));
  }
  pages.set(route, html);
  console.log(`PASS ${route}: metadata, H1, language, JSON-LD, visible FAQ, image resources`);
}

const titles = new Set();
const descriptions = new Set();
for (const filename of await readdir(output, { recursive: true })) {
  if (!filename.endsWith("index.html") || !filename.includes("guides")) continue;
  const route = `/${filename.replaceAll("\\", "/").replace(/index\.html$/, "")}`;
  const html = await readFile(resolve(output, filename), "utf8");
  const links = tags(html, "link");
  const meta = tags(html, "meta");
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = meta.find(item => item.name === "description")?.content;
  assert.ok(title && !titles.has(title), `${route}: unique title`);
  assert.ok(description && !descriptions.has(description), `${route}: unique description`);
  titles.add(title); descriptions.add(description);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${route}: one H1`);
  assert.equal(links.find(item => item.rel === "canonical")?.href, `${origin}${route}`);
  const englishPath = route.replace(/^\/zh\//, "/");
  for (const [language, path] of [["en", englishPath], ["zh-CN", `/zh${englishPath}`], ["x-default", englishPath]]) {
    assert.equal(links.find(item => item.hreflang === language)?.href, `${origin}${path}`, `${route}: equivalent ${language} alternate`);
  }
  assert.ok(!meta.find(item => item.name === "robots")?.content.includes("noindex"));
  const graph = JSON.parse(html.match(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1])["@graph"];
  assert.ok(!graph.some(item => item["@type"] === "FAQPage" || item["@type"] === "ProfilePage"), `${route}: no unrelated profile or FAQ markup`);
  if (!route.endsWith("/guides/")) {
    const article = graph.find(item => item["@type"] === "Article");
    assert.equal(article.url, `${origin}${route}`);
    assert.equal(article.author["@id"], "https://jedliuai.com/#person");
    assert.ok(text(html).includes(article.headline));
    assert.ok(graph.some(item => item["@type"] === "BreadcrumbList"));
  }
  pages.set(route, html);
  console.log(`PASS ${route}: unique metadata, canonical, translations and page-specific schema`);
}
assert.equal(pages.size, 10, "two profiles, two collections and six bilingual guides");

for (const [route, html] of pages) {
  for (const anchor of tags(html, "a")) {
    if (!anchor.href || (!anchor.href.startsWith("/") && !anchor.href.startsWith("#"))) continue;
    const url = new URL(anchor.href, `${origin}${route}`);
    if (pages.has(url.pathname)) {
      if (url.hash) assert.ok(pages.get(url.pathname).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${route}: anchor ${anchor.href}`);
    } else {
      await access(resolve(output, url.pathname.slice(1)));
    }
  }
}
const sitemap = await readFile(resolve(output, "sitemap-0.xml"), "utf8");
for (const route of pages.keys()) assert.ok(sitemap.includes(`<loc>${origin}${route}</loc>`), `sitemap: ${route}`);
assert.ok(sitemap.includes(contentUpdatedAt), "sitemap: real modification date");
assert.ok(!sitemap.includes("404"), "sitemap: error page excluded");
const robots = await readFile(resolve(output, "robots.txt"), "utf8");
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap-index.xml`), "robots: sitemap discovery");
for (const file of ["llms.txt", "ai-summary.txt", "d18a079bd85441c3aca3d885128c03fe.txt"]) await access(resolve(output, file));
console.log("PASS internal links, sitemap, robots.txt, AI summaries and IndexNow key");
