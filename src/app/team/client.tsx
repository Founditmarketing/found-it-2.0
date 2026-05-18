'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function TeamClient() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6 relative z-10">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="mb-16">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">The Team</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            Small Team.{' '}<span className="text-primary">Senior People.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
            We don&apos;t have 50 employees and a sales floor. We have senior strategists who do the work themselves. When you call, you talk to the person managing your account.
          </p>
        </motion.div>

        {/* John — the lead */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-8 lg:p-10 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <span className="text-3xl font-black text-primary italic">J</span>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-1">John Caldwell</h2>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 mb-4">Founder & Lead Strategist</p>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-4">
                13+ years in digital marketing. Manages every client relationship directly. Built campaigns that generated $42K/month from $4.2K in ad spend. Your strategist, not a middleman.
              </p>
              <a href={phoneHref} onClick={() => trackCallClick()} className={`text-sm text-primary font-bold hover:underline ${CALLRAIL_CLASS}`}>
                {phoneDisplay}
              </a>
            </div>
          </div>
        </motion.div>

        {/* How we work */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6, ease }}
          className="bg-card/10 border border-border/15 rounded-2xl p-8 lg:p-10 mb-16"
        >
          <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground mb-5">How We Work</h3>
          <div className="space-y-4">
            {[
              'You talk to the person doing the work. No sales team, no account coordinators, no hand-offs.',
              'Small client roster on purpose. We take fewer clients so we can actually focus.',
              'Based in Alexandria, LA. Available by phone, text, or email. We respond fast.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary text-xs font-black mt-0.5">•</span>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="text-center py-12 border-t border-border/10"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
            Want to Talk?{' '}<span className="text-primary">15 Minutes.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">No pitch. Just a conversation about your business.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">Book a Free Call</LiquidButton>
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
