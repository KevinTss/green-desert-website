import { useState, useRef } from "react"
import { ChevronDown, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { Language } from "@/components/language-provider"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { useIsTouchDevice } from "@/hooks/use-touch-device"

export const LanguageDropdown = ({
  language,
  setLanguage,
  variant = "light"
}: {
  language: Language
  setLanguage: (lang: Language) => void
  variant?: "light" | "dark"
}) => {
  const [open, setOpen] = useState(false)
  const openTimer = useRef<NodeJS.Timeout>(undefined)
  const closeTimer = useRef<NodeJS.Timeout>(undefined)
  const isTouchDevice = useIsTouchDevice()

  const handleEnter = () => {
    if (isTouchDevice) return
    clearTimeout(closeTimer.current)
    openTimer.current = setTimeout(() => setOpen(true), 40)
  }

  const handleLeave = () => {
    if (isTouchDevice) return
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
            "flex items-center space-x-1 text-sm transition-colors duration-300 outline-none",
            variant === "dark"
              ? "text-white/85 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          <Globe className={cn("w-4 h-4", variant === "dark" ? "text-white/80" : "text-gray-600")} />
          <ChevronDown className={cn("w-4 h-4", variant === "dark" ? "text-white/80" : "text-gray-600")} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="end"
          sideOffset={8}
          className={cn(
            "z-[60] w-32 rounded-lg border border-gray-200 bg-white py-2 shadow-lg",
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
                "flex w-full cursor-pointer items-center space-x-2 px-4 py-2 text-left text-sm text-gray-600 transition-colors outline-none hover:bg-gray-50 hover:text-gray-900",
                language === "en" && "bg-gray-50 text-gray-900"
              )}
            >
              <span>English</span>
              {language === "en" && <span className="ml-auto text-gray-400">✓</span>}
            </button>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <button
              onClick={() => setLanguage("ar")}
              className={cn(
                "flex w-full cursor-pointer items-center space-x-2 px-4 py-2 text-left text-sm text-gray-600 transition-colors outline-none hover:bg-gray-50 hover:text-gray-900",
                language === "ar" && "bg-gray-50 text-gray-900"
              )}
            >
              <span>العربية</span>
              {language === "ar" && <span className="ml-auto text-gray-400">✓</span>}
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
