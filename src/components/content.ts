// Single source of truth for all proposal copy.
// Edit here, not in components. Sourced from
// "Proposal Note_ Strategy Intelligence Roadmap for Chlorophyll.md".

export type Phase = {
  id: string; // "p1".."p5"
  n: string; // "Phase 1"
  timeline: string; // "2–3 weeks"
  title: string;
  focus: string; // one-line summary (top level)
  outcome: string; // outcome line (top level)
  launch?: boolean; // first-launch highlight
  detail: {
    purpose: string;
    activities?: { activity: string; what: string; who: string }[]; // Phase 1 discovery process
    audit?: { area: string; inspect: string; why: string }[]; // Phase 1 audit methodology
    outputs: string[];
    business: string[];
  };
};

export const phases: Phase[] = [
  {
    id: "p1",
    n: "Phase 1",
    timeline: "2–3 weeks",
    title: "Discovery & audit",
    focus: "Understand the strategy workflow, templates, methods, cases, and constraints before defining a solution.",
    outcome: "A clear understanding of the workflow and a recommended direction for the focused Strategy Brain prototype.",
    detail: {
      purpose:
        "Understand Chlorophyll's strategy workflow before defining a specific solution — how strategy work actually happens, how proprietary methods are used, what data exists, what must remain human-led, and where an intelligence system could create real value.",
      activities: [
        { activity: "Leadership conversations", what: "Understand Chlorophyll's philosophy, ambition, IP priorities, and expectations from this engagement", who: "Founder, senior leadership, senior strategists" },
        { activity: "Strategist workflow sessions", what: "Map how strategy work moves from client input to brand core, territory, and options", who: "3–5 sessions with strategy team members" },
        { activity: "Workshop process review", what: "Study question templates, workshop flow, interpretation steps, and decision points", who: "Templates, notes, interview guides, sample transcripts" },
        { activity: "Proprietary IP mapping", what: "Understand where anthrop™, wholon™, ideantity™, and litmosi™ enter the process", who: "Senior team members, IP owners, internal docs" },
        { activity: "Artifact review", what: "Review past outputs for structure, language, strategic patterns, and quality signals", who: "Brand core, territory, strategy, naming, marketing & creative decks" },
        { activity: "Case library audit", what: "Assess structure, metadata, reuse potential, and sensitivity of past work", who: "Selected case studies and project archives" },
        { activity: "Marketing & creative scan", what: "Understand how strategy flows into campaigns, messaging, identity, and creative", who: "Marketing plans, communication themes, creative direction decks" },
        { activity: "Data & confidentiality review", what: "Identify what can be used, what needs permissioning, and what must stay protected", who: "Case material, client data, frameworks, legal constraints" },
      ],
      audit: [
        { area: "Workflow", inspect: "How work moves from client input to strategy output", why: "Reveals where support is useful and where judgment must remain human-led" },
        { area: "Artifacts", inspect: "Templates, notes, decks, case studies, workshop outputs", why: "Shows what knowledge already exists and how reusable it is" },
        { area: "IP usage", inspect: "Where proprietary methods enter the process", why: "Ensures future systems are built around Chlorophyll's own thinking" },
        { area: "Decision points", inspect: "Where strategists interpret, challenge, synthesize, or redirect", why: "Identifies the real craft of the work" },
        { area: "Case memory", inspect: "How past cases are reused or forgotten", why: "Reveals opportunities for faster recall and better reuse" },
        { area: "Data readiness", inspect: "What is structured, unstructured, sensitive, or reusable", why: "Determines what can be safely used in future phases" },
        { area: "Opportunity areas", inspect: "Where speed, reuse, consistency, onboarding, or quality can improve", why: "Connects discovery to business value" },
      ],
      outputs: [
        "Strategy workflow map",
        "Proprietary IP usage map",
        "Strategy, marketing & creative handoff map",
        "AI opportunity map",
        "Strengthen vs. create-new analysis",
        "Case library & data readiness assessment",
        "IP & confidentiality risk assessment",
        "Recommended scope for Phase 2",
      ],
      business: [
        "Clearer investment direction before building",
        "Reduced risk of creating a generic AI tool",
        "Better visibility into where knowledge sits today",
        "Shared understanding of what to automate, assist, or protect",
      ],
    },
  },
  {
    id: "p2",
    n: "Phase 2",
    timeline: "2–3 weeks",
    title: "Focused Strategy Brain prototype",
    focus: "Use a focused set of cases, templates, and outputs to validate the first useful AI-assisted direction.",
    outcome: "Confirmation of the kind of Strategy Brain Chlorophyll would trust, use, and build further.",
    detail: {
      purpose:
        "Explore and validate the first useful direction for a Chlorophyll-owned strategy intelligence system. The prototype is defined only after Discovery, so it never assumes how Chlorophyll's IP, judgment, and workflows operate.",
      outputs: [
        "Focused proof of concept",
        "Validated use case",
        "Sample knowledge structure for selected cases",
        "Strategist feedback",
        "Recommended direction for Phase 3",
      ],
      business: [
        "Faster validation before deeper investment",
        "Tangible internal feedback from strategists",
        "Clearer understanding of where a Strategy Brain adds value",
        "Early view of adoption risks and workflow fit",
      ],
    },
  },
  {
    id: "p3",
    n: "Phase 3",
    timeline: "3–4 weeks",
    title: "Internal Strategy Brain",
    focus: "Build the validated internal strategy model using Chlorophyll's cases, frameworks, and methods.",
    outcome: "A more mature internal Strategy Brain that reflects Chlorophyll's thinking and supports live work.",
    launch: true,
    detail: {
      purpose:
        "Expand the validated direction from Phase 2 — adding more internal material, strengthening tagging and metadata, mapping strategy patterns, and representing proprietary methods more clearly through strategist review. Anchored in internal thinking before any external material.",
      outputs: [
        "Expanded internal strategy knowledge layer",
        "Case & pattern library",
        "Proprietary IP mapping structure",
        "Chlorophyll strategic-thinking model",
        "Strategist review workflow",
        "Readiness for external research augmentation",
      ],
      business: [
        "Faster briefing and case recall",
        "Better reuse of 27 years of past work",
        "Junior strategists up to speed sooner",
        "Less dependency on senior memory for past references",
        "More consistent access to strategic patterns",
      ],
    },
  },
  {
    id: "p4",
    n: "Phase 4",
    timeline: "3–4 weeks",
    title: "External research layer",
    focus: "Add market, category, competitor, audience, and cultural intelligence.",
    outcome: "The Strategy Brain can compare internal thinking with external market reality.",
    detail: {
      purpose:
        "Add external market, category, competitor, audience, and cultural intelligence — after the internal model is established, so external research strengthens Chlorophyll's thinking instead of becoming a generic research assistant.",
      outputs: [
        "External research layer",
        "Source framework",
        "Competitor & category intelligence flow",
        "Audience & cultural signal summaries",
        "External-research-to-strategy mapping",
      ],
      business: [
        "Stronger market-grounded strategy",
        "Faster preparation for category & competitor conversations",
        "More consistent research inputs across teams",
        "Better connection between internal brand thinking and external context",
      ],
    },
  },
  {
    id: "p5",
    n: "Phase 5",
    timeline: "2 weeks",
    title: "Integration",
    focus: "Combine internal strategy knowledge and external research into one workflow.",
    outcome: "An integrated Strategy Intelligence System spanning internal knowledge and external context.",
    detail: {
      purpose:
        "Bring the internal Strategy Brain and external research layer into one usable strategy workflow that supports moving from client input to stronger strategic directions.",
      outputs: [
        "Integrated strategy workflow",
        "Review & approval flow",
        "Updated operating process",
        "Recommendations for future expansion",
      ],
      business: [
        "A clearer internal operating model for strategy intelligence",
        "More consistent strategy delivery across teams",
        "Stronger handoff from strategy to marketing and creative",
        "A safer foundation for future workflow expansion",
      ],
    },
  },
];

