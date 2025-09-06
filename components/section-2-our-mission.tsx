import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { SectionTitle } from "@/components/section-title"

export const Section2OurMission = () => {
  const { t } = useLanguage()
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
        <SectionTitle>{t("about.title")}</SectionTitle>
        <p
          className={cn(
            "text-4xl text-gray-600 max-w-screen-xl mx-auto leading-snug text-center",
          )}
        >
          {t("about.description")}
        </p>
      </div>
    </section>
  )
}
