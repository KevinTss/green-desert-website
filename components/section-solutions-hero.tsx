"use client"

import Image from "next/image"

import { useContent } from "@/components/language-provider"
import { Section } from "@/components/section"
import { getAssetPath } from "@/lib/assets"
import { Heading, Text as TypographyText } from "@/components/typography"

export function SectionSolutionsHero() {
  const { solutions } = useContent()
  const hero = solutions?.hero

  if (!hero) return null

  return (
    <Section id="overview" disablePadding className="relative min-h-[95vh]" data-hero="true">
      <div className="relative flex min-h-[95vh] w-full items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src={getAssetPath(hero.image ?? "/hurd-cover.jpg")}
            alt={hero.title ?? ""}
            fill
            priority
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-slate-950/25" />
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-6 py-12 text-center text-white sm:px-12 lg:px-16">
          <Heading as="h1" size="3xl" variant="white">
            {hero.title}
          </Heading>
          {hero.subtitle && (
            <TypographyText variant="white" className="mx-auto mt-4 max-w-2xl text-sm sm:text-base">
              {hero.subtitle}
            </TypographyText>
          )}
        </div>
      </div>
    </Section>
  )
}
