import Image from "next/image"

import { useContent } from "@/components/language-provider"
import { getAssetPath } from "@/lib/assets"
import { Section } from "@/components/section"
import { Badge, Heading } from "@/components/typography"

export function SectionCompanyLeadership() {
  const { company } = useContent()
  const leadership = company?.leadership

  if (!leadership) return null

  return (
    <Section id="leadership" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 max-w-2xl">
          {leadership.title && (
            <Badge variant="emerald" size="md">
              {leadership.title}
            </Badge>
          )}
          {leadership.subtitle && (
            <Heading size="2xl" className="mt-3">
              {leadership.subtitle}
            </Heading>
          )}
        </div>
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2">
          {leadership.members?.map((leader) => (
            <div key={leader.id} className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                {leader.image ? (
                  <Image
                    src={getAssetPath(leader.image)}
                      alt={leader.name}
                      width={72}
                      height={72}
                      className="h-16 w-16 rounded-full object-cover shadow"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-lg font-semibold text-white">
                      {leader.name?.substring(0, 2)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{leader.name}</h4>
                    {leader.role && <p className="text-xs uppercase tracking-[0.25em] text-emerald-500">{leader.role}</p>}
                  </div>
                </div>
                {leader.bio && <p className="text-sm leading-relaxed text-slate-600">{leader.bio}</p>}
              </div>
            ))}
          </div>
          {leadership.committee?.items?.length ? (
            <div className="rounded-2xl border border-emerald-100 bg-white p-6">
              {leadership.committee.title && (
                <Badge variant="emerald" size="lg">
                  {leadership.committee.title}
                </Badge>
              )}
              <ul className="mt-4 space-y-3">
                {leadership.committee.items.map((item) => (
                  <li key={item.id} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                    <span>
                      <strong className="block text-slate-800">{item.title}</strong>
                      <span className="text-slate-600">{item.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
