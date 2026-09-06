import type { Metadata } from 'next';

/* ─── /vsl-v3 — the VSL Queen script page (9/6) ───
   A linkable, noindex reference for the presenter: the 11 scripts, the
   unchanging ending, and the launch discipline. This mirrors the working
   doc in the status repo MINUS internal ops (wiring, strategy notes,
   client references) — those never ride a public URL. Change the doc
   first, mirror here. */

export const metadata: Metadata = {
  title: { absolute: 'VSL v3 — Scripts | Found It Software' },
  description: 'Eleven scripts. One ending. Production reference for the current ad batch.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'VSL v3 — the scripts',
    description: 'Eleven scripts. One ending. Nobody rents you your own business back.',
    type: 'website',
    url: 'https://www.founditsoftware.com/vsl-v3',
    images: [{ url: '/vsl-v3-og-v1.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VSL v3 — the scripts',
    description: 'Eleven scripts. One ending.',
    images: ['/vsl-v3-og-v1.png'],
  },
};

const NUMBER = '(318) 713-3781';

const ENDING =
  'You own it. The code and the data, written into your contract. Text us at (318) 713-3781 and tell us what you run. Found It Software, Alexandria. Nobody rents you your own business back.';

type Script = {
  n: number;
  title: string;
  note?: string;
  hook: string;
  body: string[];
  brackets?: string[];
};

const SCRIPTS: Script[] = [
  {
    n: 1,
    title: 'The Employee That Doesn’t Exist — Part Two',
    note: 'sequel to the proven winner',
    hook: 'The best employee you will ever hire does not exist.',
    body: [
      'You’ve imagined her, though. She knows every invoice you’ve ever sent. She remembers which estimates went quiet, which customers haven’t been back in a year, what’s running low before it runs out. She never calls in. She never quits. And you couldn’t afford her — she’d cost more than you make.',
      'So Found It builds her into software instead. Ask it “who owes me money right now?” — you get the list. “Which estimates never got answered?” — the list. She works off YOUR books, not the internet.',
      'And here’s the proof: when you text the number below, she’s the one who answers.',
    ],
  },
  {
    n: 2,
    title: 'Four in the Morning',
    hook: 'There’s a number in your business that only you know.',
    body: [
      'Not the one in the drawer. The other one — who owes you money. You carry it around in your head, and you’re the only one who does. That’s why you’re the one awake at four in the morning, doing math on the ceiling.',
      'Found It builds one program for your whole operation, and that number is the first thing on the screen every morning. Every invoice. Every dollar. Every day it’s been sitting there.',
      'You’ll still wake up at four sometimes. But it’ll be the dog’s fault, not the books’.',
    ],
  },
  {
    n: 3,
    title: 'Ninety-Nine Thousand',
    note: 'the true story, told against ourselves',
    hook: 'Last July, QuickBooks lost ninety-nine thousand dollars that belonged to the man who built this company.',
    body: [
      'His books matched the bank to the penny — he checked. The money wasn’t stolen. It wasn’t misspent. The software just… lost track of it. And here’s the part that should bother you: he only caught it because building software is his whole job. What’s YOUR July look like?',
      'That’s why every system Found It builds starts with one rule: the owner sees the money. First screen. Every morning. Nothing buried.',
    ],
  },
  {
    n: 4,
    title: 'Ask Your Bookkeeper',
    note: 'the dare — checkable in one conversation',
    hook: 'Your bookkeeper doesn’t actually use QuickBooks. Go ask her.',
    body: [
      'Go on — ask her how she really does the books. She’ll tell you: she works off the bank statements. The software you’re paying for every month? It’s not doing the books. It’s holding your records hostage.',
      'Found It builds one program that actually runs the business — invoices, customers, who-owes-you-what, the reports you wait on today. Your bookkeeper keeps her job. The subscription doesn’t.',
    ],
  },
  {
    n: 5,
    title: 'The Woman Who Actually Runs the Place',
    note: 'the Office General ad',
    hook: 'This one’s for the woman who actually runs the place.',
    body: [
      'Everybody thinks the owner runs the business. You know better. You chase the invoices. You retype every ticket into QuickBooks at nine at night. You answer the phone with one hand and do payroll with the other. The software was supposed to help you — instead it gave you a second job.',
      'Here’s Found It’s rule: when we build a system, we build YOUR worst chore first. And when we demo it, we demo it to you — because if you say it stays, it stays.',
      'Show this to him. Or don’t — text the number yourself, and put your chores on the map.',
    ],
  },
  {
    n: 6,
    title: 'Renewal Day',
    note: 'buying the customer a year early',
    hook: 'Some morning next year, your software is going to raise its price again.',
    body: [
      'You’ll open the email. You’ll say a word your grandkids shouldn’t hear. And then you’ll pay it — because switching sounds worse than the bill.',
      'We just want you to remember this ad on that particular morning. There’s a company in Alexandria that builds the whole thing fitted to you — one program, your whole operation — and when it’s done, it’s YOURS. No renewal email. Ever again.',
      'No rush. We’ll be here.',
    ],
  },
  {
    n: 7,
    title: 'The Day You Sell',
    note: 'succession — nobody else talks to this',
    hook: 'The day you sell your business — or hand it to your kids — what exactly are you handing over?',
    body: [
      'The trucks, sure. The building. The name on the sign. Now, the software running the whole thing — thirty years of customers, every job you ever did? Not yours. That’s a subscription, and it dies with the login.',
      'Found It builds software that’s an ASSET. The code and the data belong to the business — so when the business changes hands, it goes with it. Like the trucks. Like the name.',
      'You didn’t build all this to rent the middle of it.',
    ],
  },
  {
    n: 8,
    title: 'Nine O’Clock at Night',
    hook: 'It’s nine at night and a customer just texted: “is my truck ready?”',
    body: [
      'Right now, that text is your problem. It buzzes on YOUR nightstand, because you’re the only one who knows the answer.',
      'On a Found It system, the system answers him — correctly, in seconds, from your own schedule and your own tickets — while you’re at the ballgame. Next morning you see the whole conversation, and the invoice it turned into.',
      'You didn’t miss anything. That’s the whole point.',
    ],
  },
  {
    n: 9,
    title: 'Penny-Matched',
    note: 'kills the switching fear by describing the mechanism',
    hook: 'You know why you’re still running software you hate? Because switching sounds like surgery.',
    body: [
      'So here’s how Found It actually does it. Your new system runs BESIDE the old one. Both of them, every day. And every night, we match them — to the penny. Nothing switches until the numbers have agreed for as long as you want. Some owners run both for a month, just to watch.',
      'Then one day you say “go,” and the old one just… stops mattering. Switching day is boring. We work very hard to make it boring.',
    ],
  },
  {
    n: 10,
    title: 'Type This In',
    note: 'the demo-in-an-ad — she performs it on screen',
    hook: 'Open the software you’re paying for right now, and type this: who owes me money?',
    body: [
      '(beat) Nothing, right? A search bar that finds invoices by number. That’s what your monthly bill buys.',
      'Watch ours. (she types it) “Who owes me money right now?” — the list, with days aging. “Which estimates never got answered?” — the list. “Who hasn’t been back in a year?” — the list. Plain English in, straight answers out, from your own books — not the internet.',
      'Your software has your answers. It’s just never once been asked to hand them over.',
    ],
  },
  {
    n: 11,
    title: 'The Dare',
    note: 'added 9/6 — every other ad promises; this one challenges',
    hook: 'Name the problem you think software can’t fix.',
    body: [
      'Go ahead. The worst one. The one that burns you every single week — the one you’ve just learned to live with.',
      'Here’s what happens next, and it costs you nothing. We dig into it. Then we build the fix — not a slideshow, not a proposal. The working thing, with your name on the door. And we put it in your hands so you can try to break it yourself.',
      'One owner’s bookkeeper fought wrong serial numbers at the receiving door for years. Now the software refuses a bad one — and names where the duplicate already lives.',
      'Text us your problem at the number below. Worst one first.',
    ],
    brackets: [
      'HELD receipt (do not shoot until cleared): “One owner told us about a five-figure check problem at four in the afternoon. By dark, his software had a button that stops it — and he watched it tell him no on his own phone.”',
      'Optional scarcity line (only if we commit to the cap): “We take three dares a week.”',
    ],
  },
];

const DISCIPLINE: string[] = [
  'Run 1, 3, 5 for 13 weeks. Identical endings. The others are the next three quarters. No rotation resets.',
  'Zero guarantee language. Ever.',
  '“Code and data” only — never “AI 100%”.',
  'Only number in any ad: the $99k own-books story. No client names or client numbers.',
  'Ad 8 is present-tense capability, not a fabricated anecdote.',
  'Ad 11: shoot the serial-number receipt; the held receipt and the scarcity line stay out until cleared.',
];

export default function VslV3() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5500]">
        Production reference · not a public page
      </p>
      <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight">
        VSL v3 — the scripts
      </h1>
      <p className="mt-4 text-neutral-400">
        Eleven scripts, ~50–60 seconds each, one presenter. The only number that ever
        appears in creative is <strong className="text-neutral-200">{NUMBER}</strong> — baked in
        forever, never a personal cell. Every ad ends with the same ten seconds, word for word.
      </p>

      <section className="mt-10 rounded-xl border border-[#FF5500]/40 bg-[#FF5500]/5 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5500]">
          The shared ending — never varies
        </p>
        <p className="mt-3 text-lg font-medium leading-relaxed">{ENDING}</p>
      </section>

      <div className="mt-12 space-y-12">
        {SCRIPTS.map((s) => (
          <article key={s.n} className="border-t border-neutral-800 pt-8">
            <h2 className="font-display text-2xl font-bold">
              <span className="mr-2 text-[#FF5500]">{s.n}.</span>
              {s.title}
            </h2>
            {s.note && <p className="mt-1 text-sm italic text-neutral-500">{s.note}</p>}
            <p className="mt-4 text-lg font-bold">“{s.hook}”</p>
            {s.body.map((p, i) => (
              <p key={i} className="mt-3 leading-relaxed text-neutral-300">
                {p}
              </p>
            ))}
            {s.brackets?.map((b, i) => (
              <p
                key={`b${i}`}
                className="mt-3 rounded-lg border border-dashed border-neutral-700 px-4 py-3 text-sm text-neutral-500"
              >
                {b}
              </p>
            ))}
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
              [ ending — verbatim ]
            </p>
          </article>
        ))}
      </div>

      <section className="mt-14 border-t border-neutral-800 pt-8">
        <h2 className="font-display text-2xl font-bold">Launch discipline</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
          {DISCIPLINE.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
