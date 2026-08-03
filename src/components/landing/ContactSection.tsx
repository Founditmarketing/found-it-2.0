'use client';

import Link from 'next/link';
import { NativeLeadForm } from '@/components/forms/NativeLeadForm';
import { Suspense } from 'react';

import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { TextScramble } from '@/components/ui/TextScramble';
import { motion, Variants } from 'framer-motion';

const titleMap: { [key: string]: { title: string; description: string } } = {
  google: {
    title: 'Supercharge Your Google Presence',
    description: "Whether it's rankings or ad performance, tell us your Google-related challenges and we'll build a custom strategy to get you to the top.",
  },
  meta: {
    title: 'Amplify Your Social Media ROI',
    description: "From low engagement to poor ad results on Meta platforms (Facebook/Instagram), we build social strategies that convert. Let's talk.",
  },
  website: {
    title: 'Transform Your Website & SEO',
    description: "Your website is your digital storefront. If it's outdated, slow, or not converting, we can help. Tell us what needs fixing.",
  },
  ai: {
    title: 'Leverage AI for Growth',
    description: "Confused about how to show up in AI overviews or use AI in your marketing? We'll guide you through the new landscape of AI-driven search and content.",
  },
  content: {
    title: 'Elevate Your Content Strategy',
    description: "From engaging blog posts to high-converting video scripts, we'll build a strategy that engages and converts. Let's talk.",
  },
  default: {
    title: 'Your Free Strategy Session',
    description: "Tell us about your business and goals. We'll analyze your market, audit your digital presence, and deliver a custom growth plan — no pressure, no obligations.",
  },
};

const liquidEasing = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(20px)', scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      ease: liquidEasing as any,
      duration: 1.2,
    },
  },
};

export function ContactSection() {
  return (
    <Suspense fallback={<section className="bg-transparent text-foreground pt-32 pb-12 lg:py-48 relative overflow-hidden h-screen" />}>
      <ContactSectionInner />
    </Suspense>
  );
}

function ContactSectionInner() {
  const searchParams = useSearchParams();
  const problem = searchParams.get('problem') || 'default';
  const { title, description } = titleMap[problem] || titleMap.default;

  return (
    <section className="bg-transparent text-foreground pt-32 pb-12 lg:py-48 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1440px] mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div variants={itemVariants} className="lg:col-span-12 mb-8 lg:mb-16">
            <h1 className="text-4xl md:text-7xl lg:text-oversized leading-[1.1] lg:leading-none mb-6 lg:mb-8">
              <TextScramble text={title} />
            </h1>
            <p className="text-lg md:text-3xl text-muted-foreground max-w-4xl border-l-[4px] lg:border-l-[12px] border-primary pl-4 lg:pl-10 font-medium italic">
              {description}
            </p>
          </motion.div>

          {/* Form Section - Moved to top on mobile, right side on desktop */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full order-1 lg:order-2">
            <div className="w-full relative">
              <NativeLeadForm source="contact_section" pageSlug="contact" showBusiness />
            </div>
          </motion.div>

          {/* Response Protocol Section - Moved to bottom on mobile, left side on desktop */}
          <motion.div variants={itemVariants} className="lg:col-span-5 mt-12 lg:mt-0 order-2 lg:order-1">
            <div className="lg:sticky lg:top-48">
              <div className="bg-card/30 backdrop-blur-xl border border-border/50 p-8 lg:p-12 rounded-[2rem] lg:rounded-[4rem] shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <h3 className="text-primary font-mono text-xl font-black uppercase tracking-[0.3em] mb-8 opacity-80">
                  Response Protocol
                </h3>
                <div className="space-y-10 relative z-10">
                  <div className="flex gap-8 items-start">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-primary/20">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-black uppercase tracking-tighter text-2xl mb-2 italic">60-Minute Deep Dive</p>
                      <p className="text-muted-foreground text-lg leading-relaxed">Every request is reviewed by a Senior Strategist who builds your custom growth plan.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 items-start">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-primary/20">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-black uppercase tracking-tighter text-2xl mb-2 italic">Zero-Obligation Strategy</p>
                      <p className="text-muted-foreground text-lg leading-relaxed">We deliver a data-backed blueprint you can execute — with or without us.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
