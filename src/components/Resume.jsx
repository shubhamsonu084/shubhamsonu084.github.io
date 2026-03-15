export default function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="container">
        <p className="section-label reveal">Resume</p>
        <h2 className="section-title reveal reveal-delay-1">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2">
          Full background — experience, education, skills, and achievements in one place.
        </p>

        <div className="resume-preview glass-card reveal reveal-delay-3" style={{ marginTop: '3rem' }}>
          <iframe
            src="/Resume_Shubham_Sonu.pdf"
            title="Shubham Sonu Resume"
          />
        </div>

        <div className="resume-actions reveal reveal-delay-4">
          <a
            href="/Resume_Shubham_Sonu.pdf"
            download="Resume_Shubham_Sonu.pdf"
            className="btn-primary"
          >
            <span>Download Resume</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </a>
          <a
            href="/Resume_Shubham_Sonu.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            Open in New Tab
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
