import type { Metadata } from 'next';
import { MarketingResultsClient } from './client';

/* THE MARKETING YEARS (8/29 review): the record moved OUT of /case-studies
   so the software proof page tells one story. This page is deliberately
   framed as history — it proves 13 years inside local businesses, which is
   why the software knows how a business actually runs. Found It takes no
   new marketing clients; never add a marketing CTA here. */

export const metadata: Metadata = {
  title: 'The Marketing Record',
  description:
    "Thirteen years of marketing results for Louisiana businesses — ads, SEO, Maps, websites. The record stands, and it's history: Found It no longer takes new marketing clients. Today we build the software.",
  alternates: { canonical: '/marketing/results' },
};

export default function MarketingResultsPage() {
  return <MarketingResultsClient />;
}
