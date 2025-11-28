"use client"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { AnimatedStatCards } from "@/components/animated-stat-cards"
import { Badge, Text as TypographyText } from "@/components/typography"

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
          <Badge variant="emerald" size="md">
            {t("solutions.hero.badge")}
          </Badge>
          <TypographyText className="mt-3 text-sm sm:text-base">
            {t("solutions.hero.body")}
          </TypographyText>
        </div>

        <AnimatedStatCards items={stats} className="mt-10" />
      </div>
    </Section>
  )
}
