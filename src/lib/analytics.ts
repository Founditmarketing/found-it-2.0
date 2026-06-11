/* ─── LP Conversion Tracking & UTM Helpers ─── */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || '';
const GADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID || '';

/**
 * Full `send_to` for the Google Ads "Form Submit - Thank You Page" conversion
 * action, e.g. 'AW-17848789749/XXXXXXXXXXXXXXXXXXXX'.
 *
 * Paste the conversion label from Google Ads here (or set the env var). The
 * thank-you page only fires the conversion when this is set, so a missing/wrong
 * value never records to the wrong action.
 */
const GADS_THANKYOU_SEND_TO = process.env.NEXT_PUBLIC_GADS_THANKYOU_SEND_TO || '';

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
  
  // Google Ads specific conversion: Lead Form Submit
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17848789749/j48-CMiG0K4cEPXV-75C',
      'value': 800.0,
      'currency': 'USD'
    });
  }
}

/**
 * Thank-you page tracking.
 *
 * The Google Ads "Form Submit - Thank You Page" action is set up as a page-load
 * conversion with a URL rule on /thank-you (Google tag config method), so it
 * records automatically from the site-wide gtag config — no label or event
 * snippet is needed here. The redirect to /thank-you uses a full page load,
 * which re-fires gtag config so the URL rule matches (SPA navigation would not).
 *
 * This function additionally fires a GA4 event for funnel visibility. It will
 * ALSO fire a labeled Google Ads conversion only if you later switch that action
 * to an event-snippet method and set NEXT_PUBLIC_GADS_THANKYOU_SEND_TO — which
 * is more reliable than URL rules but is optional.
 */
export function trackThankYouConversion() {
  if (typeof window === 'undefined') return;

  // GA4 page-level event for funnel visibility (label-independent).
  fire('thank_you_view', { event_category: 'conversion', event_label: 'thank_you_page', value: 800.0 });

  // Optional: only fires if an event-snippet label has been configured.
  if (window.gtag && GADS_THANKYOU_SEND_TO) {
    window.gtag('event', 'conversion', {
      'send_to': GADS_THANKYOU_SEND_TO,
      'value': 800.0,
      'currency': 'USD',
    });
  }
}

export function trackCallClick() {
  fire('call_click', { event_category: 'engagement', event_label: 'phone_call' });
}

export function trackCalendlyOpen() {
  fire('calendly_open', { event_category: 'engagement', event_label: 'calendly_embed' });
}

export function trackExitIntent() {
  fire('exit_intent_capture', { event_category: 'conversion', event_label: 'exit_intent' });

  // Google Ads "Exit Intent Capture" action expects this specific label.
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17848789749/JUtjCM6G0K4cEPXV-75C',
    });
  }
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

/** Hostnames LeadConnector / GoHighLevel forms post messages from. */
const LC_ALLOWED_HOSTS = ['leadconnectorhq.com', 'msgsndr.com'];

/** Match LeadConnector domains by hostname suffix (covers any subdomain). */
function isLeadConnectorOrigin(origin: string): boolean {
  if (!origin) return false;
  try {
    const host = new URL(origin).hostname;
    return LC_ALLOWED_HOSTS.some(h => host === h || host.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

/** Broad signal that a LeadConnector message represents a successful submit. */
function isLeadSubmitMessage(rawData: unknown): boolean {
  // Structured object payloads — check common type/event fields directly.
  if (rawData && typeof rawData === 'object') {
    const obj = rawData as Record<string, any>;
    const typeFields = [obj.type, obj.event, obj.action, obj.name, obj.eventName]
      .filter(v => typeof v === 'string')
      .map(v => v.toLowerCase());
    if (typeFields.some(t =>
      t.includes('form-submit') || t.includes('form_submit') || t.includes('formsubmit') ||
      t.includes('form-success') || t.includes('form_success') || t.includes('submitted') ||
      t.includes('set-sticky-contact')
    )) {
      return true;
    }
  }

  // Fallback: stringify and keyword-match (covers string payloads + nested shapes).
  let data = '';
  try {
    data = typeof rawData === 'string' ? rawData : JSON.stringify(rawData || '');
  } catch {
    return false;
  }
  data = data.toLowerCase();
  return [
    'form-submit', 'form_submit', 'formsubmit',
    'form-success', 'form_success', 'formsuccess',
    'form_submitted', 'formsubmitted', 'form submitted',
    'set-sticky-contact', 'onformsubmit',
  ].some(k => data.includes(k));
}

/**
 * Attach to window in a useEffect. Listens for form submission events from
 * the LeadConnector iframe and fires GA4 + GAds conversion events, then
 * redirects to /thank-you. Hardened: matches any LeadConnector subdomain,
 * recognizes both object and string payloads, and fires at most once.
 */
export function createFormSubmitListener(source: string) {
  let fired = false;

  return function handleMessage(e: MessageEvent) {
    if (fired) return;
    if (!isLeadConnectorOrigin(e.origin || '')) return;
    if (!isLeadSubmitMessage(e.data)) return;

    fired = true;
    trackLead(source);
    if (typeof console !== 'undefined') {
      console.log(`[Found It] Lead conversion fired — source: ${source}`);
    }

    // Redirect to dedicated thank you page for foolproof Google Ads tracking.
    // Small delay so the conversion beacon has time to leave the page.
    window.setTimeout(() => {
      window.location.href = '/thank-you';
    }, 150);
  };
}

/* ─── Calendly postMessage Listener ─── */
/**
 * Attach to window in a useEffect. Listens for Calendly booking events.
 */
export function createCalendlyListener() {
  return function handleMessage(e: MessageEvent) {
    if (e.data && e.data.event && e.data.event === 'calendly.event_scheduled') {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17848789749/EDtKCMuG0K4cEPXV-75C',
          'value': 800.0,
          'currency': 'USD'
        });
      }
      if (typeof console !== 'undefined') {
        console.log(`[Found It] Calendly conversion fired`);
      }
    }
  };
}
