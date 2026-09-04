'use client';

/* ─── /about — THE COMPANY WITH THE WALLS OFF (9/3 rebuild) ───
   The old page was a biography: story, portrait, letter, headshots, stats.
   This one is due diligence you can enjoy. Four questions, answered with
   receipts: who touches my system, how does this company really operate,
   what are they honest enough to admit, what happens to me if they fail.
   Centerpiece: the visitor makes Found It disappear and watches the
   business system keep running. Every number links to its record; nothing
   here is typed-in truth that can silently go stale — the live strip reads
   the ship log, the receipts link The Record, /drive, /owned-software.
   Trevor's law for this page: humility, and no shame about Christ. */

import { useEffect, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { LATEST_SHIP } from '@/components/os/ShipLog';
import { AWARD, BUSINESS } from '@/lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

/* Public roster law: Trevor, Reece, Thomas. /team 301s to /about#team. */
const FACES: Record<string, { image: string; pos?: string }> = {
  Trevor: { image: '/trevorruby.jpeg' },
  Reece: { image: '/reese-roberts.jpeg' },
  Thomas: { image: '/thomas-dombrowski.jpeg', pos: 'center 10%' },
};

/* ─── The lifecycle of a client system — accountability, not job titles ─── */
const STAGES = [
  {
    id: 'fitting',
    title: 'The Fitting',
    people: ['Trevor'],
    owns: 'Learning how your business actually moves. Deciding what belongs in the first build. The final product judgment.',
    notOwns: 'Accounting policy, payroll, or taxes — your accountant keeps those, always. And pretending to understand a workflow you haven’t shown him.',
    reach: 'Text (318) 713-3781. Trevor answers.',
  },
  {
    id: 'map',
    title: 'The Map',
    people: ['Trevor'],
    owns: 'Your whole operation on one page — every screen, every automation we’d build. Saying “generic software is the better answer” out loud when it is.',
    notOwns: 'Charging for it. The map takes about thirty minutes and it’s yours either way.',
  },
  {
    id: 'build',
    title: 'The Build',
    people: ['Trevor'],
    owns: 'Every screen fitted to your business, built on one shared production core already running real companies — login, backups, and security are lived-in, not reinvented from an empty folder. AI writes code all day here; humans decide what should exist, test the money, and answer for it.',
    notOwns: 'Your data. It’s yours from day one, and nobody experiments on your live books.',
  },
  {
    id: 'migration',
    title: 'The Migration',
    people: ['Trevor', 'Reece'],
    owns: 'Your years of records moved in, then the new system running beside the old one, matched to the penny every night.',
    notOwns: 'The cutover date. Nothing switches until the numbers agree, night after night, and you say go.',
  },
  {
    id: 'nightly',
    title: 'The Nightly Check',
    people: [],
    owns: 'The system reconciles its own books every night and the habit is published. Corrections post as new lines; the original entry stays on the record.',
    notOwns: 'Editing history. It isn’t allowed to, even for us.',
    receipt: { label: 'Open The Record', href: '/the-record' },
  },
  {
    id: 'support',
    title: 'Support',
    people: ['Reece', 'Thomas'],
    owns: 'The phone when it rings. Reece owns client systems, Thomas owns the relationship, and you always know who owns the problem.',
    notOwns: 'An anonymous queue. There isn’t one — Trevor reads every thread.',
    reach: 'Same number: (318) 713-3781.',
  },
];

/* ─── What we are / what we are not ─── */
const PAIRS = [
  ['A small, named company.', 'Not a platform with four hundred people and nobody responsible.'],
  ['One shared production core, fitted to each business.', 'Not every login screen and backup routine reinvented from an empty folder.'],
  ['AI-assisted engineering.', 'Not an unsupervised machine making business decisions and hoping nobody notices.'],
  ['Owned software with continuing support.', 'Not a monthly payment for permission to keep using your own system.'],
  ['A new software company built from thirteen years inside local businesses.', 'Not a thirteen-year-old software platform.'],
  ['Selective by necessity.', 'Not the right answer for every company, every workflow, or every budget.'],
];

/* ─── The claims audit — marketing does not get write access (9/3).
   Statuses are human-checked and DATED, never dressed up as live feeds;
   the audit is allowed to catch our own copy, and has. ─── */
const AUDIT_DATE = 'Checked by a person · Sep 3, 2026';
const CLAIMS = [
  {
    claim: '“You own the code and the data.”',
    status: 'PROVED IN WRITING',
    tone: 'text-emerald-400',
    note: 'The public standard and the terms name the repository, database and backups, deployment, credentials, documentation, and modification rights. Limitation: public language proves the promise being made — the signed client agreement is what controls.',
    receipt: { label: 'Read the standard', href: '/owned-software' },
  },
  {
    claim: '“Every system reconciles its own books nightly.”',
    status: 'PROVED',
    tone: 'text-emerald-400',
    note: 'The habit is published, machine-written, and dated — including the nights that fail.',
    receipt: { label: 'Open The Record', href: '/the-record' },
  },
  {
    claim: '“13+ years in business.”',
    status: 'QUALIFIED',
    tone: 'text-amber-400',
    note: 'Thirteen years inside local businesses is true — as a marketing company. Found It Software is new. Related facts, not the same fact. This page now says it the accepted way: thirteen years inside local businesses, building owned software since 2026.',
  },
  {
    claim: '“No interns. No handoffs.”',
    status: 'REJECTED AS WRITTEN',
    tone: 'text-red-400',
    note: 'A slogan a visitor couldn’t audit. Retired Sep 3, 2026 and replaced with named accountability — the stage map above says who owns what, and who covers.',
  },
  {
    claim: '“If Found It disappears, your system doesn’t.”',
    status: 'DESIGNED FOR · NOT YET DRILL-PROVED',
    tone: 'text-amber-400',
    note: 'The exit package is defined and written down. An independent handoff drill — another developer restoring a system from the package alone, timed — has not been completed yet. When it is, the date and the result go here, pass or fail.',
    receipt: { label: 'What the package holds', href: '/security' },
  },
];

/* ─── NOT YET — the future kept in the correct tense (9/3) ─── */
const NOT_YET = [
  ['Five years of software operating history', 'Not possible yet. Found It Software is new, and no wording can hurry that.'],
  ['A completed independent developer handoff drill', 'Not yet. Every client holds the right and the package; nobody has needed to use them.'],
  ['National scale', 'Not proved. Louisiana, Mississippi, East Texas, southern Arkansas, Wichita. That’s the earned map.'],
  ['Zero mistakes', 'Will never be claimed. See the rules we paid for, below.'],
];

/* ─── Scar tissue — real incidents, real rule changes, all on the record ─── */
const SCARS = [
  {
    date: 'AUG 2026',
    happened: 'We moved our own books off QuickBooks. Reconciliation passed every check — and July was still sitting $99,000 away from what the bank could prove. Nobody knew.',
    changed: 'Books must tie to outside reality, not just to themselves. The owner sees the money — first screen, every morning.',
    enforced: 'The nightly check, in code.',
    receipt: { label: 'Read the field report', href: '/blog/moving-our-own-books' },
  },
  {
    date: 'DAY ONE, EDWARDS ROOFING',
    happened: 'The first penny-audit of a client’s books surfaced $195,882.75 sitting in open receivables and a $19,000 bookkeeping error the old software never saw.',
    changed: 'No system cuts over on trust. The new one runs beside the old one, reconciled to the penny every night, until the owner says go.',
    enforced: 'The migration gate, on every fitting.',
    receipt: { label: 'Read the case study', href: '/case-studies/edwards-roofing' },
  },
  {
    date: 'STANDING RULE',
    happened: 'Everywhere we looked, business software let people quietly edit history — and quietly is how $99,000 goes missing.',
    changed: 'Our ledgers are append-only. Try to edit an entry and the system refuses: a correction posts as a new line, the original stays on the record.',
    enforced: 'In code. Try it yourself on the demo.',
    receipt: { label: 'Drive the demo OS', href: '/drive' },
  },
];

/* ─── The six items that walk out the door with you (/owned-software, verbatim) ─── */
const HANDOVER = [
  'The complete runnable source-code repository',
  'The production database and backups, in a usable format',
  'The hosting account, or a documented transfer of deployment',
  'The credentials and configuration documentation',
  'The legal right for any developer to maintain and modify the system',
  'A plain list of the third-party services that still bill on their own',
];

/** Alexandria's clock, live. Renders a dash until mounted so SSR never lies. */
function LocalTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/Chicago' });
    setTime(fmt());
    const t = setInterval(() => setTime(fmt()), 20_000);
    return () => clearInterval(t);
  }, []);
  return <span className="tabular-nums">{time || '—'}</span>;
}

