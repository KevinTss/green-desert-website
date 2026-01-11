"use client"

import { Section } from "@/components/section"
import { Heading, Label } from "./typography"
import { Button } from "./ui/button"
import { useContent } from "@/components/language-provider"

export function SectionSolutionDetailSignUp() {
  const { labels } = useContent()
  const newsletter = labels?.solutionNewsletter ?? {}

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        {newsletter.label && <Label>{newsletter.label}</Label>}
        {newsletter.title && (
          <Heading size="xl" className="">
            {newsletter.title}
          </Heading>
        )}
        {newsletter.subtitle && (
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {newsletter.subtitle}
          </p>
        )}
        {newsletter.cta && newsletter.href && (
          <Button className="rounded-full px-8 mt-10" asChild>
            <a href={newsletter.href}>
              {newsletter.cta}
            </a>
          </Button>
        )}
      </div>
    </Section>
  )
}
