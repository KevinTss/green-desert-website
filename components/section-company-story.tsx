import { useContent } from "@/components/language-provider"
import { Badge, Text as TypographyText } from "@/components/typography"
import { Section } from "@/components/section"

export function SectionCompanyStory() {
  const { company } = useContent()
  const story = company?.story

  if (!story?.columns?.length) return null

  return (
    <Section id="story" className="bg-white">
      <div className="container mx-auto px-4">
        {story.badge && <Badge>{story.badge}</Badge>}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {story.columns.map((text, idx) => (
            <TypographyText key={idx} className="text-base">
              {text}
            </TypographyText>
          ))}
        </div>
      </div>
    </Section>
  )
}
