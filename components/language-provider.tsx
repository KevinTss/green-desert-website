"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

// Import all content files
import enLabels from '@/content/i18n/en/labels.json'
import enHeader from '@/content/i18n/en/header.json'
import enFooter from '@/content/i18n/en/footer.json'
import enHome from '@/content/i18n/en/home.json'
import enCompany from '@/content/i18n/en/company.json'
import enTeam from '@/content/i18n/en/team.json'
import enSponsors from '@/content/i18n/en/sponsors.json'
import enSolutions from '@/content/i18n/en/solutions.json'
import enProducts from '@/content/i18n/en/products.json'

import arLabels from '@/content/i18n/ar/labels.json'
import arHeader from '@/content/i18n/ar/header.json'
import arFooter from '@/content/i18n/ar/footer.json'
import arHome from '@/content/i18n/ar/home.json'
import arCompany from '@/content/i18n/ar/company.json'
import arTeam from '@/content/i18n/ar/team.json'
import arSponsors from '@/content/i18n/ar/sponsors.json'
import arSolutions from '@/content/i18n/ar/solutions.json'
import arProducts from '@/content/i18n/ar/products.json'

export type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
  content: ContentStructure
  isRTL: boolean
  languageRoute: 'en' | 'ar-SA'
}

interface ContentStructure {
  labels: typeof enLabels
  header: typeof enHeader
  footer: typeof enFooter
  home: typeof enHome
  company: typeof enCompany
  team: typeof enTeam
  sponsors: typeof enSponsors
  solutions: typeof enSolutions
  products: typeof enProducts
}

const content = {
  en: {
    labels: enLabels,
    header: enHeader,
    footer: enFooter,
    home: enHome,
    company: enCompany,
    team: enTeam,
    sponsors: enSponsors,
    solutions: enSolutions,
    products: enProducts,
  },
  ar: {
    labels: arLabels,
    header: arHeader,
    footer: arFooter,
    home: arHome,
    company: arCompany,
    team: arTeam,
    sponsors: arSponsors,
    solutions: arSolutions,
    products: arProducts,
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
  initialLang?: string
}

export function LanguageProvider({ children, initialLang }: LanguageProviderProps) {
  const router = useRouter()
  const pathname = usePathname()

  const [language, setLanguage] = useState<Language>(() => {
    if (initialLang === 'ar-SA') return 'ar'
    if (initialLang === 'en') return 'en'
    return 'en'
  })

  useEffect(() => {
    // Don't override initialLang on first render
    if (!initialLang && typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
        setLanguage(savedLanguage)
      }
    }
  }, [initialLang])

  useEffect(() => {
    if (typeof window === 'undefined') return

    localStorage.setItem("language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.style.fontFamily = language === "ar" ? "var(--font-arabic)" : "var(--font-plus-jakarta-sans)"
  }, [language])

  const handleSetLanguage = (newLang: Language) => {
    const targetRoute = newLang === 'ar' ? 'ar-SA' : 'en'

    // Get current path without language prefix
    const currentPath = pathname.replace(/^\/(en|ar-SA)/, '') || ''

    // Navigate to new language route
    router.push(`/${targetRoute}${currentPath}`)
    setLanguage(newLang)
  }

  // Translation function supporting dot notation
  // e.g., t('header.nav.home') or t('labels.mini.story')
  const t = (key: string): any => {
    const keys = key.split('.')
    let value: any = content[language]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if not found
      }
    }

    return value
  }

  const isRTL = language === "ar"
  const languageRoute: 'en' | 'ar-SA' = language === 'ar' ? 'ar-SA' : 'en'

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
        content: content[language],
        isRTL,
        languageRoute
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Convenience hook for accessing content directly
export function useContent() {
  const { content } = useLanguage()
  return content
}
