'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { AIMarketingHero } from '@/components/lp/AIMarketingHero';
import { SocialProof } from '@/components/lp/SocialProof';
import { FounderVideo } from '@/components/lp/FounderVideo';
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

      <AIMarketingHero
        headline="We Automate Your Marketing"
        headlineAccent="With AI."
        subheadline="Custom AI systems that capture every lead, follow up instantly, and book the appointment — you just watch the calendar fill up."
        speedHighlight="Every new lead gets a reply in under 5 seconds — 24/7, even while you sleep."
        stats={[
          { value: '250+', label: 'Local businesses' },
          { value: '<5 sec', label: 'Lead reply speed' },
          { value: '4.9★', label: 'Client rating' },
        ]}
        formSource="lp_ai_marketing"
        formPageSlug="ai-marketing"
      />

      <SocialProof
        heading="Local businesses"
        headingAccent="trust us to run their pipeline."
        stats={[
          { value: '250+', label: 'Local businesses served' },
          { value: '<5 sec', label: 'Lead follow-up speed' },
          { value: '4.9★', label: 'Average client rating' },
          { value: '46', label: 'States we operate in' },
        ]}
        testimonials={[
          {
            quote:
              'Excellent marketing company. Several reasons — but number 1 is results. Trevor got my phone ringing.',
            name: 'David Roshto',
          },
          {
            quote:
              'The guys over at Found It Marketing are great — they come to me directly to make sure I\u2019m taken care of and issues are solved.',
            name: 'Sky',
          },
          {
            quote:
              'After only a week, they absolutely earned a five-star review. So glad to have this team managing my marketing — extremely responsive, with a great app that makes communication seamless.',
            name: 'Smith Lake Rentals & Sales',
          },
        ]}
      />

      <FounderVideo
        eyebrow="Meet Your Local Team"
        heading="We're not a SaaS company."
        headingAccent="We're your neighbors."
        body="Most AI marketing is a faceless app you have to figure out yourself. We're different — we drive to your office, map your pipeline in person, and build the system for you. You get a real local team, not a login screen."
        founderName="Trevor Ruby"
        videoSrc="/founder-intro-web.mp4"
        poster="/founder-intro-poster.jpg"
        orientation="portrait"
        ctaText="Book Your Free In-Person AI Demo"
      />

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
              "We build the custom AI voice agents, automated SMS follow-ups, and AI content generators tuned specifically to your brand voice.",
          },
          {
            number: '03',
            title: 'Launch & Optimization',
            description:
              "We turn the system on. Leads flow in, AI follows up instantly 24/7, and your calendar fills with qualified appointments.",
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
            answer:
              "It handles the tasks you don't have time for. Instant SMS responses to new leads, AI voice agents answering FAQs, automated email sequences, and even AI generating your daily social media posts. It runs your pipeline 24/7.",
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
                Book Your Free In-Person AI Demo
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </LPLayout>
  );
}
