const EXPERIENCE = [
  {
    id: 1,
    org: 'Amazon Web Services (AWS)',
    role: 'Senior PM-T Intern',
    date: 'Jun – Sep 2025',
    bullets: [
      'Designed AI/ML governance capability projected at $357M net revenue uplift and 60% increase in account penetration — informed by 25+ customer interviews and roundtables',
      'Wrote full PRFAQ, technical design doc, competitive analysis across 5 governance platforms, and Figma UI mockups',
      'Aligned 50+ stakeholders at VP level across engineering, legal, marketing, and BD — received and accepted return offer → full-time Senior PM-T starting April 2026',
    ],
  },
  {
    id: 2,
    org: 'Microsoft',
    role: 'MBA Consultant',
    date: 'Jan – Mar 2025',
    bullets: [
      'Led 5-iteration GPT-4 prompt engineering for BEAM email classification system across 10,000 real customer emails (4 intent categories, multiple languages)',
      'Diagnosed misclassification failure modes via confusion matrix analysis per iteration; delivered reusable LLM prompt optimization playbook to Microsoft ML team',
    ],
  },
  {
    id: 3,
    org: 'TCG Digital',
    role: 'Tech Lead → Senior Product Developer',
    date: '2019 – 2024',
    bullets: [
      'Defined GenAI product roadmap and led 10+ engineers to ship OpenAI-powered NLP querying on $40M enterprise analytics platform — reduced user search time by 70%, contributed to $2M+ new revenue',
      'Achieved FedRAMP certification unblocking US government market; Kubernetes reduced client infrastructure costs by $500K; Greenplum accelerated report generation by 84%',
      'Built one-click installer saving 64 man-hours per deployment; onboarded 3 new enterprise clients post-certification',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label reveal">Work History</p>
        <h2 className="section-title reveal reveal-delay-1">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2" style={{ marginBottom: '3rem' }}>
          From tech lead to PM intern — building at scale across startups and Big Tech.
        </p>

        <div className="timeline reveal reveal-delay-2">
          {EXPERIENCE.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-org">{item.org}</div>
                    <div className="timeline-role">{item.role}</div>
                  </div>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <ul className="timeline-bullets">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
