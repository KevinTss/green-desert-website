"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { MobileMenu } from "@/components/mobile-menu"
import { NavigationMenuLink, SubMenuItem } from "./navigation-menu-link"
import { useIsMobile } from "@/hooks/use-mobile"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { getAssetPath } from "@/lib/assets"
import { cn } from "@/lib/utils"
import { LanguageDropdown } from "@/components/language-dropdown"

const aboutMenuItems: SubMenuItem[] = [
  {
    title: "nav.about.company",
    href: "/company",
    image: "/placeholder.svg",
    description: "nav.about.company.description",
  },
  {
    title: "nav.about.sponsors",
    href: "/sponsors",
    image: "/placeholder.svg",
    description: "nav.about.sponsors.description",
  },
  {
    title: "nav.about.team",
    href: "/team",
    image: "/placeholder.svg",
    description: "nav.about.team.description",
  },
]

const productsMenuItems: SubMenuItem[] = [
  {
    title: "nav.products.hurds",
    href: "/products/hurds",
    image: getAssetPath("/hurds.png"),
    description: "nav.products.hurds.description",
  },
  {
    title: "nav.products.bastFiber",
    href: "/products/bast-fiber",
    image: getAssetPath("/bast-fiber.png"),
    description: "nav.products.bastFiber.description",
  },
  {
    title: "nav.products.seeds",
    href: "/products/seeds",
    image: getAssetPath("/seeds.png"),
    description: "nav.products.seeds.description",
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const headerRef = useRef<HTMLElement | null>(null)
  const lastScrollYRef = useRef(0)
  const headerHeightRef = useRef(72) // fallback height

  const { language, languageRoute, setLanguage, t, isRTL } = useLanguage()
  const isMobile = useIsMobile()
  const pathname = usePathname()

  // Solid header on any non-home page
  const isHomePage = pathname === `/${languageRoute}` || pathname === `/${languageRoute}/`
  const forceSolidHeader = !isHomePage

  useEffect(() => {
    if (typeof window === 'undefined') return

    const measure = () => {
      if (headerRef.current) {
        headerHeightRef.current = headerRef.current.getBoundingClientRect().height || headerHeightRef.current
      }
    }

    const onScroll = () => {
      const heroHeight = window.innerHeight
      const y = window.scrollY
      // Background change based on hero progression
      setIsScrolled(y > heroHeight * 0.8)

      const last = lastScrollYRef.current
      const delta = Math.abs(y - last)
      // Small threshold to avoid flicker on tiny scrolls
      const threshold = 8

      if (y < headerHeightRef.current) {
        // Near top: always show
        setShowHeader(true)
      } else if (delta > threshold) {
        if (y > last && y > headerHeightRef.current + 8) {
          // Scrolling down past header height: hide
          setShowHeader(false)
        } else if (y < last) {
          // Scrolling up: show
          setShowHeader(true)
        }
      }

      lastScrollYRef.current = y
    }

    measure()
    onScroll()
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Expose header offset as CSS variable for sticky elements (e.g., mini navbar)
  useEffect(() => {
    if (typeof document === 'undefined') return
    const h = headerRef.current?.getBoundingClientRect().height || headerHeightRef.current
    document.documentElement.style.setProperty('--gd-header-offset', showHeader ? `${h}px` : '0px')
  }, [showHeader])

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out transform-gpu",
        showHeader ? "translate-y-0" : "-translate-y-full",
        isScrolled || forceSolidHeader ? "bg-white" : "bg-black"
      )}
    >

      <div className="flex w-full px-7 md:px-10 lg:px-12 py-4 items-center">
        <div className="flex flex-1 items-center gap-8">
          <Link href={`/${language === 'ar' ? 'ar-SA' : 'en'}`} className="transition-opacity hover:opacity-80">
            <Image
              src={isScrolled || forceSolidHeader ? getAssetPath("/logo_GD_black_EN.png") : getAssetPath("/logo_GD_white_home_EN.png")}
              alt="Green Desert Logo"
              width={150}
              height={40}
              className="h-8 w-auto transition-opacity duration-300"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavigationMenuLink
              label="nav.about"
              isScrolled={isScrolled || forceSolidHeader}
              subMenuItems={aboutMenuItems}
            />
            <NavigationMenuLink
              label="nav.products"
              isScrolled={isScrolled || forceSolidHeader}
              subMenuItems={productsMenuItems}
            />
            <NavigationMenuLink
              label="nav.services"
              isScrolled={isScrolled || forceSolidHeader}
            />
            <NavigationMenuLink
              label="nav.blog"
              isScrolled={isScrolled || forceSolidHeader}
            />
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
              isScrolled || forceSolidHeader
                ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                : "bg-white/20 hover:bg-white/30 text-white"
            )}
          >
            {t("header.contact")}
          </button>
          {!isMobile && <LanguageDropdown isScrolled={isScrolled} isBlogPage={forceSolidHeader} language={language} setLanguage={setLanguage} />}
          {isMobile && (
            <MobileMenu
              isScrolled={isScrolled || forceSolidHeader}
              aboutMenuItems={aboutMenuItems}
              productsMenuItems={productsMenuItems}
            />
          )}
        </div>
      </div>
    </header>
  )
}
