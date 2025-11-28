import { Section } from "@/components/section"

export const PageHero = ({
  title,
  badge
}: {
  title: string
  badge: string
}) => {
  return (
    <Section className="pt-32 pb-8 text-center">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Badge variant="emerald" size="sm">
          {badge}
        </Badge>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          {title}
        </h1>
      </div>
    </Section>
  )
}
