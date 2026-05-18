import { Metadata } from 'next';
import HormoziHome from './client';

export const metadata: Metadata = {
  title: 'Found It Marketing | More Customers for Local Businesses',
  description: 'Google Ads, web design, SEO, and AI search optimization for local businesses. No contracts. Free audit. Based in Louisiana, serving 48 states.',
};

export default function Page() {
  return <HormoziHome />;
}
