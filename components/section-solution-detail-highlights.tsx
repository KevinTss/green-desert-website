"use client"

import { Section } from "@/components/section"
import { Heading } from "./typography"
import { CarouselContainer } from "@/components/carousel-container"
import { Lightbulb, Target, Zap, Shield, TrendingUp, Award } from "lucide-react"

const highlights = [
  {
    id: "highlight-1",
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "highlight-2",
    icon: Target,
    title: "Targeted Approach",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    id: "highlight-3",
    icon: Zap,
    title: "Fast Implementation",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    id: "highlight-4",
    icon: Shield,
    title: "Reliable & Secure",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    id: "highlight-5",
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  },
  {
    id: "highlight-6",
    icon: Award,
    title: "Industry Leading",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
]

export function SectionSolutionDetailHighlights() {
  const cardsPerView = 4

  return (
    <Section className="bg-white" id="highlights">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12">
          <Heading size="2xl" className="leading-tight">
            Capabilities
          </Heading>
          <Heading size="xl" className="leading-none">
            Gemini models are capable of responding to text, images, audio, and video. Gemini Robotics adds the ability to reason about physical spaces – allowing robots to take action in the real world.
          </Heading>
        </div>
        <CarouselContainer itemCount={highlights.length} itemsPerView={cardsPerView}>
          {highlights.map((highlight) => {
            const Icon = highlight.icon
            return (
              <div
                key={highlight.id}
                className="flex flex-shrink-0 flex-col overflow-hidden rounded-3xl"
                style={{ width: `calc(${100 / cardsPerView}% - ${(6 * (cardsPerView - 1)) / cardsPerView}px)` }}
              >
                <div className="relative aspect-video w-full bg-gray-50 flex items-center justify-center overflow-hidden rounded-3xl">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full text-emerald-200">
                    <Icon className="h-14 w-14" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-gray-200/5 to-gray-200/10" />
                </div>
                <div className="flex flex-1 flex-col justify-between px-2 pb-6 pt-5">
                  <Heading as="h3" size="md" className="mb-3">
                    {highlight.title}
                  </Heading>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            )
          })}
        </CarouselContainer>
      </div>
    </Section>
  )
}
