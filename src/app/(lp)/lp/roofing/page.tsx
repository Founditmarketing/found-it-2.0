import type { Metadata } from 'next';
import { RoofingLPContent } from './content';

/* High-intent Google Ads LP — keyword theme: "roofing business software" /
   roofing CRM alternative. Message-matched to the one-ledger story: every
   job dollar tied to the penny; a real (anonymous) Louisiana roofing
   company's book audited to the cent surfaced ~$19k of bookkeeping errors.
   noindex on purpose: this page exists to convert paid clicks, not to rank. */
export const metadata: Metadata = {
  title: { absolute: 'Roofing Business Software That Ties Out To The Penny | Found It Software' },
  description:
    'One ledger for every roofing dollar — estimates, invoices, payments, and the book, tied job by job to the penny. Fitted to how your crews run, owned outright. It runs beside your current setup until you say go.',
  openGraph: {
    title: 'Roofing Business Software That Ties Out To The Penny | Found It Software',
    description:
      'One ledger for every roofing dollar — estimates, invoices, payments, and the book, tied job by job to the penny. Owned outright.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/roofing',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function RoofingLP() {
  return <RoofingLPContent />;
}
