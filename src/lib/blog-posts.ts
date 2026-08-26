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
        slug: 'government-bid-finder-tree-service',
        title: 'We Built a Tree Company a Machine That Finds Money.',
        date: '2026-08-27',
        excerpt: 'There\'s a road in Caldwell Parish the state is about to spend millions rebuilding. Every tree on it has to come down first. The big contractors have known for weeks — they have whole departments that read government paperwork. Tyler Walls found out at breakfast, from a radar we built him. It reads every bid the state ever published, prices his quote from what actually won, and hands him the primes\' phone numbers. The smartest thing in it: it\'s banned from bidding.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/walls-scout-og-v1.png',
        hideHero: true,
        content: `
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Alexandria, Louisiana.</p>
    
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">There's a road in Caldwell Parish called LA 557.</p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The State of Louisiana is about to spend <span style="color: #FF5500;">$2.5 to $5 million</span> on it.</p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And before one yard of asphalt gets poured, <span style="color: #FF5500;">every tree in the way has to come down.</span></p>
    
    <div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">SEPT 9</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">the day bids open on LA 557 — it's sitting in a public filing system right now, written for lawyers, read by almost nobody</div></div>
    
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The big contractors already know about it. Of course they do. They have <strong>bid departments</strong> — people whose whole job is reading government paperwork so the boss doesn't have to. That's the cheat code, and they've had it for decades. It's why the same names win everything.</p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Not because they're better with a saw.</p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Because they're the only ones who know the work exists.</span></p>
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">A man who runs tree crews all day was never going to sit up at night reading bid tabulations. So the money got won by the people who could afford readers.</p>
    
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">So we built <span style="color: #FF5500;">Walls Tree Service</span> a bid department.</p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">A radar that never sleeps.</p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">A machine that finds money.</span></p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And Tyler owns it.</p>
    
    <p style="margin: 1em 0 1.6em;"><img src="/images/blog/walls-scout-board-v1.png" alt="The Board: a sweeping radar, open public bids matched to clearing and vegetation work, scored with reasons, every figure traced to a public record" style="border-radius: 12px; border: 1px solid #333;" /></p>
    
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Every day it sweeps the state's letting system, the procurement network, the federal board — every free public source where tree money hides — and drags back anything that smells like clearing, grubbing, or vegetation work. Then it scores each catch and <span style="color: #FF5500;">shows its math</span>, right on the card: his kind of work, his size of job, still time to move. No black box. Every point has its reason printed next to it.</p>
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">LA 557 didn't sneak past anybody this time. <strong>It was on Tyler's board before his coffee got cold.</strong></p>
    
    <div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">$50M&ndash;$81M</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">the combined estimate bands sitting on his board the week I wrote this — nine live jobs, found by a machine that never gets tired of government paperwork</div></div>
    
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Now the part that should make the big boys <span style="color: #FF5500;">sweat a little.</span></p>
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">When Louisiana lets a road job, it doesn't just publish who won. It publishes <strong>every bidder's price on every single line item.</strong> What the winner charged per acre of clearing. Per tree. Per lump sum. All of it, public, going back years. The most valuable pricing intel in the industry — sitting in a drawer nobody opens.</p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Tyler's radar has read <span style="color: #FF5500;">78,019 of those lines.</span></p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And it remembers <span style="color: #FF5500;">every one.</span></p>
    
    <p style="margin: 1em 0 1.6em;"><img src="/images/blog/walls-scout-context-v1.png" alt="What clearing sold for: winning unit prices off real bid tabs — minimum, median, maximum — every figure linked to the public record it came from" style="border-radius: 12px; border: 1px solid #333;" /></p>
    
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">So when a job pops on the board, Tyler isn't guessing what clearing goes for. He's reading what it <em>actually sold for</em> — near him, sized like his job — with a link to the public record under every number. <span style="color: #FF5500;">That's not a hunch. That's the market's own receipts.</span></p>
    
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">One tap turns all of it into <span style="color: #FF5500;">a paper.</span></p>
    
    <p style="margin: 1em 0 1.6em;"><img src="/images/blog/walls-scout-quote-v1.png" alt="The sub-quote: the letting's clearing lines, priced from winning bids, a margin dial on top, one page for the prime contractor" style="border-radius: 12px; border: 1px solid #333;" /></p>
    
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The letting's own clearing lines. Quantities prefilled. Prices set at the median of what winners bid, with a margin dial he turns with his thumb. Out the other end: a one-page quote on Walls Tree Service letterhead, with a second page showing <strong>exactly which public bids every price came from</strong>. A prime calls about a job, and Tyler hands him a professionally priced sub-quote <span style="color: #FF5500;">the same hour.</span> And if an item has no history? The box comes up honest and blank — <em>price it by hand.</em> This machine doesn't invent numbers. Ever.</p>
    
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">It even tells him <span style="color: #FF5500;">who to call.</span></p>
    
    <p style="margin: 1em 0 1.6em;"><img src="/images/blog/walls-scout-primes-v1.png" alt="Primes to call: contractors who won jobs with clearing line items inside, last 24 months, phone numbers exactly as published on the bid results" style="border-radius: 12px; border: 1px solid #333;" /></p>
    
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><strong>Seventy-one contractors</strong> won road jobs around here in the last two years with clearing work buried inside them. Somebody has to cut those trees — usually a sub. The radar lists every one of those primes, what their clearing lines were worth, and their phone number <em>exactly as it appears on the public bid results</em>. That's not a lead list some marketer sold him. <span style="color: #FF5500;">That's the public record, sorted into a rolodex.</span> Tap the number and the phone's already ringing.</p>
    
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">I showed Tyler all of this at a lunch table.</p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">He signed at the lunch table.</span></p>
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">No slideshow. No proposal deck. A working radar with his money on it, sitting next to the iced tea. Some demos you have to explain. <span style="color: #FF5500;">This one you just have to turn around.</span></p>
    
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Now the smartest thing in the whole machine:</p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">It's <span style="color: #FF5500;">banned from bidding.</span></p>
    
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">It will never submit a bid in Tyler's name. Not a dollar moves, not a form files, without his hand on it. And it doesn't pretend, either: private land clearing and HOA work never get published anywhere — no scanner on earth can see them — so it doesn't claim to. It finds what's findable, prices it from receipts, and puts the paper in his hand. <strong>The bidding, the handshake, the saw — that stays Tyler.</strong> Custom software isn't just knowing what to build. It's knowing what to refuse.</p>
    
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And it's not another app to check.</p>
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The radar is a wing of his operating system — the same black-and-orange screen where his AI receptionist answers the phone, his schedule fills itself, and his invoices chase themselves. One login. His own pipeline on one tab, <span style="color: #FF5500;">the state's money on the next tab over.</span></p>
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">And like everything we build: the code is his, the data is his, his name is on the title. If Tyler fires me tomorrow, the radar keeps sweeping — <em>for him.</em></p>
    <p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Nobody rents you your own business back.</span></p>
    
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana. Auto shops, roofers, a nursery, a law office, a bail bonds office — and now <span style="color: #FF5500;">a tree company with a radar</span>. <strong>Somewhere, a government computer is publishing money your industry never reads. Call me. I'll build you a machine that finds it.</strong></p>
    <p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><em style="opacity:0.6; font-size: 14px;">Every screen above shows Tyler's real system reading real public records — government bid data anyone can look up, with a link to the source under every figure. No customer information, ever.</em></p>
    `,
    },

    {
        slug: 'bail-bonds-management-software',
        title: 'She\'s Never Gonna Touch That Pen, Ever Again.',
        date: '2026-08-25',
        excerpt: 'There\'s a pen on the front desk at DJ\'s Bail Bonds. It filled out every application in the parish for years. Last week DJ fired it. Applications that fill themselves out on the defendant\'s phone at midnight, payment plans that populate their own dates, and a robot that is BANNED from ever touching his phone.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/djs-og-hook-v1.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Alexandria, Louisiana.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">There's a pen on the front desk at DJ's Bail Bonds.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">It filled out every application in the parish for years.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Last week, DJ fired it.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Ask the woman who runs his front desk how many times she's filled out the same application by hand. She doesn't even look up: <em>&ldquo;I do it all day.&rdquo;</em> Defendant file. Co-signer file. Three references each. Payment sheets. The same names, copied off one paper onto another paper, for years.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">DJ watched one screen for about forty seconds. Then he called it, out loud, in front of everybody:</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">&ldquo;She's never gonna have to use that pen, ever again.&rdquo;</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Deal. Here's her Monday morning now:</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/djs-blog-today-v1.png" alt="The morning screen: money due, applications filling themselves in, Wednesday check-ins, court dates (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">One screen, already sorted. Who owes. Who's behind. Who checked in. Who's got court. And the applications that are out on people's phones right now, <span style="color: #FF5500;">filling themselves in while she drinks her coffee.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Now watch what the paperwork does <span style="color: #FF5500;">at midnight.</span></p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">11:52 PM</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">a man is filling out his bail application in the dark, six questions deep, and the office has been closed for hours</div></div>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The office texts a link. That's the whole job. The defendant — or a co-signing grandmother three states away — fills it out on their own phone, and it <span style="color: #FF5500;">saves every answer as they type</span>. Fall asleep on question six? The same link opens on question six in the morning, waiting like a porch light. At the end, they sign with their thumb.</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/djs-blog-apply-v1.png" alt="The phone application welcome: saves as you type, thumb signature at the end (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Read the third check on that screen again. It <strong>never</strong> asks the bond amount or the charges. <span style="color: #FF5500;">That conversation happens at the office, human to human.</span> The phone only gathers what the file needs. Custom software knows the difference.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">A man owes $3,000.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Here's the entire negotiation:</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">&ldquo;$3,000 balance. $500 every two weeks. Populate the dates.&rdquo;</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">That's DJ talking. By the time he finished the sentence, the schedule was on the screen:</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/djs-blog-plans-v1.png" alt="The plan composer: type a balance and a payment, the dates populate themselves — no interest, ever (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><strong>No interest. Ever.</strong> There isn't even a column for it — you can't charge what the software can't hold.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Now here's the one that should make you <span style="color: #FF5500;">a little bit angry.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The old paper form had room for six payments. Plans run to twelve. So payments seven through twelve existed — they just <span style="color: #FF5500;">didn't print.</span></p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">People were signing payments <span style="color: #FF5500;">they could not see.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Not on purpose. Not a scam. Just a form nobody ever fixed — for years. In DJ's new system, every payment prints. All twelve. Every time. The rule is written into the code, so no human can forget it and <span style="color: #FF5500;">no form can hide it.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Then we hired him a bill collector <span style="color: #FF5500;">that never sleeps.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">A payment goes missing and the texting starts. Day before: a friendly heads-up with the pay link. Day of: the link again. Two days late. Five days late. Every week after. Polite every single time — and the second the money lands, <span style="color: #FF5500;">it goes quiet on its own.</span> It doesn't get tired. It doesn't get rude. It doesn't take Sundays. The front desk never makes another awkward collection call.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Court wants paper? <span style="color: #FF5500;">Paper never had it this good.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/djs-blog-agreement-v1.png" alt="The payment plan agreement on letterhead, every installment printed, e-signature and audit trail on the page (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Same agreements, same packets, same acknowledgments the office prints today — filled from the file, on letterhead, thumb-signature and audit stamp on the page. Nobody typed a word of it. <span style="color: #FF5500;">It shows up dressed better than the old paper ever did.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">In this building, everybody gets a trial.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Even the software.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/djs-blog-beside-v1.png" alt="The run-beside page: nightly totals from the old system logged next to the new one, matched to the penny (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">We ripped nothing out. The software the office pays for today keeps running, and every night the two totals get laid side by side — <span style="color: #FF5500;">they match to the penny or somebody hears about it.</span> Night after night after night. The verdict doesn't come from me and it doesn't come from a salesman. When it's proven itself, <strong>DJ flips the switch. DJ.</strong></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And the best feature in the whole build?</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">It's a <span style="color: #FF5500;">ban.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Everybody in America is selling robot receptionists this year, and DJ's system is <strong>forbidden from ever answering his phone</strong>. The ban is printed on its front screen where the whole office reads it. Why? Jail calls come collect. A robot picks up, the collect call dies — <span style="color: #FF5500;">and that call was the whole business.</span> Anybody trying to sell a bail office an AI phone agent has never stood in one. We stood in one. The phone stays human. 24/7. Forever. <strong>Custom software isn't just knowing what to build. It's knowing what to refuse.</strong></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">One more thing — the part the big software companies <span style="color: #FF5500;">can't say out loud:</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The software DJ rents today keeps his data — every client, every payment, every file — and rents it back to him, month after month, forever. His new system? The code is his. The data is his. <span style="color: #FF5500;">His name is on the title, the same way it's on the building.</span></p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Nobody rents you your own business back.</span></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana. Auto shops, roofers, a nursery, a law office — and now <span style="color: #FF5500;">a bail bonds office</span>. <strong>If your front desk still runs on a pen, call me before you buy anything with a login.</strong></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><em style="opacity:0.6; font-size: 14px;">Every screen above is the real system running demo data — every name and dollar on it is invented. No client information, ever.</em></p>
`,
    },
    {
        slug: 'law-practice-management-software',
        title: 'There Are Two Things She Flat Refuses to Do. Both End Law Careers.',
        date: '2026-08-24',
        excerpt: 'We just built Doggett Law Firm an employee who answers at 9 PM and types what Kenneth says. The smartest thing in her is what she won\'t do: calculate a deadline, or touch a dollar of client money. He owns her outright.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/lawyer-og-visual-v1.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Alexandria, Louisiana.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">We just built <span style="color: #FF5500;">Doggett Law Firm</span> an employee.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">She answers at 9 PM.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">She's not a person.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Kenneth Doggett runs a one-man injury and family firm — third generation. The big cases come in by phone, and a solo lawyer's phone doesn't keep office hours. He was about to hire somebody just to catch it. <span style="color: #FF5500;">We built him her instead.</span></p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">$2,500/mo</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">what a desk seat costs around here — the hire he didn't have to make</div></div>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Watch her take the 9 PM call.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">A dog-bite call rings while he's at supper. She answers, takes the whole story, books the consult, opens the file, drafts the welcome text. He finds all of it with his coffee —</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/doggett-blog-today-focus-v1.png" alt="Kenneth's morning screen greets him by name: calls the secretary took, dates needing his eyes, money sitting invoiced (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">— right here. His morning screen greets him by name and rats out everything that needs him. <strong>And nothing she does sends itself.</strong> Every text, every call waits for HIS tap. <span style="color: #FF5500;">She can't touch SEND.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">He talks. <span style="color: #FF5500;">It types.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Walks out of court, says what happened out loud. Filed — the notes, the to-dos, the time he just spent.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The best thing she does is <span style="color: #FF5500;">refuse.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Two things end law careers: missed deadlines and client money. She won't calculate a single date and can't touch a dollar of client money. Kenneth types every deadline himself —</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/doggett-blog-prescription-focus-v1.png" alt="Prescription Watch: every deadline on one screen, entered by Kenneth's hand, counted down, loud when ignored (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">— and if he ignores one for two days, <span style="color: #FF5500;">it turns red and gets loud</span>. We don't do the risky stuff for him. We make it impossible to quietly get it wrong.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Law firms rent this next screen for <span style="color: #FF5500;">$2,000 a month.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/doggett-blog-demand-focus-v1.png" alt="A demand letter assembled from the file in one tap, on Doggett Law Firm letterhead, under a DRAFT stamp it cannot sign (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">His builds the demand letter off the file in one tap, on his own letterhead. See the stamp? <span style="color: #FF5500;">It can't sign. Only Kenneth can.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">His clients think he hired <span style="color: #FF5500;">a whole staff.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/doggett-blog-status-mobile-v1.png" alt="The client's own phone: where their case stands, in plain English, no login (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Every client carries a link — no password, no app. Where the case stands, in plain English. The <span style="color: #FF5500;">&ldquo;any news?&rdquo;</span> calls stop.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The money collects itself <span style="color: #FF5500;">while he sleeps.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Client taps a pay link at 9 PM. Pays. The books write themselves before sunrise — tied out to the penny, every night.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And the part that makes it a Found It app: <span style="color: #FF5500;">Kenneth owns it.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The code. The data. His name on the title. If he ever fires us, he keeps everything. The monthly fee is us taking care of it — like a good mechanic takes care of your truck.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Nobody rents you your own business back.</span></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana. Auto shops, roofers, tree services, dealerships — and now <span style="color: #FF5500;">a law firm</span>. <strong>About to hire somebody just to keep the paperwork moving? Call me first.</strong></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><em style="opacity:0.6; font-size: 14px;">Every screen shows Kenneth’s real system running demo data — the names and cases on it are invented. No client information, ever.</em></p>
`,
    },
    {
        slug: 'nursery-management-software',
        title: 'Her Books Were Lying to Her by Eight Figures. So I Rebuilt Them From the Bank.',
        date: '2026-08-25',
        excerpt: 'A truck was loading for Austin and a hand-copied order dropped its last line — 44 plants, a thousand dollars in freight, almost gone. So I tore out the text-message-and-QuickBooks way a wholesale nursery runs and built her one system: catches every line, prices every broker by what actually lives, rebuilds the books her old software lied about — and she owns all of it.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/nursery-og-hook-v2.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Jane (not her real name) runs a wholesale nursery in central Louisiana. Fifteen acres, crews, trucks, fifteen brokers, thousands of plants on the ground.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">A truck was loading for Austin.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The order was copied by hand.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">It missed the last line.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Forty-four plants almost stayed behind. Catching that after the truck rolls runs about a thousand dollars in freight. The business was healthy. <span style="color: #FF5500;">The software was the problem.</span></p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">15 brokers</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">fifteen different order formats — texts, emails, PDFs, photos of somebody's handwriting</div></div>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">So the whole thing runs on one promise the old way could never make:</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Every line in. Every line out.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/roxanne-blog-intake-focus-v1.png" alt="An order pasted in raw: every line captured, and the one the system couldn't read held in red instead of dropped (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">She pastes an order in exactly how it came — text, email, a photo of somebody's chicken scratch. Every line lands. Anything it can't read <span style="color: #FF5500;">turns red and stays put</span>, in her own words, instead of quietly vanishing. A dropped line rides on memory. <span style="color: #FF5500;">A red line never does.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The best call in the whole build is a thing it <span style="color: #FF5500;">refuses to print.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/roxanne-blog-pull-sheet-focus-v1.png" alt="The crew's pull sheet: quantities, plants, sizes and trailer slot in big type — no customer name, no prices (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The crew's screen shows the PO, the plants, the sizes, the trailer slot — in type you can read across the yard. It will not show the customer's name and it will not show a price. <span style="color: #FF5500;">&ldquo;That's my business, not the crew's,&rdquo;</span> she said. Custom software is knowing what to build. It's also knowing what to leave off the paper lying in the gravel by the dock.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">It knows what a dead plant <span style="color: #FF5500;">actually costs her.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/roxanne-blog-inventory-focus-v1.png" alt="Living inventory: plants in, still alive, lost, and cost per surviving plant by broker (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Plants die — in the heat, in a wet week, on the truck. The ones that live carry the cost of the ones that didn't. So it does the math no off-the-shelf nursery software will touch: <span style="color: #FF5500;">cost per surviving plant</span>, by plant, by broker. The cheapest sticker price and the cheapest plant are rarely the same broker — and now she can prove which is which <span style="color: #FF5500;">before</span> she buys.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">She walks the yard and talks. <span style="color: #FF5500;">The sheet fills itself.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Fifteen acres of what's ready changes by the day, and she used to sit and type all of it. Now she walks the rows saying what's coming on — and the system lifts the plants out of the talk, matches them to her list, and lays every line in front of her to okay before a customer ever sees it. She's still the boss of every line. <span style="color: #FF5500;">She just stopped being the typist.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">She sold through everybody else's marketplace. <span style="color: #FF5500;">Now she has her own.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Her buyers used to order through platforms that sit in the middle and take a cut of her plants. Her system hands her a live list her customers order straight off — no middleman, no skim — the order dropping onto her crew's screen the second somebody taps it.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And the books her whole operation ran on had been <span style="color: #FF5500;">lying to her for years.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Not by a little. Its idea of her bank balance was off by an amount that belongs in science fiction. So we did the slow, boring, honest thing: <span style="color: #FF5500;">rebuilt her books straight from her bank statements — every month, tied to the penny.</span> The new system runs <em>beside</em> the one she pays for today, matched to the cent, night after night, until the day it's earned the job. <strong>She flips that switch. Not me. Not a salesman.</strong></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Getting paid <span style="color: #FF5500;">stopped being a project.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/roxanne-blog-statement-focus-v1.png" alt="A branded statement of account: every open invoice aged oldest-first, with the past-due total in red (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Every open invoice, oldest first, on one screen every morning. One tap prints a clean, branded statement for any customer on her book. <span style="color: #FF5500;">The red numbers stopped hiding.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">One more thing the big software companies <span style="color: #FF5500;">can't say back:</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The code is hers. The data is hers. Her name is on the title the same way it's on the sign at the road. Fire me tomorrow and she walks out with the whole thing running.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Nobody rents you your own business back.</span></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana. Auto shops, roofers, a law office, a bail bonds office — and one very fast nursery. <strong>If your business runs on fifteen formats of paperwork and software that argues with you, call me before you renew anything with a login.</strong></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><em style="opacity:0.6; font-size: 14px;">The screens are real. Every name and dollar on them is invented — her book never leaves her building.</em></p>
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
<p>This week: Jane (not her real name), a wholesale plant nursery in central Louisiana. Trucks, crews, fifteen brokers texting orders in fifteen formats. The business lives in eight places at once — a QuickBooks she never opens, Google Sheets, Apple Notes screenshots texted to the crew, a drawer of old invoices, and her own memory.</p>
<p>The week before we met, one hand-copied order missed its last line. Forty-four plants nearly didn't make the truck to Austin. Healthy business. Wrong software.</p>
<p>Here's the map:</p>
<p><img src="/images/blog/roxanne-software-map-v1.png" alt="One nursery's system — a real software map: eight places the business lives today, and what one owned system replaces, piece by piece" style="border-radius: 12px; border: 1px solid #333;" /></p>

<h3>How to read it</h3>
<p><strong>The top is today</strong> — every place the business lives, in the owner's own words. Most businesses find eight. Yours has a list like this whether it's written down or not.</p>
<p><strong>The middle is the map</strong>: each piece, replaced by one part of one system. Texted orders become paste-in intake where every line is captured and anything unrecognized flags red — never silently dropped. That rule exists because of those 44 plants. Handwritten pull sheets become printed ones with trailer assignments on them. Who-owes-you stops hiding in the bookkeeper's QuickBooks and stands on one screen, oldest first, every morning.</p>
<p><strong>The tags — built, next, later — are the tell.</strong> A real map states its order. A promise of everything at once is a brochure.</p>

<h3>After the map</h3>
<p>The map becomes the system. Here is the intake box from the middle of the map, running: an order pasted exactly as it came in, eight lines in, eight captured, the one it didn't recognize held in red instead of dropped. The screen shows demo data. The rule is hers — those 44 plants.</p>
<p><img src="/os-screens/roxanne-os-intake-v1.png" alt="The nursery's order intake — an order pasted exactly as it came in, eight lines in and eight captured, the odd one held in red (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p>The system runs <strong>beside</strong> the old software, penny-matched against it every night, and nothing switches until the numbers match and the owner says go. That's how we move a business: without betting it.</p>
<p><strong>The system is yours. The code and the data, one hundred percent.</strong> The price is public — ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month to month. Nobody rents you your own business back.</p>

<h3>See what yours would look like</h3>
<p>Tell us how it runs today. We'll show you what we'd build if it were ours. Free, about thirty minutes, screen-shared. If it's not a fit, we tell you straight. <a href="/contact">Send your number</a>, or <a href="/lp/she-answers">tell our AI secretary</a> and she'll set it up while you talk.</p>
        `,
    },
];
