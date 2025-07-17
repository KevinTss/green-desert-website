import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, TreePine, Droplets } from "lucide-react"

export const Section4OurServices = () => {
  const { t, isRTL } = useLanguage()

  return (
    <section className="py-16 lg:py-20">
      <div className="w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{t("services.title")}</h2>
          <p className="text-xl lg:text-2xl text-green-600 mb-12">
            {t("services.subtitle").split(" ")[0]}{" "}
            <span className="text-gray-800">{t("services.subtitle").split(" ")[1]}</span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className={`text-center ${isRTL ? "text-right" : "text-left"} text-center`}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Recycle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 leading-tight">
                  {t("services.sustainability.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">{t("services.sustainability.description")}</p>
              </CardContent>
            </Card>

            <Card className="p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className={`text-center ${isRTL ? "text-right" : "text-left"} text-center`}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TreePine className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 leading-tight">
                  {t("services.research.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">{t("services.research.description")}</p>
              </CardContent>
            </Card>

            <Card className="p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <CardContent className={`text-center ${isRTL ? "text-right" : "text-left"} text-center`}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Droplets className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 leading-tight">
                  {t("services.education.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">{t("services.education.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
