'use client';

import { LPLayout, LPNav, TrustBar, BenefitsGrid, JohnCTA, FAQSection, LPFormSection, LPFooter, PortfolioMarquee, ExitIntent } from '@/components/lp';
import { WebDesignHero } from '@/components/lp/WebDesignHero';
import { PainPoints } from '@/components/lp/PainPoints';
import { ProcessTimeline } from '@/components/lp/ProcessTimeline';
import { CaseStudy } from '@/components/lp/CaseStudy';
import { PricingTransparency } from '@/components/lp/PricingTransparency';
import { FinalCTA } from '@/components/lp/FinalCTA';

const serviceFeatures = [
  { title: 'Fully Custom Design', description: 'No themes, no page builders. Every pixel intentional. Your site will look like no one else\'s because it was built for no one else.' },
  { title: 'Conversion-First Build', description: 'We design for the call, not the compliment. Every layout decision is backed by conversion data and user behavior patterns.' },
  { title: 'Ongoing Partnership', description: 'We don\'t disappear after launch. Monthly updates, performance monitoring, and strategic adjustments included.' },
  { title: 'Built on Modern Stack', description: 'Next.js, Vercel, Tailwind. Fast, secure, future-proof. Sub-2-second load times and 90+ Lighthouse scores standard.' },
  { title: 'SEO & GEO Built-In', description: 'Schema markup, Core Web Vitals optimization, and Generative Engine Optimization so you rank in traditional and AI-powered search.' },
  { title: 'You Own Everything', description: 'Your domain, your code, your content. No proprietary lock-in, no hostage situations. Leave whenever you want (you won\'t).' },
];

const faqItems = [
  { question: 'Who owns the website when it\'s built?', answer: 'You do. We build it on your domain, your hosting (or ours if you prefer), and you have full administrative access from day one. No proprietary lock-in, ever.' },
  { question: 'What CMS do you use?', answer: 'We build primarily with Next.js and React for maximum performance. For content-heavy sites, we integrate headless CMS solutions like Sanity or Contentful so you can edit pages without touching code.' },
  { question: 'Do you handle hosting?', answer: 'Yes — we offer managed hosting on Vercel with global CDN, automatic SSL, and 99.99% uptime. You can also self-host if you prefer. We\'ll hand over everything.' },
  { question: 'Can you redesign my existing site?', answer: 'Absolutely. We redesign, rebuild, and migrate existing sites regularly. We preserve your SEO equity and domain authority while upgrading your design, performance, and conversion architecture.' },
  { question: 'How long does the full process take?', answer: 'Most projects launch within 4-6 weeks. Simpler sites can be ready in 2-3 weeks. Enterprise builds with custom features and integrations may take 8-12 weeks.' },
  { question: 'What if I need changes after launch?', answer: 'Every build includes 60 days of post-launch optimization. After that, our monthly maintenance plans start at $250/mo and include content updates, security patches, and performance monitoring.' },
];

export function WebDesignLPContent() {
  return (
    <LPLayout ctaLabel="Get Free Consultation">
      <LPNav />
      <WebDesignHero />
      <PortfolioMarquee heading="Sites We've Built" />
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
      <PricingTransparency />
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
