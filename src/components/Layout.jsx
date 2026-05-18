import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Menu, MessageCircle, X, Youtube } from 'lucide-react'
import BrandLogo from './brand/BrandLogo'
import WhatsAppFloat from './WhatsAppFloat'
import { CONTACT_INFO, FOOTER_LINKS, NAV_LINKS, SOCIAL_LINKS, WHATSAPP_LINK } from '../data/content'

const SOCIAL_ICONS = {
  YouTube: Youtube,
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
  X,
}

function FooterLink({ link }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer">
        {link.label}
      </a>
    )
  }
  return <Link to={link.href}>{link.label}</Link>
}

export default function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isHome = location.pathname === '/'

  return (
    <div className="app-shell">
      <header
        className={`site-header ${scrolled ? 'scrolled' : ''} ${isHome ? 'site-header--hero' : ''}`}
      >
        <div className="header-inner">
          <Link to="/" className="header-logo-link" aria-label="Nav.Aura Innovation home">
            <BrandLogo variant="header-compact" />
          </Link>

          <div className="header-desktop">
            <nav className="header-nav" aria-label="Main">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  end={item.href === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="header-actions">
              <Link to="/contact" className="btn-header">
                BOOK A STRATEGY CALL
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <button type="button" className="menu-btn nav-mobile" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <button type="button" className="mobile-menu-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <X size={28} />
        </button>
        <ul className="mobile-menu-list">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link to={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn-gold mobile-menu-cta" onClick={() => setMenuOpen(false)}>
              BOOK A STRATEGY CALL
            </Link>
          </li>
          <li>
            <a
              href={WHATSAPP_LINK}
              className="mobile-menu-wa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </li>
        </ul>
      </nav>

      <Outlet />
      <WhatsAppFloat />

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Link to="/" className="footer-logo-link">
                <BrandLogo variant="footer" />
              </Link>
              <p>We grow. We build. We systemize. You scale effortlessly.</p>
              <div className="footer-contact-links">
                <a href={`mailto:${CONTACT_INFO.email}`}>
                  <Mail size={16} />
                  {CONTACT_INFO.email}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} />
                  WhatsApp {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="footer-social">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.label]
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title} className="footer-col">
                <h4>{title}</h4>
                <ul>
                  {links.map((link) => (
                    <li key={link.label}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <p>© 2026 Nav.Aura Innovation. All rights reserved.</p>
            <p className="footer-tagline">Building scalable business infrastructure, one system at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
