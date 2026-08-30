import { Metadata } from 'next';
import AboutPage from './client';

export const metadata: Metadata = {
  // Absolute: opts out of the layout's retired-brand title template.
  title: { absolute: 'About | Found It Software' },
  description: 'The story and the team. Custom AI software company in Alexandria, LA — builders of Found It OS, systems local businesses own outright. 13+ years. Month-to-month, no long-term commitment.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Found It Software',
    description: 'The story and the team. Custom AI software company in Alexandria, LA — builders of Found It OS, systems local businesses own outright. 13+ years. No contracts.',
    type: 'website',
    url: 'https://www.founditsoftware.com/about',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <AboutPage />;
}
