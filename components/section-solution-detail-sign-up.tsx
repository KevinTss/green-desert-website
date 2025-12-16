"use client"

import { Section } from "@/components/section"
import { Heading, Label } from "./typography"
import { Button } from "./ui/button"

export function SectionSolutionDetailSignUp() {
  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <Label>
          Gemini Robotics SDK
        </Label>
        <Heading size="xl" className="">
          This iteration of our VLA model is incredibly versatile, and optimized to run locally on robotic devices. This will allow robotics developers to adapt the model to improve performance on their own applications.
        </Heading>
        <Button className="rounded-full px-8 mt-10">
          Sign up to access SDK
        </Button>
      </div>
    </Section>
  )
}
