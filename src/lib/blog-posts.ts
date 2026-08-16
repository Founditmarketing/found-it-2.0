import { MAP_VALUE, OS_PRICING } from './site';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  image: string;
};

export const blogPosts: Post[] = [
    {
        slug: 'rented-software-no-data-rights',
        title: 'The Rent Isn’t the Problem. The Hostage Is.',
        date: '2026-08-16',
        excerpt: 'Rented software holds your customers, your invoices, and your history in a format you don’t own, at a price they set next year. Here is what “no data rights” actually costs — and the two questions that expose it.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/rented-software-hostage.png',
        content: `
<p>Here is the deal you signed, in plain English: you pay every month to use their software, and everything that software knows — your customers, your invoices, your job history, seven years of your business's memory — lives in their format, on their servers, under their terms.</p>
<p>You rent the tool. They hold the memory. That's the deal, and almost every small business in America is in it.</p>

<h3>The price is whatever they say next</h3>
<p>When your records live inside their product, you don't negotiate — you receive announcements. QuickBooks Online's list prices rose four times in three years: the Plus plan went from $85 a month in 2023 to $140 by August 2026 — up 65% — and Advanced went from $200 to $340. Those are public numbers with dates on them; go check.</p>
<p>Nobody's saying the software stopped working. It got more expensive because leaving is harder than paying. When the switching cost is the product, the price has no ceiling.</p>

<h3>They can retire the product out from under you</h3>
<p>QuickBooks Desktop customers didn't decide to leave Desktop — Intuit stopped selling it in 2024 and put support on a countdown. When the countdown ends, tax tables freeze and bank feeds disconnect. Thousands of businesses got moved to a product they didn't choose, at a higher price, on somebody else's schedule.</p>
<p>That's what "no data rights" means in practice. Not that you can't see your data — that you can't <em>stay</em> where it is, and you can't take it somewhere real.</p>

<h3>The export is not your data</h3>
<p>Every platform will tell you that you can export any time. What comes out is a spreadsheet of shadows: the attachments don't come, the history doesn't come, the workflows and custom fields and everything that made it <em>your</em> system doesn't come. The export exists so the claim "it's your data" is technically true — and practically useless.</p>
<p>Your operational memory in a format only their software can fully read is not your data. It's their leverage.</p>

<h3>Two questions that expose the whole thing</h3>
<p>Ask any software vendor these two questions:</p>
<p><strong>"If I stop paying, what do I keep?"</strong> and <strong>"Can I run this without you?"</strong></p>
<p>For rented software the honest answers are <em>nothing</em> and <em>no</em>. Every other term in the contract is decoration around those two answers.</p>

<h3>The alternative exists now</h3>
<p>Custom software used to cost $50,000 to $150,000 and take half a year — so renting was the only sane option. AI changed the economics. We build systems fitted to one business at a time, and the answers to the two questions flip: stop paying, and you keep <strong>everything — the code and the data, one hundred percent.</strong> The monthly fee is maintenance, not rent.</p>
<p>The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month to month. And nothing switches on day one — the new system runs beside your current software, penny-matched against it every night, until the numbers say you can leave and you say go. That's how the biggest roofer in central Louisiana moved his whole operation onto a system he owns — the same books that surfaced $195,882.75 sitting in open receivables and caught a $19,000 error his old software never saw.</p>
<p>Nobody should rent you your own business back.</p>

<h3>Start with the map</h3>
<p>Every fitting starts with a <a href="/blog/what-is-a-software-map">software map</a> — thirty minutes, screen-shared, the app we'd build if we owned your company, on one page. You keep it. (${MAP_VALUE.line}.) <a href="/contact">Send your number</a> and Trevor calls you — or <a href="/lp/she-answers">talk to our AI secretary</a> and she'll take it herself.</p>
        `,
    },
    {
        slug: 'what-is-a-software-map',
        title: 'What Is A Software Map?',
        date: '2026-08-15',
        excerpt: 'Every system we build starts with one page. Here is a real one — drawn this week for a wholesale nursery in central Louisiana — and how to read it.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/what-is-a-software-map.png',
        content: `
<p>Every system we build starts the same way: one page.</p>
<p>We call it the software map. It answers the only question that matters: <strong>if we owned your company, what app would we build?</strong> Thirty minutes on a video call, screen-shared, walking your operation. It goes on one page. You keep it. (${MAP_VALUE.line} — it opens every fitting we do.)</p>

<h3>A real one</h3>
<p>This week: Roxanne, a wholesale plant nursery in central Louisiana. Trucks, crews, fifteen brokers texting orders in fifteen formats. The business lives in eight places at once — a QuickBooks she never opens, Google Sheets, Apple Notes screenshots texted to the crew, a drawer of old invoices, and her own memory.</p>
<p>The week before we met, one hand-copied order missed its last line. Forty-four plants nearly didn't make the truck to Austin. Healthy business. Wrong software.</p>
<p>Here's the map:</p>
<p><img src="/images/blog/roxanne-software-map-v1.png" alt="Roxanne's OS — a real software map: eight places the business lives today, and what one owned system replaces, piece by piece" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>How to read it</h3>
<p><strong>The top is today</strong> — every place the business lives, in the owner's own words. Most businesses find eight. Yours has a list like this whether it's written down or not.</p>
<p><strong>The middle is the map</strong>: each piece, replaced by one part of one system. Texted orders become paste-in intake where every line is captured and anything unrecognized flags red — never silently dropped. That rule exists because of those 44 plants. Handwritten pull sheets become printed ones with trailer assignments on them. Who-owes-you stops hiding in the bookkeeper's QuickBooks and stands on one screen, oldest first, every morning.</p>
<p><strong>The tags — built, next, later — are the tell.</strong> A real map states its order. A promise of everything at once is a brochure.</p>

<h3>After the map</h3>
<p>The map becomes the system, fitted in weeks. It runs <strong>beside</strong> the old software, penny-matched against it every night, and nothing switches until the numbers match and the owner says go. That's how we move a business: without betting it.</p>
<p><strong>The system is yours. The code and the data, one hundred percent.</strong> The price is public — ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month to month. Nobody rents you your own business back.</p>

<h3>Get yours</h3>
<p>Thirty minutes. Screen-shared. You leave with the page above, drawn for your business. <a href="/contact">Get your map</a> — or <a href="/lp/she-answers">tell our AI secretary</a> and she'll set it up while you talk.</p>
        `,
    },
    {
        slug: 'weaponize-ai',
        title: 'Stop Fearing AI. Start Weaponizing It.',
        date: '2025-01-15',
        excerpt: 'The companies terrified of AI replacing them will be replaced by the companies weaponizing it to dominate their markets. Here is how you turn Generative AI into your unfair advantage.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/weaponize-ai.png',
        content: `
<p>There is a dangerous, pervasive fear echoing through boardrooms across the country: <em>"Is AI going to replace us?"</em></p>
<p>Let's be brutally honest. If your entire business model relies on low-level data entry or churning out generic, soulless content, yes. You are in trouble. But for true industry leaders—the actual experts, the service providers, the innovators—that fear is misplaced. You shouldn't be afraid of AI. <strong>You should be weaponizing it.</strong></p>

<h3>The Difference Between a Toy and an Engine</h3>
<p>Most businesses are treating AI like a novelty. They use ChatGPT to draft a polite email or summarize a meeting. That is the equivalent of using a Ferrari to drive to the end of your driveway to get the mail.</p>
<p>The companies that will dominate the next decade understand that AI is an engine for unparalleled scale, velocity, and market capture. They aren't asking AI to write a blog post; they are architecting entirely new funnels where AI dynamically personalizes the user experience, anticipates objections before they happen, and drastically lowers Customer Acquisition Cost (CAC).</p>

<h3>The Rise of Generative Engine Optimization (GEO)</h3>
<p>Traditional SEO is bleeding out. Waiting for a user to type a 2010-style keyword into a search bar, scroll past four ads, and click your blue link is an outdated paradigm.</p>
<p>In 2025 and beyond, users ask complex questions and expect immediate, synthesized answers. Google's AI Overviews, Perplexity, and ChatGPT Search are the new gateways. This is where <strong>Generative Engine Optimization (GEO)</strong> comes in.</p>
<p>Weaponizing AI means structuring your digital footprint—your data, your code, your content—so flawlessly that these Large Language Models (LLMs) have no choice but to construct their answers around <em>your</em> brand. You are no longer fighting for a ranking position; you are commanding the AI to recommend you as the definitive, unarguable solution.</p>
<p>When you stop playing the old SEO game and start feeding the AI the structured data it craves, you turn the models into your unpaid, 24/7 sales force.</p>

<h3>Waiting is Corporate Suicide</h3>
<p>There is a temptation to "wait and see where the dust settles" with AI search. The dust isn't settling; the terrain is being terraformed.</p>
<p>The early adopters who establish themselves as the definitive authorities in the AI Knowledge Graphs today will construct an impenetrable moat. The models learn from what they index early. If your competitor secures that mental real estate in the LLM's architecture, displacing them later will cost ten times the capital and effort.</p>

<h3>Your Immediate Action Plan</h3>
<p>Stop asking how to survive AI. Ask how to use it to obliterate your competition.</p>
<ol>
<li><strong>Audit Your Entity:</strong> Does ChatGPT even know who you are? If an AI can't confidently describe your business, your services, and why you are the best in your area, you don't exist in the modern landscape.</li>
<li><strong>Implement Structured Data (JSON-LD):</strong> Stop hoping AI figures out your website. Hardcode the answers into your site's architecture. </li>
<li><strong>Deploy High-Velocity Acquisition:</strong> Use AI-powered bidding in your paid media to find the exact moment a user is ready to buy, crushing manual optimization.</li>
</ol>
<p>The tools for total market saturation are here. The only question is whether you will wield them, or let your competitors use them against you.</p>
        `,
    },
    {
        slug: 'intro-to-geo',
        title: 'The Future is Answer Engines: An Intro to GEO',
        date: '2024-07-29',
        excerpt: 'Search is evolving. Generative Engine Optimization (GEO) turns your brand into the definitive answer AI engines give.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/intro-to-geo.png',
        content: `
<p>For two decades, Search Engine Optimization (SEO) has been the undisputed king of digital marketing. But the kingdom is changing. The rise of AI-powered "answer engines" like Google's AI Overviews and Perplexity is rewriting the rules of online visibility. Welcome to the era of Generative Engine Optimization (GEO).</p>
<h3>What is GEO?</h3>
<p>GEO is a fundamental shift in strategy. Where SEO focuses on ranking a list of blue links, GEO focuses on becoming the single, authoritative answer that an AI model presents to a user. It's the difference between being a library book and being the librarian's definitive recommendation.</p>
<h3>Why It Matters Now</h3>
<p>Users are learning to ask questions instead of just typing keywords. They want direct answers, not a list of websites to sift through. If your brand isn't the source of that answer, you're invisible.</p>
<p>The goal is no longer just to be on the first page; the goal is to be the answer itself.</p>
        `,
    },
    {
        slug: 'common-ppc-mistakes',
        title: '5 Common PPC Mistakes Costing You Money',
        date: '2024-07-22',
        excerpt: 'The five most common—and costly—PPC mistakes we see in ad accounts every day, and what to do instead.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/common-ppc-mistakes.png',
        content: `
<p>Pay-Per-Click (PPC) advertising is a powerful driver of growth — and an easy place to waste your budget. We see the same mistakes in account after account. Here are the top five:</p>
<h3>1. Neglecting Negative Keywords</h3>
<p>Failing to add negative keywords means your ads show up for irrelevant searches, wasting clicks and money. Regularly review your search term reports to find and exclude terms that don't match user intent.</p>
<h3>2. Poor Landing Page Experience</h3>
<p>You can have the best ad in the world, but if it leads to a slow, confusing, or non-mobile-friendly landing page, you won't get conversions. Ensure your landing page is a seamless extension of your ad's promise.</p>
<h3>3. Ignoring Ad Extensions</h3>
<p>Ad extensions are free real estate! Using sitelinks, callouts, and structured snippets makes your ad bigger, more informative, and more likely to be clicked.</p>
<h3>4. Using Broad Match Everywhere</h3>
<p>While broad match has its place, relying on it too heavily gives Google too much control and can lead to wasted spend on irrelevant queries. Use phrase and exact match to control where your ads appear.</p>
<h3>5. Not Tracking Conversions Properly</h3>
<p>If you aren't accurately tracking what a "conversion" means for your business (a sale, a form submission, a phone call), you're flying blind. Proper conversion tracking is the only way to know what's working and optimize for ROI.</p>
        `,
    },
    {
        slug: 'local-seo-dominance',
        title: 'Dominating the Map Pack: Your Guide to Local SEO',
        date: '2024-07-15',
        excerpt: 'For local businesses, the Google Map Pack is the most valuable real estate online. Learn the key strategies to secure your spot and drive high-intent customers to your door.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/local-seo-dominance.png',
        content: `
<p>If you run a local business, you know that visibility in your immediate area is everything. While national SEO is important, winning the local search game—specifically, the Google Map Pack—is what drives foot traffic and phone calls. Here's how to do it.</p>
<h3>1. Master Your Google Business Profile</h3>
<p>Your Google Business Profile (GBP) is the cornerstone of local SEO. Treat it like a second homepage. Fill out every single section completely: services, products, hours, photos, and especially Q&As. A complete profile signals to Google that you are an active and legitimate business.</p>
<h3>2. Cultivate a Review Strategy</h3>
<p>Reviews are a massive ranking factor for the Map Pack. More importantly, they are a trust signal for potential customers. Actively encourage your happy customers to leave reviews, and always respond to them—both positive and negative. This shows you're engaged and care about customer feedback.</p>
<h3>3. Build Local Citations</h3>
<p>A citation is any online mention of your business's name, address, and phone number (NAP). Consistency is key. Ensure your NAP is identical across all major directories like Yelp, Yellow Pages, and industry-specific sites. This consistency builds Google's confidence in your location and contact information.</p>
<h3>4. Create Hyperlocal Content</h3>
<p>Write content that is explicitly about your service area. Create pages for specific neighborhoods or towns you serve. Mention local landmarks or events. This tells Google that you are not just located in an area, but you are an active part of that community.</p>
        `,
    },
    {
        slug: 'ai-content-strategy',
        title: 'Content is King, But AI is the Kingmaker',
        date: '2024-07-08',
        excerpt: 'Generative AI like Google Gemini is changing how content is created and consumed. Discover how to adapt your content strategy to thrive in the new age of AI-driven search.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/ai-content-strategy.png',
        content: `
<p>Content has always been the foundation of digital marketing. But the rise of powerful generative AI models like Google Gemini means the way we create and strategize content must evolve. AI is no longer just a tool; it's a collaborator and a new kind of audience.</p>
<h3>Shift from Keywords to Concepts</h3>
<p>AI-driven search understands topics and concepts, not just keywords. Your content strategy should focus on building "topical authority." Instead of writing one article about "roof repair," create a cluster of interconnected articles covering "common roof leak causes," "shingle vs. metal roofing," and "emergency roof repair costs." This signals to AI that you are an expert on the entire topic.</p>
<h3>Use AI as Your Creative Partner</h3>
<p>Struggling with writer's block? Use AI to brainstorm blog post ideas, generate outlines, and even write first drafts. The key is to use it as a starting point. An expert human must always refine, edit, and add unique insights to the AI-generated content to ensure it meets quality standards and reflects your brand's voice.</p>
<h3>Optimize for "The Answer"</h3>
<p>The goal is no longer just to rank, but to be the source of the answer in an AI overview. Structure your content with clear headings, bulleted lists, and concise answers to common questions. Use schema markup to give AI explicit clues about your content's meaning. Think of it as spoon-feeding the AI exactly what it needs to see you as the most authoritative source.</p>
        `,
    },
    {
        slug: 'local-business-social-media-budget',
        title: 'How Much Should a Local Business Spend on Social Media?',
        date: '2026-05-20',
        excerpt: 'A straight answer on social media budgets for local businesses — how to split spend between content and paid ads, and how to tell if it is actually working.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/common-ppc-mistakes.png',
        content: `
<p>It is the first question almost every local business owner asks us: "What should I actually be spending on social media?" Here is the answer.</p>
<h3>Separate the Two Budgets</h3>
<p>Social media spending really has two buckets, and confusing them is where most businesses go wrong:</p>
<ol>
<li><strong>Management and content</strong> — the cost of strategy, graphics, copy, video, scheduling, and reporting. This is the engine that keeps consistent, on-brand content going out.</li>
<li><strong>Paid ad spend</strong> — the money that goes directly to Facebook, Instagram, or TikTok to put your offers in front of nearby customers.</li>
</ol>
<p>A common mistake is paying for ads with no content engine behind them, or posting organically with no budget to amplify what works. The two compound when run together.</p>
<h3>What Local Businesses Typically Invest</h3>
<p>Most local businesses we work with spend less on professional social media management than they would on a single part-time hire — and get a far more predictable output. On the paid side, even a modest, well-targeted local ad budget can outperform a much larger budget that is spread thin or pointed at the wrong audience.</p>
<h3>How to Know If It Is Working</h3>
<p>Ignore likes and follower counts as your primary scorecard. Track the metrics that pay your bills: phone calls, form fills, booked appointments, and walk-ins. If your social spend is not moving those over a 90-day window, the strategy — not the budget — is usually the problem.</p>
<p>Your budget should be built around your market. See our <a href="/social-media-management">social media management</a> service or <a href="/contact">talk to Trevor</a>.</p>
        `,
    },
    {
        slug: 'organic-vs-paid-social-local-business',
        title: 'Organic vs. Paid Social: What Local Businesses Actually Need',
        date: '2026-05-27',
        excerpt: 'Organic content builds trust; paid social drives speed. Here is how local businesses should combine the two instead of picking one.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/ai-content-strategy.png',
        content: `
<p>One of the most common debates we hear from local business owners is whether to focus on organic social media or paid ads. It is the wrong question. You need both — and they do different jobs.</p>
<h3>What Organic Social Does Well</h3>
<p>Organic content — your regular posts, reels, and stories — builds trust and authority over time. It shows prospects you are active, legitimate, and good at what you do. It is also what people check after they have heard about you, right before they decide to call. Organic is the foundation, but it is slow and its reach is limited by the platforms.</p>
<h3>What Paid Social Does Well</h3>
<p>Paid social is speed and precision. With the right targeting, you can put a specific offer in front of people in your exact service area, today. It is the fastest way to generate leads from social, but if you point ads at a weak profile or a bad landing experience, you just pay to lose money faster.</p>
<h3>How to Combine Them</h3>
<p>The pattern that works for local businesses: build a steady stream of organic content so your profile looks credible, identify the posts that get real engagement, then amplify those proven winners with paid budget targeted to your local market. You let organic tell you what resonates, then pay to scale it.</p>
<p>This is exactly how we run our <a href="/social-media-management">social media management</a> program. <a href="/contact">Book a strategy session</a> and we will build it for your business.</p>
        `,
    },
    {
        slug: 'social-media-content-engine',
        title: 'What a Real Social Media Content Engine Looks Like',
        date: '2026-06-03',
        excerpt: 'Random posting fails. A content engine — themes, formats, and a calendar built to convert — is what actually drives calls. Here is how to build one.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/local-seo-dominance.png',
        content: `
<p>Most local businesses do not have a social media problem — they have a consistency problem. They post when they remember to, run out of ideas, and quit before anything compounds. The fix is not "post more." It is building a content engine: a repeatable system that produces on-brand content without depending on inspiration.</p>
<h3>1. Define Your Content Pillars</h3>
<p>Pick three to five recurring themes that map to what your customers care about — for example: behind-the-scenes, customer results, education, offers, and team/culture. Every post fits a pillar, so you are never staring at a blank page.</p>
<h3>2. Standardize Your Formats</h3>
<p>Turn each pillar into repeatable formats: a weekly tip reel, a monthly customer spotlight, a seasonal promotion graphic. Formats make production fast and keep your feed coherent instead of random.</p>
<h3>3. Run It On a Calendar</h3>
<p>Map formats to a calendar so posting is decided in advance, not in the moment. Consistency is the single biggest predictor of social results we see.</p>
<h3>4. Amplify and Measure</h3>
<p>Track which posts actually drive calls and bookings, put paid budget behind the winners, and feed those learnings back into the calendar. Over time the engine gets smarter and cheaper to run.</p>
<p>If building and running that engine yourself sounds like a full-time job, that is because it is. See how our <a href="/social-media-management">social media management</a> service does it for you, or <a href="/contact">talk to Trevor</a>.</p>
        `,
    }
];
