/* ─── Booking config ───
   The one place Trevor pastes his scheduling link. */

/**
 * ▓▓▓ TREVOR: PASTE YOUR CALENDLY / BOOKING LINK HERE — this ONE constant. ▓▓▓
 *
 * Google Calendar / Calendly appointment-schedule URL. Empty = every booking
 * button gracefully falls back (LP buttons scroll to the form; the /lp/thanks
 * guide page sends people to /contact instead).
 *
 * Paste the full https:// URL between the quotes to flip every "Book my free
 * Zoom call" button on the LP heroes, footers, and sticky bars from
 * scroll-to-form to open-the-calendar (new tab) — AND to power the one CTA on
 * /lp/thanks ("Book My Free Map Call") after a guide download. No other edit
 * needed anywhere.
 */
export const BOOKING_URL = 'https://calendar.app.google/pcUVZFQWssyiSv5L6';

/**
 * True only for a real, non-empty http(s) booking link. Guards the
 * "open in a new tab" path so an unset or malformed value always falls back
 * to the lead form instead of rendering a dead link.
 */
export function isBookingUrl(url: string | null | undefined): url is string {
  if (!url) return false;
  return /^https?:\/\/\S+$/i.test(url.trim());
}
