"use client"

import Image from "next/image"
import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { SOLUTION_SECTORS } from "@/lib/solutions"
import { getAssetPath } from "@/lib/assets"
import { Badge, Heading } from "./typography"

const sectorImages: Record<string, string> = {
  cultivation: "/seeds-cover.webp",
  construction: "/hemp-blocks-01-443x300.webp",
  textiles: "/fiber-cover.webp",
  energy: "/diagram-1.webp",
  biocomposites: "/fiber-pack.webp",
  waste: "/placeholder.webp",
  agriculture: "/seeds-pack.webp",
  "animal-care": "/hurd-bag.webp",
  cosmetics: "/abbb.webp",
  food: "/hemp_seeds_AdobeStock-443x300.webp",
  pharma: "/back-ab.webp",
  services: "/placeholder.webp",
}

function getSectorImage(slug: string) {
  return sectorImages[slug] ?? "/placeholder.webp"
}

export function SectionSolutionsPathways() {
  const { t, languageRoute } = useLanguage()

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <Badge variant="emerald" size="xs">
            {t("solutions.pathways.title")}
          </Badge>
          <Heading size="xl" className="mt-3">
            {t("solutions.pathways.subtitle")}
          </Heading>
        </div>
        <div className="relative mt-12 flex h-[440px] gap-6 overflow-x-auto overflow-y-visible pb-4 snap-x snap-mandatory">
          {SOLUTION_SECTORS.map((sector) => {
            const href = `/${languageRoute}/solutions/${sector.slug}`
            const image = getAssetPath(sector.image || getSectorImage(sector.slug))
            return (
              <Link
                key={sector.slug}
                href={href}
                className="group flex h-full flex-shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-white transition"
                style={{ width: 'calc(25%)' }}
              >
                <div className="relative h-[50%] min-h-[220px] w-full overflow-hidden rounded-3xl">
                  <Image
                    src={image}
                    alt={t(sector.titleKey)}
                    fill
                    sizes="(min-width: 1280px) 320px, (min-width: 768px) 280px, 240px"
                    className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-slate-900/5 to-slate-900/25" />
                </div>
                <div className="flex flex-1 flex-col justify-between px-4 pb-5 pt-4">
                  <Heading as="h3" size="md">
                    {t(sector.titleKey)}
                  </Heading>
                  <p className="mt-2 text-[13px] leading-normal text-slate-600">
                    {t(sector.summaryKey)}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[13px] font-semibold text-emerald-600">
                    <span>{t("nav.menu.learnMore")}</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-emerald-400 group-hover:text-emerald-600 transition">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
