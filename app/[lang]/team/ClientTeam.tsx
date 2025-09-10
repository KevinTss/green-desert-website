"use client"

import { useLanguage } from "@/components/language-provider"
import { PageHero } from "@/components/page-hero"
import { getAssetPath } from "@/lib/assets"
import { LinkedinIcon, InstagramIcon, TwitterIcon, MailIcon } from "lucide-react"

export function ClientTeam() {
  const { t, isRTL, language } = useLanguage()

  return (
    <main className={`${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
      <PageHero title={t('team.title')} badge={t('team.badge')} />

      <div className="mx-auto max-w-6xl px-6">
        {/* Hadi block */}
        <section className="py-16">
          <div className={`flex flex-col md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''} items-center gap-10`}>
            <div className="shrink-0 relative">
              <img
                src={getAssetPath('/hadi.jpg')}
                alt={t('team.member.abdulhadi.name')}
                className="w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover ring-4 ring-white shadow-xl"
              />
            </div>
            <div className={`max-w-2xl ${isRTL ? 'md:-translate-y-4' : 'md:translate-y-4'}`}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{t('team.member.abdulhadi.name')}</h3>
              <p className="text-green-700 font-medium mt-1">{t('team.member.abdulhadi.role')}</p>
              <p className="mt-4 text-gray-700 leading-relaxed">{t('team.member.abdulhadi.bio')}</p>
              <div className="mt-5 flex items-center gap-3">
                <a aria-label="email" href="mailto:info@greendesert.sa" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><MailIcon size={18} /></a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/hadialamer/" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><LinkedinIcon size={18} /></a>
                <a aria-label="Instagram" href="https://www.instagram.com/alameraa2020/" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><InstagramIcon size={18} /></a>
                <a aria-label="Twitter" href="https://twitter.com/AlamerAA2020" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><TwitterIcon size={18} /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Lucas block (reverse) */}
        <section className="py-16">
          <div className={`flex flex-col md:flex-row ${isRTL ? '' : 'md:flex-row-reverse'} items-center gap-10`}>
            <div className="shrink-0 relative">
              <img
                src={getAssetPath('/lucas.jpg')}
                alt={t('team.member.lucas.name')}
                className="w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover ring-4 ring-white shadow-xl"
              />
            </div>
            <div className={`max-w-2xl ${isRTL ? 'md:translate-y-4' : 'md:-translate-y-4'}`}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{t('team.member.lucas.name')}</h3>
              <p className="text-green-700 font-medium mt-1">{t('team.member.lucas.role')}</p>
              <p className="mt-4 text-gray-700 leading-relaxed">{t('team.member.lucas.bio')}</p>
              <div className="mt-5 flex items-center gap-3">
                <a aria-label="email" href="mailto:info@greendesert.sa" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><MailIcon size={18} /></a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/lucasdietrich/" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><LinkedinIcon size={18} /></a>
                <a aria-label="Instagram" href="https://www.instagram.com/dietrichld2020/" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><InstagramIcon size={18} /></a>
                <a aria-label="Twitter" href="https://twitter.com/DietrichLD2020" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"><TwitterIcon size={18} /></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
