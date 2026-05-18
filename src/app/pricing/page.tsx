import { Metadata } from 'next';
import PricingClient from './client';

export const metadata: Metadata = {
  title: 'Pricing | Transparent, No-Contract Plans | Found It Marketing',
  description: 'Flat-fee pricing for Google Ads management, web design, SEO, and social media. No hidden costs. No long-term contracts. See what you pay for.',
};

export default function PricingPage() {
  return <PricingClient />;
}
