import { readFile } from "node:fs/promises";

const host = "pharma.jedliuai.com";
const key = "d18a079bd85441c3aca3d885128c03fe";
const origin = `https://${host}`;
const keyLocation = `${origin}/${key}.txt`;
const localKey = (await readFile(new URL(`../public/${key}.txt`, import.meta.url), "utf8")).trim();
if (localKey !== key) throw new Error("The local IndexNow verification file does not match the key.");

const verification = await fetch(keyLocation, { signal: AbortSignal.timeout(30000) });
if (!verification.ok || (await verification.text()).trim() !== key) {
  throw new Error("Deploy the IndexNow verification file to production before submitting URLs.");
}

const sitemap = await readFile(new URL("../dist/sitemap-0.xml", import.meta.url), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (!urlList.length || urlList.some(url => new URL(url).origin !== origin)) throw new Error("Build a same-origin sitemap before submitting.");
const liveSitemap = await fetch(`${origin}/sitemap-0.xml`, { signal: AbortSignal.timeout(30000) });
const liveXml = await liveSitemap.text();
if (!liveSitemap.ok || urlList.some(url => !liveXml.includes(`<loc>${url}</loc>`))) throw new Error("Deploy the new sitemap before submitting.");
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
  signal: AbortSignal.timeout(30000)
});
if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow submission failed: HTTP ${response.status} ${(await response.text()).slice(0, 300)}`);
}
console.log(`IndexNow received ${urlList.length} canonical URLs (HTTP ${response.status}). This confirms submission, not indexing.`);
