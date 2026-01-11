"use client"

import { Section } from "@/components/section"
import { Heading, Label } from "./typography"
import { Button } from "./ui/button"
import { useContent } from "@/components/language-provider"

export function SectionSolutionWaitingList() {
  const { labels } = useContent()
  const waitlist = labels?.solutionWaitlist

  if (!waitlist) return null

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        {waitlist.label && <Label>{waitlist.label}</Label>}
        {waitlist.title && (
          <Heading size="xl" className="">
            {waitlist.title}
          </Heading>
        )}
        {waitlist.subtitle && (
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {waitlist.subtitle}
          </p>
        )}
        {waitlist.cta && waitlist.href && (
          <Button className="rounded-full px-8 mt-10" asChild>
            <a href={waitlist.href}>
              {waitlist.cta}
            </a>
          </Button>
        )}
      </div>
    </Section>
  )
}
