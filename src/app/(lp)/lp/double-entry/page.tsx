import type { Metadata } from 'next';
import { DoubleEntryLPContent } from './content';

/* Paid-traffic landing page — "Double-Entry Tax" campaign (labor-waste hook).
   noindex on purpose: exists to pay off the ad, not to rank. */
export const metadata: Metadata = {
  title: { absolute: 'Stop Paying The Double-Entry Tax | Found It Software' },
  description:
    'Typing the same job into three apps is a tax. One custom system enters it once — customers, estimates, jobs, invoices, the books — and you own it. See what yours would look like, free.',
  openGraph: {
    title: 'Stop Paying The Double-Entry Tax | Found It Software',
    description:
      'Typing the same job into three apps is a tax. One custom system enters it once — customers, estimates, jobs, invoices, the books — and you own it. See what yours would look like, free.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/double-entry',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function DoubleEntryLP() {
  return <DoubleEntryLPContent />;
}
