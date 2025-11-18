import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"

export function SectionCompanyVision() {
  const { t } = useLanguage()

  return (
    <Section id="vision" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-emerald-100 bg-white/90 p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            {t("company.vision.title")}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">{t("company.vision.body")}</p>
        </div>
      </div>
    </Section>
  )
}
