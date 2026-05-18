import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://founditmarketing.com';

  // Core pages (highest priority)
  const coreRoutes = [
    '',
    '/about',
    '/contact',
    '/team',
    '/pricing',
    '/case-studies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Landing pages (high priority — ad traffic destinations)
  const landingPages = [
    '/lp/google-ads-management',
    '/lp/web-design',
    '/lp/ai-search-seo',
    '/lp/social-media-management',
    '/lp/lake-charles/google-ads-management',
    '/lp/lake-charles/web-design',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Industry vertical pages
  const industries = [
    'medical',
    'contractors',
    'dealerships',
    'retail',
    'realtors',
    'lawyers',
  ].map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Geo SEO pages
  const geoPages = [
    '/central-louisiana-web-design',
    '/marketing-alexandria',
    '/pineville-seo',
    '/ai-visibility-check',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Blog
  const blogPosts = [
    '/blog',
    '/blog/intro-to-geo',
    '/blog/common-ppc-mistakes',
    '/blog/local-seo-dominance',
    '/blog/ai-content-strategy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...coreRoutes, ...landingPages, ...industries, ...geoPages, ...blogPosts];
}
