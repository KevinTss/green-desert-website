import { useLanguage } from "@/components/language-provider"
import { PartnersCarousel } from "@/components/partners-carousel"
import { ProcessExplainer } from "@/components/process-explainer"
import { Badge, Text } from "@/components/typography"

export const Section2OurMission = () => {
  const { t } = useLanguage()
  return (
    <section id="story" className="py-16 lg:py-20 relative overflow-hidden flex items-center min-h-[60vh]">
      <div className="container mx-auto px-4">
        <PartnersCarousel />
        <div className="max-w-4xl mt-40">
          <Badge>
            {t("about.smallTitle")}
          </Badge>
          <Text size="lg" className="mt-4 lg:text-xl">
            {t("about.smallDescription")}
          </Text>
        </div>
        <ProcessExplainer />
      </div>
    </section>
  )
}
