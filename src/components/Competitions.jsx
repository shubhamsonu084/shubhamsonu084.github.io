import competitions from '../data/competitions'

export default function Competitions() {
  return (
    <section className="section section-alt" id="competitions">
      <div className="container">
        <p className="section-label reveal">Recognition</p>
        <h2 className="section-title reveal reveal-delay-1">
          Competitions &amp; <span className="gradient-text">Awards</span>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2" style={{ marginBottom: '3rem' }}>
          Putting ideas on the line and winning.
        </p>

        <div className="competitions-grid">
          {competitions.map((comp, i) => (
            <div key={comp.id} className={`glass-card competition-card reveal reveal-delay-${Math.min(i + 1, 5)}`}>
              <div className={`competition-result ${comp.result.toLowerCase()}`}>
                <span>{comp.icon}</span>
                {comp.result}
              </div>
              <h3 className="competition-title">{comp.title}</h3>
              <p className="competition-org">{comp.organizer} · {comp.year}</p>
              <p className="competition-desc">{comp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
