import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { ArrowUpRight } from "lucide-react"

const personas = [
  {
    key: "government",
    linkKey: "personas.government.link",
    descriptionKey: "personas.government.description",
    href: "/solutions/government",
  },
  {
    key: "private",
    linkKey: "personas.private.link",
    descriptionKey: "personas.private.description",
    href: "/solutions/private-sector",
  },
  {
    key: "investors",
    linkKey: "personas.investors.link",
    descriptionKey: "personas.investors.description",
    href: "/solutions/investors",
  },
  {
    key: "engineers",
    linkKey: "personas.engineers.link",
    descriptionKey: "personas.engineers.description",
    href: "/solutions/engineers",
  },
]

export const Section4PersonaLinks = () => {
  const { t, languageRoute } = useLanguage()

  return (
    <section id="personas" className="bg-white py-16 lg:py-20">
      <div className="container mx-auto flex flex-col gap-10 px-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              {t("personas.badge")}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              {t("personas.heading")}
            </h2>
            <p className="mt-4 text-base text-slate-600">
              {t("personas.subheading")}
            </p>
          </div>
          <div className="lg:text-right">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-500">
              {t("personas.prompt")}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {personas.map((persona) => {
            const href = persona.href.startsWith("/")
              ? `/${languageRoute}${persona.href}`
              : persona.href
            return (
              <Link
                key={persona.key}
                href={href}
                className="group flex h-full w-full flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="flex w-full items-center justify-between gap-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 break-words">
                    {t(persona.linkKey)}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-emerald-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="text-sm text-slate-500 break-words leading-relaxed">
                  {t(persona.descriptionKey)}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
