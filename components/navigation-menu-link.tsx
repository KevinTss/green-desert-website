"use client"

import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { useIsTouchDevice } from "@/hooks/use-touch-device"
import { usePathname } from "next/navigation"

export interface SubMenuItem {
  title: string
  href: string
  image: string
  description: string
}

interface NavigationMenuLinkProps {
  label: string
  subMenuItems?: SubMenuItem[]
  isScrolled: boolean
}

const getNavLink = ({ label, languageRoute }: { label: string, languageRoute: 'en' | 'ar-SA' }) => {
  switch (label) {
    case 'nav.blog':
      return `/${languageRoute}/blog`
    case 'nav.home':
      return `/${languageRoute}`
    default:
      return '#'
  }
}

export function NavigationMenuLink({ label, subMenuItems, isScrolled }: NavigationMenuLinkProps) {
  const { t, isRTL, language, languageRoute } = useLanguage()
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuItem | null>(
    subMenuItems?.[0] || null
  )
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

  if (!subMenuItems) {
    const isActive = routeActiveForLabel(label)
    return (
      <Link
        href={getNavLink({ label, languageRoute })}
        className={cn(
          "transition-colors duration-300 rounded-full px-5 py-2 hover:bg-gray-100",
          isActive && "bg-gray-200",
          isScrolled
            ? "text-gray-700 hover:bg-gray-100"
            : "text-white/90 hover:text-white hover:bg-black/10",
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
            "flex items-center gap-2 cursor-pointer rounded-full px-5 py-2 transition-colors duration-300 outline-none",
            isScrolled
              ? "text-gray-700 hover:bg-gray-100"
              : "text-white/90 hover:text-white hover:bg-black/10",
            !isScrolled && open && "bg-black/10",
            isScrolled && open && "bg-gray-100"
          )}
        >
          {t(label)}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-colors duration-300 text-inherit",
            )}
          />
        </Link>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={16}
          className={cn(
            "z-50 w-screen max-w-none rounded-none",
            isScrolled
              ? "bg-white/65 backdrop-blur-md shadow-sm"
              : "bg-black/10 backdrop-blur-md",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          )}
          onPointerEnter={handleEnter}
          onPointerLeave={handleLeave}
        >
          <div className={cn(
            "flex px-7 md:px-10 lg:px-12 border-t-gray-300 border-t",
            isScrolled ? "border-t" : "border-t-white/30",
          )}>
            <div
              className={cn(
                "w-1/3 p-6",
                isRTL ? "border-l" : "border-r",
                isScrolled ? "border-gray-300" : "border-white/30"
              )}
            >
              <ul className="space-y-4">
                {subMenuItems.map((item) => {
                  const href = item.href.startsWith('/') ? `/${languageRoute}${item.href}` : item.href
                  return (
                  <DropdownMenu.Item asChild key={item.title}>
                    <a
                      href={href}
                      className={cn(
                        "block font-medium transition-colors duration-200 py-2 px-3 rounded-md outline-none",
                        isScrolled
                          ? "text-gray-700 hover:text-green-600"
                          : "text-white/90 hover:text-white",
                        activeSubMenu?.title === item.title
                          ? isScrolled
                            ? "bg-green-50 text-green-600"
                            : "bg-white/20 text-white"
                          : isScrolled
                            ? "hover:bg-gray-50"
                            : "hover:bg-white/10"
                      )}
                      onMouseEnter={() => setActiveSubMenu(item)}
                    >
                      {t(item.title)}
                    </a>
                  </DropdownMenu.Item>
                )})}
              </ul>
            </div>
            <div className={cn("w-2/3 p-6 flex items-center min-h-[300px]")}>
              <div className="w-full">
                {activeSubMenu && (
                  <motion.div
                    key={activeSubMenu.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center ${isRTL ? "space-x-reverse space-x-6" : "space-x-6"}`}
                  >
                    <Image
                      src={activeSubMenu.image}
                      alt={t(activeSubMenu.title)}
                      width={192}
                      height={192}
                      className="w-48 h-48 object-cover rounded-lg shadow-md"
                    />
                    <div className="flex-1">
                      <h3
                        className={cn(
                          "text-xl font-semibold mb-3",
                          isScrolled ? "text-gray-800" : "text-white"
                        )}
                      >
                        {t(activeSubMenu.title)}
                      </h3>
                      <p
                        className={cn(
                          "leading-relaxed",
                          isScrolled ? "text-gray-600" : "text-white/80"
                        )}
                      >
                        {t(activeSubMenu.description)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
