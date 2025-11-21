"use client"

import { SectionSolutionDetailHero } from "@/components/section-solution-detail-hero"
import { SectionSolutionDetailOverview } from "@/components/section-solution-detail-overview"
import { SectionSolutionDetailWalkthrough } from "@/components/section-solution-detail-walkthrough"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { getSolutionBySlug } from "@/lib/solutions"

const DEFAULT_PREZI = "https://prezi.com/embed/6p0dzyxytq0x/"

function resolveEmbedUrl(envKey?: string) {
  if (!envKey) return DEFAULT_PREZI
  const value = (process.env[envKey] || "").trim()
  if (!value) return DEFAULT_PREZI
  return /^https?:\/\//i.test(value) ? value : DEFAULT_PREZI
}

export function ClientSolutionDetail({ slug }: { slug: string }) {
  const { t, isRTL, language } = useLanguage()
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
      <SectionSolutionDetailHero solution={solution} />
      <SectionSolutionDetailOverview solution={solution} />
      <SectionSolutionDetailWalkthrough
        solution={solution}
        scheduleHref={scheduleHref}
        contactHref={contactHref}
        embedUrl={embedUrl}
      />
    </main>
  )
}
