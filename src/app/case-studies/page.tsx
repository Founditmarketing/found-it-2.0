import { Metadata } from 'next';
import CaseStudiesPage from './client';

export const metadata: Metadata = {
  title: 'Case Studies | Real Results for Real Businesses | Found It Marketing',
  description: 'See what we did for businesses like yours. Real clients, real numbers, real results. Google Ads, SEO, web design, and AI search optimization.',
};

export default function Page() {
  return <CaseStudiesPage />;
}
