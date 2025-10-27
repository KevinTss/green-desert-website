"use client"

import Image from "next/image"
import { useMemo } from "react"

import { useLanguage } from "@/components/language-provider"
import { MiniNavbar } from "@/components/mini-navbar"
import { PageHero } from "@/components/page-hero"
import { cn } from "@/lib/utils"
import { getAssetPath } from "@/lib/assets"

interface ValueItem {
  key: string
  titleKey: string
  bodyKey: string
}

interface PersonItem {
  key: string
  nameKey: string
  roleKey: string
  bioKey: string
  image?: string
}

interface TimelineItem {
  key: string
  yearLabelKey: string
  descriptionKey: string
}

const PREZI_FALLBACK_EMBED = "https://prezi.com/embed/6p0dzyxytq0x/"

const valueItems: ValueItem[] = [
  {
    key: "pioneering",
    titleKey: "company.values.items.pioneering.title",
    bodyKey: "company.values.items.pioneering.body",
  },
  {
    key: "science",
    titleKey: "company.values.items.science.title",
    bodyKey: "company.values.items.science.body",
  },
  {
    key: "collaboration",
    titleKey: "company.values.items.collaboration.title",
    bodyKey: "company.values.items.collaboration.body",
  },
]

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

const timelineItems: TimelineItem[] = [
  {
    key: "2020",
    yearLabelKey: "company.timeline.milestones.2020.title",
    descriptionKey: "company.timeline.milestones.2020.body",
  },
  {
    key: "2021",
    yearLabelKey: "company.timeline.milestones.2021.title",
    descriptionKey: "company.timeline.milestones.2021.body",
  },
  {
    key: "2022",
    yearLabelKey: "company.timeline.milestones.2022.title",
    descriptionKey: "company.timeline.milestones.2022.body",
  },
  {
    key: "2024",
    yearLabelKey: "company.timeline.milestones.2024.title",
    descriptionKey: "company.timeline.milestones.2024.body",
  },
]

const regionKeys = [
  "company.timeline.regions.items.gcc",
  "company.timeline.regions.items.mena",
  "company.timeline.regions.items.africa",
]

const languageKeys = [
  "company.timeline.languages.items.arabic",
  "company.timeline.languages.items.english",
  "company.timeline.languages.items.french",
]

