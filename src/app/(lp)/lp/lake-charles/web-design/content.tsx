'use client';

import {
  LPLayout,
  LPNav,
  TrustBar,
  BenefitsGrid,
  JohnCTA,
  FAQSection,
  LPFormSection,
  LPFooter,
  ExitIntent,
} from '@/components/lp';
import { LPHero } from '@/components/lp/LPHero';
import { ClientLogoBar } from '@/components/lp/ClientLogoBar';
import { ProcessTimeline } from '@/components/lp/ProcessTimeline';
import { FinalCTA } from '@/components/lp/FinalCTA';
import { PricingTransparency } from '@/components/lp/PricingTransparency';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowUpRight, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Lake Charles Pain Points ─── */
const painPoints = [
  { title: "Your site looks like a 2015 WordPress template", sub: "Decision-makers can spot dated tech in 3 seconds. So can your competitors." },
  { title: "Phone isn't ringing despite the traffic", sub: "Traffic without conversion paths is just expensive analytics noise." },
  { title: "Site doesn't load on a phone in the field", sub: "Most B2B buyers check you on mobile during job walks. Slow site, lost bid." },
  { title: "Looks generic next to out-of-state competitors", sub: "Houston and Dallas agencies are bidding for your contracts. They look the part. Make sure you do too." },
];

/* ─── Industrial Service Features ─── */
const serviceFeatures = [
  { title: 'Built for Your Industry', description: "We've built for contractors, fabricators, energy service, automotive, manufacturing. We speak your language." },
  { title: 'Conversion-First Design', description: "We design for the bid request, not the design award. Forms, calls, and quotes are the whole game." },
  { title: 'Modern Stack, Industrial Reliability', description: "Next.js, Vercel, Tailwind. The fastest, most secure setup available. No WordPress security holes." },
  { title: 'Local Louisiana Team', description: "We're based in Alexandria, 90 minutes from Lake Charles. Real partnership, not offshore overflow." },
  { title: 'Built for Mobile First', description: "Your buyers are checking you from job sites, trucks, and trailers. Site has to work there first." },
  { title: 'You Own Everything', description: "Your domain, your hosting, your code, your content. No vendor lock-in. Ever." },
];

/* ─── Industrial Portfolio ─── */
const portfolioItems = [
  { name: 'Leonard Truck & Trailer', vertical: 'TRUCKING', gradient: 'from-slate-800/80 via-zinc-700/50 to-stone-600/30' },
  { name: 'Magnolia State Construction', vertical: 'CONSTRUCTION', gradient: 'from-amber-900/70 via-orange-800/50 to-yellow-700/30' },
  { name: 'Shelton Energy Solutions', vertical: 'ENERGY', gradient: 'from-emerald-900/70 via-teal-800/50 to-green-700/30' },
  { name: 'Glass Tint Etc', vertical: 'AUTOMOTIVE', gradient: 'from-sky-900/70 via-blue-800/50 to-cyan-700/30' },
  { name: 'Work Truck One', vertical: 'FLEET', gradient: 'from-red-900/70 via-orange-800/50 to-amber-700/30' },
  { name: 'JLS Landscaping & Pools', vertical: 'COMMERCIAL', gradient: 'from-teal-900/70 via-emerald-800/50 to-green-700/30' },
  { name: 'Charles Gray Construction', vertical: 'GENERAL CONTRACTOR', gradient: 'from-orange-900/70 via-amber-800/50 to-yellow-700/30' },
  { name: 'Sniperoff Road', vertical: 'OFF-ROAD', gradient: 'from-zinc-800/80 via-neutral-700/50 to-stone-600/30' },
];

const verticalColors: Record<string, string> = {
  TRUCKING: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  CONSTRUCTION: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  ENERGY: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  AUTOMOTIVE: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
  FLEET: 'bg-red-500/20 text-red-400 border-red-500/30',
  COMMERCIAL: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
  'GENERAL CONTRACTOR': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'OFF-ROAD': 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30',
};

