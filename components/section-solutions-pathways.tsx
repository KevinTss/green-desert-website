"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { SOLUTION_SECTORS } from "@/lib/solutions"
import { getAssetPath } from "@/lib/assets"
import { Badge, Heading } from "./typography"
import { Play, Pause } from "lucide-react"

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

function SolutionCard({ sector, languageRoute, t }: { sector: typeof SOLUTION_SECTORS[0], languageRoute: string, t: (key: string) => string }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const href = `/${languageRoute}/solutions/${sector.slug}`
  const image = getAssetPath(sector.image || getSectorImage(sector.slug))
  const video = sector.video ? getAssetPath(sector.video) : null

  const togglePlayPause = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Link
      href={href}
      className="group flex h-full flex-shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-white transition"
      style={{ width: 'calc(25%)' }}
    >
      <div className="relative h-[50%] min-h-[220px] w-full overflow-hidden rounded-3xl">
        {video ? (
          <>
            <video
              ref={videoRef}
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
            />
            <button
              onClick={togglePlayPause}
              className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur-sm transition hover:bg-white hover:scale-110"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" fill="currentColor" />
              ) : (
                <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
              )}
            </button>
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-slate-900/5 to-slate-900/25 pointer-events-none" />
          </>
        ) : (
          <>
            <Image
              src={image}
              alt={t(sector.titleKey)}
              fill
              sizes="(min-width: 1280px) 320px, (min-width: 768px) 280px, 240px"
              className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-slate-900/5 to-slate-900/25" />
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between px-4 pb-5 pt-4">
        <Heading as="h3" size="md">
          {t(sector.titleKey)}
        </Heading>
        <p className="mt-2 text-[13px] leading-normal text-slate-600 line-clamp-2">
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
          {SOLUTION_SECTORS.map((sector) => (
            <SolutionCard
              key={sector.slug}
              sector={sector}
              languageRoute={languageRoute}
              t={t}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
