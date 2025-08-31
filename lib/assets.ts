const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/green-desert-website' : ''

function preferWebp(path: string): string {
  if (!isProd) return path
  const qIndex = path.indexOf('?')
  const [pathname, query] = qIndex >= 0 ? [path.slice(0, qIndex), path.slice(qIndex)] : [path, '']
  if (/\.(png|jpg|jpeg)$/i.test(pathname)) {
    return pathname.replace(/\.(png|jpg|jpeg)$/i, '.webp') + query
  }
  return path
}

export function getAssetPath(path: string): string {
  // Don't prefix external URLs or data URLs
  if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('//')) {
    return path
  }
  
  // Add basePath prefix for production GitHub Pages deployment
  return `${basePath}${preferWebp(path)}`
}
