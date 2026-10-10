# 技术 SEO 与 GEO 检查

日期：2026-10-10。范围：/、/zh/、robots、sitemap、公开摘要。

| 类别 | 结果 | 说明 |
|---|---|---|
| 抓取入口 | 通过 | robots 允许公开页面并声明 sitemap |
| 可索引性 | 代码通过，Google 尚无收录记录 | 两页没有 noindex，canonical 指向各自正式地址；Search Console 对两页返回“Google 无法识别此网址” |
| 服务端内容 | 通过 | Astro 静态 HTML 中包括正文、FAQ 和 JSON-LD |
| URL 与双语关联 | 通过 | 两个稳定语言 URL，互相 hreflang，与 sitemap 保持对应 |
| 元信息 | 通过 | 本地化 title、description、H1、OG、Twitter |
| 资源和链接 | 通过 | 构建后内部锚点和图片引用均存在 |
| 安全与缓存 | 已上线 | 正式站 HSTS 已复核，现有安全头与图片缓存保留 |
| 移动端 | 浏览器检查通过 | 390px 中文页面没有横向溢出 |
| Core Web Vitals | 未验证 | 无真实用户数据，不宣称达到指标或 Lighthouse 分数 |

## 爬虫策略

OAI-SearchBot、ChatGPT-User、PerplexityBot 有明确允许规则；Googlebot、Bingbot 等遵循通配允许规则。robots 的允许不等于所有真实机器人都已通过 Cloudflare 的边缘风控；若后台显示抓取失败，应依据真实错误检查对应配置。

正式站复查还发现原有 Cloudflare Web Analytics 自动注入脚本被 CSP 的 script-src 拦截。本轮按[官方说明](https://developers.cloudflare.com/web-analytics/faq/)仅增加 https://static.cloudflareinsights.com 脚本来源；自动注入向本站 /cdn-cgi/rum 上报，现有 connect-src 'self' 已足够，无需开放额外网络来源。浏览器先模拟更新后的响应头，确认脚本返回 200、上报返回 204，且没有 CSP 错误，再发布配置。

## 索引发现

sitemap 包含英文与中文主页、双语对应关系及实际更新时间，不包含 404。正式站地图与公开验证文件均返回 200。pnpm indexnow 已通知两页更新，返回 HTTP 202；收到通知不代表收录。

## 实际搜索后台检查与后续

HYPD.AI 已读取 sc-domain:jedliuai.com：两页的 URL 检查均为“Google 无法识别此网址”，站点地图列表为空。2026-09-10 至 2026-10-07 的 web 搜索表现按医药子域名过滤后没有返回页面行。这些结果不说明 robots 拦截，也不提供可报告的排名。

下一步在 Search Console 提交完整的医药站 sitemap 地址，再对两页进行实时测试、申请编入索引。该插件只读，无法代为提交。Bing Webmaster Tools 数据与真实用户 Core Web Vitals 仍待取得。

本次未新增 API/MCP 服务或 Markdown 内容协商。普通个人职业站的 SSR HTML 已足够提供可抓取正文，这些功能不是 SEO 验收前提。
