"use client"

import * as React from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { LinkedinIcon, InstagramIcon, TwitterIcon, YoutubeIcon, ArrowRight } from "lucide-react"
import { getAssetPath } from "@/lib/assets"
import { cn } from "@/lib/utils"

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
    <footer id="site-footer" className="bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 w-full py-10 space-y-10">
        {/* Follow us bar */}
        <div className={cn(
          "flex items-center border-b border-gray-200 pb-6 gap-3",
        )}>
          <div className="text-sm font-medium text-gray-700">{t('footer.follow')}</div>
          <div className="flex items-center gap-3">
            {[
              { href: "https://www.linkedin.com/company/green-desert-sa/", Icon: LinkedinIcon, label: "LinkedIn" },
              { href: "https://www.instagram.com/greendesertsa/", Icon: InstagramIcon, label: "Instagram" },
              { href: "https://twitter.com/Greendesertsa", Icon: TwitterIcon, label: "Twitter" },
              { href: "https://www.youtube.com/@GreenDesertsa", Icon: YoutubeIcon, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tagline only */}
          <div>
            <p className={cn("text-base md:text-lg text-gray-700 leading-normal", isRTL ? "text-right" : "text-left")}>
              {t('footer.description')}
            </p>
          </div>

          {/* Company */}
          <div>
            <div className="mb-8">
              <h4 className={cn("font-bold mb-4 text-gray-900", isRTL ? "text-right" : "text-left")}>{t('footer.products')}</h4>
              <ul className={cn("space-y-2 text-sm text-gray-600", isRTL ? "text-right" : "text-left")}>
                {[
                  { href: "#", label: t('products.hemp_seeds') },
                  { href: "#", label: t('products.temperature_boxes') },
                  { href: "#", label: t('products.hemp_fibers') },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-gray-900 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <h4 className={cn("font-bold mb-4 text-gray-900", isRTL ? "text-right" : "text-left")}>{t('footer.company')}</h4>
            <ul className={cn("space-y-2 text-sm text-gray-600", isRTL ? "text-right" : "text-left")}>
              {[
                { href: `/${languageRoute}/company`, label: t('nav.about') },
                { href: "#", label: "Careers" },
                { href: "#", label: t('nav.products') },
                { href: "#", label: t('nav.services') },
                { href: "#", label: t('mini.news') },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-gray-900 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products + Services stacked */}
          <div>
            <div className="mb-8">
              <h4 className={cn("font-bold mb-4 text-gray-900", isRTL ? "text-right" : "text-left")}>{t('footer.services')}</h4>
              <ul className={cn("space-y-2 text-sm text-gray-600", isRTL ? "text-right" : "text-left")}>
                {[
                  { href: "#", label: t('services.sustainability.title') },
                  { href: "#", label: t('services.research.title') },
                  { href: "#", label: t('services.education.title') },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-gray-900 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>


            {/* Newsletter signup */}
            <div className="md:col-span-3">
              <h4 className={cn("font-bold mb-2 text-gray-900", isRTL ? "text-right" : "text-left")}>{t('footer.newsletter.title')}</h4>
              <p className={cn("text-sm text-gray-600 mb-4", isRTL ? "text-right" : "text-left")}>{t('footer.newsletter.description')}</p>
              <form onSubmit={onSubmit} className={cn("flex flex-col gap-3 items-start", isRTL && "items-end")}>
                <div className="relative w-full md:w-96">
                  <input
                    type="email"
                    inputMode="email"
                    placeholder={t('footer.newsletter.placeholder')}
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (submitted !== 'idle') setSubmitted('idle') }}
                    className={cn(
                      "w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-600",
                      isRTL ? "pl-10 pr-4 text-right" : "pr-10 pl-4"
                    )}
                    aria-invalid={submitted === 'error'}
                  />
                  <button
                    type="submit"
                    aria-label={t('footer.newsletter.cta')}
                    className={cn(
                      "absolute top-1/2 -translate-y-1/2 p-1 rounded-md text-green-700 hover:text-green-800",
                      isRTL ? "left-2" : "right-2"
                    )}
                  >
                    <ArrowRight className={cn("w-5 h-5", isRTL && "rotate-180")} />
                  </button>
                </div>
              </form>
              {submitted === 'error' && (
                <p className={cn("mt-2 text-sm text-gray-500", isRTL ? "text-right" : "text-left")}>{t('footer.newsletter.error')}</p>
              )}
              {submitted === 'success' && (
                <p className={cn("mt-2 text-sm text-gray-500", isRTL ? "text-right" : "text-left")}>{t('footer.newsletter.success')}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={cn(
          "border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between",
        )}>
          <div className="mb-4 md:mb-0">
            <Image
              src={getAssetPath("/logo_GD_black_EN.png")}
              alt="Green Desert Logo"
              width={140}
              height={35}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-gray-600 text-center">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
