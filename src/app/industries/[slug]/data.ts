/* â”€â”€â”€ Industry Data â”€â”€â”€
   OS-software-first copy (rewritten 2026-08: solves problems, saves time,
   kills rented-software cost, streamlines workflow, own the code and data).
   Marketing appears once per page, via the renderer's "Other 10%" band. */
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
  /** Optional: real captures of the industry's system, rendered as an
   *  "on screen" section. Sanctioned shots only (src/lib/os-screens.ts laws). */
  screens?: { src: string; alt: string; caption: string }[];
  /** Footnote under the screens section (demo-data / stand-in-masthead honesty). */
  screensNote?: string;
}

export const industries: Record<string, IndustryData> = {
  medical: {
    name: "Medical / Healthcare",
    slug: "medical",
    metaDescription:
      "Custom software for medical and dental practices: scheduling, intake, recalls, and billing follow-up in one system you own outright, code and data. It runs beside your current setup until you say go. Built by Found It Software.",
    headline: "Your Practice Runs on Rented Software. Time to Own It.",
    subline:
      "Scheduling, intake, recalls, billing follow-up, one system fitted to your practice, and you own it outright. Code and data. The chart stays in your EHR; we build around it, never inside it.",
    heroStat: { value: "100%", label: "Yours: Code & Data" },
    definitionHeading: "What Is a Practice Operating System?",
    definition:
      "A practice operating system is one piece of custom software that runs the business side of a medical or dental practice: scheduling, intake, recalls, billing follow-up, and the patient book treated like a customer book. It is not an EHR and it never touches the chart: clinical records, e-prescribing, and your compliance systems stay exactly where they are, and we build the operations layer around them. It replaces the pile of rented subscriptions around your front desk with one system you own outright: the code and the data, living in your system, not a vendor's cloud. Found It Software fits it to how your practice actually runs, and it goes live beside your old setup, nothing switches until you say go.",
    painPoints: [
      {
        title: "A subscription for every job",
        description: "A scheduler, a reminder service, an intake-form tool, a billing follow-up add-on. Each one a monthly bill. Each one holds a piece of your practice. None of them talk to each other.",
      },
      {
        title: "Your patient list lives in a vendor's cloud",
        description: "The book you spent years building sits behind someone else's login, under someone else's terms of service. That's not your data working for you, that's your data rented back to you.",
      },
      {
        title: "The front desk runs on memory",
        description: "Recalls slip. No-shows never hear from you again. Overdue balances get chased when someone finds time. That's hours a week and real money leaking through sticky notes.",
      },
    ],
    solutions: [
      {
        title: "One system for the business side",
        description: "Scheduling, intake, recalls, billing follow-up, one screen, fitted to how your front desk actually works. Built in weeks, not months. The stack of subscriptions it replaces goes away, and so do their bills.",
      },
      {
        title: "The patient book, worked like a customer book",
        description: "Recalls go out on time. No-shows get a follow-up. Overdue balances get a polite nudge. Ask the system how last month compared to last year and it answers from your own numbers, the AI reads the books, it can't write them.",
      },
      {
        title: "You own it: code and data",
        description: "Your data lives in your system, not a vendor's cloud. No terms of service quietly claiming your patient list. Leave anytime and it all stays yours. Nobody rents you your own business back.",
      },
      {
        title: "What it will not touch",
        description: "No charting, no clinical records, no e-prescribing. The EHR stays the EHR, and your compliance systems stay exactly where they are, with the people responsible for them. We build the operations layer around those systems: scheduling, intake, recalls, billing follow-up. Around the chart, never inside it. We tell you that before you ask.",
      },
    ],
    faqs: [
      {
        question: "Does this replace our EHR?",
        answer: "No. The chart stays in your EHR and we don't touch clinical records, that's a hard line. The OS runs everything around the chart: scheduling, intake, recalls, billing follow-up, the patient book as a customer book. That's the business side of a practice, and that's where the hours and the subscription bills are.",
      },
      {
        question: "What happens to our data if we leave the software we rent now?",
        answer: "Read your vendor's terms of service, most practices signed away more than they think, and a clean export is the vendor's decision, not yours. That's the rental trap. With a Found It OS you own the code and the data outright, and it lives in your system, not a vendor's cloud. If you ever walk away from us, you keep everything. Nobody rents you your own business back.",
      },
      {
        question: "We book patients all day. What if the new system breaks?",
        answer: "It never gets the chance to hurt you. The new system runs beside your old one, both live, penny-matched nightly, and nothing switches off until you say go. If day one has a bug, your old system is still standing right there.",
      },
      {
        question: "Have you built one for a medical practice before?",
        answer: "Not yet, we won't pretend otherwise. The same system is running today in auto shops, retail stores, and field crews, and the business side of a practice is the same shape: a schedule, a customer book, money to follow up on. A fitting starts with us mapping your front desk's actual week, you add to it or cross things off before we build a thing.",
      },
      {
        question: "What does it cost?",
        answer: "One public price, month-to-month. No long-term contracts and no fine print, cancel anytime with 30 days' notice, and the system, code and data, stays yours.",
      },
    ],
    formSource: "industry_medical",
    ctaText: "Map My Practice",
  },
  realtors: {
    name: "Real Estate",
    slug: "realtors",
    metaDescription:
      "Custom software for real estate: one system you own, the deal pipeline, the client book, follow-up that never sleeps, documents in one place. Replaces the per-agent SaaS stack. The code and the data are yours.",
    headline: "Stop Renting Your Client Book. Own the System That Runs Your Business.",
    subline:
      "A CRM here, e-signatures there, a follow-up tool, a showing scheduler, every agent paying every month, and none of it talks to the rest. We build one system that runs the whole operation. And you own it outright: the code and the data.",
    heroStat: { value: "100%", label: "Yours: Code & Data" },
    definitionHeading: "What Is a Real Estate OS?",
    definition:
      "A real estate OS is one custom application that runs the whole operation: the deal pipeline from contract to close, the client book with every buyer and seller you have ever worked, follow-up that fires on its own, and every document attached to its deal. It replaces the per-agent stack of rented subscriptions, and unlike those, you own it outright, code and data. Found It Software fits it to how your team actually works, the same way our systems run in auto shops, retail stores, and field crews.",
    painPoints: [
      {
        title: "A subscription for every job",
        description: "CRM, e-signature, follow-up tool, showing scheduler, transaction tracker, per agent, per month. The stack costs real money and none of it talks to the rest.",
      },
      {
        title: "Your client book lives in a vendor's cloud",
        description: "Read the terms of service. Your contacts and your deal history sit in their system, on their terms. Leave, and you're hoping the export works.",
      },
      {
        title: "Follow-up dies when you get busy",
        description: "Closings eat the week and leads go cold. Past clients forget your name. The follow-up that builds a career depends on somebody remembering to do it.",
      },
      {
        title: "The file is in five places",
        description: "The contract is in one app, the addendum is in an email, the inspection report is on somebody's phone. Finding one document at closing time is a scavenger hunt.",
      },
    ],
    solutions: [
      {
        title: "One pipeline, contract to close",
        description: "Every deal on one screen, stage, dates, parties, next action. Ask it a plain question about your numbers and get a straight answer. The AI reads the books; it can't write them.",
      },
      {
        title: "A client book you own",
        description: "Every buyer, seller, and past client with full history, in your system, not a vendor's cloud. The code and the data are yours outright, from day one.",
      },
      {
        title: "Follow-up that never sleeps",
        description: "The system works the list while you work the closings, past clients, anniversaries, quiet leads. Nobody falls through, because nobody has to remember.",
      },
      {
        title: "Documents in one place",
        description: "Every contract, disclosure, and addendum attached to its deal. Search it, find it, send it, seconds, not scavenger hunts.",
      },
    ],
    faqs: [
      {
        question: "What happens to my client book if I leave kvCORE or Follow Up Boss?",
        answer: "Whatever their terms of service say, usually a CSV export and good luck. That's the problem with rented software: the relationships you spent a career building live in their cloud. With a system you own, the question disappears. The code and the data are yours from day one. Nobody rents you your own business back.",
      },
      {
        question: "Do we have to switch everything at once?",
        answer: "No. The new system runs beside your current stack, penny-matched nightly, and nothing switches until you say go. You keep working deals the whole time. When you trust it, you pull the plug on the old subscriptions, not before.",
      },
      {
        question: "Does it replace the MLS?",
        answer: "No, and we'll tell you straight what it won't touch. The MLS stays the MLS, and your brokerage's compliance requirements stay theirs. What the system replaces is the rented stack around them: the CRM, the follow-up tool, the document chase, the per-agent subscriptions.",
      },
      {
        question: "Have you built one for a real estate team before?",
        answer: "A fitting starts with your deals, not a template. We sit down, map how your operation actually runs, and build to that. The same core is running in auto shops, retail stores, and field crews. Real estate's version is the pipeline, the client book, follow-up, and documents in one system.",
      },
      {
        question: "What does it cost?",
        answer: "One public price, month-to-month, no long-term contracts. Cancel anytime with 30 days' notice, you keep the code, the data, and a system that keeps running.",
      },
    ],
    formSource: "industry_realtors",
    ctaText: "Map My Real Estate OS",
  },
  lawyers: {
    name: "Lawyers",
    slug: "lawyers",
    metaDescription:
      "Custom software for law firms from Found It Software: intake, matters, documents, and billing hygiene in one system your firm owns outright, code and data. It runs beside your current software until you say go. No per-seat rentals.",
    headline: "One System Runs the Firm. And the Firm Owns It.",
    subline:
      "Intake in one app, matters in another, documents in a third, billing in a fourth, all rented, per seat, none of it built for your firm. We build one custom system that fits how you actually work, and you own it outright. Nobody rents you your own business back.",
    heroStat: { value: "100%", label: "Yours: Code & Data" },
    definitionHeading: "What Is a Law Firm Operating System?",
    definition:
      "A law firm operating system is one custom piece of software that runs the business side of a practice, intake, matters, documents, and billing hygiene, in a single system the firm owns outright: the code and the data. Found It Software builds it by sitting with your people and reverse-engineering how the firm actually works, then fitting software to that, the same discipline behind the systems we have running in auto shops, retail stores, and field crews. An AI sits on top that answers plain questions about the firm's books; it can read, it can't write. And it stays out of trust accounting and court deadlines, that's lawyer work, and we say so up front.",
    painPoints: [
      {
        title: "You pay per lawyer, per month, forever",
        description: "Practice-management platforms charge by the seat, every month, and your matters live on their servers under their terms of service. You're renting access to your own case files.",
      },
      {
        title: "Intake is scattered across sticky notes and inboxes",
        description: "A new client calls. Somebody writes it down, somewhere. Then the same name gets retyped into three different systems. Matters, documents, and billing never see each other.",
      },
      {
        title: "Billing hygiene leaks money quietly",
        description: "Hours get worked and never billed. Invoices go out late. Nobody can answer \"what's unbilled right now\" without an afternoon in spreadsheets. That's real money walking out the door every month.",
      },
    ],
    solutions: [
      {
        title: "One system, fitted to the firm",
        description: "A client calls, intake becomes a matter, the matter holds its documents, the work becomes an invoice. One place, start to finish. We reverse-engineer how your firm actually runs and build to that, not an off-the-rack platform stuffed with features you'll never touch.",
      },
      {
        title: "An AI that reads the firm's books",
        description: "Ask it plain questions: what's unbilled right now, which matters went quiet, how this June compares to last June. It reads and it answers. It cannot write an entry, read-only, by design. The AI can't get in the books.",
      },
      {
        title: "You own it: code and data",
        description: "The software carries your firm's name. The code and the database are yours, backed up nightly to a local drive and the cloud. The subscriptions it replaces get canceled. Nobody else has your data.",
      },
      {
        title: "It runs beside your current software first",
        description: "Nothing switches on day one. The new system runs in parallel with what you use now, matched against it nightly, until you trust it. You pull the plug on the old one when you say go, not before.",
      },
      {
        title: "What it will not touch",
        description: "No trust accounting. No IOLTA. No court-deadline math. Those stay exactly where they are, with the people responsible for them. We tell you that before you ask, because honesty is the whole brand.",
      },
    ],
    faqs: [
      {
        question: "What happens to my data if I ever leave Clio or MyCase?",
        answer: "With rented software, you get whatever their export tool decides to give you, and your matters, contacts, and history live on their servers under their terms of service until then. With a system we build, the question disappears: the code and the database are yours from day one, backed up nightly to a local hard drive and the cloud. There is no landlord to leave.",
      },
      {
        question: "What if the new system breaks? The whole firm runs on this.",
        answer: "Nothing switches until you say go. The new system runs beside your current software, both live at the same time, matched against each other nightly, down to the penny on billing. You work out of the old one for as long as you want while the new one proves itself. When you're confident, you pull the plug. Not a day earlier.",
      },
      {
        question: "Will it handle trust accounting or calculate court deadlines?",
        answer: "No, and we won't pretend otherwise. Trust accounting and IOLTA stay in whatever handles them now, and deadline math stays with your lawyers and your docketing, we're not touching either one. The system runs intake, matters, documents, and billing hygiene. The AI on top answers questions about the firm's books, and it's read-only: it can look, it can never write an entry. We'd rather tell you plainly what it won't do than sell you something it can't.",
      },
      {
        question: "What does it cost, and am I locked into a contract?",
        answer: "One public price, month-to-month. No long-term contracts, clients stay because they love the system, not because they're locked in. Cancel anytime with 30 days' notice and the whole thing stays yours.",
      },
      {
        question: "Do you still do marketing for law firms?",
        answer: "Yes, it's the other 10%. Custom software is 90% of what we do now. And when you want clients on top of the system, the same team runs ads and AI search, that's the other 10% of what we do. But the software comes first, because a firm that runs clean makes every new client worth more.",
      },
    ],
    formSource: "industry_lawyers",
    ctaText: "Map My Firm's System",
    screens: [
      {
        src: "/os-screens/lawyer-os-prescription-v1.png",
        alt: "Prescription Watch, every open file's prescription date on one screen, entered by hand, red when ignored (demo data)",
        caption: "Prescription Watch. Every date entered by a hand, up every morning, red after two days ignored. It will not compute a deadline.",
      },
      {
        src: "/os-screens/lawyer-os-today-v1.png",
        alt: "The morning desk, overnight calls taken, escalated dates first, unpaid fees in one number (demo data)",
        caption: "The morning desk. Three calls taken overnight, two dates waiting on your eyes, unpaid fees in one number.",
      },
      {
        src: "/os-screens/lawyer-os-money-v1.png",
        alt: "The money spine, medicals by provider, the lien register, settlement math shown and never touched (demo data)",
        caption: "The money spine. Medicals, liens, and settlement math to the penny. It never touches the money.",
      },
      {
        src: "/os-screens/lawyer-os-demand-v1.png",
        alt: "The letter desk, a demand letter drafted from the file's own medicals and liens (demo data)",
        caption: "The demand letter drafts itself from the file and stays a DRAFT until the lawyer says send.",
      },
    ],
    screensNote:
      "A live demo build for a solo Louisiana practice. Demo data. The firm name on the screens is a stand-in.",
  },
};
