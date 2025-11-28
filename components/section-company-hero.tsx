"use client"

import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { getAssetPath } from "@/lib/assets"
import { Section } from "@/components/section"
import { Badge, Heading, Text } from "@/components/typography"

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

        <div className="relative mx-auto w-full max-w-5xl px-6 py-12 text-center text-white sm:px-12 lg:px-16">
          <Badge variant="emerald-light">
            {t("company.badge")}
          </Badge>
          <Heading as="h1" size="3xl" variant="white" className="mt-4">
            {t("company.title")}
          </Heading>
          <Text variant="white" className="mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            {t("company.intro")}
          </Text>
        </div>
      </div>
    </Section>
  )
}
