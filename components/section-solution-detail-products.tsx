"use client"

import { Section } from "@/components/section"
import { Heading } from "./typography"
import { Button } from "./ui/button"
import { Brain, ChevronRight, Cpu, Eye } from "lucide-react"

const CARDS = [
  {
    title: "Gemini Robotics 1.5",
    description: "Our most capable vision-language-action (VLA) model. It can ‘see’ (vision), ‘understand’ (language) and ‘act’ (action) within the physical world. It processes visual inputs and user prompts, learning within different embodiments and increasing its ability to generalize problem-solving.",
    icon: Eye,
  },
  {
    title: "Gemini Robotics-ER 1.5",
    description: "Our state-of-the-art embodied reasoning model. It specializes in understanding physical spaces, planning, and making logical decisions relating to its surroundings. It doesn’t directly control robotic limbs – but provides high-level insights to help the VLA model decide what to do next.",
    icon: Brain,
  },
  {
    title: "Gemini Robotics On-Device",
    description: "This iteration of our VLA model is incredibly versatile, and optimized to run locally on robotic devices. This will allow robotics developers to adapt the model to improve performance on their own applications.",
    icon: Cpu,
  },
]

export function SectionSolutionDetailProducts() {
  return (
    <Section className="bg-white" id="products">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12">
          <Heading size="2xl" className="leading-tight">
            Model and tools
          </Heading>
          <Heading size="xl" className="leading-none max-w-3xl">
            We take a dual-model approach, pairing a vision-language-action (VLA) with an embodied reasoning (ER) model. Each model plays a specialized role, working together as a powerful and versatile system.
          </Heading>
          <ul className="flex mt-16">
            {CARDS.map((card, index) => {
              const Icon = card.icon
              return (
                <li className="w-72 mr-12 flex flex-col" key={index}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon className="h-8 w-8" />
                  </div>
                  <Heading as="h3" size="lg" className="mb-4 mt-6">
                    {card.title}
                  </Heading>
                  <p className="text-base text-slate-600 leading-relaxed mb-6 flex-1">
                    {card.description}
                  </p>
                  <Button variant="link" className="px-0 self-start hover:no-underline">
                    Learn more <ChevronRight />
                  </Button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
