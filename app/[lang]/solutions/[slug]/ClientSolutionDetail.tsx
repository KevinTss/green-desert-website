"use client";

import { SectionSolutionDetailHero } from "@/components/section-solution-detail-hero";
import { SectionSolutionDetailOverview } from "@/components/section-solution-detail-overview";
import { SectionSolutionDetailShowcase } from "@/components/section-solution-detail-showcase";
import { SectionSolutionDetailContent } from "@/components/section-solution-detail-content";
import { SectionSolutionDetailHighlights } from "@/components/section-solution-detail-highlights";
import { SectionSolutionDetailFeatures } from "@/components/section-solution-detail-features";
import { MiniNavbar } from "@/components/mini-navbar";
import { useContent, useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import { SectionSolutionDetailSpotlight } from "@/components/section-solution-detail-spotlight";
import { SectionSolutionDetailProducts } from "@/components/section-solution-detail-products";
import { SectionSolutionDetailSignUp } from "@/components/section-solution-detail-sign-up";
import { SectionSolutionWaitingList } from "@/components/section-solution-detail-waiting-list";
import { SectionSolutionDetailPartners } from "@/components/section-solution-detail-partners";

export function ClientSolutionDetail({ slug }: { slug: string }) {
  const { isRTL, language } = useLanguage();
  const { solutions } = useContent();
  const detail = (solutions?.details as any)?.[slug];
  const navSections = detail
    ? solutions.detailsMiniNav.filter((section: any) => !!detail?.[section.id])
    : undefined;

  if (!detail) return null;

  return (
    <main
      className={cn(isRTL ? "rtl" : "ltr")}
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
    >
      <SectionSolutionDetailHero slug={slug} content={detail.hero} />
      <div className="pt-[5%]">
        {navSections && (
          <MiniNavbar contentKey="solutions" sections={navSections} />
        )}
        <SectionSolutionDetailOverview content={detail.overview?.paragraphs} />
        <SectionSolutionDetailShowcase content={detail.showcase} />
        <SectionSolutionDetailContent content={detail.approach?.paragraphs} />
        <SectionSolutionDetailHighlights content={detail.highlights} />
        <SectionSolutionDetailFeatures content={detail.features} />
        <SectionSolutionDetailSpotlight content={detail.spotlight} />
        <SectionSolutionDetailProducts content={detail.products} />
        <SectionSolutionDetailSignUp />
        <SectionSolutionDetailPartners content={detail.partners} />
        <SectionSolutionWaitingList />
      </div>
    </main>
  );
}
