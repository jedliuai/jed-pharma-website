# 搜索与 AI 平台后续计划

日期：2026-10-10。

| 平台 | 本站已完成 | 还需验证 |
|---|---|---|
| Google Search / AI 搜索 | 可抓取正文、双语元信息、个人实体和可见问答；已读取 Search Console 基线 | 提交 sitemap、申请两页收录并复查 |
| Bing / Copilot | 公开 sitemap、结构化数据；IndexNow 通知返回 202 | Bing Webmaster Tools 的实际抓取和收录 |
| ChatGPT 搜索 | OAI-SearchBot / ChatGPT-User 允许规则、可直接引用的正文 | 实际机器人访问与真实引用表现 |
| Perplexity | PerplexityBot 允许规则、自包含问答和身份链接 | 实际抓取、引用与站外可靠来源 |
| 其他 AI 系统 | SSR HTML、明晰的主题、辅助摘要 | 各系统是否使用本站及对应日志 |

HYPD.AI for Search Console 可读取授权资源的收录、sitemap、点击、展示、CTR、平均排名及查询/页面/国家/设备拆分。依据该插件的本地功能说明，它只读，不能提交 sitemap、申请收录、验证站点或改变内容。

本次已通过插件读取具有所有者权限的域名资源：中英文首页均返回“Google 无法识别此网址”，已提交 sitemap 列表为空；最近完整的 28 天统计窗口内，医药子域名没有返回页面表现数据行。当前应先在 Search Console 提交站点地图，并对两页进行实时测试、申请编入索引，再用插件复核处理结果。Google 搜索表现也不能等同于所有 AI 平台的引用率；如果未来接入 GA4，可另外观察 AI 引荐流量。

关于 Google AI 搜索，[官方指南](https://developers.google.com/search/docs/appearance/ai-features) 明确沿用基础 SEO，并不要求专用 AI 文件或额外 Schema。公开摘要保持正确与易读即可，不以增加文件数量作为优化效果。
