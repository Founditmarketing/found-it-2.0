/* ─── Industry Data ───
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
}

export const industries: Record<string, IndustryData> = {
  medical: {
    name: "Medical / Healthcare",
    slug: "medical",
    metaDescription:
      "Custom software for medical and dental practices: scheduling, intake, recalls, and billing follow-up in one system you own outright — code and data. It runs beside your current setup until you say go. Built by Found It Software.",
    headline: "Your Practice Runs on Rented Software. Time to Own It.",
    subline:
      "Scheduling, intake, recalls, billing follow-up — one system fitted to your practice, and you own it outright. Code and data. The chart stays in your EHR; we build around it, never inside it.",
    heroStat: { value: "100%", label: "Yours — Code & Data" },
    definitionHeading: "What Is a Practice Operating System?",
    definition:
      "A practice operating system is one piece of custom software that runs the business side of a medical or dental practice: scheduling, intake, recalls, billing follow-up, and the patient book treated like a customer book. It is not an EHR and it never touches the chart — clinical records stay exactly where they are. It replaces the pile of rented subscriptions around your front desk with one system you own outright: the code and the data, living in your system, not a vendor's cloud. Found It Software fits it to how your practice actually runs, and it goes live beside your old setup — nothing switches until you say go.",
    painPoints: [
      {
        title: "A subscription for every job",
        description: "A scheduler, a reminder service, an intake-form tool, a billing follow-up add-on. Each one a monthly bill. Each one holds a piece of your practice. None of them talk to each other.",
      },
      {
        title: "Your patient list lives in a vendor's cloud",
        description: "The book you spent years building sits behind someone else's login, under someone else's terms of service. That's not your data working for you — that's your data rented back to you.",
      },
      {
        title: "The front desk runs on memory",
        description: "Recalls slip. No-shows never hear from you again. Overdue balances get chased when someone finds time. That's hours a week and real money leaking through sticky notes.",
      },
    ],
    solutions: [
      {
        title: "One system for the business side",
        description: "Scheduling, intake, recalls, billing follow-up — one screen, fitted to how your front desk actually works. Built in weeks, not months. The stack of subscriptions it replaces goes away, and so do their bills.",
      },
      {
        title: "The patient book, worked like a customer book",
        description: "Recalls go out on time. No-shows get a follow-up. Overdue balances get a polite nudge. Ask the system how last month compared to last year and it answers from your own numbers — the AI reads the books, it can't write them.",
      },
      {
        title: "You own it — code and data",
        description: "Your data lives in your system, not a vendor's cloud. No terms of service quietly claiming your patient list. Leave anytime and it all stays yours. Nobody rents you your own business back.",
      },
    ],
    faqs: [
      {
        question: "Does this replace our EHR?",
        answer: "No. The chart stays in your EHR and we don't touch clinical records — that's a hard line. The OS runs everything around the chart: scheduling, intake, recalls, billing follow-up, the patient book as a customer book. That's the business side of a practice, and that's where the hours and the subscription bills are.",
      },
      {
        question: "What happens to our data if we leave the software we rent now?",
        answer: "Read your vendor's terms of service — most practices signed away more than they think, and a clean export is the vendor's decision, not yours. That's the rental trap. With a Found It OS you own the code and the data outright, and it lives in your system, not a vendor's cloud. If you ever walk away from us, you keep everything. Nobody rents you your own business back.",
      },
      {
        question: "We book patients all day. What if the new system breaks?",
        answer: "It never gets the chance to hurt you. The new system runs beside your old one — both live, penny-matched nightly — and nothing switches off until you say go. If day one has a bug, your old system is still standing right there.",
      },
      {
        question: "Have you built one for a medical practice before?",
        answer: "Not yet — we won't pretend otherwise. The same system is running today in auto shops, retail stores, and field crews, and the business side of a practice is the same shape: a schedule, a customer book, money to follow up on. A fitting starts with us mapping your front desk's actual week — you add to it or cross things off before we build a thing.",
      },
      {
        question: "What does it cost?",
        answer: "One public price, month-to-month. No long-term contracts and no fine print. The guarantee is published on the site exactly as we say it across the counter: Love it or your money back.",
      },
    ],
    formSource: "industry_medical",
    ctaText: "Map My Practice",
  },
  contractors: {
    name: "Contractors / Home Services",
    slug: "contractors",
    metaDescription:
      "Custom software for contractors and home-service crews from Found It Software: jobs, speak-it-in estimates, scheduling, invoicing, follow-up texts — one app you own outright, code and data. It runs beside your old system until you say go.",
    headline: "The Office Rides in the Truck. And You Own It.",
    subline:
      "Jobs, estimates, scheduling, invoicing, the follow-up texts — one custom system built around how your crew actually works. You keep the code and the data. Nobody rents you your own business back.",
    heroStat: { value: "100%", label: "Yours — Code & Data" },
    definitionHeading: "What Is a Contractor OS?",
    definition:
      "A contractor OS is one custom app that runs the whole operation: the job comes in, gets scheduled, gets estimated, gets invoiced, gets the follow-up text that books the next one. Your foreman speaks the estimate in from the driveway and it is written up before he leaves. It replaces the stack of rented apps — and their monthly bills — with software you own outright, code and data. Found It Software builds it fitted to how your crew already works: we built a foundation crew an estimate book with speak-it-in entry, and a field-service book is running live today.",
    painPoints: [
      {
        title: "Five apps, one job",
        description: "A CRM, a scheduler, an estimating tool, an invoicing tool, and a spreadsheet holding it all together. None of them talk. Every job gets typed in three times, and every one of them bills you monthly.",
      },
      {
        title: "Estimates die on scrap paper",
        description: "The numbers get scribbled on-site and typed up at the kitchen table at nine o'clock. Follow-ups slip. Jobs you already won on the driveway go cold before the estimate ever sends.",
      },
      {
        title: "You don't own any of it",
        description: "Your customer list, your job history, your numbers — they sit on some software company's servers, and you pay rent to look at them. Try leaving and see how much comes with you.",
      },
    ],
    solutions: [
      {
        title: "One app runs the whole job",
        description: "Call to schedule to estimate to invoice to follow-up text — one system, entered once. The subscription stack it replaces stops billing you, and the hours you spend re-typing come back.",
      },
      {
        title: "Speak the estimate in from the truck",
        description: "Your foreman talks, the system writes it up, priced and ready to send. We built a foundation crew an estimate book that works exactly this way — and a field-service book is running live right now.",
      },
      {
        title: "Ask it anything about your numbers",
        description: "\"What's unpaid from March?\" \"How's this month against last year?\" Plain English in, straight answer out. The AI reads your books — it can't write them.",
      },
      {
        title: "Nothing switches until you say go",
        description: "The new system runs beside your old one, penny-matched nightly, until the numbers agree and you're ready. You flip the switch, not us.",
      },
      {
        title: "You own it — code and data",
        description: "Not licensed. Not rented. When it's built, it's yours: the software, the customer book, every job record, backed up nightly. Your business already carries your name. Now the software does too.",
      },
    ],
    faqs: [
      {
        question: "What does a contractor OS actually replace?",
        answer: "The stack — CRM, scheduling app, estimating software, invoicing tool, and the spreadsheet gluing it together — becomes one app fitted to your workflow, and those subscriptions stop billing you. We're honest about scope: if a tool you rely on does its one job well and doesn't make sense to rebuild, we'll say so and build around it.",
      },
      {
        question: "What happens to my data if I leave ServiceTitan or Jobber?",
        answer: "With rented software, whatever their export tools and terms of service say — that's the problem. With ours it's backwards: the code and the data are yours from day one, backed up nightly to your own drive and the cloud. Fire us tomorrow and the system, the customer book, and every job record stay with you.",
      },
      {
        question: "We run jobs every day. What if the new system breaks?",
        answer: "It never gets the chance to hurt you. The new system runs beside your old one — both live, penny-matched nightly — and nothing switches until you say go. If day one has a bug, your old system is still standing right there. Your crew keeps working the whole time.",
      },
      {
        question: "What does it cost?",
        answer: "One public price, month-to-month. No long-term contracts — clients stay because the thing works, not because they're locked in. And the guarantee is published with no fine print: Love it or your money back.",
      },
      {
        question: "Do you still do marketing?",
        answer: "Yes. When you want customers on top of the system, the same team runs ads and AI search — that's the other 10% of what we do. The 90% is building software like this.",
      },
    ],
    formSource: "industry_contractors",
    ctaText: "Get Your Contractor OS Mapped",
  },
  dealerships: {
    name: "Car Dealerships",
    slug: "dealerships",
    metaDescription:
      "Custom dealership software you own outright: inventory, the sales desk, the service department, and the customer book in one AI-powered operating system. Kill per-seat DMS rent — you keep the code and the data. Built one dealership at a time.",
    headline: "Quit Renting Your DMS. Own the System That Runs Your Store.",
    subline:
      "Inventory, the sales desk, the service lane, the customer book — one custom app built for your dealership, owned by you. Code and data. Nobody rents you your own business back.",
    heroStat: { value: "100%", label: "Yours — Code & Data" },
    definitionHeading: "What Is a Dealership Operating System?",
    definition:
      "A dealership operating system is one custom app that runs the whole store — inventory, the sales desk, the service department, and every customer you've ever sold or serviced — built for how your dealership actually works and owned by you, not rented per seat from a DMS vendor. Found It Software reverse-engineers the tools you're paying for monthly, combines them into one system with AI built in, and hands you the code and the data. It's a fitted suit, not off-the-rack: no modules you'll never open, no per-login fees, no vendor holding your customer history. We build them one dealership at a time.",
    painPoints: [
      {
        title: "Per-seat rent, forever",
        description: "Every desk, every login, every month. DMS pricing is built so the bill only goes up — and the software was never built for your lot in the first place.",
      },
      {
        title: "Four systems that don't talk",
        description: "Inventory in one tool, service tickets in another, the customer book in a CRM, deals in spreadsheets. Your people re-type the same customer five times a day.",
      },
      {
        title: "Your data is the hostage",
        description: "Read the terms you signed. The customer history, the service records, the deal files — they live in the vendor's cloud, and leaving is priced to hurt. That's renting your own business back.",
      },
    ],
    solutions: [
      {
        title: "One app for the whole store",
        description: "Inventory, the sales desk, the service lane, and the full customer book in one system, built to match how your store already runs. Fitted, not off-the-rack — no extra modules, no per-seat fees.",
      },
      {
        title: "You own it — code and data",
        description: "The software carries your name. No license per login, no terms of service holding your customer book. If you ever walk away, it walks with you. Ownership is how the subscription bills die.",
      },
      {
        title: "It runs beside your DMS first",
        description: "Nothing switches on day one. The new system runs parallel to the old one, penny-matched nightly, until you look at both and say go.",
      },
      {
        title: "AI that answers — and never touches the books",
        description: "Ask how the service lane did last week against last year and it answers from your own numbers. Speak a customer or a repair order in — no typing. Hard rule: the AI reads the books, it can't write them.",
      },
    ],
    faqs: [
      {
        question: "What does a dealership operating system actually replace?",
        answer: "The rented stack: the per-seat DMS modules, the CRM, the service scheduler, and the spreadsheets holding it all together. One custom app covers inventory, the desk, the service department, and the customer book. Honest scope: if you're a franchise store with a factory-mandated DMS, we don't fight the mandate — the system runs beside it and takes over everything it does badly. An independent lot can run the whole store on it.",
      },
      {
        question: "What happens to my data if I leave my DMS vendor?",
        answer: "That's the problem with renting. With most DMS vendors, your customer history and deal records live in their cloud, and getting them out is priced to keep you. With us it's the opposite: you own the code and the database. If you ever leave us, the system keeps running and everything in it stays yours. One public price, month-to-month, no contract holding you.",
      },
      {
        question: "We run the store on our current system every day. What if the new one breaks?",
        answer: "We don't pull the plug on the old one. The new system runs beside your current setup, penny-matched nightly, until you trust it — nothing switches until you say go. In one auto-repair migration, that rebuild surfaced about $270K the old software had lost track of. And the guarantee is published on the site with no fine print: \"Love it or your money back.\"",
      },
      {
        question: "Can the AI mess with my books or my deals?",
        answer: "No. The AI can only read — it can't write. It will answer any question about the store from your own numbers, but it can't post, edit, or delete a thing. Everything is backed up nightly to a local drive and the cloud, and nobody else has your data.",
      },
      {
        question: "Do you still do marketing for dealerships?",
        answer: "Yes — that's the other 10% of what we do. The software comes first: build the system, kill the rent, save the hours. And when you want buyers on top of it, the same team runs ads and AI search.",
      },
    ],
    formSource: "industry_dealerships",
    ctaText: "Map Your Dealership OS",
  },
  retail: {
    name: "Retail / Stores",
    slug: "retail",
    metaDescription:
      "Custom store software you own outright: the register, inventory, customer households, layaway, and the books in one fitted system. It runs beside your old register, penny-matched nightly, until you say go.",
    headline: "Stop Renting Your Register. Own Your Store's System.",
    subline:
      "One system for the counter, the stockroom, layaway, and the books — fitted to your store, owned by you. The code and the data are yours. Nobody rents you your own business back.",
    heroStat: { value: "$0.00", label: "Penny-Test Difference" },
    definitionHeading: "What Is a Custom Store Operating System?",
    definition:
      "A custom store operating system is one piece of software, built for your store, that runs the register, inventory, customer households, layaway, and the books — and you own it outright: the code and the data. It replaces the stack of rented subscriptions that were never made for you. It is fitted like a suit, not bought off the rack — we call ours the House System, and it has been fitted to a menswear shop and an appliance store that has been open since 1946. The AI inside answers questions about your numbers; it reads the books, it can't write them. And nothing switches until you say go — the new system runs beside your old register, penny-matched nightly. Found It Software builds it. You keep it.",
    painPoints: [
      {
        title: "You're renting your own register",
        description: "The POS company owns the software, sets the terms, marks up the card fees, and holds your customer list in their cloud. Miss a payment and your own store history goes dark.",
      },
      {
        title: "Five systems that don't talk",
        description: "The register, an inventory spreadsheet, layaway in a notebook, the customer list somewhere else, and the books in another program. Same sale, typed in three times. That's hours every week.",
      },
      {
        title: "Off-the-rack software doesn't know your store",
        description: "Layaway, house accounts, customer households, the way your counter actually works — generic POS wasn't built for any of it. You pay for a pile of features you don't use and work around the ones you need.",
      },
    ],
    solutions: [
      {
        title: "The House System: one register for everything",
        description: "Sales, inventory, customer households, layaway, receipts, and the books on one screen. Ring it up once and everything updates. No retyping, no notebook, no spreadsheet.",
      },
      {
        title: "Fitted to your store, in weeks",
        description: "We reverse-engineer how your counter actually runs and build to that — the same way we fitted a menswear shop and an appliance store open since 1946. Ask it anything about your numbers; the AI reads the books, it can't write them.",
      },
      {
        title: "You own the code and the data",
        description: "It kills the rented-software stack and the subscriptions that come with it. One public price, month-to-month, no contracts. And nothing switches until you say go — the new system runs beside your old register, penny-matched nightly.",
      },
    ],
    faqs: [
      {
        question: "What happens to my customer data if I leave my POS company?",
        answer: "With most POS companies: a clunky export, if that — read your terms of service. With us the question disappears, because you own the system from day one. The code, the database, every customer household and layaway record — yours. If we ever part ways, you keep all of it and it keeps running.",
      },
      {
        question: "What if the new system breaks? The register can't go down.",
        answer: "It can't take you down, because we never pull the plug early. The House System runs beside your old register — both live, penny-matched nightly so every drawer count agrees to the cent. Nothing switches until you look at the numbers and say go.",
      },
      {
        question: "Can it handle layaway, house accounts, and customer households?",
        answer: "Yes — that's the whole point of custom. Layaway schedules, store credit, house accounts, families tied to one household record: built the way your store already does it, not bolted on as a plugin you have to fight.",
      },
      {
        question: "Does the AI touch my books?",
        answer: "No. The AI can only read the books — it can't write a single entry. You ask it questions like \"how did last week compare to last year\" and it answers from your real numbers. Everything is backed up nightly, locally and in the cloud, and nobody else has your data.",
      },
      {
        question: "What does it cost?",
        answer: "One public price, month-to-month, no contracts. The fee covers maintenance, security, backups, and new features — the software itself is yours. And the guarantee is published with no fine print: \"Love it or your money back.\"",
      },
    ],
    formSource: "industry_retail",
    ctaText: "Get Your Store Fitted",
  },
  realtors: {
    name: "Real Estate",
    slug: "realtors",
    metaDescription:
      "Custom software for real estate: one system you own — the deal pipeline, the client book, follow-up that never sleeps, documents in one place. Replaces the per-agent SaaS stack. The code and the data are yours.",
    headline: "Stop Renting Your Client Book. Own the System That Runs Your Business.",
    subline:
      "A CRM here, e-signatures there, a follow-up tool, a showing scheduler — every agent paying every month, and none of it talks to the rest. We build one system that runs the whole operation. And you own it outright: the code and the data.",
    heroStat: { value: "100%", label: "Yours — Code & Data" },
    definitionHeading: "What Is a Real Estate OS?",
    definition:
      "A real estate OS is one custom application that runs the whole operation: the deal pipeline from contract to close, the client book with every buyer and seller you have ever worked, follow-up that fires on its own, and every document attached to its deal. It replaces the per-agent stack of rented subscriptions — and unlike those, you own it outright, code and data. Found It Software fits it to how your team actually works, the same way our systems run in auto shops, retail stores, and field crews. Nobody rents you your own business back.",
    painPoints: [
      {
        title: "A subscription for every job",
        description: "CRM, e-signature, follow-up tool, showing scheduler, transaction tracker — per agent, per month. The stack costs real money and none of it talks to the rest.",
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
        description: "Every deal on one screen — stage, dates, parties, next action. Ask it a plain question about your numbers and get a straight answer. The AI reads the books; it can't write them.",
      },
      {
        title: "A client book you own",
        description: "Every buyer, seller, and past client with full history — in your system, not a vendor's cloud. The code and the data are yours outright, from day one.",
      },
      {
        title: "Follow-up that never sleeps",
        description: "The system works the list while you work the closings — past clients, anniversaries, quiet leads. Nobody falls through, because nobody has to remember.",
      },
      {
        title: "Documents in one place",
        description: "Every contract, disclosure, and addendum attached to its deal. Search it, find it, send it — seconds, not scavenger hunts.",
      },
    ],
    faqs: [
      {
        question: "What happens to my client book if I leave kvCORE or Follow Up Boss?",
        answer: "Whatever their terms of service say — usually a CSV export and good luck. That's the problem with rented software: the relationships you spent a career building live in their cloud. With a system you own, the question disappears. The code and the data are yours from day one. Nobody rents you your own business back.",
      },
      {
        question: "Do we have to switch everything at once?",
        answer: "No. The new system runs beside your current stack, penny-matched nightly, and nothing switches until you say go. You keep working deals the whole time. When you trust it, you pull the plug on the old subscriptions — not before.",
      },
      {
        question: "Does it replace the MLS?",
        answer: "No — and we'll tell you straight what it won't touch. The MLS stays the MLS, and your brokerage's compliance requirements stay theirs. What the system replaces is the rented stack around them: the CRM, the follow-up tool, the document chase, the per-agent subscriptions.",
      },
      {
        question: "Have you built one for a real estate team before?",
        answer: "A fitting starts with your deals, not a template. We sit down, map how your operation actually runs, and build to that. The same core is running in auto shops, retail stores, and field crews. Real estate's version is the pipeline, the client book, follow-up, and documents in one system.",
      },
      {
        question: "What does it cost?",
        answer: "One public price, month-to-month, no long-term contracts. The guarantee is published on the site with no fine print: \"Love it or your money back.\"",
      },
    ],
    formSource: "industry_realtors",
    ctaText: "Map My Real Estate OS",
  },
  lawyers: {
    name: "Lawyers",
    slug: "lawyers",
    metaDescription:
      "Custom software for law firms from Found It Software: intake, matters, documents, and billing hygiene in one system your firm owns outright — code and data. It runs beside your current software until you say go. No per-seat rentals.",
    headline: "One System Runs the Firm. And the Firm Owns It.",
    subline:
      "Intake in one app, matters in another, documents in a third, billing in a fourth — all rented, per seat, none of it built for your firm. We build one custom system that fits how you actually work, and you own it outright. Nobody rents you your own business back.",
    heroStat: { value: "100%", label: "Yours — Code & Data" },
    definitionHeading: "What Is a Law Firm Operating System?",
    definition:
      "A law firm operating system is one custom piece of software that runs the business side of a practice — intake, matters, documents, and billing hygiene — in a single system the firm owns outright: the code and the data. Found It Software builds it by sitting with your people and reverse-engineering how the firm actually works, then fitting software to that — the same discipline behind the systems we have running in auto shops, retail stores, and field crews. An AI sits on top that answers plain questions about the firm's books; it can read, it can't write. And it stays out of trust accounting and court deadlines — that's lawyer work, and we say so up front.",
    painPoints: [
      {
        title: "You pay per lawyer, per month, forever",
        description: "Practice-management platforms charge by the seat, every month, and your matters live on their servers under their terms of service. You're renting access to your own case files.",
      },
      {
        title: "Intake is scattered across sticky notes and inboxes",
        description: "A new client calls. Somebody writes it down — somewhere. Then the same name gets retyped into three different systems. Matters, documents, and billing never see each other.",
      },
      {
        title: "Billing hygiene leaks money quietly",
        description: "Hours get worked and never billed. Invoices go out late. Nobody can answer \"what's unbilled right now\" without an afternoon in spreadsheets. That's real money walking out the door every month.",
      },
    ],
    solutions: [
      {
        title: "One system, fitted to the firm",
        description: "A client calls, intake becomes a matter, the matter holds its documents, the work becomes an invoice. One place, start to finish. We reverse-engineer how your firm actually runs and build to that — not an off-the-rack platform stuffed with features you'll never touch.",
      },
      {
        title: "An AI that reads the firm's books",
        description: "Ask it plain questions: what's unbilled right now, which matters went quiet, how this June compares to last June. It reads and it answers. It cannot write an entry — read-only, by design. The AI can't get in the books.",
      },
      {
        title: "You own it — code and data",
        description: "The software carries your firm's name. The code and the database are yours, backed up nightly to a local drive and the cloud. The subscriptions it replaces get canceled. Nobody else has your data.",
      },
      {
        title: "It runs beside your current software first",
        description: "Nothing switches on day one. The new system runs in parallel with what you use now, matched against it nightly, until you trust it. You pull the plug on the old one when you say go — not before.",
      },
      {
        title: "What it will not touch",
        description: "No trust accounting. No IOLTA. No court-deadline math. Those stay exactly where they are, with the people responsible for them. We tell you that before you ask, because honesty is the whole brand.",
      },
    ],
    faqs: [
      {
        question: "What happens to my data if I ever leave Clio or MyCase?",
        answer: "With rented software, you get whatever their export tool decides to give you — and your matters, contacts, and history live on their servers under their terms of service until then. With a system we build, the question disappears: the code and the database are yours from day one, backed up nightly to a local hard drive and the cloud. There is no landlord to leave. Nobody rents you your own business back.",
      },
      {
        question: "What if the new system breaks? The whole firm runs on this.",
        answer: "Nothing switches until you say go. The new system runs beside your current software — both live at the same time, matched against each other nightly, down to the penny on billing. You work out of the old one for as long as you want while the new one proves itself. When you're confident, you pull the plug. Not a day earlier.",
      },
      {
        question: "Will it handle trust accounting or calculate court deadlines?",
        answer: "No, and we won't pretend otherwise. Trust accounting and IOLTA stay in whatever handles them now, and deadline math stays with your lawyers and your docketing — we're not touching either one. The system runs intake, matters, documents, and billing hygiene. The AI on top answers questions about the firm's books, and it's read-only: it can look, it can never write an entry. We'd rather tell you plainly what it won't do than sell you something it can't.",
      },
      {
        question: "What does it cost, and am I locked into a contract?",
        answer: "One public price, month-to-month. No long-term contracts — clients stay because they love the system, not because they're locked in. The guarantee is published on the site with no fine print: Love it or your money back.",
      },
      {
        question: "Do you still do marketing for law firms?",
        answer: "Yes — it's the other 10%. Custom software is 90% of what we do now. And when you want clients on top of the system, the same team runs ads and AI search — that's the other 10% of what we do. But the software comes first, because a firm that runs clean makes every new client worth more.",
      },
    ],
    formSource: "industry_lawyers",
    ctaText: "Map My Firm's System",
  },
};
