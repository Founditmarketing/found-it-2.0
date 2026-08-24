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
  /** Skip the big hero image; the post opens straight on its first line. */
  hideHero?: boolean;
  /** Opt-in: mount the live AI secretary (VoiceAgentWidget) under the body,
   *  above Keep Reading. Leads post to /api/lead under `source`; `opener` is
   *  her first line on that post. Posts without it render exactly as before. */
  voice?: { eyebrow: string; lead: string; opener: string; source: string };
};

export const blogPosts: Post[] = [
    {
        slug: 'law-practice-management-software',
        title: 'A Lawyer Was About to Hire Somebody Just to Answer His Phone. I Built Him an Employee Instead.',
        date: '2026-08-24',
        excerpt: 'Nobody answered his phone — and the six-figure cases call the phone. So instead of a $2,500-a-month hire, I built him an employee who never sleeps. Ten screens, ten seconds each.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/lawyer-og-hook-v1.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">9:04 PM on a Tuesday. A dog-bite call — the kind of case that pays for a lawyer's whole year.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">It rang a one-man law office.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">He was at supper.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">She answered.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Took the whole story. Booked the consult for Tuesday at ten. Opened the file. Drafted the welcome text.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">He found all of it waiting with his coffee.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">She's not a person. <span style="color: #FF5500;">I built her in a weekend.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/lawyer-blog-today-focus-v1.png" alt="The lawyer's morning screen greets him by name: calls taken overnight, dates needing his eyes, money waiting (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">This is his phone every morning. It greets him <span style="color: #FF5500;">by name</span> and rats out everything that needs him.</p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">$2,500/mo</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">the hire she replaced — that's what a desk seat costs around here</div></div>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><strong>And nothing she does sends itself.</strong> Every text, every call waits for HIS tap. Best employee he's ever had. Can't touch SEND.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">He talks. <span style="color: #FF5500;">It types.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Walks out of court, says what happened out loud. Filed. He hasn't typed on his phone since.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Now the part <span style="color: #FF5500;">nobody believes</span>.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The best thing it does is <span style="color: #FF5500;">refuse</span>.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Two things end law careers: missed deadlines and client money. This thing won't calculate a single date and can't touch a dollar of client money. A human types every deadline —</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/lawyer-blog-prescription-focus-v1.png" alt="Every case deadline on one screen, typed by a human, counted down, red when ignored (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">— and if he ignores one for two days, <span style="color: #FF5500;">it turns red and gets loud</span>. I don't do the risky stuff. I make it impossible to quietly get it wrong.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">This next screen? Law firms <span style="color: #FF5500;">rent</span> it for $2,000 a month.</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/lawyer-blog-demand-focus-v1.png" alt="A demand letter assembled from the file in one tap, on letterhead, under a red UNSIGNED DRAFT stamp (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">His builds itself off the file in one tap. See the red stamp? <span style="color: #FF5500;">It can't sign. Only he can.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">His clients think he hired <span style="color: #FF5500;">a whole staff</span>.</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/lawyer-blog-status-mobile-v1.png" alt="The client's own phone shows where their case stands, plain English, no login (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Every client carries this link. No password. Where the case stands, in plain English. The <span style="color: #FF5500;">&ldquo;any news?&rdquo;</span> calls just&hellip; stopped.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The money collects itself <span style="color: #FF5500;">while he sleeps</span>.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Client taps a link at 9 PM. Pays. The books write themselves before sunrise. No re-typing, no shoebox, no QuickBooks night.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And the plot twist: <span style="color: #FF5500;">he owns it</span>.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The code. The data. His name on the title. If he ever fires me, he keeps everything. The monthly fee is just me taking care of it — like a good mechanic takes care of your truck.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Nobody rents you your own business back.</span></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana. Auto shops, roofers, tree services, dealerships — now a law office. <strong>About to hire somebody just to keep the paperwork moving? Call me first.</strong></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><em style="opacity:0.6; font-size: 14px;">Screens show the real system on demo data; the firm name on them is a stand-in.</em></p>
`,
    },
    {
        slug: 'nursery-management-software',
        title: '44 Plants Almost Missed the Truck. I Built the Software That Makes That Impossible.',
        date: '2026-08-20',
        excerpt: 'A truck was loading for Austin. A hand-copied order missed its last line — 44 plants almost stayed behind. So I built her a system with one rule: lines in equals lines captured. She owns every line of it.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/nursery-og-hook-v1.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Roxanne runs a wholesale nursery in central Louisiana. Trucks, crews, fifteen brokers, thousands of plants on the ground.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">A truck was loading for Austin.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The order was copied by hand.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">It missed the last line.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">44 plants almost stayed behind. Fixing that mistake runs about a thousand dollars in freight. Healthy business. <span style="color: #FF5500;">Wrong software.</span></p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">15 brokers</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">15 different order formats — texts, emails, PDFs, photos of handwriting</div></div>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">So her system runs on one rule: <span style="color: #FF5500;">lines in = lines captured.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/roxanne-blog-intake-focus-v1.png" alt="Eight lines in, eight accounted for — and the one line the system did not recognize held in red instead of dropped (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">She pastes the order in exactly how it came. Eight lines in, eight accounted for. Anything it doesn't recognize <span style="color: #FF5500;">turns red</span> — kept in her words — instead of quietly disappearing. A dropped line rides on memory. <span style="color: #FF5500;">A red line never does.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">One click: <span style="color: #FF5500;">a pull sheet the crew can hold.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/roxanne-blog-pull-sheet-focus-v1.png" alt="The pull sheet: quantities, plants, sizes and trailer slot in big type — and no prices (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Big type. Trailer slot. <span style="color: #FF5500;">No prices.</span> A price list has no business lying in the gravel by the loading dock.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">It knows what a dead plant <span style="color: #FF5500;">really costs.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/roxanne-blog-inventory-focus-v1.png" alt="Living inventory: plants in, still alive, lost, and what was spent on stock (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Plants die — in the heat, in the wet weeks, on the truck. The survivors carry the cost. This does the math no off-the-shelf nursery software will: <span style="color: #FF5500;">cost per surviving plant</span>, by plant, by broker. The best sticker price is not always the cheapest broker.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And getting paid <span style="color: #FF5500;">stops being a project.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/roxanne-blog-statement-focus-v1.png" alt="A branded statement of account: every open invoice aged oldest-first, with the past-due total in red (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Every open invoice, oldest first, every morning. One click prints a branded statement for any customer on her book. <span style="color: #FF5500;">The red numbers stop hiding.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And the plot twist: <span style="color: #FF5500;">she owns it.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The code. The data. Her name on the title. If she ever fires me, she keeps everything.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Nobody rents you your own business back.</span></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana. Auto shops, roofers, tree services, a law office — and one very fast nursery. <strong>Drowning in fifteen formats of paperwork? Call me first.</strong></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><em style="opacity:0.6; font-size: 14px;">The screens are real; the numbers on them are demo data.</em></p>
`,
    },
    {
        slug: 'why-they-cant-compete',
        title: 'Why They Can’t Compete',
        date: '2026-08-16',
        excerpt: 'A software company cannot sell you software you own — it would kill them. Why the incumbents can’t follow us into ownership, and the slow, expensive habit that’s hardest to copy.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/why-they-cant-compete-v1.png',
        content: `
<p>A software company cannot sell you software you own. <strong>It would kill them.</strong></p>
<p>That's the whole answer to why we shipped what we shipped this month.</p>

<h3>The receipts</h3>
<p>In the last thirty days we put live systems in front of a European auto shop, a roofer, a tree service, an equipment dealer, a concrete lab, and a carpet-and-duct company. Not demos with fake data. Their real books, their real customers, their real money.</p>
<p>One of those systems found <strong>$268,000</strong> sitting in a work queue nobody was watching.</p>
<p>Another audited a roofer's books to the penny and surfaced <strong>$195,882.75</strong> in open receivables — money finished, earned, and quietly written off in the owner's head. <a href="/case-studies/edwards-roofing">His name's on it.</a></p>

<h3>Why the incumbents can't follow</h3>
<p>Their business model is renting you your own business back. The shop software, the roofing software, the nursery software — every one of them holds your customer list hostage and charges you monthly for the privilege of looking at it.</p>
<p>The day they sell you ownership is the day their valuation dies. They will never do it. Not because they can't build it. <strong>Because they can't survive it.</strong> Ownership isn't a feature they haven't gotten to — it's the one thing the subscription model cannot ship.</p>
<p>And the agencies? Still selling websites and calling it strategy.</p>

<h3>The narrow slot</h3>
<p>We live in the gap between them. AI just made genuinely custom software buildable at a price a real business can pay — the biggest repricing this industry has ever seen — and most people are using it to write LinkedIn captions.</p>
<p>We used it to build local businesses their own operating systems. The code and the data, one hundred percent theirs. The price printed on the website: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month to month.</p>

<h3>The part that's hardest to copy</h3>
<p>Here's the part I'm proudest of, and it's the part nobody will follow us on: we run the new system <strong>beside</strong> the old one. Penny-matched. Every night. For as long as it takes — until the owner looks at both screens, sees the same number, and says go.</p>
<p>That's slow. That's expensive. That's why nobody does it.</p>
<p>It's also the only honest way to hand somebody the keys to their own company.</p>
<p>Want to see what yours would look like? <a href="/blog/what-is-a-software-map">This is how it starts</a>, or <a href="/lp/she-answers">ask our AI secretary out loud</a> and she'll take your number herself.</p>
<p><strong>Nobody rents you your own business back.</strong></p>
<p>— Trevor</p>
        `,
    },
    {
        slug: 'the-scoreboard',
        title: 'New Company. Here’s the Scoreboard.',
        date: '2026-08-22',
        excerpt: 'Found It Software is new. The wins aren’t. $195,882.75 found on a roofer’s books, $268,000 pulled out of a queue nobody checked, books matched to the penny across 37 accounts, two systems sold on a Friday to owners coming off paper — every line checkable.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/scoreboard-hero-v1.png',
        // She closes the post — "or tell her yourself" is literally her, below.
        voice: {
            eyebrow: "She's on the board too",
            lead: "Want your line on this scoreboard? Tell her. She'll put you in the system while you're still talking.",
            opener: "Want your line on the scoreboard? Give me your name and number and I'll put you in the system.",
            source: 'scoreboard-voice',
        },
        content: `
<p>Found It Software is a new company. The wins aren't. Here's the scoreboard — every line on it checkable. Updated August 22, because the week moved it.</p>

<h3>Two systems sold on a Friday — to owners coming off paper</h3>
<p>Not a demo on a screen in an office. A counter, a phone, and the owner ringing his own ticket on software with his name on it. Two of this week's signings are coming off paper and pencil. Laugh if you want — they're in the top five percent of earners in the parish. They were never behind. Nobody had ever built them something worth trusting.</p>

<h3>We found $195,882.75 on one roofer's books</h3>
<p>The day Edwards Roofing's system went through its own books, it surfaced $195,882.75 sitting in open receivables — money finished, earned, and un-collected. Then it caught a $19,000 bookkeeping error the old software had carried without blinking. Cory Edwards owns that system now, code and data. <a href="/case-studies/edwards-roofing">The whole story is public</a>, with his name on it — and as of this week, he says it on camera.</p>

<h3>$268,000 was sitting in a queue nobody checked</h3>
<p>A tree service's forgotten work — jobs sold and never scheduled, estimates never chased — pulled onto one screen the first week the system read the book. Nobody had lost the money. Nobody had looked.</p>

<h3>Books matched to the penny across 37 accounts</h3>
<p>A dealership's new ledger, loaded from fourteen thousand QuickBooks entries and compared account by account: 37 for 37, to the cent. Same store, week one: the pricing governor flagged about 1,200 parts being sold at prices fifteen years stale. The owner approves fixes with his thumb.</p>

<h3>Seven months of bank statements, rebuilt to the penny</h3>
<p>A nursery's QuickBooks balance sheet had drifted into fiction. So the system stopped trusting it and rebuilt the books from the bank statements themselves — January through July, opening balance to closing, every month tying to the cent. That's the foundation you build a QuickBooks exit on. It's underway.</p>

<h3>A nursery got its first system in a day</h3>
<p>Thursday we sat with a wholesale nursery owner whose orders arrive as texts from fifteen brokers — the week after a hand-copied order nearly stranded 44 plants on the road to Austin. By Friday night the first version was running against her real orders: paste the text in, every line captured, anything unrecognized flagged in red instead of silently dropped. Custom software used to take quarters. We fit it in days, and <a href="/blog/what-is-a-software-map">this is how it starts</a>.</p>

<h3>Our receptionist is software — and she's on this site</h3>
<p>The AI secretary we build into client systems answers out loud, takes the message, and enters the caller into the database herself. We don't describe her; we hand her the phone. <a href="/lp/she-answers">Talk to her right now</a> — she'll put you in our system while you're still on the line.</p>

<h3>The screenshots on this site are the systems</h3>
<p>A roofer's operations board. A dealership's parts and invoices. An auto shop's repair orders. A tire shop, a wholesale nursery, a concrete plant's quality control. The screens scrolling across this site aren't mockups — they're the systems themselves, running businesses across Louisiana and beyond, owned by the people who run them.</p>

<h3>Nine things that sound like lies</h3>
<p>A contractor texted me last week: "If something sounds too good to be true, it generally is." He's right. So we wrote down nine things real Louisiana businesses are running right now that sound exactly like that. <a href="/list">It's a two-minute read, and it costs your cell number.</a></p>

<h3>The terms are wins too</h3>
<p>The price is public — ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel} — which almost nobody in custom software will print. The first twenty were founding accounts at $2,200; that's closing out. Month to month. The new system runs beside the old one, penny-matched every night, until the owner says go. And the client owns everything: the code and the data, one hundred percent. Nobody rents you your own business back.</p>

<h3>New name, old habit</h3>
<p>The software company is new. The shop behind it has built for local businesses for over thirteen years, and holds a 4.9 rating on Google doing it. The habit that carried over is the only one that matters: shipping. More than a dozen Louisiana businesses run on software they own today. The next line on this board is somebody's first month without QuickBooks.</p>
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

<h3>See what yours would look like</h3>
<p>Tell us how it runs today. We'll show you what we'd build if it were ours. Free, about thirty minutes, screen-shared. If it's not a fit, we tell you straight. <a href="/blog/what-is-a-software-map">This is how a fitting starts</a>. <a href="/contact">Send your number</a> and Trevor calls you, or <a href="/lp/she-answers">talk to our AI secretary</a> and she'll take it herself.</p>
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
<p>The map becomes the system. Here is the intake box from the middle of the map, running: an order pasted exactly as it came in, eight lines in, eight captured, the one it didn't recognize held in red instead of dropped. The screen shows demo data. The rule is hers — those 44 plants.</p>
<p><img src="/os-screens/roxanne-os-intake-v1.png" alt="Roxanne's OS order intake — an order pasted exactly as it came in, eight lines in and eight captured, the odd one held in red (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p>The system runs <strong>beside</strong> the old software, penny-matched against it every night, and nothing switches until the numbers match and the owner says go. That's how we move a business: without betting it.</p>
<p><strong>The system is yours. The code and the data, one hundred percent.</strong> The price is public — ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month to month. Nobody rents you your own business back.</p>

<h3>See what yours would look like</h3>
<p>Tell us how it runs today. We'll show you what we'd build if it were ours. Free, about thirty minutes, screen-shared. If it's not a fit, we tell you straight. <a href="/contact">Send your number</a>, or <a href="/lp/she-answers">tell our AI secretary</a> and she'll set it up while you talk.</p>
        `,
    },
];
