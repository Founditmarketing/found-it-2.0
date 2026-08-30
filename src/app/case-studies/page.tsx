import { Metadata } from 'next';
import CaseStudiesPage from './client';

export const metadata: Metadata = {
  title: 'Case Studies | The Systems We Built, The Businesses That Own Them',
  description:
    'Real business operating systems for real local companies — auto shops, roofers, dealers, retailers, contractors. Every one owns the code and the data. Plus the marketing record that started it all.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | The Systems We Built, The Businesses That Own Them',
    description:
      'Real business operating systems for real local companies — and every one owns the code and the data.',
    type: 'website',
    url: 'https://www.founditsoftware.com/case-studies',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
