"use client"

import Image from "next/image"
import { Section } from "@/components/section"
import { Heading, Label } from "./typography"
import { CarouselContainer } from "@/components/carousel-container"

const partners = [
  {
    id: "partner-1",
    image: "/partners/oasis-energy.svg",
    label: "Trusted Tester",
    description: "Agility Robotics",
  },
  {
    id: "partner-2",
    image: "/partners/desert-labs.svg",
    label: "Partner",
    description: "Apptronik",
  },
  {
    id: "partner-3",
    image: "/partners/green-horizon.svg",
    label: "Trusted Tester",
    description: "Boston Dynamics",
  },
  {
    id: "partner-4",
    image: "/partners/sahara-foundation.svg",
    label: "Trusted Tester",
    description: "Agile Robots",
  },
]

export function SectionSolutionDetailPartners() {
  const cardsPerView = 4

  return (
    <Section className="bg-white" id="partners">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12">
          <Heading size="2xl" className="leading-tight">
            Collaborations
          </Heading>
          <Heading size="xl" className="leading-none">
            We’re partnering with Apptronik to build the next generation of humanoid robots. We’re also working with over 60 trusted testers to guide the future of Gemini Robotics-ER.
          </Heading>
        </div>
        <CarouselContainer itemCount={partners.length} itemsPerView={cardsPerView}>
          {partners.map((partner) => {
            return (
              <div
                key={partner.id}
                className="flex flex-shrink-0 flex-col overflow-hidden rounded-3xl"
                style={{ width: `calc(${100 / cardsPerView}% - ${(6 * (cardsPerView - 1)) / cardsPerView}px)` }}
              >
                <div className="relative aspect-video w-full bg-gray-50 flex items-center justify-center overflow-hidden rounded-3xl">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full text-emerald-200">
                    <Image src={partner.image} alt={partner.label} width={48} height={48} className="object-contain" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-gray-200/5 to-gray-200/10" />
                </div>
                <div className="flex flex-1 flex-col justify-between px-2 pb-6 pt-5">
                  <Label className="mb-3 text-xs">
                    {partner.label}
                  </Label>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {partner.description}
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
