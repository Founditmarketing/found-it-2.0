/* ─── Industry Data ─── */
export interface IndustryData {
  name: string;
  slug: string;
  /** Concise SEO meta description. */
  metaDescription: string;
  headline: string;
  subline: string;
  heroStat: { value: string; label: string };
  /** Answer-first definition block (for SEO/GEO + AI Overviews). */
  definitionHeading: string;
  definition: string;
  painPoints: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  /** FAQ for visible content + FAQPage schema. */
  faqs: { question: string; answer: string }[];
  /** Attribution tag for the embedded lead form. */
  formSource: string;
  ctaText: string;
}

export const industries: Record<string, IndustryData> = {
  medical: {
    name: 'Medical / Healthcare',
    slug: 'medical',
    metaDescription:
      'Digital marketing for medical practices and healthcare providers: AI search optimization, Google Maps dominance, and websites that book appointments. 13+ years, $2.3B+ in client revenue across all services. Free healthcare audit.',
    headline: 'Patients Are Choosing Online. Are They Finding You?',
    subline:
      'Patients search Google and ask ChatGPT before they book. If they don\'t find your practice first, they book with someone else.',
    heroStat: { value: '349%', label: 'Patient Traffic Growth' },
    definitionHeading: 'What Does Medical Marketing Involve?',
    definition:
      'Medical and healthcare marketing is how a practice gets found and chosen by patients online — across Google Search, the Google Maps "map pack," and now AI assistants like ChatGPT and Google AI Overviews. For most practices it comes down to three things working together: ranking above aggregators (ZocDoc, Healthgrades, WebMD), winning the local map pack for each specialty, and a fast, mobile-first website that turns a search into a booked appointment. Found It Marketing builds all three for medical and dental practices.',
    painPoints: [
      {
        title: 'Aggregators rank above you',
        description: 'ZocDoc, Healthgrades, and WebMD steal patients who should be coming directly to your practice.',
      },
      {
        title: 'Invisible on Google Maps',
        description: 'Your competitors in the top 3 get 93% of the clicks. You\'re on page 2.',
      },
      {
        title: 'AI search is the new referral',
        description: 'Patients ask ChatGPT "best dermatologist near me." If you\'re not optimized for AI, you\'re invisible.',
      },
    ],
    solutions: [
      {
        title: 'AI search optimization',
        description: 'We make Google AI, ChatGPT, and Perplexity recommend YOUR practice when patients ask.',
      },
      {
        title: 'Google Maps dominance',
        description: 'Top 3 in Maps for every specialty you treat. Profile optimization, citations, review generation.',
      },
      {
        title: 'Websites that book appointments',
        description: 'Modern, mobile-first design with online booking integration that converts visitors into patients.',
      },
    ],
    faqs: [
      { question: 'How do medical practices get more patients online?', answer: 'By winning the three places patients look: organic Google results (above aggregators like Healthgrades), the Google Maps map pack for each specialty, and AI assistants like ChatGPT and Google AI Overviews. We combine local SEO, AI search optimization, and a conversion-focused website with online booking.' },
      { question: 'Is healthcare marketing HIPAA-compliant?', answer: 'The marketing itself (SEO, ads, website, reviews) does not handle protected health information. We set up tracking and forms so patient data stays in your compliant systems, and we follow platform rules for healthcare advertising.' },
      { question: 'How long until a practice sees more patients?', answer: 'Paid search can drive booked appointments within the first few weeks. Local SEO and AI visibility build over 60 to 120 days. We report monthly on calls, form fills, and booked appointments — not vanity metrics.' },
      { question: 'Do you work with dental and specialty practices?', answer: 'Yes. We work with primary care, dental, dermatology, med spas, and specialty practices. The playbook is the same: rank for every service in every location you serve, and convert that traffic into appointments.' },
    ],
    formSource: 'industry_medical',
    ctaText: 'Get a Free Healthcare Audit',
  },
  contractors: {
    name: 'Contractors / Home Services',
    slug: 'contractors',
    metaDescription:
      'Digital marketing for contractors and home-service businesses: exclusive leads from Google Ads, top-3 Maps rankings, and websites that book jobs. Stop renting shared leads. Free contractor audit.',
    headline: 'Stop Paying Per Lead. Own Your Pipeline.',
    subline:
      'HomeAdvisor charges $50-200 per shared lead. We build you a pipeline of exclusive leads that cost less and close more.',
    heroStat: { value: '106', label: 'Calls/Month' },
    definitionHeading: 'What Does Contractor Marketing Involve?',
    definition:
      'Contractor and home-services marketing is about building a pipeline of exclusive, high-intent leads you own — instead of renting shared leads from Angi, HomeAdvisor, or Thumbtack. The system has three parts: Google Ads (including Local Services Ads) that deliver exclusive calls, local SEO that puts you in the top 3 of Google Maps for every service and area you cover, and a website that showcases your work and converts visitors into booked jobs. Found It Marketing builds and manages all three.',
    painPoints: [
      {
        title: 'Lead services are eating your margin',
        description: 'HomeAdvisor, Angi, and Thumbtack charge $50-200 per lead — and you\'re sharing it with 5 other contractors.',
      },
      {
        title: 'Feast-or-famine lead flow',
        description: 'Some months you turn away work, other months your crew sits idle. No system for consistent leads.',
      },
      {
        title: 'No online presence that matches your work',
        description: 'You do incredible work but your website doesn\'t reflect it. No portfolio, no reviews, no trust signals.',
      },
    ],
    solutions: [
      {
        title: 'Google Ads that deliver exclusive leads',
        description: 'PPC campaigns that deliver leads at a fraction of what Angi charges — and they\'re exclusively yours.',
      },
      {
        title: 'Top 3 in Google Maps for every service',
        description: 'Local SEO for every service you offer in every area you serve. Google Business Profile, citations, reviews.',
      },
      {
        title: 'Websites that showcase your work',
        description: 'Custom portfolio sites with click-to-call, forms, and reviews that convert visitors into booked jobs.',
      },
    ],
    faqs: [
      { question: 'How do contractors get exclusive leads instead of shared ones?', answer: 'With Google Ads and Local Services Ads pointed at your own account and website, every lead is exclusively yours — not shared with five competitors like Angi or HomeAdvisor. Paired with local SEO, your cost per lead typically drops while close rates rise.' },
      { question: 'How much should a contractor spend on marketing?', answer: 'Most home-service businesses start with $1,500 to $5,000/month in ad spend, scaled to the jobs you can handle and the value of each job. You will get specific projections in your free audit.' },
      { question: 'How do I show up in the Google Maps top 3?', answer: 'A complete, optimized Google Business Profile, consistent citations, a steady flow of reviews, and service/area pages on your site. We handle all of it and report on your map rankings monthly.' },
      { question: 'Do I own the leads and accounts?', answer: 'Yes. We work inside your own Google Ads and Business Profile accounts, and you own your website and data. If you ever leave, you keep everything.' },
    ],
    formSource: 'industry_contractors',
    ctaText: 'Get a Free Contractor Audit',
  },
  dealerships: {
    name: 'Dealerships / Automotive',
    slug: 'dealerships',
    metaDescription:
      'Automotive and dealership marketing that scales: geo-targeted PPC, AI search optimization, and conversion-optimized inventory websites. We scaled a local lot to 48 states. Free dealership audit.',
    headline: 'We Scaled a Local Lot to 48 States. We Can Do It for You.',
    subline:
      'We\'ve taken automotive businesses from one location to national volume dealers. The digital infrastructure matters more than the inventory.',
    heroStat: { value: '48', label: 'States Reached' },
    definitionHeading: 'What Does Dealership Marketing Involve?',
    definition:
      'Automotive marketing is the system that gets buyers to your inventory instead of to aggregators like AutoTrader, CarGurus, and Cars.com. It combines geo-targeted Google Ads with smart bidding and dynamic inventory ads, AI search optimization so assistants recommend your dealership, and inventory pages built with VIN-level SEO and high-converting vehicle detail pages. Found It Marketing has used this exact infrastructure to scale an automotive business from one lot to a national volume dealer across 48 states.',
    painPoints: [
      {
        title: 'Cost-per-click is crushing margins',
        description: 'Automotive keywords cost $5-15+ per click. Without smart bidding and optimized landing pages, you\'re burning budget.',
      },
      {
        title: 'Aggregators eat your organic traffic',
        description: 'AutoTrader, CarGurus, and Cars.com dominate search results. Your actual inventory pages are buried.',
      },
      {
        title: 'No AI search strategy',
        description: 'Customers ask AI "best used car dealer near me." If you\'re not optimized for that, you\'re losing the next generation of buyers.',
      },
    ],
    solutions: [
      {
        title: 'National PPC with geo-targeting',
        description: 'Campaigns that scale from 1 zip code to 48 states with AI-powered bidding and dynamic inventory ads.',
      },
      {
        title: 'AI search optimization',
        description: 'We make ChatGPT, Google AI, and every voice assistant recommend YOUR dealership first.',
      },
      {
        title: 'Conversion-optimized websites',
        description: 'Inventory pages with VIN-level SEO, real-time feeds, and VDPs that turn browsers into buyers.',
      },
    ],
    faqs: [
      { question: 'How do dealerships compete with AutoTrader and CarGurus?', answer: 'By owning the high-intent searches those aggregators bid on, with geo-targeted Google Ads and inventory pages optimized at the VIN level so your own listings rank. We also optimize for AI search so assistants recommend your dealership directly.' },
      { question: 'Can you scale a single location to multiple markets?', answer: 'Yes — it is exactly what we have done, taking an automotive business from one lot to a national volume dealer across 48 states. Geo-targeted campaigns and dynamic inventory ads let you expand market by market.' },
      { question: 'How do you keep automotive cost-per-click under control?', answer: 'Smart bidding tied to real conversions, tight negative-keyword lists, and landing pages built to convert. The goal is lower cost per sold unit, not just cheap clicks.' },
      { question: 'Do you handle inventory feeds?', answer: 'Yes. We integrate real-time inventory feeds so your vehicle detail pages and dynamic ads stay current automatically.' },
    ],
    formSource: 'industry_dealerships',
    ctaText: 'Get a Free Dealership Audit',
  },
  retail: {
    name: 'Retail / Stores',
    slug: 'retail',
    metaDescription:
      'Retail and local store marketing that drives foot traffic and online orders: Google Maps optimization, social media that sells, and e-commerce-ready websites. Free retail audit.',
    headline: 'Drive Foot Traffic and Online Orders. Both.',
    subline:
      'Your customers expect to find you online, order online, and visit in person. We build the system that makes all three work together.',
    heroStat: { value: '1,169', label: 'Direction Requests' },
    definitionHeading: 'What Does Retail Marketing Involve?',
    definition:
      'Retail marketing for local stores connects three channels into one system: Google Maps and local search that drive foot traffic, social media that turns followers into buyers, and a website (with e-commerce when it fits) that captures online orders and local pickup. The biggest lever for most stores is a fully optimized Google Business Profile with products, posts, and reviews — that is what wins the "near me" searches Amazon cannot. Found It Marketing builds the whole system so online and in-store reinforce each other.',
    painPoints: [
      {
        title: 'Amazon is stealing your customers',
        description: 'Local shoppers default to online because your site doesn\'t rank for product searches.',
      },
      {
        title: 'Social media that doesn\'t convert',
        description: 'You\'re posting regularly but followers aren\'t becoming customers. No connection to revenue.',
      },
      {
        title: 'Google Business not optimized',
        description: 'Incomplete profile, outdated hours, no product listings — local searchers skip right past you.',
      },
    ],
    solutions: [
      {
        title: 'Google Maps optimization for foot traffic',
        description: 'Complete Google Business optimization with product listings, posts, and review generation for maximum local visibility.',
      },
      {
        title: 'Social media that drives sales',
        description: 'Facebook and Instagram campaigns that drive both online orders and foot traffic with conversion tracking.',
      },
      {
        title: 'E-commerce ready websites',
        description: 'Online store with local pickup, delivery, and product catalog that works with your POS system.',
      },
    ],
    faqs: [
      { question: 'How do local stores compete with Amazon?', answer: 'By winning local intent Amazon cannot: "near me" searches, Google Maps, and same-day pickup. A fully optimized Google Business Profile plus local SEO and social puts you in front of shoppers who want to buy locally today.' },
      { question: 'How do I get more foot traffic from Google?', answer: 'An optimized Google Business Profile with accurate hours, photos, product listings, regular posts, and steady reviews is the single biggest driver of direction requests and store visits. We manage all of it.' },
      { question: 'Can social media actually drive store sales?', answer: 'Yes, when it is tied to revenue rather than likes. We run Facebook and Instagram campaigns with conversion tracking for both online orders and in-store visits, and report on what actually sells.' },
      { question: 'Do you build online stores?', answer: 'Yes. We build e-commerce-ready websites with local pickup, delivery, and a product catalog that can integrate with your POS so online and in-store stay in sync.' },
    ],
    formSource: 'industry_retail',
    ctaText: 'Get a Free Retail Audit',
  },
  realtors: {
    name: 'Real Estate',
    slug: 'realtors',
    metaDescription:
      'Real estate marketing that makes you the agent buyers and sellers find first: personal-brand websites, hyper-local SEO, and AI visibility. Stop being just a face on Zillow. Free real estate audit.',
    headline: 'Be the Agent Buyers and Sellers Find First.',
    subline:
      'In real estate, visibility is everything. We make sure you\'re not just another face on Zillow — you\'re THE agent in your market.',
    heroStat: { value: '#1', label: 'In Your Market' },
    definitionHeading: 'What Does Real Estate Marketing Involve?',
    definition:
      'Real estate marketing is how an agent becomes the recognized expert in their market instead of just another profile on Zillow. It centers on three things: a personal-brand website that captures leads and showcases your listings, hyper-local SEO that makes you the top result for "homes for sale in [your area]," and AI visibility so the next generation of buyers asking ChatGPT and Google AI for an agent get pointed to you. Found It Marketing builds the brand and the visibility that compound over time.',
    painPoints: [
      {
        title: 'Zillow is your competition',
        description: 'Zillow, Realtor.com, and Redfin dominate search results. Your personal website is invisible.',
      },
      {
        title: 'No personal brand differentiation',
        description: 'Your brokerage website makes you look like every other agent. No unique positioning.',
      },
      {
        title: 'AI home search is coming fast',
        description: 'Buyers are asking AI for agent recommendations. If you\'re not optimized, you won\'t be recommended.',
      },
    ],
    solutions: [
      {
        title: 'Personal brand websites',
        description: 'Custom websites that capture buyer leads, showcase your listings, and position you as THE market expert.',
      },
      {
        title: 'Hyper-local SEO',
        description: 'Target specific neighborhoods and zip codes. Be the top result for "homes for sale in [your area]."',
      },
      {
        title: 'AI visibility optimization',
        description: 'Structured data and content so AI home search platforms recommend YOU to buyers and sellers.',
      },
    ],
    faqs: [
      { question: 'How do real estate agents compete with Zillow?', answer: 'Not by outranking Zillow everywhere — but by owning your name, your neighborhoods, and your expertise. A personal-brand website plus hyper-local SEO and AI visibility makes you the agent buyers and sellers find and trust in your specific market.' },
      { question: 'Do I need my own website if my brokerage gives me one?', answer: 'Yes. Brokerage pages make you look like every other agent and you do not control them. A personal-brand site captures your own leads, ranks for your market, and is an asset you own.' },
      { question: 'What is hyper-local SEO for agents?', answer: 'Targeting specific neighborhoods, school zones, and zip codes with dedicated content so you rank for "homes for sale in [area]" and become the local authority — instead of competing on broad, national terms.' },
      { question: 'How does AI search affect real estate?', answer: 'Buyers increasingly ask AI assistants for agent and neighborhood recommendations. We structure your content and data so those AI platforms recommend you to buyers and sellers in your market.' },
    ],
    formSource: 'industry_realtors',
    ctaText: 'Get a Free Real Estate Audit',
  },
  lawyers: {
    name: 'Legal / Law Firms',
    slug: 'lawyers',
    metaDescription:
      'Law firm marketing that turns research into consultations: smart PPC on expensive legal keywords, authority-building content, and conversion-optimized websites. 67% lead-cost reduction. Free law firm audit.',
    headline: 'Clients Decide Before They Call. Are You the One They Choose?',
    subline:
      'Legal clients research extensively online before picking up the phone. We make sure when they search, when they ask AI, and when they compare — they find you.',
    heroStat: { value: '67%', label: 'Lead Cost Reduction' },
    definitionHeading: 'What Does Law Firm Marketing Involve?',
    definition:
      'Law firm marketing is about being the firm a client chooses after they research — because legal clients decide largely before they ever call. It combines smart PPC that maximizes ROI on the most expensive keywords in digital, authority-building content that positions your attorneys as the definitive experts (and that AI assistants cite), and a conversion-optimized website with practice-area pages, attorney bios, results, and trust signals. Found It Marketing builds all three to turn online research into booked consultations.',
    painPoints: [
      {
        title: 'Most expensive keywords in digital',
        description: 'Legal keywords cost $50-200+ per click. Without optimized campaigns, your ad budget disappears.',
      },
      {
        title: 'Directory sites outrank your firm',
        description: 'Avvo, FindLaw, and Justia rank above you and sell leads to your competitors.',
      },
      {
        title: 'No AI content strategy',
        description: 'People ask ChatGPT "do I need a lawyer for [situation]." If your content isn\'t structured for AI, you lose the consultation.',
      },
    ],
    solutions: [
      {
        title: 'Smart PPC on expensive keywords',
        description: 'AI-powered bidding and conversion-focused landing pages that maximize ROI on the most expensive keywords in digital.',
      },
      {
        title: 'Authority-building content',
        description: 'Legal content that positions your attorneys as definitive experts, builds topical authority, and drives consultations.',
      },
      {
        title: 'Conversion-optimized law firm websites',
        description: 'Attorney bios, practice area pages, results section, and trust signals that convert visitors into consultations.',
      },
    ],
    faqs: [
      { question: 'How do law firms get more cases online?', answer: 'By being chosen at the research stage: smart PPC on high-intent legal searches, authority content that answers the questions clients ask (and that AI cites), and a website that converts. Together they turn online research into booked consultations.' },
      { question: 'Legal clicks are so expensive — is PPC worth it?', answer: 'Yes, when managed properly. With AI-powered bidding, tight negative keywords, and conversion-focused landing pages, we have reduced lead costs significantly (e.g., a 67% reduction) while improving lead quality. One signed case usually pays for months of spend.' },
      { question: 'How do you beat Avvo, FindLaw, and Justia?', answer: 'We build topical authority around your practice areas with structured content the directories do not have, optimize your Google Business Profile, and capture high-intent searches with PPC — so clients reach your firm directly instead of a directory selling your lead.' },
      { question: 'Does AI search matter for law firms?', answer: 'Increasingly, yes. People ask ChatGPT and Google AI questions like "do I need a lawyer for [situation]." We structure your content so AI assistants surface your firm as the expert answer, capturing the consultation.' },
    ],
    formSource: 'industry_lawyers',
    ctaText: 'Get a Free Law Firm Audit',
  },
};
