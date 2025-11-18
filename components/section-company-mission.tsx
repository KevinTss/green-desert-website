import { useLanguage } from "@/components/language-provider"

export function SectionCompanyMission() {
  const { t } = useLanguage()

  return (
    <section id="mission" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-lg">
          <h3 className="text-3xl font-semibold sm:text-4xl">{t("company.mission.title")}</h3>
          <p className="mt-4 text-base leading-relaxed text-white/80">{t("company.mission.body")}</p>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-emerald-300">{t("company.mission.subtitle")}</p>
        </div>
      </div>
    </section>
  )
}
