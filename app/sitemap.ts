import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://greendesert.sa'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/en/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/ar-SA/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
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
  ]

  // Blog posts for both languages
  const [enPosts, arPosts] = await Promise.all([
    getAllPosts('en'),
    getAllPosts('ar'),
  ])

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
