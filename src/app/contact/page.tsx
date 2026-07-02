import { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'Contact | Call Trevor',
  description: 'Call Trevor directly or send a message — he calls back, usually within 2 hours. Alexandria, LA. No pitch, no commitment.',
};

export default function ContactPage() {
  return <ContactClient />;
}
