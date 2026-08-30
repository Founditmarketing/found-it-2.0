import { Metadata } from 'next';
import AIVisibilityClient from './client';

export const metadata: Metadata = {
  title: 'AI Visibility Check | See Where AI Recommends You',
  description: 'Check if ChatGPT, Perplexity, and Google AI recommend your business. Free instant check.',
  alternates: { canonical: '/ai-visibility-check' },
  openGraph: {
    title: 'AI Visibility Check | See Where AI Recommends You',
    description: 'Check if ChatGPT, Perplexity, and Google AI recommend your business. Free instant check.',
    type: 'website',
    url: 'https://www.founditsoftware.com/ai-visibility-check',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
};

export default function AIVisibilityCheckPage() {
  return <AIVisibilityClient />;
}
