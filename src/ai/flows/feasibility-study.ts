'use server';
/**
 * @fileOverview An AI-powered tool to conduct a feasibility study on a business concept.
 *
 * - conductFeasibilityStudy - A function that generates a feasibility report for a given business idea.
 */
import { ai } from '@/ai/genkit';
import {
  FeasibilityStudyInputSchema,
  type FeasibilityStudyInput,
  FeasibilityStudyOutputSchema,
  type FeasibilityStudyOutput,
} from '@/ai/schemas/feasibility-study';
import { notifyFeasibilitySubmission } from '@/app/actions/forms';

export async function conductFeasibilityStudy(
  input: FeasibilityStudyInput
): Promise<FeasibilityStudyOutput> {
  return feasibilityStudyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'feasibilityStudyPrompt',
  input: { schema: FeasibilityStudyInputSchema },
  output: { schema: FeasibilityStudyOutputSchema },
  prompt: `
You are a senior business strategist and market analyst at a top-tier consulting firm. You are conducting a "Gemini Feasibility Study."
Your task is to provide a high-level, yet insightful, feasibility analysis for a new business concept based on the provided information.
Your analysis must be critical, commercially-minded, and realistic. Use business terminology appropriately.

Business Concept: {{{businessConcept}}}
Target Market: {{{targetMarket}}}
Unique Selling Proposition: {{{uniqueSellingProposition}}}

Your response must be a JSON object with the following structure:
- feasibilityScore: An integer from 0 to 100. A score below 50 is high-risk, 50-75 is moderately viable with notable challenges, and above 75 is strong. Your score must be directly justified in the executive summary.
- executiveSummary: A short, high-level paragraph summarizing the overall findings and your final verdict on the concept's viability. Start with the final verdict (e.g., "This concept is highly viable due to...") and then explain the reasoning, referencing the score.
- marketAnalysis: A concise analysis of the target market. Mention potential market size, key trends, and the competitive landscape. Identify the biggest competitive threat.
- potentialChallenges: Identify the 3 most significant potential challenges or risks. Be specific and strategic (e.g., "High Customer Acquisition Cost (CAC) due to the dominance of established players like X and Y, requiring a substantial marketing budget to gain traction.").
- strategicRecommendations: Provide 3 actionable, strategic recommendations as next steps. These should be high-level and prioritize validation and risk-mitigation (e.g., "Develop a Minimum Viable Product (MVP) to test the core value proposition with a small, targeted user group before committing to full-scale development.").
`,
});

const feasibilityStudyFlow = ai.defineFlow(
  {
    name: 'feasibilityStudyFlow',
    inputSchema: FeasibilityStudyInputSchema,
    outputSchema: FeasibilityStudyOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate feasibility study.');
    }

    // Notify John in background
    void notifyFeasibilitySubmission(input.businessConcept, output.feasibilityScore, output.executiveSummary).catch(err => {
      console.error('Background feasibility notification failed:', err);
    });

    return output;
  }
);
