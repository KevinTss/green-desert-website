"use client"

import { Section } from "@/components/section"
import { Heading } from "./typography"
import { CarouselContainer } from "@/components/carousel-container"
import { Icon } from "@/components/ui/icon"

export function SectionSolutionDetailHighlights({
  content
}: {
  content?: {
    title?: string,
    subtitle?: string,
    items?: Array<{
      title?: string,
      description?: string
    }>
  } | null
}) {
  const cardsPerView = 4
  const highlights = content?.items ?? []
  const title = content?.title
  const subTitle = content?.subtitle

  if (!highlights.length) return null

  return (
    <Section className="bg-white" id="highlights">
      <div className="container mx-auto px-4">
        {(title || subTitle) && (
          <div className="max-w-4xl mb-12">
            {title && (
              <Heading size="2xl" className="leading-tight">
                {title}
              </Heading>
            )}
            {subTitle && (
              <Heading size="xl" className="leading-none">
                {subTitle}
              </Heading>
            )}
          </div>
        )}
        <CarouselContainer itemCount={highlights.length} itemsPerView={cardsPerView}>
          {highlights.map((highlight: any, idx: number) => (
            <div
              key={`highlight-${idx}`}
              className="flex flex-shrink-0 flex-col overflow-hidden rounded-3xl"
              style={{ width: `calc(${100 / cardsPerView}% - ${(6 * (cardsPerView - 1)) / cardsPerView}px)` }}
            >
              <div className="relative aspect-video w-full bg-gray-50 flex items-center justify-center overflow-hidden rounded-3xl">
                <div className="flex h-20 w-20 items-center justify-center rounded-full text-emerald-200">
                  {highlight.icon ? <Icon name={highlight.icon} className="h-14 w-14" /> : null}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-gray-200/5 to-gray-200/10" />
              </div>
              <div className="flex flex-1 flex-col justify-between px-2 pb-6 pt-5">
                {highlight.title && (
                  <Heading as="h3" size="md" className="mb-3">
                    {highlight.title}
                  </Heading>
                )}
                {highlight.description && (
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {highlight.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </CarouselContainer>
      </div>
    </Section>
  )
}