// label + href verified against Chlorophyll's public framework pages.
// `clarifies` = what discovery wants to LEARN about how each method is used
// (not a definition — the linked pages define them), so it can be modelled.
export const ipFrameworks: { name: string; label: string; clarifies: string; href: string }[] = [
  {
    name: "anthrop™",
    label: "Brand definition",
    href: "https://www.chlorophyll.in/anthrop/",
    clarifies:
      "How your team arrives at a brand core and territory — the inputs, signals, and judgement calls that turn a human opportunity into a defined brand.",
  },
  {
    name: "wholon™",
    label: "Communication & behaviour",
    href: "https://www.chlorophyll.in/wholon/",
    clarifies:
      "How an unchanging core gets translated into what a brand says and does across touchpoints — the rules strategists follow, and the exceptions they make.",
  },
  {
    name: "ideantity™",
    label: "Brand identity",
    href: "https://www.chlorophyll.in/ideantity/",
    clarifies:
      "How a brand idea is distilled into a two-second name, visual, and line — and what makes one land where another doesn't.",
  },
  {
    name: "litmosi™",
    label: "Culture alignment",
    href: "https://www.chlorophyll.in/litmosi/",
    clarifies:
      "How gaps between stated values and real behaviour are surfaced and read — and what a credible realignment looks like.",
  },
];

