import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { PartnersCarousel } from "@/components/partners-carousel"
import { ProcessExplainer } from "@/components/process-explainer"

export const Section2OurMission = () => {
  const { t } = useLanguage()
  return (
    <section id="story" className="py-16 lg:py-20 relative overflow-hidden flex items-center min-h-[60vh]">
      <div className="container mx-auto px-4">
        <PartnersCarousel />
        <div className="max-w-4xl mt-40">
          <p className="text-xs font-semibold tracking-[0.35em] text-gray-500 uppercase">
            1. {t("about.smallTitle")}
          </p>
          <p
            className={cn(
              "mt-4 text-lg lg:text-xl text-gray-600 leading-relaxed",
            )}
          >
            {t("about.smallDescription")}
          </p>
        </div>
        <ProcessExplainer />
      </div>
    </section>
  )
}
