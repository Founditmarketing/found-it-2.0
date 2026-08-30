import type { Metadata } from 'next';
import WhoClient from './client';

export const metadata: Metadata = {
  title: 'Who We Build For | Found It Software',
  description:
    'We don’t build for everyone. Owner-operated businesses, roughly $2M–$10M, sick of renting software. Restaurants, payroll, and trust accounting we turn down — and say so.',
  alternates: { canonical: '/who-we-build-for' },
  openGraph: {
    title: 'Who We Build For | Found It Software',
    description:
      'We don’t build for everyone. Who we take, who we turn down, and the 60-second fit check.',
    type: 'website',
    url: 'https://www.founditsoftware.com/who-we-build-for',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
};

export default function WhoWeBuildForPage() {
  return <WhoClient />;
}
