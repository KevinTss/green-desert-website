"use client"

import { Section1Hero } from "@/components/section-1-hero"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section2OurMission } from "@/components/section-2-our-mission"
import { Section3KpiStrip } from "@/components/section-3-kpi-strip"
import { Section4PersonaLinks } from "@/components/section-4-persona-links"
import { Section4OurServices } from "@/components/section-4-our-services"
import { Section5Partners } from "@/components/section-5-partners"
import { Section6NewsClient } from "@/components/section-6-news-client"
import { MiniNavbar } from "@/components/mini-navbar"

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export default function Page({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Section1Hero />
      {/* Sticky wrapper: overlaps hero with negative margin to visually place mini navbar */}
      {/* <div className="relative -mt-56 md:-mt-56 lg:-mt-60"> */}
      <div className="pt-3">
        <MiniNavbar />
        {/* <div className="mt-56 md:mt-56 lg:mt-60"> */}
        <div className="">
          <Section2OurMission />
          <Section3KpiStrip />
          <Section4PersonaLinks />
          {/* <Section4OurServices /> */}
          {/* <Section5Partners /> */}
          <Section6NewsClient />
        </div>
      </div>
      <Footer />
    </div>
  )
}
