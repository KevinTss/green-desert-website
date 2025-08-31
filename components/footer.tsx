import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { LinkedinIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import { getAssetPath } from "@/lib/assets"

export const Footer = () => {
  const { t, isRTL } = useLanguage()

  return (
    <footer id="site-footer" className="bg-gray-50 text-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4 w-full">
        <div className="space-y-10">
          {/* Top block: logo + description + socials */}
          <div>
            <div className={`flex items-center mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Image
                src={getAssetPath("/logo_GD_black_EN.png")}
                alt="Green Desert Logo"
                width={140}
                height={35}
                className="h-8 w-auto"
              />
            </div>
            <p className={`text-gray-600 text-sm mb-4 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
              {t("footer.description")}
            </p>
            <div className={`flex space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <a className="text-xs" href="https://www.linkedin.com/company/green-desert-sa/"><LinkedinIcon size={10} /></a>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <a className="text-xs" href="https://www.instagram.com/greendesertsa/"><InstagramIcon size={10} /></a>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <a className="text-xs" href="https://twitter.com/Greendesertsa"><TwitterIcon size={10} /></a>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <a className="text-xs" href="www.youtube.com/@GreenDesertsa"><YoutubeIcon size={10} /></a>
              </div>
            </div>
          </div>

          {/* Bottom grid: links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className={`font-bold mb-4 text-gray-900 ${isRTL ? "text-right" : "text-left"}`}>{t("footer.company")}</h4>
              <ul className={`space-y-2 text-sm text-gray-600 ${isRTL ? "text-right" : "text-left"}`}>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    {t("nav.products")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    {t("nav.services")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    {t("nav.news")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={`font-bold mb-4 text-gray-900 ${isRTL ? "text-right" : "text-left"}`}>{t("footer.products")}</h4>
              <ul className={`space-y-2 text-sm text-gray-600 ${isRTL ? "text-right" : "text-left"}`}>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    {t("products.hemp_seeds")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    {t("products.temperature_boxes")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    {t("products.hemp_fibers")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={`font-bold mb-4 text-gray-900 ${isRTL ? "text-right" : "text-left"}`}>{t("footer.services")}</h4>
              <ul className={`space-y-2 text-sm text-gray-600 ${isRTL ? "text-right" : "text-left"}`}>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    {t("services.sustainability.title")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    {t("services.research.title")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    {t("services.education.title")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${isRTL ? "md:flex-row-reverse" : ""}`}
          >
            <p className="text-sm text-gray-600">{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
