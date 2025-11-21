"use client"

import Link from "next/link"
import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/assets"

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

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 text-center text-white sm:px-12 lg:px-20">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {t("solutions.hero.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t("solutions.hero.subtitle")}
          </p>
        </div>
      </div>
    </Section>
  )
}
