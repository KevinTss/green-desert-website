"use client"

import { useLanguage } from "@/components/language-provider"
import { MiniNavbar } from "@/components/mini-navbar"
import { PageHero } from "@/components/page-hero"
import { PageSection } from "@/components/page-section"
import { Paragraph } from "@/components/paragraph"

export function ClientSponsors() {
  const { t, isRTL, language } = useLanguage()

  const sections = [
    { id: 'vision', key: 'mini.vision' },
    { id: 'journey', key: 'mini.journey' },
  ] as const

  return (
    <main className={`${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
      <PageHero title={t('sponsors.title')} badge={t('sponsors.badge')} />

      <div className="">
        <MiniNavbar sections={[...sections]} />

        <PageSection title={t('sponsors.vision.title')} isBgGray>
          <Paragraph>{t('sponsors.vision.body')}</Paragraph>
        </PageSection>

        <PageSection title={t('sponsors.journey.title')}>
          <Paragraph>{t('sponsors.journey.p1')}</Paragraph>
          <Paragraph>{t('sponsors.journey.p2')}</Paragraph>
          <Paragraph>{t('sponsors.journey.p3')}</Paragraph>
        </PageSection>
      </div>
    </main>
  )
}

