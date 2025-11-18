"use client"

import { getAssetPath } from "@/lib/assets"
import { Section } from "@/components/section"

interface VideoHeroProps {
  videoUrl?: string
  posterUrl?: string
  children: React.ReactNode
}

const scrollToNextSection = () => {
  const heroHeight = window.innerHeight
  window.scrollTo({
    top: heroHeight,
    behavior: 'smooth'
  })
}

export function VideoHero({ children }: VideoHeroProps) {
  return (
    <Section disablePadding className="relative h-screen min-h-[600px] overflow-hidden">
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
      <div className="absolute top-0 left-0 right-0 z-10 h-full">{children}</div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer group"
        onClick={scrollToNextSection}
      >
        <div className="w-6 h-10 border border-white/60 rounded-full flex justify-center relative group-hover:border-white/80 transition-colors duration-300">
          <div className="w-0.5 h-2 bg-white/80 rounded-full mt-2 animate-scroll-indicator group-hover:bg-white transition-colors duration-300" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-indicator {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.7;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
      `}</style>
    </Section>
  )
}
