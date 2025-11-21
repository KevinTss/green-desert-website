"use client"

import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { getAssetPath } from "@/lib/assets"
import type { SolutionSectorDefinition } from "@/lib/solutions"

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

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 text-center text-white sm:px-12 lg:px-20">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
            {t(solution.taglineKey)}
          </p>
          <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {t(solution.titleKey)}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t(solution.summaryKey)}
          </p>
        </div>
      </div>
    </Section>
  )
}
