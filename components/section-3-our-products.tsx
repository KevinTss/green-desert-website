import { useLanguage } from "@/components/language-provider"
import { SectionTitle } from "@/components/section-title"
import { getAssetPath } from "@/lib/assets"
import { BlogCard } from '@/components/blog-card'

export const Section3OurProducts = () => {
  const { t, isRTL, language, languageRoute } = useLanguage()

  return (
    <section id="products" className="py-16 lg:py-20 flex items-center min-h-[60vh] bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle className="mb-2">{t("products.title")}</SectionTitle>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2 mb-16">
          {t("products.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left items-stretch">
          {[
            {
              key: 'hurds',
              title: t('nav.products.hurds'),
              excerpt: t('nav.products.hurds.description'),
              image: getAssetPath('/hurds.png'),
              href: `/${languageRoute}/products/hurds`
            },
            {
              key: 'bast-fiber',
              title: t('nav.products.bastFiber'),
              excerpt: t('nav.products.bastFiber.description'),
              image: getAssetPath('/bast-fiber.png'),
              href: `/${languageRoute}/products/bast-fiber`
            },
            {
              key: 'seeds',
              title: t('nav.products.seeds'),
              excerpt: t('nav.products.seeds.description'),
              image: getAssetPath('/seeds.png'),
              href: `/${languageRoute}/products/seeds`
            },
          ].map((p) => (
            <BlogCard
              key={p.key}
              post={{ slug: p.key, title: p.title, image: p.image, excerpt: p.excerpt }}
              isRTL={isRTL}
              languageRoute={language}
              href={p.href}
              imageClassName="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
