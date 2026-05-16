'use client';

import { LPLayout, LPNav, TrustBar, JohnCTA, FAQSection, LPFormSection, LPFooter, ExitIntent } from '@/components/lp';
import { SocialMediaHero } from '@/components/lp/SocialMediaHero';
import { ContentGallery } from '@/components/lp/ContentGallery';
import { PainPoints } from '@/components/lp/PainPoints';
import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { AlertTriangle, Quote, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1] as const;

const painPoints = [
  { title: 'Posting consistently but seeing zero engagement', desc: 'Consistency without strategy is just noise. You need content that stops the scroll.' },
  { title: "Don't have time to create content yourself", desc: 'Running a business is a full-time job. Social shouldn\'t be your second one.' },
  { title: "Paid ads running but can't tell if they're working", desc: 'If you don\'t know your ROAS, you\'re guessing. We track every dollar.' },
  { title: 'Your social looks like every other business', desc: 'Stock photos and generic captions don\'t build brands. Custom content does.' },
];

const faqItems = [
  { question: 'Which platforms do you manage?', answer: 'Facebook, Instagram, LinkedIn, TikTok, and Google Business Profile. Most local businesses see the highest ROI from Facebook + Instagram, which is where we typically recommend starting.' },
  { question: 'Do you create the content or do I provide it?', answer: 'We create everything — photography direction, graphic design, copywriting, and scheduling. You just approve. If you have existing brand assets or photos, we incorporate those too.' },
  { question: 'Can I approve posts before they go live?', answer: 'Absolutely. Every post goes through an approval workflow before publishing. You see everything in advance and can request changes. Nothing goes live without your green light.' },
  { question: "What's included in paid ads management?", answer: 'Campaign strategy, audience research, creative production, A/B testing, weekly optimization, and detailed performance reporting. You pay ad spend directly to the platform — full transparency.' },
  { question: 'Is there a contract?', answer: 'Month-to-month. We recommend a 90-day initial commitment to see real traction, but we never lock you in. Results earn your business, not paperwork.' },
];

export function SocialMediaLPContent() {
  return (
    <LPLayout ctaLabel="Get Free Content Plan">
      <LPNav />
      <SocialMediaHero />
      <TrustBar stats={[
        { value: '100+', label: 'Businesses Managed' },
        { value: '13+', label: 'Years Experience' },
        { value: '4.9★', label: 'Client Rating' },
        { value: '48', label: 'States Served' },
      ]} />

      {/* Pain Points — inline for this lean page */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-14">
            <p className="text-red-400/80 font-mono text-xs font-black uppercase tracking-[0.4em] mb-4">The Problem</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">Sound Familiar?</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {painPoints.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6, ease: ease as any }}
                className="bg-red-500/[0.03] border border-red-500/10 rounded-2xl p-5 hover:border-red-500/20 transition-all duration-500"
              >
                <AlertTriangle className="w-5 h-5 text-red-400/70 mb-3" />
                <h3 className="text-sm font-black uppercase italic tracking-tighter mb-1 text-foreground">{p.title}</h3>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <ContentGallery />

      {/* Case Study — inline */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: ease as any }}
            className="bg-card/15 backdrop-blur-2xl border border-border/20 rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <div className="bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent px-8 lg:px-12 py-5 border-b border-border/10">
              <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] opacity-60">Case Study</p>
            </div>
            <div className="p-8 lg:p-12 space-y-8">
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground">
                How a Restaurant Client Grew Instagram <span className="text-primary">400%</span> and Tripled Weekend Reservations
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[{ v: '400%', l: 'Follower Growth' }, { v: '3x', l: 'Weekend Bookings' }, { v: '12K', l: 'Monthly Reach' }].map((s, i) => (
                  <div key={i} className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                    <p className="text-2xl font-black text-primary italic tracking-tighter">{s.v}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm">
                A local restaurant was posting sporadically with phone photos and generic captions. We built a content strategy around behind-the-scenes kitchen content, seasonal menu highlights, and user-generated reviews. Combined with targeted Instagram ads within a 15-mile radius, weekend reservations tripled within 90 days.
              </p>
              <div className="relative bg-card/20 border border-border/20 rounded-xl p-5">
                <Quote className="w-6 h-6 text-primary/20 absolute top-3 right-3" />
                <p className="text-foreground italic font-bold text-sm leading-relaxed mb-3">&ldquo;We went from 200 followers to over 1,000 in three months. But more importantly, we can see it in the reservations. Friday and Saturday nights are packed.&rdquo;</p>
                <p className="text-xs text-muted-foreground font-black uppercase tracking-wider">— Owner, [Name Redacted]</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <JohnCTA heading="Get a Custom 30-Day Content Plan" body="John will build you a free 30-day content plan tailored to your business, your audience, and your goals. No templates, no commitment — just a real plan you can use." ctaLabel="Get My Free Content Plan" />
      <LPFormSection heading="Get Your Free 30-Day Content Plan" subheading="Tell us about your business and we'll create a custom content calendar you can start using immediately." benefits={['Custom 30-day content calendar', 'Platform-specific strategy', 'Content pillar recommendations', 'Zero obligation — the plan is yours to keep']} source="lp_social" pageSlug="social-media" />
      <FAQSection items={faqItems} />

      {/* Final CTA — inline */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: ease as any }}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6 text-foreground">
              Stop Posting <span className="text-primary">Into the Void.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-10 max-w-xl mx-auto">Get a real strategy. Book a 15-min call with John.</p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base tracking-[0.1em] shadow-2xl shadow-primary/20">Book My Free Call</LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
      <ExitIntent headline="Before you scroll away..." subheadline="Grab 30 social media post ideas your customers actually want to see." magnetTitle="30 Social Media Post Ideas Your Customers Actually Want to See" ctaLabel="Download Free Post Ideas" />
    </LPLayout>
  );
}
