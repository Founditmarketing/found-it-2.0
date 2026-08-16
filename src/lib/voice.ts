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

/* ─── Mic sensitivity: one profile per room, chosen at call start ───
   Field history (8/13–8/14): volume-based VAD was unfixable in real rooms
   (threshold 0.5 heard ghosts, 0.85 went deaf) → semantic VAD. But one
   global tuning then failed BOTH ways on 8/14 — eagerness:low +
   interrupt_response:false read as "the mic's not working" in a quiet
   advisor sit-down, because talking over her produced zero reaction.
   So sensitivity is now per-situation, not per-site:

   - default  — the ad visitor on their own phone/laptop, mic near their
     mouth. near_field scrubbing, balanced turn-taking.
   - noisy    — a sales room: laptop across the table, HVAC, crowd. The
     8/13 round-3 tuning, kept verbatim: far_field scrubbing, low eagerness
     (she waits for you to actually finish). Presenters opt in with
     ?room=noisy on any LP URL.

   interrupt_response is FALSE in BOTH profiles — field-tested twice.
   8/16: with barge-in on, her own voice through laptop speakers leaked
   into the mic, VAD read it as the visitor, and she cut herself off
   mid-sentence. She always finishes; the widget's "She hears you — let
   her finish" state covers the am-I-being-heard feedback that barge-in
   was meant to provide. Never re-enable interruption.

   The widget reads the URL param and POSTs the profile name; the session
   route validates it against these keys. Change tunings HERE only. */
export const VOICE_PROFILES = {
  default: {
    noise_reduction: { type: 'near_field' },
    turn_detection: {
      type: 'semantic_vad',
      eagerness: 'auto',
      interrupt_response: false,
    },
  },
  noisy: {
    noise_reduction: { type: 'far_field' },
    turn_detection: {
      type: 'semantic_vad',
      eagerness: 'low',
      interrupt_response: false,
    },
  },
} as const;

export type VoiceProfileName = keyof typeof VOICE_PROFILES;

/** URL param a presenter adds to any LP to pick the room profile,
 *  e.g. /lp/walkthrough?room=noisy */
export const VOICE_PROFILE_PARAM = 'room';

/** Reads the profile off the current page URL. Client-side only. */
export function voiceProfileFromLocation(): VoiceProfileName {
  if (typeof window === 'undefined') return 'default';
  const v = new URLSearchParams(window.location.search).get(VOICE_PROFILE_PARAM);
  return v && v in VOICE_PROFILES ? (v as VoiceProfileName) : 'default';
}

/* ─── Slow-network guardrails (8/14: a nursery demo died silently on rural
   wifi). The widget must always end up SOMEWHERE visible. ─── */

/** Connecting longer than this → the UI says so ("slow network…"). */
export const VOICE_CONNECT_SLOW_MS = 4_000;

/** Connecting longer than this → give up, drop to the text-chat fallback. */
export const VOICE_CONNECT_TIMEOUT_MS = 15_000;

/** A live call sitting in WebRTC 'disconnected' this long → treat as dropped. */
export const VOICE_DROP_GRACE_MS = 4_000;

/** Lead-source tag for voice-agent captures, segmented per LP. */
export function voiceLeadSource(pageSlug: string): string {
  return `voice_agent_${pageSlug.replace(/[^a-z0-9-]/gi, '').toLowerCase() || 'unknown'}`;
}
