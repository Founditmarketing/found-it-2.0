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
  // Public brand (8/18 audit full-send). The LLC's legal name is unchanged —
  // legalName feeds legal/schema contexts only.
  name: 'Found It Software',
  legalName: 'Found It Marketing LLC',
  tagline: 'Custom software your business owns.',
  description:
    'Custom AI software company in Alexandria, Louisiana. Builds Found It OS — custom business operating systems, owned outright by the client, built to simplify the owner’s life and make the business more profitable — plus custom app development. No long-term contracts; clients own their accounts, code, and data.',
  url: SITE_URL,
  logo: `${SITE_URL}/og-image-v4.png`,
  image: `${SITE_URL}/og-image-v4.png`,
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

/* ─── Founding accounts counter ───
   The first twenty accounts signed at $2,200 and are grandfathered forever.
   `taken` is the ONE number to update as founding spots fill. Retire the
   whole graphic once taken === total. */
export const FOUNDING = {
  taken: 14,
  total: 20,
  /** The founding rate, for life — said in one plain sentence wherever it
   *  renders (8/27 review: "don't make me calculate what you mean"). */
  price: '$2,200',
} as const;

/* RETIRED (Trevor 9/4): the map is OFF the site - page deleted, every CTA
   re-pointed at /lp/walkthrough, explainer post removed. Nothing renders
   this; never bring the map framing back. */
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
/* PRICE CHANGE (Trevor, 2026-08-22): list price raised to $3,000/mo. The first
   twenty accounts were founding accounts at $2,200 — every signed customer is
   grandfathered forever; the founding line on /pricing tells that truth. Setup
   stays $2,000 on purpose (the first check stays small; the monthly carries the
   lift). Discounts need a NAME (founding / reference shop / slow-season) and
   come off SETUP, never the monthly. */
export const OS_PRICING = {
  monthly: '$3,000',
  monthlyLabel: 'per month',
  setup: '$2,000',
  setupLabel: 'one-time migration & setup',
  /** What the system is FOR — the offer's one-line spine, verbatim. */
  promise: 'Simplify your life. Make your business more profitable.',
} as const;

/* ─── The twenty seats (Trevor, 2026-08-25) ───
   His words: "14/20 slots spoken for — after 20 accounts we are not taking
   any more." A hard cap, not a marketing timer: at twenty accounts the door
   closes. Bump `taken` BY HAND when an account signs — nothing derives it,
   and an inflated number here is a lie on the pricing block. */
export const OS_SLOTS = {
  total: 20,
  taken: 14,
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
/* MARKETING SALES DEAD (Trevor, 2026-08-26; completed 2026-09-04): zero new
   marketing accounts, ever forward — and as of 9/4 that includes AI Search
   Optimization. No marketing service of any kind is for sale to new clients.
   Google Ads, web design as a service, social media, AI lead response, and AI
   Search were all removed from SERVICES, nav, footer, pricing, sitemap,
   llms.txt, and the AI scripts. Never reintroduce them as offers. KNOWS_ABOUT
   below is knowledge/entity authority, not an offer list — it may keep SEO/GEO
   as topics. */
export const KNOWS_ABOUT = [
  'Custom AI Software',
  'Business Operating Systems',
  'Custom Software Development',
  'Search Engine Optimization (SEO)',
  'Generative Engine Optimization (GEO)',
  'AI Search Optimization',
  'Local SEO',
  'Web Design and Development',
] as const;

export interface ServiceArea {
  type: 'City' | 'AdministrativeArea' | 'State';
  name: string;
  sameAs?: string;
}

/* CENLA ONLY FOR NOW (Trevor 9/4): the served area is Central Louisiana.
   Lake Charles and the multi-state entries came out; remote work stays
   available everywhere but is not an areaServed claim. Widen this list only
   when Trevor says the map grew. */
export const AREA_SERVED: ServiceArea[] = [
  { type: 'City', name: 'Alexandria', sameAs: 'https://en.wikipedia.org/wiki/Alexandria,_Louisiana' },
  { type: 'City', name: 'Pineville', sameAs: 'https://en.wikipedia.org/wiki/Pineville,_Louisiana' },
  { type: 'AdministrativeArea', name: 'Central Louisiana', sameAs: 'https://en.wikipedia.org/wiki/Central_Louisiana' },
];

/** Short slug-keyed labels for nav/footer service lists (fall back to ServiceDef.name). */
export const SERVICE_SHORT_LABELS: Record<string, string> = {
  'foundit-os': 'Found It OS',
};

/* ─── AI Search Optimization pricing — RETIRED AS AN OFFER (Trevor, 9/4) ───
   No new AI SEO or marketing clients, period. Kept only as the rate existing
   accounts are billed at; nothing on the site renders this. Never re-list. */
export const AISEO_PRICING = {
  standard: '$1,500',
  premium: '$3,200',
  premiumLabel: 'premium / large market',
  label: 'per month',
} as const;

export interface ServiceDef {
  name: string;
  slug: string;
  serviceType: string;
  description: string;
}

/** Canonical service catalog — referenced by Service schema + sitemap + llms.txt.
    MARKETING SALES DEAD (8/26): Google Ads, Web Design, Social Media, and AI
    Lead Response were removed as offers. AI SEARCH RETIRED TOO (Trevor, 9/4):
    zero marketing services of any kind for new clients — AI Search
    Optimization came off the catalog, nav, footer, pricing, sitemap, schema,
    llms.txt, and the AI scripts. Existing accounts are serviced; nothing is
    sold. Software is the whole catalog. Never re-add a marketing service. */
export const SERVICES: ServiceDef[] = [
  {
    name: 'Found It OS — Custom Business Operating Systems',
    slug: 'foundit-os',
    serviceType: 'Custom Business Operating System',
    description:
      'Custom operating systems built one business at a time — point of sale, inventory, customers, website, and a built-in AI in a single system clients own outright. Fitted in weeks with zero-downtime, penny-matched migration.',
  },
  /* CUSTOM APP DEVELOPMENT RETIRED (Trevor 9/5: "we dont do this take this
     off") — page deleted, permanent redirect to /foundit-os, footer column
     collapses on its own. The OS is the whole catalog. Never re-add. */
];
