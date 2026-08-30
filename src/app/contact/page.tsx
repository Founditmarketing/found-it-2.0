import { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'Contact | Found It Software',
  description: 'Leave your number — Trevor calls you back. Alexandria, LA.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Found It Software',
    description: 'Leave your number — Trevor calls you back. Alexandria, LA.',
    type: 'website',
    url: 'https://www.founditsoftware.com/contact',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
