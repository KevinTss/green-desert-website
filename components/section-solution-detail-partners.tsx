"use client"

import Image from "next/image"
import { Section } from "@/components/section"
import { Heading, Label } from "./typography"
import { CarouselContainer } from "@/components/carousel-container"

export function SectionSolutionDetailPartners({ content }: {
  content?: {
    title?: string
    subtitle?: string
    items: Array<{
      label?: string
      description?: string
      image?: string
    }>
  } | null
}) {
  const cardsPerView = 4

  if (!content?.items.length && !content?.title && !content?.subtitle) return null

  return (
    <Section className="bg-white" id="partners">
      <div className="container mx-auto px-4">
        {(content?.title || content?.subtitle) && (
          <div className="max-w-4xl mb-12">
            {content?.title && (
              <Heading size="2xl" className="leading-tight">
                {content.title}
              </Heading>
            )}
            {content?.subtitle && (
              <Heading size="xl" className="leading-none">
                {content.subtitle}
              </Heading>
            )}
          </div>
        )}
        {!!content?.items.length && (
          <CarouselContainer itemCount={content.items.length} itemsPerView={cardsPerView}>
            {content.items.map((partner: any, idx: number) => {
              return (
                <div
                  key={partner.id ?? idx}
                  className="flex flex-shrink-0 flex-col overflow-hidden rounded-3xl"
                  style={{ width: `calc(${100 / cardsPerView}% - ${(6 * (cardsPerView - 1)) / cardsPerView}px)` }}
                >
                  <div className="relative aspect-video w-full bg-gray-50 flex items-center justify-center overflow-hidden rounded-3xl">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full text-emerald-200">
                      {partner.image ? (
                        <Image src={partner.image} alt={partner.label ?? ""} width={48} height={48} className="object-contain" />
                      ) : (
                        <span className="text-xs font-semibold text-emerald-500">{partner.label ?? "Partner"}</span>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-gray-200/5 to-gray-200/10" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between px-2 pb-6 pt-5">
                    {partner.label && (
                      <Label className="mb-3 text-xs">
                        {partner.label}
                      </Label>
                    )}
                    {partner.description && (
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {partner.description}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </CarouselContainer>
        )}
      </div>
    </Section>
  )
}
