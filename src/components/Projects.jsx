import { useState, useMemo } from 'react'
import projects from '../data/projects'

const FILTERS = ['All', 'AI / Built', 'ML / Data', 'Product / PM', 'Finance / M&A']

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
)

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => active === 'All' ? projects : projects.filter((p) => p.category === active),
    [active]
  )

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <p className="section-label reveal">Work</p>
        <h2 className="section-title reveal reveal-delay-1">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2" style={{ marginBottom: '2rem' }}>
          A selection of things I've built — spanning AI products, ML systems, product strategy, and financial analysis.
        </p>

        {/* Filter bar */}
        <div className="projects-filter-bar reveal reveal-delay-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={active === f ? 'projects-filter-btn projects-filter-btn--active' : 'projects-filter-btn'}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid" key={active}>
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="glass-card project-card project-card--new"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {/* Metric badge */}
              <div className="project-metric">{project.metric}</div>

              {/* Title */}
              <h3 className="project-title">{project.title}</h3>

              {/* Description */}
              <p className="project-desc">{project.description}</p>

              {/* Tags */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  {project.link.label}
                  <ExternalIcon />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
