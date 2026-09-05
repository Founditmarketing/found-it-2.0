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
      (ai-marketing, ai-search-seo, app-development [retired 9/5], google-ads-management,
      social-media-management, web-design) — indexing the pillar is enough.
      The /lp/* pages below are NOT duplicates: they canonicalize to
      themselves and have no organic-pillar counterpart, so they need their
      own sitemap entries to be discoverable. */
const staticRoutes: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },

  // Core informational pages
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/who-we-build-for', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/fit', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/seminar', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/case-studies', priority: 0.8, changeFrequency: 'monthly' },

  // The Owned Software category pages (defined 8/28/2026 — the citation targets)
  { path: '/owned-software', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/owned-software-vs-saas', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/drive', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/vs-grok', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/vs-viktor', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/owned-software-test', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/it-just-works', priority: 0.8, changeFrequency: 'weekly' },

  // The Record — before/after case files (evidence page, 8/29/2026)
  { path: '/before-after', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/the-record', priority: 0.8, changeFrequency: 'weekly' },

  // Service authority pillars (organic / GEO) — primary public service pages
  { path: '/foundit-os', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/custom-software', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/custom-software/auto-repair-shops', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/custom-software/shed-builders', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/custom-software/car-dealerships', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/custom-software/contractors', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/custom-software/retail-stores', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/custom-software/home-builders', priority: 0.85, changeFrequency: 'weekly' },
  // MARKETING SALES DEAD (8/26): google-ads-management, web-design,
  // social-media-management, ai-marketing, marketing-alexandria,
  // central-louisiana-web-design, pineville-seo, and the marketing /lp/*
  // pages are now permanent redirects — removed from the sitemap.

  // Tools / lead magnets
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
