import { useContent } from "@/components/language-provider"
import { Section } from "@/components/section"
import { Badge, Heading, Text as TypographyText } from "@/components/typography"

export function SectionCompanyValues() {
  const { company } = useContent()
  const values = company?.values

  if (!values?.items?.length) return null

  return (
    <Section id="values" className="bg-gray-50">
      <div className="container mx-auto px-4 max-w-xl mt-16 mb-12">
        {values.title && (
          <Heading className="pb-4">
            {values.title}
          </Heading>
        )}
        {values.subtitle && (
          <TypographyText>
            {values.subtitle}
          </TypographyText>
        )}
      </div>
      <div className="container mx-auto px-4 mb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {values.items.map((value) => (
            <div
              key={value.id}
              className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-500 opacity-0 transition group-hover:opacity-100" />
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">{value.title}</h4>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
