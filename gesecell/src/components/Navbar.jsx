import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gesLogo from '../assets/ges.png';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);
  return (
    <header className={`header-nav ${navOpen ? 'nav-open' : ''}`}>
      <div className="nav-left">
        <button
          className={`mobile-nav-toggle ${navOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="nav-center">
        <Link to="/" className="nav-logo" aria-label="GES E-Cell home" onClick={closeNav}>
          <img src={gesLogo} alt="GES E-Cell logo" />
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/register" className="register-btn-nav primary-btn" onClick={closeNav}>
          REGISTER <span>→</span>
        </Link>
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

