export type Locale = "en" | "zh";

export type Metric = {
  value: string;
  amount: number;
  suffix: string;
  label: Record<Locale, string>;
};

export type ContactChannel = {
  id: "linkedin" | "email" | "whatsapp" | "wechat" | "card";
  label: Record<Locale, string>;
  value: string;
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
  phone: "+86 176 8640 3091",
  whatsapp: "https://wa.me/8617686403091",
  linkedin: "https://www.linkedin.com/in/jed-liu-%F0%9F%92%8A-809039169/",
  contactCard: "https://card.jedliuai.com",
  quoteTool: "https://quote.jedliuai.com",
  location: {
    en: "China · Working internationally",
    zh: "中国 · 面向国际市场"
  },
  portrait: "/brand/jed-portrait.webp",
  logo: "/brand/jed-logo-transparent.png",
  wechatCard: "/brand/jed-wechat-card.jpg"
} as const;

export const metrics: Metric[] = [
  { value: "5+", amount: 5, suffix: "+", label: { en: "Years in pharmaceutical international business", zh: "年医药国际业务经验" } },
  { value: "50+", amount: 50, suffix: "+", label: { en: "Customer accounts managed", zh: "客户账户管理经验" } },
  { value: "10+", amount: 10, suffix: "+", label: { en: "International markets", zh: "国际市场经验" } },
  { value: "US$32M+", amount: 32, suffix: "M+", label: { en: "Contract value managed", zh: "经手管理合同金额" } },
  { value: "80+", amount: 80, suffix: "+", label: { en: "Finished dosage forms & APIs", zh: "制剂与原料药产品经验" } }
];

export const contacts: ContactChannel[] = [
  { id: "linkedin", label: { en: "LinkedIn", zh: "LinkedIn" }, value: "Connect professionally", href: site.linkedin, external: true },
  { id: "email", label: { en: "Email", zh: "邮箱" }, value: site.email, href: `mailto:${site.email}` },
  { id: "whatsapp", label: { en: "WhatsApp", zh: "WhatsApp" }, value: site.phone, href: site.whatsapp, external: true },
  { id: "wechat", label: { en: "WeChat contact card", zh: "微信联系卡" }, value: site.phone, dialog: true },
  { id: "card", label: { en: "Contact Card", zh: "超级名片" }, value: "card.jedliuai.com", href: site.contactCard, external: true }
];

export const routeMap = { home: { en: "/", zh: "/zh/" } } as const;
export const alternatePath = (_path: string, locale: Locale) => routeMap.home[locale];
