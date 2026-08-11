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
