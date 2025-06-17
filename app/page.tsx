"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Recycle, TreePine, Droplets, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { VideoHero } from "@/components/video-hero"
import { ScrollHeader } from "@/components/scroll-header"

export default function Component() {
  const { language, setLanguage, t, isRTL } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll-aware Header */}
      <ScrollHeader />

      {/* Hero Section with Video Background */}
      <VideoHero
        videoUrl="/sliderV.mp4"
        posterUrl="/placeholder.svg?height=800&width=1400"
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className={`text-white max-w-2xl ${isRTL ? "text-right" : "text-left"}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{t("hero.title")}</h1>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">{t("hero.subtitle")}</p>
          </div>
        </div>

        {/* Language badges */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Badge
            variant="secondary"
            className={`bg-white/20 text-white cursor-pointer transition-colors ${language === "en" ? "bg-white/40" : "hover:bg-white/30"}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </Badge>
          <Badge
            variant="secondary"
            className={`bg-white/20 text-white cursor-pointer transition-colors ${language === "ar" ? "bg-white/40" : "hover:bg-white/30"}`}
            onClick={() => setLanguage("ar")}
          >
            AR
          </Badge>
        </div>
      </VideoHero>

      {/* Rest of the content remains the same... */}
      {/* Green Desert Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 w-full">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('/placeholder.svg?height=400&width=1400')",
            }}
          />
        </div>
        <div className="relative">
          <div className="container mx-auto px-4 text-center">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-gray-800 mb-6 ${isRTL ? "text-right" : "text-left"} text-center`}
            >
              {t("about.title").split(" ")[0]} <span className="text-green-600">{t("about.title").split(" ")[1]}</span>
            </h2>
            <p
              className={`text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed ${isRTL ? "text-right" : "text-left"} text-center`}
            >
              {t("about.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Problems Section */}
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

      {/* Services Section */}
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

      {/* Products Section */}
      <section className="py-16 lg:py-20 bg-green-50">
        <div className="w-full">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{t("products.title")}</h2>
            <p className="text-xl lg:text-2xl text-green-600 mb-12">
              {t("products.subtitle").split(" ")[0]}{" "}
              <span className="text-gray-800">{t("products.subtitle").split(" ")[1]}</span>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/placeholder.svg?height=200&width=300"
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
                  src="/placeholder.svg?height=200&width=300"
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
                  src="/placeholder.svg?height=200&width=300"
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
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 lg:py-20">
        <div className="w-full">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{t("partners.title")}</h2>
            <p className="text-xl lg:text-2xl text-green-600 mb-12">{t("partners.subtitle")}</p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12 mb-8">
              <Image
                src="/placeholder.svg?height=80&width=120"
                alt="Partner 1"
                width={120}
                height={80}
                className="grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <Image
                src="/placeholder.svg?height=80&width=120"
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
        </div>
      </section>

      {/* Latest News Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="w-full">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <div className={`flex items-center mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Image
                    src="/logo_GD_white_home_EN.png"
                    alt="Green Desert Logo"
                    width={140}
                    height={35}
                    className="h-8 w-auto"
                  />
                </div>
                <p className={`text-gray-400 text-sm mb-4 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                  {t("footer.description")}
                </p>
                <div className={`flex space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                    <span className="text-xs">f</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                    <span className="text-xs">t</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                    <span className="text-xs">in</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className={`font-bold mb-4 ${isRTL ? "text-right" : "text-left"}`}>{t("footer.company")}</h4>
                <ul className={`space-y-2 text-sm text-gray-400 ${isRTL ? "text-right" : "text-left"}`}>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("nav.about")}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("nav.products")}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("nav.services")}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("nav.news")}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-4 ${isRTL ? "text-right" : "text-left"}`}>{t("footer.products")}</h4>
                <ul className={`space-y-2 text-sm text-gray-400 ${isRTL ? "text-right" : "text-left"}`}>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("products.hemp_seeds")}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("products.temperature_boxes")}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("products.hemp_fibers")}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-4 ${isRTL ? "text-right" : "text-left"}`}>{t("footer.services")}</h4>
                <ul className={`space-y-2 text-sm text-gray-400 ${isRTL ? "text-right" : "text-left"}`}>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("services.sustainability.title")}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("services.research.title")}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("services.education.title")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${isRTL ? "md:flex-row-reverse" : ""}`}
            >
              <p className="text-sm text-gray-400">{t("footer.copyright")}</p>
              <div
                className={`flex items-center space-x-4 mt-4 md:mt-0 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <span className="text-sm text-gray-400">{t("footer.designed")}</span>
                <Image
                  src="/logo_GD_white_home_EN.png"
                  alt="Green Desert Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
