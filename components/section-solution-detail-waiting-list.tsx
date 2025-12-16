"use client"

import { Section } from "@/components/section"
import { Heading, Label } from "./typography"
import { Button } from "./ui/button"

export function SectionSolutionWaitingList() {
  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <Label>
          Experience Gemini Robotics
        </Label>
        <Heading size="xl" className="">
          If you're interested in testing our models, please share a few details to join the waitlist.
        </Heading>
        <Button className="rounded-full px-8 mt-10">
          Join waiting list
        </Button>
      </div>
    </Section>
  )
}
