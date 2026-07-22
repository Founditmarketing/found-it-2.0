import { Metadata } from 'next';
import PricingClient from './client';

export const metadata: Metadata = {
  title: 'Pricing | Flat Fees, Scoped Up Front',
  description: 'One flat fee per service, scoped up front in writing — Google Ads, web design, AI search, social media, apps, and AI automation. No hidden costs. No long-term contracts.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing | Flat Fees, Scoped Up Front',
    description: 'One flat fee per service, scoped up front in writing — Google Ads, web design, AI search, social media, apps, and AI automation. No hidden costs. No long-term contracts.',
    type: 'website',
    url: 'https://founditmarketing.com/pricing',
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
