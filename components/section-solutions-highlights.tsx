"use client"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { AnimatedStatCards } from "@/components/animated-stat-cards"

export function SectionSolutionsHighlights() {
  const { t } = useLanguage()

  const stats = [
    { id: "projects", value: t("solutions.hero.stats.projects") },
    { id: "emissions", value: t("solutions.hero.stats.emissions") },
    { id: "partners", value: t("solutions.hero.stats.partners") },
  ]

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            {t("solutions.hero.badge")}
          </p>
          <p className="mt-3 text-sm leading-normal text-slate-600 sm:text-base">
            {t("solutions.hero.body")}
          </p>
        </div>

        <AnimatedStatCards items={stats} className="mt-10" />
      </div>
    </Section>
  )
}
