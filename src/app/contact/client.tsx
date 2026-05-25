'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const contactMethods = [
  { icon: Phone, label: 'Call John directly', value: phoneDisplay, href: phoneHref, onClick: () => trackCallClick(), className: CALLRAIL_CLASS },
  { icon: Mail, label: 'Email', value: 'john@founditmarketing.com', href: 'mailto:john@founditmarketing.com' },
  { icon: MapPin, label: 'Location', value: 'Alexandria, Louisiana' },
  { icon: Clock, label: 'Response time', value: 'Usually within 2 hours' },
];

export default function ContactClient() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[800px] mx-auto px-6 relative z-10">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="text-center mb-16">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">Contact</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            Call John.{' '}<span className="text-primary">15 Minutes.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            No pitch. No junior account managers. Just a straight answer about what would work for your business.
          </p>
        </motion.div>

        {/* Book a call CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-8 lg:p-10 text-center mb-10"
        >
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-3">Fastest Way to Reach Us</h2>
          <p className="text-sm text-muted-foreground font-medium mb-6">Pick a service page below and fill out the form. John will call you back — usually within 2 hours.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Google Ads Audit', href: '/lp/google-ads-management#lp-form' },
              { label: 'Web Design Concept', href: '/lp/web-design#lp-form' },
              { label: 'AI Search Audit', href: '/lp/ai-search-seo#lp-form' },
              { label: 'Social Media Plan', href: '/lp/social-media-management#lp-form' },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group flex items-center justify-between bg-card/10 border border-border/15 rounded-xl px-5 py-4 hover:border-primary/25 transition-all">
                <span className="text-sm font-bold text-foreground">{item.label}</span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Direct contact */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6, ease }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16"
        >
          {contactMethods.map((method, i) => (
            <div key={i} className="bg-card/10 border border-border/15 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <method.icon className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{method.label}</span>
              </div>
              {method.href ? (
                <a href={method.href} onClick={method.onClick} className={`text-foreground font-bold text-sm hover:text-primary transition-colors ${method.className || ''}`}>
                  {method.value}
                </a>
              ) : (
                <p className="text-foreground font-bold text-sm">{method.value}</p>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}
