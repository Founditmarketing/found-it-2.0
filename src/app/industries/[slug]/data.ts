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
      "Custom software for medical and dental practices. Scheduling, intake, recalls, and billing in one system you own. Code and data. By Found It Software.",
    headline: "Your Practice Runs on Rented Software. Time to Own It.",
    subline:
      "Scheduling, intake, recalls, and billing follow-up in one system you own. Code and data. The chart stays in your EHR. We build around it, never inside it.",
    heroStat: { value: "100%", label: "Yours: Code & Data" },
    definitionHeading: "What Is a Practice Operating System?",
    definition:
      "A practice operating system is one piece of custom software that runs the business side of a medical or dental practice. Scheduling, intake, recalls, and billing follow-up in one place. It is not an EHR, and it never touches the chart. Clinical records, e-prescribing, and compliance stay exactly where they are. It replaces the pile of rented subscriptions with one system you own. The code and the data live with you, not in a vendor's cloud. Found It Software fits it to how your practice runs, and it goes live beside your old setup. Nothing switches until you say go.",
    painPoints: [
      {
        title: "A subscription for every job",
        description: "A scheduler, a reminder tool, an intake form, a billing add-on. Each one is a monthly bill. None of them talk to each other.",
      },
      {
        title: "Your patient list lives in a vendor's cloud",
        description: "The patient book you spent years building sits behind someone else's login and terms. That is your data, rented back to you.",
      },
      {
        title: "The front desk runs on memory",
        description: "Recalls slip. No-shows never hear from you again. Overdue balances wait until someone finds time. That is real money lost to sticky notes.",
      },
    ],
    solutions: [
      {
        title: "One system for the business side",
        description: "Scheduling, intake, recalls, and billing follow-up on one screen, fitted to your front desk. Built in weeks, not months. The old subscriptions and their bills go away.",
      },
      {
        title: "The patient book, worked like a customer book",
        description: "Recalls go out on time. No-shows get a follow-up. Overdue balances get a polite nudge. Ask it about last month and it answers from your own numbers. The AI reads the books. It can't write them.",
      },
      {
        title: "You own it: code and data",
        description: "Your data lives with you, not in a vendor's cloud. Leave anytime and it all stays yours. Nobody rents you your own business back.",
      },
      {
        title: "What it will not touch",
        description: "No charting, no clinical records, no e-prescribing. The EHR stays the EHR. Compliance stays with the people responsible for it. We build around the chart, never inside it. We tell you that before you ask.",
      },
    ],
    faqs: [
      {
        question: "Does this replace our EHR?",
        answer: "No. The chart stays in your EHR. We never touch clinical records. The OS runs the business side: scheduling, intake, recalls, and billing follow-up.",
      },
      {
        question: "What happens to our data if we leave the software we rent now?",
        answer: "With rented software, a clean export is the vendor's call, not yours. With a Found It OS you own the code and the data. If you ever walk away from us, you keep everything. Nobody rents you your own business back.",
      },
      {
        question: "We book patients all day. What if the new system breaks?",
        answer: "The new system runs beside your old one, penny-matched nightly. Nothing switches until you say go. If day one has a bug, your old system is still right there.",
      },
      {
        question: "Have you built one for a medical practice before?",
        answer: "Not yet, and we won't pretend otherwise. The same system runs today in auto shops, retail stores, and field crews. The business side of a practice is the same shape: a schedule, a customer book, money to follow up on.",
      },
      {
        question: "What does it cost?",
        answer: "One public price, month-to-month. No long-term contracts. Cancel anytime with 30 days' notice. The system, code and data, stays yours.",
      },
    ],
    formSource: "industry_medical",
    ctaText: "Let's Talk",
  },
  realtors: {
    name: "Real Estate",
    slug: "realtors",
    metaDescription:
      "Custom software for real estate. One system you own: deals, client book, follow-up, documents. No per-agent rentals. The code and the data are yours.",
    headline: "Stop Renting Your Client Book. Own the System That Runs Your Business.",
    subline:
      "A CRM, e-signatures, a follow-up tool, a showing scheduler. Every agent pays every month, and none of it talks. We build one system that runs it all, and you own it. Code and data.",
    heroStat: { value: "100%", label: "Yours: Code & Data" },
    definitionHeading: "What Is a Real Estate OS?",
    definition:
      "A real estate OS is one custom application that runs the whole operation. Deals from contract to close. The client book with every buyer and seller you have worked. Follow-up that fires on its own. Every document attached to its deal. It replaces the per-agent stack of rented subscriptions, and you own it: code and data. Found It Software fits it to how your team works.",
    painPoints: [
      {
        title: "A subscription for every job",
        description: "CRM, e-signature, follow-up, scheduler, tracker. Per agent, per month. It costs real money and none of it talks.",
      },
      {
        title: "Your client book lives in a vendor's cloud",
        description: "Your contacts and deal history sit in their system, on their terms. Leave, and you hope the export works.",
      },
      {
        title: "Follow-up dies when you get busy",
        description: "Closings eat the week. Leads go cold. Past clients forget your name. Follow-up depends on somebody remembering.",
      },
      {
        title: "The file is in five places",
        description: "The contract is in one app. The addendum is in an email. The inspection report is on a phone. Closing time is a scavenger hunt.",
      },
    ],
    solutions: [
      {
        title: "One pipeline, contract to close",
        description: "Every deal on one screen: stage, dates, parties, next step. Ask a plain question and get a straight answer. The AI reads the books. It can't write them.",
      },
      {
        title: "A client book you own",
        description: "Every buyer, seller, and past client with full history, in your system. The code and the data are yours from day one.",
      },
      {
        title: "Follow-up that never sleeps",
        description: "The system works the list while you work the closings. Past clients, anniversaries, quiet leads. Nobody falls through.",
      },
      {
        title: "Documents in one place",
        description: "Every contract, disclosure, and addendum attached to its deal. Find it and send it in seconds.",
      },
    ],
    faqs: [
      {
        question: "What happens to my client book if I leave kvCORE or Follow Up Boss?",
        answer: "Usually whatever their export tool gives you. With a system you own, the question disappears. The code and the data are yours from day one. Nobody rents you your own business back.",
      },
      {
        question: "Do we have to switch everything at once?",
        answer: "No. The new system runs beside your current stack, penny-matched nightly. Nothing switches until you say go. When you trust it, you cancel the old subscriptions, not before.",
      },
      {
        question: "Does it replace the MLS?",
        answer: "No. The MLS stays the MLS, and your brokerage's compliance stays theirs. The system replaces the rented stack around them.",
      },
      {
        question: "Have you built one for a real estate team before?",
        answer: "A fitting starts with your deals, not a template. We walk how your operation runs and build to that. The same core runs in auto shops, retail stores, and field crews.",
      },
      {
        question: "What does it cost?",
        answer: "One public price, month-to-month. Cancel anytime with 30 days' notice. You keep the code, the data, and a system that keeps running.",
      },
    ],
    formSource: "industry_realtors",
    ctaText: "Let's Talk",
  },
  lawyers: {
    name: "Lawyers",
    slug: "lawyers",
    metaDescription:
      "Custom software for law firms. Intake, matters, documents, and billing in one system your firm owns. Code and data. No per-seat rentals. By Found It Software.",
    headline: "One System Runs the Firm. And the Firm Owns It.",
    subline:
      "Intake in one app, matters in another, documents in a third, billing in a fourth. All rented, per seat. We build one system that fits how you work, and you own it. Nobody rents you your own business back.",
    heroStat: { value: "100%", label: "Yours: Code & Data" },
    definitionHeading: "What Is a Law Firm Operating System?",
    definition:
      "A law firm operating system is one custom piece of software that runs the business side of a practice. Intake, matters, documents, and billing in one system the firm owns: the code and the data. Found It Software sits with your people, learns how the firm works, and builds to that. An AI on top answers plain questions about the firm's books. It can read. It can't write. It stays out of trust accounting and court deadlines. That is lawyer work, and we say so up front.",
    painPoints: [
      {
        title: "You pay per lawyer, per month, forever",
        description: "Practice-management platforms charge by the seat, every month. Your matters live on their servers. You rent access to your own case files.",
      },
      {
        title: "Intake is scattered across sticky notes and inboxes",
        description: "A new client calls. Somebody writes it down, somewhere. The same name gets retyped into three systems that never see each other.",
      },
      {
        title: "Billing leaks money quietly",
        description: "Hours get worked and never billed. Invoices go out late. Nobody knows what is unbilled right now. That is real money walking out the door.",
      },
    ],
    solutions: [
      {
        title: "One system, fitted to the firm",
        description: "A client calls. Intake becomes a matter. The matter holds its documents. The work becomes an invoice. One place, start to finish. We learn how your firm runs and build to that.",
      },
      {
        title: "An AI that reads the firm's books",
        description: "Ask it plain questions. What's unbilled, which matters went quiet, how this June compares to last June. It reads and it answers. It can't get in the books.",
      },
      {
        title: "You own it: code and data",
        description: "The software carries your firm's name. The code and the database are yours, backed up nightly. The old subscriptions get canceled. Nobody else has your data.",
      },
      {
        title: "It runs beside your current software first",
        description: "Nothing switches on day one. The new system runs beside what you use now, matched nightly, until you trust it. You pull the plug when you say go.",
      },
      {
        title: "What it will not touch",
        description: "No trust accounting. No IOLTA. No court-deadline math. Those stay with the people responsible for them. We tell you that before you ask.",
      },
    ],
    faqs: [
      {
        question: "What happens to my data if I ever leave Clio or MyCase?",
        answer: "With rented software, you get whatever their export tool gives you. With a system we build, the code and the database are yours from day one, backed up nightly. There is no landlord to leave.",
      },
      {
        question: "What if the new system breaks? The whole firm runs on this.",
        answer: "Nothing switches until you say go. The new system runs beside your current software, matched nightly, down to the penny on billing. When you're confident, you pull the plug. Not a day earlier.",
      },
      {
        question: "Will it handle trust accounting or calculate court deadlines?",
        answer: "No. Trust accounting and IOLTA stay where they are now. Deadline math stays with your lawyers and your docketing. The system runs intake, matters, documents, and billing.",
      },
      {
        question: "What does it cost, and am I locked into a contract?",
        answer: "One public price, month-to-month. Cancel anytime with 30 days' notice. The whole thing stays yours.",
      },
      {
        question: "Do you still do marketing for law firms?",
        answer: "We retired the marketing side to build software full time. The one exception is AI Search Optimization: when somebody asks ChatGPT for a lawyer in your parish, we do the work that gets you named. Everything else we build is the system itself.",
      },
    ],
    formSource: "industry_lawyers",
    ctaText: "Let's Talk",
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
