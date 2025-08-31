import { VideoHero } from "@/components/video-hero"
import { useLanguage } from "@/components/language-provider"
import { AnimatedHeadline } from "./animated-headline"
import { MiniNavbar } from "./mini-navbar"

export const Section1Hero = () => {
  const { t } = useLanguage()

  return (
    <VideoHero
      videoUrl="/sliderV.mp4"
      posterUrl="/placeholder.svg?height=800&width=1400"
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-white text-center w-4/5 sm:1/2">
          <AnimatedHeadline
            prefix={t("hero.title")}
            phrases={[
              { text: t("hero.rotating.greener"), color: "text-[#F2B67D]" },
              { text: t("hero.rotating.bio"), color: "text-[#93A894]" },
              { text: t("hero.rotating.agriculture"), color: "text-[#949182]" },
            ]}
          />
          <p className="text-md sm:text-xl mb-8 opacity-90 leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </VideoHero>
  )
}
