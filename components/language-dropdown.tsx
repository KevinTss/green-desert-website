import { useState, useRef } from "react"
import { ChevronDown, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { Language } from "@/components/language-provider"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

export const LanguageDropdown = ({ isScrolled, isBlogPage, language, setLanguage }: {
  isScrolled: boolean
  isBlogPage: boolean
  language: Language
  setLanguage: (lang: Language) => void
}) => {
  const [open, setOpen] = useState(false)
  const openTimer = useRef<NodeJS.Timeout>(undefined)
  const closeTimer = useRef<NodeJS.Timeout>(undefined)

  const handleEnter = () => {
    clearTimeout(closeTimer.current)
    openTimer.current = setTimeout(() => setOpen(true), 40)
  }
  
  const handleLeave = () => {
    clearTimeout(openTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <DropdownMenu.Root
      modal={false}
      open={open}
      onOpenChange={setOpen}
    >
      <DropdownMenu.Trigger
        asChild
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
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
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="end"
          sideOffset={8}
          className={cn(
            "z-[60] w-32 rounded-lg shadow-lg py-2 border",
            isScrolled || isBlogPage
              ? "bg-white border-gray-200"
              : "bg-white/10 backdrop-blur-md border-white/20",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2"
          )}
          onPointerEnter={handleEnter}
          onPointerLeave={handleLeave}
        >
          <DropdownMenu.Item asChild>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "w-full px-4 py-2 text-left text-sm transition-colors flex items-center space-x-2 cursor-pointer",
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
          </DropdownMenu.Item>
          
          <DropdownMenu.Item asChild>
            <button
              onClick={() => setLanguage("ar")}
              className={cn(
                "w-full px-4 py-2 text-left text-sm transition-colors flex items-center space-x-2 cursor-pointer",
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
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
