/* ─── Voice agent: client-safe constants ───
   Shared by the /api/voice/session route (server) and the hero widget
   (client). NO key material lives here — the OpenAI key never leaves
   src/app/api/voice/session/route.ts. */

/** Hard cap per demo call. The client timer ends the call at this mark; the
 *  session instructions tell her to start wrapping up 30s earlier. */
export const VOICE_SESSION_MAX_SECONDS = 180;

/** Where the browser posts its WebRTC SDP offer, authorized with the
 *  short-lived ephemeral token minted by /api/voice/session. */
export const REALTIME_CALLS_URL = 'https://api.openai.com/v1/realtime/calls';

/** Lead-source tag for voice-agent captures, segmented per LP. */
export function voiceLeadSource(pageSlug: string): string {
  return `voice_agent_${pageSlug.replace(/[^a-z0-9-]/gi, '').toLowerCase() || 'unknown'}`;
}
