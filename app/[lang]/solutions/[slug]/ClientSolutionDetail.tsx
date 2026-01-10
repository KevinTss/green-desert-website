"use client"

import { SectionSolutionDetailHero } from "@/components/section-solution-detail-hero"
import { SectionSolutionDetailIntro } from "@/components/section-solution-detail-intro"
import { SectionSolutionDetailShowcase } from "@/components/section-solution-detail-showcase"
import { SectionSolutionDetailContent } from "@/components/section-solution-detail-content"
import { SectionSolutionDetailHighlights } from "@/components/section-solution-detail-highlights"
import { SectionSolutionDetailFeatures } from "@/components/section-solution-detail-features"
import { MiniNavbar } from "@/components/mini-navbar"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { getSolutionBySlug } from "@/lib/solutions"
import { SectionSolutionDetailHighlight } from "@/components/section-solution-detail-highlight"
import { SectionSolutionDetailProducts } from "@/components/section-solution-detail-products"
import { SectionSolutionDetailSignUp } from "@/components/section-solution-detail-sign-up"
import { SectionSolutionWaitingList } from "@/components/section-solution-detail-waiting-list"
import { SectionSolutionDetailPartners } from "@/components/section-solution-detail-partners"

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
        {/* <MiniNavbar sections={[
          { id: "overview", key: "mini.solution.overview" },
          { id: "showcase", key: "mini.solution.showcase" },
          { id: "approach", key: "mini.solution.approach" },
          { id: "highlights", key: "mini.solution.highlights" },
          { id: "features", key: "mini.solution.features" },
          { id: "products", key: "mini.solution.products" },
          { id: "partners", key: "mini.solution.partners" },
        ]} /> */}
        <SectionSolutionDetailIntro solution={solution} />
        <SectionSolutionDetailShowcase solution={solution} />
        <SectionSolutionDetailContent solution={solution} />
        <SectionSolutionDetailHighlights />
        <SectionSolutionDetailFeatures />
        <SectionSolutionDetailHighlight />
        <SectionSolutionDetailProducts />
        <SectionSolutionDetailSignUp />
        <SectionSolutionDetailPartners />
        <SectionSolutionWaitingList />
      </div>
    </main>
  )
}
