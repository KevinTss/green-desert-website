"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

interface MobileMenuProps {
  isScrolled?: boolean
}

export function MobileMenu({ isScrolled = false }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`md:hidden p-2 transition-colors duration-300 hover:text-green-600 ${
          isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleMenu} />
          <div
            className={`fixed top-0 ${isRTL ? "right-0" : "left-0"} h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">GD</span>
                  </div>
                  <span className="text-xl font-bold text-gray-800">GREEN DESERT</span>
                </div>
                <button onClick={toggleMenu} className="p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-6">
                <a href="#" className="block text-lg text-gray-700 hover:text-green-600 transition-colors">
                  {t("nav.home")}
                </a>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-lg text-gray-700 hover:text-green-600 transition-colors">
                      {t("nav.about")}
                    </a>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-lg text-gray-700 hover:text-green-600 transition-colors">
                      {t("nav.products")}
                    </a>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-lg text-gray-700 hover:text-green-600 transition-colors">
                      {t("nav.services")}
                    </a>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <a href="#" className="block text-lg text-gray-700 hover:text-green-600 transition-colors">
                  {t("nav.news")}
                </a>
                <a href="#" className="block text-lg text-gray-700 hover:text-green-600 transition-colors">
                  {t("nav.contact")}
                </a>
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white mb-4 transition-colors">
                  {t("header.contact")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
