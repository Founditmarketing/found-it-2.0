'use server';
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { googleAiApiKey } from '@/lib/server/ai-key';

// This file configures the Genkit instance for use in server-side flows.

export const ai = genkit({
  plugins: [
    googleAI({ apiKey: googleAiApiKey }),
  ],
});
