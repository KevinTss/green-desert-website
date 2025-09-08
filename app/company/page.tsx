"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CompanyRedirect() {
  const router = useRouter()

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    const isArabic = browserLang.includes('ar') || localStorage.getItem('language') === 'ar'
    const targetLang = isArabic ? 'ar-SA' : 'en'
    router.replace(`/${targetLang}/company`)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Redirecting to your preferred language…</p>
    </div>
  )
}

