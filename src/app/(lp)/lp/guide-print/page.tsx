import type { Metadata } from 'next';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';
import { phoneDisplay } from '@/lib/phone';

/* ─── "What Do I Get?" — PDF print source ───
   This page IS the lead-magnet PDF. It renders four US-Letter pages and
   interpolates OS_PRICING + TRACK_RECORD so the guide can never drift from
   the site's published numbers. It lives under /lp so LayoutShell serves it
   bare (no header/footer), and it's noindexed — it exists to be printed,
   not found.

   To (re)generate the PDF — ASSET LAW: bump the version, never overwrite:
     "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless
       --print-to-pdf="<repo>\public\downloads\what-do-i-get-vN.pdf"
       --no-pdf-header-footer --virtual-time-budget=15000
       http://localhost:3000/lp/guide-print
   ...then point GUIDE_PDF_PATH (src/lib/guide.ts) at the new file.

   Colors are hard-coded on purpose: the PDF is a fixed dark artifact and must
   not depend on the theme class landing before print. Orange #FF5500 is the
   only accent, Outfit (font-heading) display over Inter body — the brand. */

export const metadata: Metadata = {
  title: { absolute: 'What Do I Get? — Print Source | Found It Software' },
  robots: { index: false, follow: false },
};

const ORANGE = '#FF5500';
const PAPER = '#050505';
const CARD = '#0d0d0d';
const EDGE = '#262626';
const MUTED = '#a3a3a3';
const FAINT = '#737373';

/** Shared page chrome: fixed US-Letter sheet, dark, padded. */
function Sheet({ children, last = false }: { children: React.ReactNode; last?: boolean }) {
  return (
    <div
      className="pdf-page relative flex flex-col overflow-hidden"
      style={{
        width: '8.5in',
        height: '11in',
        background: PAPER,
        color: '#fafafa',
        padding: '0.65in',
        breakAfter: last ? 'auto' : 'page',
        pageBreakAfter: last ? 'auto' : 'always',
      }}
    >
      {children}
    </div>
  );
}

function Wordmark({ size = '16pt' }: { size?: string }) {
  return (
    <span className="font-heading font-black tracking-tighter" style={{ fontSize: size, color: '#ffffff' }}>
      found it software<span style={{ color: ORANGE }}>.</span>
    </span>
  );
}

function PageHeader({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-between"
      style={{ borderBottom: `1px solid ${EDGE}`, paddingBottom: '0.14in', marginBottom: '0.3in' }}
    >
      <Wordmark size="11pt" />
      <span className="font-mono font-black uppercase" style={{ fontSize: '7.5pt', letterSpacing: '0.3em', color: ORANGE }}>
        {label}
      </span>
    </div>
  );
}

function PageFooter({ page }: { page: string }) {
  return (
    <div
      className="mt-auto flex items-center justify-between"
      style={{ borderTop: `1px solid ${EDGE}`, paddingTop: '0.14in' }}
    >
      <span style={{ fontSize: '8pt', color: FAINT, fontWeight: 600 }}>
        founditsoftware.com &nbsp;·&nbsp; {phoneDisplay}
      </span>
      <span className="font-mono" style={{ fontSize: '8pt', color: FAINT, fontWeight: 700 }}>
        {page} / 4
      </span>
    </div>
  );
}