// A hypothesis (pre-discovery) of where the mapped IP could lead: a model of
// Chlorophyll's thinking, which grounds the AI audit, which improves the
// day-to-day strategy workflow. Discovery is what confirms or reshapes this.
export const ipFlow: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "A model of your thinking",
    body: "That mapping could become a structured model of how Chlorophyll works — frameworks, cases, and judgement, represented so the platform can retrieve and reuse them.",
  },
  {
    step: "02",
    title: "It grounds the AI",
    body: "Outputs would be checked against that model, so the system reflects your methods rather than a generic one — which is what the Phase 1 audit is there to establish.",
  },
  {
    step: "03",
    title: "It improves the workflow",
    body: "The aim is faster briefing, case recall, and onboarding across the strategy team — with strategists always owning the final call.",
  },
];

export const sovereignty: { principle: string; meaning: string }[] = [
  { principle: "Ownership", meaning: "Chlorophyll owns all source material, derived structures, and outputs" },
  { principle: "Controlled access", meaning: "Different teams can have different permission levels where needed" },
  { principle: "No external training", meaning: "Chlorophyll data is not used to train external models" },
  { principle: "Auditability", meaning: "Usage, retrieval, and changes are traceable" },
  { principle: "Human approval", meaning: "Strategists remain responsible for client-facing outputs" },
  { principle: "Client sensitivity", meaning: "Confidential client material is clearly marked, permissioned, and protected" },
];

export const parallels = {
  intro:
    "This is a knowledge challenge, not a software one — the hard part is turning scattered expertise into something a team can reuse. We've built that kind of platform before.",
  quilt: {
    label: "Research intelligence",
    name: "Quilt",
    shift: ["Market intelligence", "Strategic intelligence"],
    summary: "Turning fragmented, multi-source information into structured, retrievable intelligence.",
    built:
      "Yuvabe's Quilt platform was built to help organizations transform large volumes of fragmented market information into structured intelligence.",
    combines: ["Multi-source research", "Knowledge organization", "Pattern discovery", "Semantic retrieval", "Insight generation"],
    applied:
      "The proposed Strategy Intelligence Platform applies similar principles to strategic consulting workflows, where the primary knowledge sources are Chlorophyll's frameworks, methodologies, historical engagements, and strategic thinking processes.",
  },
  kittykat: {
    label: "Brand / asset knowledge",
    name: "KittyKat",
    shift: ["Brand intelligence", "Strategy intelligence"],
    summary: "Capturing and operationalizing brand & asset knowledge with context-aware recall and reuse.",
    built: "Yuvabe's KittyKat platform was designed to capture and operationalize brand knowledge.",
    included: ["Brand memory systems", "Asset intelligence", "Knowledge retrieval", "Context-aware recommendations", "Organizational knowledge reuse"],
    extends: "The proposed Chlorophyll platform extends these same concepts into the strategy domain by creating:",
    extendedTo: ["Strategic memory", "Strategic cognition", "Institutional knowledge preservation", "Pattern recognition across engagements", "Strategy decision support"],
  },
  philosophy:
    "We don't view AI as a replacement for strategic expertise. We view it as a way to preserve, organize, and amplify institutional knowledge — making Chlorophyll's collective intelligence more accessible, scalable, and reusable across future engagements.",
} as const;

