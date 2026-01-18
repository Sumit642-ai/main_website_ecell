
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gesLogo from '../assets/ges.png';
import './CrazyHamburger.css';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);
  return (
    <header className={`header-nav ${navOpen ? 'nav-open' : ''}`}>
      <div className="nav-left" style={{ display: 'flex', alignItems: 'center' }}>
        <button
          type="button"
          className={`crazy-hamburger ${navOpen ? 'active' : ''}`}
          aria-label="Open navigation menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <div className="hamburger-box">
            <span className="hamburger-line line-1"></span>
            <span className="hamburger-line line-2"></span>
            <span className="hamburger-line line-3"></span>
          </div>
          <div className="glow-effect"></div>
          <div className="ripple-effect"></div>
        </button>
      </div>

      <div className="nav-center">
        <Link to="/" className="nav-logo" aria-label="GES E-Cell home" onClick={closeNav}>
          <img src={gesLogo} alt="GES E-Cell logo" />
        </Link>
      </div>

      <div className="nav-right">
        <a href="https://clients.forms.meraevents.ai/customForms/ges-2026" className="register-btn-nav primary-btn" onClick={closeNav} target="_blank" rel="noopener noreferrer">
          REGISTER 
        </a>
      </div>

      <nav className={`main-nav-menu ${navOpen ? 'active' : ''}`}>
        <a href="#about" className="nav-link" onClick={closeNav}>
          About
        </a>
        <a href="#events" className="nav-link" onClick={closeNav}>
          Events
        </a>
        <a href="#competitions" className="nav-link" onClick={closeNav}>
          Competitions
        </a>
        <a href="#speakers" className="nav-link" onClick={closeNav}>
          Speakers
        </a>
        <Link to="/sponsors" className="nav-link" onClick={closeNav}>
          Sponsors
        </Link>
        <Link to="/contact" className="nav-link" onClick={closeNav}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;

