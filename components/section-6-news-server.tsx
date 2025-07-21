import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import { getAllPosts, BlogPost } from "@/lib/blog"
import { getAssetPath } from "@/lib/assets"

interface Section6NewsServerProps {
  lang: string
}

export const Section6NewsServer = async ({ lang }: Section6NewsServerProps) => {
  const language = lang === 'ar-SA' ? 'ar' : 'en'
  const isRTL = language === 'ar'
  const languageRoute = language === 'ar' ? 'ar-SA' : 'en'

  // Get latest 2 posts for the current language
  const posts = (await getAllPosts(language)).slice(0, 2)

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

  // Static translations
  const translations = {
    en: {
      title: "Latest News",
      viewAll: "View all articles",
      by: "By"
    },
    ar: {
      title: "آخر الأخبار",
      viewAll: "عرض جميع المقالات",
      by: "بواسطة"
    }
  }

  const t = translations[language as 'en' | 'ar']

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="w-full">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t.title.split(" ")[0]} <span className="text-orange-500">{t.title.split(" ")[1] || t.title.split(" ")[0]}</span>
            </h2>
            {posts.length > 0 && (
              <Link
                href={`/${languageRoute}/blog`}
                className={`inline-flex items-center text-green-600 hover:text-green-700 font-medium ${isRTL ? 'flex-row-reverse space-x-reverse space-x-2' : 'space-x-2'
                  }`}
              >
                <span>{t.viewAll}</span>
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
                        <span>{t.by}</span>
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
                      {language === 'ar' ? 'شراكة حصرية بين مؤسسة الصحراء الخضراء ولا شانفرير' : 'Exclusive Partnership Between Green Desert Foundation and La Chanvre'}
                    </h3>
                    <p className={`text-gray-600 ${isRTL ? "text-right" : "text-left"}`}>
                      {language === 'ar'
                        ? 'تعلن الصحراء الخضراء عن شراكة استراتيجية مع لا شانفرير لتطوير الممارسات الزراعية المستدامة في منطقة الشرق الأوسط.'
                        : 'Green Desert announces a strategic partnership with La Chanvre to develop sustainable agricultural practices in the Middle East region.'
                      }
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={getAssetPath("/placeholder.svg?height=250&width=400")}
                    alt="Office News"
                    width={400}
                    height={250}
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
                      {language === 'ar' ? 'افتتاح مكتب جديد وخطط التوسع' : 'New Office Opening and Expansion Plans'}
                    </h3>
                    <p className={`text-gray-600 ${isRTL ? "text-right" : "text-left"}`}>
                      {language === 'ar'
                        ? 'تفتتح الصحراء الخضراء مقرها الجديد في الرياض كجزء من استراتيجية التوسع لخدمة الطلب المتزايد على الحلول البيئية.'
                        : 'Green Desert opens its new headquarters in Riyadh as part of expansion strategy to serve growing demand for environmental solutions.'
                      }
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
