import type { Locale, RouteKey } from "@/config/site";

export const navLabels: Record<Locale, Record<RouteKey, string>> = {
  en: { home: "Home", expertise: "Expertise", markets: "Markets", projects: "Projects", about: "About", contact: "Contact" },
  zh: { home: "首页", expertise: "专业能力", markets: "市场经验", projects: "项目案例", about: "关于我", contact: "联系" }
};

export const seo: Record<Locale, Record<RouteKey, { title: string; description: string }>> = {
  en: {
    home: { title: "Jed Liu | Pharmaceutical International Business", description: "Pharmaceutical international business professional connecting market development, registration, quality coordination, execution and international delivery." },
    expertise: { title: "Expertise | Jed Liu", description: "International business development, pharmaceutical registration and quality coordination, project execution and international supply." },
    markets: { title: "Markets | Jed Liu", description: "Practical pharmaceutical project experience across Latin America, CIS and Eastern Europe." },
    projects: { title: "Selected Projects | Jed Liu", description: "Anonymized pharmaceutical international business cases across registration, manufacturing scope and delivery." },
    about: { title: "About Jed Liu | Pharmaceutical International Business", description: "Jed Liu's professional approach to moving complex pharmaceutical international projects forward." },
    contact: { title: "Contact Jed Liu | Discuss a Pharmaceutical Project", description: "Connect with Jed Liu through LinkedIn, email or WeChat." }
  },
  zh: {
    home: { title: "Jed Liu｜医药国际业务", description: "连接市场开发、注册与质量协调、项目执行和国际交付。" },
    expertise: { title: "专业能力｜Jed 医药国际业务", description: "医药国际业务开发、注册与质量协调、项目执行与国际供应。" },
    markets: { title: "市场经验｜Jed 医药国际业务", description: "拉丁美洲、独联体及东欧市场的医药项目实践。" },
    projects: { title: "匿名项目案例｜Jed 医药国际业务", description: "涵盖注册补件、生产范围澄清和多订单交付的匿名案例。" },
    about: { title: "关于 Jed Liu｜医药国际业务", description: "Jed Liu 的职业经历、工作原则与系统化项目方法。" },
    contact: { title: "联系 Jed Liu｜沟通医药国际项目", description: "通过 LinkedIn、邮件或微信与 Jed Liu 建立联系。" }
  }
};

export const common = {
  en: {
    eyebrow: "PHARMACEUTICAL INTERNATIONAL BUSINESS", primaryCta: "Discuss a Project", secondaryCta: "See how I work", linkedinCta: "Connect on LinkedIn",
    language: "中文", menu: "Menu", openMenu: "Open menu", closeMenu: "Close menu", mainNavigation: "Primary navigation", footerNavigation: "Footer navigation", contactChannels: "Direct channels",
    metricsNote: "Anonymized personal working records. Not an employer disclosure.", selectedProjects: "Selected projects", viewAll: "View all projects",
    contactTitle: "Ready to move a project forward?", contactBody: "Share the market, product context and current bottleneck. I will respond through the channel you choose.",
    footerNote: "Pharmaceutical international business, from registration to delivery.", disclaimer: "Product, regulatory and commercial information requires project-specific formal confirmation.",
    wechatTitle: "Connect on WeChat", wechatBody: "Scan the contact card and include a short note about your project.", close: "Close dialog"
  },
  zh: {
    eyebrow: "医药国际业务", primaryCta: "沟通项目", secondaryCta: "看我如何工作", linkedinCta: "通过 LinkedIn 联系",
    language: "EN", menu: "菜单", openMenu: "打开菜单", closeMenu: "关闭菜单", mainNavigation: "主导航", footerNavigation: "页尾导航", contactChannels: "直接联系方式",
    metricsNote: "数据来自个人脱敏工作记录，不代表任何雇主承诺。", selectedProjects: "精选项目", viewAll: "查看全部案例",
    contactTitle: "准备好推动一个项目了吗？", contactBody: "可以先告诉我目标市场、产品背景和当前卡点，我会通过你选择的渠道回复。",
    footerNote: "医药国际业务，从注册到交付。", disclaimer: "产品、注册和商务信息均需针对具体项目正式确认。",
    wechatTitle: "微信联系", wechatBody: "扫描联系卡，并简单备注项目背景。", close: "关闭弹窗"
  }
} as const;

