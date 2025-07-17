"use client"

import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { clsx } from "clsx"

interface MobileMenuProps {
  isScrolled?: boolean
}

export function MobileMenu({ isScrolled = false }: MobileMenuProps) {
  const { t } = useLanguage()

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
      <SheetContent side="right" className="w-full max-w-sm p-0">
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <SheetHeader className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image
              src="/logo_GD_black_EN.png"
              alt="Green Desert Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <SheetClose asChild>
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
              </button>
            </SheetClose>
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

              <div className="py-4 px-4 hover:bg-green-50 rounded-lg transition-all duration-200">
                <div className="flex items-center justify-between">
                  <a href="#" className="text-xl font-medium text-gray-900 hover:text-green-600">
                    {t("nav.about")}
                  </a>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="py-4 px-4 hover:bg-green-50 rounded-lg transition-all duration-200">
                <div className="flex items-center justify-between">
                  <a href="#" className="text-xl font-medium text-gray-900 hover:text-green-600">
                    {t("nav.products")}
                  </a>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="py-4 px-4 hover:bg-green-50 rounded-lg transition-all duration-200">
                <div className="flex items-center justify-between">
                  <a href="#" className="text-xl font-medium text-gray-900 hover:text-green-600">
                    {t("nav.services")}
                  </a>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              <a
                href="#"
                className="block py-4 px-4 text-xl font-medium text-gray-900 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200"
              >
                {t("nav.news")}
              </a>

              <a
                href="#"
                className="block py-4 px-4 text-xl font-medium text-gray-900 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200"
              >
                {t("nav.contact")}
              </a>
            </nav>

            {/* Footer Actions */}
            <div className="px-6 py-6 border-t border-gray-100 space-y-4">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-medium transition-colors rounded-lg">
                {t("header.contact")}
              </Button>

              {/* Language Toggle */}
              <div className="flex items-center justify-center space-x-4">
                <span className="text-gray-500 text-sm">{t("header.language")}</span>
                <div className="flex bg-gray-100 rounded-full p-1">
                  <button className="px-3 py-1 rounded-full text-sm font-medium bg-white shadow-sm">
                    EN
                  </button>
                  <button className="px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                    AR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
