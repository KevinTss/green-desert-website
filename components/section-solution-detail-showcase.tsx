"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"

import { Section } from "@/components/section"
import { getAssetPath } from "@/lib/assets"

const SOLUTION_DETAIL_SHOWCASE_FALLBACK_IMAGE = "/hurd-cover.jpg"

export function SectionSolutionDetailShowcase({
  content
}: {
  content?: {
    image?: string | null,
    video?: string | null
  } | null
}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  if (!content) return null

  const imageSrc = getAssetPath(content?.image || SOLUTION_DETAIL_SHOWCASE_FALLBACK_IMAGE)
  const videoSrc = content.video ? getAssetPath(content.video) : null

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
    <Section className="bg-slate-50" id="showcase">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
          {videoSrc ? (
            <>
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              <button
                onClick={togglePlayPause}
                className="absolute bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur-sm transition hover:bg-white hover:scale-110"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" fill="currentColor" />
                ) : (
                  <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                )}
              </button>
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-slate-900/5 to-slate-900/25 pointer-events-none" />
            </>
          ) : (
            <>
              <Image
                src={imageSrc}
                alt="Showcase image"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 1280px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-slate-900/5 to-slate-900/25" />
            </>
          )}
        </div>
      </div>
    </Section>
  )
}