export const home = {
  en: {
    heroTitle: "Jed Liu", heroLead: "From registration to delivery, I move pharmaceutical projects forward.", heroCaption: "International business · Registration & quality · Execution & supply",
    capabilitiesTitle: "One connected system for complex international projects.", capabilitiesLead: "Commercial opportunity only becomes valuable when registration, quality, manufacturing and delivery move together.",
    capabilities: [
      ["International Business", "Evaluate markets, partners and product opportunities, then align a practical entry path."],
      ["Registration & Quality", "Coordinate requirements, technical inputs and quality documentation across teams."],
      ["Execution & Supply", "Connect manufacturing, documentation, logistics and follow-up around shared milestones."]
    ],
    methodKicker: "HOW PROJECTS MOVE", methodTitle: "Six stages. One visible working path.",
    process: [
      ["Define objective", "Clarify purpose, product context, target markets and success criteria."],
      ["Market & feasibility", "Assess opportunity, partner readiness and the conditions needed to move."],
      ["Registration strategy", "Map requirements, documentation dependencies and technical questions."],
      ["Execution & coordination", "Connect commercial, regulatory, quality and manufacturing owners."],
      ["Delivery & submission", "Bring product readiness, documents, logistics and handover together."],
      ["Closeout & follow-up", "Resolve remaining actions, archive decisions and carry learning forward."]
    ],
    marketsKicker: "MARKET CONTEXT", marketsTitle: "Experience shaped by different market realities.", marketsLead: "Latin America, CIS and Eastern Europe require different routes, expectations and rhythms—but the same execution discipline.",
    casesTitle: "Selected anonymized projects", aiTitle: "AI supports the work. It does not replace professional judgment.", aiLead: "I use AI to research, structure information, maintain working records and improve follow-up—with human review at every meaningful decision.",
    aiItems: ["Research & compare", "Structure & track", "Draft & review"], faqTitle: "Working principles", faq: [
      ["What can be discussed publicly?", "Only anonymized context. Employer, client, price, batch, payment and non-public regulatory information remain private."],
      ["What does the data represent?", "The figures are personal anonymized working records, not an employer statement or forward-looking promise."],
      ["How does a first conversation work?", "Share the market, product context and current bottleneck. Project specifics can follow through a direct channel."]
    ]
  },
  zh: {
    heroTitle: "Jed Liu", heroLead: "从注册到交付，我推动医药国际项目持续向前。", heroCaption: "国际业务 · 注册与质量 · 执行与供应",
    capabilitiesTitle: "一套连接复杂国际项目的工作系统。", capabilitiesLead: "当市场机会与注册、质量、生产和交付同步推进，商业价值才能真正落地。",
    capabilities: [
      ["医药国际业务", "评估市场、伙伴和产品机会，对齐可执行的进入路径。"],
      ["注册与质量", "协调注册要求、技术输入和质量文件，让团队保持一致。"],
      ["执行与供应", "围绕共同里程碑串联生产、文件、物流和后续行动。"]
    ],
    methodKicker: "项目如何推进", methodTitle: "六个阶段，一条可视的工作路径。",
    process: [
      ["明确目标", "澄清项目目的、产品背景、目标市场和成功标准。"],
      ["市场与可行性", "评估机会、伙伴准备度和项目推进所需的现实条件。"],
      ["注册策略", "梳理要求、文件依赖和关键技术问题。"],
      ["执行与协调", "连接商务、注册、质量和生产负责人。"],
      ["交付与申报", "将产品准备、文件、物流和交接聚合到一起。"],
      ["收尾与跟进", "处理剩余行动、归档决策，并将经验带入下一轮。"]
    ],
    marketsKicker: "市场语境", marketsTitle: "在不同市场现实中形成的经验。", marketsLead: "拉丁美洲、独联体和东欧拥有不同的路径、预期与节奏，但都需要一致的执行纪律。",
    casesTitle: "精选匿名项目", aiTitle: "AI 支持工作，但不取代专业判断。", aiLead: "我使用 AI 辅助研究、结构化信息、维护工作记录和改进跟进，重要决策始终经过人工审核。",
    aiItems: ["研究与对比", "结构化与跟踪", "起草与审核"], faqTitle: "工作原则", faq: [
      ["哪些内容可以公开讨论？", "仅讨论脱敏后的项目语境。雇主、客户、价格、批次、付款和未公开注册信息始终保密。"],
      ["页面数据代表什么？", "这些数据来自个人脱敏工作记录，不代表雇主声明或未来承诺。"],
      ["第一次沟通需要什么？", "可以先分享目标市场、产品背景和当前卡点，具体信息可在直接渠道中继续。"]
    ]
  }
} as const;

