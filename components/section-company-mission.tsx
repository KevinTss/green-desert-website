import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Heading, Text } from "@/components/typography"

export function SectionCompanyMission() {
  const { t } = useLanguage()

  return (
    <Section id="mission">
      <div className="container mx-auto px-4 max-w-2xl my-20">
        <Heading className="pb-4">
          {t("company.mission.title")}
        </Heading>
        <Text className="pb-4">
          {t("company.mission.body")}
        </Text>
        <Text>
          {t("company.mission.subtitle")}
        </Text>
      </div>
    </Section>
  )
}
