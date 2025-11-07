"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { MobileMenu } from "@/components/mobile-menu"
import { NavigationMenuLink, SubMenuItem, NavigationMenuLinkProps } from "./navigation-menu-link"
import { useIsMobile } from "@/hooks/use-mobile"
import Link from "next/link"
import { getAssetPath } from "@/lib/assets"
import { cn } from "@/lib/utils"
import { LanguageDropdown } from "@/components/language-dropdown"
import { SOLUTION_SECTORS } from "@/lib/solutions"

const aboutMenuLead: NavigationMenuLinkProps['subMenuLead'] = {
  lead: "nav.about.menu.body",
  cta: "nav.about.menu.cta",
  ctaHref: "/company",
}

const aboutMenuItems: SubMenuItem[] = [
  {
    title: "nav.about.story",
    href: "/company#story",
    description: "nav.about.story.description",
  },
  {
    title: "nav.about.vision",
    href: "/company#vision",
    description: "nav.about.vision.description",
  },
  {
    title: "nav.about.leadership",
    href: "/company#leadership",
    description: "nav.about.leadership.description",
  },
  {
    title: "nav.about.timeline",
    href: "/company#timeline",
    description: "nav.about.timeline.description",
  },
]

const solutionsMenuLead: NavigationMenuLinkProps['subMenuLead'] = {
  lead: "nav.solutions.menu.body",
  cta: "nav.solutions.menu.cta",
  ctaHref: "/solutions",
}

const solutionsMenuItems: SubMenuItem[] = SOLUTION_SECTORS.map((sector) => ({
  title: sector.titleKey,
  href: `/solutions/${sector.slug}`,
  description: sector.taglineKey,
}))

export function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const headerRef = useRef<HTMLElement | null>(null)
  const lastScrollYRef = useRef(0)
  const headerHeightRef = useRef(72) // fallback height

  const { language, setLanguage, t } = useLanguage()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const measure = () => {
      if (headerRef.current) {
        headerHeightRef.current = headerRef.current.getBoundingClientRect().height || headerHeightRef.current
      }
    }

    const onScroll = () => {
      const y = window.scrollY

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
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out transform-gpu bg-white shadow-sm",
        showHeader ? "translate-y-0" : "-translate-y-full",
      )}
    >

      <div className="flex w-full px-7 md:px-10 lg:px-12 py-4 items-center">
        <div className="flex flex-1 items-center gap-8">
          <Link href={`/${language === 'ar' ? 'ar-SA' : 'en'}`} className="transition-opacity hover:opacity-80">
            <Image
              src={getAssetPath("/logo_GD_black_EN.png")}
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
              subMenuItems={aboutMenuItems}
              subMenuLead={aboutMenuLead}
            />
            <NavigationMenuLink
              label="nav.solutions"
              subMenuItems={solutionsMenuItems}
              subMenuLead={solutionsMenuLead}
            />
            {/* <NavigationMenuLink label="nav.services" /> */}
            {/* <NavigationMenuLink
              label="nav.blog"
              subMenuItems={[]}
            /> */}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800"
            )}
          >
            {t("header.contact")}
          </button>
          {!isMobile && <LanguageDropdown language={language} setLanguage={setLanguage} />}
          {isMobile && (
            <MobileMenu
              aboutMenuItems={aboutMenuItems}
              solutionsMenuItems={solutionsMenuItems}
            />
          )}
        </div>
      </div>
    </header>
  )
}
