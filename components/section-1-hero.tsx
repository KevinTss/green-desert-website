import { useState, useMemo } from "react"
import { useLanguage } from "@/components/language-provider"
import { AnimatedHeadline } from "./animated-headline"
import Image from "next/image"
import { getAssetPath } from "@/lib/assets"
import { AnimatePresence, motion } from "framer-motion"

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
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900">
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

          <div className="relative px-6 py-40 text-center text-white sm:px-12 lg:px-20">
            <AnimatedHeadline
              prefix={t("hero.title")}
              phrases={slides.map(({ text, color }) => ({ text, color }))}
              onPhraseChange={setActivePhrase}
            />
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
