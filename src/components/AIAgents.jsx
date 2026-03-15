import agents from '../data/agents'

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
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

              {agent.status === 'live' && agent.github && (
                <div className="agent-actions">
                  <a
                    href={agent.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{ fontSize: '0.82rem', padding: '8px 16px' }}
                  >
                    <GithubIcon />
                    View Source
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
