import type { Metadata } from 'next';
import WhoClient from './client';

export const metadata: Metadata = {
  title: 'For the Owner Everyone Still Has to Ask | Found It Software',
  description:
    'Where’s that order? Did they pay? What did we promise? If too much of the system is still you, we build the system around how you run — and you own it. Owner-run, roughly $1M–$20M.',
  alternates: { canonical: '/who-we-build-for' },
  openGraph: {
    title: 'For the Owner Everyone Still Has to Ask.',
    description:
      'Your business has grown. Too much of the system is still you. The 60-second fit check is the door.',
    type: 'website',
    url: 'https://www.founditsoftware.com/who-we-build-for',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
};

export default function WhoWeBuildForPage() {
  return <WhoClient />;
}
