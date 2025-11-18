"use client"

import { useLanguage } from "@/components/language-provider"
import { MiniNavbar } from "@/components/mini-navbar"
import { PageHero } from "@/components/page-hero"
import { Paragraph } from "@/components/paragraph"
import { Section } from "@/components/section"

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

        <Section className="mt-10 min-h-[80vh] w-full flex items-center bg-gray-50">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
              {t('sponsors.vision.title')}
            </h2>
            <Paragraph>{t('sponsors.vision.body')}</Paragraph>
          </div>
        </Section>

        <Section className="mt-10 min-h-[80vh] w-full flex items-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
              {t('sponsors.journey.title')}
            </h2>
            <Paragraph>{t('sponsors.journey.p1')}</Paragraph>
            <Paragraph>{t('sponsors.journey.p2')}</Paragraph>
            <Paragraph>{t('sponsors.journey.p3')}</Paragraph>
          </div>
        </Section>
      </div>
    </main>
  )
}
