"use client"

import * as React from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { LinkedinIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import { getAssetPath } from "@/lib/assets"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const Footer = () => {
  const { t, isRTL, languageRoute } = useLanguage()
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState<"idle" | "success" | "error">("idle")

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setSubmitted("error")
      return
    }
    setSubmitted("success")
  }

  return (
    <footer id="site-footer" className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16 sm:px-8 lg:px-12">
        {/* Top section - Follow us with icons - Full width */}
        <div className="flex items-center justify-between pb-8 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-900">{t('footer.follow')}</span>
            <div className="flex items-center gap-2">
              {[
                { href: "https://twitter.com/Greendesertsa", Icon: TwitterIcon, label: "Twitter" },
                { href: "https://www.instagram.com/greendesertsa/", Icon: InstagramIcon, label: "Instagram" },
                { href: "https://www.youtube.com/@GreenDesertsa", Icon: YoutubeIcon, label: "YouTube" },
                { href: "https://www.linkedin.com/company/green-desert-sa/", Icon: LinkedinIcon, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter signup section */}
        <div className="py-12 border-b border-gray-200">
          <div className="max-w-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {t('footer.newsletter.title')}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t('footer.newsletter.description')}
            </p>
          </div>
          <form onSubmit={onSubmit} className="relative">
            <input
              type="email"
              inputMode="email"
              placeholder={t('footer.newsletter.placeholder')}
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (submitted !== 'idle') setSubmitted('idle') }}
              className="w-full px-4 py-2.5 pr-28 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              aria-invalid={submitted === 'error'}
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 px-6 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              {t('footer.newsletter.cta')}
            </button>
          </form>
          {submitted === 'error' && (
            <p className="mt-2 text-sm text-red-600">{t('footer.newsletter.error')}</p>
          )}
          {submitted === 'success' && (
            <p className="mt-2 text-sm text-emerald-600">{t('footer.newsletter.success')}</p>
          )}
        </div>

        {/* Main content - Tagline + 3 columns */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Tagline text only */}
          <div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Column 2 - About submenu */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{t('nav.about')}</h4>
            <ul className="space-y-3">
              {[
                { href: `/${languageRoute}/company#story`, label: t('nav.about.story') },
                { href: `/${languageRoute}/company#vision`, label: t('nav.about.vision') },
                { href: `/${languageRoute}/company#leadership`, label: t('nav.about.leadership') },
                { href: `/${languageRoute}/company#timeline`, label: t('nav.about.timeline') },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Solutions submenu (top 4) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{t('nav.solutions')}</h4>
            <ul className="space-y-3">
              {[
                { href: `/${languageRoute}/solutions/cultivation`, label: t('solutions.sectors.cultivation.title') },
                { href: `/${languageRoute}/solutions/construction`, label: t('solutions.sectors.construction.title') },
                { href: `/${languageRoute}/solutions/textiles`, label: t('solutions.sectors.textiles.title') },
                { href: `/${languageRoute}/solutions/energy`, label: t('solutions.sectors.energy.title') },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${languageRoute}/solutions`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t('nav.menu.learnMore')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Home sections */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{t('nav.home')}</h4>
            <ul className="space-y-3">
              {[
                { href: `/${languageRoute}#mission`, label: t('company.mission.title') },
                { href: `/${languageRoute}#services`, label: t('nav.services') },
                { href: `/${languageRoute}#partners`, label: t('home.partners.title') },
                { href: `/${languageRoute}#news`, label: t('mini.news') },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Image
            src={getAssetPath("/logo_GD_black_EN.png")}
            alt="Green Desert Logo"
            width={140}
            height={35}
            className="h-7 w-auto"
          />
          <p className="text-sm text-gray-600">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
