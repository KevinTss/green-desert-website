"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Badge, Heading } from "@/components/typography"
import { Button } from "@/components/ui/button"

export function SectionSolutionsWalkthrough() {
  const { t } = useLanguage()

  return (
    <Section className="bg-gray-50">
      <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <Heading as="h3" size="2xl">
            {t("solutions.details.walkthroughHeading")}
          </Heading>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {t("solutions.details.walkthroughDescription")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <Link href="mailto:info@greendesert.sa?subject=Project%20assessment">
                {t("solutions.details.actions.schedule")}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-emerald-400 text-emerald-600 hover:bg-emerald-50">
              <Link href="/company-profile.pdf" target="_blank" rel="noopener noreferrer">
                {t("solutions.details.actions.specs")}
              </Link>
            </Button>
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-white p-6 text-sm text-slate-600 shadow-sm">
          <p>
            {t("solutions.details.actions.contact")}
          </p>
          <p className="mt-2 font-semibold text-emerald-600">
            info@greendesert.sa
          </p>
        </div>
      </div>
    </Section>
  )
}
