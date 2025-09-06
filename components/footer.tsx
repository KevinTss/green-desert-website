import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { LinkedinIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import { getAssetPath } from "@/lib/assets"
import { cn } from "@/lib/utils"

export const Footer = () => {
  const { t, isRTL } = useLanguage()

  return (
    <footer id="site-footer" className="bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 w-full py-10 space-y-10">
        {/* Follow us bar */}
        <div className={cn(
          "flex items-center border-b border-gray-200 pb-6 gap-3",
        )}>
          <div className="text-sm font-medium text-gray-700">{t('footer.follow')}</div>
          <div className="flex items-center gap-3">
            {[
              { href: "https://www.linkedin.com/company/green-desert-sa/", Icon: LinkedinIcon, label: "LinkedIn" },
              { href: "https://www.instagram.com/greendesertsa/", Icon: InstagramIcon, label: "Instagram" },
              { href: "https://twitter.com/Greendesertsa", Icon: TwitterIcon, label: "Twitter" },
              { href: "https://www.youtube.com/@GreenDesertsa", Icon: YoutubeIcon, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tagline only */}
          <div>
            <p className={cn("text-lg md:text-xl text-gray-700 leading-relaxed", isRTL ? "text-right" : "text-left")}>
              {t('footer.description')}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className={cn("font-bold mb-4 text-gray-900", isRTL ? "text-right" : "text-left")}>{t('footer.company')}</h4>
            <ul className={cn("space-y-2 text-sm text-gray-600", isRTL ? "text-right" : "text-left")}>
              {[
                { href: "#", label: t('nav.about') },
                { href: "#", label: "Careers" },
                { href: "#", label: t('nav.products') },
                { href: "#", label: t('nav.services') },
                { href: "#", label: t('mini.news') },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-gray-900 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products + Services stacked */}
          <div>
            <div className="mb-8">
              <h4 className={cn("font-bold mb-4 text-gray-900", isRTL ? "text-right" : "text-left")}>{t('footer.products')}</h4>
              <ul className={cn("space-y-2 text-sm text-gray-600", isRTL ? "text-right" : "text-left")}>
                {[
                  { href: "#", label: t('products.hemp_seeds') },
                  { href: "#", label: t('products.temperature_boxes') },
                  { href: "#", label: t('products.hemp_fibers') },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-gray-900 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={cn("font-bold mb-4 text-gray-900", isRTL ? "text-right" : "text-left")}>{t('footer.services')}</h4>
              <ul className={cn("space-y-2 text-sm text-gray-600", isRTL ? "text-right" : "text-left")}>
                {[
                  { href: "#", label: t('services.sustainability.title') },
                  { href: "#", label: t('services.research.title') },
                  { href: "#", label: t('services.education.title') },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-gray-900 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={cn(
          "border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between",
        )}>
          <div className="mb-4 md:mb-0">
            <Image
              src={getAssetPath("/logo_GD_black_EN.png")}
              alt="Green Desert Logo"
              width={140}
              height={35}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-gray-600 text-center">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
