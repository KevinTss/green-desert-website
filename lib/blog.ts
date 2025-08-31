import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  author?: string
  image?: string
  tags?: string[]
  language: 'en' | 'ar'
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getPostSlugs(language: 'en' | 'ar'): string[] {
  const langDirectory = path.join(postsDirectory, language)
  if (!fs.existsSync(langDirectory)) {
    return []
  }
  return fs.readdirSync(langDirectory).filter(file => file.endsWith('.md'))
}

export async function getPostBySlug(slug: string, language: 'en' | 'ar'): Promise<BlogPost | null> {
  try {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, language, `${realSlug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await unified()
      .use(remarkParse)
      // Convert Markdown (mdast) to HTML (hast), allowing raw HTML nodes to be parsed
      .use(remarkRehype, { allowDangerousHtml: true })
      // Parse any raw HTML in the Markdown into the HAST tree
      .use(rehypeRaw)
      // Sanitize the HTML to prevent XSS
      .use(rehypeSanitize)
      // Stringify back to HTML
      .use(rehypeStringify)
      .process(content)
    const contentHtml = String(processedContent)

    return {
      slug: realSlug,
      title: data.title || realSlug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || content.substring(0, 200) + '...',
      content: contentHtml,
      author: data.author,
      image: data.image,
      tags: data.tags || [],
      language,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(language: 'en' | 'ar'): Promise<BlogPost[]> {
  const slugs = getPostSlugs(language)
  const posts = await Promise.all(
    slugs.map(slug => getPostBySlug(slug, language))
  )

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown)
  return String(file)
}
