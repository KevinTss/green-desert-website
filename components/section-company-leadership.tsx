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

const leadershipMembers: PersonItem[] = [
  {
    key: "chair",
    nameKey: "company.leadership.members.chair.name",
    roleKey: "company.leadership.members.chair.role",
    bioKey: "company.leadership.members.chair.bio",
    image: "/hadi.jpg",
  },
  {
    key: "policy",
    nameKey: "company.leadership.members.policy.name",
    roleKey: "company.leadership.members.policy.role",
    bioKey: "company.leadership.members.policy.bio",
  },
  {
    key: "partnerships",
    nameKey: "company.leadership.members.partnerships.name",
    roleKey: "company.leadership.members.partnerships.role",
    bioKey: "company.leadership.members.partnerships.bio",
  },
]

const committeeItems = [
  "company.leadership.committee.items.regulatory",
  "company.leadership.committee.items.publicPartners",
  "company.leadership.committee.items.standards",
]

export function SectionCompanyLeadership() {
  const { t } = useLanguage()

  return (
    <Section id="leadership" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            {t("company.leadership.title")}
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {t("company.leadership.subtitle")}
          </h3>
        </div>
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {leadershipMembers.map((leader) => (
              <div key={leader.key} className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  {leader.image ? (
                    <Image
                      src={getAssetPath(leader.image)}
                      alt={t(leader.nameKey)}
                      width={72}
                      height={72}
                      className="h-16 w-16 rounded-full object-cover shadow"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-lg font-semibold text-white">
                      {t(leader.nameKey).substring(0, 2)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{t(leader.nameKey)}</h4>
                    <p className="text-xs uppercase tracking-[0.25em] text-emerald-500">{t(leader.roleKey)}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{t(leader.bioKey)}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
              {t("company.leadership.committee.title")}
            </p>
            <ul className="mt-4 space-y-3">
              {committeeItems.map((itemKey) => (
                <li key={itemKey} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{t(itemKey)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
