/* ─── LP Conversion Tracking & UTM Helpers ─── */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || '';
const GADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID || '';

/* ─── Core Fire ─── */
function fire(eventName: string, params?: Record<string, any>) {
  if (typeof window === 'undefined') return;
  if (window.gtag) {
    window.gtag('event', eventName, { ...(GA4_ID ? { send_to: GA4_ID } : {}), ...params });
  }
  if (window.gtag && GADS_CONVERSION_ID) {
    window.gtag('event', 'conversion', { send_to: GADS_CONVERSION_ID, event_category: eventName, ...params });
  }
}

/* ─── Event Helpers ─── */
export function trackLead(source: string) {
  fire('lead_submit', { event_category: 'conversion', event_label: source, value: 1 });
}

export function trackCallClick() {
  fire('call_click', { event_category: 'engagement', event_label: 'phone_call' });
}

export function trackCalendlyOpen() {
  fire('calendly_open', { event_category: 'engagement', event_label: 'calendly_embed' });
}

export function trackExitIntent() {
  fire('exit_intent_capture', { event_category: 'conversion', event_label: 'exit_intent' });
}

export function trackCTAClick(ctaName: string) {
  fire('cta_click', { event_category: 'engagement', event_label: ctaName });
}

export function trackAuditRequest(source: string) {
  fire('audit_request', { event_category: 'conversion', event_label: source, value: 1 });
}

export function trackStickyCTAClick() {
  fire('sticky_cta_click', { event_category: 'engagement', event_label: 'mobile_sticky_bar' });
}

/* ─── UTM Persistence ─── */
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const UTM_STORAGE_KEY = 'fi_utm_params';

/** Call once on page load to stash UTMs from the URL into sessionStorage. */
export function captureUTMs() {
  if (typeof window === 'undefined') return;
  try {
    // Only capture on first load (don't overwrite if already stored)
    if (sessionStorage.getItem(UTM_STORAGE_KEY)) return;
    const url = new URL(window.location.href);
    const utms: Record<string, string> = {};
    let found = false;
    for (const key of UTM_KEYS) {
      const val = url.searchParams.get(key);
      if (val) { utms[key] = val; found = true; }
    }
    if (found) sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utms));
  } catch { /* sessionStorage blocked */ }
}

/** Retrieve stored UTMs as URLSearchParams-ready object. */
export function getStoredUTMs(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

/* ─── Form Source URL Builder ─── */
/**
 * Build the LeadConnector iframe src with source attribution + UTMs.
 * @param baseSrc - e.g. 'https://api.leadconnectorhq.com/widget/form/FXyD279qmIC0yUDrZfYz'
 * @param source  - e.g. 'lp_google_ads'
 * @param page    - e.g. 'google-ads-management'
 */
export function buildFormSrc(baseSrc: string, source: string, page: string): string {
  const url = new URL(baseSrc);
  url.searchParams.set('source', source);
  url.searchParams.set('page', page);
  const utms = getStoredUTMs();
  for (const [k, v] of Object.entries(utms)) {
    url.searchParams.set(k, v);
  }
  return url.toString();
}

/* ─── LeadConnector postMessage Listener ─── */
/**
 * Attach to window in a useEffect. Listens for form submission events from
 * the LeadConnector iframe and fires GA4 + GAds conversion events.
 */
export function createFormSubmitListener(source: string) {
  return function handleMessage(e: MessageEvent) {
    // Accept messages from LeadConnector domains
    const allowedOrigins = ['https://api.leadconnectorhq.com', 'https://link.msgsndr.com'];
    if (!allowedOrigins.some(o => (e.origin || '').startsWith(o))) return;

    const data = typeof e.data === 'string' ? e.data : JSON.stringify(e.data || '');
    const isSubmit = data.includes('form-submit') || data.includes('form-success')
      || data.includes('form_submitted') || data.includes('formSubmitted');

    if (isSubmit) {
      trackLead(source);
      // Log for debugging
      if (typeof console !== 'undefined') {
        console.log(`[Found It] Lead conversion fired — source: ${source}`);
      }
    }
  };
}
