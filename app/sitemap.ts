import type { MetadataRoute } from 'next'
import { getAllEntries } from '@/lib/posts'
import { SOLUTION_SLUGS } from '@/lib/solutions'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://greendesert.sa'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/en/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Solutions overview
    {
      url: `${BASE_URL}/en/solutions/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/ar-SA/solutions/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/en/team/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/ar-SA/team/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/en/sponsors/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/ar-SA/sponsors/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/ar-SA/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/en/company/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ar-SA/company/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/en/blog/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ar-SA/blog/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/en/news/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/ar-SA/news/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/en/research/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/ar-SA/research/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/en/education/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/ar-SA/education/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Blog posts for both languages
  const [enPosts, arPosts] = await Promise.all([
    getAllEntries('blog', 'en'),
    getAllEntries('blog', 'ar'),
  ])

  SOLUTION_SLUGS.forEach((slug) => {
    routes.push(
      {
        url: `${BASE_URL}/en/solutions/${slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.75,
      },
      {
        url: `${BASE_URL}/ar-SA/solutions/${slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.75,
      },
    )
  })

  // News posts
  const [enNews, arNews] = await Promise.all([
    getAllEntries('news', 'en'),
    getAllEntries('news', 'ar'),
  ])
  enNews.forEach((post) => {
    routes.push({
      url: `${BASE_URL}/en/news/${post.slug}/`,
      lastModified: new Date(post.date || Date.now()),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })
  arNews.forEach((post) => {
    routes.push({
      url: `${BASE_URL}/ar-SA/news/${post.slug}/`,
      lastModified: new Date(post.date || Date.now()),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  enPosts.forEach((post) => {
    routes.push({
      url: `${BASE_URL}/en/blog/${post.slug}/`,
      lastModified: new Date(post.date || Date.now()),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  arPosts.forEach((post) => {
    routes.push({
      url: `${BASE_URL}/ar-SA/blog/${post.slug}/`,
      lastModified: new Date(post.date || Date.now()),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  return routes
}
export const dynamic = 'force-static'
