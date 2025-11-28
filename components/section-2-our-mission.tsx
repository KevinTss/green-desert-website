import { useLanguage } from "@/components/language-provider"
import { PartnersCarousel } from "@/components/partners-carousel"
import { ProcessExplainer } from "@/components/process-explainer"
import { Badge, Text } from "@/components/typography"
import { Section } from "@/components/section"

export const Section2OurMission = () => {
  const { t } = useLanguage()
  return (
    <Section id="story" className="relative overflow-hidden flex items-center min-h-[60vh]">
      <div className="container mx-auto px-4">
        <PartnersCarousel />
        <div className="max-w-3xl mt-32">
          <Badge>
            {t("about.smallTitle")}
          </Badge>
          <Text size="lg" className="mt-3">
            {t("about.smallDescription")}
          </Text>
        </div>
        <ProcessExplainer />
      </div>
    </Section>
  )
}
