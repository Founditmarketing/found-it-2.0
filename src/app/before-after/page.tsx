import type { Metadata } from 'next';
import Link from 'next/link';

/* THE RECORD (Trevor 8/29: "before and after they TRUST, not one that looks
   cool"). Six case files in one strict format: BEFORE (dated facts + the
   owner's words) → THE WORK (the method, stated every time) → AFTER (the
   real screen + the receipt with its pennies on) → STILL TRUE (what stayed
   human or refused — the limits that make the wins believable). Status
   stamped honestly per file. No animation, no adjectives: dates, pennies,
   quotes, screens, refusals. Everything here is already public on the blog
   or case studies; statuses come from what those pages assert. */

export const metadata: Metadata = {
  title: 'Before & After: The Record',
  description:
    'Six businesses. What they ran on before. What they run on now. Every number as it happened — receipts, screens, and the limits we kept. No adjectives.',
  alternates: { canonical: '/before-after' },
};

type CaseFile = {
  name: string;
  trade: string;
  status: 'LIVE' | 'RUNNING IN PARALLEL';
  filed: string;
  beforeQuote?: string;
  before: string[];
  work: string;
  after: string[];
  receipt: string;
  receiptLabel: string;
  stillTrue: string;
  img?: { src: string; alt: string };
};

