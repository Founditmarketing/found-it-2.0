import { Metadata } from 'next';
import HomePage from './client';

export const metadata: Metadata = {
  title: 'Found It Marketing | More Customers for Local Businesses',
  description:
    'Google Ads, web design, SEO, and AI search optimization for local businesses. No contracts. Free audit. Based in Alexandria, Louisiana.',
  openGraph: {
    title: 'Found It Marketing | More Customers for Local Businesses',
    description: 'Google Ads, web design, SEO, and AI search optimization. No contracts. Free audit.',
    type: 'website',
    url: 'https://founditmarketing.com',
  },
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
