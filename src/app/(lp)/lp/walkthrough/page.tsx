import type { Metadata } from 'next';
import { WalkthroughLPContent } from './content';

/* Paid-traffic landing page for the Found It OS VSL ads (Batch 2).
   noindex on purpose: this page exists to pay off the ad's closing line
   ("tap below and we'll come walk your operation free"), not to rank. */
export const metadata: Metadata = {
  title: { absolute: "We'll Come Walk Your Operation — Free | Found It Software" },
  description:
    'Book a free in-person walkthrough. We come to your shop and show you what an AI business system you own outright would answer — from your own books.',
  openGraph: {
    title: "We'll Come Walk Your Operation — Free | Found It Software",
    description:
      'Book a free in-person walkthrough. We come to your shop and show you what an AI business system you own outright would answer — from your own books.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/walkthrough',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function WalkthroughLP() {
  return <WalkthroughLPContent />;
}
