const SKILLS = [
  { label: 'AI / LLMs', emoji: '🤖' },
  { label: 'Product Strategy', emoji: '🎯' },
  { label: 'Python', emoji: '🐍' },
  { label: 'AWS', emoji: '☁️' },
  { label: 'SQL', emoji: '🗄️' },
  { label: 'Machine Learning', emoji: '🧠' },
  { label: 'Figma', emoji: '🎨' },
  { label: 'Finance', emoji: '📊' },
  { label: 'System Design', emoji: '⚙️' },
  { label: 'React', emoji: '⚛️' },
  { label: 'Claude API', emoji: '✨' },
  { label: 'GTM Strategy', emoji: '🚀' },
]

const STATS = [
  { value: 'GMAT 740', label: '97th Percentile' },
  { value: '5+', label: 'Years in Tech' },
  { value: 'IIT KGP', label: 'Top 3% of Class' },
  { value: 'Dean\'s', label: 'Merit Scholar' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left — Bio */}
          <div>
            <p className="section-label reveal">About Me</p>
            <h2 className="section-title reveal reveal-delay-1">
              Business meets<br />
              <span className="gradient-text">Technology</span>
            </h2>

            <p className="about-bio reveal reveal-delay-2">
              MBA Candidate at{' '}
              <strong>UW Foster School of Business (STEM)</strong>, passionate about
              building AI-powered products at the intersection of business and technology.
              Previously <strong>Tech Lead at TCG Digital</strong>, and interned at{' '}
              <strong>AWS</strong> and <strong>Microsoft</strong>.
            </p>
            <p className="about-bio reveal reveal-delay-3" style={{ marginTop: '-1rem' }}>
              <strong>GMAT 740 (97th percentile)</strong> · Dean's Merit Scholar ·
              IIT Kharagpur Alum. Passionate about building products that scale and
              decisions grounded in data.
            </p>

            <div className="reveal reveal-delay-4">
              <p className="skills-heading" style={{ marginTop: '1.5rem' }}>Skills &amp; Tools</p>
              <div className="skills-grid">
                {SKILLS.map((s) => (
                  <span key={s.label} className="skill-tag">
                    <span>{s.emoji}</span>
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Photo + Stats */}
          <div>
            <div className="about-photo-wrap reveal reveal-delay-1">
              <img
                src="/profile.jpg"
                alt="Shubham Sonu"
                className="about-photo"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
              <div className="about-photo-placeholder" style={{ display: 'none' }}>SS</div>
            </div>

            <div className="about-stats reveal reveal-delay-2">
              {STATS.map((s) => (
                <div key={s.label} className="glass-card stat-card">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
