import { NextResponse } from 'next/server';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText, generateObject } from 'ai';
import { z } from 'zod';
import { rateLimit, clientIp } from '@/lib/server/guards';

export const runtime = 'nodejs';
export const maxDuration = 60;

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY || '',
});
const MODEL = 'gemini-2.5-flash';

const inputSchema = z.object({
  businessName: z.string().min(2).max(120),
  city: z.string().min(2).max(80),
  industry: z.string().min(2).max(80),
  hp: z.string().max(200).optional(),
});

/** Widget industry labels → how a real consumer would phrase it. */
const INDUSTRY_NOUNS: Record<string, string> = {
  legal: 'law firm',
  medical: 'medical practice',
  'home services': 'home services company',
  retail: 'retail store',
  restaurant: 'restaurant',
  'b2b services': 'B2B service provider',
  other: 'local business',
};

function buildQueries(industry: string, city: string): string[] {
  const noun = INDUSTRY_NOUNS[industry.toLowerCase()] || industry;
  return [
    `What's the best ${noun} in ${city}?`,
    `Who do you recommend if I need a ${noun} in ${city}?`,
    `I'm looking for a reliable ${noun} near ${city}. Who should I contact?`,
  ];
}

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

export async function POST(req: Request) {
  try {
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return NextResponse.json({ error: 'AI check is temporarily unavailable.' }, { status: 503 });
    }
    if (!rateLimit(`ai-vis:${clientIp(req)}`, 3, 5 * 60_000)) {
      return NextResponse.json({ error: 'Too many checks from this connection. Try again in a few minutes.' }, { status: 429 });
    }

    const parsed = inputSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }
    const { businessName, city, industry, hp } = parsed.data;
    if (hp) return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });

    const questions = buildQueries(industry, city);

    // Ask the model each question the way a real consumer would — these are
    // genuine, un-steered recommendation queries.
    const answers = await Promise.all(
      questions.map(async (q) => {
        const { text } = await generateText({
          model: google(MODEL),
          system:
            'You are a general-purpose AI assistant answering a consumer question. Recommend specific, real businesses by name when you know them. If you do not know specific businesses, say so honestly. Keep the answer under 120 words.',
          prompt: q,
          temperature: 0.4,
        });
        return text;
      })
    );

    // One structured pass to determine mentions + extract every business named.
    const extraction = await generateObject({
      model: google(MODEL),
      schema: z.object({
        results: z.array(
          z.object({
            queryIndex: z.number(),
            targetMentioned: z.boolean(),
            businessesNamed: z.array(z.string()).max(6),
          })
        ),
      }),
      prompt: `Target business: "${businessName}"

Below are ${questions.length} Q&A pairs from an AI assistant. For each pair, report:
- targetMentioned: true if the answer refers to the target business (count close variants of the name as a match)
- businessesNamed: every distinct real business name mentioned in the answer (not the target's industry or city, only business names)

${questions.map((q, i) => `--- Pair ${i} ---\nQ: ${q}\nA: ${answers[i]}`).join('\n\n')}`,
      temperature: 0,
    });

    const targetNorm = normalize(businessName);
    const queries = questions.map((question, i) => {
      const ext = extraction.object.results.find((r) => r.queryIndex === i);
      // Backstop: direct string match catches cases the extraction pass misses.
      const directHit = targetNorm.length > 3 && normalize(answers[i]).includes(targetNorm);
      const mentioned = Boolean(ext?.targetMentioned) || directHit;
      const businesses = (ext?.businessesNamed || [])
        .filter((b) => normalize(b) !== targetNorm)
        .slice(0, 4);
      return {
        question,
        mentioned,
        businesses,
        excerpt: answers[i].slice(0, 220),
      };
    });

    const competitors = Array.from(
      new Set(queries.flatMap((q) => q.businesses))
    ).slice(0, 6);

    return NextResponse.json({
      businessName,
      city,
      queries,
      competitors,
      mentionedCount: queries.filter((q) => q.mentioned).length,
      total: queries.length,
    });
  } catch (err) {
    console.error('[ai-visibility] check failed:', err);
    return NextResponse.json({ error: 'The AI check failed. Try again in a moment.' }, { status: 500 });
  }
}
