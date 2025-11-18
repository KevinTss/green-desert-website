"use client"

import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { getAssetPath } from "@/lib/assets"
import { Section } from "@/components/section"

const COMPANY_HERO_IMAGE = "/fiber-cover.jpg"

export const SectionCompanyHero = () => {
  const { t } = useLanguage()

  return (
    <Section disablePadding className="relative min-h-[95vh]" data-hero="true">
      <div className="relative flex min-h-[95vh] w-full items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src={getAssetPath(COMPANY_HERO_IMAGE)}
            alt={t("company.title")}
            fill
            priority
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-slate-950/50" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 text-center text-white sm:px-12 lg:px-20">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
            {t("company.badge")}
          </p>
          <h1 className="mt-5 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {t("company.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t("company.intro")}
          </p>
        </div>
      </div>
    </Section>
  )
}
