import type { Metadata } from 'next';
import TheRecordClient from './client';

export const metadata: Metadata = {
  title: 'The Record — Systems That Publish Their Own Receipts',
  description:
    'Every Found It system checks its own books nightly and keeps the score in public: nights matched to the penny, money processed, discrepancies found. No number typed by a person. Static case studies age. A streak grows.',
  alternates: { canonical: '/the-record' },
  openGraph: {
    title: 'The Record | Found It Software',
    description:
      'Systems that publish their own receipts: nightly penny-match streaks, live from the client’s own database. No number typed by a person.',
    type: 'website',
    url: 'https://www.founditsoftware.com/the-record',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
};

export default function TheRecordPage() {
  return <TheRecordClient />;
}
