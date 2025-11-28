import { useLanguage } from "@/components/language-provider"
import { Badge, Text as TypographyText } from "@/components/typography"
import { Section } from "@/components/section"

const STORY_COLUMN_KEYS = [
  "company.story.body",
  "company.intro",
  "company.mission.subtitle",
] as const

export function SectionCompanyStory() {
  const { t } = useLanguage()

  return (
    <Section id="story" className="bg-white">
      <div className="container mx-auto px-4">
        <Badge>{t("company.badge")}</Badge>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {STORY_COLUMN_KEYS.map((key) => (
            <TypographyText key={key} className="text-base">
              {t(key)}
            </TypographyText>
          ))}
        </div>
      </div>
    </Section>
  )
}
