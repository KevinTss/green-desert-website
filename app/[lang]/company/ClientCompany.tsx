"use client"

import { useLanguage } from "@/components/language-provider"

import { MiniNavbar } from "@/components/mini-navbar"

export function ClientCompany() {
  const { t, isRTL, language, languageRoute } = useLanguage()

  const sections = [
    { id: 'vision', key: 'mini.vision' },
    { id: 'journey', key: 'mini.journey' },
  ] as const

  return (
    <main className={`pt-28 pb-16 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
      {/* Hero */}
      <section className="text-center">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm uppercase tracking-wider text-green-700 font-semibold">
            {t('company.badge')}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {t('company.title')}
          </h1>
        </div>
      </section>

      {/* Sticky Mini Navbar */}
      <div className="px-6">
        <MiniNavbar sections={[...sections]} />

        {/* Vision */}
        <section id="vision" className="mt-10 py-16 min-h-[80vh] w-full flex items-center bg-gray-50">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">{t('company.vision.title')}</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {t('company.vision.body')}
            </p>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="py-16 min-h-[80vh] flex items-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">{t('company.journey.title')}</h2>
            <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
              <p>{t('company.journey.p1')}</p>
              <p>{t('company.journey.p2')}</p>
              <p>{t('company.journey.p3')}</p>
            </div>
          </div>
        </section>
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
    </main>
  )
}
