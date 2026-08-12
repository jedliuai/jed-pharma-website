export type Locale = "en" | "zh";

export type Metric = {
  value: string;
  label: Record<Locale, string>;
};

export type ProjectCase = {
  id: string;
  number: string;
  title: Record<Locale, string>;
  situation: Record<Locale, string>;
  role: Record<Locale, string[]>;
  demonstrates: Record<Locale, string[]>;
};

export type ContactChannel = {
  id: "linkedin" | "email" | "wechat";
  label: Record<Locale, string>;
  value: Record<Locale, string>;
  href?: string;
  external?: boolean;
  dialog?: boolean;
};

export const designTokens = {
  warmIvory: "#EEEAE2",
  nearBlackBrown: "#2C2621",
  terracotta: "#D45D35",
  terracottaInk: "#A64227",
  cobalt: "#1F55B5"
} as const;

export const site = {
  name: "Jed Liu — Pharmaceutical International Business",
  nameZh: "Jed 医药国际业务",
  domain: "pharma.jedliuai.com",
  origin: "https://pharma.jedliuai.com",
  email: "jed@jedliuai.com",
  linkedin: "https://www.linkedin.com/in/jed-liu-%F0%9F%92%8A-809039169/",
  location: {
    en: "China · Working internationally",
    zh: "中国 · 面向国际市场"
  },
  portrait: "/brand/jed-portrait.webp",
  wordmarkLight: "/brand/jed-wordmark-light.png",
  wordmarkDark: "/brand/jed-wordmark-dark.jpg",
  wechatCard: "/brand/jed-wechat-card.jpg"
} as const;

export const metrics: Metric[] = [
  { value: "10+", label: { en: "Markets", zh: "国际市场" } },
  { value: "100+", label: { en: "Projects tracked", zh: "持续跟踪项目" } },
  { value: "70+", label: { en: "Pharmaceutical products", zh: "医药产品" } },
  { value: "Registration → Delivery", label: { en: "End-to-end project support", zh: "端到端项目支持" } }
];

export const contacts: ContactChannel[] = [
  {
    id: "linkedin",
    label: { en: "LinkedIn", zh: "LinkedIn" },
    value: { en: "Professional connection", zh: "专业交流与合作联系" },
    href: site.linkedin,
    external: true
  },
  {
    id: "email",
    label: { en: site.email, zh: site.email },
    value: { en: "Business email", zh: "商务邮件" },
    href: `mailto:${site.email}`
  },
  {
    id: "wechat",
    label: { en: "WeChat", zh: "微信" },
    value: { en: "Open contact card", zh: "打开微信联系卡" },
    dialog: true
  }
];

export const projectCases: ProjectCase[] = [
  {
    id: "registration-deficiency",
    number: "01",
    title: {
      en: "Registration deficiency coordination",
      zh: "注册补件协调"
    },
    situation: {
      en: "A registration project received repeated questions about impurity acceptance criteria and alignment with international standards.",
      zh: "某注册项目围绕杂质接受标准及其与国际标准的衔接，收到多轮技术问题。"
    },
    role: {
      en: [
        "Clarified the authority’s core concern",
        "Separated analytical-method questions from acceptance-criteria questions",
        "Aligned the overseas partner with regulatory and technical teams"
      ],
      zh: [
        "识别监管问题的核心关注点",
        "区分分析方法与接受标准问题",
        "协调海外伙伴、注册团队和技术团队"
      ]
    },
    demonstrates: {
      en: ["Regulatory communication", "Technical structuring", "Risk-based decisions"],
      zh: ["法规沟通", "技术问题结构化", "基于风险的判断"]
    }
  },
  {
    id: "manufacturing-scope",
    number: "02",
    title: {
      en: "Manufacturing scope clarification",
      zh: "生产与注册范围澄清"
    },
    situation: {
      en: "A regulatory review required a clearer explanation of manufacturing responsibilities and process steps across facilities.",
      zh: "某注册审评要求进一步说明不同生产场地之间的职责边界和关键工艺步骤。"
    },
    role: {
      en: [
        "Reconstructed the manufacturing flow",
        "Identified the precise regulatory concern",
        "Converted manufacturing language into a partner-facing explanation"
      ],
      zh: [
        "重新梳理生产流程",
        "定位监管关注的具体环节",
        "将生产语言转化为海外伙伴可理解的说明"
      ]
    },
    demonstrates: {
      en: ["Manufacturing understanding", "Regulatory-business translation", "Stakeholder alignment"],
      zh: ["生产项目理解", "法规与商务翻译", "多方协同"]
    }
  },
  {
    id: "multi-order-delivery",
    number: "03",
    title: {
      en: "Multi-order production and delivery",
      zh: "多订单生产与交付协同"
    },
    situation: {
      en: "Multiple products were moving through artwork, production, quality release, shipment and handover at different speeds.",
      zh: "多个产品和订单以不同节奏推进包装稿、生产、质量放行、发运与交接。"
    },
    role: {
      en: [
        "Tracked dependencies and schedule movement",
        "Connected artwork, production and release milestones",
        "Matched shipment timing with commercial readiness"
      ],
      zh: [
        "跟踪项目依赖与排期变化",
        "串联包装稿、生产与放行节点",
        "协调发运时间与商务条件"
      ]
    },
    demonstrates: {
      en: ["Execution discipline", "Order risk management", "Cross-functional coordination"],
      zh: ["执行纪律", "订单风险管理", "跨部门协同"]
    }
  }
];

export const routeMap = {
  home: { en: "/", zh: "/zh/" },
  expertise: { en: "/expertise/", zh: "/zh/expertise/" },
  markets: { en: "/markets/", zh: "/zh/markets/" },
  projects: { en: "/projects/", zh: "/zh/projects/" },
  about: { en: "/about/", zh: "/zh/about/" },
  contact: { en: "/contact/", zh: "/zh/contact/" }
} as const;

export type RouteKey = keyof typeof routeMap;

export const alternatePath = (path: string, locale: Locale) => {
  const route = Object.values(routeMap).find((entry) => entry.en === path || entry.zh === path);
  return route ? route[locale] : locale === "zh" ? "/zh/" : "/";
};
