/* ─── Industry Data ─── */
export interface IndustryData {
  name: string;
  slug: string;
  headline: string;
  subline: string;
  heroStat: { value: string; label: string };
  painPoints: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  ctaText: string;
}

export const industries: Record<string, IndustryData> = {
  medical: {
    name: 'Medical / Healthcare',
    slug: 'medical',
    headline: 'Patients Are Choosing Online. Are They Finding You?',
    subline:
      'Patients search Google and ask ChatGPT before they book. If they don\'t find your practice first, they book with someone else.',
    heroStat: { value: '349%', label: 'Patient Traffic Growth' },
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
    ctaText: 'Get a Free Healthcare Audit',
  },
  contractors: {
    name: 'Contractors / Home Services',
    slug: 'contractors',
    headline: 'Stop Paying Per Lead. Own Your Pipeline.',
    subline:
      'HomeAdvisor charges $50-200 per shared lead. We build you a pipeline of exclusive leads that cost less and close more.',
    heroStat: { value: '106', label: 'Calls/Month' },
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
    ctaText: 'Get a Free Contractor Audit',
  },
  dealerships: {
    name: 'Dealerships / Automotive',
    slug: 'dealerships',
    headline: 'We Scaled a Local Lot to 48 States. We Can Do It for You.',
    subline:
      'We\'ve taken automotive businesses from one location to national volume dealers. The digital infrastructure matters more than the inventory.',
    heroStat: { value: '48', label: 'States Reached' },
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
    ctaText: 'Get a Free Dealership Audit',
  },
  retail: {
    name: 'Retail / Stores',
    slug: 'retail',
    headline: 'Drive Foot Traffic and Online Orders. Both.',
    subline:
      'Your customers expect to find you online, order online, and visit in person. We build the system that makes all three work together.',
    heroStat: { value: '1,169', label: 'Direction Requests' },
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
    ctaText: 'Get a Free Retail Audit',
  },
  realtors: {
    name: 'Real Estate',
    slug: 'realtors',
    headline: 'Be the Agent Buyers and Sellers Find First.',
    subline:
      'In real estate, visibility is everything. We make sure you\'re not just another face on Zillow — you\'re THE agent in your market.',
    heroStat: { value: '#1', label: 'In Your Market' },
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
    ctaText: 'Get a Free Real Estate Audit',
  },
  lawyers: {
    name: 'Legal / Law Firms',
    slug: 'lawyers',
    headline: 'Clients Decide Before They Call. Are You the One They Choose?',
    subline:
      'Legal clients research extensively online before picking up the phone. We make sure when they search, when they ask AI, and when they compare — they find you.',
    heroStat: { value: '67%', label: 'Lead Cost Reduction' },
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
    ctaText: 'Get a Free Law Firm Audit',
  },
};
