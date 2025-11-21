"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import type { SolutionSectorDefinition } from "@/lib/solutions"

interface SectionSolutionDetailHeroProps {
  solution: SolutionSectorDefinition
  scheduleHref: string
  specsHref: string
}

export function SectionSolutionDetailHero({
  solution,
  scheduleHref,
  specsHref,
}: SectionSolutionDetailHeroProps) {
  const { t } = useLanguage()

  return (
    <Section className="bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
          {t(solution.taglineKey)}
        </p>
        <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {t(solution.titleKey)}
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/80 sm:text-lg">
          {t(solution.summaryKey)}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
            <Link href={scheduleHref}>{t("solutions.details.actions.schedule")}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
            <Link href={specsHref} target="_blank" rel="noopener noreferrer">
              {t("solutions.details.actions.specs")}
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
