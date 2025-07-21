"use client"

import Image from "next/image"
import { Menu, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
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

interface MobileMenuProps {
  isScrolled?: boolean
  aboutMenuItems?: SubMenuItem[]
  productsMenuItems?: SubMenuItem[]
}

export function MobileMenu({
  isScrolled = false,
  aboutMenuItems = [],
  productsMenuItems = []
}: MobileMenuProps) {
  const { t, isRTL, language, setLanguage } = useLanguage()
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)


  const toggleMenu = (menuName: string) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={clsx(
            "md:hidden p-2 transition-colors duration-300 hover:text-green-600",
            isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
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
                href="#"
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
                        href={item.href}
                        className="block py-3 px-4 text-lg text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-all duration-200"
                      >
                        {t(item.title)}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Menu */}
              <div className="rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleMenu('products')}
                  className={`w-full py-4 px-4 hover:bg-green-50 rounded-lg transition-all duration-200 ${expandedMenu === 'products' ? 'bg-green-50' : ''
                    }`}
                >
                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xl font-medium text-gray-900 hover:text-green-600">
                      {t("nav.products")}
                    </span>
                    {expandedMenu === 'products' ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {expandedMenu === 'products' && (
                  <div className={`mt-2 ${isRTL ? 'mr-4' : 'ml-4'} space-y-1`}>
                    {productsMenuItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block py-3 px-4 text-lg text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-all duration-200"
                      >
                        {t(item.title)}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#"
                className="block py-4 px-4 text-xl font-medium text-gray-900 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200"
              >
                {t("nav.services")}
              </a>

              <a
                href={`/${language === 'ar' ? 'ar-SA' : 'en'}/blog`}
                className="block py-4 px-4 text-xl font-medium text-gray-900 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200"
              >
                {t("nav.blog")}
              </a>
            </nav>

            {/* Footer Actions */}
            <div className="px-6 py-6 border-t border-gray-100">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-medium transition-colors rounded-lg">
                {t("header.contact")}
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
