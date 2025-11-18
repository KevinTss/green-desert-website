import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { Section } from "@/components/section"

interface TimelineItem {
  key: string
  yearLabelKey: string
  descriptionKey: string
}

const timelineItems: TimelineItem[] = [
  {
    key: "2020",
    yearLabelKey: "company.timeline.milestones.2020.title",
    descriptionKey: "company.timeline.milestones.2020.body",
  },
  {
    key: "2021",
    yearLabelKey: "company.timeline.milestones.2021.title",
    descriptionKey: "company.timeline.milestones.2021.body",
  },
  {
    key: "2022",
    yearLabelKey: "company.timeline.milestones.2022.title",
    descriptionKey: "company.timeline.milestones.2022.body",
  },
  {
    key: "2024",
    yearLabelKey: "company.timeline.milestones.2024.title",
    descriptionKey: "company.timeline.milestones.2024.body",
  },
]

const regionKeys = [
  "company.timeline.regions.items.gcc",
  "company.timeline.regions.items.mena",
  "company.timeline.regions.items.africa",
]

const languageKeys = [
  "company.timeline.languages.items.arabic",
  "company.timeline.languages.items.english",
  "company.timeline.languages.items.french",
]

export function SectionCompanyTimeline() {
  const { t, isRTL } = useLanguage()

  const timelineAxisClass = cn(
    "relative space-y-6",
    isRTL ? "border-r border-white/15 pr-6" : "border-l border-white/15 pl-6"
  )
  const indicatorBaseClass = cn(
    "absolute top-2 h-4 w-4 rounded-full border-2 border-white bg-slate-900",
    isRTL ? "-right-3" : "-left-3"
  )
  const timelineItemPaddingClass = isRTL ? "pr-6" : "pl-6"

  return (
    <Section id="timeline" className="bg-slate-950 text-white">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-slate-900 to-sky-500/20 p-10">
          <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-emerald-400/30 blur-3xl" />
            <div className="absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />
          </div>
          <h3 className="text-3xl font-semibold">{t("company.timeline.title")}</h3>
          <p className="mt-4 text-sm text-white/70">{t("company.timeline.subtitle")}</p>
          <div className="mt-8 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                {t("company.timeline.regions.title")}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {regionKeys.map((regionKey) => (
                  <span
                    key={regionKey}
                    className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/80"
                  >
                    {t(regionKey)}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                {t("company.timeline.languages.title")}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {languageKeys.map((languageKey) => (
                  <span
                    key={languageKey}
                    className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/80"
                  >
                    {t(languageKey)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white/5 p-8 shadow-inner">
          <div className={timelineAxisClass}>
            {timelineItems.map((item) => (
              <div key={item.key} className={cn("relative", timelineItemPaddingClass)}>
                <span className={indicatorBaseClass} />
                <h4 className="text-lg font-semibold text-emerald-200">{t(item.yearLabelKey)}</h4>
                <p className="mt-2 text-sm text-white/80">{t(item.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
