import { getAllPosts } from "@/lib/blog"
import { getAssetPath } from "@/lib/assets"
import { SectionHeader } from "@/components/section-header"
import { BlogCard, BlogCardPost } from "@/components/blog-card"

interface Section6NewsServerProps {
  lang: string
}

export const Section6NewsServer = async ({ lang }: Section6NewsServerProps) => {
  const language = lang === 'ar-SA' ? 'ar' : 'en'
  const isRTL = language === 'ar'
  const languageRoute = language === 'ar' ? 'ar-SA' : 'en'

  // Get latest 3 posts for the current language
  const posts = (await getAllPosts(language)).slice(0, 3)

  // Card formatting handled by reusable BlogCard component

  // Static translations
  const translations = {
    en: {
      title: "Latest News",
      subtitle: "Green Desert",
      viewAll: "View all articles",
      by: "By"
    },
    ar: {
      title: "آخر الأخبار",
      subtitle: "الصحراء الخضراء",
      viewAll: "عرض جميع المقالات",
      by: "بواسطة"
    }
  }

  const t = translations[language as 'en' | 'ar']

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title={<>
            {t.title.split(" ")[0]} {" "}
            <span className="text-orange-500">{t.title.split(" ")[1] || t.title.split(" ")[0]}</span>
          </>}
          subtitle={t.subtitle}
          actionHref={posts.length > 0 ? `/${languageRoute}/blog` : undefined}
          actionText={posts.length > 0 ? t.viewAll : undefined}
          isRTL={isRTL}
          className="text-center md:text-left"
        />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard key={post.slug} post={post} isRTL={isRTL} languageRoute={languageRoute as 'en' | 'ar-SA'} />
            ))
          ) : (
            (() => {
              const fallbackPosts: BlogCardPost[] = [
                {
                  slug: "partnership-news",
                  title: language === 'ar' ? 'شراكة حصرية بين مؤسسة الصحراء الخضراء ولا شانفرير' : 'Exclusive Partnership Between Green Desert Foundation and La Chanvre',
                  date: "2024-03-15",
                  excerpt:
                    language === 'ar'
                      ? 'تعلن الصحراء الخضراء عن شراكة استراتيجية مع لا شانفرير لتطوير الممارسات الزراعية المستدامة في منطقة الشرق الأوسط.'
                      : 'Green Desert announces a strategic partnership with La Chanvre to develop sustainable agricultural practices in the Middle East region.',
                  image: getAssetPath("/placeholder.svg?height=250&width=400"),
                  tags: [language === 'ar' ? "الأخبار" : "News"],
                },
                {
                  slug: "office-news",
                  title: language === 'ar' ? 'افتتاح مكتب جديد وخطط التوسع' : 'New Office Opening and Expansion Plans',
                  date: "2024-03-10",
                  excerpt:
                    language === 'ar'
                      ? 'تفتتح الصحراء الخضراء مقرها الجديد في الرياض كجزء من استراتيجية التوسع لخدمة الطلب المتزايد على الحلول البيئية.'
                      : 'Green Desert opens its new headquarters in Riyadh as part of expansion strategy to serve growing demand for environmental solutions.',
                  image: getAssetPath("/placeholder.svg?height=250&width=400"),
                  tags: [language === 'ar' ? "إعلان" : "Announcement"],
                },
                {
                  slug: "hempcrete-basics-benefits",
                  title: language === 'ar' ? 'البناء المستدام باستخدام خرسانة القنب: الأساسيات والفوائد' : 'Sustainable Building with Hempcrete: Basics and Benefits',
                  date: "2024-10-20",
                  excerpt:
                    language === 'ar'
                      ? 'لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسشينغ إيليت...'
                      : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
                  image: getAssetPath("/hemp_hurds_mulch-443x300.png"),
                  tags: [language === 'ar' ? "البناء" : "Construction"],
                },
              ]
              return fallbackPosts.map((post) => (
                <BlogCard key={post.slug} post={post} isRTL={isRTL} languageRoute={languageRoute as 'en' | 'ar-SA'} />
              ))
            })()
          )}
        </div>
      </div>
    </section >
  )
}
