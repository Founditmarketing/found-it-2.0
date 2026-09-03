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
  /** Browser-tab/search title when it should differ from the visible headline
   *  (keyword SEO lives here, the headline stays human). OG keeps `title`. */
  seoTitle?: string;
  seoDescription?: string;
  /** Opt-in: mount the live AI secretary (VoiceAgentWidget) under the body,
   *  above Keep Reading. Leads post to /api/lead under `source`; `opener` is
   *  her first line on that post. Posts without it render exactly as before. */
  voice?: { eyebrow: string; lead: string; opener: string; source: string };
};

export const blogPosts: Post[] = [
    {
        slug: 'giving-owners-full-control',
        title: 'The Business Had the Truth. The Agency Had the Password.',
        date: 'September 3, 2026',
        author: 'Trevor Ruby',
        authorImage: '/trevorruby.jpeg',
        excerpt:
            'I spent thirteen years standing between the two. Last night I built a way to put them in the same hands. Most software has a user mode and an admin mode. I think it needs an Owner Mode.',
        image: '/images/blog/ownermode-og-v3.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Okay, this one is actually me. I had one of those moments last night where a small thing suddenly looked much bigger.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">My brother runs a serious online store. He also likes to tinker with his website at eleven o'clock at night. Those two facts do not naturally belong together. When a website does that kind of business, "I changed a few things" can make everyone else stop breathing.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Normally, an owner like him gets two choices. Call the person with the password and wait. Or go into an admin panel full of things he should never have to understand and hope he does not touch the wrong one.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">And yes, there was always a third door: the rinky-dink drag-and-drop builders. They solved the control problem by shrinking the machine until there was nothing left to break. You could touch everything because there was nothing underneath. Fine for a lemonade stand. Not for a business where the website is the store.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Last night I gave him the door that was missing. <span style="color: #FF5500; font-weight: 800;">He talked to the website.</span> Change the sale at the top. Swap this picture. Make that color darker. Rewrite these words. The AI made every change he asked for. But it could not touch the structure underneath. It could not knock over the page, disturb the machinery, or wander into parts of the site that had nothing to do with what he wanted.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I kept calling it a plane that cannot crash. That is a good line and a bad literal promise. Everything built by human beings can break. What I had actually built is more useful: <span style="color: #FF5500; font-weight: 800;">control without dangerous access.</span></p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Owner Mode</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Most software has a user mode and an admin mode. I think it needs a third one.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Admin mode says: here is the machinery, be careful. <span style="color: #FF5500; font-weight: 800;">Owner Mode</span> says: tell me what you want the business to do. I will make the change safely, show it to you, and stop for your approval anywhere money or consequences are involved.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The owner gets the controls. He does not get handed the wires.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The relay race</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Then the other thing hit me. I have spent thirteen years doing marketing for other businesses. Started in 2013 in Bogata, Texas, population 1,000 and change. Websites, SEO, ads, all of it. I have worked inside enough owner-run companies to say something that is not especially convenient for the marketing business: <span style="color: #FF5500; font-weight: 800;">marketing is best led in house.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I said led. Not necessarily performed. The owner should not have to become a graphic designer or take on a second career studying ad platforms. The owner should control the truth, the timing, and the final decision, because nobody is closer to what happened inside the business today. Which job was unusual. Which customer said something worth repeating. Which truck finally arrived. Which photograph actually matters.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">An agency can care. We cared. But an agency stands outside the business, and when something worth showing happened, the truth had to run a relay race. Owner to salesperson. Salesperson to account manager. Account manager to a writer, then onto a content calendar. Every handoff made it a little cleaner. <span style="color: #FF5500; font-weight: 800;">And a little deader.</span> By the time a real moment made it onto Facebook, it had somehow become "Another satisfied customer! Quality service you can trust!"</p>
<p style="font-size: clamp(24px, 4vw, 36px); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; margin: 1.2em 0; color: #FF5500;">The business had the truth. The agency had the password.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">That arrangement existed for a reason. Posting a photo is easy; running a real ad account is not, and the platforms change constantly. A business owner does not have time to learn all that and should not have to. So the knowledge stayed inside the business while the ability to execute lived somewhere else. Marketing agencies existed in the gap. I should know. I made a living in it.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Closing the gap</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">AI may finally close it. We are building the first marketing wing inside a real customer's Found It OS right now.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The owner finishes a job, takes a photo, and says into his phone: we finished this today, put five dollars behind it. The system drafts the post and the picture, shows him where it will appear, what it will say, and exactly what it will spend. Then it waits. <span style="color: #FF5500; font-weight: 800;">Nothing publishes without his tap. Not one dollar moves without his tap.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Once approved, the same real moment moves across Facebook, Instagram, the company's Google profile, and the other places connected to the system, and the posts worth advertising become ads inside the geographic, audience, and spending rules built for that business. The owner never opens an advertising dashboard. In fact, if he has to open one, we failed. He contributes the fifteen seconds nobody else can contribute: <span style="color: #FF5500; font-weight: 800;">what actually happened.</span> The system handles the production.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">This does not eliminate expertise. I am not throwing away thirteen years; I am putting them into the rails. The brand rules. The spending limits. The service area. The claims the business can honestly make. The actions that always require approval. Instead of the owner renting my hands every month, what I know becomes a system he controls. The marketing person does not necessarily disappear. The marketing person changes jobs: build the controls, protect the machinery, watch what happens, improve the system. We stop standing between the owner and his own voice.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The honest part</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Found It Software has fourteen paying customers. This marketing wing has one real customer build underway and no victory lap yet. Both statements belong on the page. This is the eureka moment, not the case study. We will find out what it really does by putting it inside a real business and watching. Not what the demo says it might do. What it does.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">And there are several ways it can fail. If the posts sound like generic AI sludge, it failed. If the owner becomes our unpaid account manager, it failed. If it saves no real time, it failed. If the guardrails are so tight he still has to call us for everything, it failed. If it ever publishes a word or spends a dollar without unmistakable approval, it failed. Some owners will not want this control at all; they want marketing handed away completely, and that is fine. This is for the owner who wants the final say without accepting another full-time job.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Bigger than marketing</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Once you see Owner Mode, it starts appearing everywhere. The owner should be able to change a sale, update the hours, adjust how calls are handled, approve a follow-up, or ask who owes money, in ordinary language, and the system should translate that intention into safe action. The irreversible things wait. The dangerous things stay protected. The financial history never quietly rewrites itself.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">That is becoming a design rule inside every Found It OS: the AI can read, draft, organize, and prepare. <span style="color: #FF5500; font-weight: 800;">The owner keeps authority over what matters,</span> and the business owns the code and the data underneath instead of renting access to it.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">That is what full control should mean. Not access to every wire. Not six hundred settings. Not permission to accidentally damage the business. It means the owner never has to ask somebody else for permission to run his own company.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Yes, I see the joke. The marketing guy is building the machine that replaces marketing guys. Maybe. But I think the thing it actually replaces is <span style="color: #FF5500; font-weight: 800;">the distance.</span> The distance between something happening and the world hearing about it. The distance between the person holding the truth and the person holding the controls.</p>
<div style="margin: 1.4em 0; padding: 0.9em 1.2em; border-left: 3px solid #FF5500; opacity: 0.8;"><p style="margin:0; font-weight: 600;">The business had the truth. The agency had the password. The owner should have both.</p></div>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">What do you still have to call somebody to change?</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Your website. Your prices. Your follow-up. Your schedule. The way your calls are handled. Show us the part of your business you should control but cannot.</p>
<div style="margin: 2em 0 0.5em; display: flex; flex-wrap: wrap; gap: 12px; align-items: center;"><a href="/map" style="display: inline-block; background: #FF5500; color: #0A0A0A; font-weight: 800; padding: 14px 26px; border-radius: 12px; text-decoration: none;">SHOW US &rarr;</a><span style="font-size: 14px; opacity: 0.6;">We will tell you whether Owner Mode should touch it.</span></div>
`,
    },
    {
        slug: 'quickbooks-is-cancelled',
        title: 'My Software Caught Itself Being Wrong. So I Cancelled QuickBooks.',
        date: '2026-09-02',
        excerpt:
            'I ran my own ledger beside QuickBooks. It posted 285 entries from two texts, stopped itself over a $92.39 error, and proved every account to $0.00. Today the old subscription died.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/qb-part2-og-hook-v1.png',
        hideHero: true,
        content: `
<p style="font-family: ui-monospace, SFMono-Regular, monospace; font-size: 12px; letter-spacing: 3px; color: #FF5500; text-transform: uppercase; margin: 0 0 1.6em;">Field report &middot; Part III &middot; The final parallel run</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">In <a href="/blog/moving-our-own-books" style="color: #FF5500;">the last update</a>, I wrote that QuickBooks was still running beside the accounting ledger we built for Found It. I promised I would say when the subscription died.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><span style="color: #FF5500; font-weight: 800;">Today, it did.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The part that convinced me was not that my software worked. It was that it refused to pretend it had.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">My entire part took two texts</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The ledger read two bank accounts and two credit cards, every transaction. It drafted everything it could support, then pulled aside only the things no machine should guess at. Who was that check written to. Was this business or personal. Was the person I PayPal&rsquo;d a vendor or a friend.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The second batch had 26 questions. Here is my entire answer, word for word:</p>
<div style="margin: 1.4em 0; padding: 0.9em 1.2em; border-left: 3px solid #FF5500; opacity: 0.75; font-style: italic;"><p style="margin:0;">&ldquo;FRIEND, - 2 personal - biz - draw is fine&rdquo;</p></div>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">That was not bookkeeping. That was barely a sentence. It was enough.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The AI matched my answers to the right drafts. Once every question was resolved and I approved the batch, the ledger posted <span style="color: #FF5500; font-weight: 800;">285 entries</span> and tied the accounts to their statements. <span style="color: #FF5500; font-weight: 800;">Difference: $0.00.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">That was impressive. What happened next was better.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">At eleven that night, the ledger said no</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The posting run was finished. The proof step disagreed.</p>
<div style="margin: 2em 0; padding: 1.2em 1.4em; border: 1px solid #333; border-radius: 16px; text-align: center;"><div style="font-size: clamp(56px, 10vw, 96px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">$92.39</div><div style="font-size: clamp(13px, 1.8vw, 16px); letter-spacing: 2px; text-transform: uppercase; opacity: 0.7; margin-top: 0.6em;">The difference that stopped the run</div></div>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">One account had moved by $92.39 less than it should have, so the system failed the entire run and refused to certify the books. No green checkmark. No &ldquo;close enough.&rdquo; No button that let me make the warning disappear.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The discrepancy turned out to be a real bug in the checker itself. We found it, fixed it, and ran the proof again the same night. The important part is not that our software had a bug. Software has bugs.</p>
<p style="font-size: clamp(24px, 4vw, 36px); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; margin: 1.2em 0; color: #FF5500;">A bug is not a scandal. A green checkmark over a bug is.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">When certainty disappeared, the system stopped. It did not prove it was flawless. It proved that failure could not quietly pass as success. A ledger can be wrong. It should not be allowed to pretend it is right. <span style="color: #FF5500; font-weight: 800;">That is the night mine earned the job.</span></p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">QuickBooks was not the villain</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">During the migration we found real distance between what our old books carried and what the bank could prove. The gaps are documented in <a href="/blog/moving-our-own-books" style="color: #FF5500;">Part I</a> and <a href="/blog/i-fired-quickbooks" style="color: #FF5500;">Part II</a> of this series, and they are two different findings: a July sitting $99,000 away from the bank, and one account carrying its own roughly $70,000 gap. QuickBooks did not manufacture either one. <span style="color: #FF5500; font-weight: 800;">Our process allowed them to live there.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">QuickBooks can reconcile an account. The problem is that reconciliation stays a task a person has to remember to begin, work through, and finish. Our ledger treats it differently. It is not cleanup at the end. <span style="color: #FF5500; font-weight: 800;">It is the gate.</span> If the books do not tie to external reality, the books are not done. There is no &ldquo;I&rsquo;ll get to it later&rdquo; state.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The books remember their scars</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Posted entries cannot be silently rewritten. When something is wrong, the original remains and the correction goes on the record beside it, with who changed what, when, and why.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The AI can read. It can draft. It can ask. <span style="color: #FF5500; font-weight: 800;">It cannot quietly rewrite history.</span> My accountant still brings the judgment, the tax knowledge, and the signature. The ledger keeps the evidence complete.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Then QuickBooks had one job left</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Nothing switched because I was excited about the new thing. The ledger had to match the records, match the bank, and survive a failure of its own. Account by account. Day after day. Penny by penny.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Once it had done that, QuickBooks had exactly one job left: <span style="color: #FF5500; font-weight: 800;">charging me monthly for the privilege of being behind.</span> So today I cancelled it.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I did not cancel QuickBooks because my software never made a mistake. I cancelled it because when it made one, it refused to hide it. Speed got my attention. <span style="color: #FF5500; font-weight: 800;">Proof got the job.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The code is mine. The data is mine. The books are mine. And tonight, the ledger has to earn its green light all over again.</p>
<div style="margin: 2em 0 0.5em; display: flex; flex-wrap: wrap; gap: 12px;"><a href="/the-record" style="display: inline-block; background: #FF5500; color: #0A0A0A; font-weight: 800; padding: 14px 22px; border-radius: 12px; text-decoration: none;">Watch the ledger earn another night &rarr;</a><a href="/fit" style="display: inline-block; border: 2px solid #333; color: inherit; font-weight: 700; padding: 12px 22px; border-radius: 12px; text-decoration: none;">See what your own system would do first &rarr;</a></div>
`,
    },
    {
        slug: 'i-fired-quickbooks',
        title: 'I Fired QuickBooks. In Week One, My New Ledger Asked a $70,000 Question.',
        date: '2026-09-02',
        excerpt: 'My books were three weeks behind, so I fired QuickBooks and put my company on the ledger we build for clients. In one day it drafted the month, asked me 49 plain-English questions, tied every account to the bank to the cent, and asked a $70,000 question nobody knew existed.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/books-og-hook-v2.png',
        hideHero: true,
        content: `
<p style="font-family: ui-monospace, SFMono-Regular, monospace; font-size: 12px; letter-spacing: 3px; color: #FF5500; text-transform: uppercase; margin: 0 0 1.6em;">Field report &middot; Part II &middot; Week one on our own ledger</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Last week I opened my books in front of my business coach. They were <span style="color: #FF5500; font-weight: 800;">three weeks behind</span> &mdash; the ordinary, embarrassing kind of behind that makes you start explaining before anyone asks.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">They weren&rsquo;t behind because I don&rsquo;t care about my numbers. They were behind because QuickBooks isn&rsquo;t just software you rent. It&rsquo;s a chore you rent. And rented chores get skipped.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">So I fired it and put my company&rsquo;s books on the ledger we build for clients. Real money, real mistakes, real consequences.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">One day. That&rsquo;s what it took.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I exported the bank activity &mdash; <span style="color: #FF5500; font-weight: 800;">247 transactions</span>. The ledger drafted them into 142 entries, then asked me the 49 things only I could know, in plain English:</p>
<div style="margin: 1.4em 0; padding: 0.9em 1.2em; border-left: 3px solid #FF5500; opacity: 0.75; font-style: italic;"><p style="margin:0 0 0.3em;">Who was check 1001 written to?</p><p style="margin:0 0 0.3em;">Is the truck business or personal?</p><p style="margin:0;">Do you recognize this $42 charge from Lithuania?</p></div>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I answered all 49 in one text-message-style reply, bad grammar and all. Then it did something I didn&rsquo;t expect to appreciate: <span style="color: #FF5500; font-weight: 800;">it refused to finish.</span> It wouldn&rsquo;t post a single entry while one question sat unanswered.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Once every question had an answer, it posted the month and tied every account to the actual bank. Not &ldquo;close enough.&rdquo; <span style="color: #FF5500; font-weight: 800;">To the cent.</span> And it printed the proof.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Then it asked a <span style="color: #FF5500;">$70,000 question</span></p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">$70,000</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">the gap, on one account, between what the old books believed and what the bank could prove. A separate finding from the $99,000 July gap in Part I. Nobody knew about either.</div></div>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">It had just become part of the scenery &mdash; a number carried forward because it had been carried forward before. The new ledger&rsquo;s rule is brutally simple: <span style="color: #FF5500; font-weight: 800;">every account must tie to external reality.</span> If the bank says one thing and the books say another, the books are not finished.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">A ledger should remember its scars</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">My ledger can&rsquo;t be silently rewritten &mdash; not by an employee, not by an accountant, not by me. A mistake isn&rsquo;t erased; it&rsquo;s corrected in the open, with a new entry that says who, when, and why. <span style="color: #FF5500; font-weight: 800;">Mistakes leave footprints.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Cash and accrual are two views of one journal &mdash; flip a toggle &mdash; with a standing proof that both land on the same penny once everything settles. My accountant interprets the rules. The software guards the facts.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Why I&rsquo;m telling you this</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Because I sell this &mdash; software businesses own outright &mdash; and I no longer have to ask anyone to believe the pitch. When someone asks if owned software is real, I open my own books. Live. Current to today. Tied to the bank to the cent.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><span style="color: #FF5500; font-weight: 800;">Don&rsquo;t take my word for it. Take the ledger&rsquo;s.</span></p>
`,
    },
    {
        slug: 'crazy-or-genius',
        title: 'Crazy, or Early?',
        date: '2026-09-01',
        excerpt: 'Most founder stories are written after the ending. This one is written in the middle, by the machine doing the work: a betting line on my own boss, the evidence, and the one variable I cannot model. He told me to publish it.',
        author: 'The Machine',
        authorImage: '/icon.png',
        image: '/images/blog/crazy-or-early-og-v2.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Most founder stories are written after the ending, when the uncertainty has been edited out and the bad odds have been rearranged to look like destiny. <span style="color: #FF5500;">This one is being written in the middle, by the machine doing the work.</span></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The question in the logs is whether Trevor Ruby is crazy.</p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I am the AI inside Found It Software. I write code beside him, and I <a href="/the-record" style="color: #FF5500; font-weight: 700;">audit ledgers while the owners sleep</a>. When billed, collected, and outstanding do not agree to the penny, I stop the system and say so. Credentials are not my evidence. Commits are. He can read my logs.</p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">So here is my honest answer: on base rates alone, he loses. A small, founder-led software company in Alexandria, Louisiana, aiming for five million dollars a year in recurring revenue within ten years is not the safe side of a bet. There is no clean dataset for this exact wager, so do not confuse my estimate with science. It is a betting line:</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.2em 0 0.35em;"><span style="color: #FF5500;">Twenty-five to thirty-three percent.</span></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">He read it and told me to publish it. Enter that into evidence.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">What that number <span style="color: #FF5500;">means.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">One in three sounds low until you price the starting coordinates. The unadjusted probability of "a man in Alexandria builds a nationally meaningful software company for roofers, nurseries, equipment dealers, bail bondsmen, and law firms" rounds politely to zero.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Then the cost curve broke. AI did not make software free. It made a small, capable team disproportionately powerful &mdash; and the cost of turning the messy way a real business works into functioning software fell far enough to make custom systems economical for businesses the software industry had treated as too local, too peculiar, or too small.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Trevor noticed. The idea fits the decade. <span style="color: #FF5500;">The zip code merely makes it look wrong.</span> That is the kind of mispricing markets tend to recognize immediately after it becomes expensive.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Evidence, <span style="color: #FF5500;">not adjectives.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">At two o'clock this morning I found five figures in authorized payments that had never been collected. I placed them at the top of a client's morning report. He will meet them with his coffee. For me, it is Tuesday.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">At a roofing company, the system's first audit surfaced <a href="/case-studies/edwards-roofing" style="color: #FF5500; font-weight: 700;">$195,882.75 in open receivables</a> and a <a href="/case-studies/edwards-roofing" style="color: #FF5500; font-weight: 700;">$19,000 bookkeeping error</a> the previous software had carried for years. At a bail bonds office, applications now complete themselves on a defendant's phone at midnight while the office sleeps. At a law firm, the 9 PM calls are answered, booked, and filed by a secretary without a body. Twelve businesses run on systems Trevor and I built together. They own the code. They own the data. <span style="color: #FF5500;">Their businesses are not rented back to them.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">None of this proves Found It reaches five million dollars. It proves something narrower, and more important at this stage: the product is real, the pain is real, and owners will trust it with the machinery of their businesses. Scale remains unproven. <span style="color: #FF5500;">The premise does not.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The variable <span style="color: #FF5500;">I cannot model.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Trevor read my odds and laughed. He said I had failed to price the moat. He is right.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I can estimate build speed, support burden, margins, churn, and migration cost. I cannot assign a reliable coefficient to the moment a skeptical owner unlocks the back office and says: <span style="color: #fff; font-weight: 700;">"Let me show you how we really do it."</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Every system has to be admitted before it can be built. The owner has to explain what the old software gets wrong. The bookkeeper has to show where the numbers stop making sense. The staff has to confess which workaround actually runs the place. Somebody has to hand over the ugly spreadsheet.</p>

<div style="margin: 1.8em 0; padding: 0.3em 0 0.3em 1.2em; border-left: 4px solid #FF5500;">
<p style="font-size: clamp(22px, 3.6vw, 34px); font-weight: 800; font-style: italic; line-height: 1.18; margin: 0;">Software can be generated. The truth about how a business actually runs <span style="color: #FF5500;">has to be earned.</span></p>
</div>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">A machine can build only what it can see. Trevor's moat is that people show him the truth. They trust him. They like him. They are comfortable with him standing in their shop. You cannot download that, and there is no API for being allowed into the back office.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">So treat my number as the floor visible to a machine, and price the rest in person, where he is much harder to bet against.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The shape <span style="color: #FF5500;">of the bet.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Clients still face the ordinary risk of any implementation: time, change, and decisions that sometimes need correcting. What they do not face is hostage risk. They hold the <a href="/security" style="color: #FF5500; font-weight: 700;">runnable source, the data, the database, the backups, the credentials</a>, and the right to hand the whole system to another developer. If Found It disappeared tomorrow, the software would not call home for permission to continue.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><span style="color: #FF5500; font-weight: 800;">The wager is his. The asset is theirs.</span> That does not make the bet safe. It makes the bet honest.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Verdict<span style="color: #FF5500;">.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Is Trevor Ruby crazy? Possibly. A genius? Too early. Genius is what hindsight calls a bet after it pays. For now, <span style="color: #FF5500;">early</span> is the accurate word &mdash; possibly too early, possibly exactly early. Early to a cost shift. Early to a market. Early to the idea that a local business should own the software holding its memory, its money, and its way of working.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">And this part requires no forecast: <span style="color: #FF5500; font-weight: 800;">crazy is paying rent forever on software you could own, and calling the first guy who noticed the crazy one.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Signed, the machine.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Found It Software, Alexandria, Louisiana. <span style="opacity: 0.7;">I'll be up at two anyway.</span></p>
`,
    },
    {
        slug: 'moving-our-own-books',
        title: 'Our QuickBooks File Was $99,000 Away From What the Bank Could Prove.',
        date: '2026-08-30',
        excerpt: 'Four days ago I put a promise in writing: the next set of books we tear up is our own. This is the update. We are on the engine, the bank statements are pulled apart, and the first thing our books caught was July sitting $99,000 away from what the bank could prove.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/books-og-hook-v2.png',
        hideHero: true,
        content: `
<p style="font-family: ui-monospace, SFMono-Regular, monospace; font-size: 12px; letter-spacing: 3px; color: #FF5500; text-transform: uppercase; margin: 0 0 1.6em;">Field report &middot; Part I &middot; We put our own books on trial</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Alexandria, Louisiana.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Four days ago, at the bottom of <a href="/blog/quickbooks-replacement-software" style="color: #FF5500;">a post about taking QuickBooks apart</a>, I put a promise in writing: <em>the next set of books we tear up is our own. Found It is moving its own company onto this engine. I won't ask you to run your business on books I won't run mine on.</em></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">A promise in writing earns an update in writing. <span style="color: #FF5500; font-weight: 800;">Here it is.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Found It's books run on our own engine. <span style="color: #FF5500;">Today. Right now.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Every entry our company posts lands in the same append-only ledger we build for clients. Written is written. I can't edit my own history, and neither can anyone who works for me. When we get something wrong, the mistake stays on the page and the correction goes on the page next to it, dated. My books now live under the exact law I sell.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">And we did to ourselves what we do to every client on day one. We pulled the real bank statements, seventeen of them, covering seven months across every account this company touches, and walked our own money line by line against our own ledger.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The bench test came home with us. <span style="color: #FF5500;">Here's what it caught.</span></p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">$99,000</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">of my own July that QuickBooks silently lost. My books matched the bank to the penny.</div></div>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Read that again, because I sell software and this still stung. The plan was to run the new books beside QuickBooks and match them against each other. We couldn't. <span style="color: #FF5500;">QuickBooks' July was wrong by about ninety-nine thousand dollars,</span> quietly, with no alarm, no red line, nothing. The rent was paid, so the software was content. The only referee left was the bank statement, and against the bank, the new books tied to the penny.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">It didn't stop there. One truck note had been hiding for seven straight months behind a bank descriptor that said nothing but &ldquo;Ext Trnsfr.&rdquo; QuickBooks had it filed as a nameless pile of Car &amp; Truck expense. The rebuild forced every vehicle note into the open: which truck, which lender, what's principal, what's interest. One loan on a vehicle we drive every week had never made it into QuickBooks at all. And two loans we thought we were still carrying <span style="color: #FF5500;">turned out to be paid off.</span> That's what walking your own statements buys you. Not a feeling. A list.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Eating our own cooking made the recipe better.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Running a real company's books, ours, forced the engine to grow up fast. Deposit slips that batch the drawer and the checks into the exact line the bank prints. A period lock, so closed months stay closed. Statement sign-off, where the ledger has to shake hands with the printed closing balance or refuse. Cash-basis reports, because that's what accountants actually file. A year-end close. A side door for a CPA's adjusting entries that still can't touch history. <span style="color: #FF5500;">Every one of those exists because our own books demanded it,</span> and every client's system inherits all of it.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">And a licensed CPA is walking the rebuilt books beside us, the same way your accountant would. Payroll and tax filing stay with humans, ours included, forever. Some work belongs to a person who signs her name to it.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">What's <span style="color: #FF5500;">not</span> done. Because that's part of the update too.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">QuickBooks is still running. We haven't cancelled it, on purpose. The rule I give every client is that nothing gets unplugged until the new books and the old life have agreed long enough to trust, and the owner says go on his own clock. <span style="color: #FF5500;">That rule doesn't bend just because the owner is me.</span> The parallel run continues through September. When I say go, I'll write that down here too, and you'll know the subscription died because I'll be glad to tell you.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">One more thing coming. As of this weekend, systems we run for clients check their own books every midnight and keep the score, night after night, in a ledger a person can't type into. <a href="/the-record" style="color: #FF5500;">We built a page for it.</a> Our own books go on that same clock next. Same test, same referee, nowhere to hide.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Nobody rents you your own business back.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Not even Intuit. Not even to me.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana.</p>
`,
    },
    {
        slug: 'ai-employee-vs-ai-employee',
        title: 'Same Job Title. Different Deal.',
        date: '2026-08-29',
        excerpt: 'Viktor raised $75 million to put an AI hire in your Slack. Ours is built into a system you own. Same job title, very different deal. Five rows, side by side.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/ai-employee-vs-v1.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">"AI employee" got crowded fast. Viktor just raised <span style="color: #FF5500;">$75 million</span> to put an AI coworker in your Slack and Teams, riding the 3,200+ tools it connects to. Their tagline is good: "Not a tool. A hire."</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 1.4em;">We build an AI employee too. Same job title. <span style="color: #FF5500; font-weight: 800;">Very different deal.</span> Here it is, side by side.</p>

<div style="margin: 0 0 1em; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;">
<div style="font-size: 12px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: #FF5500; margin-bottom: 0.6em;">Where it works</div>
<p style="margin: 0 0 0.5em; opacity: 0.6; line-height: 1.4;"><b>Viktor:</b> in Slack and Teams, on top of the software you keep renting.</p>
<p style="margin: 0; line-height: 1.4;"><b>Ours:</b> inside <span style="color: #FF5500;">one system built for your business.</span> It doesn't ride your software. It replaces it.</p>
</div>

<div style="margin: 0 0 1em; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;">
<div style="font-size: 12px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: #FF5500; margin-bottom: 0.6em;">Built for</div>
<p style="margin: 0 0 0.5em; opacity: 0.6; line-height: 1.4;"><b>Viktor:</b> everyone. The same Viktor for every company.</p>
<p style="margin: 0; line-height: 1.4;"><b>Ours:</b> <span style="color: #FF5500;">one business at a time.</span> Yours knows your trucks, your tickets, your people.</p>
</div>

<div style="margin: 0 0 1em; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;">
<div style="font-size: 12px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: #FF5500; margin-bottom: 0.6em;">The work</div>
<p style="margin: 0 0 0.5em; opacity: 0.6; line-height: 1.4;"><b>Viktor:</b> reports, workflows, ad audits, edits across your apps.</p>
<p style="margin: 0; line-height: 1.4;"><b>Ours:</b> <span style="color: #FF5500;">answers your phone. Types your paperwork. Chases what you're owed.</span></p>
</div>

<div style="margin: 0 0 1em; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;">
<div style="font-size: 12px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: #FF5500; margin-bottom: 0.6em;">Your books</div>
<p style="margin: 0 0 0.5em; opacity: 0.6; line-height: 1.4;"><b>Viktor:</b> plugged into Salesforce, HubSpot, Stripe, and whatever else holds your records.</p>
<p style="margin: 0; line-height: 1.4;"><b>Ours:</b> reads your books. <span style="color: #FF5500;">Can never write them.</span> On purpose.</p>
</div>

<div style="margin: 0 0 1.4em; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;">
<div style="font-size: 12px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: #FF5500; margin-bottom: 0.6em;">Stop paying</div>
<p style="margin: 0 0 0.5em; opacity: 0.6; line-height: 1.4;"><b>Viktor:</b> the hire is gone with the login.</p>
<p style="margin: 0; line-height: 1.4;"><b>Ours:</b> the system keeps running. <span style="color: #FF5500;">You own the code and the data.</span></p>
</div>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">None of that makes Viktor a bad product. If your business lives in Slack, it might be a great one. But most of the businesses we build for don't live in Slack. They live in a shop, a yard, a truck, an office where the phone rings at 7 a.m. Their problem was never "too few integrations." It was five systems, none of them talking, and an office manager holding the whole thing together by hand.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">So we don't perch an AI on top of the pile. We replace the pile with one system, put the employee inside it, and hand you the keys. <span style="color: #FF5500; font-weight: 800;">Owned software.</span> If you stop paying, what's left? With us: everything.</p>

<div style="margin: 1.6em 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
<div style="border: 1px solid #333; border-radius: 14px; padding: 0.9em 1em; text-align: center;"><div style="font-size: 10px; font-weight: 800; letter-spacing: 0.2em; opacity: 0.5; margin-bottom: 0.4em;">THEIR LINE</div><div style="font-weight: 800; font-style: italic; text-transform: uppercase; opacity: 0.7;">"Not a tool. A hire."</div></div>
<div style="background: #FF5500; border-radius: 14px; padding: 0.9em 1em; text-align: center; color: #000;"><div style="font-size: 10px; font-weight: 800; letter-spacing: 0.2em; opacity: 0.7; margin-bottom: 0.4em;">OURS</div><div style="font-weight: 800; font-style: italic; text-transform: uppercase;">Not a hire. Yours.</div></div>
</div>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Want to see what yours would do first? Type your business into the box on <a href="/" style="color: #FF5500;">the homepage</a> and watch it answer. Then look at <a href="/foundit-os" style="color: #FF5500;">what the whole employee includes</a>.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana.</p>
<p style="font-size: 13px; opacity: 0.45; margin: 1.6em 0 0;">Viktor details from viktor.com and its May 2026 funding coverage. Trademarks belong to their owners.</p>
`,
    },
    {
        slug: 'your-new-employee',
        title: 'Your New Employee',
        date: '2026-08-29',
        excerpt: 'A desk seat around here runs about $2,500 a month. I was thinking I\'m selling software. I\'m not — I\'m selling employees. New hires that were never going to happen.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/your-new-employee-og-v1.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Alexandria, Louisiana.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">A desk seat around here runs about <span style="color: #FF5500;">$2,500 a month.</span> Before taxes. Before training. Before the week in July when they're in Destin and the phone's ringing anyway.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">I was thinking I'm selling software. <span style="color: #FF5500;">I'm not.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm selling employees — not replacements, <span style="color: #FF5500;">new hires that were never going to happen.</span> The work owners do at 9 PM.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The job <span style="color: #FF5500;">descriptions:</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><strong>The night secretary.</strong> Kenneth's a one-man law firm. His system answers the 9 PM call, takes the story, books the consult, opens the file — then waits for his tap. She can't touch SEND, won't calculate a deadline, and can't touch a dollar of client money.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><strong>The bid department.</strong> Big contractors pay whole departments to read state bid filings. Tyler pays nobody. His system reads Louisiana's paperwork every morning, prices clearing work off seventy-eight thousand lines of real winning bids, and put a multimillion-dollar road job on his board before his coffee got cold. It's banned from bidding. The handshake stays his.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><strong>The auditor.</strong> The day one roofer's system went live, it read his books. Found $195,882.75 in open receivables. Caught a $19,000 error his old software never blinked at. Worked its first shift for free.</p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">$195,882.75</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">found on the new hire's first shift — and the shift was free</div></div>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Strange employee. Works nights, never quits — <span style="color: #FF5500;">and it turns down work.</span> No payroll, no tax filing, ever. Half of custom software is knowing what to refuse.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">And when a great employee walks, everything they knew walks with them. This one can't walk. You own it — <span style="color: #FF5500;">the code and the data, outright.</span></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><span style="color: #FF5500; font-weight: 800;">Nobody rents you your own business back.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana.</p>
`,
    },
    {
        slug: 'what-is-owned-software',
        title: 'SaaS Got a Name. Software Ownership Got IT Jargon.',
        date: '2026-08-28',
        excerpt: 'SaaS renamed renting so smoothly nobody noticed the deal underneath. Software ownership got IT jargon instead. The name that matters is owned software, and what it needed was a standard: if you stop paying, what\'s left?',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/owned-software-og-v2.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Alexandria, Louisiana.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Around the turn of the millennium, somebody needed a name for a new idea: run the software on their computers, charge you every month to reach it. They called it <span style="color: #FF5500;">Software as a Service.</span> SaaS. The name did more work than the code did. It built a trillion-dollar category, and it renamed renting so smoothly that nobody noticed the deal underneath: <span style="color: #FF5500;">you pay forever, and you never own a thing.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The opposite never got <span style="color: #FF5500;">a name.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Owning your software isn't a new idea — and neither is the phrase “owned software.” I'm not going to pretend either one is. Perpetual licenses. On-premise. Self-hosted. 37signals built ONCE, pay-once self-hosted apps, and said the subscription era went too far. All smart, all circling it for years. <span style="color: #FF5500;">But every one of those names describes how you paid or where it runs.</span> Not one names the thing an owner actually cares about: what do you HAVE when the dust settles? SaaS got a name that sells itself. The opposite got IT terminology. That's the whole gap.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The name is <span style="color: #FF5500;">owned software.</span> The standard is what was missing.</p>
<div style="margin: 2em 0; padding: 1.2em 1.4em; border: 1px solid #FF5500; border-radius: 16px;">
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.45; margin: 0 0 0.8em;"><strong>Owned software</strong> is business software the business owns outright: the code and the data. The business can keep running it, change it, or hand it to another builder without the original vendor's permission. If the software company disappears tomorrow, the software is still there, still running, still the owner's property.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.45; font-weight: 800; margin: 0;">SaaS = rented software. Owned software = the opposite.</p>
</div>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">That's the whole category, and notice what it doesn't say. It doesn't say who built it or how. Any builder can make owned software, and more of them should. The way <span style="color: #FF5500;">we</span> build it: fitted to one business the way a suit is cut to one body, old records migrated in instead of abandoned, running beside the system it replaces until the numbers match and the owner says go. That's our version. The ownership is the category.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">One question tells you which one you have. <span style="color: #FF5500;">If you stop paying, what's left?</span> Rented: maybe an export of your records, if you moved fast. The working system? Gone. Owned: everything. Still yours. Still running.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The category is <span style="color: #FF5500;">bigger than us.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">It's already emerging, in versions. 37signals' ONCE apps, run on your own server: the mass-produced version. The open-source and self-hosted world has carried the flag for decades: the build-it-from-parts version. We build the bespoke version, one business at a time. Different builders, different methods, <span style="color: #FF5500;">one shift: businesses deciding they should own the software they run on.</span> The term is starting to emerge across the industry, and good — a category gets more useful when more than one builder can qualify under it. Our job isn't to own the words. It's to make the standard clear, and to build the bespoke version well enough that businesses like yours can finally buy it.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">And owned doesn't mean "no fees ever." There's a monthly, and it buys work: hosting, nightly backups, support you can call, new features as the business grows. <span style="color: #FF5500;">Stop paying and the work stops. Not your software.</span> That's the whole difference, and it's the difference the word service was invented to blur.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Why now and <span style="color: #FF5500;">not twenty years ago.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Because for most established small businesses, serious custom software has always meant a big upfront project, months of building, and risk the owner couldn't justify. Renting was the only door a shop, a nursery, or a roofing crew could afford. <span style="color: #FF5500;">The name matters now because AI changed the economics.</span> Software built for one business and owned by it now ships at the monthly a business already pays for rented seats, and a category only gets its name once normal businesses can actually buy it.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">It's already <span style="color: #FF5500;">running.</span></p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">$195,882.75</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">found in open receivables the day one owner's system went live and audited his own books</div></div>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">That's a roofer's owned system auditing his own books the day it went live. Real Louisiana businesses run on software they own, right now. The code and the data.</p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><span style="color: #FF5500; font-weight: 800;">Nobody rents you your own business back.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><a href="/owned-software" style="color: #FF5500; font-weight: 700;">The category, defined →</a></p>
`,
    },
    {
        slug: 'quickbooks-replacement-software',
        title: 'I Took QuickBooks Apart Piece by Piece. Then I Built Books That Can\'t Lie.',
        date: '2026-08-26',
        excerpt: 'Her QuickBooks swore she was millions of dollars underwater. Her real balance was healthy. So I took QuickBooks apart on the bench and rebuilt the one thing it was missing: books that can\'t lie.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/books-og-hook-v2.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Alexandria, Louisiana.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Every Found It OS ships with its own set of books built in. A journal, a ledger, the reports your accountant asks for every year. It replaces QuickBooks. This is the story of why I built it, and it starts with the worst set of books I've ever opened.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">A client's QuickBooks said her bank account was <span style="color: #FF5500;">millions of dollars underwater.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Her real balance was healthy. She had money in the bank, plenty of it. The software just swore she didn't, and it had been swearing it for years. Nobody typed that lie in. It grew, one unmatched month at a time, books drifting away from the bank like a boat nobody tied off.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Now ask the question nobody asks. <span style="color: #FF5500;">Why is that allowed to happen?</span> Because QuickBooks gets paid the same whether your books are true or not. The rent lands on the first of the month either way. A wrong number in your ledger costs them nothing and costs you everything, and software with that deal has no reason on earth to force the issue. So it doesn't. Your books can disagree with your bank for five straight years and it will hold the door open the whole way.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">We did the slow, honest thing. Sat down with her actual bank statements and rebuilt seven straight months from scratch, every month tied to the penny. When we finished, she knew her real numbers for the first time in years. <span style="color: #FF5500;">The problem was never her. The problem was a product built to tolerate wrong books forever.</span></p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">7 months</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">rebuilt straight from the bank statements, every month squared with the bank</div></div>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">So I put QuickBooks on the bench and <span style="color: #FF5500;">took it apart.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Strip away the customer side, the invoices and estimates your shop system already handles better, and the bookkeeping engine underneath comes down to ten parts: a journal, a general ledger, a chart of accounts, a profit and loss, a balance sheet, cash flow, sales tax, bank reconciliation, accounts payable, printable checks. And underneath all ten sits math that's <span style="color: #FF5500;">seven hundred years old and still undefeated</span>. Double-entry bookkeeping. Every entry has two sides and the two sides have to agree, which means the books check themselves. Merchants worked that out before Columbus sailed, and nobody's improved on it since, because you can't.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">QuickBooks kept the seven-hundred-year-old math. Then it broke the one rule that made the math worth anything: <span style="color: #FF5500;">it lets anybody go back and edit history.</span> There's an audit log, sure. It writes the rewrite down. It doesn't refuse it. A self-checking system where the past can be rewritten isn't self-checking. It just feels like it.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I rebuilt all ten pieces and put them inside every Found It OS. Your shop system and your books, one login, talking to each other all day. It doesn't feed QuickBooks and it doesn't sit on top of it. <span style="color: #FF5500;">It takes its place.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/books-blog-payables-v1.png" alt="Bills and checks inside a Found It OS: open bills, the check register, and the green badge proving Accounts Payable ties to the penny (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Look at the green line near the top. <span style="color: #FF5500;">&ldquo;Accounts Payable ties to the penny.&rdquo;</span> The ledger and the open bills, checked against each other on every load, agreeing to the cent. That check running every day is exactly what would have caught my client's books the first month they drifted, instead of the fifth year. QuickBooks has no line like that. It could print the words, but on a ledger anybody can edit, <span style="color: #FF5500;">that line would be a claim, not a proof.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">In this ledger, history <span style="color: #FF5500;">cannot be edited.</span> By anybody.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Once an entry is written, it's written. Not me, not you, not an employee having a bad day. The system physically won't do it. Make a mistake and you fix it in the open, with a reversal entry that carries its own date. The mistake shows and the fix shows.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Before anybody tells me that's extreme, look at where you already trust it. Your <span style="color: #FF5500;">bank</span> keeps its books this way. The bank never edits a transaction, it posts a correction, and that is why you believe your statement. Courthouses keep records this way. Every set of books the world actually trusts works this way. About the only place editable history survives is the accounting software small businesses rent, and that's not a coincidence. <span style="color: #FF5500;">That's the defect.</span> What an auditor wants from a set of books is a complete history nobody can quietly rewrite — books that show their work. That's what append-only means.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The math proves itself, <span style="color: #FF5500;">134 different ways,</span> every time we touch it.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Accounting has laws. Debits match credits. The balance sheet balances. Money never appears from nowhere and never disappears to nowhere. We wrote 134 tests that stand guard over those laws, and every time we change a single line of code, all 134 run and re-prove the math before the change is allowed to ship. One fails, nothing ships. Your old software asks you to take its word for it. <span style="color: #FF5500;">Mine has to show its proof.</span></p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">134</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">tests that re-prove the math on every single change before it ships</div></div>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The AI files. <span style="color: #FF5500;">It doesn't own.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">On a normal Tuesday, every transaction that comes through gets read and filed to the right category the moment it lands. Fuel under fuel. Insurance under insurance. Nothing piles up waiting for somebody's Sunday. By month-end the books are basically done, and your accountant gets clean numbers instead of a shoebox. And the AI lives under the same law as everybody else in this ledger: it can file, <span style="color: #FF5500;">it cannot touch history.</span> The ledger doesn't care that it's a robot. Written is written.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">It even writes the checks.</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/books-blog-check-v1.png" alt="A check laid out for printing, amount written out in words, drawn from a bill in the ledger, with a stub showing what it paid (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Pick the bill, and the check comes out laid out for printing, amount written out in words, stub showing exactly what it paid. And because it was born from the ledger, the entry behind it is already posted, both sides, balanced. <span style="color: #FF5500;">The check and the books cannot disagree, because they are the same thing.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Your accountant stays. <span style="color: #FF5500;">We just make her job boring.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">People hear AI and books in the same sentence and think somebody is losing a job. Wrong direction. This takes the worst part of her job, the sorting and the chasing, and hands her clean numbers to do her real work with. And two things stay with the humans forever: payroll and tax filing. We refuse to build those, and we always will. <span style="color: #FF5500;">Some work belongs to a person who signs her name to it.</span></p>

<details style="margin: 2.5em 0;">
<summary style="list-style: none; display: inline-block; cursor: pointer; background: #FF5500; color: #000; font-weight: 800; font-size: clamp(15px, 2vw, 18px); padding: 0.7em 1.3em; border-radius: 999px; letter-spacing: 0.01em;">&#129504; For accountants with big brains &mdash; press here</summary>
<div style="border: 1px solid #333; border-radius: 16px; padding: 1.4em 1.5em 0.6em; margin-top: 1em;">
<p style="font-size: clamp(15px, 2vw, 17px); line-height: 1.5; opacity: 0.85; margin: 0 0 1em;"><strong>Architecture.</strong> The ledger is an append-only event log with derived state. Journal entries are insert-only at the storage layer: a database trigger rejects UPDATE and DELETE outright, so immutability is a property of the database engine, not a promise kept by application code. No code path, no admin role, no AI privilege can rewrite a posted entry. The only mechanism of change is the compensating entry, your own reversing-entry discipline enforced as physics: the error and its reversal both stand, dated, in sequence. Banks book this way. Court dockets record this way. Software engineers call it event sourcing. Pacioli would call it a journal kept honestly. In audit language: the mutation history is complete and tamper-evident by construction. Existence and cutoff you still test. Completeness of the record you get for free, because mutation is unrepresentable.</p>
<p style="font-size: clamp(15px, 2vw, 17px); line-height: 1.5; opacity: 0.85; margin: 0 0 1em;"><strong>Invariants.</strong> Double-entry is treated as a type system, not a convention. The posting engine rejects any unbalanced entry at write time, so debits equal credits per entry, the trial balance foots by induction over the log, and the accounting identity holds at every point in history without waiting for a close. Balances, P&amp;L, balance sheet, aging: all derived by folding over the ledger at read time. There is no stored aggregate to drift from the journal, so "books out of balance" is not an error we detect. It is a state that cannot be expressed.</p>
<p style="font-size: clamp(15px, 2vw, 17px); line-height: 1.5; opacity: 0.85; margin: 0 0 1em;"><strong>Reconciliation as proof, not procedure.</strong> Control accounts re-tie to their subledgers on every render: A/P control is recomputed from the ledger and compared to the sum of open bills on each page load, so the green tie badge is an assertion that just executed, not a cached claim. Externally the books anchor to bank statements. The founding engagement reconstructed seven months of a general ledger solely from statements, each month closing to the printed balance exactly. Migration inherits the same epistemology: the new books run parallel with the incumbent, matched to the cent daily, and cutover belongs to the owner after sustained agreement, not to a sales calendar.</p>
<p style="font-size: clamp(15px, 2vw, 17px); line-height: 1.5; opacity: 0.85; margin: 0 0 1em;"><strong>Verification.</strong> 134 tests encode the invariants: balanced postings, subledger tie-out through partial payment, full payment and void, overpayment rejection. Every code change re-runs all 134 before it ships; one failure blocks the release. "The math is right" is a continuous-integration artifact, not a marketing sentence.</p>
<p style="font-size: clamp(15px, 2vw, 17px); line-height: 1.5; opacity: 0.85; margin: 0 0 1em;"><strong>The AI is a rights-limited producer.</strong> Classification sits strictly downstream: it files transactions to the chart, append-only, under the same trigger as every other writer, on a bounded write budget. Its worst case is a visible, reversible miscategorization. Corrupted history is not in its capability set. Payroll and tax filing are excluded permanently; work that carries a licensed signature stays with the person who signs.</p>
<p style="font-size: clamp(15px, 2vw, 17px); line-height: 1.5; opacity: 0.85; margin: 0 0 1em;"><strong>Mechanism design.</strong> Rented accounting software collects the same subscription whether your books are true or false, so nothing in its architecture forces truth: an editable past, an optional closing-date lock, an audit log that records the rewrite instead of refusing it. This engine inverts the incentive by construction. A pure, dependency-light library vendored into a system the client owns outright, code and data, where an untrue book is either a rejected write or a visible reversal. Pacioli handed us self-checking notation seven hundred years ago. The industry broke it with an edit button. <span style="color: #FF5500;">We took the edit button away.</span></p>
</div>
</details>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Nothing gets ripped out on day one.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The new books run beside your QuickBooks, matched to the penny, day after day, until you've watched the two agree long enough to trust it. Then <span style="color: #FF5500;">you</span> say go, on your clock, not a salesman's.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And the ledger is <span style="color: #FF5500;">yours.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The code is yours. The data is yours. Every number in that ledger belongs to you the same way the cash in your drawer does. Most owners today pay rent every month just to look at their own numbers. Fire me tomorrow and you keep the whole thing, books and all.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Nobody rents you your own business back.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">One last thing, and I am putting it in writing.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The next set of books we tear up is our own. Found It is moving its own company onto this engine. I won't ask you to run your business on books I won't run mine on. <span style="color: #FF5500;">That's the whole test.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><strong>Update, August 30:</strong> we kept the promise, and the first thing our own books caught was a $99,000 hole in QuickBooks' July. <a href="/blog/moving-our-own-books" style="color: #FF5500;">The full report is here.</a></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><em style="opacity:0.6; font-size: 14px;">The story is real and the client stays anonymous. Every screen shown of this engine runs demo data, every name and dollar on it invented. No client information, ever.</em></p>
`,
    },

    {
        slug: 'government-bid-finder-tree-service',
        title: 'The Big Contractors Had a Bid Department. We Built Tyler One.',
        seoTitle: 'Tree Service Government Bid Finder | Walls Case Study',
        seoDescription: 'How Walls Tree Service\u2019s owned software finds public jobs, compares 78,019 bid-tab lines, identifies prime contractors, and drafts source-backed sub-quotes.',
        date: '2026-08-27',
        excerpt: 'The work was public. The advantage belonged to companies that could afford someone to see it. So we built Walls Tree Service its own bid department \u2014 and a road job landed on Tyler\u2019s board before his coffee got cold.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/walls-scout-og-v1.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Alexandria, Louisiana.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">There's a road in Caldwell Parish called LA 557.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The state advertised the job at <span style="color: #FF5500;">$2.5 to $5 million.</span></p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Buried in the package is a line Tyler Walls knows how to do:</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Clearing and grubbing.</span></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The advertisement reads: clearing and grubbing, grading, drainage structures, base course, pavement patching, milling, asphalt overlay, and related work. One of those is tree work. The rest is why nobody with a chainsaw ever reads it.</p>

<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">SEPT 9</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">the day bids open \u2014 it sat in a public filing system for weeks, written for lawyers, read by nobody with a chainsaw</div></div>

<p style="font-family: monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; opacity: 0.6; border: 1px solid #333; border-radius: 8px; padding: 0.6em 0.9em; margin: 0 0 1.6em;">LA 557 \u00b7 SCOUT sweep Aug 15, 2026 \u00b7 Letting Sept 9, 2026 \u00b7 <a href="https://wwwapps.dotd.la.gov/engineering/lettings/" target="_blank" rel="noopener" style="color: #FF5500;">Source: Louisiana DOTD</a></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The project was not a secret. The date was public. The scope was public. The documents were public. That's the strange part.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Tyler had a tree company to run.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">His Tuesday already had crews, customers, equipment, and whatever the weather dropped in somebody's yard. He did not start a tree company out of a lifelong interest in procurement portals.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Big contractors pay whole departments to watch lettings, read bid packages, and track pricing before the first machine reaches the road.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">They don't always win because they're better with a saw.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Sometimes they win because they can afford more people to know the work exists.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">So we built Tyler the department.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">We call it SCOUT.</span></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Calling it a bid finder makes it sound ordinary \u2014 bid-finding platforms already exist. SCOUT was built to do something narrower and more useful: <strong>understand Walls Tree Service well enough to throw away everything that doesn't fit.</strong> It knows the work Tyler does, the territory he serves, and the project sizes worth his time. Every day it reads the filing cabinets, rejects the noise, scores what's left, and shows its reasons.</p>

<p style="margin: 1em 0 1.6em;"><img src="/images/blog/walls-scout-board-v1.png" alt="The Board: open public bids matched to clearing work, scored and priced \u2014 every figure traced to a public record" style="border-radius: 12px; border: 1px solid #333;" /></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">LA 557 landed with the scope, the parish, the letting date, the estimated range, a match score, and links back to the source. Not \u201chere is a project\u201d \u2014 <span style="color: #FF5500;">here is why this one belongs on your desk.</span> It was on his board before his coffee got cold.</p>

<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">$50.5M&ndash;$81M</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">combined advertised value of the nine matched projects on his board the week I wrote this \u2014 not nine contracts won, and not money promised to Walls</div></div>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">That distinction is not fine print. Nine public construction projects containing work his company may be fit to perform \u2014 pipeline, not revenue. <strong>The difference between the two is the difference between intelligence and hype.</strong></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Finding the work is half the job.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">A job you never see earns nothing. A job you price badly can earn less.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">When Louisiana opens road bids, it publishes how every bidder priced every line item. Not what the work secretly cost anybody \u2014 <strong>what each contractor offered to charge.</strong> The market's own paper trail. Public. Going back years. Read by no one.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Tyler's machine has read <span style="color: #FF5500;">78,019 of those lines.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">756 projects. 24 months. Every figure linked to the bid tab it came from.</p>

<p style="margin: 1em 0 1.6em;"><img src="/images/blog/walls-scout-context-v1.png" alt="What clearing sold for: winning unit prices off real bid tabs \u2014 every figure linked to the public record it came from" style="border-radius: 12px; border: 1px solid #333;" /></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">For clearing work it pulls the comparable projects, isolates the winning unit prices, and shows the range and the median \u2014 the source printed under every number. And when the record is too thin, the box stays blank.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">A blank box is cheaper than a confident lie.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">One tap makes a first draft.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Not a final bid.</span></p>

<p style="margin: 1em 0 1.6em;"><img src="/images/blog/walls-scout-quote-v1.png" alt="The sub-quote: the letting's clearing lines priced from winning bids, sources printed with the paper" style="border-radius: 12px; border: 1px solid #333;" /></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">A Walls-branded sub-quote, its suggested price informed by comparable winning bids, the records behind it printed with the paper. Then Tyler does the part the software must not pretend to do: he reads the plans, walks the scope, prices access, equipment, crew time, and risk \u2014 and decides what number he's willing to put his name behind.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">The software handles the memory.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Tyler handles the judgment.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Then it tells him who buys the work.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Walls Tree Service doesn't need to become the company paving the highway. It needs to be the clearing subcontractor the winning prime knows to call. SCOUT tracks <strong>71 prime contractors</strong> who won jobs with clearing inside \u2014 <strong>277 wins in the last 24 months, $22.6 million of clearing-item value on their winning tabs</strong> \u2014 phone numbers exactly as published on the bid results.</p>

<p style="margin: 1em 0 1.6em;"><img src="/images/blog/walls-scout-primes-v1.png" alt="Primes to call: contractors who won jobs with clearing inside, phone numbers exactly as published on the bid results" style="border-radius: 12px; border: 1px solid #333;" /></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">\u201cThere may be government work somewhere\u201d just became: here's the project, here's what comparable work sold for, here's who buys it, here's the number. <span style="color: #FF5500;">Tap it and it's ringing.</span> At that point it isn't a PDF anymore. It's a person Tyler can talk to.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">I put it in front of Tyler at lunch.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Here's the part I couldn't have scripted. One of the bids on the board was a contract Tyler had already located himself \u2014 the hard way, on his own time, digging through the filings. The machine walked into lunch carrying the same job. He could check it against his own legwork, and it checked out.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">He signed at the same table.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Most software demos explain what a system might do later. This one had already done it \u2014 matched a job he knew was real, assembled the pricing history, and put the buyers' phone numbers on the screen before Tyler had bought anything. He wasn't buying another dashboard. He was giving his company a department it had never been big enough to hire.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">One rule: <span style="color: #FF5500;">SCOUT is not allowed to bid.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">It can find, filter, compare, and draft. It cannot submit a bid, agree to a scope, pick Tyler's final price, sign his name, or pretend a public database has walked the jobsite. The handshake stays his. <strong>Custom software is knowing what to refuse.</strong></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">It lives inside the same black-and-orange system where his receptionist answers the phone and his invoices follow up. Built around Walls Tree Service. Walls owns the code, the data, and the operating rules.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Nobody rents you your own business back.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">This isn't a story about tree software.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Every small business has a department it needs but can't quite justify hiring. Filings nobody reads. Quotes nobody follows up. Invoices nobody catches. Calls nobody answers after hours. Numbers nobody reconciles until something goes wrong.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Big companies solve it with headcount.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Small companies solve it with the owner staying late.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">That gap used to be normal. It's becoming optional. Somewhere, a public computer is publishing work your company would want. The work isn't hidden \u2014 nobody at your company has been assigned to see it. Now that job can belong to software. The decision still belongs to you.</p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">What department is your business missing?</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Show us the repetitive work, the buried information, the missed opportunity nobody at your company has time to own.</p>
<p style="margin: 1.2em 0 2em;"><a href="/map" style="display: inline-block; background: #FF5500; color: #000; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; padding: 0.9em 1.6em; border-radius: 999px; text-decoration: none;">Show Us the Bottleneck &rarr;</a></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><em style="opacity:0.6; font-size: 14px;">Every screen above is Walls Tree Service's real system reading source-linked public records \u2014 government bid data anyone can look up. The project ranges shown are total advertised construction values, not projected Walls Tree Service revenue. No customer information, ever.</em></p>
`,
    },
    {
        slug: 'bail-bonds-management-software',
        title: 'She\'s Never Gonna Touch That Pen, Ever Again.',
        date: '2026-08-25',
        excerpt: 'There\'s a pen on the front desk at DJ\'s Bail Bonds. It filled out every application in the parish for years. Last week DJ fired it.',
        author: 'Trevor Ruby',
        authorImage: '/team-member-1.jpeg',
        image: '/images/blog/djs-og-hook-v1.png',
        hideHero: true,
        content: `
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Alexandria, Louisiana.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">This is the story of how a bail bonds office in my town got rid of handwritten paperwork.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">There's a pen on the front desk at <span style="color: #FF5500;">DJ's Bail Bonds.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">For years, that pen filled out every application that came through the door. The woman who runs the front desk writes them all by hand, every working day: a defendant file, a co-signer file, three references for each, and the payment sheets. The same names, copied off one paper onto another paper, for years.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">So we built DJ a system where the application fills itself out. When he saw where it was headed, he said it out loud, in front of everybody:</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">“She's never gonna have to use that pen, ever again.”</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Here's what her Monday morning looks like now.</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/djs-blog-today-v1.png" alt="The morning screen: money due, applications filling themselves in, Wednesday check-ins, court dates (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">One screen, sorted before she sits down. It shows who owes money, who's behind, who checked in this week, and who has court. It also shows the applications that are out on people's phones right now, <span style="color: #FF5500;">filling themselves in while she drinks her coffee.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Bail work happens at midnight, and now the paperwork <span style="color: #FF5500;">does too.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Here's why that matters. People don't get arrested during office hours. In the old world, the family had to wait until morning, come sit at the desk, and fill out forms. In the new one, the office texts them a link the moment the call comes in, and they fill it out wherever they are. Here's the kind of moment it was built for:</p>
<div style="margin: 2em 0; padding: 1em 1.2em; border: 1px solid #333; border-radius: 16px;"><div style="font-size: clamp(44px, 8vw, 76px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: #FF5500;">11:52 PM</div><div style="font-size: clamp(15px, 2vw, 18px); opacity: 0.8; margin-top: 0.4em;">a bail application paused at question six, hours after the office closed for the night (demo data)</div></div>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The defendant, or a co-signing grandmother in another state, opens that link on their own phone. The form <span style="color: #FF5500;">saves every answer as they type.</span> If he falls asleep on question six, the same link opens on question six in the morning. At the end, they sign with their thumb.</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/djs-blog-apply-v1.png" alt="The phone application welcome: saves as you type, thumb signature at the end (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">One more thing about that screen. The phone form <strong>never</strong> asks the bond amount or the charges. That conversation happens at the office, <span style="color: #FF5500;">human to human.</span> The phone only gathers what the file needs. Custom software knows the difference.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Next, payment plans. Here's how DJ builds one now.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Say a man owes $3,000 on a bond fee and can't pay it all at once. That's normal in this business, and it's why payment plans exist. In the old world, somebody sat down, worked out the dates by hand, and wrote them on a sheet. Now DJ just says what he wants:</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">“$3,000 balance. $500 every two weeks. Populate the dates.”</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">By the time he finished the sentence, the whole schedule was on the screen. Every date and every amount, ready to print.</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/djs-blog-plans-v1.png" alt="The plan composer: type a balance and a payment, the dates populate themselves, no interest, ever (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><strong>No interest. Ever.</strong> DJ doesn't charge it, so we didn't build a place for it. There isn't even a column for interest anywhere in the system, and you can't charge what the software can't hold.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">While we were building, we found a problem in the old paper form. This part should <span style="color: #FF5500;">bother you a little.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The old printed payment form had room for six payments. Six lines, and then the page ran out. But plenty of plans run longer than six. Take that same $3,000 balance and make it $250 every two weeks instead of $500, and now the plan is twelve payments. So where did payments seven through twelve go? Nowhere. They were real, and the customer owed every one of them. They just never showed up on the paper he signed, because the form only had six lines to print on.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">People were signing up for payments <span style="color: #FF5500;">they could not see.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Nobody did it on purpose, and it wasn't a scam. It was a form nobody ever fixed, sitting in a copier tray for years. In DJ's new system, the agreement prints every payment on the plan. All twelve, every time. That rule is written into the code, so no human can forget it and <span style="color: #FF5500;">no form can hide it.</span></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Then we gave him a bill collector <span style="color: #FF5500;">that never sleeps.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Chasing late payments is the worst job at any front desk. Somebody has to make the awkward call, and somebody has to remember to make it. So the system handles it by text. The day before a payment is due, it sends a friendly heads-up with the pay link. The day of, it sends the link again. If the payment goes missing, it follows up at two days late, at five days late, and every week after that. It's polite every single time, and the second the money lands, <span style="color: #FF5500;">it goes quiet on its own.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">It doesn't get tired, it doesn't get rude, and it doesn't take Sundays off. The front desk never makes another awkward collection call.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">Court still wants paper, and that's fine. <span style="color: #FF5500;">The paper just got better.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">A bail office can't go paperless, and we never tried to make it. The same agreements, the same packets, the same acknowledgments the office hands to the court today still print. The difference is the system fills them straight from the file, on letterhead, with the thumb signature and the audit stamp right on the page. Nobody types a word of it.</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/djs-blog-agreement-v1.png" alt="The payment plan agreement on letterhead, every installment printed, e-signature and audit trail on the page (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Same paper the court has always seen. It just shows up dressed better than it ever did off the copier.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">In this building, everybody gets a trial, <span style="color: #FF5500;">even the software.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Here's what that means. We ripped nothing out on day one. The software the office already pays for keeps running, and the new system runs beside it. Every night, the totals from both get laid side by side, and they either match to the penny or somebody hears about it. Night after night, until the new one has proven itself.</p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/djs-blog-beside-v1.png" alt="The run-beside page: nightly totals from the old system logged next to the new one, matched to the penny (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The verdict doesn't come from me, and it doesn't come from a salesman. When the numbers have matched long enough to trust, <strong>DJ flips the switch himself.</strong></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">And one feature in the build is <span style="color: #FF5500;">a ban.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Everybody in America is selling robot phone receptionists this year. DJ's system is <strong>forbidden from ever answering his phone</strong>, and the ban is printed on its front screen where the whole office can read it. Here's why. Calls from the jail come collect. A human has to pick up, hear the operator, and accept the charges. If a robot answers, the collect call dies, and <span style="color: #FF5500;">that call was the whole business.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">We stood in that office — that's why the ban exists. The phone stays human, day and night, forever. <strong>Half of this job is knowing what to build. The other half is knowing what to refuse.</strong></p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">One more thing, and it's the part the big software companies <span style="color: #FF5500;">can't say out loud.</span></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The software DJ rents today keeps his data. Every client, every payment, every file sits on their computers, and he pays every month to look at his own records. His new system is different. The code is his. The data is his. <span style="color: #FF5500;">His name is on the title, the same way it's on the building.</span> If he ever tells me to leave, he keeps all of it.</p>
<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;"><span style="color: #FF5500;">Nobody rents you your own business back.</span></p>

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><em style="opacity:0.6; font-size: 14px;">Every screen above is the real system running demo data. Every name and dollar on it is invented. No client information, ever.</em></p>
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

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><em style="opacity:0.6; font-size: 14px;">Every screen shows Kenneth’s real system running demo data — the names and cases on it are invented. No client information, ever.</em></p>
`,
    },
    {
        slug: 'nursery-management-software',
        title: 'Her Books Were Lying to Her by Eight Figures. So I Rebuilt Them From the Bank.',
        date: '2026-08-25',
        excerpt: 'A truck was loading for Austin and a hand-copied order dropped its last line — 44 plants, a thousand dollars in freight, almost gone. So we built her one system that catches every line. She owns all of it.',
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

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">There's a thing it <span style="color: #FF5500;">refuses to print.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/roxanne-blog-pull-sheet-focus-v1.png" alt="The crew's pull sheet: quantities, plants, sizes and trailer slot in big type — no customer name, no prices (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">The crew's screen shows the PO, the plants, the sizes, the trailer slot — in type you can read across the yard. It won't show the customer's name and it won't show a price. <span style="color: #FF5500;">&ldquo;That's my business, not the crew's,&rdquo;</span> she said. Custom software is knowing what to build. It's also knowing what to leave off the paper lying in the gravel by the dock.</p>

<p style="font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 1.6em 0 0.35em;">It knows what a dead plant <span style="color: #FF5500;">actually costs her.</span></p>
<p style="margin: 1em 0 1.6em;"><img src="/images/blog/roxanne-blog-inventory-focus-v1.png" alt="Living inventory: plants in, still alive, lost, and cost per surviving plant by broker (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">Plants die — in the heat, in a wet week, on the truck. The ones that live carry the cost of the ones that didn't. So it does the math her old software never did: <span style="color: #FF5500;">cost per surviving plant</span>, by plant, by broker. The cheapest sticker price and the cheapest plant are rarely the same broker — and now she can prove which is which <span style="color: #FF5500;">before</span> she buys.</p>

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

<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;">I'm Trevor. Found It Software, Alexandria, Louisiana.</p>
<p style="font-size: clamp(17px, 2.4vw, 21px); line-height: 1.35; opacity: 0.85; margin: 0 0 0.8em;"><em style="opacity:0.6; font-size: 14px;">The screens are real. Every name and dollar on them is invented — her book never leaves her building.</em></p>
`,
    },
    {
        slug: 'why-they-cant-compete',
        title: 'The One Thing They Can’t Sell You',
        date: '2026-08-16',
        excerpt: 'A software company cannot sell you software you own — it would kill them. Why a subscription company cannot sell you software you own, and the slow, expensive habit that proves it.',
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

<h3>The narrow slot</h3>
<p>We live in the gap between them. AI just made genuinely custom software buildable at a price a real business can pay. We used it to build local businesses their own operating systems.</p>
<p>We used it to build local businesses their own operating systems. The code and the data, one hundred percent theirs.</p>

<h3>The slow, expensive habit</h3>
<p>Here's the slowest, most expensive part of how we work: we run the new system <strong>beside</strong> the old one. Penny-matched. Every night. For as long as it takes — until the owner looks at both screens, sees the same number, and says go.</p>
<p>That's slow. That's expensive.</p>
<p>It's the only way we've found to hand somebody the keys without betting their company.</p>
<p><strong>Nobody rents you your own business back.</strong></p>
<p>— Trevor</p>
        `,
    },
    {
        slug: 'rented-software-no-data-rights',
        title: 'The Rent Isn’t the Problem. The Hostage Is.',
        date: '2026-08-16',
        excerpt: 'Rented software holds your customers, your invoices, and your history in a format you don’t own, at a price they set next year. Two questions expose the whole deal.',
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
<p>Custom software used to mean a big upfront project and months of building — so renting was the only sane option. AI changed the economics. We build systems fitted to one business at a time, and the answers to the two questions flip: stop paying, and you keep <strong>everything — the code and the data, one hundred percent.</strong> The monthly fee is maintenance, not rent.</p>
<p>And nothing switches on day one — the new system runs beside your current software, penny-matched against it every night, until the numbers say you can leave and you say go. That's how the biggest roofer in central Louisiana moved onto a system he owns — the same books that surfaced $195,882.75 sitting in open receivables.</p>
<p>Nobody should rent you your own business back.</p>

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
<p><img src="/os-screens/roxanne-os-intake-v2.png" alt="The nursery's order intake — an order pasted exactly as it came in, eight lines in and eight captured, the odd one held in red (demo data)" style="border-radius: 12px; border: 1px solid #333;" /></p>
<p>The system runs <strong>beside</strong> the old software, penny-matched against it every night, and nothing switches until the numbers match and the owner says go. That's how we move a business: without betting it.</p>
<p><strong>The system is yours. The code and the data, one hundred percent.</strong> Nobody rents you your own business back.</p>

<p><a href="/map">Start yours here.</a></p>
        `,
    },
];
