"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { MobileMenu } from "@/components/mobile-menu"
import { NavigationMenuLink, SubMenuItem } from "./navigation-menu-link"
import { useIsMobile } from "@/hooks/use-mobile"

export function ScrollHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t, isRTL } = useLanguage()
  const isMobile = useIsMobile()

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
      image: "/hemp_hurds_mulch-443x300.png",
      description: "nav.products.animalBedding.description",
    },
    {
      title: "nav.products.constructionBlocks",
      href: "/products/construction-blocks",
      image: "/hemp-blocks-01-443x300.jpg",
      description: "nav.products.constructionBlocks.description",
    },
    {
      title: "nav.products.seeds",
      href: "/products/seeds",
      image: "/hemp_seeds_AdobeStock-443x300.jpeg",
      description: "nav.products.seeds.description",
    },
  ]

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${isScrolled ? "bg-white shadow-lg backdrop-blur-sm" : "bg-transparent"}`}
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
            <NavigationMenuLink
              label="nav.about"
              isScrolled={isScrolled}
              subMenuItems={aboutMenuItems}
            />
            <NavigationMenuLink
              label="nav.products"
              isScrolled={isScrolled}
              subMenuItems={productsMenuItems}
            />
            <NavigationMenuLink
              label="nav.services"
              isScrolled={isScrolled}
            />
            <NavigationMenuLink
              label="nav.news"
              isScrolled={isScrolled}
            />
            <NavigationMenuLink
              label="nav.contact"
              isScrolled={isScrolled}
            />
          </nav>

          <div className={`flex items-center space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
            <Button
              className={`hidden sm:block px-6 transition-all duration-300 ${isScrolled
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"}`}
            >
              {t("header.contact")}
            </Button>
            {!isMobile && (
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 text-sm transition-colors duration-300 hover:text-green-600 ${isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"}`}
              >
                <Globe className="w-4 h-4" />
                <span>{t("header.language")}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            )}
            {isMobile && (
              <MobileMenu
                isScrolled={isScrolled}
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
