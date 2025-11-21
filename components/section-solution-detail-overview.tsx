"use client"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import type { SolutionSectorDefinition } from "@/lib/solutions"

interface SectionSolutionDetailOverviewProps {
  solution: SolutionSectorDefinition
}

export function SectionSolutionDetailOverview({ solution }: SectionSolutionDetailOverviewProps) {
  const { t } = useLanguage()

  return (
    <Section className="bg-white">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            {t("solutions.details.overviewHeading")}
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            {t(solution.summaryKey)}
          </p>
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
              {t("solutions.details.useCasesHeading")}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {solution.useCaseKeys.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
            {t("solutions.details.businessHeading")}
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700">
            {solution.businessKeys.map((key) => (
              <li key={key} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
