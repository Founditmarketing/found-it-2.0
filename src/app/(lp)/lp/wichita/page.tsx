import type { Metadata } from 'next';
import { WichitaLPContent } from './content';

/* Paid-traffic landing page for the Wichita, Kansas ad campaign — Tom's
   territory. noindex on purpose: this page exists to pay off the ads,
   not to rank. */
export const metadata: Metadata = {
  title: { absolute: "Wichita: We'll Come Walk Your Operation — Free | Found It Software" },
  description:
    'Book a free in-person walkthrough in Wichita. Tom comes to your shop and shows you what an AI business system you own outright would answer — from your own books.',
  openGraph: {
    title: "Wichita: We'll Come Walk Your Operation — Free | Found It Software",
    description:
      'Book a free in-person walkthrough in Wichita. Tom comes to your shop and shows you what an AI business system you own outright would answer — from your own books.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/wichita',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function WichitaLP() {
  return <WichitaLPContent />;
}
