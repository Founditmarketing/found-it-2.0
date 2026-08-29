'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { VideoTestimonials } from '@/components/portfolio/VideoTestimonials';
import { PortfolioStrip } from '@/components/portfolio/PortfolioStrip';

const ease = [0.16, 1, 0.3, 1] as const;

/* Moved verbatim from /case-studies (8/29): the record is real and stays
   public — it just no longer interrupts the software proof page. */
interface CaseStudy {
  client: string;
  industry: string;
  story: string;
}

const marketingStudies: CaseStudy[] = [
  {
    client: 'National Equipment Dealer',
    industry: 'Heavy Equipment',
    story: 'Started with $5K/month. Google Ads, SEO, and a site built to sell turned a local dealership into a national volume dealer.',
  },
  {
    client: 'Total Family Solutions',
    industry: 'Healthcare',
    story: 'They were invisible against billion-dollar giants. We got them to Top 3 in Maps, ahead of ZocDoc, Psychology Today, and BetterHelp in their market.',
  },
  {
    client: 'Stone Automotive',
    industry: 'Auto Repair',
    story: 'Auto shops live and die by the phone. We drove 150+ calls a month from their Google Business Profile alone. Bays full, mechanics busy.',
  },
  {
    client: 'Weiss & Goldring',
    industry: 'Luxury Retail',
    story: "Ask ChatGPT or Google AI for a luxury suit. Our client isn't on a list. They are the answer. That's AI search optimization.",
  },
  {
    client: "Smoker's Heaven",
    industry: 'Retail',
    story: "Retail isn't about clicks. It's about people walking in the door. We drove 7+ new customers to the store daily from Google Maps.",
  },
  {
    client: 'Sniper Off Road',
    industry: 'Automotive',
    story: 'We took the local Map Pack and turned it into big phone leads. One closed lead pays for the whole year of fees.',
  },
  {
    client: 'Futrell Marine',
    industry: 'Marine & Boat Sales',
    story: 'A Louisiana dealer wanted to win outside their state. We launched in Rogers, Arkansas and took #1 in Google search and Maps. From zero presence.',
  },
];

export function MarketingResultsClient() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>
      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="mb-14"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            Where We Came From
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            The Marketing Years.
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
            Thirteen years inside local businesses &mdash; ads, websites, phones &mdash; is how we
            learned what actually needed to be built. The record stands, and it&rsquo;s history:
            Found It no longer takes new marketing clients.{' '}
            <span className="text-foreground font-bold">Today we build the software.</span>
          </p>
          <p className="mt-4">
            <Link href="/case-studies" className="text-sm font-bold text-primary inline-flex items-center gap-1.5 hover:gap-3 transition-all">
              See the software we build now <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </motion.div>

        <div className="space-y-6 mb-16">
          {marketingStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.6, ease: ease as any }}
              className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl overflow-hidden"
            >
              <div className="px-6 lg:px-8 py-4 border-b border-border/10">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">{study.industry}</span>
                <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground">{study.client}</h3>
              </div>
              <div className="px-6 lg:px-8 py-6">
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{study.story}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filmed client testimonials — click-to-play, no video bytes until pressed */}
        <VideoTestimonials />

        {/* Proof strip: real client builds, links to the /web-design portfolio */}
        <PortfolioStrip />
      </div>
    </main>
  );
}
