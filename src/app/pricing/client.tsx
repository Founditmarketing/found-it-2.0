'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

const ease = [0.16, 1, 0.3, 1] as const;

/* Fee structures below use only the approved numbers: Ads ($1,500–$5,000/mo
   typical ad spend + flat management fee; $500-wasted-spend-or-$50-gift-card
   audit guarantee), web design (flat quote, 60 days free post-launch
   optimization, maintenance from $250/mo), social (flat monthly), apps (fixed
   price after a free blueprint, 8–12 weeks), AI automation (flat monthly,
   live in 1–2 weeks), Found It OS (one number quoted in person after the free
   fitting — never dollar amounts or fee structure). No invented sticker prices. */
const services = [
  {
    name: 'Found It OS',
    price: 'One Flat Number',
    note: 'Quoted in plain English at your free fitting, scoped to what your business actually runs on. No per-register fees, no surprise add-ons.',
    features: [
      'Free fitting first — we map how your business runs',
      'Runs beside your old system until the books match to the penny',
      'You own the code and the data',
      'Month-to-month — if we part ways, the system stays yours',
    ],
    cta: 'Get a Free Fitting',
    detailsHref: '/foundit-os',
  },
  {
    name: 'Google Ads Management',
    price: 'Flat Monthly Fee',
    note: 'Most local businesses run $1,500–$5,000/mo in ad spend, paid straight to Google. Your management fee is flat, scoped to the account on the free audit.',
    features: [
      'Free audit first — if we can’t find $500+ in wasted spend, we send you a $50 gift card',
      'Weekly optimization',
      'Real conversion tracking',
      'You own your ad account',
    ],
    cta: 'Get a Free Audit',
    detailsHref: '/google-ads-management',
  },
  {
    name: 'Custom Web Design',
    price: 'Flat Project Quote',
    note: 'One flat build price up front — no hourly billing. You see the full number before we write a line of code.',
    features: [
      'Custom design — no templates',
      '60 days free post-launch optimization',
      'Maintenance from $250/month after launch',
      'You own the code and domain',
    ],
    cta: 'Get a Flat Quote',
    detailsHref: '/web-design',
  },
  {
    name: 'AI Search Optimization',
    price: 'Flat Monthly Fee',
    note: 'Scoped up front after your free AI visibility audit — the fee doesn’t move once it’s in writing.',
    features: [
      'ChatGPT, Perplexity, Google AI',
      'Monthly visibility tracking',
      'Schema + entity optimization',
      'Competitive AI audit',
    ],
    cta: 'Get a Free AI Audit',
    detailsHref: '/ai-search-optimization',
  },
  {
    name: 'Social Media Management',
    price: 'Flat Monthly Fee',
    note: 'One simple monthly price scoped to your platforms and volume — usually less than a part-time hire.',
    features: [
      'We create all content',
      'You approve before posting',
      'Paid + organic strategy',
      'Monthly performance reports',
    ],
    cta: 'Get a Flat Quote',
    detailsHref: '/social-media-management',
  },
  {
    name: 'Custom App Development',
    price: 'Fixed Project Price',
    note: 'Fixed price after a free blueprint session — typically 8 to 12 weeks to launch.',
    features: [
      'Free blueprint before you spend a dime',
      'Fixed price — no hourly creep',
      'Typically 8–12 weeks to launch',
      'You own 100% of the codebase',
    ],
    cta: 'Book a Free Blueprint',
    detailsHref: '/app-development',
  },
  {
    name: 'AI Marketing Automation',
    price: 'Flat Monthly Fee',
    note: 'Scoped at a free demo. Live in 1 to 2 weeks.',
    features: [
      'Instant lead follow-up',
      'AI voice + text agents',
      'Automated appointment setting',
      'Free demo before you commit',
    ],
    cta: 'Book a Free Demo',
    detailsHref: '/ai-marketing',
  },
];

export default function PricingClient() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="text-center mb-10"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">Pricing</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            One Flat Fee.{' '}
            <span className="text-primary">Scoped Up Front.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Every service is a flat fee you see in writing before you pay a dime. No hourly billing. No hidden costs. No long-term contracts. Month-to-month on everything.
          </p>
        </motion.div>

        {/* Why no sticker prices — the honest explainer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: ease as any }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <p className="text-sm text-muted-foreground font-medium leading-relaxed">
            <span className="text-foreground font-bold">Why no price tags?</span> Because the right number depends on your market and your goals — a plumber in Alexandria doesn&apos;t pay what a law firm in Baton Rouge pays. We scope it on a free call, you get the exact flat fee in writing, and it doesn&apos;t change.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: ease as any }}
              className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8 flex flex-col"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">{svc.name}</p>
              <p className="text-2xl font-black text-foreground italic tracking-tighter mb-3">{svc.price}</p>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-5">{svc.note}</p>
              <div className="space-y-3 flex-grow mb-6">
                {svc.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <motion.div whileTap={{ scale: 0.97 }}
                  className="w-full text-center font-black uppercase italic tracking-tighter py-3.5 rounded-xl text-sm bg-card/30 border border-border/20 text-foreground hover:border-primary/30 hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  {svc.cta} <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
              <Link
                href={svc.detailsHref}
                className="mt-3 text-center text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                Service details →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Fine Print */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="bg-card/10 border border-border/20 rounded-2xl p-6 lg:p-8 mb-16"
        >
          <h3 className="text-sm font-black uppercase italic tracking-tighter text-foreground mb-4">How It Works</h3>
          <div className="space-y-3">
            {[
              'No setup fees on ads management.',
              'Google Ads audit guarantee: if we can’t find at least $500 in wasted spend, we send you a $50 gift card.',
              'Web design is a one-time build cost with 60 days of free post-launch optimization. Maintenance plans start at $250/mo.',
              'You pay ad spend directly to Google — we never mark it up or bundle it.',
              'Apps are fixed-price after a free blueprint — typically 8 to 12 weeks to launch.',
              'Month-to-month on all services. Cancel with 30 days notice.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary text-xs font-black mt-0.5">•</span>
                <p className="text-sm text-muted-foreground font-medium">{item}</p>
              </div>
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
            Not Sure What You Need?{' '}
            <span className="text-primary">Ask Trevor.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">
            15-minute call. No pitch. He&apos;ll tell you what makes sense for your business and budget — and give you the exact flat number.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
                Book a Free Call
              </LiquidButton>
            </Link>
            <a href={phoneHref} onClick={() => trackCallClick()} className={`flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold ${CALLRAIL_CLASS}`}>
              <Phone className="w-4 h-4" /> {phoneDisplay}
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
