import type { Metadata } from 'next';
import { OneScreenLPContent } from './content';

/* Paid-social LP — hook test angle 2: simplicity ("one screen").
   noindex on purpose: this page exists to convert paid clicks, not to rank. */
export const metadata: Metadata = {
  title: { absolute: 'Your Whole Business On One Screen | Found It Software' },
  description:
    "Customers, estimates, jobs, invoices, payments, the books — one custom system built around how you run, and you own it. Get a free software map of your business; you keep the map either way.",
  openGraph: {
    title: 'Your Whole Business On One Screen | Found It Software',
    description:
      'One custom system — customers, estimates, jobs, invoices, the books. Built around how you run. Owned outright.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/one-screen',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function OneScreenLP() {
  return <OneScreenLPContent />;
}