const files: CaseFile[] = [
  {
    name: 'Edwards Roofing',
    trade: 'Roofing & Construction · Central Louisiana',
    status: 'LIVE',
    filed: 'Filed August 2026',
    before: [
      'Jobs lived in one app, invoices in another, receivables in nobody’s.',
      'Finished, earned work sat unpaid where no screen could show it.',
    ],
    work:
      'One system fitted to how the company runs. His records migrated in. The day it went live, it audited his own books.',
    after: [
      'Jobs, invoices, and money owed on one screen, oldest first, every morning.',
      'The audit also caught a $19,000 bookkeeping error his old software never saw.',
    ],
    receipt: '$195,882.75',
    receiptLabel: 'found in open receivables the day the system went live',
    stillTrue:
      'He can leave any month, with 30 days’ notice, and the whole system leaves with him — code and data. That door stays open on purpose.',
    img: { src: '/cory-ownership-poster-v4.jpg', alt: 'Cory Edwards of Edwards Roofing' },
  },
  {
    name: 'Roxanne’s OS',
    trade: 'Wholesale Nursery · Central Louisiana',
    status: 'LIVE',
    filed: 'Filed August 2026',
    beforeQuote: 'When can I cancel QuickBooks?',
    before: [
      'The business lived in eight places at once: a QuickBooks she never opened, Google Sheets, Apple Notes screenshots texted to the crew, a drawer of old invoices, and her own memory.',
      'Orders arrived from fifteen brokers in fifteen formats — texts, emails, photos of handwriting. One hand-copied order dropped its last line: 44 plants, about $1,000 in freight, nearly left behind.',
    ],
    work:
      'Order intake, pull sheets, receivables, and living inventory fitted to the nursery. Her records migrated in. The books run beside her QuickBooks, matched against the bank, until she says kill it.',
    after: [
      'She pastes an order in exactly as it came. Every line lands or holds in red — never silently dropped.',
      'Seven months of her books rebuilt straight from the bank statements, every month tied to the penny. The quote above is what she said after the demo.',
    ],
    receipt: 'Lines in = lines out',
    receiptLabel: 'the rule the 44 plants wrote, now enforced by the system',
    stillTrue:
      'Her bookkeeper stays. Prices never print on crew-facing paper — her rule, written into the code.',
    img: {
      src: '/images/blog/roxanne-blog-intake-focus-v1.png',
      alt: 'Order intake: every line captured, the unreadable one held in red (demo data)',
    },
  },
  {
    name: 'DJ’s Bail Bonds',
    trade: 'Bail Bonds · Alexandria',
    status: 'RUNNING IN PARALLEL',
    filed: 'Filed August 2026',
    beforeQuote: 'She’s never gonna have to use that pen, ever again.',
    before: [
      'One pen filled out every application that came through the door — defendant file, co-signer file, three references each, payment sheets. The same names, copied paper to paper, for years.',
      'The printed payment form had six lines. Plans often ran twelve payments. Payments seven through twelve were real and owed — they just never appeared on the paper anyone signed.',
    ],
    work:
      'Applications that fill themselves out on the defendant’s phone, payment plans that populate their own dates, court paper that prints from the file. The old software keeps running; every night the two totals go up side by side.',
    after: [
      'A family opens the link at midnight and the application writes itself while the office sleeps. Every payment on every plan prints, every time — the code will not hide one.',
      'The quote above is what DJ said, out loud, in front of everybody.',
    ],
    receipt: '11:52 PM',
    receiptLabel: 'a bail application filling itself out, hours after the office closed (demo data)',
    stillTrue:
      'The system is banned from answering his phone — the ban is printed on its front screen. Jail calls come collect; a robot answering kills the call, and that call is the whole business. The phone stays human, forever.',
    img: {
      src: '/images/blog/djs-blog-today-v1.png',
      alt: 'The morning screen: money due, applications in flight, court dates (demo data)',
    },
  },
  {
    name: 'Doggett Law Firm',
    trade: 'Injury & Family Law · Alexandria',
    status: 'LIVE',
    filed: 'Filed August 2026',
    before: [
      'A one-man firm, third generation. The big cases come in by phone, and a solo lawyer’s phone doesn’t keep office hours — the 9 PM call went to voicemail.',
      'He was about to hire somebody just to catch it. A desk seat runs about $2,500 a month around here.',
    ],
    work:
      'An AI secretary fitted to the firm: answers after hours, takes the story, books the consult, opens the file, drafts the welcome text — and waits for his tap to send anything.',
    after: [
      'The dog-bite call at supper gets answered, booked, and filed. He reads all of it with his coffee on a screen that greets him by name.',
      'The demand letter drafts itself from the file, on his letterhead, under a stamp it cannot sign.',
    ],
    receipt: '$2,500/mo',
    receiptLabel: 'the desk seat he didn’t have to hire',
    stillTrue:
      'She will not calculate a deadline and cannot touch a dollar of client money — the two things that end law careers stay in Kenneth’s hands. He types every date himself; ignore one two days and it turns red and gets loud.',
    img: {
      src: '/images/blog/doggett-blog-today-focus-v1.png',
      alt: 'The morning screen: calls the secretary took, dates needing his eyes (demo data)',
    },
  },
  {
    name: 'Walls Tree Service',
    trade: 'Tree Work & Land Clearing · Louisiana',
    status: 'LIVE',
    filed: 'Filed August 2026',
    before: [
      'When Louisiana lets a road job, every bidder’s price on every line item becomes public record. Going back years. Read by almost no one with a chainsaw.',
      'The big contractors pay whole departments to read those filings. Tyler found out about work after it was gone — a $2.5–$5 million job sat in a public filing system for weeks, written for lawyers.',
    ],
    work:
      'A bid department built into his system: it reads the state’s filings daily, matches clearing work, prices it from what actually won, and hands him the paper.',
    after: [
      'LA 557 was on his board before his coffee got cold. One tap prices a sub-quote from real winning bids, sources printed on page two.',
      'The week this was written, nine live jobs sat on his board worth $50M–$81M in lettings.',
    ],
    receipt: '78,019',
    receiptLabel: 'public bid lines his machine has read so he never guesses a price',
    stillTrue:
      'It is banned from bidding. It never submits in his name, and when an item has no history, the box comes up blank — it does not invent numbers. The handshake stays his.',
    img: {
      src: '/images/blog/walls-scout-board-v1.png',
      alt: 'The board: open public bids matched to clearing work, scored and priced',
    },
  },
  {
    name: 'The Books Case',
    trade: 'Client anonymous · the numbers are not',
    status: 'RUNNING IN PARALLEL',
    filed: 'Filed August 2026',
    before: [
      'Her accounting software swore her bank account was millions of dollars underwater. Her real balance was healthy.',
      'Nobody typed the lie in. The books had drifted from the bank, one unmatched month at a time, for years — and the software never said a word.',
    ],
    work:
      'Seven straight months of her books rebuilt from the bank statements themselves. The new books run beside the software she pays for today, matched to the cent, night after night.',
    after: [
      'Every month ties to the penny — from the January opening balance to the July close, exactly.',
      'She knows her real numbers for the first time in years. The old software still runs; it just isn’t trusted alone anymore.',
    ],
    receipt: '7 months',
    receiptLabel: 'rebuilt from bank statements, every one tied to the penny',
    stillTrue:
      'Her accountant stays — the system hands over clean numbers, not a shoebox. Payroll and tax filing are never built, at any price. And she stays anonymous because her business is hers; the method doesn’t need her name to be true.',
    img: {
      src: '/images/blog/books-blog-payables-v1.png',
      alt: 'Bills and checks with the badge proving Accounts Payable ties to the penny (demo data)',
    },
  },
];

