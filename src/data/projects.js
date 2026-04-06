const projects = [
  // AI / BUILT
  {
    id: 1,
    category: 'AI / Built',
    title: 'AI Proposal Generator',
    metric: '95% time reduction · <60 sec',
    description:
      'Live AI tool that writes polished 8-section business proposals from a 10-field intake form. Built with Claude Sonnet 4, React, and a production-secure Vercel proxy — validated across 39 test runs, zero markdown artifacts.',
    tags: ['Claude API', 'React', 'Vercel'],
    link: { url: 'https://proposal-generator-delta-black.vercel.app', label: 'Live Demo' },
  },
  {
    id: 2,
    category: 'AI / Built',
    title: 'Bloomberg Terminal on AI',
    metric: '$24K Bloomberg cost → Free',
    description:
      'Bloomberg-style stock dashboard combining Alpha Vantage live market data with Claude API equity reports — conviction ratings, price targets, and bull/bear scenarios. 6 custom technical indicators built from scratch in the browser.',
    tags: ['React 19', 'Claude API', 'Alpha Vantage'],
    link: null,
  },
  {
    id: 3,
    category: 'AI / Built',
    title: 'Neo4j Hack Night Winner',
    metric: '1st Place · 20+ teams · 8 hrs',
    description:
      'Won 1st place by building a knowledge-graph-powered proposal generator that reasons about client-competitor-solution relationships using Neo4j — not just RAG text retrieval. Multi-step pipeline orchestrated with Union.ai.',
    tags: ['Neo4j', 'Claude API', 'Union.ai'],
    link: null,
  },
  {
    id: 4,
    category: 'AI / Built',
    title: 'Agentic Inventory Restock System',
    metric: '80% of $264K revenue protected',
    description:
      'Fully agentic Claude-powered system that autonomously triggered 7 purchase orders via 31 tool calls in one run — zero hard-coded routing rules, pure AI reasoning across 20 SKUs.',
    tags: ['Claude API', 'Python', 'Agentic AI'],
    link: null,
  },
  {
    id: 5,
    category: 'AI / Built',
    title: 'Chorus — AI Algo Trading on Prediction Markets',
    metric: 'Won VC pitch · Pioneer Square Labs',
    description:
      'AI-first fund concept that extracts probability signals from news using Claude API to find mispriced contracts on Kalshi and Polymarket. Won idea pitch competition in front of VCs at Pioneer Square Labs. End-to-end: data ingestion → NLP signals → execution simulation → PnL reporting.',
    tags: ['Python', 'Claude API', 'FinTech'],
    link: null,
  },

  // ML / DATA
  {
    id: 6,
    category: 'ML / Data',
    title: 'ML Ticket Triage Classifier',
    metric: '97.44% CV accuracy · 2,500 hrs/yr freed',
    description:
      'Random Forest classifier (200 trees, TF-IDF 300 features) that assigns priority to support tickets in milliseconds. Tested on 78 unseen tickets — 100% test accuracy, first-response time reduced from 8 min to under 1 min.',
    tags: ['Python', 'Random Forest', 'scikit-learn'],
    link: null,
  },
  {
    id: 7,
    category: 'ML / Data',
    title: 'Rules-Based Resume Screening Engine',
    metric: '50% screening time saved · 43% faster shortlist',
    description:
      'Automated HR screening engine with 100% label consistency across 50 candidates and 5 roles — includes bias audit framework and ATS integration design for Workday/Greenhouse.',
    tags: ['Python', 'Rules Engine', 'HR Ops'],
    link: null,
  },
  {
    id: 8,
    category: 'ML / Data',
    title: 'Microsoft BEAM — LLM Prompt Engineering',
    metric: '10,000 emails · 5 prompt iterations',
    description:
      'Engineered 5 successive GPT-4 prompt versions for Microsoft\'s BEAM email classification system — used confusion matrix analysis to diagnose failure modes per iteration and delivered a reusable optimization playbook to the ML team.',
    tags: ['GPT-4', 'Prompt Engineering', 'Azure OpenAI'],
    link: null,
  },
  {
    id: 9,
    category: 'ML / Data',
    title: 'Credit Risk Scoring — Aspire Home Finance',
    metric: '81.5% accuracy · imbalanced defaulter dataset',
    description:
      'Built credit default prediction model at Motilal Oswal for Aspire Home Finance using SMOTE + Random Forest — co-initiated ML adoption in the BI team where none existed before.',
    tags: ['Python', 'Random Forest', 'SMOTE'],
    link: null,
  },
  {
    id: 10,
    category: 'ML / Data',
    title: 'ZS Associates Doctor Segmentation',
    metric: 'Winner · 200+ teams',
    description:
      'Won ZS Case-a-thon at IIT Kharagpur by applying K-Means clustering to segment doctors into 5 actionable groups for a pharma drug launch — invited to ZS Gurgaon annual hackathon.',
    tags: ['Python', 'K-Means', 'Market Segmentation'],
    link: null,
  },
  {
    id: 11,
    category: 'ML / Data',
    title: 'Options Payoff Analyzer — ShareKhan BNP',
    metric: 'Interactive Greeks · ML sell signals',
    description:
      'Built an interactive options payoff analyzer with live Greeks adjustment (delta, gamma, theta, vega) and a covered call sell-signal ML model at ShareKhan BNP Mumbai. Added Max Pain theory-based expiry range predictor for Bank Nifty and Nifty 50.',
    tags: ['Python', 'Black-Scholes', 'ML'],
    link: null,
  },
  {
    id: 12,
    category: 'ML / Data',
    title: 'Soil Organic Carbon CNN — IIT Kharagpur',
    metric: '856 images · VGG-19 · M.Tech thesis',
    description:
      'Research thesis building a VGG-19 CNN to classify soil organic carbon levels from LED microscope images — established histogram equalization improved accuracy and dataset scale was the binding constraint.',
    tags: ['TensorFlow', 'VGG-19', 'Transfer Learning'],
    link: null,
  },
  {
    id: 13,
    category: 'ML / Data',
    title: 'Flood Inflow Prediction — IIT Kharagpur',
    metric: '22% peak error reduction · B.Tech thesis',
    description:
      'Built Random Forest and GBM models to predict flood inflow at Jamatra gauging site — optimized rainfall lag inputs via max correlation analysis to extend accurate forecast horizons.',
    tags: ['Python', 'Random Forest', 'Hydrological Modeling'],
    link: null,
  },

  // PRODUCT / PM
  {
    id: 14,
    category: 'Product / PM',
    title: 'AWS Config — AI/ML Governance PRFAQ',
    metric: '$357M revenue uplift · 50+ stakeholders aligned',
    description:
      'Designed a new AI governance capability for AWS Config from 25+ customer interviews to VP-ready PRFAQ, financial model, Figma mockups, and competitive analysis across 5 platforms — converted to full-time Senior PM-T offer.',
    tags: ['PRFAQ', 'Figma', 'AWS Config'],
    link: null,
  },
  {
    id: 15,
    category: 'Product / PM',
    title: 'FedRAMP Certification — TCG Digital',
    metric: '$500K client savings · 84% faster reports',
    description:
      'Led cross-functional FedRAMP remediation and certification unlocking the US government analytics market — Kubernetes cut client infra costs by $500K, Greenplum reduced report generation time by 84%.',
    tags: ['AWS GovCloud', 'Kubernetes', 'Greenplum'],
    link: null,
  },
  {
    id: 16,
    category: 'Product / PM',
    title: 'GenAI Integration — TCG Digital',
    metric: '−70% search time · $2M+ revenue · 10+ engineers',
    description:
      'Defined product vision and led 10+ engineers to ship OpenAI-powered NLP querying on a $40M enterprise analytics platform — GenAI became the core differentiator in enterprise sales demos.',
    tags: ['OpenAI API', 'MLflow', 'Python'],
    link: null,
  },
  {
    id: 17,
    category: 'Product / PM',
    title: 'HostReady by Home Depot',
    metric: '$228.9B STR market · Blue Ocean strategy',
    description:
      'Designed a turnkey modular housing venture for Airbnb hosts scoring 10/10 on Blue Ocean axes where all incumbents scored 1–4. Identified 5 pilot markets with occupancy data and full Porter\'s Five Forces analysis.',
    tags: ['Blue Ocean Strategy', 'Market Sizing', 'Venture Design'],
    link: null,
  },
  {
    id: 18,
    category: 'Product / PM',
    title: 'Cursor AI — Product & Market Analysis',
    metric: 'Microsoft consulting engagement · AI dev tools',
    description:
      'Delivered complete strategic analysis of Cursor AI\'s product positioning, business model, and competitive dynamics vs. GitHub Copilot — directly informing Microsoft\'s perspective on the AI developer tooling landscape.',
    tags: ['Product Strategy', 'Competitive Analysis', 'GenAI'],
    link: null,
  },
  {
    id: 19,
    category: 'Product / PM',
    title: 'Royal Parker Spruce — Post-Merger Integration',
    metric: '12-week integration roadmap · 2 law firms',
    description:
      'Diagnosed 4 operational pain points across a law firm merger, evaluated Smokeball vs. Clio across 8 dimensions, designed a 12-week integration roadmap — pivoted recommendation live when client changed direction during final presentation.',
    tags: ['Operations Strategy', 'Legal Tech', 'PMI Consulting'],
    link: null,
  },

  // FINANCE / M&A
  {
    id: 20,
    category: 'Finance / M&A',
    title: 'Disney × Mattel — $16.6B M&A Analysis',
    metric: '$16.6B bid · $13.4B synergy PV · WACC 6.10%',
    description:
      'Full buy-side M&A analysis: standalone DCF, 9-company trading comps, synergy model across bear/base/bull scenarios, football field valuation, and deal structure with bidding strategy and risk matrix.',
    tags: ['DCF', 'Financial Modeling', 'M&A'],
    link: null,
  },
  {
    id: 21,
    category: 'Finance / M&A',
    title: 'Perplexity × Chrome — $34.5B Regulatory M&A',
    metric: '$34.5B · Regulatory M&A framework',
    description:
      'Analyzed Perplexity\'s Chrome bid as a conditional regulatory gambit — introduced "Regulatory M&A" as a distinct deal category. Argued the bid is a signaling move with asymmetric upside regardless of whether the divestiture is ordered.',
    tags: ['M&A Strategy', 'Antitrust', 'AI Industry'],
    link: null,
  },
  {
    id: 22,
    category: 'Finance / M&A',
    title: 'Shutterstock M&A — Foster Case Competition',
    metric: '1 week · DCF + synergy model + board pitch',
    description:
      'Built complete M&A pitch for Shutterstock in one week — acquirer thesis, DCF justifying ~$31/share, synergy model, STP marketing strategy, and 25-minute board presentation to senior alumni judges.',
    tags: ['DCF', 'Bloomberg', 'FactSet'],
    link: null,
  },
  {
    id: 23,
    category: 'Finance / M&A',
    title: 'Chorus — 5-Year Financial Model',
    metric: 'Seed-stage VC pitch · prediction market fund',
    description:
      'Built a 5-year financial model for Chorus as a seed-stage fund — revenue model (management + performance fees), AUM trajectory, operating cost structure, and sensitivity analysis across market regimes with full LP pitch rigor.',
    tags: ['Excel', 'Financial Modeling', 'Fund Strategy'],
    link: null,
  },
  {
    id: 24,
    category: 'Finance / M&A',
    title: 'Data Science Salary Regression',
    metric: 'Regression analysis · salary drivers',
    description:
      'Built a regression model identifying key drivers of data science compensation — analyzed company size premiums, experience level effects, and remote work impact with EDA visualizations and word cloud analysis.',
    tags: ['Python', 'Regression', 'Big Data Analytics'],
    link: null,
  },
  {
    id: 25,
    category: 'Finance / M&A',
    title: 'Saint Bread — Lean Operations Analysis',
    metric: '24→10 min wait time · bottleneck proven',
    description:
      'Applied queuing theory to mathematically prove the kitchen grill — not the cashier — was Saint Bread\'s bottleneck. Designed 3 tiered solutions cutting peak wait from 24 to 10 minutes using EOQ/Newsvendor inventory models.',
    tags: ['Queuing Theory', 'Lean Ops', 'EOQ'],
    link: null,
  },
]

export default projects
