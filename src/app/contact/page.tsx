import { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'Contact | Call Trevor | Found It Marketing',
  description: 'Book a free 15-minute call or reach us directly. Alexandria, LA. No pitch, no commitment.',
};

export default function ContactPage() {
  return <ContactClient />;
}
