import { useLanguage } from "@/components/language-provider"

export const Section2OurMission = () => {
  const { t, isRTL } = useLanguage()
  return (
    <section id="story" className="py-16 lg:py-20 relative overflow-hidden flex items-center min-h-[60vh]">
      <div className="absolute inset-0 w-full">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
        // style={{
        //   backgroundImage: "url('/placeholder.svg?height=400&width=1400')",
        // }}
        />
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center"
        >
          {t("about.title").split(" ")[0]} <span className="text-green-600">{t("about.title").split(" ")[1]}</span>
        </h2>
        <p
          className={`text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed ${isRTL ? "text-right" : "text-left"} text-center`}
        >
          {t("about.description")}
        </p>
      </div>
    </section>
  )
}
