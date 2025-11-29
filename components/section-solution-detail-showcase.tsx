"use client"

import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { getAssetPath } from "@/lib/assets"
import type { SolutionSectorDefinition } from "@/lib/solutions"

const SOLUTION_DETAIL_SHOWCASE_FALLBACK_IMAGE = "/hurd-cover.jpg"

interface SectionSolutionDetailShowcaseProps {
  solution: SolutionSectorDefinition
}

export function SectionSolutionDetailShowcase({ solution }: SectionSolutionDetailShowcaseProps) {
  const { t } = useLanguage()
  const imageSrc = getAssetPath(solution.image || SOLUTION_DETAIL_SHOWCASE_FALLBACK_IMAGE)

  return (
    <Section className="bg-slate-50" id="showcase">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
          <Image
            src={imageSrc}
            alt={t(solution.titleKey)}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 1280px, 100vw"
            priority
          />
        </div>
      </div>
    </Section>
  )
}
