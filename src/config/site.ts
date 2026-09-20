import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Universal Language",
  description: "Modern, scalable enterprise web application built with Next.js App Router and TypeScript.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/images/hero.webp",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
};
