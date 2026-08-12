import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://pharma.jedliuai.com",
  output: "static",
  trailingSlash: "always",
  integrations: [
    icon({
      include: {
        ph: [
          "arrow-right",
          "arrow-up-right",
          "briefcase",
          "check-square",
          "circles-three-plus",
          "clipboard-text",
          "envelope-simple",
          "file-text",
          "globe-hemisphere-west",
          "linkedin-logo",
          "list",
          "list-checks",
          "magnifying-glass",
          "package",
          "paper-plane-tilt",
          "seal-check",
          "strategy",
          "users-three",
          "wechat-logo",
          "x"
        ]
      }
    }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          zh: "zh-CN"
        }
      }
    })
  ],
  vite: {
    server: {
      host: "0.0.0.0"
    }
  }
});
