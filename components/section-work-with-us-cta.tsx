"use client"

import Link from "next/link"
import { useContent } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Badge, Text as TypographyText } from "@/components/typography"

interface SectionWorkWithUsCtaProps {
  muted?: boolean
}

export function SectionWorkWithUsCta({ muted }: SectionWorkWithUsCtaProps) {
  const { solutions } = useContent()
  const content = solutions?.workWithUs

  return (
    <Section className={muted ? "bg-gray-50" : "bg-white"}>
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-gray-100 bg-white px-6 py-8 shadow-sm md:px-10 md:py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              {content?.label && (
                <Badge variant="emerald-dark" size="xs">
                  {content?.label}
                </Badge>
              )}
              {content?.body && (
                <TypographyText className="mt-2 text-sm sm:text-base text-slate-700">
                  {content.body}
                </TypographyText>
              )}
            </div>
            {content?.cta?.href && content?.cta?.label && (
              <Button asChild size="lg" className="shrink-0 bg-emerald-600 text-white hover:bg-emerald-700">
                <Link href={content.cta.href}>
                  {content.cta.label}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
