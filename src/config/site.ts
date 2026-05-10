import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://sandipan.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Folio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const GITHUB_USERNAME = "sandipndev";

export const UTM_PARAMS = {
  utm_source: "sandipan.dev",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
