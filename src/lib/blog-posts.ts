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
  /** Opt-in: mount the live AI secretary (VoiceAgentWidget) under the body,
   *  above Keep Reading. Leads post to /api/lead under `source`; `opener` is
   *  her first line on that post. Posts without it render exactly as before. */
  voice?: { eyebrow: string; lead: string; opener: string; source: string };
};

export const blogPosts: Post[] = [
    {
        slug: 'law-practice-management-software',
        title: 'Law Practice Management Software You Actually Own',
        date: '2026-08-24',
        excerpt: 'A missed prescription date ends a law career. So the system we built for a solo lawyer in central Louisiana refuses to compute a single deadline — every date entered by a human hand, surfaced every morning, escalated in red if ignored. Six refusals, printed inside the app on purpose — and the lawyer who runs it owns every line.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/lawyer-blog-prescription-v1.png',
        content: `
<p>There is one mistake that ends a law career all by itself: a missed date. Prescription runs on a file sitting in a drawer and the case is gone — not weakened, gone — and the client's next call is to a malpractice lawyer. The ABA's own profile of claims puts calendaring failures at roughly a quarter of all malpractice claims. Every lawyer knows this. It is the fear under the whole profession.</p>
<p>Louisiana just made it meaner. Since Act 423 of 2024, the state runs two prescription regimes at once: injuries before July 1, 2024 prescribe in one year; injuries on or after, in two. A solo's open docket straddles both, keyed to the injury date. Which regime governs a file is a lawyer's call — never a formula's.</p>
<p>The big rented platforms — Clio, MyCase, PracticePanther, the class of software a lawyer subscribes to — answer that fear by selling automated deadline calculation. We built the opposite, for a solo lawyer in central Louisiana who runs personal injury, family law, and successions out of one office: a system that <strong>refuses to compute a single deadline</strong> — and prints that refusal, with five others, on a panel inside the app. The panel is the feature.</p>
<p>Every screen below shows demo data. The masthead on them reads <strong>LANDRY LAW</strong> — a stand-in name, our demo convention. The screens are real. The names and the numbers are not.</p>

<h3>Prescription Watch</h3>
<p>One screen holds every open injury file's prescription date, sorted soonest first, counting down. Every date on it was <strong>entered by a human hand</strong> and stamped that way — entered by you, on this day, never calculated. The list surfaces every morning, and a date that sits unacknowledged for 48 hours turns red and stays red until somebody answers for it.</p>
<p>The line we say out loud in every walkthrough: <strong>it will not compute your deadlines — it makes sure nobody can quietly ignore one.</strong> Which prescription period applies to a wreck is your call. The system's whole job is making sure the date your head produced never slips out of sight.</p>
<p><img src="/images/blog/lawyer-blog-prescription-v1.png" alt="Prescription Watch — every open file's prescription date, entered by hand and stamped, sorted soonest first, red after 48 unacknowledged hours (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>The morning desk</h3>
<p>The day opens on one screen. It greets the lawyer by name, the docket stands at the top, and in the demo a hearing sits in red — escalated, because nobody acknowledged it. Not buried three taps deep in a calendar app. Red, at the top, first thing, until a human deals with it.</p>
<p>The whole thing installs on his phone and keeps working with the internet down — courthouse basements included.</p>
<p><img src="/images/blog/lawyer-blog-today-v1.png" alt="The morning desk — the day's docket front and center, with one escalated hearing standing in red (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>Paste the order. It never types the date for you.</h3>
<p>A scheduling order arrives from the court. Paste it in. The system reads back the hearing dates <strong>exactly as written in the document</strong> — and where the order says "within 15 days," it hands that math back to the lawyer as a note, undone. Each date lands on the docket only when he checks a box that says, in so many words: <em>I'm entering this date.</em></p>
<p>That checkbox is the whole doctrine. Reading what a document says is extraction. Deriving a deadline is practicing law. The newest AI in legal software auto-creates the calendar event for you. This one makes you look at every date first, because the license on the line is yours.</p>
<p>The docket calendar shows the month at a glance, every date stamped with who entered it, and any of them adds to the phone calendar the lawyer actually lives by.</p>
<p><img src="/images/blog/lawyer-blog-docket-v1.png" alt="The docket calendar — a month of human-entered dates at a glance, every one stamped, none of them computed (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>Three kinds of law, one board</h3>
<p>Personal injury, family, successions — three tracks over the same seven stages, each speaking its own language. The family board reads Petition Filed, Mediation, Judgment. The succession board reads Heirs &amp; Assets, Descriptive List, Judgment of Possession. One glance answers the question a solo asks forty times a day: where is everything?</p>
<p>On the succession side, the estate stands itemized, heirs and shares in the lawyer's own words — with a nudge counter on the death certificate the client still hasn't brought in ("asked 3×").</p>
<p><img src="/images/blog/lawyer-blog-board-v1.png" alt="The board — personal injury, family law, and successions over seven shared stages, each track in its own language (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>One matter, the whole file</h3>
<p>Open a matter and everything a litigator reaches for is on the card: court and docket number, the carrier, the claim number, the adjuster's phone, the fee tier, the what's-next checklist — and pinned across the top, the prescription banner counting down the date the lawyer entered with his own hand. It counts down. It never calculates.</p>
<p><img src="/images/blog/lawyer-blog-matter-v1.png" alt="One matter's file — court and docket number, carrier and adjuster, fee tier, and the prescription banner counting down a human-entered date (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>Where every dollar stands</h3>
<p>The money spine of a contingency file: the demand that went out and every offer that came back, in one ledger — months of phone calls with an adjuster that no longer ride on memory. Before answering the next offer, type any number into the what-if and see what your client actually nets. The settlement sheet shows the math to the penny. <strong>It shows the math. It never moves the money.</strong> Client funds stay in the trust account, under the lawyer's pen, with a read-only proof view standing beside it.</p>
<p><img src="/images/blog/lawyer-blog-money-v1.png" alt="The money spine — the demand, every offer against it, and what the client nets at any number, shown to the penny and never moved (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>The secretary who can't send</h3>
<p>In the demo, a dog-bite call comes in at 9:07 at night. Nobody is at the office. The AI secretary answers, takes the intake, and in the morning the whole call sits on the desk as a card — with every follow-up she wants to send waiting in an approval queue. Letters, client texts, collection calls: every one a draft, waiting on a human tap. <strong>Nothing sends itself.</strong></p>
<p>And when a client on one of her calls wants to pay, it's a keypad entry or a secure link on processor rails. <strong>She never hears a card number.</strong> Neither does the system.</p>
<p><img src="/images/blog/lawyer-blog-secretary-v1.png" alt="The AI secretary's approval queue — a 9:07 PM intake call logged, every draft waiting for a human tap; nothing sends itself (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>The demand letter arrives as a draft</h3>
<p>One tap builds a letterhead demand with the medicals already in the table — and stamps it <strong>UNSIGNED DRAFT</strong>. Beside it sits a letter desk: representation letters, records requests, HIPAA authorizations, client updates — and a medical chronology with the treatment gap flagged. Out in the rental market, demand-drafting tools run $500 to $2,000 a month, additive, on top of the practice management bill. Here it's part of the system — and none of it signs. Everything drafts from the firm's own file; nothing cites law it went and found. The signature is the practice of law, and it stays with the license.</p>
<p><img src="/images/blog/lawyer-blog-demand-v1.png" alt="A letterhead demand drafted into the letter desk, medicals already in the table, watermarked UNSIGNED DRAFT (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>The firm's books</h3>
<p>The family-law side runs hourly: time gets dictated, affirmed by the lawyer, and drafted into an invoice that waits in Payments for approval. A client taps a pay link and the payment ties into the firm's books — real double-entry books, so "where does the firm stand" comes off a ledger, not a feeling. Payroll and taxes never enter the building.</p>
<p><img src="/images/blog/lawyer-blog-books-v1.png" alt="The firm's books — dictated time affirmed into a draft invoice, pay-link payments tied into a real double-entry ledger (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>Six refusals, printed in the app</h3>
<p>There's a gold panel in this system that lists, in plain language, what it will never do. Not a terms page nobody reads — a panel in the app, on purpose:</p>
<p><strong>It will never hold the trust ledger or do IOLTA accounting.</strong> Rule 1.15 is the lawyer's. The system shows a read-only proof view beside the trust system — it never holds the pen.</p>
<p><strong>It will never compute a deadline.</strong> Every date is entered by a human, stamped, surfaced daily, and escalated if ignored. The math stays human.</p>
<p><strong>It will never clear a conflict.</strong> It shows names that already appear in the files — down to the sound-alike spellings Louisiana surnames breed — and it never says "clear." It is not a conflicts check, and it says so on the label.</p>
<p><strong>It will never give a client a legal opinion.</strong> The assistant answers from the firm's own records. The client status link shows status — never advice.</p>
<p><strong>It will never hear or store a card number.</strong> Payments run on processor rails, start to finish.</p>
<p><strong>It will never do payroll or taxes.</strong> Out forever, on every system we build.</p>
<p>Software that knows what it must never do is software a lawyer can put a license next to.</p>

<h3>Why the rented platforms can't say no</h3>
<p>The incumbent shelf competes by computing more for you. Automated deadline and statute-of-limitations calendaring is a selling point across the category. AI now reads court documents and creates the calendar events on its own. "Conflict check" tools are name searches wearing the title of an authority. AI drafting is trained on the law, with the hallucinations disclaimed in the terms of service.</p>
<p>When any of that is wrong, the bar doesn't call the vendor. The malpractice claim and the discipline file carry the lawyer's name, and the vendor's exposure caps out around the subscription fee. Think about what that means in Louisiana right now: a vendor's formula has to know about Act 423 and apply the right regime to the right injury date, silently, forever, on your files. Our answer is older and harder to break: your own head enters the date, once — and then nobody can quietly ignore it.</p>
<p>And the refusals aren't the only thing the shelf can't match. The rent stack reads like a second payroll: the demand tool you just saw is a $500-to-$2,000-a-month line item on its own. A docketing-rules service, about $40 a seat. Trust accounting software, another $49. A Louisiana forms library, $150. The client status portal is a whole separate company. Every one renews. None of it is ever yours. <a href="/blog/rented-software-no-data-rights">The rent isn't even the real problem.</a></p>

<h3>He owns it</h3>
<p>Rule 1.16(d) says that when a representation ends, the lawyer surrenders the file promptly. Now try getting a whole file out of the software that holds it. One incumbent handles full export through a support request — the same vendor reported to sign three-to-five-year contracts with personal guarantors and buyouts north of $7,000. Your ethical duty is prompt. Their ticket queue is not.</p>
<p>Here the code and the data are the lawyer's. <strong>One hundred percent.</strong> The client files live in a database he owns — keep a copy in the office safe if you like, then try asking a subscription vendor for a copy of theirs. The system runs <strong>beside</strong> the tools the office trusts today — the calendar, the books, the paper files — and nothing switches until the owner says go.</p>
<p>The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month to month with thirty days' notice — and the code and the data stay with the firm either way.</p>
<p><strong>Nobody rents you your own business back.</strong></p>

<h3>If you practice law and rent your software</h3>
<p>Take the <a href="/fit">two-minute fit check</a>. Or text <strong>MAP</strong> to <strong>(318) 713-3781</strong> — three questions, and we'll build you a free map of your practice. Prefer a person? <a href="/contact">Send your number</a>. Every system we build starts with <a href="/blog/what-is-a-software-map">a one-page map</a>.</p>
        `,
    },
    {
        slug: 'nursery-management-software',
        title: 'Nursery Management Software You Actually Own',
        date: '2026-08-20',
        excerpt: 'A hand-copied order missed 44 plants bound for Austin. That mistake is why this nursery management software exists — and why the nursery that runs it owns every line of it.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/roxanne-blog-hero-v1.png',
        content: `
<p>Roxanne runs a wholesale nursery in central Louisiana. Trucks, crews, brokers, thousands of plants on the ground. The orders come in as texts, emails, photos of handwriting, PDFs — fifteen brokers, fifteen formats.</p>
<p>One week, a hand-copied order missed its last line. Forty-four plants nearly stayed behind while the truck left for Austin — a mistake that costs close to a thousand dollars in freight to fix. Healthy business. Wrong software.</p>
<p>That order is why this system exists. We drew <a href="/blog/what-is-a-software-map">the map</a> the week it happened. This is what got built. Every screen below shows demo data — the screens are real, the numbers are not.</p>

<h3>Every line, captured or held in red</h3>
<p>She pastes the order in exactly as it came — text, email, whatever. The system reads it into clean lines against her real price list. The rule the whole app is built on: <strong>lines in equals lines captured.</strong> Eight lines in, eight accounted for. Anything it doesn't recognize stays on the order in red, in her words, instead of being silently dropped.</p>
<p>A dropped line is how 44 plants miss a truck. A red line never rides on memory.</p>
<p><img src="/images/blog/roxanne-blog-intake-v1.png" alt="Order intake in Roxanne's OS — an order pasted as received, 8 lines in and 8 captured, one unmatched line held in red (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p>PDFs and photos drop straight in — a reader transcribes them into the same box, and the same red-line rule checks every line. For phone orders there's a picker that works the way she talks: count first, then the plant. Enter drops the line in and puts her back on the count.</p>
<p><img src="/images/blog/roxanne-blog-picker-v1.png" alt="The qty-first plant picker — type the count, then the plant, Enter adds the line (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>Pull sheets the crew can hold</h3>
<p>One click turns the order into a pull sheet: quantities, plants, sizes, trailer slot in big type. <strong>No prices.</strong> The crew doesn't need them, and a price list has no business lying in the gravel by the loading dock.</p>
<p><img src="/images/blog/roxanne-blog-pull-sheet-v1.png" alt="A printed pull sheet — quantities, plants, sizes, and the trailer slot, with no prices anywhere (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>The barn board</h3>
<p>A big screen in the barn shows today's loads: every PO, its trailer slot, its status, updating on its own. The crew sees what's new, what's staged, what's loaded — without anyone walking a note across the yard.</p>
<p><img src="/images/blog/roxanne-blog-crew-v1.png" alt="The crew board — today's loads with trailer slots and status, built for a big screen in the barn (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>The availability sheet her competitors already send</h3>
<p>Other nurseries email a weekly availability list. She never had a good way to make one. Now she picks what's ready off her own price list and the sheet builds itself — branded, grouped, with clickable plant photos, and honest <strong>"not ready"</strong> chips for what's coming but not sellable yet. Print it, or email it to every customer on her book in one click.</p>
<p><img src="/images/blog/roxanne-blog-availability-sheet-v1.png" alt="The weekly availability sheet — plant photos, prices, and honest not-ready chips, ready to print or email to the whole customer list (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>The broker book</h3>
<p>Every supplier's offer sheet gets pasted in and lands in one table: every plant, every broker quoting it, <strong>cheapest first</strong>, next to what she actually paid. The spread column is the argument she takes into every price call.</p>
<p><img src="/images/blog/roxanne-blog-broker-compare-v1.png" alt="The broker compare — every supplier's current quote per plant, cheapest first, beside what she really paid (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>Cost per surviving plant</h3>
<p>Nurseries lose stock. Plants die in the heat, in the wet weeks, on the truck. Dead plants change what the living ones cost you — and no off-the-shelf nursery software does that math. This one does. She logs each batch coming in and each loss, and the system computes her real number: <strong>cost per surviving plant</strong>, by plant, by source. The broker with the best sticker price is not always the cheapest broker.</p>
<p><img src="/images/blog/roxanne-blog-inventory-v1.png" alt="Living inventory — batches in, losses logged, and the number nobody else computes: cost per surviving plant (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>P&amp;L on demand</h3>
<p>Money in, money out, what you kept — by year, straight from her books, printable. No waiting on anyone.</p>
<p><img src="/images/blog/roxanne-blog-pnl-v1.png" alt="Profit and loss on demand — money in, money out, what you kept, by year (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>Who owes you, and the statement that collects it</h3>
<p>Open invoices stand on one screen, oldest first, every morning. One click prints a branded statement for any customer — and a text-to-pay link means the money can move the moment somebody says "send it to me."</p>
<p><img src="/images/blog/roxanne-blog-statement-v1.png" alt="A printable statement of account — every open invoice for one customer, aged, totaled, ready to send (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>Ask your book a question</h3>
<p>An assistant lives on every screen. Plain English in, her own numbers out — who owes the most, what's on the board, how this year compares. It answers from her book, not the internet.</p>
<p><img src="/images/blog/roxanne-blog-assistant-v1.png" alt="The assistant answering from the nursery's own book — who owes the most, straight off the ledger (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>Why generic software fails a nursery</h3>
<p>QuickBooks plus spreadsheets is what most wholesale nurseries actually run on. It fails them in the same five places:</p>
<p><strong>Inventory that dies.</strong> A widget on a shelf is still a widget next month. A tray of gardenias isn't. Counting pots without counting losses gives you a cost that's fiction.</p>
<p><strong>Brokered and grown, side by side.</strong> Half the yard came off somebody's truck, half came out of her own ground. Two cost structures, one price list. Generic software sees one bucket.</p>
<p><strong>Orders in every format.</strong> Landscapers text like landscapers. Any system that needs the customer to fill out a form correctly has already lost the order.</p>
<p><strong>Crews need paper, not logins.</strong> The point of a pull sheet is that it works with wet gloves.</p>
<p><strong>Availability changes weekly.</strong> What's ready, what's coming, what died — the sheet has to be honest this week, not last month.</p>

<h3>She owns it</h3>
<p>The code and the data are hers. One hundred percent. The system runs <strong>beside</strong> QuickBooks, matched to the penny, for as long as it takes — nothing switches until the numbers agree and she says go.</p>
<p><strong>Nobody rents you your own business back.</strong></p>

<h3>If you run a nursery — or anything with trucks and a yard</h3>
<p>Take the <a href="/fit">two-minute fit check</a>. Or text <strong>MAP</strong> to <strong>(318) 713-3781</strong> — three questions, and we'll build you a free map of your business.</p>
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
<p>Want to see what yours would look like? <a href="/blog/what-is-a-software-map">Start with the map</a> — or <a href="/lp/she-answers">ask our AI secretary out loud</a> and she'll take your number herself.</p>
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
<p>Thursday we sat with a wholesale nursery owner whose orders arrive as texts from fifteen brokers — the week after a hand-copied order nearly stranded 44 plants on the road to Austin. By Friday night the first version was running against her real orders: paste the text in, every line captured, anything unrecognized flagged in red instead of silently dropped. Custom software used to take quarters. We fit it in days, and <a href="/blog/what-is-a-software-map">it starts with a map</a>.</p>

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
<p>The map becomes the system. Here is the intake box from the middle of the map, running: an order pasted exactly as it came in, eight lines in, eight captured, the one it didn't recognize held in red instead of dropped. The screen shows demo data. The rule is hers — those 44 plants.</p>
<p><img src="/os-screens/roxanne-os-intake-v1.png" alt="Roxanne's OS order intake — an order pasted exactly as it came in, eight lines in and eight captured, the odd one held in red (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p>The system runs <strong>beside</strong> the old software, penny-matched against it every night, and nothing switches until the numbers match and the owner says go. That's how we move a business: without betting it.</p>
<p><strong>The system is yours. The code and the data, one hundred percent.</strong> The price is public — ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month to month. Nobody rents you your own business back.</p>

<h3>Get yours</h3>
<p>Thirty minutes. Screen-shared. You leave with the page above, drawn for your business. <a href="/contact">Get your map</a> — or <a href="/lp/she-answers">tell our AI secretary</a> and she'll set it up while you talk.</p>
        `,
    },
];
