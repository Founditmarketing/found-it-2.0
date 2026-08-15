'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Trophy } from 'lucide-react';
import Link from 'next/link';
import { GuideCta } from '@/components/GuideCta';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { AWARD, TRACK_RECORD } from '@/lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Business' },
  { value: TRACK_RECORD.googleRating, label: 'Rating on Google' },
  { value: '0', label: 'Long-Term Contracts' },
];

const services = [
  { name: 'Found It OS — Custom AI Software', desc: 'One system that runs your whole business. You own the code and the data.', href: '/foundit-os' },
  { name: 'Google Ads Management', desc: 'Weekly optimization, real conversion tracking, transparent reporting.', href: '/google-ads-management' },
  { name: 'Custom Web Design', desc: 'Fast, mobile-first websites that turn visitors into calls. You own everything.', href: '/web-design' },
  { name: 'AI Search Optimization', desc: 'Get recommended by ChatGPT, Perplexity, and Google AI.', href: '/ai-search-optimization' },
  { name: 'Social Media Management', desc: 'Real content, real strategy. We create it, you approve it.', href: '/social-media-management' },
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            We Build the Software.{' '}
            <span className="text-primary">You Own It.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            Found It Software is a custom AI software and digital marketing company in Alexandria, Louisiana. Our flagship is <Link href="/foundit-os" className="text-foreground font-bold underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">Found It OS</Link> — one system that runs your whole business, and you own it outright. We started with one frustration: too many good local businesses were getting locked into contracts, handed off to interns, and held hostage by agencies that owned their accounts. So we built the opposite.
          </p>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            Today we build those systems for real businesses — the shop, the crew, the yard, the store: your jobs, your registers, your dispatch board, your customer book, with your years of records professionally migrated in, not abandoned. Ask your system a question in plain English and it answers from your own data. Installed in days, not quarters — and unlike everyone else in software, the price is on the website. <span className="text-foreground font-bold">You&rsquo;ll never rent software that almost fits again.</span>
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
                I started Found It Marketing because I was tired of watching good local businesses get burned by agencies. Long contracts that trapped them. Junior account managers learning on their dime. Ad accounts and websites held hostage the moment they tried to leave.
              </p>
              <p>
                So we built the opposite. At Found It, <span className="text-foreground font-bold">you own everything</span> — your ad accounts, your code, your data. There are no long-term contracts; we earn your business every single month by getting results. A senior strategist works on your account, not an intern Googling answers. And because we&apos;re based right here in Alexandria, we&apos;ll actually drive to your office and sit across the table from you.
              </p>
              <p>
                That approach has taken us a long way. In {AWARD.year}, the Central Louisiana Economic Development Alliance named us the region&apos;s Highest Traded Revenue company.
              </p>
              <p>
                But the thing I&apos;m proudest of isn&apos;t an award. It&apos;s that our clients stay because they want to — not because a contract makes them. That&apos;s the whole point.
              </p>
            </div>
            <p className="mt-6 text-sm font-black uppercase italic tracking-tighter text-primary">
              — Trevor Ruby, Founder
            </p>
          </div>
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
            We&apos;re a local team first. If you&apos;re in Louisiana, Mississippi, East Texas, up into southern Arkansas, or around Wichita, Kansas, we&apos;ll come to you, sit down at your office, and build your strategy face-to-face. Everywhere else, we deliver the same senior-level work remotely.
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
            Call Trevor.{' '}
            <span className="text-primary">15 Minutes.</span>
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
            <GuideCta location="about_cta" className="max-w-sm sm:max-w-none" />
          </div>
        </motion.div>

      </div>
    </main>
  );
}
