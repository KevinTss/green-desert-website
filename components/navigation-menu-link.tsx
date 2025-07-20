"use client"

import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

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

export function NavigationMenuLink({
  label,
  subMenuItems,
  isScrolled,
}: NavigationMenuLinkProps) {
  const { t, isRTL } = useLanguage()
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuItem | null>(
    subMenuItems?.[0] || null
  )
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  const handleMouseEnter = () => {
    if (subMenuItems) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsMenuVisible(true)
    }
  }

  const handleMouseLeave = () => {
    if (subMenuItems) {
      timeoutRef.current = setTimeout(() => {
        setIsMenuVisible(false)
      }, 150)
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex items-center cursor-pointer ${isRTL ? "space-x-reverse space-x-1" : "space-x-1"}`}>
        <a
          href="#"
          className={`transition-colors duration-300 hover:text-green-600 ${isScrolled
            ? "text-gray-700"
            : "text-white/90 hover:text-white"
            }`}
        >
          {t(label)}
        </a>
        {subMenuItems && (
          <ChevronDown
            className={`w-4 h-4 transition-colors duration-300 ${isScrolled ? "text-gray-500" : "text-white/70"
              }`}
          />
        )}
      </div>

      {subMenuItems && (
        <div
          className={`absolute top-full w-screen max-w-4xl z-50 transition-all duration-300 ease-in-out ${isRTL
            ? "right-0 translate-x-10"
            : "left-0 -translate-x-10"
            } ${isMenuVisible
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
        >
          <div className="mt-4 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            <div className="flex">
              <div className={`w-1/3 p-6 border-gray-200 ${isRTL ? "border-l" : "border-r"}`}>
                <ul className="space-y-4">
                  {subMenuItems.map((item) => (
                    <li key={item.title}>
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
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-2/3 bg-gray-50 p-6 flex items-center min-h-[300px]">
                <div className="w-full">
                  {activeSubMenu && (
                    <div className={`flex items-center opacity-0 animate-fade-in ${isRTL ? "space-x-reverse space-x-6" : "space-x-6"}`}>
                      <img
                        src={activeSubMenu.image}
                        alt={t(activeSubMenu.title)}
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
