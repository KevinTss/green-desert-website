"use client"

import Image from "next/image"
import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { getAssetPath } from "@/lib/assets"
import type { SolutionSectorDefinition } from "@/lib/solutions"
import { Heading, Text as TypographyText } from "@/components/typography"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  ChevronRight,
  Sprout,
  Home,
  Shirt,
  Zap,
  Package,
  Trash2,
  Wheat,
  PawPrint,
  Sparkles,
  UtensilsCrossed,
  Pill,
  Briefcase,
  type LucideIcon
} from "lucide-react"

interface SectionSolutionDetailHeroProps {
  solution: SolutionSectorDefinition
}

const SOLUTION_DETAIL_HERO_FALLBACK_IMAGE = "/hurd-cover.jpg"

const SOLUTION_ICONS: Record<string, LucideIcon> = {
  cultivation: Sprout,
  construction: Home,
  textiles: Shirt,
  energy: Zap,
  biocomposites: Package,
  waste: Trash2,
  agriculture: Wheat,
  "animal-care": PawPrint,
  cosmetics: Sparkles,
  food: UtensilsCrossed,
  pharma: Pill,
  services: Briefcase,
}

export function SectionSolutionDetailHero({
  solution,
}: SectionSolutionDetailHeroProps) {
  const { t, languageRoute } = useLanguage()
  const heroImage = getAssetPath(solution.image || SOLUTION_DETAIL_HERO_FALLBACK_IMAGE)
  const SolutionIcon = SOLUTION_ICONS[solution.slug] || Package

  return (
    <Section disablePadding className="relative min-h-[95vh]" data-hero="true">
      <div className="relative flex min-h-[95vh] w-full flex-col overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={t(solution.titleKey)}
            fill
            priority
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 sm:px-8 sm:pt-28 lg:px-12">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <div className="flex items-center gap-1.5 text-white/70">
                  <SolutionIcon className="h-4 w-4" />
                </div>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50">
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/${languageRoute}`} className="text-white/70 hover:text-white">
                    {t("nav.home")}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50">
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/${languageRoute}/solutions`} className="text-white/70 hover:text-white">
                    {t("nav.solutions")}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50">
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  {t(solution.titleKey)}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-12 text-white sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <Heading as="h1" size="3xl" variant="white">
              {t(solution.titleKey)}
            </Heading>
            <TypographyText variant="white" className="mt-4 text-sm sm:text-base">
              {t(solution.summaryKey)}
            </TypographyText>
          </div>
        </div>
      </div>
    </Section>
  )
}
