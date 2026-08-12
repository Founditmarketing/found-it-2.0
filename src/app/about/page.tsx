import { Metadata } from 'next';
import AboutPage from './client';

export const metadata: Metadata = {
  title: 'About Found It Marketing | Custom AI Software & Marketing, 13+ Years',
  description: 'Custom AI software and digital marketing company in Alexandria, LA. Builders of Found It OS, plus Google Ads, web design, SEO, and AI search. 13+ years. No contracts.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Found It Marketing | Custom AI Software & Marketing, 13+ Years',
    description: 'Custom AI software and digital marketing company in Alexandria, LA. Builders of Found It OS, plus Google Ads, web design, SEO, and AI search. 13+ years. No contracts.',
    type: 'website',
    url: 'https://www.founditsoftware.com/about',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <AboutPage />;
}
