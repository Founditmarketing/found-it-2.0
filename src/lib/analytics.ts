/* ─── LP Conversion Tracking Helpers ─── */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || '';
const GADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID || '';

function fire(eventName: string, params?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  // GA4
  if (window.gtag && GA4_ID) {
    window.gtag('event', eventName, params);
  }

  // Google Ads conversion
  if (window.gtag && GADS_CONVERSION_ID) {
    window.gtag('event', 'conversion', {
      send_to: GADS_CONVERSION_ID,
      event_category: eventName,
      ...params,
    });
  }
}

export function trackLead(source: string) {
  fire('lead_submit', {
    event_category: 'conversion',
    event_label: source,
    value: 1,
  });
}

export function trackCallClick() {
  fire('call_click', {
    event_category: 'engagement',
    event_label: 'phone_call',
  });
}

export function trackCalendlyOpen() {
  fire('calendly_open', {
    event_category: 'engagement',
    event_label: 'calendly_embed',
  });
}

export function trackExitIntent() {
  fire('exit_intent_capture', {
    event_category: 'conversion',
    event_label: 'exit_intent',
  });
}
