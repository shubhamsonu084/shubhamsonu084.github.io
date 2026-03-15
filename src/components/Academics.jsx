const ACADEMICS = [
  {
    id: 1,
    org: 'UW Foster School of Business',
    degree: 'MBA (STEM) — Graduated 2026',
    date: '2024 – 2026',
    bullets: [
      'President — Foster Technology Club',
      "Dean's Merit Scholar | GMAT 740 (97th percentile)",
      'Focus: Product Management, AI Strategy, Corporate Finance',
      'Seattle, WA',
    ],
  },
  {
    id: 2,
    org: 'IIT Kharagpur',
    degree: 'B.Tech + M.Tech (Dual Degree)',
    date: '2014 – 2019',
    bullets: [
      'Top 3% of graduating class',
      'Student President 2017–18',
      'Department: Mechanical Engineering',
      'Kharagpur, India',
    ],
  },
]

export default function Academics() {
  return (
    <section className="section section-alt" id="academics">
      <div className="container">
        <p className="section-label reveal">Education</p>
        <h2 className="section-title reveal reveal-delay-1">
          Academic <span className="gradient-text">Journey</span>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2" style={{ marginBottom: '3rem' }}>
          Combining world-class engineering training with business leadership education.
        </p>

        <div className="timeline reveal reveal-delay-2">
          {ACADEMICS.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-org">{item.org}</div>
                    <div className="timeline-role">{item.degree}</div>
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
