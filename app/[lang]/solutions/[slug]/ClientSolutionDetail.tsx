"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getSolutionBySlug } from "@/lib/solutions"
import { Section } from "@/components/section"

const DEFAULT_PREZI = "https://prezi.com/embed/6p0dzyxytq0x/"

function resolveEmbedUrl(envKey?: string) {
  if (!envKey) return DEFAULT_PREZI
  const value = (process.env[envKey] || "").trim()
  if (!value) return DEFAULT_PREZI
  return /^https?:\/\//i.test(value) ? value : DEFAULT_PREZI
}

export function ClientSolutionDetail({ slug }: { slug: string }) {
  const { t, languageRoute, isRTL, language } = useLanguage()
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    return null
  }

  const embedUrl = resolveEmbedUrl(solution.preziEnvKey)
  const contactHref = `mailto:info@greendesert.sa?subject=${encodeURIComponent(`${t(solution.titleKey)} assessment`)}`
  const scheduleHref = contactHref
  const specsHref = solution.specLink || "/company-profile.pdf"

  return (
    <main className={cn(isRTL ? "rtl" : "ltr")} dir={isRTL ? "rtl" : "ltr"} lang={language}>
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

      <Section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold">
                  {t("solutions.details.walkthroughHeading")}
                </h2>
                <p className="mt-3 text-sm text-white/80">
                  {t("solutions.details.walkthroughDescription")}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button asChild variant="secondary" className="bg-white/15 text-white hover:bg-white/25">
                    <Link href={scheduleHref}>{t("solutions.details.actions.schedule")}</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                    <Link href={contactHref}>{t("solutions.details.actions.contact")}</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl bg-black/40">
                  <iframe
                    src={embedUrl}
                    title={`${t(solution.titleKey)} walkthrough`}
                    className="h-[320px] w-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
