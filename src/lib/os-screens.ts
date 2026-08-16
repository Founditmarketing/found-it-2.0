/* ─── The stable, on screen ───
   Single source of truth for the OS capture rails (homepage FLOOR, LP rails).
   Captured from the software itself; files are versioned (…-v1) per the
   never-overwrite-assets rule. Every shot is PII-cleared — see the project
   memory's os-screens content laws before adding to this list. */

import type { OsRailItem } from '@/components/os/OsRail';

/** Reorder a rail so vertical-relevant captures drift past first (keyword LPs
    message-match their proof: an auto-shop searcher should meet the shop
    systems before the atelier register). Keeps the full set — breadth is
    still the point — just leads with the matches. */
export function railLeading(
  items: OsRailItem[],
  match: (s: OsRailItem) => boolean
): OsRailItem[] {
  return [...items.filter(match), ...items.filter((s) => !match(s))];
}

export const railDesktops: OsRailItem[] = [
  {
    src: '/os-screens/roxanne-os-money-v1.png',
    alt: 'Roxanne’s OS receivables dashboard — money owed to the nursery, aging buckets, and who owes what (demo data)',
    title: 'Roxanne’s OS',
    kind: 'Wholesale Nursery',
  },
  {
    src: '/os-screens/roxanne-os-intake-v1.png',
    alt: 'Roxanne’s OS order intake — an order pasted exactly as it came in, eight lines in and eight captured, the odd one held in red',
    title: 'Roxanne’s OS',
    kind: 'Wholesale Nursery',
  },
  {
    src: '/os-screens/roxanne-os-pull-sheet-v1.png',
    alt: 'Roxanne’s OS pull sheet — the nursery-branded barn copy with big quantities and pull boxes, PO number only',
    title: 'Roxanne’s OS',
    kind: 'Wholesale Nursery',
  },
  {
    src: '/os-screens/roxanne-os-crew-v1.png',
    alt: 'Roxanne’s OS crew board — today’s loads by trailer slot with one big PRINT per order',
    title: 'Roxanne’s OS',
    kind: 'Wholesale Nursery',
  },
  {
    src: '/os-screens/lacaze-os-ticket-v1.png',
    alt: 'LaCaze OS repair ticket — the advance track, a machined total, and one-tap payment for an outdoor power dealership',
    title: 'LaCaze OS',
    kind: 'Outdoor Power Dealer',
  },
  {
    src: '/os-screens/lacaze-os-invoices-v1.png',
    alt: 'LaCaze OS invoice rack — commercial billing on terms with overdue invoices running hot',
    title: 'LaCaze OS',
    kind: 'Outdoor Power Dealer',
  },
  {
    src: '/os-screens/lacaze-os-paid-v1.png',
    alt: 'LaCaze OS paid ticket — the PAID stamp with tender and date, and the journal entry linked into the books',
    title: 'LaCaze OS',
    kind: 'Outdoor Power Dealer',
  },
  {
    src: '/os-screens/lacaze-os-statement-v1.png',
    alt: 'LaCaze OS customer statement — every open invoice on one page with a bank-payment link on each',
    title: 'LaCaze OS',
    kind: 'Outdoor Power Dealer',
  },
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
];

export const railPhones: OsRailItem[] = [
  {
    src: '/os-screens/roxanne-os-money-mobile-v1.png',
    alt: 'Roxanne’s OS on a phone — money owed to the nursery, total open with aging bars',
    title: 'The Money',
    kind: 'Roxanne’s OS · Nursery',
    portrait: true,
  },
  {
    src: '/os-screens/roxanne-os-crew-mobile-v1.png',
    alt: 'Roxanne’s OS crew board on a phone — loads by trailer slot, one big PRINT each',
    title: 'The Print Board',
    kind: 'Roxanne’s OS · Nursery',
    portrait: true,
  },
  {
    src: '/os-screens/lacaze-os-ticket-mobile-v1.png',
    alt: 'LaCaze OS repair ticket on a phone — the counter runs the whole ticket from a pocket',
    title: 'The Ticket',
    kind: 'LaCaze OS · Dealer',
    portrait: true,
  },
  {
    src: '/os-screens/lacaze-os-statement-mobile-v1.png',
    alt: 'LaCaze OS customer statement on a phone — open invoices with pay-by-bank links',
    title: 'The Statement',
    kind: 'LaCaze OS · Dealer',
    portrait: true,
  },
  {
    src: '/os-screens/flywheel-os-mobile-quick-v2.png',
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
    src: '/os-screens/matteo-register-mobile-v1.png',
    alt: 'The House System register on a phone, fitted to a luxury atelier — terracotta styling',
    title: 'The Atelier',
    kind: 'The House System',
    portrait: true,
  },
  {
    src: '/os-screens/flywheel-os-mobile-board-v2.png',
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
];
