"use client"

import { useState, useMemo } from "react"
import { useContent } from "@/components/language-provider"
import { AnimatedHeadline } from "./animated-headline"
import Image from "next/image"
import Link from "next/link"
import { getAssetPath } from "@/lib/assets"
import { AnimatePresence, motion } from "framer-motion"
import { Section } from "@/components/section"
import { Text as TypographyText } from "@/components/typography"

export const Section1Hero = () => {
  const { home } = useContent()
  const hero = home?.hero
  const [activePhrase, setActivePhrase] = useState(0)

  const slides = useMemo(() => {
    const data = Array.isArray(hero?.slides) ? hero.slides : []
    if (!data.length) return []
    return data.map((slide) => ({
      text: slide.text ?? "",
      color: slide.color ?? "#F2B67D",
      image: getAssetPath(slide.image ?? "/fiber-cover.jpg"),
    }))
  }, [hero?.slides])

  const backgroundImage = slides[activePhrase]?.image ?? getAssetPath("/fiber-cover.jpg")

  return (
    <Section disablePadding className="relative min-h-[95vh]" data-hero="true">
      <div className="relative flex min-h-[95vh] w-full items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={backgroundImage}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Image
                src={backgroundImage}
                alt=""
                fill
                priority
                className="object-cover object-center opacity-80"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-slate-950/25" />
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-6 py-12 text-center text-white sm:px-12 lg:px-16">
          {hero?.title && hero.slides && hero.slides.length > 0 && (
            <AnimatedHeadline
              prefix={hero.title}
              phrases={slides.map(({ text, color }) => ({ text, color }))}
              onPhraseChange={setActivePhrase}
            />
          )}
          {hero?.subtitle && (
            <TypographyText variant="white-muted" className="mx-auto mt-4 max-w-2xl">
              {hero.subtitle}
            </TypographyText>
          )}
        </div>

        <Link 
          href="https://saudiarabia.un.org/en/sdgs" 
          target="_blank"
          className="absolute bottom-10 right-10 "
          style={{ background: "red" }}
        >
          <Image
            src={getAssetPath("/sdq-logo.png")}
            alt="SDG logo"
            width={144}
            height={65}
          />
          </Link>
      </div>
    </Section>
  )
}
