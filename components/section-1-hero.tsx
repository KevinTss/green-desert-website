import { useState, useMemo } from "react"
import { useLanguage } from "@/components/language-provider"
import { AnimatedHeadline } from "./animated-headline"
import Image from "next/image"
import { getAssetPath } from "@/lib/assets"
import { AnimatePresence, motion } from "framer-motion"
import { Section } from "@/components/section"

export const Section1Hero = () => {
  const { t } = useLanguage()
  const [activePhrase, setActivePhrase] = useState(0)

  const slides = useMemo(() => ([
    {
      text: t("hero.rotating.greener"),
      color: "text-[#F2B67D]",
      image: getAssetPath("/fiber-cover.jpg"),
    },
    {
      text: t("hero.rotating.bio"),
      color: "text-[#93A894]",
      image: getAssetPath("/hurd-cover.jpg"),
    },
    {
      text: t("hero.rotating.agriculture"),
      color: "text-[#949182]",
      image: getAssetPath("/seeds-cover.jpg"),
    },
  ]), [t])

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
          <div className="absolute inset-0 bg-slate-950/45" />
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-6 py-12 text-center text-white sm:px-12 lg:px-16">
          <AnimatedHeadline
            prefix={t("hero.title")}
            phrases={slides.map(({ text, color }) => ({ text, color }))}
            onPhraseChange={setActivePhrase}
          />
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-normal text-white/80 sm:text-base">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </Section>
  )
}
