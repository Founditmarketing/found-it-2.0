'use client';

import { LPLayout, LPNav, TrustBar, BenefitsGrid, JohnCTA, FAQSection, LPFormSection, LPFooter, PortfolioMarquee, ExitIntent } from '@/components/lp';
import { WebDesignHero } from '@/components/lp/WebDesignHero';
import { PainPoints } from '@/components/lp/PainPoints';
import { ProcessTimeline } from '@/components/lp/ProcessTimeline';
import { CaseStudy } from '@/components/lp/CaseStudy';
import { FinalCTA } from '@/components/lp/FinalCTA';
import { ClientLogoBar } from '@/components/lp/ClientLogoBar';

const serviceFeatures = [
  { title: 'Fully Custom Design', description: 'No themes, no page builders. Every pixel intentional. Your site will look like no one else\'s because it was built for no one else.' },
  { title: 'Conversion-First Build', description: 'We design for the call, not the compliment. Every layout decision is backed by conversion data and user behavior patterns.' },
  { title: 'Ongoing Partnership', description: 'We don\'t disappear after launch. Monthly updates, performance monitoring, and strategic adjustments included.' },
  { title: 'Built on Modern Stack', description: 'Next.js, Vercel, Tailwind. Fast, secure, future-proof. Sub-2-second load times and 90+ Lighthouse scores standard.' },
  { title: 'SEO & GEO Built-In', description: 'Schema markup, Core Web Vitals optimization, and Generative Engine Optimization so you rank in traditional and AI-powered search.' },
  { title: 'You Own Everything', description: 'Your domain, your code, your content. No proprietary lock-in, no hostage situations. Leave whenever you want (you won\'t).' },
];

const faqItems = [
  { question: 'Who owns the website when it\'s built?', answer: 'You do. The site is built on your domain, your hosting (or ours if you prefer), and you have full administrative access from day one. No proprietary lock-ins, no hostage situations. If you ever leave, you keep everything.' },
  { question: 'What CMS do you use?', answer: 'It depends on what you need. For most premium builds we use Next.js with a headless CMS like Sanity or Payload — this gives you a clean editing experience plus blazing performance. For simpler sites we may use WordPress with a custom theme. We pick the stack that fits your team, not ours.' },
  { question: 'Do you handle hosting?', answer: 'Yes. We host on Vercel for Next.js builds and recommended managed WordPress hosting for WP sites. Hosting runs $25-$100/mo depending on traffic. You\'re welcome to host it yourself — we\'ll hand off everything cleanly.' },
  { question: 'Can you redesign my existing site?', answer: 'Yes. About 60% of our projects are redesigns. We audit what\'s working (don\'t break the SEO that\'s earning you traffic), identify what\'s not (slow load times, dead pages, weak conversion paths), and rebuild on a modern stack. Most redesigns ship in 4-6 weeks.' },
  { question: 'How long does the full process take?', answer: 'A full custom build typically runs 4-6 weeks from kickoff to launch. Larger sites with 25+ pages or complex integrations can extend to 8-10 weeks. We\'ll give you a firm timeline after the discovery call.' },
  { question: 'What if I need changes after launch?', answer: 'Included in every build: 60 days of free post-launch optimization. After that, most clients move to a monthly maintenance plan starting at $250/mo — covers content updates, security patches, performance monitoring, and ongoing optimization. No long contracts.' },
];

export function WebDesignLPContent() {
  return (
    <LPLayout ctaLabel="Get Free Consultation">
      <LPNav />
      <WebDesignHero />
      <PortfolioMarquee heading="Sites We've Built" />
      <ClientLogoBar />
      <TrustBar stats={[
        { value: '100+', label: 'Sites Launched' },
        { value: '90+', label: 'Avg. Lighthouse Score' },
        { value: '2.4x', label: 'Avg. Lead Increase' },
        { value: '13+', label: 'Years Building' },
      ]} />
      <PainPoints />
      <BenefitsGrid heading="The Found It Difference" subheading="Beautiful is the baseline. We build websites that generate revenue." benefits={serviceFeatures} />
      <ProcessTimeline />
      <CaseStudy />

      <JohnCTA
        heading="Tell John About Your Project"
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
        source="lp_web_design"
        pageSlug="web-design"
      />
      <FAQSection items={faqItems} />
      <FinalCTA />
      <LPFooter />
      <ExitIntent
        headline="Wait — before you go."
        subheadline="Download our free guide and make sure you ask the right questions before hiring any web designer."
        magnetTitle="The Founder's Guide to Choosing a Web Designer"
        ctaLabel="Download the Free Guide"
      />
    </LPLayout>
  );
}
