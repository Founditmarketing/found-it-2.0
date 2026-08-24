import type { Metadata } from 'next';
import { CanItLPContent } from './content';

/* Paid-social LP — hook test angle 3: the challenge ("can your software
   do this?"). noindex on purpose: converts paid clicks, doesn't rank. */
export const metadata: Metadata = {
  title: { absolute: 'Can Your Software Do This? | Found It Software' },
  description:
    'Who owes you money right now — names and amounts, in five seconds, from your own books. One custom system built around how you run, and you own it. See what yours would look like. Free, about thirty minutes, screen-shared.',
  openGraph: {
    title: 'Can Your Software Do This? | Found It Software',
    description:
      'One custom system — customers, jobs, estimates, invoices, the books. Built around how you run. Owned outright.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/can-it',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function CanItLP() {
  return <CanItLPContent />;
}
