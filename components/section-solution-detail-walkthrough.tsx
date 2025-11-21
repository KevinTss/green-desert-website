"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import type { SolutionSectorDefinition } from "@/lib/solutions"

interface SectionSolutionDetailWalkthroughProps {
  solution: SolutionSectorDefinition
  scheduleHref: string
  contactHref: string
  embedUrl: string
}

export function SectionSolutionDetailWalkthrough({
  solution,
  scheduleHref,
  contactHref,
  embedUrl,
}: SectionSolutionDetailWalkthroughProps) {
  const { t } = useLanguage()

  return (
    <Section className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">
                {t("solutions.details.walkthroughHeading")}
              </h2>
              <p className="mt-3 text-sm text-white/80">
                {t("solutions.details.walkthroughDescription")}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild variant="secondary" className="bg-white/15 text-white hover:bg-white/25">
                  <Link href={scheduleHref}>{t("solutions.details.actions.schedule")}</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={contactHref}>{t("solutions.details.actions.contact")}</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-2xl bg-black/40">
                <iframe
                  src={embedUrl}
                  title={`${t(solution.titleKey)} walkthrough`}
                  className="h-[320px] w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