export const expertise = {
  en: { kicker: "EXPERTISE", title: "The work between opportunity and delivery.", lead: "I connect commercial goals with registration requirements, technical decisions, manufacturing readiness and international supply.", areas: home.en.capabilities, chainTitle: "Every handoff stays visible.", chain: ["Objective & fit", "Registration route", "Technical package", "Artwork & readiness", "Production", "Quality release", "Shipping documents", "Handover & archive"], productsTitle: "Product experience as working context", productsLead: "These categories describe anonymized experience, not a live catalogue or supply offer.", groups: [["Sterile & injectable forms", "Coordination context around sterile powders, injectable solutions and their documentation."], ["Oral & inhalation forms", "Tablets, capsules, soft capsules and inhalation aerosols, including dosage-form-specific considerations."], ["Active ingredients", "Technical packages, quality documents, sample readiness and feasibility questions."]] },
  zh: { kicker: "专业能力", title: "从机会到交付之间的关键工作。", lead: "我连接商业目标、注册要求、技术决策、生产准备和国际供应。", areas: home.zh.capabilities, chainTitle: "让每次交接都清晰可见。", chain: ["目标与匹配", "注册路径", "技术资料", "包装稿与准备", "生产", "质量放行", "运输文件", "交接与归档"], productsTitle: "作为工作语境的产品经验", productsLead: "以下类别来自脱敏经验，并非实时产品目录或供应要约。", groups: [["无菌与注射剂型", "涵盖无菌粉末、注射液及相关文件的协调语境。"], ["口服与吸入剂型", "包括片剂、胶囊、软胶囊和吸入气雾剂等剂型。"], ["原料药", "涵盖技术资料、质量文件、样品准备和可行性问题。"]] }
} as const;

export const markets = {
  en: { kicker: "MARKETS", title: "Regional experience, grounded in project reality.", lead: "Market access is never just a map. It is the interaction of local requirements, partner context and execution readiness.", regions: [["Latin America", "LATAM", "Partner communication, registration routes and long-cycle project coordination."], ["CIS & Eastern Europe", "CIS / EE", "Technical requirements, supply feasibility and sustainable market access."]], questions: ["What does the market require?", "What can the product and team support?", "Which dependencies control the timeline?"], note: "Regions indicate anonymized personal working experience, not current product availability." },
  zh: { kicker: "市场经验", title: "扎根于项目现实的区域经验。", lead: "市场准入不只是一张地图，而是当地要求、合作方语境和执行准备度的交汇。", regions: [["拉丁美洲", "LATAM", "合作方沟通、注册路径与长周期项目协调。"], ["独联体与东欧", "CIS / EE", "技术要求、供应可行性与可持续市场准入。"]], questions: ["市场真正需要什么？", "产品和团队能够支持什么？", "哪些依赖关系决定时间线？"], note: "区域表示个人脱敏工作经验，不代表当前产品可供状态。" }
} as const;

