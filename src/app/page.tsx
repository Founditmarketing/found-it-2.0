import { Metadata } from 'next';
import { OS_PRICING } from '@/lib/site';
import HomePage from './client';

export const metadata: Metadata = {
  title: 'Found It Software | Custom AI Software for Local Businesses',
  description: `Custom AI software — one system for your whole business, built to simplify the owner's life and make the business more profitable. ${OS_PRICING.monthly}/mo plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Plus Google Ads, web design, and AI search. Alexandria, Louisiana.`,
  openGraph: {
    title: 'Found It Software | Custom AI Software for Local Businesses',
    description: `Custom AI software built to simplify the owner's life and make the business more profitable. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month-to-month.`,
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
