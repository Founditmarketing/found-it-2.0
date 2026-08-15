'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { LPSplitHero } from '@/components/lp/LPSplitHero';
import { SocialProof } from '@/components/lp/SocialProof';
import { AIAutomationGrid } from '@/components/lp/AIAutomationGrid';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { TeamCollageSection } from '@/components/lp/TeamCollageSection';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { TRACK_RECORD } from '@/lib/site';
import { reviews } from '@/lib/reviews';

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

export function AIMarketingLPContent() {
  return (
    <LPLayout ctaLabel="Get My Free AI Demo">
      <LPNav />

      <LPSplitHero
        headline="We Automate Your Marketing"
        headlineAccent="With AI."
        subheadline="Custom AI systems that capture leads, follow up instantly, run your content and ads, and keep your site working, so your whole marketing engine runs while you sleep."
        highlight="Every new lead gets a reply in under 5 seconds — 24/7, even while you sleep."
        highlightIcon={Zap}
        stats={[
          { value: '<5 sec', label: 'Lead reply speed' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get My Free AI Demo"
        formSource="lp_ai_marketing"
        formPageSlug="ai-marketing"
      />

      <SocialProof
        heading="Local businesses"
        headingAccent="trust us to run their pipeline."
        stats={[
          { value: '<5 sec', label: 'Lead follow-up speed' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Average Google rating' },
          { value: '0', label: 'Long-term contracts' },
        ]}
        testimonials={[
          { quote: quoteBy('David Roshto'), name: 'David Roshto' },
          { quote: quoteBy('Sky'), name: 'Sky' },
          { quote: quoteBy('Smith Lake Rentals & Sales'), name: 'Smith Lake Rentals & Sales' },
        ]}
      />

      <AIAutomationGrid />

      <ObjectionBullets
        bullets={[
          {
            title: 'Leads Answered In Under 5 Seconds.',
            detail:
              "Speed wins. Our AI replies to every new lead instantly by text and voice, 24/7 — so you never lose a customer to a competitor who answered first.",
          },
          {
            title: 'It Actually Works (No Tech Skills Required).',
            detail:
              "You don't need to learn how to prompt AI. We build the engine; you just answer the phone when it rings.",
          },
          {
            title: 'Month-to-Month. No Contracts.',
            detail:
              "If the AI system doesn't generate ROI, fire us. No long-term lock-in, ever.",
          },
          {
            title: '100% Local. We Come To Your Office.',
            detail:
              "We aren't a SaaS company selling a monthly software subscription. We're a local team that builds custom AI systems specifically for your business.",
          },
        ]}
      />

      <ProcessSteps
        heading="How We Automate Your Growth"
        steps={[
          {
            number: '01',
            title: 'In-Person AI Strategy Session',
            description:
              "We meet at your office to identify exactly where your sales pipeline is leaking and which tasks can be fully automated by AI.",
          },
          {
            number: '02',
            title: 'System Architecture & Build',
            description:
              "We build the pieces you need: AI voice and SMS agents, social and content automation, ad management, and on-site chat, all tuned to your brand voice.",
          },
          {
            number: '03',
            title: 'Launch & Optimization',
            description:
              "We turn the system on. Leads flow in, AI follows up instantly 24/7, and your calendar fills with qualified appointments.",
          },
        ]}
      />

      <TeamCollageSection ctaLabel="Get My Free AI Demo" />

      <LPFormSection
        heading="Get My Free AI Demo"
        subheading="Let us show you exactly how a custom AI system can automate your marketing."
        benefits={[
          'Live demo of an AI voice/text agent booking an appointment',
          'Custom automation mapping for your business',
          'No tech skills required to run the system',
          '📍 Local to Louisiana? We are 100% willing to do this strategy session in person at your office.',
        ]}
        source="lp_ai_marketing"
        pageSlug="ai-marketing"
      />

      <FAQSection
        items={[
          {
            question: 'Is this just a chatbot, or can you automate more?',
            answer:
              "Way more than a chatbot. We automate lead follow-up by text and voice, your social media posting, SEO and content, Google Ads management, on-site chat and forms, and review requests. We build whichever pieces move the needle for your business and connect them into one system.",
          },
          {
            question: 'What exactly does AI marketing automation do?',
            answer:
              "It handles the tasks you don't have time for: instant SMS and voice responses to new leads, automated email and follow-up sequences, AI-generated social posts and content, ad optimization, and review requests. It runs your whole pipeline 24/7.",
          },
          {
            question: 'How much does it cost?',
            answer:
              "It depends on what we build for you, but we're month-to-month with no setup fees that lock you in. We'll give you a transparent flat price at your free demo — no surprises, no long contracts. Most local businesses spend less on this than on a single part-time hire.",
          },
          {
            question: 'How fast can you launch it?',
            answer:
              "Most systems go live within 1–2 weeks of your strategy session. Simple lead-response automations can be running in days. We handle the entire build so there's nothing for you to set up.",
          },
          {
            question: 'What if it doesn\'t work? Am I locked in?',
            answer:
              "No. We're month-to-month with zero long-term contracts. If the AI system isn't generating ROI, you fire us — no penalties, no lock-in. We earn your business every single month.",
          },
          {
            question: 'Does this replace my staff?',
            answer:
              "No — it frees them up. The AI handles the repetitive, time-sensitive work (instant lead replies, follow-ups, reminders) so your team can focus on closing and serving customers instead of chasing leads.",
          },
          {
            question: 'What industries do you work with?',
            answer:
              "Local service businesses of all kinds — home services (HVAC, roofing, plumbing), medical and dental, auto, legal, retail, and more. If you rely on leads and appointments, the system fits.",
          },
          {
            question: 'Do I need to be good with technology?',
            answer:
              "Not at all. We are a 'done-for-you' agency. We handle all the prompt engineering, API connections, and software setup. You just use the dashboard to see your new appointments.",
          },
          {
            question: 'Is my data safe and private?',
            answer:
              "Yes. Your customer data stays in your own secure CRM — we never sell or share it. All messaging runs through compliant, permission-based channels, and you own your contacts at all times.",
          },
        ]}
      />

      <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 text-white">
              Ready to automate your marketing?
            </h2>
            <p className="text-xl font-medium mb-12 opacity-90 text-white max-w-2xl mx-auto">
              Stop losing leads to slow follow-ups. Let us build your AI engine locally.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-black/20 bg-white text-primary hover:bg-white/90">
                Get My Free AI Demo
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </LPLayout>
  );
}
