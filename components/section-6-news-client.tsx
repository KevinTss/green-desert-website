"use client"

import { useContent, useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"
import { getAssetPath } from "@/lib/assets"
import { BlogCard, BlogCardPost } from "@/components/blog-card"
import { Heading } from "@/components/typography"
import { Section } from "@/components/section"

export const Section6NewsClient = ({ latestNews }: { latestNews: {
    title: string,
    date: string,
    image: string,
    href: string,
}[] }) => {
  const { isRTL, languageRoute } = useLanguage()
  const { home } = useContent()
  const news = home?.news ?? {}

  if (!news.title && latestNews.length === 0) return null

  return (
    <Section id="news">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title={<Heading className="mb-2" align={isRTL ? "right" : "left"}>{news.title}</Heading>}
          subtitle={news.subtitle}
          actionHref={latestNews.length > 0 ? `/${languageRoute}/news` : undefined}
          actionText={latestNews.length > 0 ? news.viewAllLabel : undefined}
          isRTL={isRTL}
          className="text-center md:text-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {latestNews.length > 0
            ? latestNews.map((item) => (
              <BlogCard
                key={item.href}
                post={{
                  slug: "",
                  title: item.title,
                  date: item.date,
                  excerpt: "",
                  author: "",
                  image: item.image,
                  tags: [],
                  url: item.href,
                }}
                isRTL={isRTL}
                languageRoute={languageRoute}
                href={item.href}
              />
            ))
            : (news.items ?? []).map((item) => {
              const fallbackHref = item.link ?? undefined
              const fallbackPost: BlogCardPost = {
                slug: item.id,
                title: item.title,
                date: item.date ?? "",
                excerpt: item.description,
                image: getAssetPath(item.image ?? "/placeholder.svg?height=250&width=400"),
                tags: [news.tag ?? "News"],
              }
              return (
                <BlogCard
                  key={fallbackPost.slug}
                  post={fallbackPost}
                  isRTL={isRTL}
                  languageRoute={languageRoute}
                  href={fallbackHref}
                />
              )
            })}
        </div>
      </div>
    </Section>
  )
}
