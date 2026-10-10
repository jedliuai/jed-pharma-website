# Jed 医药国际业务站：SEO 与 GEO 审计及整改

日期：2026-10-10。对象：https://pharma.jedliuai.com/ 与 /zh/。站点类型：个人职业档案；两个语言版本。

## 结论

网站已经有 Astro 静态输出、双语独立 URL、sitemap、canonical 和基础 Person 数据。最直接的问题是 Logo 图片构成的 H1 没有文本内容、可独立引用的问答较少，以及主站与医药站使用了两个不同的 Person 标识。

本次补上双语文本 H1、6 组公开问答、统一的个人实体图谱、内容修改日期、机器可读摘要和 IndexNow 提交能力。主题与数据都取自已有个人介绍，没有新增雇主、客户或未经证实的资历。

公开搜索未返回本站结果，但 site: 查询并不完整，不能单独据此断言未收录。随后通过 HYPD.AI 读取了已授权的 Search Console 域名资源：两页均返回“Google 无法识别此网址”，站点地图列表为空。当前应先完成页面发现与站点地图提交。总体 GEO 效果暂不作确定性打分；代码可抓取与被 AI 实际引用是两个不同的观测结果。

## 已完成的整改

| 项目 | 整改与作用 |
|---|---|
| 标题与描述 | 英文与中文分别描述医药国际业务、注册协调和项目交付 |
| H1 | 保留 Logo 视觉，同时提供可访问的专业身份文本 |
| 双语关联 | 两页自引用 canonical、互相 hreflang，以及翻译关系 |
| 个人身份 | 统一使用主站的 https://jedliuai.com/#person，并关联主站、LinkedIn、GitHub、电子名片 |
| 问答内容 | 新增 6 组直接说明工作、地区、产品经验、流程、AI 方法和合作边界的问答 |
| 结构化数据 | Person、WebSite、ProfilePage、FAQPage 服务端直出，问答共用同一份内容 |
| 日期 | 页面、ProfilePage 与 sitemap 使用同一个真实内容修改日期 |
| 抓取入口 | 保留公开 robots 规则，明确搜索型 AI 爬虫访问，维护 llms.txt 与 ai-summary.txt |
| 技术细节 | 增加 HSTS、图片缓存，补货轮装饰图片尺寸与异步解码 |
| 索引通知 | 部署验证文件并提供 pnpm indexnow；收到通知不等于已收录 |
| 持续检查 | pnpm seo:check 校验构建产物中的元信息、问答一致性、资源与内部链接 |

## 验证与局限

- Astro 构建与类型检查通过：0 errors、0 warnings、0 hints。
- 中英文页面的本地 SEO 检查通过。
- Schema.org Validator 对两个语言的完整 HTML 均返回 totalNumErrors=0、totalNumWarnings=0。
- 桌面英文与手机中文在浏览器中检查：H1 正确、各有 6 组问答、没有横向溢出，控制台没有错误。
- 原有轮船滚动逻辑未修改；FAQ 作为新增正文模块参与正常页面滚动。
- Core Web Vitals 的真实用户数据尚未取得；不把实验室检查当作实际排名。
- 品牌与平台历史观察来自上轮公开资料审计；没有将同名研究者、雇主或其他同名人士关联到本站。

## 正式站与 Search Console 实测

代码提交 3706ec3 已通过 Cloudflare 的 main 分支自动部署。正式域名的中英文页面均返回 200，标题、6 组可见问答、个人实体、canonical、hreflang 和 HSTS 均已核验；站点地图、辅助摘要和 IndexNow 验证文件也可正常读取。IndexNow 通知返回 HTTP 202，仅表示两页通知已接收，不代表收录。

2026-10-10，通过 HYPD.AI 查询已授权资源 sc-domain:jedliuai.com：

| 检查 | 实际返回 | 当前含义 |
|---|---|---|
| 英文首页 URL 检查 | Google 无法识别此网址；NEUTRAL | 没有可用的 Google 收录记录 |
| 中文首页 URL 检查 | Google 无法识别此网址；NEUTRAL | 同上，不是明确的 robots 拦截错误 |
| 已提交站点地图 | 空列表 | 该资源没有返回已提交的 sitemap 记录 |
| 2026-09-10 至 2026-10-07，web 搜索，限医药子域名 | 无页面数据行 | 此范围没有返回表现记录，不据此编造点击量或排名 |

该插件已连通并能读取数据，但只有只读能力。仍需在 Search Console 的“站点地图”中提交 https://pharma.jedliuai.com/sitemap-index.xml，并分别对两页做实时测试后申请编入索引。Google 何时处理、是否收录不能由代码或插件保证。

## 后续优先级

### 高优先级：验证与衡量

1. Google Search Console 的 jedliuai.com 域名资源已确认具有所有者权限。提交医药子域名的完整 sitemap 地址，并在 URL 检查中对两页实时测试、申请编入索引。
2. 在 Bing Webmaster Tools 验证同一网站，检查 sitemap 与抓取问题。
3. HYPD.AI for Search Console 已读取本轮收录基线。提交后再用它核验处理状态与搜索表现；该插件只读，不能提交 sitemap 或申请收录。

### 中优先级：让真实经历形成更多证据

1. 在 LinkedIn 的个人介绍与 Featured 区域加入医药站链接，并与站内专业身份保持一致。
2. 逐步发布经过本人核对的匿名项目复盘、资料交接清单、订单到交付的工作方法，标明作者与实际更新时间。
3. 涉及法规或行业数据时引用对应国家监管机构、官方统计或一手论文；避免把通用 SEO 文案包装成专业监管建议。
4. 有真实材料后再扩展案例与文章页面，按实际页面类型添加 Article 等 Schema。

### 低优先级：长期外部可验证性

积累真实的行业活动、合作方介绍、客座分享或署名文章。没有可靠独立资料时，不为了 SEO 创建百科条目、虚构奖项或堆积社交账号。

## 未来 30 天

- 第 1 周：验证 Google / Bing 资源，读取收录状态，处理实际抓取问题。
- 第 2 周：核对 LinkedIn 与网站的身份描述，发布一篇有价值的匿名工作方法。
- 第 3 周：根据真实查询与页面数据，优化标题和回答；优先处理有展示但点击率低的相关查询。
- 第 4 周：比较前后 28 天的搜索表现；如果有 GA4 数据，另行观察 AI 引荐流量。

## 当前规范依据

[Google AI features 指南](https://developers.google.com/search/docs/appearance/ai-features) 明确基础 SEO 同样适用于 AI 搜索，并没有专用 Schema 或 AI 文本文件的额外门槛。llms.txt 与 ai-summary.txt 是辅助材料，不能保证排名。

[Google 文档更新](https://developers.google.com/search/updates) 说明 FAQ 富结果于 2026 年停止展示。这里保留 [Schema.org FAQPage](https://schema.org/FAQPage) 来准确表达可见问答，不以搜索结果扩展展示作为验收标准。

[IndexNow 协议](https://www.indexnow.org/documentation) 的 200/202 表示收到通知；搜索引擎是否抓取与收录仍由其决定。

## 分类记录

- 技术：GEO-TECHNICAL-AUDIT.md
- 结构化数据：GEO-SCHEMA-REPORT.md
- 内容质量：GEO-CONTENT-ANALYSIS.md
- 可引用性：GEO-CITABILITY-SCORE.md
- 品牌：GEO-BRAND-MENTIONS.md
- 平台：GEO-PLATFORM-OPTIMIZATION.md
