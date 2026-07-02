'use client';

import { LPLayout, LPNav, FAQSection, LPFormSection, LPFooter, LPSplitHero, SocialProof, TeamCollageSection } from '@/components/lp';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProofBlock } from '@/components/lp/ProofBlock';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { MapPin, Handshake } from 'lucide-react';
import { staff } from '@/lib/team';
import { AWARD, TRACK_RECORD } from '@/lib/site';
import { reviews } from '@/lib/reviews';

const ease = [0.16, 1, 0.3, 1] as const;

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

const faqItems = [
  {
    question: 'Are you actually local, or a national agency with a local phone number?',
    answer: "We're headquartered in Alexandria, Louisiana, and the whole senior team lives and works here. We've served Central and Southwest Louisiana for 13+ years — and we'll drive to your office for the first strategy session to prove it.",
  },
  {
    question: 'Who actually works on my account?',
    answer: `A named senior strategist — not a rotating cast of juniors. You'll know exactly who runs your ads, who built your site, and who picks up when you call. The team is ${staff.length} people, and their names and faces are on this page.`,
  },
  {
    question: "I've been burned by a big agency before. How are you different?",
    answer: "Three ways: no contracts (month-to-month, cancel with 30 days notice), you own everything (your ad account, your website, your data), and you can look us in the eye. When you can drive to the office of the people spending your money, accountability stops being a marketing word.",
  },
  {
    question: 'What services do you actually handle?',
    answer: "Google Ads, web design, SEO, AI search visibility, and social media — the full local marketing stack. Most clients start with one service and a free audit, then expand once the phone starts ringing.",
  },
  {
    question: 'How much does it cost?',
    answer: "It depends on the service and your market, and we'll give you real numbers on the strategy call — not a quote designed to get you in the door. Most local businesses invest $1,500–$5,000/month all-in. No setup fee games, no surprise add-ons.",
  },
  {
    question: 'Is there a contract?',
    answer: "No. Month-to-month, cancel anytime with 30 days notice. We keep clients by getting results, not by locking them in.",
  },
];

/** The three metros the Local Intent campaign targets. */
const metros = [
  {
    city: 'Alexandria & Pineville',
    line: 'Home base. Our office is here, our team lives here, and half the businesses on MacArthur Drive know Trevor by name.',
  },
  {
    city: 'Lake Charles',
    line: 'Contractors, industrial, and service businesses across SWLA — 90 minutes away, and we make the drive for strategy sessions.',
  },
  {
    city: 'Central Louisiana',
    line: "From Natchitoches to Marksville — if you're in Cenla, you're in our backyard, not in a national agency's spreadsheet.",
  },
];

export function LocalMarketingTriMetroContent() {
  return (
    <LPLayout ctaLabel="Book My Free Strategy Call">
      <LPNav />

      <LPSplitHero
        badge="Alexandria · Lake Charles · Cenla"
        headline="Louisiana's Marketing Team."
        headlineAccent="Not Another National Agency."
        subheadline="Google Ads, websites, and SEO for local businesses — run by a named senior team right here in Alexandria, not a call center in another time zone. Book a call and meet the people spending your budget."
        highlight="First strategy session is free — at your office, anywhere in the tri-metro area."
        highlightIcon={Handshake}
        stats={[
          { value: `${TRACK_RECORD.yearsInBusiness}`, label: 'Years in Louisiana' },
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Book My Free Strategy Call"
        formSource="lp_local_trimetro"
        formPageSlug="local-marketing-la-trimetro"
      />

      <SocialProof
        heading="Louisiana owners,"
        headingAccent="not logos on a slide deck."
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: `${TRACK_RECORD.yearsInBusiness}`, label: 'Years in business' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Average Google rating' },
          { value: AWARD.year, label: 'CLEDA award winner' },
        ]}
        testimonials={[
          { quote: quoteBy('David Roshto'), name: 'David Roshto' },
          { quote: quoteBy('Sky'), name: 'Sky' },
          { quote: quoteBy('Santos Mendez'), name: 'Santos Mendez' },
        ]}
      />

      {/* ─── Market knowledge: the three metros ─── */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: ease as any }}
            className="text-center mb-12"
          >
            <p className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">
              We Know These Markets
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground">
              Your Market Is Our <span className="text-primary">Backyard.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {metros.map((m, i) => (
              <motion.div
                key={m.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: ease as any }}
                className="bg-card/10 backdrop-blur-sm border border-border/15 rounded-2xl p-6 hover:border-primary/25 transition-colors duration-500"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-black uppercase italic tracking-tighter text-foreground">{m.city}</p>
                </div>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{m.line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProofBlock
        headline="One Louisiana Business Turned $4,200/mo Into"
        headlineAccent="$42,000 in New Revenue."
        stats={[
          { value: '$4,200', label: 'Monthly Ad Spend' },
          { value: '$42,000', label: 'Monthly Revenue' },
          { value: '10x', label: 'Return on Ad Spend' },
        ]}
        narrative="A local business was spending $4,200/month with a big agency and no idea what was working. We rebuilt their campaigns around their highest-margin services, set up call tracking from first ring to signed contract, and cut the wasted spend. 90 days later: $42K/month in new revenue."
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'A Named Team, Not a Ticket Queue.',
            detail: "You'll know exactly who runs your ads and who built your site — by name. Call the office and a strategist answers, not a support script.",
          },
          {
            title: 'No Contracts. Cancel Anytime.',
            detail: 'Month-to-month, 30 days notice. National agencies lock you in for 12 months because they have to. We keep clients by making the phone ring.',
          },
          {
            title: 'You Own Everything.',
            detail: 'Your ad account, your website, your data. If you ever leave, it all stays with you — nothing held hostage.',
          },
          {
            title: 'We Show Up In Person.',
            detail: "Strategy sessions at your office, anywhere from Alexandria to Lake Charles. Try getting a national agency to do that.",
          },
        ]}
      />

      <TeamCollageSection ctaLabel="Book My Free Strategy Call" />

      <LPFormSection
        heading="Book Your Free Strategy Call"
        subheading="Tell us about your business and what's not working. A senior strategist — not a sales rep — will call you back within one business day."
        benefits={[
          'A real conversation with a named senior strategist',
          'Local competitor and market breakdown for your area',
          'A straight answer on what we would do and what it costs',
          '📍 We are 100% willing to do this session in person at your office.',
        ]}
        source="lp_local_trimetro"
        pageSlug="local-marketing-la-trimetro"
      />

      <FAQSection items={faqItems} />

      {/* ─── Bottom CTA ─── */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
              Work With People{' '}
              <span className="text-primary">You Can Look in the Eye.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-lg mx-auto leading-relaxed">
              One call. A senior strategist, a straight plan, and zero pressure. Worst case, you leave with a free market breakdown.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                Book My Free Strategy Call
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
    </LPLayout>
  );
}
