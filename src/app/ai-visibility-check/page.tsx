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
    url: 'https://founditmarketing.com/ai-visibility-check',
  },
};

export default function AIVisibilityCheckPage() {
  return <AIVisibilityClient />;
}
