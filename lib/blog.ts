import fs from 'fs'
import path from 'path'

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

export function getPostBySlug(slug: string, language: 'en' | 'ar'): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, language, `${realSlug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Simple frontmatter parsing
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
    const match = fileContents.match(frontmatterRegex)
    
    if (!match) {
      return null
    }
    
    const frontmatter = match[1]
    const content = match[2]
    
    // Parse frontmatter
    const metadata: any = {}
    frontmatter.split('\n').forEach(line => {
      const [key, ...values] = line.split(':')
      if (key && values.length > 0) {
        const value = values.join(':').trim()
        if (key.trim() === 'tags') {
          metadata[key.trim()] = value.split(',').map(tag => tag.trim())
        } else {
          metadata[key.trim()] = value.replace(/^["']|["']$/g, '')
        }
      }
    })
    
    return {
      slug: realSlug,
      title: metadata.title || realSlug,
      date: metadata.date || new Date().toISOString(),
      excerpt: metadata.excerpt || content.substring(0, 200) + '...',
      content: content,
      author: metadata.author,
      image: metadata.image,
      tags: metadata.tags || [],
      language
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(language: 'en' | 'ar'): BlogPost[] {
  const slugs = getPostSlugs(language)
  const posts = slugs
    .map(slug => getPostBySlug(slug, language))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return posts
}

// Simple markdown to HTML converter
export function markdownToHtml(markdown: string): string {
  return markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Images
    .replace(/!\[([^\]]*)\]\(([^\)]*)\)/gim, '<img alt="$1" src="$2" class="w-full rounded-lg my-4" />')
    // Line breaks
    .replace(/\n\n/gim, '</p><p>')
    .replace(/\n/gim, '<br>')
    // Wrap in paragraphs
    .replace(/^(.*)$/gim, '<p>$1</p>')
    // Clean up empty paragraphs
    .replace(/<p><\/p>/gim, '')
    .replace(/<p>(<h[1-6]>.*<\/h[1-6]>)<\/p>/gim, '$1')
    .replace(/<p>(<img.*\/>)<\/p>/gim, '$1')
}