/* ─── FAQ Items (client-side for accordion interaction) ─── */
const faqItems = [
  { question: 'Do you work with B2B industrial businesses?', answer: "Yes — it's a big part of what we do. Our portfolio includes commercial trucking, construction, fabrication, oilfield services, utility contractors, and industrial supply businesses. We understand the buyer journey for a quote request from a procurement manager versus an emergency call from a foreman." },
  { question: 'Can your site integrate with our CRM or quoting system?', answer: "Yes. We integrate with most major CRMs (HubSpot, Salesforce, Pipedrive, Zoho), and we can build custom integrations with quoting tools, parts databases, or operational software. Tell us what you use during the discovery call and we'll scope it." },
  { question: 'How long does the full process take?', answer: "A standard build is 4-6 weeks from kickoff to launch. Larger sites with custom integrations or 25+ pages extend to 8-10 weeks. We give you a firm timeline after the discovery call." },
  { question: 'What if our business has technical specs, certifications, or compliance content?', answer: "We've built sites with detailed certification displays, equipment specs, MSDS documents, and ISN/safety compliance content. We know how to make technical content accessible without dumbing it down — your buyers should be able to find what they need fast." },
  { question: 'Do you build for mobile-first?', answer: "Yes. Your buyers are checking you from trucks, job sites, and trailers. We design mobile-first and test on real devices, not just browser emulators. Every site we launch hits 90+ Lighthouse mobile performance." },
  { question: 'What if we need ongoing updates after launch?', answer: "Included: 60 days of free post-launch optimization. After that, most clients move to a monthly maintenance plan starting at $250/mo — covers content updates, security patches, performance monitoring, and ongoing optimization. No long contracts." },
];

/* ─── Case Study Data ─── */
const caseStudyStats = [
  { value: '3x', label: 'Qualified Inquiries' },
  { value: '+40%', label: 'Avg Deal Size' },
  { value: '<30 days', label: 'Time to First Lead' },
];

