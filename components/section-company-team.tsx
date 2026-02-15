import Image from "next/image"

import { MailIcon, LinkedinIcon } from "lucide-react"

import { useContent } from "@/components/language-provider"
import { getAssetPath } from "@/lib/assets"
import { Section } from "@/components/section"
import { Heading, Text as TypographyText, Badge, SectionSubtitle } from "@/components/typography"
import { cn } from "@/lib/utils"

export function SectionCompanyTeam() {
  const { company } = useContent()
  const team = company?.team

  if (!team?.members?.length) return null

  return (
    <Section id="team" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 max-w-xl mb-16">
          {team.title && (
            <Heading className="pb-4">
              {team.title}
            </Heading>
          )}
          {team.subtitle && (
            <SectionSubtitle>
              {team.subtitle}
            </SectionSubtitle>
          )}
        </div>
        <div className="space-y-12">
          {team.members.map((member, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div
                key={member.id}
                className={cn(
                  "flex flex-col gap-8 rounded-3xl bg-white p-0 lg:flex-row lg:items-center overflow-hidden",
                  isReversed && "lg:flex-row-reverse"
                )}
              >
                <div className="relative w-full lg:w-1/2 flex items-center justify-center">
                  <Image
                    src={getAssetPath(member.image ?? "/placeholder-logo.svg")}
                    alt={member.name}
                    width={320}
                    height={320}
                    className="h-72 w-72 rounded-3xl object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 p-8 lg:w-1/2">
                  {member.name && (
                    <Heading as="h4" size="lg">
                      {member.name}
                    </Heading>
                  )}
                  {member.role && (
                    <Badge>
                      {member.role}
                    </Badge>
                  )}
                  {member.bio && (
                    <TypographyText>
                      {member.bio}
                    </TypographyText>
                  )}
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href={`mailto:${member.email ?? "info@greendesert.sa"}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-200 hover:text-emerald-600"
                      aria-label={`${member.name} email`}
                    >
                      <MailIcon className="h-5 w-5" />
                    </a>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-200 hover:text-emerald-600"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedinIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
