"use client"

import { Section1Hero } from "@/components/section-1-hero"
import { ScrollHeader } from "@/components/scroll-header"
import { Footer } from "@/components/footer"
import { Section2OurMission } from "@/components/section-2-our-mission"
import { Section3OurProducts } from "@/components/section-3-our-products"
import { Section4OurServices } from "@/components/section-4-our-services"
import { Section5Partners } from "@/components/section-5-partners"
import { Section6NewsClient } from "@/components/section-6-news-client"

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export default function Page({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-white">
      <ScrollHeader />
      <Section1Hero />
      <Section2OurMission />
      <Section3OurProducts />
      <Section4OurServices />
      <Section5Partners />
      <Section6NewsClient />
      <Footer />
    </div>
  )
}