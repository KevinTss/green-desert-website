import { useEffect, useRef, useState } from "react"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Badge, Heading, Text } from "@/components/typography"
import { cn } from "@/lib/utils"
import { getAssetPath } from "@/lib/assets"
import { AnimatePresence, motion } from "framer-motion"

const VISION_PHASES = [
  {
    key: "2020",
    titleKey: "company.timeline.milestones.2020.title",
    bodyKey: "company.timeline.milestones.2020.body",
    detailKeys: [
      "company.timeline.milestones.2020.details.0",
      "company.timeline.milestones.2020.details.1",
    ],
    image: "/fiber-cover.jpg",
  },
  {
    key: "2022",
    titleKey: "company.timeline.milestones.2022.title",
    bodyKey: "company.timeline.milestones.2022.body",
    detailKeys: [
      "company.timeline.milestones.2022.details.0",
      "company.timeline.milestones.2022.details.1",
    ],
    image: "/hurd-cover.jpg",
  },
  {
    key: "2024",
    titleKey: "company.timeline.milestones.2024.title",
    bodyKey: "company.timeline.milestones.2024.body",
    detailKeys: [
      "company.timeline.milestones.2024.details.0",
      "company.timeline.milestones.2024.details.1",
    ],
    image: "/hemp-blocks-01-443x300.jpg",
  },
  {
    key: "2026",
    titleKey: "company.timeline.milestones.2026.title",
    bodyKey: "company.timeline.milestones.2026.body",
    detailKeys: [
      "company.timeline.milestones.2026.details.0",
      "company.timeline.milestones.2026.details.1",
    ],
    image: "/bast-fiber.png",
  },
  {
    key: "2028",
    titleKey: "company.timeline.milestones.2028.title",
    bodyKey: "company.timeline.milestones.2028.body",
    detailKeys: [
      "company.timeline.milestones.2028.details.0",
      "company.timeline.milestones.2028.details.1",
    ],
    image: "/hurds.png",
  },
  {
    key: "2030",
    titleKey: "company.timeline.milestones.2030.title",
    bodyKey: "company.timeline.milestones.2030.body",
    detailKeys: [
      "company.timeline.milestones.2030.details.0",
      "company.timeline.milestones.2030.details.1",
    ],
    image: "/seeds-cover.jpg",
  },
] as const

export function SectionCompanyVision() {
  const { t, isRTL } = useLanguage()
  const [activePhaseKey, setActivePhaseKey] = useState<string>(VISION_PHASES[0].key)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const entryRefs = useRef<(HTMLDivElement | null)[]>([])

  const axisClass = cn(
    "relative space-y-10",
    isRTL ? "border-r pr-8" : "border-l pl-8"
  )
  const markerClass = cn(
    "absolute top-4 h-3.5 w-3.5 rounded-full border-2 border-emerald-500 bg-white",
    isRTL ? "-right-[7px]" : "-left-[7px]"
  )
  const entryPadding = isRTL ? "pr-8 text-right" : "pl-8"
  const activePhase = VISION_PHASES.find((phase) => phase.key === activePhaseKey) ?? VISION_PHASES[0]

  useEffect(() => {
    let frame: number | null = null
    const handleScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = null
        const stickyTop = stickyRef.current?.getBoundingClientRect().top ?? 0
        let closestKey = activePhaseKey
        let smallestDelta = Number.POSITIVE_INFINITY
        entryRefs.current.forEach((el, index) => {
          if (!el) return
          const delta = Math.abs(el.getBoundingClientRect().top - stickyTop)
          if (delta < smallestDelta) {
            smallestDelta = delta
            closestKey = VISION_PHASES[index].key
          }
        })
        if (closestKey !== activePhaseKey) {
          setActivePhaseKey(closestKey)
        }
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    handleScroll()
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [activePhaseKey])

  return (
    <Section id="vision" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <Badge>{t("company.vision.badgeLabel")}</Badge>
          <Heading size="lg" className="mt-4">
            {t("company.vision.roadmapTitle")}
          </Heading>
          <Text size="lg" className="mt-6">
            {t("company.vision.body")}
          </Text>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div
            ref={stickyRef}
            className="lg:sticky lg:top-44 min-h-[300px] max-h-[75vh] h-[400px] rounded-3xl overflow-hidden shadow-lg relative"
          >
            <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhaseKey}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${getAssetPath(activePhase.image)})`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/35 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activePhaseKey}`}
                className="relative z-10 flex h-full flex-col justify-end p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                    {t(activePhase.titleKey)}
                  </p>
                  <Text className="mt-3 text-sm text-white/90">
                    {t(activePhase.bodyKey)}
                  </Text>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={axisClass}>
            {VISION_PHASES.map((phase, index) => (
              <div
                key={phase.key}
                className={cn("relative", entryPadding)}
                ref={(el) => { entryRefs.current[index] = el }}
                style={{ minHeight: "400px" }}
              >
                <span className={markerClass} />
                <div
                  className={cn(
                    "rounded-3xl border bg-white p-8 shadow-sm transition min-h-[320px] flex flex-col",
                    activePhaseKey === phase.key ? "border-emerald-300 shadow-lg" : "border-transparent opacity-80"
                  )}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
                    {t(phase.titleKey)}
                  </p>
                  <Text className="mt-4">
                    {t(phase.bodyKey)}
                  </Text>
                  <ul className="mt-6 space-y-2 text-sm text-slate-600">
                    {phase.detailKeys.map((detailKey) => (
                      <li key={detailKey} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{t(detailKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 w-px bg-gradient-to-b from-emerald-100 via-emerald-200 to-transparent",
                isRTL ? "right-0" : "left-0"
              )}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
