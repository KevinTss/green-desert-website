import { useLanguage } from "@/components/language-provider"
import { Badge, Heading, Text } from "@/components/typography"
import { Section } from "@/components/section"
import { AnimatedStatCards } from "@/components/animated-stat-cards"

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
    <Section id="personas" className="bg-white">
      <div className="container mx-auto flex flex-col gap-8 px-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge>
              {t("personas.badge")}
            </Badge>
            <Heading size="lg" className="mt-3">
              {t("personas.heading")}
            </Heading>
            <Text className="mt-3">
              {t("personas.subheading")}
            </Text>
          </div>
          <div className="lg:text-right">
            <Badge as="p" size="sm" className="text-emerald-500">
              {t("personas.prompt")}
            </Badge>
          </div>
        </div>

        <AnimatedStatCards
          className="mt-2"
          items={personas.map((persona) => {
            const href = persona.href.startsWith("/") ? `/${languageRoute}${persona.href}` : persona.href
            return {
              id: persona.key,
              label: t(persona.linkKey),
              value: t(persona.linkKey),
              description: t(persona.descriptionKey),
              href,
            }
          })}
        />
      </div>
    </Section>
  )
}
