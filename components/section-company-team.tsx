import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { getAssetPath } from "@/lib/assets"
import { Section } from "@/components/section"

interface PersonItem {
  key: string
  nameKey: string
  roleKey: string
  bioKey: string
  image?: string
}

const teamMembers: PersonItem[] = [
  {
    key: "abdulhadi",
    nameKey: "team.member.abdulhadi.name",
    roleKey: "team.member.abdulhadi.role",
    bioKey: "team.member.abdulhadi.bio",
    image: "/hadi.jpg",
  },
  {
    key: "lucas",
    nameKey: "team.member.lucas.name",
    roleKey: "team.member.lucas.role",
    bioKey: "team.member.lucas.bio",
    image: "/lucas.jpg",
  },
]

export function SectionCompanyTeam() {
  const { t } = useLanguage()

  return (
    <Section id="team" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            {t("company.team.title")}
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">{t("company.team.subtitle")}</h3>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.key}
              className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm md:flex-row"
            >
              <div className="relative mx-auto overflow-hidden rounded-2xl bg-emerald-100 md:mx-0">
                <Image
                  src={getAssetPath(member.image ?? "/placeholder-logo.svg")}
                  alt={t(member.nameKey)}
                  width={240}
                  height={240}
                  className="h-40 w-40 object-cover md:h-48 md:w-48"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900">{t(member.nameKey)}</h4>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-500">{t(member.roleKey)}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{t(member.bioKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
