"use client"

import { Section } from "@/components/section"
import { Heading } from "./typography"
import { Button } from "./ui/button"


export function SectionSolutionDetailHighlight() {
  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12">
          <Heading size="2xl" className="leading-tight">
            Responsibly advancing AI and robotics
          </Heading>
          <Heading size="xl" className="leading-none max-w-3xl">
            To ensure Gemini Robotics benefits humanity, we’ve taken a comprehensive approach to safety, from practical safeguards to collaborations with experts, policymakers, and our Responsibility and Safety Council.
          </Heading>
          <Button className="rounded-full px-8 mt-10">
            Learn more
          </Button>
        </div>
      </div>
    </Section>
  )
}
