"use client"

import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { getAssetPath } from "@/lib/assets"
import { cn } from "@/lib/utils"
import { Section } from "@/components/section"

const FLOATING_STORIES = [
  {
    id: "growing",
    image: "/fiber-cover.jpg",
    titleKey: "about.process.steps.growing.title",
    descriptionKey: "about.process.steps.growing.description",
    height: 235,
  },
  {
    id: "harvesting",
    image: "/hurd-cover.jpg",
    titleKey: "about.process.steps.harvesting.title",
    descriptionKey: "about.process.steps.harvesting.description",
    height: 274,
  },
  {
    id: "decorticating",
    image: "/hurds.png",
    titleKey: "about.process.steps.decorticating.title",
    descriptionKey: "about.process.steps.decorticating.description",
    height: 313,
  },
  {
    id: "transforming",
    image: "/seeds-cover.jpg",
    titleKey: "about.process.steps.transforming.title",
    descriptionKey: "about.process.steps.transforming.description",
    height: 235,
  },
  {
    id: "building",
    image: "/hemp-blocks-01-443x300.jpg",
    titleKey: "about.process.steps.building.title",
    descriptionKey: "about.process.steps.building.description",
    height: 274,
  },
] as const

export const SectionBeliefHighlights = () => {
  const { t } = useLanguage()

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold tracking-[0.35em] text-gray-500 uppercase">
            2. {t("about.smallTitle")}
          </p>
          <p
            className={cn(
              "mt-3 text-base lg:text-lg text-gray-600 leading-normal",
            )}
          >
            {t("about.smallDescription")}
          </p>
        </div>

        <div className="mb-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {FLOATING_STORIES.map((card, index) => (
            <div
              key={card.id}
              className="group flex flex-col items-center text-left"
            >
              <div className="relative w-full pb-10">
                <div className="flex h-[340px] items-end">
                  <div
                    className="w-full overflow-hidden rounded-[26px] bg-white shadow-[0_25px_65px_-32px_rgba(15,23,42,0.4)] ring-1 ring-black/5 transition-all duration-500 -translate-y-2 group-hover:-translate-y-3"
                    style={{ height: `${card.height}px` }}
                  >
                    <Image
                      src={getAssetPath(card.image)}
                      alt={t(card.titleKey)}
                      fill
                      className="object-cover object-bottom transition-transform duration-700 scale-[1.03] group-hover:scale-[1.08]"
                      sizes="(min-width: 1280px) 15vw, (min-width: 1024px) 20vw, (min-width: 768px) 30vw, 80vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-xs space-y-2 text-[13px] leading-normal text-gray-600">
                <Badge variant="default" size="xs" className="text-gray-600">
                  {t(card.titleKey)}
                </Badge>
                <p className="text-sm text-gray-600">
                  {t(card.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
