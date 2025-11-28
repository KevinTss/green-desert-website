"use client"

import Image from "next/image"
import { Menu, ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { getAssetPath } from "@/lib/assets"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { clsx } from "clsx"
import { useState } from "react"
import { SubMenuItem } from "./navigation-menu-link"
import { cn } from "@/lib/utils"
import { Text as TypographyText } from "./typography"

interface MobileMenuProps {
  aboutMenuItems?: SubMenuItem[]
  solutionsMenuItems?: SubMenuItem[]
  variant?: "light" | "dark"
}

export function MobileMenu({
  aboutMenuItems = [],
  solutionsMenuItems = [],
  variant = "light"
}: MobileMenuProps) {
  const { t, isRTL, language, languageRoute, setLanguage } = useLanguage()
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)


  const toggleMenu = (menuName: string) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={clsx(
            "md:hidden p-2 transition-colors duration-300",
            variant === "dark"
              ? "text-white hover:text-white/80"
              : "text-gray-700 hover:text-green-600"
          )}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side={isRTL ? "left" : "right"} className="w-full max-w-sm p-0">
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <SheetHeader className={`flex flex-row items-center justify-between p-6 border-b border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Image
              src={getAssetPath("/logo_GD_black_EN.png")}
              alt="Green Desert Logo"
              width={80}
              height={24}
              className="h-6 w-auto"
            />
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <SheetClose asChild>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                </button>
              </SheetClose>
              {/* Language Toggle */}
              <div className="flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${language === 'en' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
                    }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${language === 'ar' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
                    }`}
                >
                  AR
                </button>
              </div>
            </div>
          </SheetHeader>

          {/* Navigation Content */}
          <div className="flex flex-col flex-1">
            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8 space-y-2">
              <a
                href={`/${languageRoute}`}
                className="block py-4 px-4 text-xl font-medium text-gray-900 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200"
              >
                {t("nav.home")}
              </a>

              {/* About Menu */}
              <div className="rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleMenu('about')}
                  className={`w-full py-4 px-4 hover:bg-green-50 rounded-lg transition-all duration-200 ${expandedMenu === 'about' ? 'bg-green-50' : ''
                    }`}
                >
                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xl font-medium text-gray-900 hover:text-green-600">
                      {t("nav.about")}
                    </span>
                    {expandedMenu === 'about' ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {expandedMenu === 'about' && (
                  <div className={`mt-2 ${isRTL ? 'mr-4' : 'ml-4'} space-y-1`}>
                    {aboutMenuItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href.startsWith('/') ? `/${languageRoute}${item.href}` : item.href}
                        className="block rounded-lg px-4 py-3 transition-all duration-200 hover:bg-green-50 hover:text-green-600"
                      >
                        <span className="text-lg font-medium text-gray-900">{t(item.title)}</span>
                        <TypographyText variant="muted" className="mt-1 text-sm">{t(item.description)}</TypographyText>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Menu */}
              <div className="rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleMenu('solutions')}
                  className={`w-full py-4 px-4 hover:bg-green-50 rounded-lg transition-all duration-200 ${expandedMenu === 'solutions' ? 'bg-green-50' : ''
                    }`}
                >
                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xl font-medium text-gray-900 hover:text-green-600">
                      {t("nav.solutions")}
                    </span>
                    {expandedMenu === 'solutions' ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {expandedMenu === 'solutions' && (
                  <div className={`mt-2 ${isRTL ? 'mr-4' : 'ml-4'} space-y-1`}>
                    {solutionsMenuItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href.startsWith('/') ? `/${languageRoute}${item.href}` : item.href}
                        className="block rounded-lg px-4 py-3 transition-all duration-200 hover:bg-green-50 hover:text-green-600"
                      >
                        <span className="text-lg font-medium text-gray-900">{t(item.title)}</span>
                        <TypographyText variant="muted" className="mt-1 text-sm">{t(item.description)}</TypographyText>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* <a
                href={`/${languageRoute}/services`}
                className="block py-4 px-4 text-xl font-medium text-gray-900 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200"
              >
                {t("nav.services")}
              </a> */}

              <a
                href={`/${languageRoute}/blog`}
                className="block py-4 px-4 text-xl font-medium text-gray-900 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200"
              >
                {t("nav.blog")}
              </a>
            </nav>

            {/* Footer Actions */}
            <div className="px-6 py-6 border-t border-gray-100">
              <button
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
                  "bg-gray-100 hover:bg-gray-200 text-gray-700"
                )}>
                {t("header.contact")}
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet >
  )
}
