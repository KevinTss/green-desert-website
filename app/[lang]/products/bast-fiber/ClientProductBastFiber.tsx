"use client"

import { useLanguage } from "@/components/language-provider"
import { MiniNavbar } from "@/components/mini-navbar"
import { PageHero } from "@/components/page-hero"
import { Paragraph } from "@/components/paragraph"
import { getAssetPath } from "@/lib/assets"
import Image from 'next/image'
import { Section } from "@/components/section"

export function ClientProductBastFiber() {
  const { t, isRTL, language } = useLanguage()
  const sections = [
    { id: 'overview', key: 'mini.overview' },
    { id: 'features', key: 'mini.features' },
    { id: 'apps', key: 'mini.apps' },
    { id: 'why', key: 'mini.why' },
  ] as const

  return (
    <main className={`${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
      <PageHero title={t('product.bastFiber.title')} badge={t('product.bastFiber.badge')} />
      <div>
        <MiniNavbar sections={[...sections]} />

        {/* Overview */}
        <Section id='overview' className="mt-10 min-h-[80vh] w-full flex items-center bg-gray-50">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
              {t('product.bastFiber.title')}
            </h2>
            <div className="flex flex-col gap-8 items-center">
              <Paragraph>{t('product.bastFiber.overview.body')}</Paragraph>
              <Image
                src={getAssetPath('/bast-fiber.png')}
                alt="Hemp bast fiber cover"
                width={800}
                height={450}
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md"
                priority={false}
              />
            </div>
          </div>
        </Section>

        {/* Key Benefits */}
        <Section id='features' className="mt-10 min-h-[80vh] w-full flex items-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
              {t('product.bastFiber.features.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ['product.bastFiber.features.strength.title', 'product.bastFiber.features.strength.body'],
                ['product.bastFiber.features.light.title', 'product.bastFiber.features.light.body'],
                ['product.bastFiber.features.sustainable.title', 'product.bastFiber.features.sustainable.body'],
                ['product.bastFiber.features.versatile.title', 'product.bastFiber.features.versatile.body'],
              ].map(([titleKey, bodyKey]) => (
                <div key={titleKey} className="p-6 rounded-xl border bg-white/80 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">{t(titleKey)}</h3>
                  <Paragraph>{t(bodyKey)}</Paragraph>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Applications */}
        <Section id='apps' className="mt-10 min-h-[80vh] w-full flex items-center bg-gray-50">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
              {t('product.bastFiber.apps.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                ['product.bastFiber.apps.textiles.title', 'product.bastFiber.apps.textiles.body'],
                ['product.bastFiber.apps.nonwoven.title', 'product.bastFiber.apps.nonwoven.body'],
                ['product.bastFiber.apps.industry.title', 'product.bastFiber.apps.industry.body'],
              ].map(([titleKey, bodyKey]) => (
                <div key={titleKey} className="p-6 rounded-xl border bg-white/80 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">{t(titleKey)}</h3>
                  <Paragraph>{t(bodyKey)}</Paragraph>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Why */}
        <Section id='why' className="mt-10 min-h-[80vh] w-full flex items-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
              {t('product.bastFiber.why.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <Paragraph>{t('product.bastFiber.why.body')}</Paragraph>
              </div>
              <div className="relative">
                <Image
                  src={getAssetPath('/bast-fiber.png')}
                  alt="Hemp bast fiber product"
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
