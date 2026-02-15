import { useContent } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Heading, Text as TypographyText } from "@/components/typography";

export function SectionCompanyMission() {
  const { company } = useContent();
  const mission = company?.mission;

  if (!mission) return null;

  return (
    <Section id="mission">
      <div className="container mx-auto px-4 max-w-xl my-16">
        {!!mission?.title && (
          <Heading className="pb-4">{mission.title}</Heading>
        )}
        {!!mission?.body && (
          <TypographyText className="pb-4">{mission.body}</TypographyText>
        )}
        {!!mission?.subtitle && (
          <TypographyText>{mission.subtitle}</TypographyText>
        )}
      </div>
    </Section>
  );
}
