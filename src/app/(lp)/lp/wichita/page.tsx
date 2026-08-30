import type { Metadata } from 'next';
import { WichitaLPContent } from './content';

/* Paid-traffic landing page for the Wichita, Kansas ad campaign — Tom's
   territory. noindex on purpose: this page exists to pay off the ads,
   not to rank. */
export const metadata: Metadata = {
  title: { absolute: 'Who Owes You Money Right Now? — Wichita | Found It Software' },
  description:
    "Could your current software answer that in five seconds? Free thirty-minute call, screen-shared with Tom, our man in Wichita. We show you what we'd build if it were ours.",
  openGraph: {
    title: 'Who Owes You Money Right Now? — Wichita | Found It Software',
    description:
      "Could your current software answer that in five seconds? Free thirty-minute call, screen-shared with Tom, our man in Wichita. We show you what we'd build if it were ours.",
    type: 'website',
    url: 'https://founditsoftware.com/lp/wichita',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function WichitaLP() {
  return <WichitaLPContent />;
}
