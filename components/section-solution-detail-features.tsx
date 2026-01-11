"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"
import { Section } from "@/components/section"
import { Heading } from "./typography"
import { getAssetPath } from "@/lib/assets"
import { CarouselContainer } from "@/components/carousel-container"

function FeatureCard({ feature }: { feature: { title?: string; description?: string; video?: string | null } }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

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
    <div className="flex flex-shrink-0 flex-col overflow-hidden rounded-3xl">
      <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
        {feature.video ? (
          <>
            <video
              ref={videoRef}
              src={getAssetPath(feature.video)}
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            <button
              onClick={togglePlayPause}
              className="absolute bottom-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur-sm transition hover:bg-white hover:scale-110"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" fill="currentColor" />
              ) : (
                <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
              )}
            </button>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500">
            No media
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-gray-200/5 to-gray-200/10" />
      </div>
      <div className="flex flex-col px-2 pb-6 pt-5">
        {feature.title && (
          <Heading as="h3" size="lg" className="mb-4">
            {feature.title}
          </Heading>
        )}
        {feature.description && (
          <p className="text-base text-slate-600 leading-relaxed">
            {feature.description}
          </p>
        )}
      </div>
    </div>
  )
}

export function SectionSolutionDetailFeatures({ content }: {
  content?: {
    title?: string;
    subtitle?: string;
    items?: Array<{
      title?: string;
      description?: string;
      video?: string | null;
    }>;
  } | null
}) {
  const cardsPerView = 2
  const features = content?.items ?? []

  if (!features.length) return null

  return (
    <Section className="bg-white" id="features">
      <div className="container mx-auto px-4">
        {(content?.title || content?.subtitle) && (
          <div className="max-w-4xl mb-12">
            {content.title && (
              <Heading size="2xl" className="leading-tight">
                {content.title}
              </Heading>
            )}
            {content.subtitle && (
              <Heading size="xl" className="leading-none">
                {content.subtitle}
              </Heading>
            )}
          </div>
        )}
        <CarouselContainer itemCount={features.length} itemsPerView={cardsPerView} gap={8}>
          {features.map((feature: any, idx: number) => (
            <div
              key={feature.id ?? `feature-${idx}`}
              className="flex-shrink-0"
              style={{ width: `calc(${100 / cardsPerView}% - ${(8 * (cardsPerView - 1)) / cardsPerView}px)` }}
            >
              <FeatureCard feature={feature} />
            </div>
          ))}
        </CarouselContainer>
      </div>
    </Section>
  )
}
