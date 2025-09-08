"use client"

import { useLanguage } from "@/components/language-provider"

import { MiniNavbar } from "@/components/mini-navbar"
import { PageHero } from "@/components/page-hero"
import { PageSection } from "@/components/page-section"
import { Paragraph } from "@/components/paragraph"

export function ClientCompany() {
  const { t, isRTL, language, languageRoute } = useLanguage()

  const sections = [
    { id: 'vision', key: 'mini.vision' },
    { id: 'journey', key: 'mini.journey' },
  ] as const

  return (
    <main className={`${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
      <PageHero title={t('company.title')} badge={t('company.badge')} />

      <div className="">
        <MiniNavbar sections={[...sections]} />

        <PageSection title={t('company.mission.title')} isBgGray>
          <Paragraph>
            {t('company.mission.body')}
          </Paragraph>
        </PageSection>

        <PageSection title={t('company.journey.title')}>
          <Paragraph>{t('company.journey.p1')}</Paragraph>
          <Paragraph>{t('company.journey.p2')}</Paragraph>
          <Paragraph>{t('company.journey.p3')}</Paragraph>
        </PageSection>
      </div>

      {/* Structured data */}
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
            areaServed: 'SA',
          }),
        }}
      />
    </main >
  )
}
