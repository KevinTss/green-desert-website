"use client"

import * as React from "react"
import Image from "next/image"
import { useContent, useLanguage } from "@/components/language-provider"
import { LinkedinIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import { getAssetPath } from "@/lib/assets"
import Link from "next/link"
import footerContentEn from "@/content/i18n/en/footer.json"

type FooterContent = typeof footerContentEn

export const Footer = () => {
  const { languageRoute } = useLanguage()
  const { footer: rawFooter } = useContent()
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState<"idle" | "success" | "error">("idle")

  const footer = (rawFooter as (Partial<FooterContent> & Record<string, any>)) ?? {}

  const resolvedFollowLabel =
    typeof footer.follow === "string"
      ? footer.follow
      : footer.follow?.label ?? footerContentEn.follow.label

  const resolvedFollowLinks =
    footer && typeof footer.follow === "object" && Array.isArray(footer.follow?.links)
      ? footer.follow.links
      : footerContentEn.follow.links

  const resolvedNewsletter = footer.newsletter ?? footerContentEn.newsletter
  const resolvedDescription = footer.description ?? footerContentEn.description
  const resolvedSections = Array.isArray(footer.sections) ? footer.sections : footerContentEn.sections
  const resolvedLegal = footer.legal ?? footerContentEn.legal
  const resolvedLogo = footer.logo ?? footerContentEn.logo

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setSubmitted("error")
      return
    }
    setSubmitted("success")
  }

  const isExternalLink = (href?: string) =>
    !!href && (/^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:"))

  const formatHref = (href?: string) => {
    if (!href) return "#"
    if (href.startsWith("#")) return href
    if (isExternalLink(href)) return href
    return href.startsWith("/") ? `/${languageRoute}${href}` : href
  }

  const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    youtube: YoutubeIcon,
    linkedin: LinkedinIcon,
  }

  return (
    <footer id="site-footer" className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16 sm:px-8 lg:px-12">
        {/* Top section - Follow us with icons - Full width */}
        <div className="flex items-center justify-between pb-8 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-900">{resolvedFollowLabel}</span>
            <div className="flex items-center gap-2">
              {resolvedFollowLinks.map(({ href, icon, label }) => {
                const Icon = icon ? socialIconMap[icon] : undefined
                if (!Icon || !href) return null
                return (
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
                )
              })}
            </div>
          </div>
        </div>

        {/* Newsletter signup section */}
        <div className="py-12 border-b border-gray-200">
          <div className="max-w-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {resolvedNewsletter.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {resolvedNewsletter.description}
            </p>
          </div>
          <form onSubmit={onSubmit} className="relative">
            <input
              type="email"
              inputMode="email"
              placeholder={resolvedNewsletter.placeholder}
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (submitted !== 'idle') setSubmitted('idle') }}
              className="w-full px-4 py-2.5 pr-28 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              aria-invalid={submitted === 'error'}
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 px-6 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              {resolvedNewsletter.cta}
            </button>
          </form>
          {submitted === 'error' && (
            <p className="mt-2 text-sm text-red-600">{resolvedNewsletter.error}</p>
          )}
          {submitted === 'success' && (
            <p className="mt-2 text-sm text-emerald-600">{resolvedNewsletter.success}</p>
          )}
        </div>

        {/* Main content - Tagline + 3 columns */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Tagline text only */}
          <div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {resolvedDescription}
            </p>
          </div>

          {resolvedSections.map((section, idx) => (
            <div key={section.title ?? `section-${idx}`}>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links?.map((item) => {
                  const href = formatHref(item.href)
                  const isExternal = isExternalLink(item.href)
                  if (isExternal) {
                    return (
                      <li key={item.label ?? href}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {item.label ?? href}
                        </a>
                      </li>
                    )
                  }
                  return (
                    <li key={item.label ?? href}>
                      <Link href={href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        {item.label ?? href}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Image
            src={getAssetPath(resolvedLogo?.src || "/logo_GD_black_EN.png")}
            alt={resolvedLogo?.alt || "Green Desert Logo"}
            width={140}
            height={35}
            className="h-7 w-auto"
          />
          <p className="text-sm text-gray-600">{resolvedLegal?.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
