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
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/ecell.iitkgp',
        icon: (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 8h2V4h-2c-2.2 0-4 1.8-4 4v2H8v4h3v6h4v-6h3l1-4h-4V8c0-.6.4-1 1-1z"/>
          </svg>
        ),
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/ecell_iitkgp/',
        icon: (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17" cy="7" r="1.1"/>
          </svg>
        ),
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/entrepreneurship-cell-iit-kharagpur/',
        icon: (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 9h3v10H5zM6.5 5.5A1.75 1.75 0 1 1 6.5 2a1.75 1.75 0 0 1 0 3.5zM10 9h3v1.6c.4-.8 1.3-1.6 2.8-1.6C18.8 9 20 10.3 20 12.7V19h-3v-5.3c0-1.3-.5-2-1.6-2-1 0-1.7.7-1.7 2.2V19h-3z"/>
          </svg>
        ),
      },
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
            <button type="submit" className="footer-submit primary-btn">
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
            <a
              key={social.label}
              href={social.href}
              className="footer-social-icon"
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
