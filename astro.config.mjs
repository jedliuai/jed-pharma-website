import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://pharma.jedliuai.com",
  output: "static",
  trailingSlash: "always",
  integrations: [
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
