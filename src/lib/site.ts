/* ─── Single Source of Truth: Business Identity ───
   Centralizes NAP, founder, socials, services, and entity @id constants so the
   structured-data knowledge graph, metadata, llms.txt, and sitemap all stay
   consistent. Consistency of these facts is what AI/answer engines reward. */

import { phoneTel } from './phone';

export const SITE_URL = 'https://www.founditsoftware.com';

/** Stable @id anchors for the entity knowledge graph (one node per concept). */
export const ENTITY_IDS = {
  organization: `${SITE_URL}/#organization`,
  localBusiness: `${SITE_URL}/#localbusiness`,
  website: `${SITE_URL}/#website`,
  founder: `${SITE_URL}/#trevor-ruby`,
  logo: `${SITE_URL}/#logo`,
} as const;

export const BUSINESS = {
  name: 'Found It Marketing',
  legalName: 'Found It Marketing LLC',
  tagline: 'Custom software your business owns.',
  description:
    'Custom AI software and digital marketing company in Alexandria, Louisiana. Builds Found It OS — custom business operating systems that improve lives and save time, owned outright by the client — plus Google Ads management, conversion-focused web design, SEO, and Generative Engine Optimization (GEO) for local businesses. No long-term contracts; clients own their accounts, code, and data.',
  url: SITE_URL,
  logo: `${SITE_URL}/og-image-v3.png`,
  image: `${SITE_URL}/og-image-v3.png`,
  email: 'trevor@founditmarketing.com',
  /** Secondary inbox kept for reference / contactPoint coverage. */
  altEmail: 'john@founditmarketing.com',
  telephone: `+1${phoneTel}`,
  priceRange: '$$$',
  foundingYear: '2013',
  address: {
    streetAddress: '3803 Rue Left Bank',
    addressLocality: 'Alexandria',
    addressRegion: 'LA',
    postalCode: '71303',
    addressCountry: 'US',
  },
  geo: {
    latitude: 31.2829,
    longitude: -92.4812,
  },
} as const;

export const FOUNDER = {
  name: 'Trevor Ruby',
  jobTitle: 'Founder',
} as const;

/* ─── Track record / credibility ───
   Canonical, reusable proof points. Keep these as the single source of truth so
   stats stay consistent across pages (inconsistent numbers lower entity trust).
   Phrased conservatively from confirmed facts; sharpen with exact figures. */
/* RESTRAINT LAW (Trevor, 2026-08-14): magnitude words and aggregate claims are
   RETIRED. Deleted here and everywhere they rendered: adSpendManaged
   ('Millions'), socialAccountsManaged ('Hundreds'), statesServed ('48'),
   STATES_CLAIM, and REVENUE_CLAIM ('$2.3B+' — never confirmed; its own TODO
   admitted as much, and it shipped with a methodology footnote underneath,
   which is what a number nobody believes looks like).
   The rule: one figure a stranger can check outranks a billion he cannot.
   Never reintroduce an unverifiable aggregate. What stays below is countable. */
export const TRACK_RECORD = {
  yearsInBusiness: '13+',
  /* softwareCustomers RETIRED 8/16 (Trevor: "why only 12 — better just to not
     say how many"). A small specific count invites the comparison it loses;
     copy says "local businesses across Louisiana" with no number. Never
     reintroduce a customer count anywhere — site, ads, or AI scripts. */
  googleRating: '4.9',
} as const;

/* ─── Lead qualification: the revenue bands ───
   Trevor 8/15: keep unqualified businesses out of the funnel. Mechanism is
   ASK, don't block — the form takes every lead, tags it with a band, and
   only QUALIFIED bands fire the Lead conversion to Meta/Google, so the ad
   algorithms learn to find bigger businesses. Unqualified leads still land
   in the inbox (marked) for a polite pass. Move the line by flipping the
   `qualified` booleans — one place, every form follows. */
export const REVENUE_BANDS = [
  { label: 'Under $250k / yr', qualified: false },
  { label: '$250k – $1M / yr', qualified: true },
  { label: '$1M – $5M / yr', qualified: true },
  { label: '$5M+ / yr', qualified: true },
] as const;

/* ─── The software map's published price ───
   Trevor 8/14: the map is a FIRST-PARTY $2,000 engagement on its own —
   price-is-public doctrine applied to the map itself. This is a real,
   honorable offer: if someone hands us $2,000 for just the map, we deliver
   just the map. It comes free when a fitting starts, which is how the ad
   funnel gives it away without cheapening it.
   RESTRAINT LAW: say it ONCE per page, as plain fact, at the point of the
   ask — never as a "$2,000 VALUE!" starburst. */
export const MAP_VALUE = {
  standalone: '$2,000',
  /** The one sentence, reused verbatim so the number can never drift. */
  line: 'on its own, the map is a $2,000 engagement',
} as const;

/* ─── Found It OS pricing + promise ───
   The ONLY service with a public sticker price, set by Trevor 2026-07-30.
   Single source of truth — homepage, /foundit-os, /pricing all render from
   here so the number can never drift. public/llms.txt is static: update it
   by hand if these change.
   DOCTRINE CHANGE (Trevor, 2026-08-14): the money-back guarantee is RETIRED.
   Never reintroduce "love it or your money back" or any refund promise
   anywhere on the site or in the AI scripts. The risk reversal that remains
   true: month-to-month, cancel anytime, the client keeps the code and the
   data. The offer's spine is the promise below. */
export const OS_PRICING = {
  monthly: '$2,200',
  monthlyLabel: 'per month',
  setup: '$2,000',
  setupLabel: 'one-time migration & setup',
  /** What the system is FOR — the offer's one-line spine, verbatim. */
  promise: 'Simplify your life. Make your business more profitable.',
} as const;

