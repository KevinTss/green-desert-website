import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/assets"

export const Section5Partners = () => {
  const { t } = useLanguage()

  return (
    <section id="partners" className="py-16 lg:py-20 flex items-center min-h-[60vh] bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{t("partners.title")}</h2>
        <p className="text-xl lg:text-2xl text-green-600 mb-12">{t("partners.subtitle")}</p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12 mb-8">
          <Image
            src={getAssetPath("/placeholder.svg?height=80&width=120")}
            alt="Partner 1"
            width={120}
            height={80}
            className="grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
          <Image
            src={getAssetPath("/placeholder.svg?height=80&width=120")}
            alt="Partner 2"
            width={120}
            height={80}
            className="grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        </div>

        <Button className="bg-green-500 hover:bg-green-600 text-white px-8 transition-colors">
          {t("partners.more")}
        </Button>
      </div>
    </section>
  )
}
