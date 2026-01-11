"use client"

import { Section } from "@/components/section"
import { Heading } from "./typography"
import { Button } from "./ui/button"
import { Icon } from "./ui/icon"

export function SectionSolutionDetailProducts({ content }: {
  content?: {
    title?: string,
    subtitle?: string,
    items?: Array<{
      icon?: string,
      title?: string,
      description?: string,
      ctaLabel?: string,
      ctaHref?: string,
    }>,
  } | null
}) {

  if (!content?.items?.length && !content?.title && !content?.subtitle) return null

  return (
    <Section className="bg-white" id="products">
      <div className="container mx-auto px-4">
        {(content?.title || content?.subtitle) && (
          <div className="max-w-4xl mb-12">
            {content?.title && (
              <Heading size="2xl" className="leading-tight">
                {content.title}
              </Heading>
            )}
            {content?.subtitle && (
              <Heading size="xl" className="leading-none max-w-3xl">
                {content.subtitle}
              </Heading>
            )}
          </div>
        )}
        {!!content?.items?.length && (
          <ul className="flex mt-16 flex-wrap gap-8">
            {content.items.map((card: any, index: number) => (
              <li className="w-72 flex flex-col" key={card.id ?? index}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  {card.icon ? <Icon name={card.icon} /> : "•"}
                </div>
                <Heading as="h3" size="lg" className="mb-4 mt-6">
                  {card.title}
                </Heading>
                <p className="text-base text-slate-600 leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                {card.ctaLabel && card.ctaHref && (
                  <Button variant="link" className="px-0 self-start hover:no-underline" asChild>
                    <a href={card.ctaHref}>
                      {card.ctaLabel}
                    </a>
                  </Button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  )
}
