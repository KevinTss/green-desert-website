import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/blog'
import { useLanguage } from '@/components/language-provider'

interface BlogCardProps {
  post: BlogPost
  language: 'en' | 'ar'
}

export function BlogCard({ post, language }: BlogCardProps) {
  const isArabic = language === 'ar'
  const languageRoute = language === 'ar' ? 'ar-SA' : 'en'
  
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
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {post.image && (
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className={`flex flex-wrap gap-2 mb-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className={`text-xl font-semibold text-gray-900 mb-3 line-clamp-2 ${isArabic ? 'text-right' : 'text-left'}`}>
          <Link 
            href={`/${languageRoute}/blog/${post.slug}`}
            className="hover:text-green-600 transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className={`text-gray-600 mb-4 line-clamp-3 ${isArabic ? 'text-right' : 'text-left'}`}>
          {post.excerpt}
        </p>

        {/* Meta information */}
        <div className={`flex items-center justify-between text-sm text-gray-500 ${isArabic ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center ${isArabic ? 'flex-row-reverse space-x-reverse space-x-2' : 'space-x-2'}`}>
            {post.author && (
              <>
                <span>{isArabic ? 'بواسطة' : 'By'}</span>
                <span className="font-medium">{post.author}</span>
              </>
            )}
          </div>
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>

        {/* Read more link */}
        <div className={`mt-4 ${isArabic ? 'text-right' : 'text-left'}`}>
          <Link
            href={`/${languageRoute}/blog/${post.slug}`}
            className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center"
          >
            {isArabic ? 'اقرأ المزيد' : 'Read more'}
            <svg
              className={`w-4 h-4 ${isArabic ? 'mr-1 rotate-180' : 'ml-1'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}