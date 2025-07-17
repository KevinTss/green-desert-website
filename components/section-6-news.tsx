import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export const Section6News = () => {
  const { t, isRTL } = useLanguage()

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-2">
            {t("news.title").split(" ")[0]} <span className="text-orange-500">{t("news.title").split(" ")[1]}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Partnership News"
                width={400}
                height={250}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <CardContent className="p-6">
                <div
                  className={`flex items-center space-x-2 text-sm text-gray-500 mb-3 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>March 15, 2024</span>
                </div>
                <h3 className={`text-xl font-bold text-gray-800 mb-3 ${isRTL ? "text-right" : "text-left"}`}>
                  {t("news.partnership.title")}
                </h3>
                <p className={`text-gray-600 ${isRTL ? "text-right" : "text-left"}`}>
                  {t("news.partnership.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Office News"
                width={400}
                height={250}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <CardContent className="p-6">
                <div
                  className={`flex items-center space-x-2 text-sm text-gray-500 mb-3 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>March 10, 2024</span>
                </div>
                <h3 className={`text-xl font-bold text-gray-800 mb-3 ${isRTL ? "text-right" : "text-left"}`}>
                  {t("news.office.title")}
                </h3>
                <p className={`text-gray-600 ${isRTL ? "text-right" : "text-left"}`}>
                  {t("news.office.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
