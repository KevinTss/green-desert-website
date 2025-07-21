"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { MobileMenu } from "@/components/mobile-menu"
import { NavigationMenuLink, SubMenuItem } from "./navigation-menu-link"
import { useIsMobile } from "@/hooks/use-mobile"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { getAssetPath } from "@/lib/assets"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const { language, setLanguage, t, isRTL } = useLanguage()
  const isMobile = useIsMobile()
  const pathname = usePathname()

  // Check if we're on a blog page (always show solid background)
  const isBlogPage = pathname.includes('/blog')

  const aboutMenuItems: SubMenuItem[] = [
    {
      title: "nav.about.company",
      href: "/about/company",
      image: "/placeholder.svg",
      description: "nav.about.company.description",
    },
    {
      title: "nav.about.sponsors",
      href: "/about/sponsors",
      image: "/placeholder.svg",
      description: "nav.about.sponsors.description",
    },
    {
      title: "nav.about.team",
      href: "/about/team",
      image: "/placeholder.svg",
      description: "nav.about.team.description",
    },
  ]

  const productsMenuItems: SubMenuItem[] = [
    {
      title: "nav.products.animalBedding",
      href: "/products/animal-bedding",
      image: getAssetPath("/hemp_hurds_mulch-443x300.png"),
      description: "nav.products.animalBedding.description",
    },
    {
      title: "nav.products.constructionBlocks",
      href: "/products/construction-blocks",
      image: getAssetPath("/hemp-blocks-01-443x300.jpg"),
      description: "nav.products.constructionBlocks.description",
    },
    {
      title: "nav.products.seeds",
      href: "/products/seeds",
      image: getAssetPath("/hemp_seeds_AdobeStock-443x300.jpeg"),
      description: "nav.products.seeds.description",
    },
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

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
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
        isScrolled || isBlogPage ? "bg-white shadow-lg backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="w-full">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className={cn("flex items-center", isRTL && "flex-row-reverse")}>
            <Link href={`/${language === 'ar' ? 'ar-SA' : 'en'}`} className="transition-opacity hover:opacity-80">
              <Image
                src={isScrolled || isBlogPage ? getAssetPath("/logo_GD_black_EN.png") : getAssetPath("/logo_GD_white_home_EN.png")}
                alt="Green Desert Logo"
                width={150}
                height={40}
                className="h-8 w-auto transition-opacity duration-300"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenuLink
              label="nav.about"
              isScrolled={isScrolled || isBlogPage}
              subMenuItems={aboutMenuItems}
            />
            <NavigationMenuLink
              label="nav.products"
              isScrolled={isScrolled || isBlogPage}
              subMenuItems={productsMenuItems}
            />
            <NavigationMenuLink
              label="nav.services"
              isScrolled={isScrolled || isBlogPage}
            />
            <NavigationMenuLink
              label="nav.blog"
              isScrolled={isScrolled || isBlogPage}
            />
          </nav>

          <div className={cn(
            "flex items-center space-x-4",
            isRTL ? "space-x-reverse" : ""
          )}>
            <Button
              className={cn(
                "hidden sm:block px-6 transition-all duration-300",
                isScrolled || isBlogPage
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
              )}
            >
              {t("header.contact")}
            </Button>
            {!isMobile && (
              <div
                className="relative"
                onMouseEnter={() => setShowLanguageDropdown(true)}
                onMouseLeave={() => setShowLanguageDropdown(false)}
              >
                <button
                  className={cn(
                    "flex items-center space-x-1 text-sm transition-colors duration-300 hover:text-green-600",
                    isScrolled || isBlogPage ? "text-gray-600" : "text-white/90 hover:text-white"
                  )}
                >
                  <Globe className="w-4 h-4" />
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Language Dropdown */}
                <div className={cn(
                  "absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200",
                  showLanguageDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                )}>
                  <button
                    onClick={() => setLanguage("en")}
                    className={cn(
                      "w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2",
                      language === "en" ? "bg-gray-50 text-gray-800" : "text-gray-600"
                    )}
                  >
                    <span>🇺🇸</span>
                    <span>English</span>
                    {language === "en" && <span className="ml-auto text-gray-400">✓</span>}
                  </button>
                  <button
                    onClick={() => setLanguage("ar")}
                    className={cn(
                      "w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2",
                      language === "ar" ? "bg-gray-50 text-gray-800" : "text-gray-600"
                    )}
                  >
                    <span>🇸🇦</span>
                    <span>العربية</span>
                    {language === "ar" && <span className="ml-auto text-gray-400">✓</span>}
                  </button>
                </div>
              </div>
            )}
            {isMobile && (
              <MobileMenu
                isScrolled={isScrolled || isBlogPage}
                aboutMenuItems={aboutMenuItems}
                productsMenuItems={productsMenuItems}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
