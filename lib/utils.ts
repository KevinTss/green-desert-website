import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isExternalHref = (href?: string) =>
  !!href &&
  (/^(https?:)?\/\//.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:"))
