import { Metadata } from 'next';
import AIVisibilityClient from './client';

export const metadata: Metadata = {
  title: 'AI Visibility Check | See Where AI Recommends You | Found It Marketing',
  description: 'Check if ChatGPT, Perplexity, and Google AI recommend your business. Free instant check.',
};

export default function AIVisibilityCheckPage() {
  return <AIVisibilityClient />;
}
