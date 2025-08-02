import { useState } from "react"
import { ChevronDown, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { Language } from "@/components/language-provider"

export const LanguageDropdown = ({ isScrolled, isBlogPage, language, setLanguage }: {
  isScrolled: boolean
  isBlogPage: boolean
  language: Language
  setLanguage: (lang: Language) => void
}) => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)

  return (
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
        "absolute top-full right-0 mt-2 w-32 rounded-lg shadow-lg py-2 transition-all duration-200",
        isScrolled || isBlogPage
          ? "bg-white border border-gray-200"
          : "bg-white/10 backdrop-blur-md border border-white/20",
        showLanguageDropdown ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <button
          onClick={() => setLanguage("en")}
          className={cn(
            "w-full px-4 py-2 text-left text-sm transition-colors flex items-center space-x-2",
            isScrolled || isBlogPage
              ? "hover:bg-gray-50"
              : "hover:bg-white/10",
            language === "en"
              ? (isScrolled || isBlogPage ? "bg-gray-50 text-gray-800" : "bg-white/20 text-white")
              : (isScrolled || isBlogPage ? "text-gray-600" : "text-white/90")
          )}
        >
          <span>English</span>
          {language === "en" && <span className={cn("ml-auto", isScrolled || isBlogPage ? "text-gray-400" : "text-white/60")}>✓</span>}
        </button>
        <button
          onClick={() => setLanguage("ar")}
          className={cn(
            "w-full px-4 py-2 text-left text-sm transition-colors flex items-center space-x-2",
            isScrolled || isBlogPage
              ? "hover:bg-gray-50"
              : "hover:bg-white/10",
            language === "ar"
              ? (isScrolled || isBlogPage ? "bg-gray-50 text-gray-800" : "bg-white/20 text-white")
              : (isScrolled || isBlogPage ? "text-gray-600" : "text-white/90")
          )}
        >
          <span>العربية</span>
          {language === "ar" && <span className={cn("ml-auto", isScrolled || isBlogPage ? "text-gray-400" : "text-white/60")}>✓</span>}
        </button>
      </div>
    </div>

  )
}
