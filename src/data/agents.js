const agents = [
  {
    id: 1,
    title: 'Proposal Generator Agent',
    description:
      'An agentic workflow powered by Claude API. User fills a short intake form and the agent autonomously researches context, structures sections, and outputs a polished business proposal ready for review.',
    tags: ['Claude API', 'Agentic AI', 'React', 'Python'],
    status: 'live',
    github: null,
    demo: { url: 'https://proposal-generator-delta-black.vercel.app', label: 'Live Demo' },
  },
  {
    id: 2,
    title: 'Agentic Inventory Restock System',
    description:
      'A fully agentic Claude-powered system equipped with 3 custom tools — check_inventory(), calculate_stockout_risk(), and generate_purchase_order(). Autonomously triggered 7 purchase orders via 31 tool calls in one run, protecting 80% of $264K in at-risk revenue. Zero hard-coded routing rules — pure AI reasoning throughout.',
    tags: ['Claude API', 'Agentic AI', 'Python'],
    status: 'live',
    github: null,
    demo: { url: 'https://colab.research.google.com/drive/1qLzfAMFY4CovNLSJLbqiSbGS0GALOym5?usp=sharing', label: 'View Notebook' },
  },
]

export default agents
