import { useLanguage } from "@/components/language-provider"

const kpis = [
  {
    key: "co2",
    valueKey: "kpi.co2.value",
    labelKey: "kpi.co2.label",
    descriptionKey: "kpi.co2.description",
  },
  {
    key: "footprint",
    valueKey: "kpi.footprint.value",
    labelKey: "kpi.footprint.label",
    descriptionKey: "kpi.footprint.description",
  },
  {
    key: "pilots",
    valueKey: "kpi.pilots.value",
    labelKey: "kpi.pilots.label",
    descriptionKey: "kpi.pilots.description",
  },
]

export const Section3KpiStrip = () => {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-green-500">
              {t("kpi.goalTagline")}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              {t("kpi.heading")}
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              {t("kpi.subheading")}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {kpis.map((kpi) => (
            <div
              key={kpi.key}
              className="group relative overflow-hidden rounded-2xl border border-green-100 bg-white p-6 shadow-[0_25px_45px_-35px_rgba(16,185,129,0.3)] transition hover:-translate-y-1 hover:border-green-300 hover:shadow-[0_30px_50px_-35px_rgba(16,185,129,0.4)]"
            >
              <div className="absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-green-300/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
                {t(kpi.labelKey)}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-slate-900 sm:text-5xl">
                  {t(kpi.valueKey)}
                </span>
                <span className="text-sm text-slate-500">
                  {t(kpi.descriptionKey)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
