"use client"

import { Section } from "@/components/section"

export function SectionSolutionDetailOverview({ content }: { content?: string[] }) {
  if (!content?.length) return null

  return (
    <Section className="bg-white" id="overview">
      <div className="container mx-auto max-w-[700px] px-6 sm:px-8 lg:px-12">
        {content.map((p, idx) => (
          <p
            key={idx}
            className={`leading-relaxed text-gray-700 ${idx === 0 ? "text-lg sm:text-xl" : "text-base mt-6 text-gray-600"}`}
          >
            {p}
          </p>
        ))}
      </div>
    </Section>
  )
}
