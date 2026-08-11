/* ─── The stable, on screen ───
   Single source of truth for the OS capture rails (homepage FLOOR, LP rails).
   Captured from the software itself; files are versioned (…-v1) per the
   never-overwrite-assets rule. Every shot is PII-cleared — see the project
   memory's os-screens content laws before adding to this list. */

import type { OsRailItem } from '@/components/os/OsRail';

export const railDesktops: OsRailItem[] = [
  {
    src: '/os-screens/tonys-shop-os-v1.png',
    alt: 'Tony’s Shop OS dashboard — the parking lot of declined jobs, priced and ready for win-back texts',
    title: 'Tony’s Shop OS',
    kind: 'European Auto Repair',
  },
  {
    src: '/os-screens/flywheel-os-quote-v1.png',
    alt: 'Flywheel OS quote screen — a tire size typed in and every supplier priced out the door in seconds',
    title: 'Flywheel OS',
    kind: 'Tire & Auto Shop',
  },
  {
    src: '/os-screens/lonestar-os-v1.png',
    alt: 'Lonestar OS desk — sales pipeline from unprocessed to delivered with dollars at every stage',
    title: 'Lonestar OS',
    kind: 'Shed Dealer & Builder',
  },
  {
    src: '/os-screens/house-system-v1.png',
    alt: 'The House System register — a ticket rung with three lines and a live total',
    title: 'The House System',
    kind: 'Menswear Retail',
  },
  {
    src: '/os-screens/procarpet-os-v1.png',
    alt: 'Pro Carpet OS desk — estimate follow-up texts drafted and waiting for one-tap approval',
    title: 'Pro Carpet OS',
    kind: 'Carpet & Duct Cleaning',
  },
  {
    src: '/os-screens/flywheel-os-today-v1.png',
    alt: "Flywheel OS dashboard — the day's quotes, invoices, and profit tiles with aging and open-quote widgets",
    title: 'Flywheel OS',
    kind: 'Tire & Auto Shop',
  },
  {
    src: '/os-screens/matteo-register-v1.png',
    alt: 'The House System register fitted to a luxury atelier — terracotta styling, a three-line ticket',
    title: 'The House System',
    kind: 'Atelier Edition',
  },
  {
    src: '/os-screens/ecw-field-os-v1.png',
    alt: 'East Coast Windmill Field OS — the service book with due services priced and ready to text',
    title: 'Field OS',
    kind: 'Windmill Manufacturer',
  },
  {
    src: '/os-screens/brians-foundation-os-v1.png',
    alt: 'Brian’s Foundation Repair OS — the estimate book with jobs from out-the-door to booked, and the Speak It In button',
    title: 'Brian’s Foundation',
    kind: 'Foundation Contractor',
  },
];

export const railPhones: OsRailItem[] = [
  {
    src: '/os-screens/flywheel-os-mobile-quick-v1.png',
    alt: 'Flywheel OS quick quote on a phone — a tire size field with a snap-the-sidewall camera option',
    title: 'The 30-Second Quote',
    kind: 'Flywheel OS',
    portrait: true,
  },
  {
    src: '/os-screens/house-system-mobile-register-v1.png',
    alt: 'The House System register on a phone — the product rail and an empty ticket ready to ring',
    title: 'The Register',
    kind: 'The House System',
    portrait: true,
  },
  {
    src: '/os-screens/procarpet-os-mobile-estimates-v1.png',
    alt: 'Pro Carpet OS estimates on a phone — the ladder chasing every estimate that is out the door',
    title: 'The Ladder',
    kind: 'Pro Carpet OS',
    portrait: true,
  },
  {
    src: '/os-screens/ecw-field-os-mobile-v1.png',
    alt: 'East Coast Windmill Field OS on a phone — the service book with quotes priced and draft-text buttons',
    title: 'The Service Book',
    kind: 'Field OS',
    portrait: true,
  },
  {
    src: '/os-screens/matteo-register-mobile-v1.png',
    alt: 'The House System register on a phone, fitted to a luxury atelier — terracotta styling',
    title: 'The Atelier',
    kind: 'The House System',
    portrait: true,
  },
  {
    src: '/os-screens/flywheel-os-mobile-board-v1.png',
    alt: 'Flywheel OS estimate board on a phone — open orders with dollars on the board',
    title: 'The Board',
    kind: 'Flywheel OS',
    portrait: true,
  },
  {
    src: '/os-screens/procarpet-os-mobile-v1.png',
    alt: 'Pro Carpet OS on a phone — the day’s money tiles and follow-up texts waiting for approval',
    title: 'The Desk',
    kind: 'Pro Carpet OS',
    portrait: true,
  },
  {
    src: '/os-screens/procarpet-os-mobile-schedule-v1.png',
    alt: 'Pro Carpet OS schedule on a phone — the week’s jobs with the next one highlighted',
    title: 'The Week',
    kind: 'Pro Carpet OS',
    portrait: true,
  },
  {
    src: '/os-screens/brians-foundation-mobile-estimates-v1.png',
    alt: 'Brian’s Foundation Repair OS on a phone — the estimate book with speak-it-in intake',
    title: 'Speak It In',
    kind: 'Brian’s Foundation',
    portrait: true,
  },
  {
    src: '/os-screens/brians-foundation-mobile-today-v1.png',
    alt: 'Brian’s Foundation Repair OS on a phone — the day’s collected, tickets, and jobs due',
    title: 'The Day',
    kind: 'Brian’s Foundation',
    portrait: true,
  },
];
