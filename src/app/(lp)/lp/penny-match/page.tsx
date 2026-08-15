import type { Metadata } from 'next';
import { PennyMatchLPContent } from './content';

/* Paid-traffic landing page — "Penny-Matched" campaign (trust hook,
   retargeting-first). noindex on purpose: exists to pay off the ad. */
export const metadata: Metadata = {
  title: { absolute: 'Penny-Matched Every Night | Found It Software' },
  description:
    "We don't ask you to trust us. Your new system runs beside your current software, matched to the penny every night, until you say go. Free software map of your business.",
  openGraph: {
    title: 'Penny-Matched Every Night | Found It Software',
    description:
      "We don't ask you to trust us. Your new system runs beside your current software, matched to the penny every night, until you say go. Free software map of your business.",
    type: 'website',
    url: 'https://founditsoftware.com/lp/penny-match',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function PennyMatchLP() {
  return <PennyMatchLPContent />;
}
