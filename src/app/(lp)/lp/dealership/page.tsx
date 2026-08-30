import type { Metadata } from 'next';
import { DealershipLPContent } from './content';

/* High-intent Google Ads LP — keyword theme: "dealership management software"
   for equipment / outdoor power / trailer dealers. Message-matched to the
   margin-governor story: costs load automatically, every part reprices at
   your margin, the counter cannot sell below cost. noindex on purpose:
   this page exists to convert paid clicks, not to rank. */
export const metadata: Metadata = {
  title: { absolute: 'Dealership Management Software That Guards Your Margin | Found It Software' },
  description:
    'For equipment, outdoor power, and trailer dealers: distributor price files load automatically, every part reprices at your margin, and the counter cannot sell below cost. One system, fitted to your dealership, owned outright.',
  openGraph: {
    title: 'Dealership Management Software That Guards Your Margin | Found It Software',
    description:
      'Distributor price files load automatically, every part reprices at your margin, and the counter cannot sell below cost. One system you own outright.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/dealership',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function DealershipLP() {
  return <DealershipLPContent />;
}
