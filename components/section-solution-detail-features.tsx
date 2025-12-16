"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"
import { Section } from "@/components/section"
import { Heading } from "./typography"
import { getAssetPath } from "@/lib/assets"
import { CarouselContainer } from "@/components/carousel-container"

const features = [
  {
    id: "feature-1",
    title: "Advanced Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    video: "/sliderV.mp4",
  },
  {
    id: "feature-2",
    title: "Sustainable Solutions",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    video: "/sliderV.mp4",
  },
  {
    id: "feature-3",
    title: "Expert Support",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    video: "/sliderV.mp4",
  },
]

function FeatureCard({ feature }: { feature: typeof features[0] }) {
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-gray-200/5 to-gray-200/10" />
      </div>
      <div className="flex flex-col px-2 pb-6 pt-5">
        <Heading as="h3" size="lg" className="mb-4">
          {feature.title}
        </Heading>
        <p className="text-base text-slate-600 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export function SectionSolutionDetailFeatures() {
  const cardsPerView = 2

  return (
    <Section className="bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12">
          <Heading size="2xl" className="leading-tight">
            Hands-on
          </Heading>
          <Heading size="xl" className="leading-none">
            See how Gemini Robotics handles a range of different tasks.orem ipsum dolor sit amet consectetur adipiscing elit
          </Heading>
        </div>
        <CarouselContainer itemCount={features.length} itemsPerView={cardsPerView} gap={8}>
          {features.map((feature) => (
            <div
              key={feature.id}
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
