import { useLanguage } from "@/components/language-provider"
import { Badge, Text } from "@/components/typography"

const STORY_COLUMN_KEYS = [
  "company.story.body",
  "company.intro",
  "company.mission.subtitle",
] as const

export function SectionCompanyStory() {
  const { t } = useLanguage()

  return (
    <section id="story" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <Badge>{t("company.badge")}</Badge>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {STORY_COLUMN_KEYS.map((key) => (
            <Text key={key} className="text-base">
              {t(key)}
            </Text>
          ))}
        </div>
      </div>
    </section>
  )
}
