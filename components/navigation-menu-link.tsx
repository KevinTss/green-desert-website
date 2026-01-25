"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useLanguage } from "./language-provider";
import { useIsTouchDevice } from "@/hooks/use-touch-device";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Text as TypographyText } from "./typography";
import headerI18m from "@/content/i18n/en/header.json";

export interface NavigationMenuLinkProps {
  item: (typeof headerI18m)["nav"][0];
  variant?: "light" | "dark";
  onOpenChange: (open: boolean) => void;
}

const resolveHref = ({
  href,
  label,
  languageRoute,
}: {
  href?: string;
  label: string;
  languageRoute: "en" | "ar-SA";
}) => {
  if (href) {
    if (href.startsWith("/")) return `/${languageRoute}${href}`;
    return href;
  }

  switch (label) {
    case "nav.about":
      return `/${languageRoute}/company`;
    case "nav.blog":
      return `/${languageRoute}/blog`;
    case "nav.solutions":
      return `/${languageRoute}/solutions`;
    case "nav.home":
      return `/${languageRoute}`;
    default:
      return "#";
  }
};

export function NavigationMenuLink({
  item,
  variant = "light",
  onOpenChange,
}: NavigationMenuLinkProps) {
  const { t, isRTL, languageRoute } = useLanguage();
  const isTouchDevice = useIsTouchDevice();
  const pathname = usePathname() || "/";

  const [open, setOpen] = useState(false);
  const openTimer = useRef<NodeJS.Timeout>(undefined);
  const closeTimer = useRef<NodeJS.Timeout>(undefined);

  const handleEnter = () => {
    if (isTouchDevice) return;
    clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => handleDropdownChange(true), 10);
  };
  const handleLeave = () => {
    if (isTouchDevice) return;
    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => handleDropdownChange(false), 10);
  };

  const routeActiveForItem = (lbl: string, href?: string) => {
    const resolved = resolveHref({ href, label: lbl, languageRoute });
    if (
      resolved.startsWith("http") ||
      resolved.startsWith("mailto:") ||
      resolved === "#"
    )
      return false;
    if (resolved === `/${languageRoute}` || resolved === `/${languageRoute}/`) {
      return (
        pathname === `/${languageRoute}` || pathname === `/${languageRoute}/`
      );
    }
    return pathname.startsWith(resolved);
  };

  const isDarkVariant = variant === "dark";

  const baseLinkClasses = cn(
    "transition-colors duration-300 rounded-full px-5 py-2 text-[13px] font-medium",
    isDarkVariant
      ? "text-white/85 hover:bg-white/10 focus-visible:bg-white/15"
      : "text-gray-700 hover:bg-gray-100 focus-visible:bg-gray-100",
  );

  const activeLinkClasses = isDarkVariant
    ? "bg-white/20 text-white"
    : "bg-gray-200 text-gray-900";

  // useEffect(() => {
  //   if (isTouchDevice) return
  //   const shouldOpen = routeActiveForItem(item.label, (item as any).href)
  //   setOpen(shouldOpen)
  //   onOpenChange(shouldOpen)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pathname, isTouchDevice, item.label])

  if (!!item && !item.subItems) {
    const href = resolveHref({
      href: (item as any).href,
      label: item.label,
      languageRoute,
    });
    const isActive = routeActiveForItem(item.label, (item as any).href);
    return (
      <Link
        href={href}
        className={cn(baseLinkClasses, isActive && activeLinkClasses)}
      >
        {item.label}
      </Link>
    );
  }

  const dropdownWrapperClasses = isDarkVariant
    ? "bg-slate-950/90 backdrop-blur-md border-b border-gray-800"
    : "bg-white border-b border-gray-200";

  const dropdownTextClasses = isDarkVariant ? "text-white" : "text-gray-900";
  const dropdownMutedText = isDarkVariant ? "text-white/70" : "text-gray-600";
  const dropdownCtaClasses = isDarkVariant
    ? "inline-flex gap-3 rounded-full border border-white/20 pl-5 pr-4 py-2 text-[13px] font-semibold text-white/90 transition-colors duration-200 hover:bg-white/10"
    : "inline-flex gap-3 rounded-full border border-gray-100 pl-5 pr-4 py-2 text-[13px] font-semibold text-gray-600 transition-colors duration-200 hover:bg-gray-50";

  const chevronColor = isDarkVariant ? "text-white/70" : "text-gray-600";

  const handleDropdownChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    onOpenChange(nextOpen);
  };

  return (
    <DropdownMenu.Root
      modal={false}
      open={open}
      onOpenChange={handleDropdownChange}
    >
      <DropdownMenu.Trigger
        asChild
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
      >
        <Link
          href={resolveHref({
            href: item.href,
            label: item.label,
            languageRoute,
          })}
          className={cn(
            "flex items-center gap-2 cursor-pointer outline-none relative",
            // baseLinkClasses,
            // open && activeLinkClasses,
          )}
        // style={{ background: "red" }}
        >
          <span
            className={cn(
              "outline-none relative",
              baseLinkClasses,
              open && activeLinkClasses,
            )}
          >
            {item.label}
          </span>
        </Link>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={16}
          className={cn(
            "z-50 w-screen max-w-none rounded-none",
            dropdownWrapperClasses,
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          )}
          onPointerEnter={handleEnter}
          onPointerLeave={handleLeave}
        >
          <div
            className="py-20 container mx-auto flex w-full gap-12 px-4"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div className="flex flex-col items-start gap-8 pr-10 sm:max-w-48 md:max-w-72 max-w-96 shrink-0">
              <TypographyText
                className={cn("text-base leading-normal", dropdownTextClasses)}
              >
                {item.lead && t(item.lead.label)}
              </TypographyText>
              {item.lead && (
                <Link
                  href={resolveHref({
                    href: item.lead.ctaHref,
                    label: item.label,
                    languageRoute,
                  })}
                  className={dropdownCtaClasses}
                >
                  {t(item.lead.cta)}
                  <ChevronRight className={cn("w-4", chevronColor)} />
                </Link>
              )}
            </div>
            <div className="grid flex-1 min-w-0 grid-cols-3 gap-5">
              {item.subItems.map((subItem) => {
                const href =
                  "href" in subItem && typeof subItem.href === "string"
                    ? resolveHref({
                        href: subItem.href,
                        label: subItem.label,
                        languageRoute,
                      })
                    : "#";
                return (
                  <DropdownMenu.Item asChild key={subItem.label}>
                    <Link
                      href={href}
                      className="flex flex-col justify-between transition-colors duration-200 outline-none"
                    >
                      <span className={cn("text-base font-semibold", dropdownTextClasses)}>
                        {t(subItem.label)}
                      </span>
                      <span className={cn("mt-1 text-[11px] leading-normal", dropdownMutedText)}>
                        {t(subItem.description)}
                      </span>
                      <span
                        className={cn(
                          "mt-1 inline-flex items-center gap-1 text-[11px] font-semibold transition-colors duration-200",
                          dropdownMutedText,
                          isDarkVariant ? "hover:text-white" : "hover:text-gray-900",
                        )}
                      >
                        {t("labels.learnMore")}
                      </span>
                    </Link>
                  </DropdownMenu.Item>
                );
              })}
            </div>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
