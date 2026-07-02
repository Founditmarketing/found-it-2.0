'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { VideoTestimonials } from '@/components/portfolio/VideoTestimonials';
import { PortfolioStrip } from '@/components/portfolio/PortfolioStrip';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

const ease = [0.16, 1, 0.3, 1] as const;

interface CaseStudy {
  client: string;
  industry: string;
  result: string;
  stats: { value: string; label: string }[];
  story: string;
}

const caseStudies: CaseStudy[] = [
  {
    client: 'National Equipment Dealer',
    industry: 'Heavy Equipment',
    result: 'Local lot → shipping to 48 states',
    stats: [
      { value: '$500M+', label: 'Revenue Growth' },
      { value: '48', label: 'States Reached' },
    ],
    story: 'Started with $5K/month. We built the digital infrastructure — Google Ads, SEO, and a conversion-optimized site — that turned a local dealership into a national volume dealer.',
  },
  {
    client: 'Total Family Solutions',
    industry: 'Healthcare',
    result: 'Outranked ZocDoc and BetterHelp',
    stats: [
      { value: '349%', label: 'Traffic Increase' },
      { value: 'Top 3', label: 'Map Pack Rank' },
    ],
    story: 'They were invisible against billion-dollar aggregators. We got them to Top 3 in Maps and outranking ZocDoc, Psychology Today, and BetterHelp for their local market.',
  },
  {
    client: 'Stone Automotive',
    industry: 'Auto Repair',
    result: '750 calls in 5 months',
    stats: [
      { value: '750', label: 'Organic Calls' },
      { value: '150/mo', label: 'Avg Monthly Calls' },
    ],
    story: 'Auto shops live and die by the phone. We drove 150+ high-intent calls per month from their Google Business Profile alone — bays full, mechanics busy.',
  },
  {
    client: 'Weiss & Goldring',
    industry: 'Luxury Retail',
    result: 'The only AI recommendation for luxury suits',
    stats: [
      { value: '#1', label: 'AI Recommendation' },
      { value: 'The Answer', label: 'ChatGPT Position' },
    ],
    story: "When someone asks ChatGPT or Google AI for luxury suit recommendations, our client isn't on a list — they are the answer. That's AI search optimization.",
  },
  {
    client: "Smoker's Heaven",
    industry: 'Retail',
    result: '1,169 direction requests in 5 months',
    stats: [
      { value: '1,169', label: 'Direction Requests' },
      { value: '+17.8%', label: 'Y/Y Foot Traffic' },
    ],
    story: "For retail, clicks don't matter — customers walking through the door matters. We optimized for Google Maps direction requests and drove 7+ new customers to the store daily.",
  },
  {
    client: 'Ducote Roofing',
    industry: 'Roofing & Construction',
    result: 'Grew call volume 20% during the slow season',
    stats: [
      { value: '208', label: 'Winter Calls' },
      { value: '+20.2%', label: 'Y/Y Growth' },
    ],
    story: 'Most roofers starve in winter. We built a year-round lead engine that grew call volume 20% during their slowest months. Seasonal immunity.',
  },
  {
    client: 'Sniper Off Road',
    industry: 'Automotive',
    result: '106 calls/month in the off-season',
    stats: [
      { value: '106', label: 'Calls/Month' },
      { value: '#1', label: 'Map Pack Rank' },
    ],
    story: 'Dominated the local market with Map Pack ownership and a direct pipeline of high-value phone leads. One converted lead pays for the entire year of agency fees.',
  },
  {
    client: 'Futrell Marine',
    industry: 'Marine & Boat Sales',
    result: '#1 in a market outside their home state',
    stats: [
      { value: '#1', label: 'Organic + Maps' },
      { value: 'Multi-State', label: 'Market Reach' },
    ],
    story: 'A Louisiana dealer needed to prove they could win outside their home state. We deployed in Rogers, Arkansas and secured #1 organic and Maps — in a market they had zero presence in.',
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">Case Studies</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            Real Results.{' '}
            <span className="text-primary">Real Businesses.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
            These are real clients with real numbers. No hypotheticals, no projections. Here&apos;s what happened when they worked with us.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-6 mb-16">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: ease as any }}
              className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 lg:px-8 py-4 border-b border-border/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">{study.industry}</span>
                  <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground">{study.client}</h3>
                </div>
                <p className="text-xs text-muted-foreground font-bold italic hidden sm:block max-w-[200px] text-right">{study.result}</p>
              </div>

              {/* Body */}
              <div className="px-6 lg:px-8 py-6 grid sm:grid-cols-[1fr_auto] gap-6 items-start">
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{study.story}</p>
                <div className="flex sm:flex-col gap-4 sm:gap-3">
                  {study.stats.map((stat, j) => (
                    <div key={j} className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-center min-w-[100px]">
                      <p className="text-xl font-black text-primary italic tracking-tighter">{stat.value}</p>
                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-faint">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filmed client testimonials — click-to-play, no video bytes until pressed */}
        <VideoTestimonials />

        {/* Proof strip: real client builds, links to the /web-design portfolio */}
        <PortfolioStrip />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="text-center py-16 border-t border-border/10"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
            Want Results{' '}
            <span className="text-primary">Like These?</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">
            Talk to Trevor. 15 minutes. He&apos;ll tell you exactly what he&apos;d do for your business.
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
