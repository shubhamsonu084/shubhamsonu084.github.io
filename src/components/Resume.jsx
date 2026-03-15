import { useState, useEffect } from 'react'

export default function Resume() {
  const [pdfReady, setPdfReady] = useState(null) // null = checking, true = found, false = missing

  useEffect(() => {
    fetch('/Resume_Shubham_Sonu.pdf', { method: 'HEAD' })
      .then((res) => setPdfReady(res.ok))
      .catch(() => setPdfReady(false))
  }, [])

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
          {pdfReady === true && (
            <iframe src="/Resume_Shubham_Sonu.pdf" title="Shubham Sonu Resume" />
          )}
          {pdfReady === false && (
            <div style={{
              height: 320,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              color: 'var(--text-muted)',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 4 }}>PDF not uploaded yet</p>
                <p style={{ fontSize: '0.85rem' }}>
                  Drop <code style={{ background: 'var(--bg-secondary)', padding: '2px 6px', borderRadius: 4, fontSize: '0.8rem' }}>Resume_Shubham_Sonu.pdf</code> into the <code style={{ background: 'var(--bg-secondary)', padding: '2px 6px', borderRadius: 4, fontSize: '0.8rem' }}>public/</code> folder
                </p>
              </div>
            </div>
          )}
          {pdfReady === null && (
            <div style={{ height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              Loading…
            </div>
          )}
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
