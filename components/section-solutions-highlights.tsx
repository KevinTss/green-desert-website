"use client"

import { useContent } from "@/components/language-provider"
import { Section } from "@/components/section"
import { AnimatedStatCards } from "@/components/animated-stat-cards"
import { Badge, Text as TypographyText } from "@/components/typography"

export function SectionSolutionsHighlights() {
  const { solutions } = useContent()
  const stats = solutions?.highlights?.stats ?? []
  const body = solutions?.highlights?.body
  const badge = solutions?.highlights?.badge

  if (!stats.length && !body) return null
  return (
    <Section id="highlights" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          {badge && (
            <Badge variant="emerald" size="md">
              {badge}
            </Badge>
          )}
          {body && (
            <TypographyText className="mt-3 text-sm sm:text-base">
              {body}
            </TypographyText>
          )}
        </div>

        {!!stats.length && (
          <AnimatedStatCards items={stats.map((s) => ({ id: s.id, value: s.label }))} className="mt-10" />
        )}
      </div>
    </Section>
  )
}
