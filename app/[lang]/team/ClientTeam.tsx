"use client"

import { useLanguage } from "@/components/language-provider"
import { MiniNavbar } from "@/components/mini-navbar"
import { PageHero } from "@/components/page-hero"
import { PageSection } from "@/components/page-section"
import { Paragraph } from "@/components/paragraph"
import { getAssetPath } from "@/lib/assets"
import { LinkedinIcon, InstagramIcon, TwitterIcon, MailIcon } from "lucide-react"

export function ClientTeam() {
  const { t, isRTL, language } = useLanguage()

  const sections = [
    { id: 'vision', key: 'mini.vision' },
    { id: 'journey', key: 'mini.journey' },
  ] as const

  return (
    <main className={`${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
      <PageHero title={t('team.title')} badge={t('team.badge')} />

      <div className="">
        <MiniNavbar sections={[...sections]} />

        <PageSection title={t('team.vision.title')} isBgGray>
          <Paragraph>{t('team.vision.body')}</Paragraph>
        </PageSection>

        {/* Journey: includes member cards */}
        <section id="journey" className="scroll-mt-24 py-16 min-h-[80vh] flex items-center bg-gray-50">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('team.journey.title')}</h2>
            <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
              <p>{t('team.journey.p1')}</p>
              <p>{t('team.journey.p2')}</p>
            </div>

            {/* Members grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border rounded-xl p-6 bg-white shadow-sm">
                <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
                  <img
                    src={getAssetPath('/placeholder-user.jpg')}
                    alt={t('team.member.abdulhadi.name')}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t('team.member.abdulhadi.name')}</h3>
                    <p className="text-gray-600 text-sm">{t('team.member.abdulhadi.role')}</p>
                  </div>
                </div>
                <p className={`mt-4 text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>{t('team.member.abdulhadi.bio')}</p>

                <div className={`mt-4 flex items-center gap-3 ${isRTL ? 'justify-start' : 'justify-start'}`}>
                  <a aria-label="email" href="mailto:info@greendesert.sa" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><MailIcon size={16} /></a>
                  <a aria-label="LinkedIn" href="https://www.linkedin.com/company/green-desert-sa/" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><LinkedinIcon size={16} /></a>
                  <a aria-label="Instagram" href="https://www.instagram.com/greendesertsa/" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><InstagramIcon size={16} /></a>
                  <a aria-label="Twitter" href="https://twitter.com/Greendesertsa" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><TwitterIcon size={16} /></a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-gray-700 leading-relaxed">
              <p>{t('team.journey.p3')}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

