"use client"

import { getAssetPath } from "@/lib/assets"

interface VideoHeroProps {
  videoUrl?: string
  posterUrl?: string
  children: React.ReactNode
}

export function VideoHero({ children }: VideoHeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video Background */}

      <video
        className="w-full h-full object-cover"
        controls={false}
        muted
        autoPlay
        loop
        playsInline
      >
        <source src={getAssetPath("/sliderV.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="absolute top-0 left-0 z-10 h-full">{children}</div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
