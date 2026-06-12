import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { blogPosts } from '@/lib/blog-posts';
import { industries } from './industries/[slug]/data';

type ChangeFreq = MetadataRoute.Sitemap[number]['changeFrequency'];

const abs = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`;

/** Static routes with intent-weighted priority. Excludes noindex/redirect pages. */
const staticRoutes: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },

  // AdWords landing pages (paid traffic; canonical to the public service pages)
  { path: '/lp/google-ads-management', priority: 0.4, changeFrequency: 'weekly' },
  { path: '/lp/web-design', priority: 0.4, changeFrequency: 'weekly' },
  { path: '/lp/ai-search-seo', priority: 0.4, changeFrequency: 'weekly' },
  { path: '/lp/social-media-management', priority: 0.4, changeFrequency: 'weekly' },
  { path: '/lp/app-development', priority: 0.4, changeFrequency: 'weekly' },
  { path: '/lp/ai-marketing', priority: 0.4, changeFrequency: 'weekly' },
  { path: '/lp/lake-charles/google-ads-management', priority: 0.5, changeFrequency: 'weekly' },
  { path: '/lp/lake-charles/web-design', priority: 0.5, changeFrequency: 'weekly' },
  { path: '/lp/local-marketing-la-trimetro', priority: 0.5, changeFrequency: 'weekly' },

  // Core informational pages
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/team', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/case-studies', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/solutions', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/platform', priority: 0.7, changeFrequency: 'monthly' },

  // Service authority pillars (organic / GEO) — primary public service pages
  { path: '/google-ads-management', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/web-design', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ai-search-optimization', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/social-media-management', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/app-development', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ai-marketing', priority: 0.9, changeFrequency: 'weekly' },

  // Service / topic hubs
  { path: '/seo', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/ppc', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/web-development', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/marketing', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/comprehensive-marketing', priority: 0.6, changeFrequency: 'monthly' },

  // Local / geo pages
  { path: '/marketing-alexandria', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/central-louisiana-web-design', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/pineville-seo', priority: 0.6, changeFrequency: 'monthly' },

  // Tools / lead magnets
  { path: '/ai-visibility-check', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/feasibility-study', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/free-proposal', priority: 0.5, changeFrequency: 'monthly' },

  // Blog index
  { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },

  // Legal
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: abs(r.path),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: abs(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const industryEntries: MetadataRoute.Sitemap = Object.keys(industries).map((slug) => ({
    url: abs(`/industries/${slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries, ...industryEntries];
}
