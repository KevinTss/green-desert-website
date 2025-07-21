"use client"

import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import Link from "next/link"
import { useLanguage } from "./language-provider"

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

const getNavLink = ({ label, language }: { label: string, language: string }) => {
  const languageRoute = language === 'ar' ? 'ar-SA' : 'en'
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
  const { t, isRTL, language } = useLanguage()
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuItem | null>(
    subMenuItems?.[0] || null
  )

  // 1️⃣ make the menu controlled
  const [open, setOpen] = useState(false)
  const openTimer = useRef<NodeJS.Timeout>(undefined)
  const closeTimer = useRef<NodeJS.Timeout>(undefined)

  const handleEnter = () => {
    clearTimeout(closeTimer.current)
    openTimer.current = setTimeout(() => setOpen(true), 40)
  }
  const handleLeave = () => {
    clearTimeout(openTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  if (!subMenuItems) return (
    <Link
      href={getNavLink({ label, language })}
      className={`transition-colors duration-300 hover:text-green-600 ${isScrolled
        ? "text-gray-700"
        : "text-white/90 hover:text-white"
        }`}
    >
      {t(label)}
    </Link>
  )


  return (
    <DropdownMenu.Root
      modal={false}            // keeps the page scrollable
      open={open}
      onOpenChange={setOpen}
    >
      <DropdownMenu.Trigger
        asChild
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
      >
        <div className={`flex items-center cursor-pointer ${isRTL ? "space-x-reverse space-x-1" : "space-x-1"}`}>
          <Link
            href={getNavLink({ label, language })}
            className={`transition-colors duration-300 hover:text-green-600 ${isScrolled
              ? "text-gray-700"
              : "text-white/90 hover:text-white"
              }`}
          >
            {t(label)}
          </Link>
          <ChevronDown
            className={`w-4 h-4 transition-colors duration-300 ${isScrolled ? "text-gray-500" : "text-white/70"
              }`}
          />
        </div>
      </DropdownMenu.Trigger>

      {/* 2️⃣ always portal the content so Popper uses the viewport  */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="start"
          sideOffset={10}
          // 3️⃣ let Popper push it back inside if it collides
          avoidCollisions
          collisionPadding={16}          // 16 px gutter on both sides
          collisionBoundary={document.documentElement}
          // 4️⃣ cap the physical width so it can actually fit
          className={cn(
            "z-50 rounded-lg border bg-white shadow-xl overflow-hidden",
            "w-screen max-w-lg sm:max-w-3xl",   // ← NEW
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          )}
          onPointerEnter={handleEnter}
          onPointerLeave={handleLeave}
        >

          <div className="flex">
            <div className={`w-1/3 p-6 border-gray-200 ${isRTL ? "border-l" : "border-r"}`}>
              <ul className="space-y-4">
                {subMenuItems.map((item) => (
                  <DropdownMenu.Item asChild key={item.title}>
                    <a
                      href={item.href}
                      className={`block text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md ${activeSubMenu?.title === item.title
                        ? "bg-green-50 text-green-600"
                        : "hover:bg-gray-50"
                        }`}
                      onMouseEnter={() => setActiveSubMenu(item)}
                    >
                      {t(item.title)}
                    </a>
                  </DropdownMenu.Item>
                ))}
              </ul>
            </div>
            <div className="w-2/3 bg-gray-50 p-6 flex items-center min-h-[300px]">
              <div className="w-full">
                {activeSubMenu && (
                  <motion.div
                    key={activeSubMenu.title} // Key for re-animating when activeSubMenu changes
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
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {t(activeSubMenu.title)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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
