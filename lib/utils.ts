import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isExternalHref = (href?: string) =>
  !!href &&
  (/^(https?:)?\/\//.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:"));

export const formatHref = (href?: string, languageRoute?: string) => {
    if (!href) return "#";
    if (href.startsWith("#")) return href;
    if (isExternalHref(href)) return href;
    return href.startsWith("/") ? `/${languageRoute}${href}` : href;
  };

export const formatDate = (dateString: string, isArabic: boolean) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString(isArabic ? "ar-SA" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
