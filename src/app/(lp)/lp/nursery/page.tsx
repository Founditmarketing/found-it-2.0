import type { Metadata } from 'next';
import { NurseryLPContent } from './content';

/* Paid-traffic landing page — wholesale-nursery campaign (9/7). One audience,
   one familiar moment (the parse demo plays first), one next step. noindex on
   purpose. OG card is the published 44-plants hook. */
export const metadata: Metadata = {
  title: { absolute: 'The Order Arrives By Text | Found It Software' },
  description:
    'Watch a nursery’s system turn a messy broker order into a checked crew pull sheet — every line lands, or holds in red. One system built around your nursery, and you own it: the code and the data.',
  openGraph: {
    title: 'The Order Arrives By Text | Found It Software',
    description:
      'Watch a nursery’s system turn a messy broker order into a checked crew pull sheet — every line lands, or holds in red. One system built around your nursery, and you own it.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/nursery',
    images: [{ url: '/images/blog/nursery-og-hook-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function NurseryLP() {
  return <NurseryLPContent />;
}
