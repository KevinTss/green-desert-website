"use client"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Text } from "@/components/typography"
import type { SolutionSectorDefinition } from "@/lib/solutions"

interface SectionSolutionDetailIntroProps {
  solution: SolutionSectorDefinition
}

export function SectionSolutionDetailIntro({ solution }: SectionSolutionDetailIntroProps) {
  const { t } = useLanguage()

  return (
    <Section>
      <div className="container mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        <Text className="text-center">
          {t(solution.summaryKey)}
        </Text>
      </div>
    </Section>
  )
}
