import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { getAssetPath } from "@/lib/assets"

export const Section3OurProducts = () => {
  const { t, isRTL } = useLanguage()

  return (
    <section id="products" className="py-16 lg:py-20 flex items-center min-h-[60vh] bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12">{t("products.title")}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image
              src={getAssetPath("/placeholder.svg?height=200&width=300")}
              alt="Hemp Seeds"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <CardContent className="p-6">
              <h3 className={`text-lg font-bold text-gray-800 mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                {t("products.hemp_seeds")}
              </h3>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image
              src={getAssetPath("/placeholder.svg?height=200&width=300")}
              alt="Temperature Boxes"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <CardContent className="p-6">
              <h3 className={`text-lg font-bold text-gray-800 mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                {t("products.temperature_boxes")}
              </h3>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <Image
              src={getAssetPath("/placeholder.svg?height=200&width=300")}
              alt="Hemp Fibers"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <CardContent className="p-6">
              <h3 className={`text-lg font-bold text-gray-800 mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                {t("products.hemp_fibers")}
              </h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
