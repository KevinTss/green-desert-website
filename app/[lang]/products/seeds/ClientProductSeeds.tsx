"use client"

import { useLanguage } from "@/components/language-provider"
import { MiniNavbar } from "@/components/mini-navbar"
import { PageHero } from "@/components/page-hero"
import { Paragraph } from "@/components/paragraph"
import { getAssetPath } from "@/lib/assets"
import Image from 'next/image'
import { Section } from "@/components/section"

export function ClientProductSeeds() {
  const { t, isRTL, language } = useLanguage()
  const sections = [
    { id: 'overview', key: 'mini.overview' },
    { id: 'features', key: 'mini.features' },
    { id: 'quality', key: 'mini.quality' },
    { id: 'why', key: 'mini.why' },
  ] as const

  return (
    <main className={`${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
      <PageHero title={t('product.seeds.title')} badge={t('product.seeds.badge')} />
      <div>
        {/* <MiniNavbar sections={[...sections]} /> */}

        {/* Overview */}
        <Section id='overview' className="mt-10 min-h-[80vh] w-full flex items-center bg-gray-50">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
              {t('product.seeds.title')}
            </h2>
            <div className="flex flex-col gap-8 items-center">
              <Paragraph>{t('product.seeds.overview.body')}</Paragraph>
              <Image
                src={getAssetPath('/hemp_seeds_AdobeStock-443x300.jpeg')}
                alt="Hemp seeds cover"
                width={800}
                height={450}
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md"
                priority={false}
              />
            </div>
          </div>
        </Section>

        {/* Features */}
        <Section id='features' className="mt-10 min-h-[80vh] w-full flex items-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
              {t('product.seeds.features.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                ['product.seeds.features.nutrients.title', 'product.seeds.features.nutrients.body'],
                ['product.seeds.features.fats.title', 'product.seeds.features.fats.body'],
                ['product.seeds.features.versatile.title', 'product.seeds.features.versatile.body'],
              ].map(([titleKey, bodyKey]) => (
                <div key={titleKey} className="p-6 rounded-xl border bg-white/80 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">{t(titleKey)}</h3>
                  <Paragraph>{t(bodyKey)}</Paragraph>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Quality */}
        <Section id='quality' className="mt-10 min-h-[80vh] w-full flex items-center bg-gray-50">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
              {t('product.seeds.quality.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['product.seeds.quality.p1', 'product.seeds.quality.p2', 'product.seeds.quality.p3'].map((k) => (
                <div key={k} className="p-6 rounded-xl border bg-white/80 shadow-sm">
                  <Paragraph>{t(k)}</Paragraph>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Why */}
        <Section id='why' className="mt-10 min-h-[80vh] w-full flex items-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
              {t('product.seeds.why.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <Paragraph>{t('product.seeds.why.body')}</Paragraph>
              </div>
              <div className="relative">
                <Image
                  src={getAssetPath('/seeds.png')}
                  alt="Hemp seeds product"
                  width={600}
                  height={400}
                  className="w-full h-56 object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  )
}
