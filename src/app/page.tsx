import { Metadata } from 'next';
import { OS_PRICING } from '@/lib/site';
import HomePage from './client';

export const metadata: Metadata = {
  title: 'Found It Software | Custom Software That Simplifies Your Business and Makes You Money',
  description: `One custom system that does the typing, chases what you're owed, and answers your phone. Simpler life. More money. You own it. ${OS_PRICING.monthly}/mo plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Alexandria, Louisiana.`,
  openGraph: {
    title: 'Found It Software | Simpler Business. More Money. You Own It.',
    description: `One custom system that does the typing, chases what you're owed, and answers your phone. Simpler life. More money. You own it. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month-to-month.`,
    type: 'website',
    url: 'https://www.founditsoftware.com',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
