/* ─── Google Ads conversion seam for the vertical LP campaigns ───
   The high-intent keyword LPs (/lp/auto-shop, /lp/dealership, /lp/roofing)
   need a per-campaign Ads conversion that can be wired WITHOUT a code change:
   set the env vars in Vercel and redeploy. Until then every call here is a
   silent no-op — no hardcoded tag IDs, nothing fires against the wrong
   account, and local/dev traffic never records conversions.

   NEXT_PUBLIC_GADS_ID          — the Ads tag, e.g. 'AW-XXXXXXXXXX'
   NEXT_PUBLIC_GADS_LEAD_LABEL  — optional conversion label; when set, send_to
                                  becomes 'AW-XXXXXXXXXX/LABEL' (event-snippet
                                  method, the reliable one). Without it the
                                  conversion pings the bare tag, which only
                                  records if the action is URL-rule based.

   Fired from trackLead() in lib/analytics.ts so every lead path on the site
   (native form submits on the LPs included) hits the same seam. Same
   discipline as the rest of the wiring: conversions fire on real lead
   submissions ONLY — never on clicks, views, or popups. */

const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || '';
const GADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GADS_LEAD_LABEL || '';

/** True when the campaign tag is configured (env var present at build time). */
export function gadsConfigured(): boolean {
  return Boolean(GADS_ID);
}

/**
 * Fire the campaign Lead conversion. No-ops unless NEXT_PUBLIC_GADS_ID is set
 * and gtag has loaded. `source` rides along as the event label so per-LP
 * attribution survives into Ads reporting (lp_auto_shop / lp_dealership /
 * lp_roofing / …).
 */
export function fireGadsLeadConversion(source: string) {
  if (!GADS_ID) return;
  if (typeof window === 'undefined' || !window.gtag) return;

  const sendTo = GADS_LEAD_LABEL ? `${GADS_ID}/${GADS_LEAD_LABEL}` : GADS_ID;
  window.gtag('event', 'conversion', {
    send_to: sendTo,
    event_label: source,
  });
}
