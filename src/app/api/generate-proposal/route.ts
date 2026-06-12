import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import { NextResponse } from 'next/server';
import { googleAiApiKey } from '@/lib/server/ai-key';

const google = createGoogleGenerativeAI({
    apiKey: googleAiApiKey,
});

export async function POST(req: Request) {
    try {
        console.log('--- Proposal Generation Started ---');
        const body = await req.json();
        const { name, email, website } = body;
        console.log('Request parameters:', { name, email, website });

        if (!name || !email || !website) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, or website' },
                { status: 400 }
            );
        }

        if (!googleAiApiKey) {
            console.error('CRITICAL: Google AI API key is missing');
            return NextResponse.json(
                { error: 'Server configuration error: missing API key' },
                { status: 500 }
            );
        }

        console.log('Calling AI SDK with Gemini 2.5 Flash...');
        const { text } = await generateText({
            model: google('gemini-2.5-flash'),
            system: `You are an elite marketing strategist at "Found It Marketing", an agency led by Trevor Ruby. 
      Your goal is to provide a comprehensive, high-converting marketing proposal based on a business's website.
      
      BE PROFESSIONAL, BOLD, AND EMPIRICAL. Use "we" to refer to the agency.
      
      IMPORTANT: Use **double asterisks** to wrap key terms, metrics, and critical insights that you want to emphasize. These will be highlighted in the UI.
      
      Respond in Markdown format with the following structure:
      # Executive Summary
      (Analyze the provided website URL: ${website}. Identify the industry, target audience, and current digital state. Be brief but insightful.)
      
      # 3-Step Implementation Plan
      (Provide a clear, actionable 3-step plan to scale their digital empire.)
      1. [Step Name] - [Description]
      2. [Step Name] - [Description]
      3. [Step Name] - [Description]
      
      # Pricing & Strategy Tiers
      (Provide three pricing tiers with clear value propositions.)
      
      ### Tier 1: Starter - Building the Foundation
      * **Focus**: [Short description]
      * **Investment**: $1,500 / month
      
      ### Tier 2: Growth - Scaling the Empire
      * **Focus**: [Short description]
      * **Investment**: $3,500 / month
      
      ### Tier 3: Dominance - Market Supremacy
      * **Focus**: [Short description]
      * **Investment**: $7,500 / month
      
      End with a strong call to action to speak with Trevor or the strategy team.`,
            prompt: `Lead Name: ${name}
      Lead Email: ${email}
      Business Website: ${website}
      
      Please generate a custom marketing proposal for this business.`,
        });

        console.log('Proposal generated successfully.');
        return NextResponse.json({ proposal: text });
    } catch (error: any) {
        console.error('Proposal generation error DETAILS:', error);
        return NextResponse.json(
            { error: `Generation failed: ${error.message || 'Unknown error'}` },
            { status: 500 }
        );
    }
}
