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
        slug: 'the-scoreboard',
        title: 'New Company. Here’s the Scoreboard.',
        date: '2026-08-16',
        excerpt: 'Found It Software is new. The wins aren’t. A roofer’s $195,882.75, a nursery system built in a day, a receptionist made of software, and screenshots that are the real thing.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/scoreboard-hero-v1.png',
        content: `
<p>Found It Software is a new company. The wins aren't. Here's the scoreboard — every line on it checkable.</p>

<h3>We found $195,882.75 on one roofer's books</h3>
<p>The day Edwards Roofing's system went through its own books, it surfaced $195,882.75 sitting in open receivables — money finished, earned, and un-collected. Then it caught a $19,000 bookkeeping error the old software had carried without blinking. Cory Edwards owns that system now, code and data. <a href="/case-studies/edwards-roofing">The whole story is public</a>, with his name on it.</p>

<h3>A nursery got its first system in a day</h3>
<p>Thursday we sat with a wholesale nursery owner whose orders arrive as texts from fifteen brokers — the week after a hand-copied order nearly stranded 44 plants on the road to Austin. By Friday night the first version was running against her real orders: paste the text in, every line captured, anything unrecognized flagged in red instead of silently dropped. Custom software used to take quarters. We fit it in days, and <a href="/blog/what-is-a-software-map">it starts with a map</a>.</p>

<h3>Our receptionist is software — and she's on this site</h3>
<p>The AI secretary we build into client systems answers out loud, takes the message, and enters the caller into the database herself. We don't describe her; we hand her the phone. <a href="/lp/she-answers">Talk to her right now</a> — she'll put you in our system while you're still on the line.</p>

<h3>The screenshots on this site are the systems</h3>
<p>A roofer's operations board. A dealership's parts and invoices. An auto shop's repair orders. A tire shop, a shed builder, a wholesale nursery, a concrete plant's quality control. The screens scrolling across this site aren't mockups — they're the systems themselves, running businesses across Louisiana and beyond, owned by the people who run them.</p>

<h3>The terms are wins too</h3>
<p>The price is public — ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel} — which almost nobody in custom software will print. Month to month. The new system runs beside the old one, penny-matched every night, until the owner says go. And the client owns everything: the code and the data, one hundred percent. Nobody rents you your own business back.</p>

<h3>New name, old habit</h3>
<p>The software company is new. The shop behind it has built for local businesses for over thirteen years, and holds a 4.9 rating on Google doing it. The habit that carried over is the only one that matters: shipping.</p>
<p>Want your line on this board? <a href="/contact">Send your number</a> — or tell her yourself.</p>
        `,
    },
    {
        slug: 'rented-software-no-data-rights',
        title: 'The Rent Isn’t the Problem. The Hostage Is.',
        date: '2026-08-16',
        excerpt: 'Rented software holds your customers, your invoices, and your history in a format you don’t own, at a price they set next year. Here is what “no data rights” actually costs — and the two questions that expose it.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/rented-software-hostage-v3.png',
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
        image: '/images/blog/what-is-a-software-map-v3.png',
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
];
