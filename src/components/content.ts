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

// Descriptions verified against Chlorophyll's own public framework pages.
export const ipFrameworks: { name: string; label: string; clarifies: string }[] = [
  {
    name: "anthrop™",
    label: "Brand definition",
    clarifies:
      "Defines a brand around human opportunities — establishing an unchanging brand core, a distinctive territory, and how the brand operates across stakeholder touchpoints.",
  },
  {
    name: "wholon™",
    label: "Communication & behaviour",
    clarifies:
      "Keeps a brand true to its strategy across both what the brand says (communication) and what the brand does (behaviour), pairing an unchanging core with changing expression.",
  },
  {
    name: "ideantity™",
    label: "Brand identity",
    clarifies:
      "Captures a brand's essence as a two-second idea — combining brand name, visual idea, and brand line — that lands emotionally before rational thinking.",
  },
  {
    name: "litmosi™",
    label: "Culture alignment",
    clarifies:
      "A corporate brand-alignment tool that surfaces gaps between an organisation's stated values and actual behaviour — and between leadership and teams — then guides realignment.",
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
    "The challenge here isn't fundamentally a software challenge — it's a knowledge challenge: turning years of accumulated strategic expertise, frameworks, methodologies, research, and client engagements into an organizational intelligence system that can support future strategy work. That's closely aligned with the kinds of intelligence platforms Yuvabe has already designed and built.",
  quilt: {
    label: "Research intelligence",
    name: "Quilt",
    summary: "Turning fragmented, multi-source information into structured, retrievable intelligence.",
    built:
      "Yuvabe's Quilt platform was built to help organizations transform large volumes of fragmented market information into structured intelligence.",
    combines: ["Multi-source research", "Knowledge organization", "Pattern discovery", "Semantic retrieval", "Insight generation"],
    applied:
      "The proposed Strategy Intelligence Platform applies the same principles to strategic consulting workflows — where the primary knowledge sources are Chlorophyll's frameworks, methodologies, historical engagements, and strategic thinking processes.",
  },
  kittykat: {
    label: "Brand / asset knowledge",
    name: "KittyKat",
    summary: "Capturing and operationalizing brand & asset knowledge with context-aware recall and reuse.",
    built: "Yuvabe's KittyKat platform was designed to capture and operationalize brand knowledge.",
    included: ["Brand memory systems", "Asset intelligence", "Knowledge retrieval", "Context-aware recommendations", "Organizational knowledge reuse"],
    extends: "The proposed Chlorophyll platform extends these same concepts into the strategy domain by creating:",
    extendedTo: ["Strategic memory", "Strategic cognition", "Institutional knowledge preservation", "Pattern recognition across engagements", "Strategy decision support"],
  },
  philosophy:
    "We don't view AI as a replacement for strategic expertise. We view it as a way to preserve, organize, and amplify institutional knowledge — making Chlorophyll's collective intelligence more accessible, scalable, and reusable across future engagements.",
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
  ],
  notes: [
    "Senior-led engagement.",
    "Includes strategic consulting, product design, AI architecture, and implementation.",
    "Third-party software, model, hosting, or infrastructure costs are billed separately if applicable.",
    "Future support and enhancement engagements can be scoped separately after launch.",
  ],
} as const;