export function ClientCompany() {
  const { t, isRTL, language, languageRoute } = useLanguage()

  const navSections = useMemo(
    () => [
      { id: "presentation", key: "mini.presentation" },
      { id: "story", key: "mini.story" },
      { id: "vision", key: "mini.vision" },
      { id: "mission", key: "mini.mission" },
      { id: "values", key: "mini.values" },
      { id: "team", key: "mini.team" },
      { id: "leadership", key: "mini.leadership" },
      { id: "timeline", key: "mini.timeline" },
    ],
    []
  )

  const rawPreziUrl = (process.env.NEXT_PUBLIC_PREZI_EMBED_URL || PREZI_FALLBACK_EMBED).trim()
  const preziEmbedUrl = /^https?:\/\//i.test(rawPreziUrl) ? rawPreziUrl : ""
  const hasEmbed = preziEmbedUrl.length > 0

  const timelineAxisClass = cn(
    "relative space-y-6",
    isRTL ? "border-r border-white/15 pr-6" : "border-l border-white/15 pl-6"
  )
  const indicatorBaseClass = cn(
    "absolute top-2 h-4 w-4 rounded-full border-2 border-white bg-slate-900",
    isRTL ? "-right-3" : "-left-3"
  )
  const timelineItemPaddingClass = isRTL ? "pr-6" : "pl-6"

  return (
    <main className={cn(isRTL ? "rtl" : "ltr") } dir={isRTL ? "rtl" : "ltr"} lang={language}>
      <PageHero title={t('company.title')} badge={t('company.badge')} />

      <MiniNavbar sections={navSections} />

      <section id="presentation" className="relative mx-auto mt-10 w-full max-w-6xl px-4">
        <div className="mb-6 flex flex-col gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            {t('company.presentation.title')}
          </p>
          <p className="text-sm text-slate-600">
            {t('company.presentation.subtitle')}
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
          {hasEmbed ? (
            <iframe
              src={preziEmbedUrl}
              title={t('company.presentation.title')}
              className="h-[420px] w-full md:h-[520px]"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="flex h-[420px] items-center justify-center p-10 text-center text-white md:h-[520px]">
              <p className="text-base font-medium text-white/80">
                {t('company.presentation.fallback')}
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="story" className="bg-white py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
              {t('company.badge')}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t('company.story.title')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              {t('company.story.body')}
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-emerald-500/20 via-white to-slate-100 p-8 shadow-inner">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
              {t('company.title')}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              {t('company.intro')}
            </p>
          </div>
        </div>
      </section>

      <section id="vision" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-emerald-100 bg-white/90 p-10 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
              {t('company.vision.title')}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              {t('company.vision.body')}
            </p>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-lg">
            <h3 className="text-3xl font-semibold sm:text-4xl">
              {t('company.mission.title')}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              {t('company.mission.body')}
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-emerald-300">
              {t('company.mission.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section id="values" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
              {t('company.values.title')}
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t('company.values.subtitle')}
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {valueItems.map((value) => (
              <div
                key={value.key}
                className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-500 opacity-0 transition group-hover:opacity-100" />
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                  {t(value.titleKey)}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {t(value.bodyKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
              {t('company.team.title')}
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t('company.team.subtitle')}
            </h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <div key={member.key} className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm md:flex-row">
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
                  <h4 className="text-xl font-semibold text-slate-900">
                    {t(member.nameKey)}
                  </h4>
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-500">
                    {t(member.roleKey)}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {t(member.bioKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
              {t('company.leadership.title')}
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t('company.leadership.subtitle')}
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
                      <h4 className="text-lg font-semibold text-slate-900">
                        {t(leader.nameKey)}
                      </h4>
                      <p className="text-xs uppercase tracking-[0.25em] text-emerald-500">
                        {t(leader.roleKey)}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {t(leader.bioKey)}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                {t('company.leadership.committee.title')}
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
      </section>

      <section id="timeline" className="bg-slate-950 py-16 text-white">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-slate-900 to-sky-500/20 p-10">
            <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-emerald-400/30 blur-3xl" />
              <div className="absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />
            </div>
            <h3 className="text-3xl font-semibold">
              {t('company.timeline.title')}
            </h3>
            <p className="mt-4 text-sm text-white/70">
              {t('company.timeline.subtitle')}
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  {t('company.timeline.regions.title')}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {regionKeys.map((regionKey) => (
                    <span key={regionKey} className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
                      {t(regionKey)}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  {t('company.timeline.languages.title')}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {languageKeys.map((languageKey) => (
                    <span key={languageKey} className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
                      {t(languageKey)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white/5 p-8 shadow-inner">
            <div className={timelineAxisClass}>
              {timelineItems.map((item) => (
                <div key={item.key} className={cn("relative", timelineItemPaddingClass)}>
                  <span className={indicatorBaseClass} />
                  <h4 className="text-lg font-semibold text-emerald-200">
                    {t(item.yearLabelKey)}
                  </h4>
                  <p className="mt-2 text-sm text-white/80">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Green Desert',
            url: `https://greendesert.sa/${languageRoute}/company`,
            sameAs: [
              'https://www.linkedin.com/company/green-desert-sa/',
              'https://www.instagram.com/greendesertsa/',
              'https://twitter.com/Greendesertsa',
              'https://www.youtube.com/@GreenDesertsa',
            ],
            description: t('company.schema.description'),
            foundingDate: '2020-01-01',
            foundingLocation: 'Saudi Arabia',
            areaServed: ['SA', 'GCC', 'MENA'],
          }),
        }}
      />
    </main>
  )
}
