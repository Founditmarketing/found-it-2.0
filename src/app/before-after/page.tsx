import type { Metadata } from 'next';
import Link from 'next/link';
import { CASE_FILES } from '@/lib/case-files';

/* THE RECORD (Trevor 8/29: "before and after they TRUST, not one that looks
   cool"). Six case files in one strict format: BEFORE (dated facts + the
   owner's words) â†’ THE WORK (the method, stated every time) â†’ AFTER (the
   real screen + the receipt with its pennies on) â†’ STILL TRUE (what stayed
   human or refused â€” the limits that make the wins believable). Status
   stamped honestly per file. No animation, no adjectives: dates, pennies,
   quotes, screens, refusals. Everything here is already public on the blog
   or case studies; statuses come from what those pages assert. */

export const metadata: Metadata = {
  title: 'Before & After: The Record',
  description:
    'Six businesses. What they ran on before. What they run on now. Every number as it happened â€” receipts, screens, and the limits we kept. No adjectives.',
  alternates: { canonical: '/before-after' },
};

export default function BeforeAfterPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[860px] mx-auto px-6 relative z-10">
        {/* Header â€” three lines, no theatrics */}
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
          {CASE_FILES.map((f) => (
            <article key={f.name} className="border border-border/20 rounded-3xl overflow-hidden bg-card/5">
              {/* File header + status stamp â€” the stamp gets its own line on
                  phones (RUNNING IN PARALLEL was crushing the title to ~90px) */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 px-5 sm:px-7 lg:px-9 pt-6 sm:pt-7">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-faint">{f.trade}</p>
                  <h2 className="text-2xl lg:text-3xl font-black uppercase italic tracking-tighter text-foreground mt-1">
                    {f.name}
                  </h2>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-faint mt-1">{f.filed}</p>
                </div>
                <span
                  className={`self-start order-first sm:order-none shrink-0 font-mono text-[10px] font-black uppercase tracking-[0.2em] border rounded-md px-3 py-1.5 sm:mt-1 ${
                    f.status === 'LIVE'
                      ? 'border-primary/60 text-primary'
                      : 'border-border/40 text-muted-foreground'
                  }`}
                >
                  {f.status}
                </span>
              </div>

              <div className="px-5 sm:px-7 lg:px-9 py-6 sm:py-7 space-y-7">
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

                {/* THE WORK â€” the method, stated every time */}
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
                  {f.img && f.imgPhone && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={f.imgPhone.src}
                      alt={f.imgPhone.alt}
                      loading="lazy"
                      className="sm:hidden -mx-5 w-[calc(100%+2.5rem)] max-w-none rounded-none border-y border-border/25 mb-5"
                    />
                  )}
                  {f.img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={f.img.src}
                      alt={f.img.alt}
                      loading="lazy"
                      className={
                        f.imgPhone
                          ? 'hidden sm:block w-full rounded-xl border border-border/25 mb-5'
                          : '-mx-5 w-[calc(100%+2.5rem)] max-w-none rounded-none border-y sm:mx-0 sm:w-full sm:max-w-full sm:rounded-xl sm:border border-border/25 mb-5'
                      }
                    />
                  )}
                  <div className="border border-border/25 rounded-2xl px-4 sm:px-6 py-4 inline-block">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black italic tracking-tighter text-primary leading-none">
                      {f.receipt}
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground mt-1.5">
                      {f.receiptLabel}
                    </p>
                  </div>
                </section>

                {/* STILL TRUE â€” the limits that make the wins believable */}
                <section className="bg-background/40 border border-border/20 rounded-2xl px-4 sm:px-6 py-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-faint mb-2">Still True</p>
                  <p className="text-[15px] text-foreground font-medium leading-relaxed">{f.stillTrue}</p>
                </section>
              </div>
            </article>
          ))}
        </div>

        {/* Close â€” one quiet line */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground font-medium mb-5">
            Every screen above runs demo data; every dollar figure happened. Yours is the next file.
          </p>
          <Link
            href="/lp/walkthrough"
            className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            Show Me What You&rsquo;d Build
          </Link>
        </div>
      </div>
    </main>
  );
}
