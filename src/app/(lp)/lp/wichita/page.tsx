import type { Metadata } from 'next';
import { WichitaLPContent } from './content';

/* Paid-traffic landing page for the Wichita, Kansas ad campaign — Tom's
   territory. noindex on purpose: this page exists to pay off the ads,
   not to rank. */
export const metadata: Metadata = {
  title: { absolute: 'Who Owes You Money Right Now? — Wichita | Found It Software' },
  description:
    "Could your current software answer that in five seconds? Get a free software map: 30 minutes screen-shared with Tom, our man in Wichita. You keep the map either way.",
  openGraph: {
    title: 'Who Owes You Money Right Now? — Wichita | Found It Software',
    description:
      "Could your current software answer that in five seconds? Get a free software map: 30 minutes screen-shared with Tom, our man in Wichita. You keep the map either way.",
    type: 'website',
    url: 'https://founditsoftware.com/lp/wichita',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function WichitaLP() {
  return <WichitaLPContent />;
}
