import { useState } from 'react'

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const CalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const CONTACT_ITEMS = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'shubhamsonu084@gmail.com',
    href: 'mailto:shubhamsonu084@gmail.com',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shubhamsonu',
    href: 'https://www.linkedin.com/in/shubhamsonu/',
  },
  {
    icon: <GithubIcon />,
    label: 'GitHub',
    value: 'github.com/shubhamsonu084',
    href: 'https://github.com/shubhamsonu084',
  },
  {
    icon: <CalIcon />,
    label: 'Calendly',
    value: 'Schedule a meeting',
    href: 'https://calendly.com/shubhamsonu/new-meeting',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`Hi Shubham,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.location.href = `mailto:shubhamsonu084@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-label reveal">Get In Touch</p>
        <h2 className="section-title reveal reveal-delay-1">
          Say <span className="gradient-text">Hello</span>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2" style={{ marginBottom: '3rem' }}>
          Always open to interesting conversations, collaborations, and opportunities.
        </p>

        <div className="contact-grid">
          {/* Left — Info */}
          <div className="reveal">
            <div className="contact-info-items">
              {CONTACT_ITEMS.map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.label}
                    </div>
                    <div>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="What's on your mind?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
