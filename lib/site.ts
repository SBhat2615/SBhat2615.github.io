const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sbhat2615.github.io";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
