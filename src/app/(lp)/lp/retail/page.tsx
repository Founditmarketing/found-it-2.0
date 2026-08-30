import type { Metadata } from 'next';
import { RetailLPContent } from './content';

/* Paid-traffic landing page — "Retail & Stores" campaign (year-over-year
   hook). Also the follow-up page for in-store demos. noindex on purpose. */
export const metadata: Metadata = {
  title: { absolute: 'Your Store, Answered By 8am | Found It Software' },
  description:
    'Sales, sizes, low stock, reorders — one custom system built around your store, and you own it: the code and the data. See what yours would look like, free.',
  openGraph: {
    title: 'Your Store, Answered By 8am | Found It Software',
    description:
      'Sales, sizes, low stock, reorders — one custom system built around your store, and you own it: the code and the data. See what yours would look like, free.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/retail',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function RetailLP() {
  return <RetailLPContent />;
}
