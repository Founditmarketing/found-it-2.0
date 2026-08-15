import { Metadata } from 'next';
import PricingClient from './client';

export const metadata: Metadata = {
  title: 'Pricing | Found It OS $2,200/mo + $2,000 Migration & Setup',
  description: 'Found It OS has its price printed: $2,200/month plus a one-time $2,000 migration & setup — built to simplify your life and make your business more profitable. Marketing services are flat fees, scoped up front in writing. No hidden costs. No long-term contracts.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing | Found It OS $2,200/mo + $2,000 Migration & Setup',
    description: 'Found It OS has its price printed: $2,200/month plus a one-time $2,000 migration & setup — built to simplify your life and make your business more profitable. Marketing services are flat fees, scoped up front in writing. No hidden costs. No long-term contracts.',
    type: 'website',
    url: 'https://www.founditsoftware.com/pricing',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
