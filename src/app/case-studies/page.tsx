import { Metadata } from 'next';
import CaseStudiesPage from './client';

export const metadata: Metadata = {
  title: 'Case Studies | The Files, With Statuses On',
  description:
    'Custom operating systems for local companies — an owner on camera, receipts with the pennies on, and an honest status on every file: live, or running beside the old system. A screenshot is not a case study.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | The Files, With Statuses On',
    description:
      'An owner on camera, receipts with the pennies on, and an honest status on every file: live, or running beside the old system.',
    type: 'website',
    url: 'https://www.founditsoftware.com/case-studies',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
