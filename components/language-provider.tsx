"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import en from '@/components/i18n/en'
import ar from '@/components/i18n/ar'
import { useRouter, usePathname } from "next/navigation"

export type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
  languageRoute: 'en' | 'ar-SA'
}

const translations = { en, ar }

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

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  const isRTL = language === "ar"

  const languageRoute: 'en' | 'ar-SA' = language === 'ar' ? 'ar-SA' : 'en'
  return <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRTL, languageRoute }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
