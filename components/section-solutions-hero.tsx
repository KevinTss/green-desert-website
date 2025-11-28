"use client"

import Link from "next/link"
import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/assets"
import { Heading, Text } from "@/components/typography"

const SOLUTIONS_HERO_IMAGE = "/hurd-cover.jpg"

export function SectionSolutionsHero() {
  const { t } = useLanguage()

  return (
    <Section disablePadding className="relative min-h-[95vh]" data-hero="true">
      <div className="relative flex min-h-[95vh] w-full items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src={getAssetPath(SOLUTIONS_HERO_IMAGE)}
            alt={t("solutions.hero.title")}
            fill
            priority
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-slate-950/50" />
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-6 py-12 text-center text-white sm:px-12 lg:px-16">
          <Heading as="h1" size="3xl" variant="white">
            {t("solutions.hero.title")}
          </Heading>
          <Text variant="white" className="mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            {t("solutions.hero.subtitle")}
          </Text>
        </div>
      </div>
    </Section>
  )
}
