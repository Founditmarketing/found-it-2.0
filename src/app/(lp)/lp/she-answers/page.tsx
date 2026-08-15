import type { Metadata } from 'next';
import { SheAnswersLPContent } from './content';

/* Paid-traffic landing page — "She Answers" campaign (missed-calls hook).
   noindex on purpose: exists to pay off the ad, not to rank. */
export const metadata: Metadata = {
  title: { absolute: 'Talk To Our AI Secretary — Live | Found It Software' },
  description:
    'Every missed call is a job that called somebody else. She answers, takes the message, and books your callback — talk to her live, then get a free software map of your business.',
  openGraph: {
    title: 'Talk To Our AI Secretary — Live | Found It Software',
    description:
      'Every missed call is a job that called somebody else. She answers, takes the message, and books your callback — talk to her live, then get a free software map of your business.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/she-answers',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function SheAnswersLP() {
  return <SheAnswersLPContent />;
}
