import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Heading, Text as TypographyText } from "@/components/typography"

export function SectionCompanyMission() {
  const { t } = useLanguage()

  return (
    <Section id="mission">
      <div className="container mx-auto px-4 max-w-xl my-16">
        <Heading className="pb-4">
          {t("company.mission.title")}
        </Heading>
        <TypographyText className="pb-4">
          {t("company.mission.body")}
        </TypographyText>
        <TypographyText>
          {t("company.mission.subtitle")}
        </TypographyText>
      </div>
    </Section>
  )
}