/* The three-domain comparison: the same intelligence architecture Yuvabe has
   already built twice (Quilt, KittyKat), applied a third time to Chlorophyll's
   strategy work. Chlorophyll is the `target` column — the one still to build. */
export const comparison = {
  intro:
    "Two of the three columns below are already live — Quilt and KittyKat. The third shows how the same approach could extend to Chlorophyll's strategy work — a direction to explore in Discovery, not a fixed plan.",
  columns: [
    { name: "Quilt", domain: "Market intelligence", state: "Built" },
    { name: "KittyKat", domain: "Brand intelligence", state: "Built" },
    { name: "Chlorophyll", domain: "Strategy intelligence", state: "Proposed", target: true },
  ],
  rows: [
    {
      dim: "Knowledge sources",
      values: [
        "Research reports, market signals, competitor & cultural data",
        "Brand assets, guidelines, campaign history",
        "Frameworks, methodologies, historical engagements, strategist knowledge",
      ],
    },
    {
      dim: "Organization",
      values: ["Structured market intelligence", "Structured brand intelligence", "Structured strategic intelligence"],
    },
    {
      dim: "Memory layer",
      values: ["Market memory", "Brand memory", "Strategic memory"],
    },
    {
      dim: "Intelligence layer",
      values: [
        "Pattern discovery, insight generation",
        "Context-aware recommendations",
        "Pattern recognition, territory exploration, strategic analysis",
      ],
    },
    {
      dim: "Retrieval layer",
      values: [
        "Semantic search & knowledge retrieval",
        "Knowledge retrieval & asset discovery",
        "Strategy retrieval across cases, frameworks & methodologies",
      ],
    },
    {
      dim: "Decision support",
      values: ["Research-backed insights", "Brand decision support", "Strategy decision support"],
    },
    {
      dim: "Organizational impact",
      values: [
        "Faster market understanding",
        "Reusable brand knowledge",
        "Institutionalized strategic knowledge & scalable strategist effectiveness",
      ],
    },
  ],
} as const;

/* Proven building blocks behind Quilt & KittyKat (the "experience" list). */
export const capabilities = [
  "Retrieval-augmented intelligence systems",
  "Organizational memory platforms",
  "Semantic search & discovery",
  "AI-assisted decision support",
  "Human-in-the-loop workflows",
] as const;

/* Phase 1 in depth. Discovery is the de-risking step: we learn how Chlorophyll
   actually works before any build, so the system reflects your methods rather
   than a generic one. Source: §"Phase 1: Discovery and audit" of the note. */
