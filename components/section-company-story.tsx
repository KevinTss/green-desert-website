import { useLanguage } from "@/components/language-provider"

export function SectionCompanyStory() {
  const { t } = useLanguage()

  return (
    <section id="story" className="bg-white py-16">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            {t("company.badge")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">{t("company.story.title")}</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">{t("company.story.body")}</p>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-emerald-500/20 via-white to-slate-100 p-8 shadow-inner">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">{t("company.title")}</p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">{t("company.intro")}</p>
        </div>
      </div>
    </section>
  )
}
