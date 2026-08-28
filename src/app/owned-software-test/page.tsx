import type { Metadata } from 'next';
import Link from 'next/link';
import { OWNED_SOFTWARE_TEST_QUESTION } from '@/lib/owned-software';

/* ─── /owned-software-test — the diagnostic as a page ───
   Five questions, no form, no gate (guide law 8/28: don't make them put info
   in). The reader scores themselves; the page never collects a thing. */

export const metadata: Metadata = {
  title: 'The Owned Software Test: If You Stop Paying, What Is Left?',
  description:
    'Five questions that tell you whether your business owns its software or rents it. No form, no email. Score yourself in two minutes.',
  alternates: { canonical: '/owned-software-test' },
  openGraph: {
    title: 'The Owned Software Test',
    description: 'If you stop paying, what is left? Five questions, two minutes, no form.',
    type: 'website',
    url: 'https://www.founditsoftware.com/owned-software-test',
    images: [{ url: '/images/blog/owned-software-og-v1.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const questions = [
  {
    n: '01',
    q: 'If you stopped paying today, would the software keep running?',
    rented: 'No. Access ends with the subscription.',
    owned: 'Yes. The work stops, the software does not.',
  },
  {
    n: '02',
    q: 'Could you hand the whole system to a different developer tomorrow?',
    rented: 'No. There is nothing to hand over. It is their product.',
    owned: 'Yes. The code is yours to give to anyone.',
  },
  {
    n: '03',
    q: 'Do you hold your own records: every customer, ticket, and dollar of history?',
    rented: 'They hold them. You get an export button and a prayer.',
    owned: 'You hold them, in a database that belongs to you.',
  },
  {
    n: '04',
    q: 'If the software company vanished tonight, would your business open tomorrow?',
    rented: 'Not on that system.',
    owned: 'Nothing changes. It is your property.',
  },
  {
    n: '05',
    q: 'Does the software fit how YOUR business runs, or did you bend the business to fit it?',
    rented: 'One size for everyone. You adapted.',
    owned: 'Built around your actual operation.',
  },
];

export default function OwnedSoftwareTestPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
          The Owned Software Test
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
          {OWNED_SOFTWARE_TEST_QUESTION.replace('?', '')}
          <span className="text-primary">?</span>
        </h1>
        <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-4">
          Five questions. Answer them about the system your business actually runs on: the
          register, the jobs, the books, the customer list. No form on this page. Score yourself.
        </p>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground mb-12">
          Mostly left column = you rent your business. Mostly right = you own it.
        </p>

        <div className="space-y-5 mb-14">
          {questions.map((item) => (
            <div key={item.n} className="bg-card/10 border border-border/15 rounded-3xl p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-5">
                <span className="text-2xl font-black italic text-primary leading-none">{item.n}</span>
                <h2 className="text-lg lg:text-xl font-black tracking-tight text-foreground leading-snug">
                  {item.q}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border/20 bg-background/40 px-5 py-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-1.5">Rented</p>
                  <p className="text-sm text-muted-foreground font-medium">{item.rented}</p>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-primary/[0.06] px-5 py-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1.5">Owned</p>
                  <p className="text-sm text-foreground font-medium">{item.owned}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-primary/40 rounded-3xl p-7 lg:p-9 bg-card/10">
          <h2 className="text-2xl font-black uppercase italic tracking-tighter text-foreground mb-3">
            Scored mostly rented?
          </h2>
          <p className="text-base text-muted-foreground font-medium leading-relaxed mb-6">
            That is not a character flaw. Until recently, renting was the only door a normal
            business could afford. It is just no longer the only door.{' '}
            <span className="text-foreground font-bold">Nobody rents you your own business back.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/fit"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              See What Owning Yours Looks Like
            </Link>
            <Link
              href="/owned-software"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full border border-border/30 text-foreground font-black uppercase tracking-wider text-sm hover:border-primary/50 transition-colors"
            >
              What Is Owned Software?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
