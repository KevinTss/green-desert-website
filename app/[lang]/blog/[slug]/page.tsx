import { getPostBySlug, getAllPosts, markdownToHtml } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollHeader } from '@/components/scroll-header'
import { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{
    lang: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const enPosts = await getAllPosts('en')
  const arPosts = await getAllPosts('ar')

  const params = [
    ...enPosts.map(post => ({ lang: 'en', slug: post.slug })),
    ...arPosts.map(post => ({ lang: 'ar-SA', slug: post.slug }))
  ]

  return params
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { lang, slug } = await params
  const language = lang === 'ar-SA' ? 'ar' : 'en'
  const post = await getPostBySlug(slug, language)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { lang, slug } = await params
  const language = lang === 'ar-SA' ? 'ar' : 'en'
  const post = await getPostBySlug(slug, language)
  const isArabic = language === 'ar'
  const languageRoute = language === 'ar' ? 'ar-SA' : 'en'

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (isArabic) {
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
    <div className="min-h-screen bg-white">
      <ScrollHeader />
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Back to blog link */}
        <div className={`mb-8 ${isArabic ? 'text-right' : 'text-left'}`}>
          <Link
            href={`/${languageRoute}/blog`}
            className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
          >
            <svg
              className={`w-4 h-4 ${isArabic ? 'ml-1' : 'mr-1 rotate-180'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {isArabic ? 'العودة إلى المدونة' : 'Back to Blog'}
          </Link>
        </div>

        {/* Article Header */}
        <header className={`mb-12 ${isArabic ? 'text-right' : 'text-left'}`}>
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className={`flex flex-wrap gap-2 mb-6 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta information */}
          <div className={`flex items-center text-gray-600 mb-8 ${isArabic ? 'flex-row-reverse justify-end space-x-reverse space-x-6' : 'space-x-6'}`}>
            {post.author && (
              <div className={`flex items-center ${isArabic ? 'flex-row-reverse space-x-reverse space-x-2' : 'space-x-2'}`}>
                <span className="text-sm">{isArabic ? 'بواسطة' : 'By'}</span>
                <span className="font-medium">{post.author}</span>
              </div>
            )}
            <time dateTime={post.date} className="text-sm">
              {formatDate(post.date)}
            </time>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto">
          <div
            className={`prose prose-lg max-w-none ${isArabic
              ? 'prose-headings:text-right prose-p:text-right prose-li:text-right prose-blockquote:text-right'
              : ''
              } prose-headings:text-gray-900 prose-a:text-green-600 prose-a:no-underline hover:prose-a:text-green-700`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Back to blog link (bottom) */}
        <div className={`mt-16 pt-8 border-t border-gray-200 ${isArabic ? 'text-right' : 'text-left'}`}>
          <Link
            href={`/${languageRoute}/blog`}
            className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
          >
            <svg
              className={`w-4 h-4 ${isArabic ? 'ml-1' : 'mr-1 rotate-180'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {isArabic ? 'العودة إلى المدونة' : 'Back to Blog'}
          </Link>
        </div>
      </div>
    </div>
  )
}
