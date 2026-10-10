# 技术 SEO 与 GEO 检查

日期：2026-10-10。范围：/、/zh/、robots、sitemap、公开摘要。

| 类别 | 结果 | 说明 |
|---|---|---|
| 抓取入口 | 通过 | robots 允许公开页面并声明 sitemap |
| 可索引性 | 通过代码检查 | 两页没有 noindex，canonical 指向各自正式地址；实际收录待后台验证 |
| 服务端内容 | 通过 | Astro 静态 HTML 中包括正文、FAQ 和 JSON-LD |
| URL 与双语关联 | 通过 | 两个稳定语言 URL，互相 hreflang，与 sitemap 保持对应 |
| 元信息 | 通过 | 本地化 title、description、H1、OG、Twitter |
| 资源和链接 | 通过 | 构建后内部锚点和图片引用均存在 |
| 安全与缓存 | 已配置 | HSTS、现有安全头、图片缓存；上线后复核响应头 |
| 移动端 | 浏览器检查通过 | 390px 中文页面没有横向溢出 |
| Core Web Vitals | 未验证 | 无真实用户数据，不宣称达到指标或 Lighthouse 分数 |

## 爬虫策略

OAI-SearchBot、ChatGPT-User、PerplexityBot 有明确允许规则；Googlebot、Bingbot 等遵循通配允许规则。robots 的允许不等于所有真实机器人都已通过 Cloudflare 的边缘风控；若后台显示抓取失败，应依据真实错误检查对应配置。

## 索引发现

sitemap 包含英文与中文主页、双语对应关系及实际更新时间，不包含 404。IndexNow 使用本站的公开验证文件；pnpm indexnow 会先确认正式域名上的验证文件可读取，再通知两页更新。

## 待取得数据

Search Console 与 Bing Webmaster Tools 的 URL 检查、站点地图处理状态及真实搜索表现。缺少这些数据时，公开 site: 搜索无结果只能作为进一步检查的线索。

本次未新增 API/MCP 服务或 Markdown 内容协商。普通个人职业站的 SSR HTML 已足够提供可抓取正文，这些功能不是 SEO 验收前提。