export const discovery = {
  intro:
    "Before we build anything, we learn how Chlorophyll actually works. A generic AI tool is the real risk — Discovery is how we avoid it.",
  // The eight discovery activities, collapsed into four ways we learn.
  moves: [
    {
      title: "People",
      body: "Leadership conversations and strategist workflow sessions — how strategy really moves from brief to brand core.",
    },
    {
      title: "Method",
      body: "Workshop-process review and IP mapping: where anthrop™, wholon™, ideantity™ & litmosi™ enter the work.",
    },
    {
      title: "Evidence",
      body: "Artifact review, case-library audit, and a marketing & creative scan of past outputs.",
    },
    {
      title: "Constraints",
      body: "A data & confidentiality review — what's usable, what needs permissioning, what stays protected.",
    },
  ],
  // Full activity table (revealed on demand).
  process: [
    { activity: "Leadership conversations", what: "Philosophy, ambition, IP priorities & expectations", who: "Founder & senior strategists" },
    { activity: "Strategist & workshop sessions", what: "How work moves from client input — through workshop flow and decision points — to brand core, territory & options", who: "team sessions, templates & notes" },
    { activity: "Proprietary IP mapping", what: "Where anthrop™, wholon™, ideantity™ & litmosi™ enter the process", who: "IP owners, internal docs" },
    { activity: "Artifact & case-library review", what: "Structure, language, strategic patterns, reuse potential & sensitivity", who: "Brand / territory / strategy decks & past cases" },
    { activity: "Data & confidentiality review", what: "What's usable, what needs permissioning, what stays protected", who: "Client data & constraints" },
  ],
  // What the audit really inspects (revealed on demand).
  audit: [
    { area: "Workflow", why: "Where support helps and where judgment must stay human-led" },
    { area: "Artifacts", why: "What knowledge already exists and how reusable it is" },
    { area: "IP usage", why: "So future systems are built around your own thinking" },
    { area: "Decision points", why: "Where strategists interpret, challenge & synthesize — the real craft" },
    { area: "Case memory", why: "Where faster recall and better reuse are possible" },
    { area: "Data readiness", why: "What can be safely used in later phases" },
    { area: "Opportunity areas", why: "Connecting discovery to business value" },
  ],
  outcome:
    "Discovery produces a clear map of how strategy works at Chlorophyll — and a recommended, scoped direction for the Phase 2 prototype. It sets up the build; it doesn't replace it.",
  outputs: [
    {
      title: "Strategy workflow map",
      desc: "How strategy moves today — from client brief to brand core, territory, and options.",
    },
    {
      title: "IP usage map",
      desc: "Where anthrop™, wholon™, ideantity™ & litmosi™ actually enter the work, so the system reflects your methods.",
    },
    {
      title: "AI opportunity map",
      desc: "The specific points where AI can strengthen the workflow — and where judgment must stay human-led.",
    },
    {
      title: "Data & IP readiness",
      desc: "What past cases and material exist, what's reusable, and what must stay permissioned and protected.",
    },
    {
      title: "Recommended Phase 2 scope",
      desc: "A concrete, bounded prototype direction to validate first — the decision Discovery exists to inform.",
    },
  ],
  businessOutcomes: [
    "Clearer investment direction before building",
    "Visibility into where your knowledge sits today",
    "A shared view of what to reinvent, automate, assist, or protect",
  ],
} as const;

export const commercials = {
  monthly: "₹10,00,000",
  discountedMonthly: "₹9,00,000",
  discountNote: "10% early-commitment discount (within 14 days)",
  team: [
    { role: "AI & Product Lead", resp: "AI strategy, platform architecture, roadmap definition, knowledge-system design" },
    { role: "Product & Delivery Lead", resp: "Product design, workflow design, delivery oversight, stakeholder alignment" },
    { role: "AI / Full-Stack Engineer", resp: "AI implementation, backend services, integrations, knowledge-platform development" },
    { role: "AI / Full-Stack Engineer", resp: "Frontend development, workflow implementation, platform features" },
    { role: "QA Engineer", resp: "Test-case creation, test automation, and QC-lifecycle management" },
  ],
  notes: [
    "Senior-led engagement.",
    "Includes strategic consulting, product design, AI architecture, and implementation.",
    "Third-party software, model, hosting, or infrastructure costs are billed separately if applicable.",
    "Future support and enhancement engagements can be scoped separately after launch.",
  ],
} as const;
