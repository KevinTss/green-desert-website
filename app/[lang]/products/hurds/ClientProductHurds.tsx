"use client"

import { useLanguage } from "@/components/language-provider"
import { MiniNavbar } from "@/components/mini-navbar"
import { PageHero } from "@/components/page-hero"
import { PageSection } from "@/components/page-section"
import { Paragraph } from "@/components/paragraph"
import { getAssetPath } from "@/lib/assets"
import { cn } from "@/lib/utils"
import Image from 'next/image'

export function ClientProductHurds() {
  const { t, isRTL, language } = useLanguage()
  const sections = [
    { id: 'overview', key: 'mini.overview' },
    { id: 'features', key: 'mini.features' },
    { id: 'why', key: 'mini.why' },
  ] as const

  return (
    <main className={`${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
      <PageHero title={t('product.hurds.title')} badge={t('product.hurds.badge')} />
      <div>
        <MiniNavbar sections={[...sections]} />

        {/* Overview with large cover image */}
        <PageSection id='overview' title={t('product.hurds.title')} isBgGray>
          <div className={cn(
            `flex flex-col gap-8 items-center`
          )}>
            <Paragraph>{t('product.hurds.overview.body')}</Paragraph>
            <Image
              src={getAssetPath('/hemp_hurds_mulch-443x300.png')}
              alt="Hemp hurds cover"
              width={800}
              height={450}
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md"
              priority={false}
            />
          </div>
        </PageSection>

        {/* Features grid */}
        <PageSection id='features' title={t('product.hurds.features.title')}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ['product.hurds.features.absorption.title', 'product.hurds.features.absorption.body'],
              ['product.hurds.features.odor.title', 'product.hurds.features.odor.body'],
              ['product.hurds.features.comfort.title', 'product.hurds.features.comfort.body'],
              ['product.hurds.features.eco.title', 'product.hurds.features.eco.body'],
            ].map(([titleKey, bodyKey]) => (
              <div key={titleKey} className="p-6 rounded-xl border bg-white/80 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{t(titleKey)}</h3>
                <Paragraph>{t(bodyKey)}</Paragraph>
              </div>
            ))}
          </div>
        </PageSection>

        {/* Why choose + small product image */}
        <PageSection id='why' title={t('product.hurds.why.title')} isBgGray>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <Paragraph>{t('product.hurds.why.body')}</Paragraph>
            </div>
            <div className="relative">
              <Image
                src={getAssetPath('/hurds.png')}
                alt="Hemp hurds product"
                width={600}
                height={400}
                className="w-full h-56 object-cover"
                priority={false}
              />
            </div>
          </div>
        </PageSection>
      </div>
    </main>
  )
}
