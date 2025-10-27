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
    <section className="relative overflow-hidden bg-slate-950 py-14 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e55,transparent_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.8),rgba(30,64,175,0.15))]" />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">
              {t("kpi.goalTagline")}
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              {t("kpi.heading")}
            </h2>
            <p className="mt-4 text-sm text-white/70 sm:text-base">
              {t("kpi.subheading")}
            </p>
          </div>
          <div className="flex gap-3">
            <div className="h-[1px] w-12 bg-red-300/70" />
            <p className="max-w-sm text-xs uppercase tracking-[0.3em] text-red-300">
              {t("kpi.goalMessage")}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {kpis.map((kpi) => (
            <div
              key={kpi.key}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-red-300/70 hover:bg-white/10"
            >
              <div className="absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-red-400/15 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
                {t(kpi.labelKey)}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-white sm:text-5xl">
                  {t(kpi.valueKey)}
                </span>
                <span className="text-sm text-white/60">
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
