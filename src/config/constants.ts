import { NavItem } from "@/types";

export const MAIN_NAV_ITEMS: NavItem[] = [
  { title: "HOME", href: "/" },
  { title: "SERVICES", href: "/services" },
  { title: "ABOUT US", href: "/about" },
  { title: "SUCCESS STORIES", href: "/success-stories" },
  { title: "HOW IT WORKS", href: "/how-it-works" },
  { title: "FAQ", href: "/faq" },
  { title: "CONTACT", href: "/contact" },
];

export const AUTH_NAV_ITEMS: NavItem[] = [
  { title: "Login", href: "/login" },
  { title: "Register", href: "/register" },
];

export const APP_CONSTANTS = {
  DEFAULT_PAGE_LIMIT: 10,
  MAX_UPLOAD_SIZE: 5 * 1024 * 1024, // 5MB
  DEBOUNCE_DELAY: 400,
  THEME_STORAGE_KEY: "app-theme",
} as const;
