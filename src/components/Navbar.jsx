import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Agents', href: '#ai-agents' },
  { label: 'Competitions', href: '#competitions' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
  { label: 'Schedule a Chat', href: '#schedule', cta: true },
]

const SECTION_IDS = [
  'about', 'academics', 'experience', 'projects',
  'ai-agents', 'competitions', 'resume', 'schedule', 'contact',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const isActive = (href) => {
    const id = href.replace('#', '')
    return activeSection === id
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo" onClick={(e) => handleLinkClick(e, '#')}>
            SS
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${isActive(link.href) ? 'active' : ''}${link.cta ? ' nav-cta' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <ul className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={isActive(link.href) ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
