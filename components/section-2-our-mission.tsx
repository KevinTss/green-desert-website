import { useContent } from "@/components/language-provider"
import { PartnersCarousel } from "@/components/partners-carousel"
import { ProcessExplainer } from "@/components/process-explainer"
import { Badge, Text as TypographyText } from "@/components/typography"
import { Section } from "@/components/section"

export const Section2OurMission = () => {
  const { home } = useContent()
  const story = home?.story

  return (
    <Section id="story" className="relative overflow-hidden flex items-center min-h-[60vh]">
      <div className="container mx-auto px-4">
        <PartnersCarousel partners={story?.partners} />
        {story && (
          <div className="max-w-3xl mt-32">
            {!!story.badge && <Badge>{story.badge}</Badge>}
            {!!story.body && (
              <TypographyText size="lg" className="mt-3">
                {story.body}
              </TypographyText>
            )}
          </div>
        )}
        {!!story.process && <ProcessExplainer process={story.process} />}
      </div>
    </Section>
  )
}
