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
        ph: ["arrow-right", "arrow-up-right", "envelope-simple", "linkedin-logo", "list", "wechat-logo", "x"]
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
