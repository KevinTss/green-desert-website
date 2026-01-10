"use client"

import { cn } from "@/lib/utils"
import { useState, useRef } from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { useIsTouchDevice } from "@/hooks/use-touch-device"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { Text as TypographyText } from "./typography"
import headerI18m from '@/content/i18n/en/header.json'

export interface NavigationMenuLinkProps {
  item: typeof headerI18m['nav'][0]
  variant?: "light" | "dark"
  onOpenChange: (open: boolean) => void
}

const getNavLink = ({ label, languageRoute }: { label: string, languageRoute: 'en' | 'ar-SA' }) => {
  switch (label) {
    case 'nav.about':
      return `/${languageRoute}/company`
    case 'nav.blog':
      return `/${languageRoute}/blog`
    case 'nav.solutions':
      return `/${languageRoute}/solutions`
    case 'nav.home':
      return `/${languageRoute}`
    default:
      return '#'
  }
}

export function NavigationMenuLink({ item, variant = "light", onOpenChange }: NavigationMenuLinkProps) {
  console.log(`Item: ${item.label}`, item)
  const { t, isRTL, languageRoute } = useLanguage()
  const isTouchDevice = useIsTouchDevice()
  const pathname = usePathname() || "/"

  const [open, setOpen] = useState(false)
  const openTimer = useRef<NodeJS.Timeout>(undefined)
  const closeTimer = useRef<NodeJS.Timeout>(undefined)

  const handleEnter = () => {
    if (isTouchDevice) return
    clearTimeout(closeTimer.current)
    openTimer.current = setTimeout(() => handleDropdownChange(true), 10)
  }
  const handleLeave = () => {
    if (isTouchDevice) return
    clearTimeout(openTimer.current)
    closeTimer.current = setTimeout(() => handleDropdownChange(false), 10)
  }

  const routeActiveForLabel = (lbl: string) => {
    switch (lbl) {
      case 'nav.about':
        return (
          pathname.startsWith(`/${languageRoute}/company`) ||
          pathname.startsWith(`/${languageRoute}/team`) ||
          pathname.startsWith(`/${languageRoute}/sponsors`)
        )
      case 'nav.products':
        return pathname.startsWith(`/${languageRoute}/products`)
      case 'nav.solutions':
        return pathname.startsWith(`/${languageRoute}/solutions`)
      case 'nav.services':
        return pathname.startsWith(`/${languageRoute}/services`)
      case 'nav.blog':
        return pathname.startsWith(`/${languageRoute}/blog`)
      case 'nav.home':
        return pathname === `/${languageRoute}` || pathname === `/${languageRoute}/`
      default:
        return false
    }
  }

  const isDarkVariant = variant === "dark"

  const baseLinkClasses = cn(
    "transition-colors duration-300 rounded-full px-5 py-2 text-[13px] font-medium",
    isDarkVariant
      ? "text-white/85 hover:bg-white/10 focus-visible:bg-white/15"
      : "text-gray-700 hover:bg-gray-100 focus-visible:bg-gray-100"
  )

  const activeLinkClasses = isDarkVariant
    ? "bg-white/20 text-white"
    : "bg-gray-200 text-gray-900"

  if (!!item && !item.subItems) {
    const isActive = routeActiveForLabel(item.label)
    return (
      <Link
        href={getNavLink({ label: item.label, languageRoute })}
        className={cn(
          baseLinkClasses,
          isActive && activeLinkClasses
        )}
      >
        {item.label}
      </Link>
    )
  }

  const dropdownWrapperClasses = isDarkVariant
    ? "bg-slate-950/90 backdrop-blur-md border-b border-gray-800"
    : "bg-white border-b border-gray-200"

  const dropdownTextClasses = isDarkVariant ? "text-white" : "text-gray-900"
  const dropdownMutedText = isDarkVariant ? "text-white/70" : "text-gray-600"
  const dropdownCtaClasses = isDarkVariant
    ? "inline-flex gap-3 rounded-full border border-white/20 pl-5 pr-4 py-2 text-[13px] font-semibold text-white/90 transition-colors duration-200 hover:bg-white/10"
    : "inline-flex gap-3 rounded-full border border-gray-100 pl-5 pr-4 py-2 text-[13px] font-semibold text-gray-600 transition-colors duration-200 hover:bg-gray-50"

  const chevronColor = isDarkVariant ? "text-white/70" : "text-gray-600"

  const handleDropdownChange = (nextOpen: boolean) => {
    setOpen(nextOpen)
    onOpenChange(nextOpen)
  }

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
          href={getNavLink({ label: item.label, languageRoute })}
          className={cn(
            "flex items-center gap-2 cursor-pointer outline-none relative",
            baseLinkClasses,
            open && activeLinkClasses
          )}
        >
          {item.label}
        </Link>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={16}
          className={cn(
            "z-50 w-screen max-w-none rounded-none",
            dropdownWrapperClasses,
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          )}
          onPointerEnter={handleEnter}
          onPointerLeave={handleLeave}
        >
          <div
            className="py-20 container mx-auto flex w-full gap-12 px-4"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div className="flex flex-col items-start gap-8 pr-10 sm:max-w-48 md:max-w-72 max-w-96 shrink-0">
              <TypographyText className={cn("text-base leading-normal", dropdownTextClasses)}>
                {item.lead && t(item.lead.label)}
              </TypographyText>
              {item.lead && (
                <Link
                  href={
                    item.lead.ctaHref.startsWith("/")
                      ? `/${languageRoute}${item.lead.ctaHref}`
                      : item.lead.ctaHref
                  }
                  className={dropdownCtaClasses}
                >
                  {t(item.lead.cta)}
                  <ChevronRight className={cn("w-4", chevronColor)} />
                </Link>
              )}
            </div>
            <div className="grid flex-1 min-w-0 grid-cols-3 gap-5">
              {item.subItems.map((subItem) => {
                const href = "href" in subItem
                  ? subItem.href.startsWith("/")
                    ? `/${languageRoute}${subItem.href}`
                    : subItem?.href
                  : "#"
                return (
                  <DropdownMenu.Item asChild key={subItem.label}>
                    <a
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
                          isDarkVariant ? "hover:text-white" : "hover:text-gray-900"
                        )}
                      >
                        {t("labels.learnMore")}
                      </span>
                    </a>
                  </DropdownMenu.Item>
                )
              })}
            </div>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
