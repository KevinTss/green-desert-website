"use client"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import type { SolutionSectorDefinition } from "@/lib/solutions"

interface SectionSolutionDetailContentProps {
  solution: SolutionSectorDefinition
}

export function SectionSolutionDetailContent({ solution }: SectionSolutionDetailContentProps) {
  const { t } = useLanguage()

  return (
    <Section className="bg-white" id="approach">
      <div className="container mx-auto max-w-[700px] px-6 sm:px-8 lg:px-12">
        <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
          {t(`${solution.slug}.content.paragraph1`)}
        </p>
        <p className="mt-6 text-base leading-relaxed text-gray-600">
          {t(`${solution.slug}.content.paragraph2`)}
        </p>
      </div>
    </Section>
  )
}
