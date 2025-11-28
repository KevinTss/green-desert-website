"use client"

import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { getAssetPath } from "@/lib/assets"
import type { SolutionSectorDefinition } from "@/lib/solutions"
import { Badge, Heading, Text as TypographyText } from "@/components/typography"

interface SectionSolutionDetailHeroProps {
  solution: SolutionSectorDefinition
}

const SOLUTION_DETAIL_HERO_FALLBACK_IMAGE = "/hurd-cover.jpg"

export function SectionSolutionDetailHero({
  solution,
}: SectionSolutionDetailHeroProps) {
  const { t } = useLanguage()
  const heroImage = getAssetPath(solution.image || SOLUTION_DETAIL_HERO_FALLBACK_IMAGE)

  return (
    <Section disablePadding className="relative min-h-[95vh]" data-hero="true">
      <div className="relative flex min-h-[95vh] w-full items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={t(solution.titleKey)}
            fill
            priority
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-6 py-12 text-center text-white sm:px-12 lg:px-16">
          <Badge variant="emerald-light">
            {t(solution.taglineKey)}
          </Badge>
          <Heading as="h1" size="3xl" variant="white" className="mt-4">
            {t(solution.titleKey)}
          </Heading>
          <TypographyText variant="white" className="mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            {t(solution.summaryKey)}
          </TypographyText>
        </div>
      </div>
    </Section>
  )
}
