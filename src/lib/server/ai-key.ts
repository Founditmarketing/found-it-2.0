/* Single source for the Google AI API key. Vercel projects in this team have
   historically used different names for the same key, so accept any of them. */
export const googleAiApiKey =
  process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
  process.env.GEMINI_API_KEY ||
  process.env.GOOGLE_GENAI_API_KEY ||
  '';
