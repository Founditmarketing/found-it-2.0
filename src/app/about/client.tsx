'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Trophy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FounderByline } from '@/components/FounderByline';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { AWARD, TRACK_RECORD, BUSINESS } from '@/lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

/* The team lives HERE now — /team 301s to /about#team (merged 8/16).
   Public roster law: Trevor, Reece, Thomas. */
const teamMembers = [
  { name: 'Trevor Ruby', role: 'Founder / Builder', image: '/trevorruby.jpeg' },
  { name: 'Reece Roberts', role: 'Client Systems', image: '/reese-roberts.jpeg' },
  { name: 'Thomas Dombrowski', role: 'Client Relations', image: '/thomas-dombrowski.jpeg', objectPosition: 'center 10%' },
] as { name: string; role: string; image: string; objectPosition?: string }[];

const stats = [
  { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Business' },
  { value: TRACK_RECORD.googleRating, label: 'Rating on Google' },
  { value: '0', label: 'Long-Term Contracts' },
];

/* MARKETING SALES DEAD (8/26) finally applied here too (8/29 review caught
   the lag): the retired marketing services are gone from What We Do. The
   catalog is software plus the one AI Search exception — same as SERVICES
   in site.ts. Never re-add a marketing service. */
const services = [
  { name: 'Found It OS — Custom AI Software', desc: 'One system that runs your whole business. You own the code and the data.', href: '/foundit-os' },
  { name: 'Custom App Development', desc: 'Native-feeling iOS and Android apps. You own 100% of the code.', href: '/app-development' },
  { name: 'The Software Map', desc: 'Your whole operation on one page — every screen, every automation. Free in a fitting.', href: '/map' },
  { name: 'AI Search Optimization', desc: 'When someone asks an AI who to hire, it should say you.', href: '/ai-search-optimization' },
];

const serviceArea = ['Louisiana', 'Mississippi', 'East Texas', 'Southern Arkansas', 'Wichita, Kansas'];

export default function AboutPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[900px] mx-auto px-6 relative z-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="mb-20"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">Our Story</p>
          <FounderByline
            size="lg"
            className="mb-8"
            line="Founder. Alexandria, Louisiana."
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            We Build the Software.{' '}
            <span className="text-primary">You Own It.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            Found It Software is a custom AI software company in Alexandria, Louisiana. Our flagship is <Link href="/foundit-os" className="text-foreground font-bold underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">Found It OS</Link> — one system that runs your whole business, and you own it outright. We started with one frustration: too many good local businesses were getting locked into contracts, handed off to interns, and held hostage by agencies that owned their accounts. So we built the opposite.
          </p>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            Today we build those systems for real businesses — the shop, the crew, the yard, the store: your jobs, your registers, your dispatch board, your customer book, with your years of records migrated in, not abandoned. Ask your system a question in plain English and it answers from your own data. Your first working screens are live in days, not quarters — cutover only happens after the parallel run proves it — and the price is on the website. <span className="text-foreground font-bold">You&rsquo;ll never rent software that almost fits again.</span>
          </p>

          {/* Award trust chip */}
          <div className="mt-8 inline-flex items-center gap-3 bg-amber-400/10 border border-amber-400/25 rounded-2xl px-5 py-3">
            <Trophy className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
            <span className="text-sm font-bold text-foreground leading-tight">
              {AWARD.year} {AWARD.full} <span className="text-muted-foreground font-medium">— {AWARD.issuer}</span>
            </span>
          </div>
        </motion.div>

        {/* A Note From Trevor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            A Note From Trevor
          </h2>
          <div className="bg-card/10 border border-border/20 rounded-[2rem] p-8 lg:p-10 border-l-4 border-l-primary">
            <div className="space-y-5 text-base lg:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                Last July, QuickBooks lost track of $99,000 of my own money. My books matched the bank to the penny — the software just lost it. I only caught it because building software is my whole job. That was the day this stopped being a marketing company.
              </p>
              <p>
                Now I build one thing: <span className="text-foreground font-bold">software that local businesses own.</span> One system that runs the whole operation — the tickets, the invoices, the books, the phone — fitted to how you actually work. The code and the data are yours, written into a two-page contract you can read without a lawyer. Your new system runs beside the old one, matched to the penny, until you say go. <span className="text-foreground font-bold">Nobody rents you your own business back.</span>
              </p>
              <p>
                Today, real Louisiana businesses run their whole day on systems they own — repair shops, roofers, dealerships, a $4M nursery. In {AWARD.year}, the Central Louisiana Economic Development Alliance named us the region&apos;s Highest Traded Revenue company. But the number I actually watch is simpler: our clients can leave any month with everything in hand. The door stays open on purpose.
              </p>
              <p>
                We&apos;re in Alexandria. I&apos;ll drive to your shop, sit across the table, and show you your own numbers on a screen before I ask you for anything.
              </p>
            </div>
            <p className="mt-6 text-sm font-black uppercase italic tracking-tighter text-primary">
              — Trevor Ruby, Founder
            </p>
          </div>
        </motion.div>

        {/* The Team — merged from /team (8/16). Faces follow the voice. */}
        <motion.div
          id="team"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-20 scroll-mt-28"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-3 text-foreground">
            The Team. <span className="text-primary">No Interns. No Handoffs.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-8">
            Founder-led, built and supported by a small senior team. Trevor stays directly involved
            in every fitting — and when you call, a person who knows your system picks up.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-card/15 border border-border/20 rounded-[2rem] p-5 hover:border-primary/30 transition-colors"
              >
                <div className="relative w-full aspect-[4/5] mb-5 overflow-hidden rounded-3xl bg-muted/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: member.objectPosition || 'center' }}
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="text-[11px] text-primary font-mono font-black tracking-[0.2em] uppercase opacity-80 mb-1">
                  {member.role}
                </p>
                <h3 className="text-xl font-black text-foreground uppercase italic tracking-tight">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
          {/* Engineering block (8/28): the advisor's trust gap — technical capacity
              must be visible. Role-based and honest; no invented people. */}
          <div className="mt-6 bg-card/15 border border-border/20 rounded-[2rem] p-6 md:p-8">
            <p className="text-[11px] text-primary font-mono font-black tracking-[0.2em] uppercase opacity-80 mb-2">
              Engineering &amp; Systems
            </p>
            <p className="text-base text-muted-foreground font-medium leading-relaxed max-w-3xl">
              Every Found It system is built on one shared core already running in production across Louisiana businesses. Each fitting is made
              with a senior development partner whose security
              specification gates every build, plus dedicated build support for migrations and
              testing. The people who build your system are the people who answer when it rings.
            </p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground font-medium">
            Think you belong here? We&rsquo;re a small senior team on purpose — but if you&rsquo;re
            serious about this work and near Alexandria,{' '}
            <a
              href={`mailto:${BUSINESS.email}`}
              className="text-foreground font-bold underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors"
            >
              email Trevor
            </a>
            .
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card/15 border border-border/20 rounded-2xl p-5 text-center">
                <p className="text-3xl font-black text-primary italic tracking-tighter">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Where We Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6 text-foreground">
            Where We Work
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-8">
            We&apos;re a local team first. If you&apos;re in Louisiana, Mississippi, East Texas, up into southern Arkansas, or around Wichita, Kansas, we&apos;ll come to you, sit down at your office, and build your strategy face-to-face. Everywhere else, the same team does the same work remotely.
          </p>
          <div className="flex flex-wrap gap-3">
            {serviceArea.map((region, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-card/15 border border-primary/20 rounded-full px-4 py-2 text-sm font-bold text-foreground"
              >
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                {region}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href} className="group bg-card/10 border border-border/20 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-sm font-black uppercase italic tracking-tighter text-foreground mb-1 group-hover:text-primary transition-colors">{svc.name}</h3>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">{svc.desc}</p>
                <span className="text-xs text-primary font-bold flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="text-center py-16 border-t border-border/10"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
            Fifteen Minutes{' '}
            <span className="text-primary">With Trevor.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">
            A conversation about your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto max-w-sm">
              <LiquidButton className="w-full sm:w-auto px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
                Book a Free Call
              </LiquidButton>
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