export const projects = {
  en: { kicker: "SELECTED PROJECTS", title: "Anonymized cases, focused on the work.", lead: "Each case shows the coordination problem, the role I played and the capability it demonstrates—without exposing commercial or regulatory details.", basis: "These cases are reconstructed from anonymized personal records. They do not identify an employer, client, product or authority decision.", situation: "Situation", role: "Coordination", demonstrates: "Demonstrates", privacy: "No employer, client, contract, batch, price, payment or non-public registration information is disclosed." },
  zh: { kicker: "精选项目", title: "关注工作本身的匿名案例。", lead: "每个案例展示协调问题、我承担的角色和所体现的能力，不暴露商务或注册细节。", basis: "案例根据个人脱敏记录重构，不标识雇主、客户、产品或监管决定。", situation: "项目背景", role: "协调工作", demonstrates: "体现能力", privacy: "不披露雇主、客户、合同、批次、价格、付款或未公开注册信息。" }
} as const;

export const about = {
  en: { kicker: "ABOUT", title: "I am interested in how complicated systems actually work.", lead: "My role sits between opportunity and execution—where commercial, regulatory, technical and operational decisions must stay connected.", story: ["I work on pharmaceutical international projects that rarely follow a straight line. Progress depends on understanding the market, asking precise questions and keeping multiple teams aligned.", "I value clear working records, visible ownership and practical decisions. The goal is not activity for its own sake; it is a project that can keep moving."], timelineTitle: "A role shaped by increasing project complexity", timeline: [["International business", "Learning markets, partners and product opportunity."], ["Registration coordination", "Connecting external requirements with internal technical owners."], ["Execution systems", "Making milestones, decisions and dependencies visible."], ["AI-supported method", "Using tools to research, structure and follow up more effectively."]], principlesTitle: "How I prefer to work", principles: [["Clarify before accelerating", "A clear objective prevents activity from becoming noise."], ["Keep handoffs visible", "Owners, dependencies and decisions should be easy to find."], ["Close the loop", "A project is not finished until remaining actions and records are clear."]], aiTitle: "Technology belongs inside the method.", aiBody: "AI helps me research, structure and maintain momentum. Professional judgment and human review remain central." },
  zh: { kicker: "关于我", title: "我始终关注复杂系统究竟如何真正运作。", lead: "我的工作位于机会与执行之间，需要让商务、注册、技术和运营决策持续连接。", story: ["我参与的医药国际项目很少沿着直线推进。项目进展依赖于理解市场、提出精准问题，并让多个团队保持对齐。", "我重视清晰的工作记录、可见的责任与务实的决策。目标不是制造忙碌，而是让项目持续向前。"], timelineTitle: "随项目复杂度不断成长的角色", timeline: [["国际业务", "理解市场、合作方和产品机会。"], ["注册协调", "将外部要求与内部技术负责人连接。"], ["执行系统", "让里程碑、决策和依赖关系可见。"], ["AI 支持的方法", "使用工具更有效地研究、结构化和跟进。"]], principlesTitle: "我偏好的工作方式", principles: [["先澄清，再加速", "清晰目标能避免行动变成噪音。"], ["让交接可见", "负责人、依赖和决策应该容易查找。"], ["完成闭环", "只有剩余行动和记录都清晰，项目才算完成。"]], aiTitle: "技术应该融入方法。", aiBody: "AI 帮助我研究、结构化并维持项目动量，专业判断与人工审核始终居于中心。" }
} as const;

export const contact = {
  en: { kicker: "CONTACT", title: "Start with the project context.", lead: "LinkedIn and email are the fastest ways to reach me. WeChat is available through the contact card.", promptTitle: "A useful first message includes", prompts: ["Target market or region", "Product or dosage-form context", "Current question or bottleneck"], responseTitle: "Choose a direct channel", note: "Please do not send confidential dossiers, contracts, patient data, prices or payment information in a first message." },
  zh: { kicker: "联系", title: "从项目背景开始。", lead: "LinkedIn 和邮件是联系我的最快方式，也可通过联系卡添加微信。", promptTitle: "一条有效的首次消息可以包括", prompts: ["目标市场或区域", "产品或剂型背景", "当前问题或项目卡点"], responseTitle: "选择直接联系渠道", note: "首次消息请勿发送保密申报资料、合同、患者数据、价格或付款信息。" }
} as const;
