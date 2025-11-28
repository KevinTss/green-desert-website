import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { getAssetPath } from "@/lib/assets"
import { Button } from "@/components/ui/button"
import { Badge as UIBadge } from "@/components/ui/badge"
import { Heading, Text } from "@/components/typography"
import { Section } from "@/components/section"

export const SectionX = () => {
  const { t, isRTL } = useLanguage()

  return (
    <Section className="bg-gray-50">
      <div className="w-full">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`${isRTL ? "lg:order-2" : ""}`}>
              <UIBadge className="bg-green-100 text-green-800 mb-4">{t("env.badge")}</UIBadge>
              <Heading
                className="mb-6 leading-tight"
                align={isRTL ? 'right' : 'left'}
              >
                {t("env.title")}
              </Heading>
              <Text className={`text-gray-600 mb-6 ${isRTL ? "text-right" : "text-left"}`}>
                {t("env.description1")}
              </Text>
              <Text className={`text-gray-600 mb-8 ${isRTL ? "text-right" : "text-left"}`}>
                {t("env.description2")}
              </Text>
              <Button className="bg-green-600 hover:bg-green-700 text-white transition-colors">
                {t("env.button")}
              </Button>
            </div>
            <div className={`relative ${isRTL ? "lg:order-1" : ""}`}>
              <Image
                src={getAssetPath("/placeholder.svg?height=400&width=500")}
                alt="Environmental data visualization"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
              <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} bg-white rounded-lg p-4 shadow-lg`}>
                <div className="text-2xl font-bold text-green-600">27%</div>
                <div className="text-[13px] text-gray-600">Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