/** The centerpiece: the visitor removes Found It and the business keeps running. */
function DisappearDemo() {
  const [gone, setGone] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="border border-border/25 rounded-[2rem] overflow-hidden bg-card/10">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Found It side */}
        <div className={`p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-border/20 transition-all duration-700 ${gone ? 'opacity-35 saturate-0' : ''}`}>
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-2">Found It Software</p>
          <p className="flex items-center gap-2 text-lg font-black uppercase italic tracking-tight text-foreground">
            <span className={`w-2.5 h-2.5 rounded-full ${gone ? 'bg-red-500/80' : 'bg-emerald-400 animate-pulse'}`} aria-hidden />
            {gone ? 'Offline' : 'Online'}
          </p>
          <p className="mt-3 text-sm text-muted-foreground font-medium leading-relaxed">
            {gone
              ? 'Support stopped. Invoices from us stopped. That’s all that stopped.'
              : 'Builds, support, new features, the nightly watch.'}
          </p>
        </div>
        {/* The business side */}
        <div className="p-6 md:p-8">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-2">Your Business System</p>
          <p className="flex items-center gap-2 text-lg font-black uppercase italic tracking-tight text-foreground">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
            Running
          </p>
          <ul className="mt-3 space-y-1.5" aria-live="polite">
            {HANDOVER.map((item, i) => (
              <AnimatePresence key={item}>
                {gone && (
                  <motion.li
                    initial={reduce ? false : { opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : 0.25 + i * 0.35, duration: 0.45, ease: ease as any }}
                    className="flex items-start gap-2 text-sm font-medium text-foreground/90"
                  >
                    <span className="text-emerald-400 font-black mt-px" aria-hidden>✓</span>
                    {item}
                  </motion.li>
                )}
              </AnimatePresence>
            ))}
            {!gone && (
              <li className="text-sm text-muted-foreground font-medium leading-relaxed">
                Your registers, your books, your customers, your phone — on code and data your business owns.
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="p-6 md:p-8 border-t border-border/20 text-center">
        {!gone ? (
          <button
            type="button"
            onClick={() => setGone(true)}
            className="px-10 h-16 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm md:text-base shadow-[0_14px_44px_-10px_rgba(255,85,0,0.45)] hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Make Found It Disappear
          </button>
        ) : (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduce ? 0 : 2.6, duration: 0.6 }}
          >
            <p className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-foreground">
              The builder left. <span className="text-primary">The business didn&rsquo;t.</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground font-medium">
              That is not a metaphor. It is the deal &mdash; thirty days&rsquo; notice, and all six items above go with you.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/owned-software" className="inline-flex items-center justify-center px-6 h-12 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity">
                Open the Owned Software Standard
              </Link>
              <Link href="/security" className="inline-flex items-center justify-center px-6 h-12 rounded-full border border-border/30 text-foreground/90 font-black uppercase tracking-wider text-xs hover:border-primary/50 transition-colors">
                What happens if we fail
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setGone(false)}
              className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-faint hover:text-foreground transition-colors"
            >
              Resume support →
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function SectionHeading({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-10 md:mb-12">
      <div className="w-10 h-[3px] bg-primary/70 rounded-full mb-7" aria-hidden />
      <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground text-balance">{children}</h2>
      {sub && <p className="mt-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl">{sub}</p>}
    </div>
  );
}

export default function AboutPage() {
  const [openStage, setOpenStage] = useState<string>('fitting');
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[900px] mx-auto px-6 relative z-10">

        {/* ─── Hero: no origin myth, no founder mythology ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="mb-24 md:mb-32"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-7">
            Small enough <span className="text-primary block">to see all of it.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            No origin myth. No culture manifesto. Just the people, the work, the rules, and the exit.
            Found It builds operating systems around real businesses, and the client owns the code and the data.
            This page shows what that sentence requires.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-4">
            <a href="#inside" className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
              Come Inside
            </a>
            <Link href="/owned-software" className="inline-flex items-center justify-center px-8 h-14 rounded-full border border-border/25 text-foreground/90 font-black uppercase tracking-wider text-sm hover:border-primary/50 transition-colors">
              Read the Two-Page Deal
            </Link>
          </div>
          {/* Live strip — every figure has one source of truth, none typed here */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 border-y border-border/15">
            {[
              ['Alexandria', <LocalTime key="t" />],
              ['Last ship', LATEST_SHIP[0]],
              ['Long-term contracts', '0'],
              ['Month-to-month', 'every account'],
            ].map(([label, value], i) => (
              <div
                key={i}
                className={`py-5 px-4 md:px-6 border-border/10 ${i > 0 ? 'border-l max-md:[&:nth-child(odd)]:border-l-0' : ''} ${i > 1 ? 'max-md:border-t' : ''}`}
              >
                <p className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-faint mb-1.5">{label}</p>
                <p className="font-mono text-sm md:text-base font-black uppercase tracking-[0.08em] text-foreground/90 tabular-nums">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── What is true right now — receipts, not assertions ─── */}
        <motion.div
          id="inside"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-32 md:mb-44 scroll-mt-28"
        >
          <SectionHeading sub="Nothing below asks you to take our word. Each one opens the record it lives in.">
            What is true <span className="text-primary">right now.</span>
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/15 border border-border/15">
            {[
              { k: 'The nightly check', line: 'Every Found It system reconciles its own books every night, and the habit is public.', cta: 'Open The Record', href: '/the-record' },
              { k: 'The ship log', line: `${LATEST_SHIP[1]} — shipped ${LATEST_SHIP[0]}.`, cta: 'See what changed', href: '/#ship-log' },
              { k: 'A machine you can drive', line: 'A working demo OS — sample data, live behavior. Ring a sale. Try to edit the books.', cta: 'Drive it', href: '/drive' },
              { k: 'The deal itself', line: 'Own the code and the data, month to month, six-item handover if you ever leave.', cta: 'Read the standard', href: '/owned-software' },
            ].map((c) => (
              <Link key={c.k} href={c.href} className="group bg-background p-7 md:p-10 hover:bg-card/30 transition-colors">
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-faint mb-5">{c.k}</p>
                <p className="text-xl md:text-2xl font-bold text-foreground leading-snug tracking-tight text-balance">{c.line}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary font-black uppercase tracking-wide">
                  {c.cta} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ─── Who has the keyboard — accountability, not titles ─── */}
        <motion.div
          id="team"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-32 md:mb-44 scroll-mt-28"
        >
          <SectionHeading sub="Not job titles — the life of your system, stage by stage, with the person who answers for each one. No anonymous queue anywhere in it.">
            Who has <span className="text-primary">the keyboard.</span>
          </SectionHeading>
          <div className="border border-border/20 rounded-[2rem] overflow-hidden divide-y divide-border/15 bg-card/5">
            {STAGES.map((s, i) => {
              const open = openStage === s.id;
              return (
                <div key={s.id}>
                  <button
                    type="button"
                    onClick={() => setOpenStage(open ? '' : s.id)}
                    aria-expanded={open}
                    className="w-full flex items-center gap-4 px-6 md:px-8 py-5 text-left hover:bg-card/20 transition-colors"
                  >
                    <span className={`font-mono text-xs font-black tabular-nums ${open ? 'text-primary' : 'text-faint'}`}>{i + 1}</span>
                    <span className="flex-1 text-lg md:text-xl font-black uppercase italic tracking-tight text-foreground">{s.title}</span>
                    <span className="flex -space-x-2">
                      {s.people.map((p) => (
                        <span key={p} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                          <Image src={FACES[p].image} alt={p} fill className="object-cover" style={{ objectPosition: FACES[p].pos || 'center' }} sizes="32px" />
                        </span>
                      ))}
                      {s.people.length === 0 && (
                        <span className="w-8 h-8 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center font-mono text-[9px] font-black text-primary">OS</span>
                      )}
                    </span>
                    <span className={`text-primary font-black transition-transform ${open ? 'rotate-90' : ''}`} aria-hidden>›</span>
                  </button>
                  {open && (
                    <div className="px-6 md:px-8 pb-6 pt-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      <div>
                        <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400/90 mb-1.5">
                          {s.people.length ? s.people.join(' + ') + ' owns' : 'The system owns'}
                        </p>
                        <p className="text-sm md:text-[15px] text-muted-foreground font-medium leading-relaxed">{s.owns}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-red-400/80 mb-1.5">Does not own</p>
                        <p className="text-sm md:text-[15px] text-muted-foreground font-medium leading-relaxed">{s.notOwns}</p>
                        {s.reach && <p className="mt-2 text-sm font-bold text-foreground">{s.reach}</p>}
                        {s.receipt && (
                          <Link href={s.receipt.href} className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary font-black uppercase tracking-wide">
                            {s.receipt.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-sm text-muted-foreground font-medium max-w-2xl">
            Trevor Ruby, founder &mdash; he builds. Reece Roberts &mdash; client systems. Thomas Dombrowski &mdash; client
            relations. Three people, on purpose. If you&rsquo;re serious about this work and near Alexandria,{' '}
            <a href={`mailto:${BUSINESS.email}`} className="text-foreground font-bold underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">email Trevor</a>.
          </p>
        </motion.div>

        {/* ─── Origin: a ledger, not a movie ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-32 md:mb-44"
        >
          <SectionHeading>There was no <span className="text-primary">lightning-bolt day.</span></SectionHeading>
          <div className="max-w-2xl space-y-3 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-8">
            <p>For thirteen years, Found It worked inside local businesses as a marketing company.</p>
            <p>AI lowered the cost of building serious custom software enough to make it practical for those same businesses.</p>
            <p>We built one system. Then another. The software became the work.</p>
            <p>In 2026, we stopped taking new marketing clients and made Found It Software the company.</p>
            <p className="pt-2 text-xl md:text-2xl font-black uppercase italic tracking-tight text-foreground">That&rsquo;s the whole origin story.</p>
          </div>
          <div className="relative pl-8 md:pl-10">
            <div className="absolute left-[5px] md:left-[6px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border/40 to-primary/60" aria-hidden />
            <div className="space-y-8 md:space-y-10">
              {[
                ['2013', 'Found It Marketing opens in Bogata, Texas.', 'Population 1,000 and change.'],
                ['AUG 15, 2015', 'The company moves to Alexandria, Louisiana.', 'And grows up inside Cenla businesses.'],
                ['2026', 'The first owned systems ship.', 'The dated record is the ship log.'],
                ['AUG 2026', 'New marketing work ends.', 'Found It Software is the company.'],
                ['TODAY', 'Systems building and running across Louisiana.', 'The named ones are in the case studies.'],
              ].map(([d, t, sub]) => (
                <div key={d} className="relative">
                  <span className="absolute -left-8 md:-left-10 top-[7px] w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-full bg-primary shadow-[0_0_14px_rgba(255,85,0,0.5)]" aria-hidden />
                  <p className="font-mono text-xs md:text-sm font-black uppercase tracking-[0.2em] text-primary mb-1">{d}</p>
                  <p className="text-lg md:text-2xl font-black tracking-tight text-foreground leading-snug">{t}</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">{sub}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground font-medium max-w-2xl">
            The $99,000 QuickBooks story is real &mdash; it&rsquo;s evidence, not the origin.{' '}
            <Link href="/blog/moving-our-own-books" className="text-foreground font-bold underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">Read the field report</Link>.
          </p>
        </motion.div>

        {/* ─── The centerpiece ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-32 md:mb-44"
        >
          <SectionHeading sub="The most important thing about Found It is what happens without Found It. Go ahead.">
            Make us <span className="text-primary">disappear.</span>
          </SectionHeading>
          <div className="relative">
            <div aria-hidden className="absolute -inset-8 md:-inset-14 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_30%,rgba(255,85,0,0.10),transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(45%_55%_at_80%_90%,rgba(52,211,153,0.05),transparent_70%)]" />
            </div>
            <DisappearDemo />
          </div>
        </motion.div>

        {/* ─── What we are / what we are not ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-32 md:mb-44"
        >
          <SectionHeading>What we are. <span className="text-primary">What we are not.</span></SectionHeading>
          <div className="space-y-6">
            {PAIRS.map(([are, not]) => (
              <div key={are} className="max-w-2xl">
                <p className="text-lg md:text-xl font-black tracking-tight text-foreground leading-snug">{are}</p>
                <p className="text-base md:text-lg text-muted-foreground font-medium leading-snug">{not}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground font-medium leading-relaxed">
            On the AI, plainly: it lets a small team build at a speed that used to take a much larger one. It writes
            code, drafts tests, reads documentation, and helps inspect systems. Humans decide what should exist,
            control access, test the money, sit across the table, and stay accountable when something breaks.
          </p>
        </motion.div>

        {/* ─── The quiet block. Trevor's, verbatim in spirit. ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-32 md:mb-44 max-w-xl mx-auto text-center py-14 md:py-16 border-y border-border/15"
        >
          <div className="w-10 h-[3px] bg-primary/70 rounded-full mx-auto mb-8" aria-hidden />
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            One more thing, since some folks wonder. This company belongs to{' '}
            <span className="text-foreground font-bold">Jesus Christ</span>. We&rsquo;re not ashamed of Him, and
            we&rsquo;re not going to sell you with Him either. We just try to build like we&rsquo;ll answer for the
            work &mdash; because we will.
          </p>
        </motion.div>

        {/* ─── The claims audit ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-32 md:mb-44"
        >
          <SectionHeading sub="Trevor can make a claim. He cannot mark it proved. Every claim below carries its status and its receipt — and the audit is allowed to catch our own copy. It has.">
            Marketing does not get <span className="text-primary">write access.</span>
          </SectionHeading>
          <div className="border-t border-border/15">
            {CLAIMS.map((c) => (
              <div key={c.claim} className="py-8 md:py-10 border-b border-border/15 md:grid md:grid-cols-[1fr_auto] md:gap-10 md:items-start">
                <div className="max-w-2xl">
                  <p className="text-xl md:text-2xl font-black tracking-tight text-foreground leading-snug mb-3 text-balance">{c.claim}</p>
                  <p className="text-sm md:text-[15px] text-muted-foreground font-medium leading-relaxed">{c.note}</p>
                  {c.receipt && (
                    <Link href={c.receipt.href} className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary font-black uppercase tracking-wide">
                      {c.receipt.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                    </Link>
                  )}
                </div>
                <p className={`mt-4 md:mt-1.5 inline-flex items-center gap-2 font-mono text-[11px] font-black uppercase tracking-[0.15em] ${c.tone} shrink-0`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" aria-hidden />
                  {c.status}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-faint">{AUDIT_DATE} · Nothing here is dressed up as a live feed.</p>
        </motion.div>

        {/* ─── Scar tissue ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-32 md:mb-44"
        >
          <SectionHeading sub="Not the branding kind of vulnerability. The kind where reality happened and the product changed.">
            Rules we paid for.
          </SectionHeading>
          <div className="border-t border-border/15">
            {SCARS.map((s) => (
              <div key={s.date} className="py-9 md:py-12 border-b border-border/15 md:grid md:grid-cols-[200px_1fr] md:gap-12">
                <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-primary leading-relaxed mb-5 md:mb-0 md:pt-1">{s.date}</p>
                <div className="max-w-2xl">
                  <p className="text-base md:text-lg text-foreground/90 font-medium leading-relaxed">{s.happened}</p>
                  <p className="mt-4 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400/90 mb-1.5">What changed</p>
                  <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">{s.changed}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                    <p className="text-sm font-bold text-foreground">Enforced: {s.enforced}</p>
                    <Link href={s.receipt.href} className="inline-flex items-center gap-1.5 text-sm text-primary font-black uppercase tracking-wide">
                      {s.receipt.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── The place ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-32 md:mb-44"
        >
          <SectionHeading>Alexandria is not <span className="text-primary">a branding adjective.</span></SectionHeading>
          <div className="max-w-2xl space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              <span className="text-foreground font-bold">{BUSINESS.address.streetAddress}, Alexandria, Louisiana {BUSINESS.address.postalCode}.</span>{' '}
              Call first &mdash; we may be at somebody&rsquo;s shop.
            </p>
            <p>
              If you&rsquo;re in Louisiana, Mississippi, East Texas, southern Arkansas, or around Wichita, we&rsquo;ll
              drive to you and sit at your table. Everywhere else, the same people do the same work remotely.
            </p>
          </div>
          <details className="mt-6 max-w-2xl group">
            <summary className="cursor-pointer font-mono text-[11px] font-black uppercase tracking-[0.2em] text-faint hover:text-foreground transition-colors list-none">
              Outside record <span className="text-primary group-open:hidden">+</span><span className="text-primary hidden group-open:inline">−</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground font-medium leading-relaxed">
              {AWARD.year} {AWARD.full} &mdash; awarded to Found It by the {AWARD.issuer}, for the region&rsquo;s
              highest traded revenue. It&rsquo;s the one plaque we&rsquo;ll mention; receipts age better than awards.
            </p>
          </details>
        </motion.div>

        {/* ─── NOT YET — the tense kept honest ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-32 md:mb-44"
        >
          <SectionHeading sub="Most About pages convert the future into past tense. This one keeps the tense correct. Items move to the audit above only with a date and a receipt.">
            What we have <span className="text-primary">not earned yet.</span>
          </SectionHeading>
          <div className="border-t border-border/15 max-w-3xl">
            {NOT_YET.map(([thing, truth]) => (
              <div key={thing} className="py-7 md:py-8 border-b border-border/15">
                <p className="text-xl md:text-2xl font-black tracking-tight text-foreground leading-snug text-balance">
                  {thing} <span className="font-mono text-[11px] font-black uppercase tracking-[0.15em] text-amber-400 ml-2.5 align-middle whitespace-nowrap">Not yet</span>
                </p>
                <p className="mt-1.5 text-base md:text-lg text-muted-foreground font-medium leading-snug max-w-2xl">{truth}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-xl md:text-2xl font-black uppercase italic tracking-tight text-foreground">
            The systems are real. <span className="text-primary">The scale is not yet proved.</span>
          </p>
        </motion.div>

        {/* ─── The ask ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="text-center py-20 md:py-28 border-t border-border/10"
        >
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-faint leading-loose max-w-xl mx-auto mb-12">
            Audit summary — new software company · thirteen years inside local businesses · small team ·
            AI used heavily · humans accountable · real systems running · ownership written down ·
            long-term scale not yet proved. That&rsquo;s the company.
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6 text-foreground">
            Bring us <span className="text-primary">the ugly part.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-xl mx-auto mb-8">
            The spreadsheet. The notebook. The employee who knows everything. The invoice nobody followed up.
            Show us how the work really moves, and we&rsquo;ll tell you whether software should touch it.
          </p>
          <Link href="/lp/walkthrough" className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
            Show Us How It Runs
          </Link>
          <p className="mt-5 text-sm text-muted-foreground font-medium">
            About thirty minutes. The map is yours either way. If generic software is the better answer, we say so.
          </p>
          <p className="mt-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
            Or text (318) 713-3781. Trevor answers.
          </p>
        </motion.div>

      </div>
    </main>
  );
}
