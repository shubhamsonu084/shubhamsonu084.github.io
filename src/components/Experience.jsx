const EXPERIENCE = [
  {
    id: 1,
    org: 'Amazon Web Services (AWS)',
    role: 'Senior PM-T Intern',
    date: 'Jun – Sep 2025',
    bullets: [
      'Product management internship on a technical product team',
      'Working at the intersection of cloud infrastructure and developer tooling',
      'Seattle, WA',
    ],
  },
  {
    id: 2,
    org: 'Microsoft',
    role: 'MBA Consultant',
    date: 'Jan – Mar 2025',
    bullets: [
      'Consulting engagement through Foster MBA program',
      'Delivered strategic recommendations on AI product opportunities',
      'Redmond, WA',
    ],
  },
  {
    id: 3,
    org: 'TCG Digital',
    role: 'Tech Lead, Machine Learning',
    date: '2019 – 2024',
    bullets: [
      'Led a team of 8 engineers building ML-powered data products for enterprise clients',
      'Architected end-to-end data pipelines processing 10M+ records daily',
      'Drove $2M+ in new revenue through technical solutioning and client demos',
      'Stack: Python, AWS, Spark, TensorFlow, SQL',
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
