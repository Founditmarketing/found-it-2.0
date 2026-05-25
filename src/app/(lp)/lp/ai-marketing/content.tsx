'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { HormoziHero } from '@/components/lp/HormoziHero';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { motion } from 'framer-motion';

export function AIMarketingLPContent() {
  return (
    <LPLayout ctaLabel="Book Your Free In-Person AI Demo">
      <LPNav />

      <HormoziHero
        headline="We Automate Your Marketing"
        headlineAccent="With AI."
        subheadline="From lead generation to follow-ups to booking appointments, we build the custom AI systems and you just watch the calendar fill up. Let us come to your office and show you a live demo."
        ctaText="Book Your Free In-Person AI Demo"
        frictionReducer="Takes 15 minutes. We come to you. See a live AI agent in action."
      />

      <ObjectionBullets
        bullets={[
          {
            title: '100% Local. We come to your office.',
            detail: "We aren't a SaaS company trying to sell you a monthly software subscription. We are a local team that builds custom AI systems specifically for your business.",
          },
          {
            title: 'It Actually Works (No Tech Skills Required).',
            detail: "You don't need to learn how to prompt AI. We build the engine; you just answer the phone when it rings.",
          },
          {
            title: 'Month-to-Month. No Contracts.',
            detail: "If the AI system doesn't generate ROI, fire us. No long-term lock-in.",
          },
        ]}
      />

      <ProcessSteps
        heading="How We Automate Your Growth"
        steps={[
          {
            number: '01',
            title: 'In-Person AI Strategy Session',
            description: "We meet at your office to identify exactly where your sales pipeline is leaking and which tasks can be fully automated by AI.",
          },
          {
            number: '02',
            title: 'System Architecture & Build',
            description: "We build the custom AI voice agents, automated SMS follow-ups, and AI content generators tuned specifically to your brand voice.",
          },
          {
            number: '03',
            title: 'Launch & Optimization',
            description: "We turn the system on. Leads flow in, AI follows up instantly 24/7, and your calendar fills with qualified appointments.",
          },
        ]}
      />

      <LPFormSection
        heading="Book Your Free In-Person AI Demo"
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
            question: 'What exactly does AI marketing automation do?',
            answer: "It handles the tasks you don't have time for. Instant SMS responses to new leads, AI voice agents answering FAQs, automated email sequences, and even AI generating your daily social media posts. It runs your pipeline 24/7.",
          },
          {
            question: 'Do I need to be good with technology?',
            answer: "Not at all. We are a 'done-for-you' agency. We handle all the prompt engineering, API connections, and software setup. You just use the dashboard to see your new appointments.",
          },
          {
            question: 'Is it better than hiring an assistant?',
            answer: "AI doesn't sleep, doesn't take vacations, and responds to a new lead within 5 seconds of them filling out a form on your site. For lead follow-up, it is significantly faster and more cost-effective than human labor.",
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
                Book Your Free In-Person AI Demo
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </LPLayout>
  );
}