/* ─── Portfolio Grid Component ─── */
function IndustrialPortfolio() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="mb-14">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-3 opacity-60">Our Work</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">
            Built for Businesses<br />Like Yours
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolioItems.map((item, i) => {
            const badgeColor = verticalColors[item.vertical] || 'bg-white/10 text-white/60 border-white/20';
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: ease as any }}
                onClick={() => setSelected(i)}
                className="group rounded-2xl overflow-hidden border border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 text-left bg-card/10 backdrop-blur-sm"
              >
                <div className={`relative h-[160px] bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  <span className="relative z-10 text-lg font-black text-white/90 italic tracking-tighter text-center px-4 drop-shadow-lg">{item.name}</span>
                  <span className={`absolute top-3 right-3 text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border ${badgeColor}`}>{item.vertical}</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground truncate">{item.name}</span>
                  <span className="text-xs text-primary font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                    View site <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm" onClick={() => setSelected(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: ease as any }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[101] w-auto sm:w-full sm:max-w-xl bg-background border border-border/30 rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className={`relative h-48 bg-gradient-to-br ${portfolioItems[selected].gradient} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20" />
                <span className="relative z-10 text-3xl font-black text-white italic tracking-tighter drop-shadow-lg">{portfolioItems[selected].name}</span>
                <button onClick={() => setSelected(null)} className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors" aria-label="Close">
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-muted-foreground font-medium leading-relaxed">Case study details coming soon. Contact John for a live portfolio walkthrough.</p>
                <Link href="#lp-form" onClick={() => setSelected(null)} className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-4 rounded-xl text-sm hover:shadow-lg hover:shadow-primary/20 transition-shadow">
                  Get a Free Concept Call <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─── Main Content ─── */
export function LakeCharlesWebDesignContent() {
  return (
    <LPLayout ctaLabel="Get a Free Concept Call">
      <LPNav />
      <LPHero
        line1="Custom Websites for"
        line2="Southwest Louisiana's Industrial Backbone."
        accentWord="Industrial Backbone."
        subheadline="We build websites for contractors, fabricators, oilfield services, manufacturers, and the businesses that power Lake Charles. No templates. No theme stores. Built like your operation — to last and to perform."
        ctaText="Get a Free Concept Call"
      />
      <ClientLogoBar tagline="Trusted by industrial, construction, and service businesses across Southwest Louisiana." />

      <TrustBar stats={[
        { value: '100+', label: 'Sites Launched' },
        { value: '90+', label: 'Avg. Lighthouse Score' },
        { value: '2.4x', label: 'Avg. Lead Increase' },
        { value: '13+', label: 'Years Building' },
      ]} />

      {/* ─── Pain Points ─── */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-16">
            <p className="text-red-400/80 font-mono text-xs font-black uppercase tracking-[0.4em] mb-4">The Problem</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">
              Why Your Current Site<br />
              <span className="text-red-400/80">Isn&apos;t Winning Bids</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {painPoints.map((point, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7, ease: ease as any }}
                className="bg-red-500/[0.03] border border-red-500/10 rounded-2xl p-6 lg:p-8 hover:border-red-500/20 transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                  <AlertTriangle className="w-5 h-5 text-red-400/80" />
                </div>
                <h3 className="text-lg font-black uppercase italic tracking-tighter mb-2 text-foreground">{point.title}</h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">{point.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsGrid heading="The Found It Difference" subheading="We build for serious businesses that do serious work." benefits={serviceFeatures} />
      <IndustrialPortfolio />
      <ProcessTimeline />

      {/* ─── Case Study ─── */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: ease as any }}
            className="bg-card/15 backdrop-blur-2xl border border-border/20 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <div className="bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent px-8 lg:px-14 py-6 border-b border-border/10">
              <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] opacity-60">Proof</p>
            </div>
            <div className="p-8 lg:p-14 space-y-10">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground">
                How Leonard Truck & Trailer <span className="text-primary">Modernized</span> for the Commercial Fleet Market
              </h3>
              <div className="grid grid-cols-3 gap-4 lg:gap-8">
                {caseStudyStats.map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: ease as any }}
                    className="bg-primary/5 border border-primary/10 rounded-2xl p-4 lg:p-6 text-center"
                  >
                    <p className="text-2xl lg:text-4xl font-black text-primary italic tracking-tighter">{stat.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Leonard came to us with a site that looked dated and converted poorly. We rebuilt on a modern stack with finance calculator, real fleet specs, and conversion-optimized inquiry forms. Within 60 days of launch, qualified inquiry volume tripled and average deal size increased 40%.
              </p>
              <p className="text-xs text-muted-foreground/40 italic">Real client. Results anonymized for confidentiality. Specific results vary by industry and market.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <PricingTransparency />

      <JohnCTA
        heading="Tell John About Your Business"
        body="Get a free concept call where we'll walk you through what your site could be. No pitch deck, no junior account managers — just a candid conversation about your business and a custom design direction."
        ctaLabel="Schedule My Free Concept Call"
      />

      <LPFormSection
        heading="See Your Site Reimagined"
        subheading="Tell us about your business and we'll show you what a conversion-focused website looks like for your market."
        benefits={[
          'Live competitive website teardown',
          'Custom design direction & mockup concept',
          'Performance & SEO audit of your current site',
          'Zero obligation — the insights are yours to keep',
        ]}
        source="lp_web_design_lc"
        pageSlug="lake-charles-web-design"
      />

      <FAQSection items={faqItems} />

      {/* ─── Final CTA (custom for LC) ─── */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: ease as any }}>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6 text-foreground">
              Your Competitors Are Betting on{' '}
              <span className="text-primary drop-shadow-[0_0_20px_rgba(249,115,22,0.2)]">Better Marketing.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium italic mb-10 max-w-2xl mx-auto leading-relaxed">
              Make sure you&apos;re the one they&apos;re losing bids to. Talk to John.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-18 text-base sm:text-lg tracking-[0.1em] shadow-2xl shadow-primary/20">
                Book a Free Concept Call
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />

      <ExitIntent
        headline="Before you go — the founder's guide."
        subheadline="10 questions to ask before you sign with any web designer. Saves you from $20K mistakes."
        magnetTitle="The Founder's Guide to Choosing a Web Designer"
        ctaLabel="Send Me The Guide"
      />
    </LPLayout>
  );
}
