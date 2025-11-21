"use client"

import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Badge, Heading, Text } from "@/components/typography"
import type { SolutionSectorDefinition } from "@/lib/solutions"

interface SectionSolutionDetailContentProps {
  solution: SolutionSectorDefinition
}

export function SectionSolutionDetailContent({ solution }: SectionSolutionDetailContentProps) {
  const { t } = useLanguage()

  return (
    <Section className="bg-slate-50">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <Badge className="text-emerald-600">
            {t("solutions.details.businessHeading")}
          </Badge>
          <Heading size="lg">
            {t(solution.titleKey)}
          </Heading>
          {solution.businessKeys.map((key) => (
            <Text key={key}>
              {t(key)}
            </Text>
          ))}
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
          <Heading size="lg" className="text-emerald-700">
            {t("solutions.details.useCasesHeading")}
          </Heading>
          <ul className="mt-4 space-y-3">
            {solution.useCaseKeys.map((key) => (
              <li key={key} className="flex items-start gap-3">
                <span className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <Text className="m-0">
                  {t(key)}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
