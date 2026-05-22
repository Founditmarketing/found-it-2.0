'use server';
/**
 * @fileOverview An AI-powered marketing solution strategist.
 *
 * - getSolutionStrategy - A function that generates a custom marketing strategy.
 */

import { ai } from '@/ai/genkit';
import {
  SolutionStrategyInputSchema,
  type SolutionStrategyInput,
  SolutionStrategyOutputSchema,
  type SolutionStrategyOutput,
} from '@/ai/schemas/solution-strategist';

import { notifySolutionSubmission } from '@/app/actions/forms';

export async function getSolutionStrategy(
  input: SolutionStrategyInput
): Promise<SolutionStrategyOutput> {
  return solutionStrategyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'solutionStrategyPrompt',
  input: { schema: SolutionStrategyInputSchema },
  output: { schema: SolutionStrategyOutputSchema },
  prompt: `
You are an expert marketing strategist for a high-end digital agency called "found it.".
Your task is to generate a concise, high-level marketing strategy for a potential client based on the information they provide.
The tone should be professional, confident, and action-oriented.
Focus on 2-3 high-impact initiatives.
Do not use jargon without explaining it.
Base your recommendations on the provided business information.

Business Name: {{{businessName}}}
Website: {{{website}}}
Industry: {{{industry}}}
Annual Revenue: {{{revenue}}}
Target Audience: {{{targetAudience}}}
Primary Challenges: {{{challenges}}}

Generate an executive summary, 2-3 key initiatives with titles and descriptions, and recommended monthly budgets for Google Ads and Google Local Services Ads (if applicable).
Your budget recommendations must be directly influenced by the provided annual revenue, industry, and challenges.
For budgets, provide a reasonable range (e.g., "$1,000 - $2,500" for a smaller business, higher for a larger one) and a brief justification. If an ad platform is not a good fit (e.g., Local Services Ads for a national e-commerce brand), state "N/A" for the budget and explain why.
`,
});

const solutionStrategyFlow = ai.defineFlow(
  {
    name: 'solutionStrategyFlow',
    inputSchema: SolutionStrategyInputSchema,
    outputSchema: SolutionStrategyOutputSchema,
  },
  async (input) => {
    if (!process.env.GOOGLE_GENAI_API_KEY) {
      console.error('Critical Error: GOOGLE_GENAI_API_KEY is not set in environment variables.');
      throw new Error('Server usage error: API Key missing. Please set GOOGLE_GENAI_API_KEY in Vercel.');
    }

    try {
      const { output } = await prompt(input);
      if (!output) {
        throw new Error('Failed to generate a strategy.');
      }

      // Notify John in background
      void notifySolutionSubmission(input.businessName, input.industry, output.executiveSummary).catch(err => {
        console.error('Background strategy notification failed:', err);
      });

      return output;
    } catch (error: any) {
      console.error('Genkit Error:', error);
      throw new Error(`AI Strategy Generation Failed: ${error.message}`);
    }
  }
);
