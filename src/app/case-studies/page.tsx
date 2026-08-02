import { Metadata } from 'next';
import CaseStudiesPage from './client';

export const metadata: Metadata = {
  title: 'Case Studies | Real Results for Real Businesses',
  description: 'See what we did for businesses like yours. Real clients, real numbers, real results. Google Ads, SEO, web design, and AI search optimization.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | Real Results for Real Businesses',
    description: 'See what we did for businesses like yours. Real clients, real numbers, real results. Google Ads, SEO, web design, and AI search optimization.',
    type: 'website',
    url: 'https://founditmarketing.com/case-studies',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
