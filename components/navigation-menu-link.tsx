"use client"

import { cn } from "@/lib/utils"
import { useState, useRef } from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { useIsTouchDevice } from "@/hooks/use-touch-device"
import { usePathname } from "next/navigation"
import { ChevronRight, CornerRightDown } from "lucide-react"

export interface SubMenuItem {
  title: string
  href: string
  description: string
  image?: string
}

export interface NavigationMenuLinkProps {
  label: string
  subMenuItems: SubMenuItem[]
  subMenuLead?: {
    lead: string
    cta: string
    ctaHref: string
  }
}

const getNavLink = ({ label, languageRoute }: { label: string, languageRoute: 'en' | 'ar-SA' }) => {
  switch (label) {
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

export function NavigationMenuLink({ label, subMenuItems, subMenuLead }: NavigationMenuLinkProps) {
  const { t, isRTL, languageRoute } = useLanguage()
  const isTouchDevice = useIsTouchDevice()
  const pathname = usePathname() || "/"

  const [open, setOpen] = useState(false)
  const openTimer = useRef<NodeJS.Timeout>(undefined)
  const closeTimer = useRef<NodeJS.Timeout>(undefined)

  const handleEnter = () => {
    if (isTouchDevice) return
    clearTimeout(closeTimer.current)
    openTimer.current = setTimeout(() => setOpen(true), 40)
  }
  const handleLeave = () => {
    if (isTouchDevice) return
    clearTimeout(openTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 120)
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

  if (!subMenuItems.length) {
    const isActive = routeActiveForLabel(label)
    return (
      <Link
        href={getNavLink({ label, languageRoute })}
        className={cn(
          "transition-colors duration-300 rounded-full px-5 py-2 hover:bg-gray-100 text-gray-700",
          isActive && "bg-gray-200"
        )}
      >
        {t(label)}
      </Link>
    )
  }

  return (
    <DropdownMenu.Root
      modal={false}
      open={open}
      onOpenChange={setOpen}
    >
      <DropdownMenu.Trigger
        asChild
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
      >
        <Link
          href={getNavLink({ label, languageRoute })}
          className={cn(
            "flex items-center gap-2 cursor-pointer rounded-full px-5 py-2 transition-colors duration-300 outline-none relative text-gray-700 hover:bg-gray-100",
            open && "bg-gray-100"
          )}
        >
          {t(label)}
        </Link>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={16}
          className={cn(
            "z-50 w-screen max-w-none rounded-none bg-white",
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
              <p className="text-lg leading-relaxed text-gray-900">
                {subMenuLead && t(subMenuLead.lead)}
              </p>
              {subMenuLead && (
                <Link
                  href={
                    subMenuLead.ctaHref.startsWith("/")
                      ? `/${languageRoute}${subMenuLead.ctaHref}`
                      : subMenuLead.ctaHref
                  }
                  className="inline-flex gap-3 rounded-full border border-gray-100 pl-5 pr-4 py-2 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:bg-gray-50"
                >
                  {t(subMenuLead.cta)}
                  <ChevronRight className="w-4 text-gray-600" />
                </Link>
              )}
            </div>
            <div className="grid flex-1 min-w-0 grid-cols-3 gap-5">
              {subMenuItems.map((item) => {
                const href = item.href.startsWith("/")
                  ? `/${languageRoute}${item.href}`
                  : item.href
                return (
                  <DropdownMenu.Item asChild key={item.title}>
                    <a
                      href={href}
                      className="flex flex-col justify-between transition-colors duration-200 outline-none"
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        {t(item.title)}
                      </span>
                      <span className="mt-2 text-xs leading-relaxed text-gray-600">
                        {t(item.description)}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gray-600 transition-colors duration-200 hover:text-gray-900">
                        {t("nav.menu.learnMore")}
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
