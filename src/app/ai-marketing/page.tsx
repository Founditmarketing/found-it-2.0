import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'AI Marketing Automation for Local Businesses',
  description:
    'Custom AI marketing automation from a local team with 13+ years in marketing. Instant lead follow-up, AI appointment setting, and automated content — built for you, no software skills required. Alexandria, LA.',
  alternates: { canonical: '/ai-marketing' },
  openGraph: {
    title: 'AI Marketing Automation for Local Businesses | Found It Marketing',
    description:
      'Custom AI systems for instant lead follow-up, appointment setting, and content — built for you by a local team.',
    type: 'website',
    url: 'https://founditmarketing.com/ai-marketing',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const data: PillarData = {
  name: 'AI Marketing Automation',
  slug: '/ai-marketing',
  serviceType: 'Marketing Automation',
  schemaDescription:
    'Custom AI marketing automation built by a local team: instant lead follow-up by text and voice, automated appointment setting, content, and ad optimization. Done-for-you, no software subscriptions or tech skills required. Backed by 13+ years in marketing.',
  eyebrow: 'AI Marketing Automation',
  headline: 'AI That Answers Leads',
  headlineAccent: 'in Under 5 Seconds.',
  intro:
    `Found It Marketing builds custom AI systems that respond to every lead instantly, book appointments, and keep your pipeline moving 24/7. With ${TRACK_RECORD.yearsInBusiness} years in marketing and ${TRACK_RECORD.adSpendManagedLong} behind us, we build and run the whole system for you — no apps to learn, no subscriptions to juggle.`,
  ctaLabel: 'Get My Free AI Demo',
  formSource: 'service_ai_marketing',
  formPageSlug: 'ai-marketing',
  formHeading: 'Get Your Free AI Demo',
  stats: [
    { value: '<5s', label: 'Lead Response Time' },
    { value: '24/7', label: 'Always On' },
    { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Marketing' },
    { value: TRACK_RECORD.statesServed, label: 'States We Operate In' },
  ],
  definitionHeading: 'What Is AI Marketing Automation?',
  definition:
    'AI marketing automation uses AI agents and workflows to handle the time-sensitive, repetitive parts of marketing and sales — instantly replying to new leads by text and voice, booking appointments, sending follow-ups and reminders, generating content, and optimizing ads. The point is speed and consistency: the business that answers a lead first usually wins it. At Found It Marketing this is fully done-for-you — we build the system, connect it to your CRM, and run it, with nothing for you to set up.',
  includedHeading: 'What We Can Automate',
  included: [
    { title: 'Instant Lead Response', detail: 'AI replies to every new lead by text and voice in seconds, 24/7 — so you never lose one to a faster competitor.' },
    { title: 'Appointment Setting', detail: 'AI agents qualify and book appointments straight into your calendar.' },
    { title: 'Follow-Up Sequences', detail: 'Automated text and email nurture so leads do not go cold while you are busy.' },
    { title: 'Content Generation', detail: 'AI-assisted social posts and content, reviewed by a human, on a consistent schedule.' },
    { title: 'Review Requests', detail: 'Automated, well-timed review requests to grow your reputation and local ranking.' },
    { title: 'Ad Optimization', detail: 'AI-driven bidding and optimization layered on top of expert human oversight.' },
  ],
  approachHeading: 'How We Build Your System',
  approachIntro:
    'AI automation works best when it is built around your actual pipeline — not a generic template. We map it, build it, and run it for you.',
  approach: [
    { step: '01', title: 'Map Your Pipeline', detail: 'We learn how leads come in and what happens next, in person when you are local.' },
    { step: '02', title: 'Build the System', detail: 'We configure the AI agents, connect your CRM, and wire up the messaging channels.' },
    { step: '03', title: 'Launch', detail: 'Most systems go live within 1 to 2 weeks. Simple lead-response automations can run in days.' },
    { step: '04', title: 'Optimize', detail: 'We monitor performance and refine the prompts, flows, and timing over time.' },
  ],
  audienceHeading: "Who This Is For",
  audience: [
    'Businesses losing leads because nobody replies fast enough',
    'Owners drowning in follow-ups and missed calls',
    'Service companies that live and die by appointments',
    'Teams that want more output without more headcount',
    'Anyone who wants AI handled for them — no tech skills needed',
    'Local businesses that want a system built around their pipeline',
  ],
  chipsHeading: 'What We Automate',
  chips: ['AI Text Agents', 'AI Voice Agents', 'Appointment Setting', 'Follow-Up Sequences', 'Review Requests', 'CRM Integration'],
  mistakesHeading: 'Why DIY AI Tools Disappoint',
  mistakes: [
    { title: 'It is just a chatbot', detail: 'A generic bot is not a system. We automate the full pipeline — instant response, booking, follow-up, and reviews.' },
    { title: 'You have to build it yourself', detail: 'Most AI tools are a login screen and a learning curve. We do the prompt engineering and setup for you.' },
    { title: 'Slow lead response', detail: 'Replying in hours loses the sale. Our systems respond in seconds, 24/7, so you answer first.' },
    { title: 'Disconnected from your CRM', detail: 'Automation that does not talk to your systems creates more work. We integrate it into what you already use.' },
  ],
  pricingHeading: 'What to Expect',
  pricing:
    'AI automation is month-to-month with no setup fees that lock you in, and pricing depends on what we build for you. Most systems go live within 1 to 2 weeks. Your customer data stays in your own secure CRM — we never sell or share it, and you own your contacts at all times. Most local businesses spend less on this than on a single part-time hire.',
  whyUsHeading: 'Why Businesses Choose Found It Marketing',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years in marketing and ${TRACK_RECORD.adSpendManagedLong}.`,
    '2026 CLEDA Highest Traded Revenue Award winner.',
    'Fully done-for-you: we handle the prompts, APIs, and setup.',
    'Your data stays in your own CRM — we never sell or share it.',
    'No long-term contracts and no setup fees that lock you in.',
    'A local team that maps your pipeline in person.',
  ],
  faqHeading: 'AI Marketing Automation FAQ',
  faq: [
    { question: 'Is this just a chatbot, or can you automate more?', answer: 'Way more than a chatbot. We automate lead follow-up by text and voice, social posting, content, ad optimization, on-site chat and forms, and review requests — connected into one system.' },
    { question: 'How much does it cost?', answer: "It depends on what we build, but we are month-to-month with no setup fees that lock you in. You get a transparent flat price at your free demo. Most local businesses spend less than on a single part-time hire." },
    { question: 'How fast can you launch it?', answer: 'Most systems go live within 1 to 2 weeks. Simple lead-response automations can run in days. We handle the entire build.' },
    { question: 'Does this replace my staff?', answer: 'No — it frees them up. The AI handles repetitive, time-sensitive work so your team can focus on closing and serving customers.' },
    { question: 'Is my data safe and private?', answer: 'Yes. Your customer data stays in your own secure CRM. We never sell or share it, messaging runs through compliant channels, and you own your contacts at all times.' },
  ],
  relatedReading: [
    { title: 'Stop Fearing AI. Start Weaponizing It.', href: '/blog/weaponize-ai' },
    { title: 'Content is King, But AI is the Kingmaker', href: '/blog/ai-content-strategy' },
  ],
  finalCtaHeadline: 'Get a Free AI Demo',
  finalCtaSub: 'See exactly how an AI system would respond to your leads and book your appointments. No pitch, no obligation.',
};

export default function AIMarketingPillar() {
  return <ServicePillar data={data} />;
}
