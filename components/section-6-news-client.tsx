"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import { Calendar, ArrowRight } from "lucide-react"
import { getLatestPosts } from "@/lib/blog-static"
import { getAssetPath } from "@/lib/assets"

export const Section6NewsClient = () => {
  const { t, isRTL, language } = useLanguage()
  const languageRoute = language === 'ar' ? 'ar-SA' : 'en'

  // Get latest posts for current language
  const posts = getLatestPosts(language as 'en' | 'ar', 2)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (language === 'ar') {
      return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="news" className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionTitle>{t("news.title")}</SectionTitle>
          {posts.length > 0 && (
            <Link
              href={`/${languageRoute}/blog`}
              className={`inline-flex items-center text-green-600 hover:text-green-700 font-medium ${isRTL ? 'flex-row-reverse space-x-reverse space-x-2' : 'space-x-2'
                }`}
            >
              <span>{isRTL ? 'عرض جميع المقالات' : 'View all articles'}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          )}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link href={`/${languageRoute}/blog/${post.slug}`}>
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg?height=250&width=400"}
                      alt={post.title}
                      width={400}
                      height={250}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {post.tags && post.tags.length > 0 && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.tags[0]}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
                <CardContent className="p-6">
                  <div
                    className={`flex items-center space-x-2 text-sm text-gray-500 mb-3 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className={`text-xl font-bold text-gray-800 mb-3 line-clamp-2 ${isRTL ? "text-right" : "text-left"}`}>
                    <Link href={`/${languageRoute}/blog/${post.slug}`} className="hover:text-green-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className={`text-gray-600 line-clamp-3 mb-4 ${isRTL ? "text-right" : "text-left"}`}>
                    {post.excerpt}
                  </p>
                  {post.author && (
                    <div className={`flex items-center text-sm text-gray-500 ${isRTL ? "flex-row-reverse space-x-reverse space-x-2" : "space-x-2"}`}>
                      <span>{isRTL ? 'بواسطة' : 'By'}</span>
                      <span className="font-medium">{post.author}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            // Fallback content when no blog posts exist
            <>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={getAssetPath("/placeholder.svg?height=250&width=400")}
                  alt="Partnership News"
                  width={400}
                  height={250}
                  sizes="(min-width: 768px) 50vw, 100vw"
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
                  src={getAssetPath("/placeholder.svg?height=250&width=400")}
                  alt="Office News"
                  width={400}
                  height={250}
                  sizes="(min-width: 768px) 50vw, 100vw"
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
            </>
          )}
        </div>
      </div>
    </section>
  )
}
