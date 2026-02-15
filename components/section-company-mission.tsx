import { useContent } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Heading, SectionSubtitle } from "@/components/typography";

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
          <SectionSubtitle className="pb-4">{mission.body}</SectionSubtitle>
        )}
        {!!mission?.subtitle && (
          <SectionSubtitle>{mission.subtitle}</SectionSubtitle>
        )}
      </div>
    </Section>
  );
}
