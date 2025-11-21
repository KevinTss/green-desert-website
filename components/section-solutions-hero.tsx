"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"

const HERO_STATS = [
  { key: "solutions.hero.stats.projects" },
  { key: "solutions.hero.stats.emissions" },
  { key: "solutions.hero.stats.partners" },
] as const

export function SectionSolutionsHero() {
  const { t } = useLanguage()

  return (
    <Section className="relative overflow-hidden bg-slate-950 text-white">
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
          {HERO_STATS.map((stat) => (
            <div key={stat.key} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm font-medium text-white/80">
              {t(stat.key)}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
