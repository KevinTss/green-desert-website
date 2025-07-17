import { VideoHero } from "@/components/video-hero"
import { useLanguage } from "@/components/language-provider"


export const Section1Hero = () => {
  const { t, isRTL } = useLanguage()

  return (
    <VideoHero
      videoUrl="/sliderV.mp4"
      posterUrl="/placeholder.svg?height=800&width=1400"
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className={`text-white max-w-2xl ${isRTL ? "text-right" : "text-left"}`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{t("hero.title")}</h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">{t("hero.subtitle")}</p>
        </div>
      </div>
    </VideoHero>
  )
}
