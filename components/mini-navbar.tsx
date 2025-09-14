"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

export interface MiniSection { id: string; key: string }

const DEFAULT_SECTIONS: MiniSection[] = [
  { id: "story", key: "mini.story" },
  { id: "products", key: "mini.products" },
  { id: "services", key: "mini.services" },
  { id: "partners", key: "mini.partners" },
  { id: "news", key: "mini.news" },
]

interface MiniNavbarProps {
  sections?: MiniSection[]
}

export function MiniNavbar({ sections = DEFAULT_SECTIONS }: MiniNavbarProps) {
  const { t, isRTL } = useLanguage()
  const [active, setActive] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const sectionEls = sections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[]
    if (sectionEls.length === 0) return
    let ticking = false
    const update = () => {
      ticking = false
      const navTop = navRef.current?.getBoundingClientRect().top ?? 0
      const crossed = sectionEls.filter(sec => sec.getBoundingClientRect().top <= navTop + 1)
      if (crossed.length > 0) {
        const last = crossed[crossed.length - 1]
        if (last.id !== active) setActive(last.id)
      } else if (active !== null) {
        setActive(null)
      }
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }
    const onResize = onScroll
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [active, sections])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    let stickyTop = 0
    if (navRef.current) {
      const cs = window.getComputedStyle(navRef.current)
      const topVal = cs.top || '0px'
      stickyTop = parseFloat(topVal) || 0
    }
    const y = el.getBoundingClientRect().top + window.scrollY - stickyTop
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <div ref={navRef} className={cn("sticky z-30")} style={{ top: 'calc(var(--gd-header-offset, 0px) + 12px)' }}>
      <div className={cn("container mx-auto px-4")}>
        <nav
          className={cn(
            "w-min overflow-x-auto mx-auto",
            "rounded-full border backdrop-blur-md",
            "bg-white/65 border-gray-200 shadow-sm"
          )}
        >
          <ul className={cn("flex items-center gap-1 p-1", isRTL && "flex-row-reverse")}>
            {sections.map((s) => (
              <li key={s.id} className="shrink-0">
                <button
                  onClick={() => scrollTo(s.id)}
                  className={cn(
                    "px-3 md:px-4 py-2 text-sm md:text-[15px] rounded-full transition-colors",
                    active === s.id
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {t(s.key)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
