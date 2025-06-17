"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { MobileMenu } from "@/components/mobile-menu"

export function ScrollHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t, isRTL } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (100vh)
      const heroHeight = window.innerHeight
      const scrollPosition = window.scrollY

      // Header becomes solid when hero section is 80% scrolled
      setIsScrolled(scrollPosition > heroHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className={`flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
            <Image
              src={isScrolled ? "/logo_GD_black_EN.png" : "/logo_GD_white_home_EN.png"}
              alt="Green Desert Logo"
              width={150}
              height={40}
              className="h-8 w-auto transition-opacity duration-300"
              priority
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className={`transition-colors duration-300 hover:text-green-600 ${
                isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
              }`}
            >
              {t("nav.home")}
            </a>
            <div className="flex items-center space-x-1">
              <a
                href="#"
                className={`transition-colors duration-300 hover:text-green-600 ${
                  isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                {t("nav.about")}
              </a>
              <ChevronDown
                className={`w-4 h-4 transition-colors duration-300 ${isScrolled ? "text-gray-500" : "text-white/70"}`}
              />
            </div>
            <div className="flex items-center space-x-1">
              <a
                href="#"
                className={`transition-colors duration-300 hover:text-green-600 ${
                  isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                {t("nav.products")}
              </a>
              <ChevronDown
                className={`w-4 h-4 transition-colors duration-300 ${isScrolled ? "text-gray-500" : "text-white/70"}`}
              />
            </div>
            <div className="flex items-center space-x-1">
              <a
                href="#"
                className={`transition-colors duration-300 hover:text-green-600 ${
                  isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                {t("nav.services")}
              </a>
              <ChevronDown
                className={`w-4 h-4 transition-colors duration-300 ${isScrolled ? "text-gray-500" : "text-white/70"}`}
              />
            </div>
            <a
              href="#"
              className={`transition-colors duration-300 hover:text-green-600 ${
                isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
              }`}
            >
              {t("nav.news")}
            </a>
            <a
              href="#"
              className={`transition-colors duration-300 hover:text-green-600 ${
                isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
              }`}
            >
              {t("nav.contact")}
            </a>
          </nav>

          <div className={`flex items-center space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
            <Button
              className={`hidden sm:block px-6 transition-all duration-300 ${
                isScrolled
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
              }`}
            >
              {t("header.contact")}
            </Button>
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 text-sm transition-colors duration-300 hover:text-green-600 ${
                isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{t("header.language")}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <MobileMenu isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </header>
  )
}
