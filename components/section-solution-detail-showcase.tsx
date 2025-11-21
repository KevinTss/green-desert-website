"use client"

import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Badge, Heading, Text } from "@/components/typography"
import { getAssetPath } from "@/lib/assets"
import type { SolutionSectorDefinition } from "@/lib/solutions"

const SOLUTION_DETAIL_SHOWCASE_FALLBACK_IMAGE = "/hurd-cover.jpg"

interface SectionSolutionDetailShowcaseProps {
  solution: SolutionSectorDefinition
}

export function SectionSolutionDetailShowcase({ solution }: SectionSolutionDetailShowcaseProps) {
  const { t } = useLanguage()
  const imageSrc = getAssetPath(solution.image || SOLUTION_DETAIL_SHOWCASE_FALLBACK_IMAGE)
  const secondaryParagraph = solution.highlightKeys.map((key) => t(key)).join(" ")

  return (
    <Section className="bg-slate-50">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
          <Image
            src={imageSrc}
            alt={t(solution.titleKey)}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 90vw"
            priority
          />
        </div>
        <div className="space-y-5">
          <Badge className="text-emerald-600">
            {t(solution.taglineKey)}
          </Badge>
          <Heading size="2xl">
            {t(solution.titleKey)}
          </Heading>
          <Text>
            {t(solution.summaryKey)}
          </Text>
          <Text>
            {secondaryParagraph}
          </Text>
        </div>
      </div>
    </Section>
  )
}
