"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SectionSubtitle } from "@/components/typography"

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Get browser language preference
    const browserLang = navigator.language.toLowerCase()
    const isArabic = browserLang.includes('ar') || 
                     localStorage.getItem('language') === 'ar'
    
    // Redirect to appropriate language route
    const targetLang = isArabic ? 'ar-SA' : 'en'
    router.replace(`/${targetLang}`)
  }, [router])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900">Loading...</h1>
        <SectionSubtitle className="mt-2 text-gray-600">
          Redirecting to your preferred language
        </SectionSubtitle>
      </div>
    </div>
  )
}
