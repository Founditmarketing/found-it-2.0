/* ─── Google Ads conversion seam for the vertical LP campaigns ───
   The exact-match campaigns need three Ads conversions that can be wired
   WITHOUT a code change: set the env vars in Vercel and redeploy. Until then
   every call here is a silent no-op — no hardcoded tag IDs, nothing fires
   against the wrong account, and local/dev traffic never records conversions.

   NEXT_PUBLIC_GADS_ID          — the Ads tag, e.g. 'AW-XXXXXXXXXX'
   NEXT_PUBLIC_GADS_LEAD_LABEL  — "Lead — Software Map" (LP/form submits)
   NEXT_PUBLIC_GADS_CALL_LABEL  — "Call click" (tel: taps on the site)
   NEXT_PUBLIC_GADS_VOICE_LABEL — "Voice lead" (voice agent capture_lead saves)

   send_to becomes 'AW-XXXXXXXXXX/LABEL' (event-snippet method, the reliable
   one). A missing label means that action simply never fires — labels are
   never shared across actions, so a partial paste can't cross-record.

   Fired from lib/analytics.ts so every path on the site hits the same seam.
   Same discipline as the rest of the wiring: conversions fire on real lead
   actions ONLY — never on views, popups, or engagement clicks. */

const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || '';
const GADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GADS_LEAD_LABEL || '';
const GADS_CALL_LABEL = process.env.NEXT_PUBLIC_GADS_CALL_LABEL || '';
const GADS_VOICE_LABEL = process.env.NEXT_PUBLIC_GADS_VOICE_LABEL || '';

/** True when the campaign tag is configured (env var present at build time). */
export function gadsConfigured(): boolean {
  return Boolean(GADS_ID);
}

/* Labels are per-action; firing without one would ping the bare tag and
   record nothing (or worse, an unintended URL-rule action) — so no label,
   no fire. */
function fireConversion(label: string, source?: string) {
  if (!GADS_ID || !label) return;
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'conversion', {
    send_to: `${GADS_ID}/${label}`,
    ...(source ? { event_label: source } : {}),
  });
}

/**
 * "Lead — Software Map": form submits across the site and LPs. `source` rides
 * along as the event label so per-LP attribution survives into Ads reporting
 * (lp_auto_shop / lp_dealership / lp_roofing / …).
 */
export function fireGadsLeadConversion(source: string) {
  fireConversion(GADS_LEAD_LABEL, source);
}

/** "Call click": someone tapped the phone number on the site. */
export function fireGadsCallConversion() {
  fireConversion(GADS_CALL_LABEL);
}

/** "Voice lead": the voice secretary's capture_lead saved a real lead. */
export function fireGadsVoiceConversion(source: string) {
  fireConversion(GADS_VOICE_LABEL, source);
}
