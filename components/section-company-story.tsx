import { useLanguage } from "@/components/language-provider"

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
        <p className="text-xs font-semibold tracking-[0.35em] text-gray-500 uppercase">{t("company.badge")}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {STORY_COLUMN_KEYS.map((key) => (
            <p key={key} className="text-base leading-relaxed text-slate-600">
              {t(key)}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