export default function GuidePrintPage() {
  return (
    <div className="guide-print">
      <style>{`
        @page { size: letter; margin: 0; }
        .guide-print, .guide-print * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        @media screen {
          .guide-print { display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 24px 0; background: #171717; min-height: 100vh; }
          .pdf-page { box-shadow: 0 8px 40px rgba(0,0,0,0.6); }
        }
        @media print {
          .guide-print { display: block; }
          .screen-note { display: none !important; }
        }
      `}</style>

      {/* Screen-only note — never printed */}
      <div className="screen-note" style={{ maxWidth: '8.5in', width: '100%', background: CARD, border: `1px solid ${EDGE}`, borderRadius: 12, padding: '12px 16px', color: MUTED, fontSize: 13, fontWeight: 600 }}>
        Print source for the &ldquo;What Do I Get?&rdquo; guide PDF. Regenerate with headless Edge
        (command in this file&apos;s header comment) and version the output filename — never
        overwrite a deployed PDF.
      </div>

      {/* ─────────────── PAGE 1 · COVER ─────────────── */}
      <Sheet>
        <div className="flex items-center justify-between">
          <Wordmark />
          <span
            className="font-mono font-black uppercase"
            style={{ fontSize: '8pt', letterSpacing: '0.25em', background: ORANGE, color: '#000', padding: '5pt 10pt', borderRadius: 999 }}
          >
            Free Guide
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="font-mono font-black uppercase" style={{ fontSize: '10pt', letterSpacing: '0.4em', color: ORANGE, marginBottom: '0.25in' }}>
            The Custom Software Buyer&apos;s Guide
          </p>
          <h1 className="font-heading font-black uppercase italic" style={{ fontSize: '68pt', lineHeight: 0.85, letterSpacing: '-0.03em', marginBottom: '0.35in' }}>
            What Do
            <br />I <span style={{ color: ORANGE }}>Get?</span>
          </h1>
          <p style={{ fontSize: '13pt', lineHeight: 1.55, color: MUTED, fontWeight: 500, maxWidth: '5.6in' }}>
            The plain-English answer — what one custom system replaces, what it costs next to
            the stack you&apos;re renting, how it lands without breaking your business, and the
            guarantee it all sits on. Four pages. No tech specs.
          </p>
        </div>

        {/* Stat row */}
        <div className="grid grid-cols-4" style={{ gap: '0.15in', marginBottom: '0.3in' }}>
          {[
            { value: TRACK_RECORD.softwareCustomers, label: 'Local businesses running it' },
            { value: OS_PRICING.monthly, label: 'Flat, public price / mo' },
            { value: '100%', label: 'Yours — code and data' },
            { value: '0', label: 'Long-term contracts' },
          ].map((s) => (
            <div key={s.label} style={{ background: CARD, border: `1px solid ${EDGE}`, borderRadius: 12, padding: '0.16in' }}>
              <div className="font-heading font-black italic" style={{ fontSize: '20pt', letterSpacing: '-0.02em', color: '#fff' }}>{s.value}</div>
              <div className="uppercase font-bold" style={{ fontSize: '6.5pt', letterSpacing: '0.12em', color: FAINT, marginTop: '3pt' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Guarantee band */}
        <div style={{ background: ORANGE, borderRadius: 14, padding: '0.24in 0.3in', color: '#000' }}>
          <p className="font-heading font-black uppercase italic" style={{ fontSize: '19pt', letterSpacing: '-0.02em', lineHeight: 1 }}>
            &ldquo;{OS_PRICING.guarantee}&rdquo;
          </p>
          <p className="font-bold" style={{ fontSize: '9pt', marginTop: '5pt' }}>
            That is the entire guarantee. There is no fine print, because it doesn&apos;t need any.
          </p>
        </div>
      </Sheet>

      {/* ─────────────── PAGE 2 · WHAT IT REPLACES ─────────────── */}
      <Sheet>
        <PageHeader label="01 · What You Get" />

        <h2 className="font-heading font-black uppercase italic" style={{ fontSize: '30pt', lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: '0.18in' }}>
          One System. Fitted To You. <span style={{ color: ORANGE }}>Yours.</span>
        </h2>
        <p style={{ fontSize: '10.5pt', lineHeight: 1.55, color: MUTED, fontWeight: 500, marginBottom: '0.28in' }}>
          You get one custom app built around how your business already runs — the phones, the
          write-ups, the jobs, the money — instead of a subscription here, an add-on there, and
          a spreadsheet holding it all together. Here&apos;s the kind of software it replaces:
        </p>

        <div className="grid grid-cols-2" style={{ gap: '0.16in', marginBottom: '0.28in' }}>
          {[
            {
              t: 'Shop Management Systems',
              d: 'Repair orders, estimates, parts, payments, and scheduling — one screen, no per-seat fees, every writer and tech included.',
            },
            {
              t: 'Dealership Systems',
              d: 'Inventory, deals, customer records, and the follow-up — without renting your own customer list back month after month.',
            },
            {
              t: 'Roofing & Contractor CRMs',
              d: 'Jobs, crews, photos, insurance paperwork, and who owes what — built around how your work actually moves.',
            },
            {
              t: 'QuickBooks-Style Books',
              d: 'Invoices, payments, and the ledger living in the same system as the work — ask “who owes me money right now?” and get names and amounts.',
            },
          ].map((c) => (
            <div key={c.t} style={{ background: CARD, border: `1px solid ${EDGE}`, borderRadius: 14, padding: '0.2in' }}>
              <div style={{ width: '0.28in', height: '3pt', background: ORANGE, borderRadius: 2, marginBottom: '0.1in' }} />
              <h3 className="font-heading font-black uppercase italic" style={{ fontSize: '12.5pt', letterSpacing: '-0.01em', marginBottom: '0.07in', color: '#fff' }}>
                {c.t}
              </h3>
              <p style={{ fontSize: '9pt', lineHeight: 1.5, color: MUTED, fontWeight: 500 }}>{c.d}</p>
            </div>
          ))}
        </div>

        {/* Industries — anonymous on purpose */}
        <p className="font-mono font-black uppercase" style={{ fontSize: '8pt', letterSpacing: '0.3em', color: ORANGE, marginBottom: '0.1in' }}>
          Already Running In
        </p>
        <div className="flex flex-wrap" style={{ gap: '6pt', marginBottom: '0.28in' }}>
          {[
            'Auto repair shops',
            'Tire & transmission shops',
            'Car & equipment dealerships',
            'Roofing companies',
            'Shed builders',
            'Retail stores',
            'Contractors & field crews',
            'Tree services',
            'Real estate offices',
          ].map((i) => (
            <span key={i} className="font-bold" style={{ fontSize: '8.5pt', background: CARD, border: `1px solid ${EDGE}`, borderRadius: 999, padding: '4.5pt 9pt', color: '#e5e5e5' }}>
              {i}
            </span>
          ))}
        </div>
        <p style={{ fontSize: '9.5pt', color: MUTED, fontWeight: 600, marginBottom: '0.26in' }}>
          {TRACK_RECORD.softwareCustomers} local businesses run day-to-day on systems we built — real
          operations, not pilots.
        </p>

        <div style={{ background: CARD, border: `1px solid ${ORANGE}55`, borderRadius: 14, padding: '0.22in 0.26in' }}>
          <h3 className="font-heading font-black uppercase italic" style={{ fontSize: '14pt', color: ORANGE, marginBottom: '0.06in' }}>
            And You Own It. Outright.
          </h3>
          <p style={{ fontSize: '9.5pt', lineHeight: 1.55, color: '#e5e5e5', fontWeight: 500 }}>
            The code and the data are yours, 100% — every customer record, every invoice, every
            line of the books. Nobody should rent you your own business back. Cancel any month
            and the system is still yours.
          </p>
        </div>

        <PageFooter page="2" />
      </Sheet>

      {/* ─────────────── PAGE 3 · THE MONEY STORY ─────────────── */}
      <Sheet>
        <PageHeader label="02 · The Money Story" />

        <h2 className="font-heading font-black uppercase italic" style={{ fontSize: '30pt', lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: '0.18in' }}>
          The Stack You Rent vs. <span style={{ color: ORANGE }}>The System You Own.</span>
        </h2>
        <p style={{ fontSize: '10.5pt', lineHeight: 1.55, color: MUTED, fontWeight: 500, marginBottom: '0.28in' }}>
          Add up what leaves your account every month for software that was never built for you.
          Then put it next to one flat, public price.
        </p>

        <div className="grid grid-cols-2" style={{ gap: '0.18in', marginBottom: '0.26in' }}>
          {/* Rented stack */}
          <div style={{ background: CARD, border: `1px solid ${EDGE}`, borderRadius: 14, padding: '0.24in' }}>
            <p className="font-mono font-black uppercase" style={{ fontSize: '7.5pt', letterSpacing: '0.25em', color: FAINT, marginBottom: '0.12in' }}>
              The Rented Stack · Every Month
            </p>
            {[
              'The shop / dealer / CRM subscription',
              'The accounting subscription',
              'Per-seat and per-location fees',
              'The texting add-on',
              'The reporting module',
              'The “premium tier” your own data sits behind',
            ].map((line) => (
              <div key={line} className="flex items-start" style={{ gap: '7pt', marginBottom: '0.085in' }}>
                <span style={{ color: FAINT, fontWeight: 900, fontSize: '9.5pt', lineHeight: 1.4 }}>—</span>
                <span style={{ fontSize: '9.5pt', lineHeight: 1.4, color: '#d4d4d4', fontWeight: 500 }}>{line}</span>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${EDGE}`, marginTop: '0.14in', paddingTop: '0.14in' }}>
              <div className="font-heading font-black italic" style={{ fontSize: '21pt', color: '#fff', letterSpacing: '-0.02em' }}>
                $5,000–$10,000<span style={{ fontSize: '10pt' }}>/mo</span>
              </div>
              <p style={{ fontSize: '8pt', color: FAINT, fontWeight: 600, marginTop: '3pt' }}>
                What a stack like this commonly adds up to — before the next price increase.
              </p>
            </div>
          </div>

          {/* Found It OS */}
          <div style={{ background: CARD, border: `1.5pt solid ${ORANGE}`, borderRadius: 14, padding: '0.24in' }}>
            <p className="font-mono font-black uppercase" style={{ fontSize: '7.5pt', letterSpacing: '0.25em', color: ORANGE, marginBottom: '0.12in' }}>
              Found It OS · The Public Price
            </p>
            <div className="font-heading font-black italic" style={{ fontSize: '34pt', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
              {OS_PRICING.monthly}
            </div>
            <p style={{ fontSize: '9pt', color: MUTED, fontWeight: 700, marginBottom: '0.06in' }}>
              {OS_PRICING.monthlyLabel} — flat
            </p>
            <p style={{ fontSize: '9.5pt', color: '#e5e5e5', fontWeight: 600, marginBottom: '0.14in' }}>
              + {OS_PRICING.setup} {OS_PRICING.setupLabel}
            </p>
            {[
              'Every employee included — no per-seat fees',
              'Month-to-month — cancel any time',
              'You own the code and the data, 100%',
              'The price is public — no quote games',
            ].map((line) => (
              <div key={line} className="flex items-start" style={{ gap: '7pt', marginBottom: '0.085in' }}>
                <span style={{ color: ORANGE, fontWeight: 900, fontSize: '9.5pt', lineHeight: 1.4 }}>✓</span>
                <span style={{ fontSize: '9.5pt', lineHeight: 1.4, color: '#e5e5e5', fontWeight: 600 }}>{line}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: ORANGE, borderRadius: 14, padding: '0.2in 0.26in', color: '#000' }}>
          <p className="font-heading font-black uppercase italic" style={{ fontSize: '15pt', letterSpacing: '-0.01em', lineHeight: 1.05 }}>
            And if it doesn&apos;t earn its keep: &ldquo;{OS_PRICING.guarantee}&rdquo;
          </p>
          <p className="font-bold" style={{ fontSize: '8.5pt', marginTop: '4pt' }}>
            No fine print. No clawbacks. No conditions to read twice.
          </p>
        </div>

        <PageFooter page="3" />
      </Sheet>

      {/* ─────────────── PAGE 4 · HOW A FITTING WORKS ─────────────── */}
      <Sheet last>
        <PageHeader label="03 · How A Fitting Works" />

        <h2 className="font-heading font-black uppercase italic" style={{ fontSize: '30pt', lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: '0.24in' }}>
          Nothing Gets Ripped Out. <span style={{ color: ORANGE }}>Ever.</span>
        </h2>

        {[
          {
            n: '01',
            t: 'The Free Map Visit',
            d: 'We come to your place (or hop on a Zoom) and walk how the business actually runs — the phones, the paperwork, the money. Then we map the app we\u2019d build if we owned your company. You add to it or take away. You keep the map either way, hire us or don\u2019t.',
          },
          {
            n: '02',
            t: 'It Runs BESIDE Your Old System',
            d: 'Nothing switches on day one. Your new system runs in parallel with your current software and gets matched against it — to the penny — every night. The old system stays plugged in the whole time, so you never bet the business on a cutover.',
          },
          {
            n: '03',
            t: 'About 30 Days Of Proof',
            d: 'You and your team run both until the numbers match and the new system has earned your trust. Nothing switches until you say go — that\u2019s the rule on every fitting we do.',
          },
          {
            n: '04',
            t: 'You Own It',
            d: `The code and the data are yours, 100%. ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel}, ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month-to-month — no long-term contracts.`,
          },
        ].map((s) => (
          <div key={s.n} className="flex items-start" style={{ gap: '0.18in', marginBottom: '0.17in' }}>
            <span className="font-heading font-black italic" style={{ fontSize: '20pt', color: ORANGE, letterSpacing: '-0.02em', lineHeight: 1, minWidth: '0.42in' }}>
              {s.n}
            </span>
            <div>
              <h3 className="font-heading font-black uppercase italic" style={{ fontSize: '13pt', letterSpacing: '-0.01em', marginBottom: '0.05in', color: '#fff' }}>
                {s.t}
              </h3>
              <p style={{ fontSize: '9.5pt', lineHeight: 1.5, color: MUTED, fontWeight: 500 }}>{s.d}</p>
            </div>
          </div>
        ))}

        {/* CTA band */}
        <div style={{ background: ORANGE, borderRadius: 16, padding: '0.3in', color: '#000', marginTop: '0.1in' }}>
          <p className="font-mono font-black uppercase" style={{ fontSize: '8pt', letterSpacing: '0.3em', marginBottom: '0.08in' }}>
            The Next Step Is Free
          </p>
          <h3 className="font-heading font-black uppercase italic" style={{ fontSize: '23pt', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: '0.1in' }}>
            Book Your Free Software Map Call.
          </h3>
          <p className="font-bold" style={{ fontSize: '10pt', lineHeight: 1.45, marginBottom: '0.14in' }}>
            About 30 minutes. We map the software we&apos;d build for your business, live — and you
            keep the map whether you hire us or not.
          </p>
          <div className="flex items-center" style={{ gap: '0.3in' }}>
            <span className="font-heading font-black italic" style={{ fontSize: '13.5pt' }}>founditsoftware.com</span>
            <span className="font-heading font-black italic" style={{ fontSize: '13.5pt' }}>{phoneDisplay}</span>
          </div>
        </div>

        <div className="mt-auto" style={{ borderTop: `1px solid ${EDGE}`, paddingTop: '0.14in' }}>
          <div className="flex items-center justify-between">
            <span style={{ fontSize: '8.5pt', color: FAINT, fontWeight: 700 }}>
              &ldquo;{OS_PRICING.guarantee}&rdquo; — no fine print.
            </span>
            <span className="font-mono" style={{ fontSize: '8pt', color: FAINT, fontWeight: 700 }}>4 / 4</span>
          </div>
        </div>
      </Sheet>
    </div>
  );
}
