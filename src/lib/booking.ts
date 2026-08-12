/* ─── Booking config ───
   The one place Trevor pastes his scheduling link. */

/**
 * Google Calendar / Calendly appointment-schedule URL. Empty = button
 * gracefully scrolls to the form until set.
 *
 * Paste the full https:// URL between the quotes to flip every "Book my free
 * Zoom call" button on the LP heroes, footers, and sticky bars from
 * scroll-to-form to open-the-calendar (new tab). No other edit needed.
 */
export const BOOKING_URL = '';

/**
 * True only for a real, non-empty http(s) booking link. Guards the
 * "open in a new tab" path so an unset or malformed value always falls back
 * to the lead form instead of rendering a dead link.
 */
export function isBookingUrl(url: string | null | undefined): url is string {
  if (!url) return false;
  return /^https?:\/\/\S+$/i.test(url.trim());
}
