import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const SectionX = () => {
  const { t, isRTL } = useLanguage()

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="w-full">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`${isRTL ? "lg:order-2" : ""}`}>
              <Badge className="bg-green-100 text-green-800 mb-4">{t("env.badge")}</Badge>
              <h2
                className={`text-2xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight ${isRTL ? "text-right" : "text-left"}`}
              >
                {t("env.title")}
              </h2>
              <p className={`text-gray-600 mb-6 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                {t("env.description1")}
              </p>
              <p className={`text-gray-600 mb-8 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                {t("env.description2")}
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white transition-colors">
                {t("env.button")}
              </Button>
            </div>
            <div className={`relative ${isRTL ? "lg:order-1" : ""}`}>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Environmental data visualization"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
              <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} bg-white rounded-lg p-4 shadow-lg`}>
                <div className="text-3xl font-bold text-green-600">27%</div>
                <div className="text-sm text-gray-600">Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
