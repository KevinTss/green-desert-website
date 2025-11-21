"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { SOLUTION_SECTORS } from "@/lib/solutions"

export function SectionSolutionsPathways() {
  const { t, languageRoute } = useLanguage()

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            {t("solutions.pathways.title")}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {t("solutions.pathways.subtitle")}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SOLUTION_SECTORS.map((sector) => {
            const href = `/${languageRoute}/solutions/${sector.slug}`
            return (
              <Link
                key={sector.slug}
                href={href}
                className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-2 hover:border-emerald-200 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
                    {t(sector.taglineKey)}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    {t(sector.titleKey)}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {t(sector.summaryKey)}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {sector.highlightKeys.map((key) => (
                      <li key={key} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                        <span>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-emerald-600">
                  <span>{t("solutions.pathways.toggle")}</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                    ↗
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
