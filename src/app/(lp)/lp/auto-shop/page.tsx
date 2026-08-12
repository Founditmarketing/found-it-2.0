import type { Metadata } from 'next';
import { AutoShopLPContent } from './content';

/* High-intent Google Ads LP — keyword theme: "auto repair shop software" /
   shop management system replacement. Message-matched to shop owners tired
   of per-seat SaaS fees and rented data. noindex on purpose: this page
   exists to convert paid clicks, not to rank. */
export const metadata: Metadata = {
  title: { absolute: 'Auto Repair Shop Software You Own Outright | Found It Software' },
  description:
    'Repair orders, parts, payments, and the books — one shop management system fitted to how you run, owned outright. No per-seat fees. It runs beside your current software, penny-matched, until you say go.',
  openGraph: {
    title: 'Auto Repair Shop Software You Own Outright | Found It Software',
    description:
      'Repair orders, parts, payments, and the books — one shop management system fitted to how you run, owned outright. No per-seat fees.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/auto-shop',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function AutoShopLP() {
  return <AutoShopLPContent />;
}
