'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function AIVisibilityClient() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[800px] mx-auto px-6 relative z-10">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="text-center mb-16">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">AI Visibility</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            Does AI Recommend{' '}<span className="text-primary">Your Business?</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed mb-10">
            Your customers are asking ChatGPT, Perplexity, and Google AI who to hire. We&apos;ll check if you&apos;re being recommended — for free.
          </p>
          <Link href="/ai-search-optimization#lead-form">
            <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
              Get My Free AI Visibility Audit
            </LiquidButton>
          </Link>
          <p className="text-sm text-muted-foreground/50 font-medium mt-4">Takes 2 minutes. We&apos;ll send your report within 24 hours.</p>
        </motion.div>

        {/* What we check */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-8 lg:p-10 mb-16"
        >
          <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground mb-5">What We Check</h3>
          <div className="space-y-4">
            {[
              'ChatGPT — Does it recommend your business when asked about your industry?',
              'Perplexity — Are you cited as a source when people search your category?',
              'Google AI Overviews — Do you appear in the AI summary at the top of search?',
              'Gemini — Does Google\'s AI assistant know you exist?',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary text-xs font-black mt-0.5">•</span>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="text-center py-12 border-t border-border/10"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
            Find Out Now.{' '}<span className="text-primary">Free.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/ai-search-optimization#lead-form">
              <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">Get My AI Audit</LiquidButton>
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
