import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { Badge, Heading, Text } from "@/components/typography"

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
            <Badge>
              {t("personas.badge")}
            </Badge>
            <Heading size="lg" className="mt-3">
              {t("personas.heading")}
            </Heading>
            <Text className="mt-4">
              {t("personas.subheading")}
            </Text>
          </div>
          <div className="lg:text-right">
            <Badge as="p" size="sm" className="text-emerald-500">
              {t("personas.prompt")}
            </Badge>
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
                  <Badge
                    as="span"
                    size="sm"
                    className="text-slate-700 break-words tracking-[0.2em]"
                  >
                    {t(persona.linkKey)}
                  </Badge>
                  <ArrowUpRight className="h-5 w-5 text-emerald-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <Text
                  as="p"
                  size="sm"
                  className="break-words text-slate-500"
                >
                  {t(persona.descriptionKey)}
                </Text>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
