'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageSquareText } from 'lucide-react';
import { NativeLeadForm } from '@/components/forms/NativeLeadForm';
import { trackCTAClick } from '@/lib/analytics';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* THE OWNER'S ROOM — the free monthly seminar as a page. Voice law: short
   sentences, no hype, real internal numbers, NO client names. Date/venue law:
   September Alexandria is unconfirmed — the page promises a TEXT with the
   date, never a date. The seat form is the house NativeLeadForm (source
   'seminar'), so trackLead + qualified-pixel gating ride the wired rails. */

/** What you'll see — three real screens, no client names. */
const stories: { stat: string; label: string; body: string }[] = [
  {
    stat: '$268,000',
    label: 'in missed work, caught',
    body: 'A job queue we built for a Cenla tree service. Estimates went out; nobody was watching what never came back. The queue was. You’ll see the screen that found it.',
  },
  {
    stat: 'Six figures',
    label: 'in aged receivables, surfaced',
    body: 'A roofer’s own software had the numbers and couldn’t show him. His new system read his books and put the total on one screen. He saw it the first day.',
  },
  {
    stat: '2 a.m.',
    label: 'and the phone still answers',
    body: 'A real AI secretary answering a business line at night — played out loud, live, in the room. She answers, takes the message, and books the callback.',
  },
];

export default function SeminarClient() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        {/* ─── Hero ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            The Owner&apos;s Room &mdash; A Free Monthly Seminar
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-6">
            AI For Business Owners Over 50: What&apos;s Real, What&apos;s Junk, And What It&apos;s{' '}
            <span className="text-primary">Already Doing In Louisiana Shops.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto mb-4">
            Free. In a room, not on Zoom. Coffee, handshakes, and real screens from real Louisiana
            businesses. You will not touch a keyboard.
          </p>
          <p className="text-sm text-foreground font-bold mb-8">The room is small on purpose.</p>

          <div className="inline-block bg-card/15 backdrop-blur-xl border border-primary/25 rounded-2xl px-6 py-4 mb-8">
            <p className="text-sm text-foreground font-bold">
              September session &mdash; Alexandria. Reserve a seat and we&apos;ll text you the date
              the moment it&apos;s set.
            </p>
          </div>

          <div>
            <a
              href="#seat"
              className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Reserve A Seat
            </a>
          </div>
        </motion.div>

        {/* ─── What you'll see ─── */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-2xl lg:text-3xl font-black uppercase italic tracking-tighter text-foreground text-center mb-8"
          >
            What You&apos;ll <span className="text-primary">See.</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stories.map((s, i) => (
              <motion.div
                key={s.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-7"
              >
                <p className="text-3xl font-black uppercase italic tracking-tighter text-primary mb-1">
                  {s.stat}
                </p>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {s.label}
                </p>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-6 text-center text-xs text-faint font-medium"
          >
            Real numbers from systems we built. The screens do the talking.
          </motion.p>
        </div>

        {/* ─── Who it's for ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="bg-card/10 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8 text-center mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-black uppercase italic tracking-tighter text-foreground mb-4">
            Who It&apos;s <span className="text-primary">For.</span>
          </h2>
          <p className="text-base text-foreground font-bold mb-3 max-w-xl mx-auto">
            Owner-operators doing $1M+ a year who&apos;d rather watch it work than read about it.
          </p>
          <p className="text-sm text-muted-foreground font-medium max-w-xl mx-auto">
            We take a few businesses a month. The seminar is where we meet the ones worth taking.
          </p>
        </motion.div>

        {/* ─── Seat reservation ─── */}
        <motion.div
          id="seat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="max-w-[640px] mx-auto mb-16 scroll-mt-28"
        >
          <NativeLeadForm
            source="seminar"
            pageSlug="seminar"
            heading="Reserve A Seat"
            subheading="September session — Alexandria. Free. We'll text you the date the moment it's set."
            ctaLabel="Reserve My Seat"
            showBusiness
            qualify
            messageLabel="What does the business do?"
            messagePlaceholder="Roofing, tree work, parts counter, retail — plain words are fine."
            successNote="Seat requested — we'll text you the date."
            privacyNote="One text when the date is set. That's it."
            redirectToThankYou={false}
          />

          {/* Alternate path — the text-MAP line */}
          <p className="mt-8 flex items-start justify-center gap-2.5 text-sm text-muted-foreground font-medium text-center">
            <MessageSquareText className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              Can&apos;t wait for September? Text MAP to{' '}
              <a
                href="sms:+13187133781?&body=MAP"
                onClick={() => trackCTAClick('seminar_text_map')}
                className="text-primary font-bold hover:underline whitespace-nowrap"
              >
                (318) 713-3781
              </a>{' '}
              &mdash; three questions, and we&apos;ll build you a free map of your business.
            </span>
          </p>
        </motion.div>

        {/* ─── Cadence + footer CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <p className="text-xs text-faint font-medium mb-6">
            The Owner&apos;s Room meets monthly. Alexandria first. Wichita later.
          </p>
          <Link
            href="/fit"
            className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            See if your business fits &rarr;
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
