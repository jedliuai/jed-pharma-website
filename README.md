> **Chatgpt代充：[aishopvip.com](https://aishopvip.com)**

# jed-pharma-website

Jed Liu 的独立医药国际业务个人网站，默认英文并提供完整中文路由。

## 定位

网站聚焦医药国际业务、注册与技术协调、订单执行、国际交付，以及服务于真实业务的 AI 与数据工作方法。它是个人职业网站，不代表任何雇主或制药企业。

## 技术

- Astro 7 + TypeScript
- 静态输出
- Cloudflare Pages
- 正式域名：`https://pharma.jedliuai.com`

## 本地开发

```bash
pnpm install
pnpm dev
```

## 验证与构建

```bash
pnpm check
pnpm build
pnpm seo:check
pnpm preview
```

## 内容边界

- 只展示脱敏区间和匿名案例
- 不公开雇主、客户、合同、批次、价格、付款或未公开注册信息
- 产品经验不是实时目录，任何供应和市场状态均需项目确认
- 非专业社媒首版隐藏

## 部署

Cloudflare Pages 构建产物目录为 `dist/`。首次部署需要先确认 Wrangler 已登录并创建同名 Pages 项目，随后运行：

```bash
pnpm build
pnpm deploy
```

每次内容更新后，确认正式域名已经显示新版，再运行 `pnpm indexnow`，通知支持 IndexNow 的搜索引擎重新发现英文与中文页面。返回 200/202 代表收到提交，不代表已经收录。

## SEO 与 GEO 维护

- `src/config/content-meta.mjs` 记录实际内容更新时间；不要在仅修改样式或重新部署时虚增日期。
- 双语 FAQ 的可见文字与结构化数据共用 `src/data/copy.ts`，避免两份内容脱节。
- `pnpm seo:check` 检查构建后的 H1、canonical、hreflang、JSON-LD、FAQ、内部链接和图片资源。
- `public/llms.txt` 与 `public/ai-summary.txt` 是辅助摘要；更新个人资料时同步维护，它们不是排名保证。
- Google Search Console 与 Bing Webmaster Tools 可用于域名验证、提交 `https://pharma.jedliuai.com/sitemap-index.xml`、检查收录及衡量实际搜索表现。
- 完整审计和后续内容建议见 `GEO-AUDIT-REPORT.md`。