/* ─── Config-gated links ───
   Each renders on the site only when non-empty. Paste the real URL to enable. */
export const LINKS = {
  /** Calendly/booking URL — enables "pick a time" embeds on /contact and /thank-you. */
  bookingCalendar: '',
  /** Google Business Profile review link — makes the star rating clickable/verifiable. */
  googleBusinessProfile: '',
} as const;

/* ─── Award / recognition ───
   Update the exact award name, issuer, and year when confirmed (specifics make
   it more credible to people and to AI/answer engines). */
export const AWARD = {
  /** Short label for badges/chips. */
  label: 'CLEDA Highest Traded Revenue',
  /** Full award name for schema.org `award`. */
  full: 'Highest Traded Revenue Award',
  /** Issuing organization. */
  issuer: 'Central Louisiana Economic Development Alliance (CLEDA)',
  year: '2026',
} as const;

/** Social / authoritative profiles — used for sameAs entity reconciliation. */
export const SAME_AS = [
  'https://www.facebook.com/founditmarketing',
  'https://www.instagram.com/founditmarketing',
  'https://www.linkedin.com/company/founditmarketing',
  'https://twitter.com/founditagency',
  'https://www.youtube.com/@founditmarketing',
] as const;

/** Topics the brand is an authority on — strengthens entity understanding for LLMs. */
export const KNOWS_ABOUT = [
  'Custom AI Software',
  'Business Operating Systems',
  'Custom Software Development',
  'Google Ads Management',
  'Pay-Per-Click Advertising (PPC)',
  'Search Engine Optimization (SEO)',
  'Generative Engine Optimization (GEO)',
  'AI Search Optimization',
  'Local SEO',
  'Conversion Rate Optimization',
  'Web Design and Development',
  'Social Media Management',
  'Marketing Automation',
] as const;

export interface ServiceArea {
  type: 'City' | 'AdministrativeArea' | 'State';
  name: string;
  sameAs?: string;
}

export const AREA_SERVED: ServiceArea[] = [
  { type: 'City', name: 'Alexandria', sameAs: 'https://en.wikipedia.org/wiki/Alexandria,_Louisiana' },
  { type: 'City', name: 'Pineville', sameAs: 'https://en.wikipedia.org/wiki/Pineville,_Louisiana' },
  { type: 'City', name: 'Lake Charles', sameAs: 'https://en.wikipedia.org/wiki/Lake_Charles,_Louisiana' },
  { type: 'AdministrativeArea', name: 'Central Louisiana', sameAs: 'https://en.wikipedia.org/wiki/Central_Louisiana' },
  { type: 'State', name: 'Louisiana', sameAs: 'https://en.wikipedia.org/wiki/Louisiana' },
  { type: 'State', name: 'Mississippi' },
  { type: 'State', name: 'Texas' },
  { type: 'State', name: 'Arkansas' },
];

/** Short slug-keyed labels for nav/footer service lists (fall back to ServiceDef.name). */
export const SERVICE_SHORT_LABELS: Record<string, string> = {
  'foundit-os': 'Found It OS',
  'google-ads-management': 'Google Ads',
  'web-design': 'Web Design',
  'ai-search-optimization': 'AI Search / SEO',
  'social-media-management': 'Social Media',
  'app-development': 'App Development',
  'ai-marketing': 'AI Marketing',
};

export interface ServiceDef {
  name: string;
  slug: string;
  serviceType: string;
  description: string;
}

/** Canonical service catalog — referenced by Service schema + sitemap + llms.txt. */
export const SERVICES: ServiceDef[] = [
  {
    name: 'Found It OS — Custom Business Operating Systems',
    slug: 'foundit-os',
    serviceType: 'Custom Business Operating System',
    description:
      'Custom operating systems built one business at a time — point of sale, inventory, customers, website, and a built-in AI in a single system clients own outright. Fitted in weeks with zero-downtime, penny-matched migration.',
  },
  {
    name: 'Google Ads Management',
    slug: 'google-ads-management',
    serviceType: 'PPC Management',
    description:
      'Google Ads management for local service businesses with weekly optimization, real conversion tracking, and transparent reporting. No contracts.',
  },
  {
    name: 'Web Design & Development',
    slug: 'web-design',
    serviceType: 'Web Design',
    description:
      'Custom, conversion-focused websites built on Next.js — fast, mobile-first, and engineered to turn visitors into calls. Clients own the code.',
  },
  {
    name: 'AI Search Optimization (GEO)',
    slug: 'ai-search-optimization',
    serviceType: 'Generative Engine Optimization',
    description:
      'Generative Engine Optimization to get your business recommended by ChatGPT, Perplexity, and Google AI Overviews through entity authority and structured data.',
  },
  {
    name: 'Social Media Management',
    slug: 'social-media-management',
    serviceType: 'Social Media Marketing',
    description:
      'Done-for-you social media content and strategy. We create it, you approve it — real content that builds authority and drives leads.',
  },
  {
    name: 'Custom App Development',
    slug: 'app-development',
    serviceType: 'Mobile App Development',
    description:
      'Native-feeling iOS and Android app development with in-person blueprinting and fixed-price timelines. Clients own 100% of the codebase.',
  },
  {
    name: 'AI Marketing Automation',
    slug: 'ai-marketing',
    serviceType: 'Marketing Automation',
    description:
      'Custom AI systems for lead generation, instant follow-up, and automated appointment setting with AI voice and text agents.',
  },
];
