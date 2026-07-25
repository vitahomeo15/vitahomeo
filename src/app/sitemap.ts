import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sociveda.sociusin.com'

  const routes = [
    '',
    '/about',
    '/treatment',
    '/doctors',
    '/blog',
    '/contact',
    '/terms',
    '/privacy',
    '/refund-policy',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
