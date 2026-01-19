import { useContent, useLanguage } from "@/components/language-provider"
import { Badge, Heading, Text as TypographyText } from "@/components/typography"
import { Section } from "@/components/section"
import { AnimatedStatCards } from "@/components/animated-stat-cards"

export const Section4PersonaLinks = () => {
  const { languageRoute } = useLanguage()
  const { home } = useContent()
  const personasContent = home.personas
  const personasItems = personasContent.items

  return (
    <Section id="personas" className="bg-white">
      <div className="container mx-auto flex flex-col gap-8 px-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge>
              {personasContent.badge}
            </Badge>
            <Heading size="lg" className="mt-3">
              {personasContent.heading}
            </Heading>
            <TypographyText className="mt-3">
              {personasContent.subheading}
            </TypographyText>
          </div>
          <div className="lg:text-right">
            <Badge as="p" size="sm" className="text-emerald-500">
              {personasContent.prompt}
            </Badge>
          </div>
        </div>

        <AnimatedStatCards
          className="mt-2"
          items={personasItems.map((persona) => {
            const href = persona.href.startsWith("/") ? `/${languageRoute}${persona.href}` : persona.href
            return {
              id: persona.id,
              label: persona.title,
              value: persona.title,
              description: persona.description,
              href,
            }
          })}
        />
      </div>
    </Section>
  )
}
