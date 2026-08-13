import type { Metadata } from 'next';
import { WalkthroughLPContent } from './content';

/* Paid-traffic landing page for the Found It OS VSL ads (Batch 2).
   noindex on purpose: this page exists to pay off the ad's closing line
   ("tap below and we'll come walk your operation free"), not to rank. */
export const metadata: Metadata = {
  title: { absolute: 'Who Owes You Money Right Now? | Found It Software' },
  description:
    "Could your current software answer that in five seconds? Get a free software map: 30 minutes on Zoom, we map the one system we'd build around your business. You keep the map either way.",
  openGraph: {
    title: 'Who Owes You Money Right Now? | Found It Software',
    description:
      "Could your current software answer that in five seconds? Get a free software map: 30 minutes on Zoom, we map the one system we'd build around your business. You keep the map either way.",
    type: 'website',
    url: 'https://founditsoftware.com/lp/walkthrough',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function WalkthroughLP() {
  return <WalkthroughLPContent />;
}
