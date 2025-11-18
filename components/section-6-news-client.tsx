"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"
import { getLatestPosts } from "@/lib/blog-static"
import { getAssetPath } from "@/lib/assets"
import { BlogCard, BlogCardPost } from "@/components/blog-card"
import { Heading } from "@/components/typography"

export const Section6NewsClient = () => {
  const { t, isRTL, language, languageRoute } = useLanguage()

  // Get latest posts for current language
  const posts = getLatestPosts(language as 'en' | 'ar', 3)

  // Card formatting handled by reusable BlogCard component

  return (
    <section id="news" className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title={<Heading className="mb-2" align={isRTL ? "right" : "left"}>{t("news.title")}</Heading>}
          subtitle={t("news.subtitle")}
          actionHref={posts.length > 0 ? `/${languageRoute}/blog` : undefined}
          actionText={posts.length > 0 ? (isRTL ? 'عرض جميع المقالات' : 'View all articles') : undefined}
          isRTL={isRTL}
          className="text-center md:text-left"
        />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard key={post.slug} post={post} isRTL={isRTL} languageRoute={language} />
            ))
          ) : (
            (() => {
              const fallbackPosts: BlogCardPost[] = [
                {
                  slug: "partnership-news",
                  title: t("news.partnership.title"),
                  date: "2024-03-15",
                  excerpt: t("news.partnership.description"),
                  image: getAssetPath("/placeholder.svg?height=250&width=400"),
                  tags: [isRTL ? "الأخبار" : "News"],
                },
                {
                  slug: "office-news",
                  title: t("news.office.title"),
                  date: "2024-03-10",
                  excerpt: t("news.office.description"),
                  image: getAssetPath("/placeholder.svg?height=250&width=400"),
                  tags: [isRTL ? "إعلان" : "Announcement"],
                },
                {
                  slug: "hempcrete-basics-benefits",
                  title: isRTL ? "البناء المستدام باستخدام خرسانة القنب: الأساسيات والفوائد" : "Sustainable Building with Hempcrete: Basics and Benefits",
                  date: "2024-10-20",
                  excerpt: isRTL
                    ? "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسشينغ إيليت..."
                    : "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
                  image: getAssetPath("/hemp_hurds_mulch-443x300.png"),
                  tags: [isRTL ? "البناء" : "Construction"],
                },
              ]
              return fallbackPosts.map((post) => (
                <BlogCard key={post.slug} post={post} isRTL={isRTL} languageRoute={language} />
              ))
            })()
          )}
        </div>
      </div>
    </section>
  )
}
