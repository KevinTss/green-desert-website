import { getEntryBySlug, getAllEntries } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Metadata } from 'next'
import { ArticleDetail } from '@/components/article-detail'

interface BlogPostPageProps {
  params: Promise<{
    lang: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const enPosts = await getAllEntries('blog', 'en')
  const arPosts = await getAllEntries('blog', 'ar')

  const params = [
    ...enPosts.map((post) => ({ lang: 'en', slug: post.slug })),
    ...arPosts.map((post) => ({ lang: 'ar-SA', slug: post.slug })),
  ]

  return params
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { lang, slug } = await params
  const language = lang === 'ar-SA' ? 'ar' : 'en'
  const post = await getEntryBySlug('blog', slug, language)

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
  const post = await getEntryBySlug('blog', slug, language)
  const isArabic = language === 'ar'
  const languageRoute = language === 'ar' ? 'ar-SA' : 'en'
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://greendesert.sa'

  const toAbsolute = (url?: string) => {
    if (!url) return undefined
    return /^https?:\/\//i.test(url) ? url : `${SITE_URL}${url}`
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            url: `${SITE_URL}/${languageRoute}/blog/${post.slug}`,
            datePublished: post.date,
            dateModified: post.date,
            inLanguage: isArabic ? 'ar' : 'en',
            image: post.image ? [toAbsolute(post.image)] : undefined,
            author: post.author
              ? { '@type': 'Person', name: post.author }
              : { '@type': 'Organization', name: 'Green Desert' },
            articleSection: post.tags && post.tags.length > 0 ? post.tags[0] : undefined,
            keywords: post.tags && post.tags.length > 0 ? post.tags.join(', ') : undefined,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${SITE_URL}/${languageRoute}/blog/${post.slug}`,
            },
            isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
            publisher: { '@id': `${SITE_URL}/#organization` },
          }),
        }}
      />
      <ArticleDetail
        post={post}
        isArabic={isArabic}
        languageRoute={languageRoute}
        backHref={`/${languageRoute}/blog`}
        backLabel={isArabic ? 'العودة إلى المدونة' : 'Back to Blog'}
      />
    </div>
  )
}
