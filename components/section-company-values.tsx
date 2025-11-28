import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Badge, Heading, Text as TypographyText } from "@/components/typography"

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
    <Section id="values" className="bg-gray-50">
      <div className="container mx-auto px-4 max-w-xl mt-16 mb-12">
        <Heading className="pb-4">
          {t("company.values.title")}
        </Heading>
        <TypographyText>
          {t("company.values.subtitle")}
        </TypographyText>
      </div>
      <div className="container mx-auto px-4 mb-20">
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
    </Section>
  )
}
