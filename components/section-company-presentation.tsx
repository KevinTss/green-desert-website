import { useLanguage } from "@/components/language-provider"
import { Section } from "@/components/section"

const PREZI_FALLBACK_EMBED = "https://prezi.com/embed/6p0dzyxytq0x/"

export function SectionCompanyPresentation() {
  const { t } = useLanguage()

  const rawPreziUrl = (process.env.NEXT_PUBLIC_PREZI_EMBED_URL || PREZI_FALLBACK_EMBED).trim()
  const preziEmbedUrl = /^https?:\/\//i.test(rawPreziUrl) ? rawPreziUrl : ""
  const hasEmbed = preziEmbedUrl.length > 0

  return (
    <Section id="presentation" className="relative mx-auto mt-8 w-full max-w-5xl px-4">
      <div className="mb-6 flex flex-col gap-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
          {t("company.presentation.title")}
        </p>
        <p className="text-sm text-slate-600">{t("company.presentation.subtitle")}</p>
      </div>
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
        {hasEmbed ? (
          <iframe
            src={preziEmbedUrl}
            title={t("company.presentation.title")}
            className="h-[420px] w-full md:h-[520px]"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <div className="flex h-[420px] items-center justify-center p-10 text-center text-white md:h-[520px]">
            <p className="text-base font-medium text-white/80">{t("company.presentation.fallback")}</p>
          </div>
        )}
      </div>
    </Section>
  )
}
