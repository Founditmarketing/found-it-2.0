import { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'Contact | Call Trevor',
  description: 'Call Trevor directly or send a message — he calls back, usually within 2 hours. Alexandria, LA.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Call Trevor',
    description: 'Call Trevor directly or send a message — he calls back, usually within 2 hours. Alexandria, LA.',
    type: 'website',
    url: 'https://www.founditsoftware.com/contact',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
