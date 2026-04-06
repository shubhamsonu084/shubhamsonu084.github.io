import agents from '../data/agents'

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
)

export default function AIAgents() {
  return (
    <section className="section ai-agents-section" id="ai-agents">
      <div className="container">
        <p className="section-label reveal" style={{ color: 'var(--accent-purple-2)' }}>Autonomous Systems</p>
        <h2 className="section-title reveal reveal-delay-1">
          AI <span style={{ background: 'linear-gradient(135deg, #a855f7, #00c6ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Agents</span>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2" style={{ marginBottom: '3rem' }}>
          Autonomous agents I've built — going beyond chatbots to agentic workflows that get things done.
        </p>

        <div className="agents-grid">
          {agents.map((agent, i) => (
            <div
              key={agent.id}
              className={`agent-card ${agent.status === 'soon' ? 'soon' : ''} reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div className={`agent-status ${agent.status === 'live' ? 'live' : 'coming-soon'}`}>
                {agent.status === 'live' ? 'Live' : 'Coming Soon'}
              </div>

              {/* Decorative circuit pattern for the futuristic feel */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 120,
                height: 120,
                opacity: 0.04,
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='20' r='8' stroke='%23a855f7' stroke-width='1.5'/%3E%3Cline x1='100' y1='28' x2='100' y2='60' stroke='%23a855f7' stroke-width='1.5'/%3E%3Cline x1='100' y1='60' x2='70' y2='60' stroke='%23a855f7' stroke-width='1.5'/%3E%3Ccircle cx='70' cy='60' r='5' stroke='%23a855f7' stroke-width='1.5'/%3E%3Cline x1='70' y1='65' x2='70' y2='90' stroke='%23a855f7' stroke-width='1.5'/%3E%3C/svg%3E")`,
              }} />

              <h3 className="agent-title">{agent.title}</h3>
              <p className="agent-desc">{agent.description}</p>

              <div className="agent-tags">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`tag ${tag === 'Coming Soon' ? 'coming-soon' : 'purple'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {agent.status === 'live' && agent.demo && (
                <div className="agent-actions">
                  <a
                    href={agent.demo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{ fontSize: '0.82rem', padding: '8px 16px' }}
                  >
                    <ExternalIcon />
                    {agent.demo.label}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
