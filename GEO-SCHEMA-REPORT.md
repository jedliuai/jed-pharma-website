# 结构化数据审计

日期：2026-10-10。范围：英文首页与中文首页。

## 验证结果

两页完整构建 HTML 已提交 Schema.org Validator，均为 0 errors、0 warnings。JSON-LD 位于 HTML head，原始响应中就能读取。

| 类型 | 用途 | 状态 |
|---|---|---|
| Person | Jed Liu 的身份与专业方向 | 合法；共用主站 Person ID |
| WebSite | 医药个人站与语言范围 | 合法；publisher 指向 Person |
| ProfilePage | 当前语言的职业档案 | 合法；mainEntity 指向 Person |
| FAQPage | 六组可见问答 | 合法；问题与回答来自同一份双语内容 |

## 决策

- Person 的 @id 统一为 https://jedliuai.com/#person，减少同一人在两个自有网站之间的歧义。
- sameAs 只使用已知自有身份页：主站、LinkedIn、GitHub、电子名片。工具链接不当作人的身份页。
- description、jobTitle、knowsAbout 按当前语言输出；区域描述统一为拉丁美洲与中亚/CIS。
- dateModified 与 sitemap 取自 src/config/content-meta.mjs，不在每次构建时虚增。
- workTranslation / translationOfWork 表达中英文版本关系。
- 删除 Person 上不适用的 areaServed；市场范围通过真实简介与 knowsAbout 表达。
- 个人站没有独立搜索、商品供应要约或企业实体，不添加相应的虚构 Schema。

## 维护方式

页面与 FAQ Schema 共用 src/data/copy.ts。改动后运行 pnpm build 与 pnpm seo:check。Schema 合法性和搜索展示资格分开判断；FAQPage 合法并不代表 Google 会显示 FAQ 富结果。

量表中 Article、Breadcrumb、SearchAction、speakable 等不适用于当前两个首页，不因缺少它们扣减个人档案完整性。本报告用可验证的通过结果替代泛站型分数。

依据：[Person](https://schema.org/Person)、[ProfilePage](https://schema.org/ProfilePage)、[FAQPage](https://schema.org/FAQPage)。
