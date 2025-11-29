"use client"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import type { SolutionSectorDefinition } from "@/lib/solutions"

interface SectionSolutionDetailIntroProps {
  solution: SolutionSectorDefinition
}

export function SectionSolutionDetailIntro({ solution }: SectionSolutionDetailIntroProps) {
  const { t } = useLanguage()

  return (
    <Section className="bg-white" id="overview">
      <div className="container mx-auto max-w-[700px] px-6 sm:px-8 lg:px-12">
        <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
          {t(`${solution.slug}.intro.paragraph1`)}
        </p>
        <p className="mt-6 text-base leading-relaxed text-gray-600">
          {t(`${solution.slug}.intro.paragraph2`)}
        </p>
      </div>
    </Section>
  )
}
