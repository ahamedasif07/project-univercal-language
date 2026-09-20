export * from "./api";
export * from "./blog";

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}
