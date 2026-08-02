import { Metadata } from 'next';
import { OS_PRICING } from '@/lib/site';
import HomePage from './client';

export const metadata: Metadata = {
  title: 'Found It Marketing | Custom AI Software for Local Businesses',
  description: `Custom AI software that improves your life and saves you time — one system for your whole business, guaranteed: ${OS_PRICING.guarantee} ${OS_PRICING.monthly}/mo plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Plus Google Ads, web design, and AI search. Alexandria, Louisiana.`,
  openGraph: {
    title: 'Found It Marketing | Custom AI Software for Local Businesses',
    description: `Custom AI software that improves your life and saves you time. ${OS_PRICING.guarantee} ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}.`,
    type: 'website',
    url: 'https://founditmarketing.com',
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
