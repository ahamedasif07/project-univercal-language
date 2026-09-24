import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Universal Language",
  description:
    "Premier Pearson PTE Academic, German & foreign language coaching in Dhaka, Bangladesh. Official Pearson exam voucher booking and Alfa PTE AI practice portal.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://universallanguage.com.bd",
  ogImage: "/images/hero.webp",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
};