export default function BeforeAfterPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[860px] mx-auto px-6 relative z-10">
        {/* Header — three lines, no theatrics */}
        <div className="mb-14">
          <p className="text-primary font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] mb-5">
            Before &amp; After &middot; The Record
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase italic tracking-tighter leading-[0.88] text-white mb-6">
            Six Businesses.<br />Every Number as It Happened.
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-medium max-w-2xl leading-relaxed">
            What they ran on before. What they run on now. What we refused to build. Written the
            way evidence is written: dates, screens, quotes, and the pennies left on.
          </p>
        </div>

        <div className="space-y-14">
          {files.map((f) => (
            <article key={f.name} className="border border-border/20 rounded-3xl overflow-hidden bg-card/5">
              {/* File header + status stamp */}
              <div className="flex items-start justify-between gap-4 px-7 lg:px-9 pt-7">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-faint">{f.trade}</p>
                  <h2 className="text-2xl lg:text-3xl font-black uppercase italic tracking-tighter text-foreground mt-1">
                    {f.name}
                  </h2>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-faint mt-1">{f.filed}</p>
                </div>
                <span
                  className={`shrink-0 font-mono text-[10px] font-black uppercase tracking-[0.2em] border rounded-md px-3 py-1.5 mt-1 ${
                    f.status === 'LIVE'
                      ? 'border-primary/60 text-primary'
                      : 'border-border/40 text-muted-foreground'
                  }`}
                >
                  {f.status}
                </span>
              </div>

              <div className="px-7 lg:px-9 py-7 space-y-7">
                {/* BEFORE */}
                <section>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-faint mb-3">Before</p>
                  {f.beforeQuote && (
                    <p className="text-xl lg:text-2xl font-black italic tracking-tight text-foreground mb-3">
                      &ldquo;{f.beforeQuote}&rdquo;
                    </p>
                  )}
                  <div className="space-y-2.5">
                    {f.before.map((line) => (
                      <p key={line} className="text-[15px] text-muted-foreground font-medium leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </section>

                {/* THE WORK — the method, stated every time */}
                <section className="border-l-2 border-primary/40 pl-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">The Work</p>
                  <p className="text-[15px] text-foreground font-medium leading-relaxed">{f.work}</p>
                </section>

                {/* AFTER */}
                <section>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-faint mb-3">After</p>
                  <div className="space-y-2.5 mb-5">
                    {f.after.map((line) => (
                      <p key={line} className="text-[15px] text-muted-foreground font-medium leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                  {f.img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={f.img.src}
                      alt={f.img.alt}
                      loading="lazy"
                      className="w-full rounded-xl border border-border/25 mb-5"
                    />
                  )}
                  <div className="border border-border/25 rounded-2xl px-6 py-4 inline-block">
                    <p className="text-3xl lg:text-4xl font-black italic tracking-tighter text-primary leading-none">
                      {f.receipt}
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground mt-1.5">
                      {f.receiptLabel}
                    </p>
                  </div>
                </section>

                {/* STILL TRUE — the limits that make the wins believable */}
                <section className="bg-background/40 border border-border/20 rounded-2xl px-6 py-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-faint mb-2">Still True</p>
                  <p className="text-[15px] text-foreground font-medium leading-relaxed">{f.stillTrue}</p>
                </section>
              </div>
            </article>
          ))}
        </div>

        {/* Close — one quiet line */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground font-medium mb-5">
            Every screen above runs demo data; every dollar figure happened. Yours is the next file.
          </p>
          <Link
            href="/map"
            className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            Show Me What You&rsquo;d Build
          </Link>
        </div>
      </div>
    </main>
  );
}
