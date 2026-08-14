import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { blogPosts } from '@/lib/blog-posts';
import { industries } from './industries/[slug]/data';

type ChangeFreq = MetadataRoute.Sitemap[number]['changeFrequency'];

const abs = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`;

/** Static routes with intent-weighted priority.
    ONLY indexable, self-canonical pages belong here. Excluded on purpose:
    - redirect routes (/seo /ppc /web-development /websites /marketing
      /comprehensive-marketing /solutions /platform /feasibility-study
      /free-proposal) — a sitemap of redirects is Search Console noise
    - /lp/* paid landing pages that canonicalize to a service pillar page
      (ai-marketing, ai-search-seo, app-development, google-ads-management,
      social-media-management, web-design) — indexing the pillar is enough.
      The /lp/* pages below are NOT duplicates: they canonicalize to
      themselves and have no organic-pillar counterpart, so they need their
      own sitemap entries to be discoverable. */
const staticRoutes: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },

  // Core informational pages
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/team', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/case-studies', priority: 0.8, changeFrequency: 'monthly' },

  // Service authority pillars (organic / GEO) — primary public service pages
  { path: '/foundit-os', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/custom-software', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/custom-software/auto-repair-shops', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/custom-software/shed-builders', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/custom-software/car-dealerships', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/custom-software/contractors', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/custom-software/retail-stores', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/custom-software/home-builders', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/google-ads-management', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/web-design', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ai-search-optimization', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/social-media-management', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/app-development', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ai-marketing', priority: 0.9, changeFrequency: 'weekly' },

  // Local / geo pages
  { path: '/marketing-alexandria', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/central-louisiana-web-design', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/pineville-seo', priority: 0.6, changeFrequency: 'monthly' },

  // Self-canonical /lp/* pages with no organic-pillar counterpart
  { path: '/lp/lake-charles/google-ads-management', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/lp/lake-charles/web-design', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/lp/local-marketing-la-trimetro', priority: 0.6, changeFrequency: 'monthly' },

  // Tools / lead magnets
  { path: '/ai-visibility-check', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/guide', priority: 0.6, changeFrequency: 'monthly' },

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
