import Image from "next/image"

import { MailIcon, LinkedinIcon } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { getAssetPath } from "@/lib/assets"
import { Section } from "@/components/section"
import { Heading, Text, Badge } from "@/components/typography"
import { cn } from "@/lib/utils"

interface PersonItem {
  key: string
  nameKey: string
  roleKey: string
  bioKey: string
  image?: string
  email?: string
  linkedin?: string
}

const teamMembers: PersonItem[] = [
  {
    key: "abdulhadi",
    nameKey: "team.member.abdulhadi.name",
    roleKey: "team.member.abdulhadi.role",
    bioKey: "team.member.abdulhadi.bio",
    image: "/hadi.jpg",
    email: "info@greendesert.sa",
    linkedin: "https://www.linkedin.com/in/hadialamer/",
  },
  {
    key: "lucas",
    nameKey: "team.member.lucas.name",
    roleKey: "team.member.lucas.role",
    bioKey: "team.member.lucas.bio",
    image: "/lucas.jpg",
    email: "info@greendesert.sa",
    linkedin: "https://www.linkedin.com/in/lucasdietrich/",
  },
]

export function SectionCompanyTeam() {
  const { t } = useLanguage()

  return (
    <Section id="team" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 max-w-xl mb-16">
          <Heading className="pb-4">
            {t("company.team.title")}
          </Heading>
          <Text>
            {t("company.team.subtitle")}
          </Text>
        </div>
        <div className="space-y-12">
          {teamMembers.map((member, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div
                key={member.key}
                className={cn(
                  "flex flex-col gap-8 rounded-3xl bg-white p-0 lg:flex-row lg:items-center overflow-hidden",
                  isReversed && "lg:flex-row-reverse"
                )}
              >
                <div className="relative w-full lg:w-1/2 flex items-center justify-center">
                  <Image
                    src={getAssetPath(member.image ?? "/placeholder-logo.svg")}
                    alt={t(member.nameKey)}
                    width={320}
                    height={320}
                    className="h-72 w-72 rounded-3xl object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 p-8 lg:w-1/2">
                  <Heading as="h4" size="lg">
                    {t(member.nameKey)}
                  </Heading>
                  <Badge>
                    {/* <span className="inline-flex w-fit items-center rounded-full border border-emerald-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600"> */}
                    {t(member.roleKey)}
                    {/* </span> */}
                  </Badge>
                  <Text>
                    {t(member.bioKey)}
                  </Text>
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href={`mailto:${member.email ?? "info@greendesert.sa"}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-200 hover:text-emerald-600"
                      aria-label={`${t(member.nameKey)} email`}
                    >
                      <MailIcon className="h-5 w-5" />
                    </a>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-200 hover:text-emerald-600"
                        aria-label={`${t(member.nameKey)} LinkedIn`}
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
