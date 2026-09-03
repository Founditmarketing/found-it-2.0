import { Metadata } from 'next';
import AboutPage from './client';

export const metadata: Metadata = {
  // Absolute: opts out of the layout's retired-brand title template.
  title: { absolute: 'About | Found It Software' },
  description: 'The company with the walls off: who has the keyboard, what is true right now, the rules we paid for, and the button that makes Found It disappear while your system keeps running. Alexandria, Louisiana.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Found It Software',
    description: 'Who has the keyboard, what is true right now, the rules we paid for — and the button that makes Found It disappear while your system keeps running.',
    type: 'website',
    url: 'https://www.founditsoftware.com/about',
    images: [{ url: '/images/about-og-v1.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <AboutPage />;
}
