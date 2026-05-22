'use server';
/**
 * @fileOverview An AI-powered tool to simulate an AI visibility check for a given URL.
 *
 * - checkAIVisibility - A function that returns a simulated analysis of a website's visibility to AI models.
 */

import { ai } from '@/ai/genkit';
import {
  AIVisibilityInputSchema,
  type AIVisibilityInput,
  AIVisibilityOutputSchema,
  type AIVisibilityOutput,
} from '@/ai/schemas/ai-visibility-check';
import { notifyAISubmission } from '@/app/actions/forms';

export async function checkAIVisibility(
  input: AIVisibilityInput
): Promise<AIVisibilityOutput> {
  return aiVisibilityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiVisibilityPrompt',
  model: 'googleai/gemini-1.5-flash',
  input: { schema: AIVisibilityInputSchema },
  output: { schema: AIVisibilityOutputSchema },
  prompt: `
You are an expert analyst in Generative Engine Optimization (GEO).
You will be given a website URL. You cannot access the URL directly.
Based *only* on the domain name and path, make an educated guess about the industry and purpose of the website.

Then, perform a high-level, simulated analysis of how well-structured the site might be for AI answer engines.
Your analysis should be plausible and provide genuine insight based on GEO principles.
Focus on factors like potential for structured data (Schema.org), content authority signals, and entity recognition.

Your response MUST be in a JSON object format.

- **score**: An integer from 0 to 100 representing the "AI Visibility Score." A higher score means the site is likely better prepared for AI search. Base this on how specific and niche the URL is (more specific is better) and if it suggests a business with clear expertise.
- **summary**: A short (2-3 sentences) summary of your findings. Explain the reasoning for your score.
- **recommendation**: Provide one single, high-impact, actionable recommendation for improvement related to GEO.

URL to analyze: {{{url}}}
`,
});

// Set max execution time to 60 seconds (Commented out as invalid in Server Action file)
// export const maxDuration = 60;

const aiVisibilityFlow = ai.defineFlow(
  {
    name: 'aiVisibilityFlow',
    inputSchema: AIVisibilityInputSchema,
    outputSchema: AIVisibilityOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await prompt(input);
      if (!output) {
        throw new Error('AI generated empty output');
      }

      // Notify John of the lead in the background
      // Use void to not block the return and ignore errors in notification
      void notifyAISubmission(input.url, output.score, output.summary).catch(err => {
        console.error('Background AI notification failed:', err);
      });

      return output;
    } catch (error: any) {
      console.error('AI Flow Error:', error);
      throw new Error(`AI Analysis Failed: ${error.message}`);
    }
  }
);
