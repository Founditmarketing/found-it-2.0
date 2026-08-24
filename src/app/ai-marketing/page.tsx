import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'AI Lead Response for Local Businesses',
  description:
    'Custom AI marketing automation. Answers every lead in seconds, books appointments, follows up. Built for you by a local team. Alexandria, LA.',
  alternates: { canonical: '/ai-marketing' },
  openGraph: {
    title: 'AI Marketing Automation for Local Businesses | Found It Software',
    description:
      'Custom AI for instant lead follow-up and appointment setting. Built for you by a local team.',
    type: 'website',
    url: 'https://www.founditsoftware.com/ai-marketing',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const data: PillarData = {
  name: 'AI Lead Response',
  slug: '/ai-marketing',
  serviceType: 'Marketing Automation',
  schemaDescription:
    'Custom AI marketing automation built by a local team. Instant lead follow-up by text and voice, appointment setting, content, and ads. Done-for-you, no tech skills needed. 13+ years in marketing.',
  eyebrow: 'AI Lead Response',
  headline: 'AI That Answers Leads',
  headlineAccent: 'in Under 5 Seconds.',
  intro:
    `We build AI that answers every lead in seconds, books appointments, and keeps your pipeline moving 24/7. With ${TRACK_RECORD.yearsInBusiness} years in marketing behind us, we build and run it all for you. No apps to learn.`,
  ctaLabel: 'Get My Free AI Demo',
  formSource: 'service_ai_marketing',
  formPageSlug: 'ai-marketing',
  formHeading: 'Get Your Free AI Demo',
  stats: [
    { value: '<5s', label: 'Lead Response Time' },
    { value: '24/7', label: 'Always On' },
    { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Marketing' },
  ],
  definitionHeading: 'What Is AI Marketing Automation?',
  definition:
    'AI marketing automation uses AI to handle the fast, repeat parts of marketing and sales. It replies to new leads by text and voice, books appointments, sends follow-ups, and helps with content and ads. Speed wins: the business that answers first usually gets the job. We build the system, connect your CRM, and run it. Nothing for you to set up.',
  includedHeading: 'What We Can Automate',
  included: [
    { title: 'Instant Lead Response', detail: 'AI replies to every lead by text and voice in seconds, 24/7. You answer first.' },
    { title: 'Appointment Setting', detail: 'AI agents qualify leads and book appointments straight into your calendar.' },
    { title: 'Follow-Up Sequences', detail: 'Texts and emails keep leads warm while you are busy.' },
    { title: 'Content Generation', detail: 'AI-drafted posts, checked by a human, on a steady schedule.' },
    { title: 'Review Requests', detail: 'Well-timed review requests that grow your reputation.' },
    { title: 'Smarter Ads', detail: 'AI bidding with a human watching it.' },
  ],
  approachHeading: 'How We Build Your System',
  approachIntro:
    'AI works best when it is built around your real pipeline, not a template. We map it, build it, and run it.',
  approach: [
    { step: '01', title: 'Map Your Pipeline', detail: 'We learn how leads come in and what happens next, in person when you are local.' },
    { step: '02', title: 'Build the System', detail: 'We set up the AI, connect your CRM, and wire up the messaging.' },
    { step: '03', title: 'Launch', detail: 'Most systems go live in 1 to 2 weeks. Simple ones run in days.' },
    { step: '04', title: 'Tune', detail: 'We watch it and keep tuning the prompts and timing.' },
  ],
  audienceHeading: "Who This Is For",
  audience: [
    'Businesses losing leads because nobody replies fast enough',
    'Owners drowning in follow-ups and missed calls',
    'Service companies that live and die by appointments',
    'Teams that want more output without more headcount',
    'Anyone who wants AI handled for them, no tech skills needed',
    'Local businesses that want a system built around their pipeline',
  ],
  chipsHeading: 'What We Automate',
  chips: ['AI Text Agents', 'AI Voice Agents', 'Appointment Setting', 'Follow-Up Sequences', 'Review Requests', 'CRM Integration'],
  mistakesHeading: 'Why DIY AI Tools Disappoint',
  mistakes: [
    { title: 'It is just a chatbot', detail: 'A generic bot is not a system. We handle the full pipeline: response, booking, follow-up, reviews.' },
    { title: 'You have to build it yourself', detail: 'Most AI tools are a login screen and a learning curve. We do the setup for you.' },
    { title: 'Slow lead response', detail: 'Replying in hours loses the sale. Ours replies in seconds, 24/7.' },
    { title: 'Disconnected from your CRM', detail: 'A tool that does not talk to your CRM makes more work. We wire it into what you already use.' },
  ],
  pricingHeading: 'What to Expect',
  pricing:
    'Month-to-month, no setup fees. Price depends on what we build. Most systems go live in 1 to 2 weeks. Your customer data stays in your own secure CRM. We never sell or share it, and you own your contacts. Most businesses spend less than one part-time hire.',
  whyUsHeading: 'Why Businesses Choose Found It Marketing',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years in marketing.`,
    '2026 CLEDA Highest Traded Revenue Award winner.',
    'Done for you. We handle the prompts and setup.',
    'Your data stays in your own CRM. We never sell or share it.',
    'No long-term contracts, no setup fees.',
    'A local team that maps your pipeline in person.',
  ],
  faqHeading: 'AI Marketing Automation FAQ',
  faq: [
    { question: 'Is this just a chatbot, or can you automate more?', answer: 'Way more. We automate lead follow-up by text and voice, content, ads, chat, forms, and review requests. One system.' },
    { question: 'How much does it cost?', answer: 'It depends on what we build. Month-to-month, no setup fees. You get a flat price at your free demo.' },
    { question: 'How fast can you launch it?', answer: 'Most systems go live in 1 to 2 weeks. Simple ones run in days.' },
    { question: 'Does this replace my staff?', answer: 'No. It frees them up. The AI handles the repeat work so your team can close and serve customers.' },
    { question: 'Is my data safe and private?', answer: 'Yes. Your data stays in your own secure CRM. We never sell or share it. Messaging runs through compliant channels, and you own your contacts.' },
  ],
  relatedReading: [
    { title: 'How Every Fitting Starts', href: '/blog/what-is-a-software-map' },
    { title: 'The Rent Isn’t the Problem. The Hostage Is.', href: '/blog/rented-software-no-data-rights' },
  ],
  finalCtaHeadline: 'Get a Free AI Demo',
  finalCtaSub: 'See how the AI would answer your leads and book your appointments. No pitch, no obligation.',
};

export default function AIMarketingPillar() {
  return <ServicePillar data={data} />;
}
