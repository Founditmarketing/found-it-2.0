/* ─── Structured Data Helpers ─── */
/* Reusable JSON-LD builders. All business entities share one @id-linked
   knowledge graph so AI/answer engines resolve a single, authoritative entity. */

import {
  SITE_URL,
  ENTITY_IDS,
  BUSINESS,
  FOUNDER,
  SAME_AS,
  KNOWS_ABOUT,
  AREA_SERVED,
  SERVICES,
  AWARD,
  type ServiceArea,
} from './site';

export interface FAQItemData {
  question: string;
  answer: string;
}

/** Map our area-served config to schema.org node shapes. */
function areaServedNodes(areas: ServiceArea[] = AREA_SERVED) {
  return areas.map((a) => ({
    '@type': a.type,
    name: a.name,
    ...(a.sameAs ? { sameAs: a.sameAs } : {}),
  }));
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: BUSINESS.address.streetAddress,
  addressLocality: BUSINESS.address.addressLocality,
  addressRegion: BUSINESS.address.addressRegion,
  postalCode: BUSINESS.address.postalCode,
  addressCountry: BUSINESS.address.addressCountry,
};

/**
 * The site-wide entity knowledge graph: Organization + LocalBusiness + WebSite
 * + founder Person, all cross-referenced by @id. Render ONCE, site-wide.
 * @see https://schema.org/Organization
 */
export function buildEntityGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ENTITY_IDS.organization,
        name: BUSINESS.name,
        legalName: BUSINESS.legalName,
        url: SITE_URL,
        description: BUSINESS.description,
        slogan: BUSINESS.tagline,
        foundingDate: BUSINESS.foundingYear,
        email: BUSINESS.email,
        telephone: BUSINESS.telephone,
        logo: {
          '@type': 'ImageObject',
          '@id': ENTITY_IDS.logo,
          url: BUSINESS.logo,
          width: 1200,
          height: 630,
        },
        image: { '@id': ENTITY_IDS.logo },
        founder: { '@id': ENTITY_IDS.founder },
        address: postalAddress,
        areaServed: areaServedNodes(),
        knowsAbout: [...KNOWS_ABOUT],
        award: `${AWARD.full} — ${AWARD.issuer}, ${AWARD.year}`,
        sameAs: [...SAME_AS],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: BUSINESS.telephone,
            email: BUSINESS.email,
            contactType: 'sales',
            areaServed: 'US',
            availableLanguage: 'English',
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': ENTITY_IDS.localBusiness,
        name: BUSINESS.name,
        image: { '@id': ENTITY_IDS.logo },
        url: SITE_URL,
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        priceRange: BUSINESS.priceRange,
        description: BUSINESS.description,
        parentOrganization: { '@id': ENTITY_IDS.organization },
        address: postalAddress,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        areaServed: areaServedNodes(),
        sameAs: [...SAME_AS],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Custom AI Software Services',
          itemListElement: SERVICES.map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.name,
              serviceType: s.serviceType,
              url: `${SITE_URL}/${s.slug}`,
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': ENTITY_IDS.website,
        url: SITE_URL,
        name: BUSINESS.name,
        description: BUSINESS.description,
        publisher: { '@id': ENTITY_IDS.organization },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Person',
        '@id': ENTITY_IDS.founder,
        name: FOUNDER.name,
        jobTitle: FOUNDER.jobTitle,
        worksFor: { '@id': ENTITY_IDS.organization },
        url: `${SITE_URL}/team`,
      },
    ],
  };
}

/**
 * Build a valid FAQPage JSON-LD object from an array of Q&A items.
 * @see https://schema.org/FAQPage
 */
export function buildFAQSchema(items: FAQItemData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/** A machine-readable price line for a Service node (only Found It OS has one). */
export interface ServiceOffer {
  /** Numeric price, e.g. 3000 (derived from OS_PRICING, never hand-typed). */
  price: number;
  priceCurrency: string;
  /** UN/CEFACT unit code, e.g. 'MON' for per-month. Omit for one-time fees. */
  unitCode?: string;
  /** Label for the line item, e.g. OS_PRICING.setupLabel. */
  name?: string;
}

/**
 * Build a Service node linked to the shared Organization entity via @id.
 * @see https://schema.org/Service
 */
export function buildServiceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: ServiceArea[];
  image?: string;
  offers?: ServiceOffer[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType || opts.name,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
    provider: { '@id': ENTITY_IDS.organization },
    areaServed: areaServedNodes(opts.areaServed),
    ...(opts.image ? { image: opts.image } : {}),
    ...(opts.offers?.length
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: opts.offers[0].priceCurrency,
            availability: 'https://schema.org/InStock',
            priceSpecification: opts.offers.map((o) => ({
              '@type': 'UnitPriceSpecification',
              price: o.price,
              priceCurrency: o.priceCurrency,
              ...(o.unitCode ? { unitCode: o.unitCode } : {}),
              ...(o.name ? { name: o.name } : {}),
            })),
          },
        }
      : {}),
  };
}

/**
 * Build a LocalBusiness JSON-LD object that references the shared entity graph.
 * Retained for per-page use on landing pages.
 */
export function buildLocalBusinessSchema(overrides?: {
  description?: string;
  priceRange?: string;
  areaServed?: ServiceArea[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ENTITY_IDS.localBusiness,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    parentOrganization: { '@id': ENTITY_IDS.organization },
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    description: overrides?.description || BUSINESS.description,
    priceRange: overrides?.priceRange || BUSINESS.priceRange,
    areaServed: areaServedNodes(overrides?.areaServed),
    sameAs: [...SAME_AS],
  };
}

/**
 * Build a BreadcrumbList from an ordered list of { name, url } crumbs.
 * @see https://schema.org/BreadcrumbList
 */
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Build a BlogPosting node linked to the Organization publisher + founder author.
 * @see https://schema.org/BlogPosting
 */
export function buildArticleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  const absoluteUrl = opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`;
  const absoluteImage = opts.image.startsWith('http') ? opts.image : `${SITE_URL}${opts.image}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    image: absoluteImage,
    url: absoluteUrl,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: {
      '@type': 'Person',
      name: opts.authorName,
      url: `${SITE_URL}/team`,
    },
    publisher: { '@id': ENTITY_IDS.organization },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl,
    },
    isPartOf: { '@id': ENTITY_IDS.website },
  };
}
