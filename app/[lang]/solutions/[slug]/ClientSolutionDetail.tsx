"use client"

import { SectionSolutionDetailHero } from "@/components/section-solution-detail-hero"
import { SectionSolutionDetailIntro } from "@/components/section-solution-detail-intro"
import { SectionSolutionDetailShowcase } from "@/components/section-solution-detail-showcase"
import { SectionSolutionDetailContent } from "@/components/section-solution-detail-content"
import { MiniNavbar } from "@/components/mini-navbar"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { getSolutionBySlug } from "@/lib/solutions"

export function ClientSolutionDetail({ slug }: { slug: string }) {
  const { isRTL, language } = useLanguage()
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    return null
  }

  return (
    <main className={cn(isRTL ? "rtl" : "ltr")} dir={isRTL ? "rtl" : "ltr"} lang={language}>
      <SectionSolutionDetailHero solution={solution} />
      <div className="pt-[5%]">
        <MiniNavbar sections={[
          { id: "overview", key: "mini.solution.overview" },
          { id: "showcase", key: "mini.solution.showcase" },
          { id: "approach", key: "mini.solution.approach" },
        ]} />
        <SectionSolutionDetailIntro solution={solution} />
        <SectionSolutionDetailShowcase solution={solution} />
        <SectionSolutionDetailContent solution={solution} />
      </div>
    </main>
  )
}
