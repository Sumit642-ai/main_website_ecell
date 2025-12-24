
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gesLogo from '../assets/ges.png';

// Hamburger styles scoped to Navbar only
const hamburgerStyles = {
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '44px',
    height: '44px',
    background: '#111',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: '0',
    borderRadius: '12px',
    boxShadow: '2px 0 12px rgba(0,0,0,0.18)',
    zIndex: 200,
  },
  bar: {
    width: '28px',
    height: '4px',
    background: '#fff',
    margin: '5px 0',
    borderRadius: '2px',
    transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
  },
};

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);
  return (
    <header className={`header-nav ${navOpen ? 'nav-open' : ''}`}>
      <div className="nav-left" style={{ display: 'flex', alignItems: 'center' }}>
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
          style={hamburgerStyles.button}
        >
          <span
            style={{
              ...hamburgerStyles.bar,
              transform: navOpen ? 'translateY(10px) rotate(45deg)' : 'none',
            }}
          ></span>
          <span
            style={{
              ...hamburgerStyles.bar,
              opacity: navOpen ? 0 : 1,
            }}
          ></span>
          <span
            style={{
              ...hamburgerStyles.bar,
              transform: navOpen ? 'translateY(-10px) rotate(-45deg)' : 'none',
            }}
          ></span>
        </button>
      </div>

      <div className="nav-center">
        <Link to="/" className="nav-logo" aria-label="GES E-Cell home" onClick={closeNav}>
          <img src={gesLogo} alt="GES E-Cell logo" />
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/register" className="register-btn-nav primary-btn" onClick={closeNav}>
          REGISTER 
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

