"use client"

import { useLanguage } from "@/components/language-provider"
import { MiniNavbar, type MiniSection } from "@/components/mini-navbar"
import { SectionCompanyHero } from "@/components/section-company-hero"
import { SectionCompanyLeadership } from "@/components/section-company-leadership"
import { SectionCompanyMission } from "@/components/section-company-mission"
import { SectionCompanyStory } from "@/components/section-company-story"
import { SectionCompanyTeam } from "@/components/section-company-team"
import { SectionCompanyValues } from "@/components/section-company-values"
import { SectionCompanyVision } from "@/components/section-company-vision"
import { cn } from "@/lib/utils"

const COMPANY_NAV_SECTIONS: MiniSection[] = [
  { id: "story", key: "mini.story" },
  { id: "vision", key: "mini.vision" },
  { id: "mission", key: "mini.mission" },
  { id: "values", key: "mini.values" },
  { id: "team", key: "mini.team" },
  { id: "leadership", key: "mini.leadership" },
]

export function ClientCompany() {
  const { t, isRTL, language, languageRoute } = useLanguage()

  return (
    <main className={cn(isRTL ? "rtl" : "ltr")} dir={isRTL ? "rtl" : "ltr"} lang={language}>
      <SectionCompanyHero />

      <div className="pt-[5%]">
        {/* <MiniNavbar sections={COMPANY_NAV_SECTIONS} /> */}
        <SectionCompanyStory />
        <SectionCompanyVision />
        <SectionCompanyMission />
        <SectionCompanyValues />
        <SectionCompanyTeam />
        <SectionCompanyLeadership />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Green Desert',
            url: `https://greendesert.sa/${languageRoute}/company`,
            sameAs: [
              'https://www.linkedin.com/company/green-desert-sa/',
              'https://www.instagram.com/greendesertsa/',
              'https://twitter.com/Greendesertsa',
              'https://www.youtube.com/@GreenDesertsa',
            ],
            description: t('company.schema.description'),
            foundingDate: '2020-01-01',
            foundingLocation: 'Saudi Arabia',
            areaServed: ['SA', 'GCC', 'MENA'],
          }),
        }}
      />
    </main>
  )
}
