"use client"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Text as TypographyText } from "@/components/typography"
import type { SolutionSectorDefinition } from "@/lib/solutions"

interface SectionSolutionDetailIntroProps {
  solution: SolutionSectorDefinition
}

export function SectionSolutionDetailIntro({ solution }: SectionSolutionDetailIntroProps) {
  const { t } = useLanguage()

  return (
    <Section>
      <div className="container mx-auto max-w-2xl px-4 py-10 sm:py-12 lg:py-16">
        <TypographyText className="text-center">
          {t(solution.summaryKey)}
        </TypographyText>
      </div>
    </Section>
  )
}
