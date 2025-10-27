"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SOLUTION_SECTORS } from "@/lib/solutions"

export function ClientSolutions() {
  const { t, languageRoute, isRTL, language } = useLanguage()

  const stats = [
    { key: "solutions.hero.stats.projects" },
    { key: "solutions.hero.stats.emissions" },
    { key: "solutions.hero.stats.partners" },
  ]

  return (
    <main className={cn(isRTL ? "rtl" : "ltr")} dir={isRTL ? "rtl" : "ltr"} lang={language}>
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e44,transparent_65%)]" />
          <div className="absolute -top-40 -left-40 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-24 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
              {t("solutions.hero.badge")}
            </p>
            <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {t("solutions.hero.title")}
            </h1>
            <p className="mt-6 text-base text-white/80 sm:text-lg">
              {t("solutions.hero.subtitle")}
            </p>
            <p className="mt-4 text-sm text-white/70">
              {t("solutions.hero.body")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Link href="mailto:info@greendesert.sa?subject=Solutions%20workshop">
                  {t("solutions.hero.primaryCta")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                <Link href="/company-profile.pdf" target="_blank" rel="noopener noreferrer">
                  {t("solutions.hero.secondaryCta")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.key} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm font-medium text-white/80">
                {t(stat.key)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
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
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t("solutions.details.walkthroughHeading")}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {t("solutions.details.walkthroughDescription")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Link href="mailto:info@greendesert.sa?subject=Project%20assessment">
                  {t("solutions.details.actions.schedule")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-400 text-emerald-600 hover:bg-emerald-50">
                <Link href="/company-profile.pdf" target="_blank" rel="noopener noreferrer">
                  {t("solutions.details.actions.specs")}
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 text-sm text-slate-600 shadow-sm">
            <p>
              {t("solutions.details.actions.contact")}
            </p>
            <p className="mt-2 font-semibold text-emerald-600">
              info@greendesert.sa
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
