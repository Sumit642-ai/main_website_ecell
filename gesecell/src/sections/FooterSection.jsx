import React, { useMemo } from 'react';
import gesLogo from '../assets/ges.png';

export default function FooterSection() {
  const navColumns = useMemo(
    () => [
      [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/#about' },
        { label: 'Competitions', href: '/#competitions' },
        { label: 'Sponsors', href: '/sponsors' },
      ],
      [
        { label: 'Events', href: '/#events' },
        { label: 'Speakers', href: '/#speakers' },
        { label: 'Contact', href: '/contact' },
        { label: 'Register', href: '/register' },
      ],
    ],
    [],
  );

  const socials = useMemo(
    () => [
      { label: 'Facebook', href: 'https://facebook.com', abbr: 'f' },
      { label: 'Instagram', href: 'https://instagram.com', abbr: 'ig' },
      { label: 'LinkedIn', href: 'https://linkedin.com', abbr: 'in' },
    ],
    [],
  );

  return (
    <footer className="footer-constellation">
      <div className="footer-constellation-glow" aria-hidden="true" />
      <div className="footer-constellation-grid">
        <div className="footer-brand">
          <div className="footer-logo" aria-label="GES E-Cell logo">
            <img src={gesLogo} alt="GES E-Cell logo" />
          </div>
          <p className="footer-tagline">Join us to inspire innovation</p>
          <form className="footer-form" onSubmit={(evt) => evt.preventDefault()}>
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <div className="footer-input-wrap">
              <span aria-hidden="true" className="footer-input-icon">✉</span>
              <input
                id="footer-email"
                type="email"
                placeholder="Your mail address"
                className="footer-input"
              />
            </div>
            <button type="submit" className="footer-submit">
              Register <span className="footer-submit-arrow">→</span>
            </button>
          </form>
        </div>

        <div className="footer-nav">
          {navColumns.map((column, idx) => (
            <div key={`footer-col-${idx}`} className="footer-nav-column">
              {column.map((link) => (
                <a key={link.label} href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-base">
        <span>© {new Date().getFullYear()} GES Entrepreneurship Cell</span>
        <div className="footer-social">
          <span className="footer-social-label">Connect with</span>
          {socials.map((social) => (
            <a key={social.label} href={social.href} className="footer-social-icon" aria-label={social.label}>
              {social.abbr}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
