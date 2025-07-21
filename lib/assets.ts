const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/green-desert-website' : ''

export function getAssetPath(path: string): string {
  // Don't prefix external URLs or data URLs
  if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('//')) {
    return path
  }
  
  // Add basePath prefix for production GitHub Pages deployment
  return `${basePath}${path}`
}