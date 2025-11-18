import { useLanguage } from "@/components/language-provider"

interface ValueItem {
  key: string
  titleKey: string
  bodyKey: string
}

const valueItems: ValueItem[] = [
  {
    key: "pioneering",
    titleKey: "company.values.items.pioneering.title",
    bodyKey: "company.values.items.pioneering.body",
  },
  {
    key: "science",
    titleKey: "company.values.items.science.title",
    bodyKey: "company.values.items.science.body",
  },
  {
    key: "collaboration",
    titleKey: "company.values.items.collaboration.title",
    bodyKey: "company.values.items.collaboration.body",
  },
]

export function SectionCompanyValues() {
  const { t } = useLanguage()

  return (
    <section id="values" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            {t("company.values.title")}
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">{t("company.values.subtitle")}</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {valueItems.map((value) => (
            <div
              key={value.key}
              className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-500 opacity-0 transition group-hover:opacity-100" />
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">{t(value.titleKey)}</h4>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{t(value.bodyKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
