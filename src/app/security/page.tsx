import type { Metadata } from 'next';
import Link from 'next/link';

/* SECURITY, CONTINUITY & SUPPORT (8/29 review item 12): the questions an
   intelligent buyer asks WHILE they're a customer — hosting, backups,
   permissions, AI boundaries, outages, handover. Reference-document
   register like /owned-software: specific, truthful, no security theater.
   RULE: nothing on this page may overstate. Every claim is current
   practice; anything aspirational stays off the page until it's real. */

export const metadata: Metadata = {
  title: 'Security, Continuity & Support',
  description:
    'Where Found It OS systems run, how they are backed up, who can touch what, what the AI is allowed to do, and what happens when something breaks. Specific answers, no security theater.',
  alternates: { canonical: '/security' },
};

const sections: { q: string; a: string }[] = [
  {
    q: 'Where does my system run?',
    a: 'On enterprise cloud infrastructure (Vercel for the application, managed Postgres for the data), in the United States. Every client runs in their own isolated environment with their own database. Your records never share a database with another business, and nothing about your business is shown to anyone else, ever.',
  },
  {
    q: 'How is my data backed up?',
    a: 'Automatic backups run continuously at the database layer, with point-in-time recovery. And every migration we do is itself a proof of the restore path: we rebuild your records from source exports and match them against the originals — in the money systems, to the penny — before anything goes live.',
  },
  {
    q: 'Is my data encrypted?',
    a: 'Yes — in transit (TLS on every connection) and at rest at the database and storage layer.',
  },
  {
    q: 'Who in my business can see what?',
    a: 'Every person gets their own named login, and roles wall off what each role has no business seeing — a yard crew login can print pull sheets but cannot open the money screens, by design. You can revoke any person’s access with one tap, and the walls are enforced on the server, not just hidden in the menu.',
  },
  {
    q: 'Is there an audit trail?',
    a: 'The money records are append-only: once an entry is written, no one can edit it — not you, not an employee, not us, not the AI. Corrections are visible, dated reversals. The mistake shows and the fix shows. That is the same discipline your bank uses, and it is enforced by the database itself.',
  },
  {
    q: 'What is the AI allowed to do?',
    a: 'The AI reads your records to answer you and to file and draft. It cannot rewrite history, it cannot spend money, and its outbound messages wait for a human tap where the business calls for it. Queries are processed through enterprise AI APIs that do not train on your data. Where an AI answering would hurt the business — a bail office’s collect calls from the jail — it is banned from the phone entirely, and the ban is printed on the screen.',
  },
  {
    q: 'What happens when something breaks?',
    a: 'You text or call, and a human who knows your system answers — the builder stays involved after launch. Real breaks jump every line and get fixed when they happen, not on a ticket queue’s schedule. No phone trees, no offshore tier one, no “your call is important to us.”',
  },
  {
    q: 'What happens if Found It disappears?',
    a: 'Your system keeps running — it is yours, on your accounts, and it does not phone home for permission. The Owned Software Standard defines the full handover you hold: the runnable source repository, the database and backups, the hosting transfer, the credentials and documentation, and the legal right for any developer to maintain it.',
  },
  {
    q: 'Who owns the accounts my system depends on?',
    a: 'You do, or you hold a documented transfer of them. Your payment processing runs on your own account — the money settles to your bank, not through ours. Third-party services that bill on their own (phone lines, card processing, AI usage) are listed for you in plain terms, per the Owned Software Standard.',
  },
  {
    q: 'What do you refuse to build?',
    a: 'Payroll and tax filing, permanently — that work belongs to a licensed person who signs their name to it. And any automation that would hurt the specific business it serves. Half of custom software is knowing what to refuse.',
  },
];

export default function SecurityPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[850px] mx-auto px-6 relative z-10">
        <div className="mb-12">
          <p className="text-primary font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] mb-5">
            Security &middot; Continuity &middot; Support
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase italic tracking-tighter leading-[0.88] text-white mb-6">
            The Boring Answers,<br />On Purpose.
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-medium max-w-2xl leading-relaxed">
            You&rsquo;re trusting a system with the machinery of your business, so here are the
            questions that deserve specific answers &mdash; not badges and buzzwords. Everything
            below is current practice. If a question here isn&rsquo;t answered, ask it:{' '}
            <a href="sms:+13187133781" className="text-primary font-bold hover:underline whitespace-nowrap">
              (318) 713-3781
            </a>
            . Trevor answers.
          </p>
        </div>

        <div className="space-y-6 mb-14">
          {sections.map((s) => (
            <div key={s.q} className="border-b border-border/15 pb-6">
              <h2 className="text-lg font-black tracking-tight text-foreground mb-2">{s.q}</h2>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">{s.a}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: 'The Owned Software Standard', sub: 'The full handover, defined', href: '/owned-software' },
            { title: 'Pricing', sub: 'What the monthly covers, in writing', href: '/pricing' },
            { title: 'Are We a Fit?', sub: '60 seconds', href: '/fit' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group bg-card/10 border border-border/15 rounded-2xl px-6 py-5 hover:border-primary/30 transition-colors"
            >
              <p className="text-sm font-black text-foreground group-hover:text-primary transition-colors">{l.title}</p>
              <p className="text-xs text-muted-foreground font-medium mt-1">{l.sub}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
