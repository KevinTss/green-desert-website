"use client"

import { useContent, useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"
import { getLatestPosts } from "@/lib/blog-static"
import { getAssetPath } from "@/lib/assets"
import { BlogCard, BlogCardPost } from "@/components/blog-card"
import { Heading } from "@/components/typography"
import { Section } from "@/components/section"

export const Section6NewsClient = () => {
  const { isRTL, language, languageRoute } = useLanguage()
  const { home } = useContent()
  const news = home?.news ?? {}
  const hasNewsContent = !!news.title || !!(news.items && news.items.length)

  // Get latest posts for current language
  const posts = getLatestPosts(language as 'en' | 'ar', 3)

  // Card formatting handled by reusable BlogCard component

  if (!hasNewsContent && posts.length === 0) return null

  return (
    <Section id="news">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title={<Heading className="mb-2" align={isRTL ? "right" : "left"}>{news.title}</Heading>}
          subtitle={news.subtitle}
          actionHref={posts.length > 0 ? `/${languageRoute}/blog` : undefined}
          actionText={posts.length > 0 ? news.viewAllLabel : undefined}
          isRTL={isRTL}
          className="text-center md:text-left"
        />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.length > 0
            ? posts.map((post) => (
              <BlogCard key={post.slug} post={post} isRTL={isRTL} languageRoute={language} />
            ))
            : (news.items ?? []).map((item) => {
              const fallbackHref = item.link
                ? item.link.startsWith("/")
                  ? `/${languageRoute}${item.link}`
                  : item.link
                : undefined
              const fallbackPost: BlogCardPost = {
                slug: item.id,
                title: item.title,
                date: item.date ?? "",
                excerpt: item.description,
                image: getAssetPath(item.image ?? "/placeholder.svg?height=250&width=400"),
                tags: [news.tag ?? "News"],
              }
              return <BlogCard key={fallbackPost.slug} post={fallbackPost} isRTL={isRTL} languageRoute={language} href={fallbackHref} />
            })}
        </div>
      </div>
    </Section>
  )
}
