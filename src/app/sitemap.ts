import { MetadataRoute } from 'next'
import { treatmentsData } from '@/data/treatmentsData'
import { doctors } from '@/data/doctorsData'
import { blogPosts } from '@/data/blogData'
import { allLocationsList } from '@/data/locationsData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.vitahomeo.com'
  const LAST_RELEASE = new Date('2026-11-16')

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: LAST_RELEASE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/treatment`, lastModified: LAST_RELEASE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/doctors`, lastModified: LAST_RELEASE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/book`, lastModified: LAST_RELEASE, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: LAST_RELEASE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: LAST_RELEASE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: LAST_RELEASE, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/join`, lastModified: LAST_RELEASE, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/terms`, lastModified: LAST_RELEASE, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: LAST_RELEASE, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/refund-policy`, lastModified: LAST_RELEASE, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: LAST_RELEASE, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Dedicated city location doctor routes (Programmatic Local SEO)
  const locationRoutes: MetadataRoute.Sitemap = allLocationsList.map((loc) => ({
    url: `${baseUrl}/doctor/${loc.slug}`,
    lastModified: LAST_RELEASE,
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  // All individual condition treatment routes
  const treatmentRoutes: MetadataRoute.Sitemap = Object.keys(treatmentsData).map((slug) => ({
    url: `${baseUrl}/treatments/${slug}`,
    lastModified: LAST_RELEASE,
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  // Treatment categories
  const categoryIds = [
    'chronic-diseases',
    'child-health',
    'mental-wellness',
    'skin-care',
    'respiratory',
    'hair',
    'womens-health',
    'digestive',
    'thyroid',
    'joint-pain',
    'senior-care',
    'immunity',
  ]
  const categoryRoutes: MetadataRoute.Sitemap = categoryIds.map((catId) => ({
    url: `${baseUrl}/treatments/category/${catId}`,
    lastModified: LAST_RELEASE,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Doctors
  const doctorRoutes: MetadataRoute.Sitemap = doctors.map((doc) => ({
    url: `${baseUrl}/doctors/${doc.slug}`,
    lastModified: LAST_RELEASE,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Blog posts
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: LAST_RELEASE,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [
    ...staticRoutes,
    ...locationRoutes,
    ...treatmentRoutes,
    ...categoryRoutes,
    ...doctorRoutes,
    ...blogRoutes,
  ]
}
