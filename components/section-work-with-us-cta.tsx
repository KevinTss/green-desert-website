"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SectionWorkWithUsCtaProps {
  muted?: boolean
}

export function SectionWorkWithUsCta({ muted }: SectionWorkWithUsCtaProps) {
  const { t } = useLanguage()

  return (
    <Section className={muted ? "bg-gray-50" : "bg-white"}>
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-gray-100 bg-white px-6 py-8 shadow-sm md:px-10 md:py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                {t("cta.workWithUs.title")}
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                {t("cta.workWithUs.body")}
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0 bg-emerald-600 text-white hover:bg-emerald-700">
              <Link href="mailto:info@greendesert.sa?subject=Work%20with%20Green%20Desert">
                {t("cta.workWithUs.action")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
