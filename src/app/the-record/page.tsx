import type { Metadata } from 'next';
import TheRecordClient from './client';

export const metadata: Metadata = {
  title: 'The Record — Nightly Reconciliation, Published Live',
  description:
    'Every Found It system reconciles its own books nightly: billed against collected and outstanding, to the cent. The results are written to a ledger and published here. No number entered by hand.',
  alternates: { canonical: '/the-record' },
  openGraph: {
    title: 'The Record | Found It Software',
    description:
      'Nightly reconciliation results, read live from each system’s own ledger. No number entered by hand.',
    type: 'website',
    url: 'https://www.founditsoftware.com/the-record',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
};

export default function TheRecordPage() {
  return <TheRecordClient />;
}
