export * from "./api";
export * from "./blog";

export interface NavSubItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  color?: "blue" | "maroon" | "green" | "default";
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  children?: NavSubItem[];
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
