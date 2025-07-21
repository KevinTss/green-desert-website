import { getAllPosts } from '@/lib/blog'
import { BlogCard } from '@/components/blog-card'
import { ScrollHeader } from '@/components/scroll-header'
import { Metadata } from 'next'

interface BlogPageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { lang } = await params
  const isArabic = lang === 'ar-SA'
  
  return {
    title: isArabic ? 'مدونة الصحراء الخضراء' : 'Green Desert Blog',
    description: isArabic 
      ? 'اكتشف أحدث المقالات والأخبار حول التكنولوجيا الحيوية والحلول البيئية المستدامة'
      : 'Discover the latest articles and news about biotechnology and sustainable environmental solutions',
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = await params
  const language = lang === 'ar-SA' ? 'ar' : 'en'
  const posts = await getAllPosts(language)
  const isArabic = language === 'ar'

  return (
    <div className="min-h-screen bg-white">
      <ScrollHeader />
      <div className="container mx-auto px-4 py-12 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {isArabic ? 'مدونة الصحراء الخضراء' : 'Green Desert Blog'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isArabic 
              ? 'اكتشف أحدث المقالات والأخبار حول التكنولوجيا الحيوية والحلول البيئية المستدامة في المملكة العربية السعودية'
              : 'Discover the latest articles and news about biotechnology and sustainable environmental solutions in Saudi Arabia'
            }
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} language={language} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {isArabic ? 'لا توجد مقالات بعد' : 'No articles yet'}
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {isArabic 
                ? 'نحن نعمل على إضافة محتوى رائع قريباً. تابعونا للحصول على آخر الأخبار!'
                : "We're working on adding great content soon. Stay tuned for the latest updates!"
              }
            </p>
          </div>
        )}
      </div>
    </div>
  )
}