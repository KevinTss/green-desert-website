"use client"

import { Section } from "@/components/section"
import { Heading } from "./typography"
import { Button } from "./ui/button"

export function SectionSolutionDetailSpotlight({ content }: {
  content?: {
    "title"?: string,
    "subtitle"?: string,
    "ctaLabel"?: string,
    "ctaHref"?: string,
  } | null
}) {
  if (!content) return null
  return (
    <Section className="bg-white" id="spotlight">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12">
          {content.title && (
            <Heading size="2xl" className="leading-tight">
              {content.title}
            </Heading>
          )}
          {content.subtitle && (
            <Heading size="xl" className="leading-none max-w-3xl">
              {content.subtitle}
            </Heading>
          )}
          {content.ctaLabel && content.ctaHref && (
            <Button className="rounded-full px-8 mt-10" asChild>
              <a href={content.ctaHref}>
                {content.ctaLabel}
              </a>
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}
