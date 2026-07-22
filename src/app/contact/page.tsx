import { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'Contact | Call Trevor',
  description: 'Call Trevor directly or send a message — he calls back, usually within 2 hours. Alexandria, LA. No pitch, no commitment.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Call Trevor',
    description: 'Call Trevor directly or send a message — he calls back, usually within 2 hours. Alexandria, LA. No pitch, no commitment.',
    type: 'website',
    url: 'https://founditmarketing.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
