import { Metadata } from 'next';
import PricingClient from './client';

export const metadata: Metadata = {
  title: 'Pricing | Found It OS $3,000/mo, Setup Included',
  description: 'Found It OS: $3,000/month, setup included. Month-to-month, cancel with 30 days, and the code and the data are yours.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing | Found It OS $3,000/mo, Setup Included',
    description: 'Found It OS: $3,000/month, setup included. Month-to-month, cancel with 30 days, and the code and the data are yours.',
    type: 'website',
    url: 'https://www.founditsoftware.com/pricing',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
