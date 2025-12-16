import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import PyramidScene from './PyramidScene';
import './LandingPage.css';
import './Sections.css';
import gesLogo from './assets/ges.png';

import AboutSection from './sections/AboutSection';
import ImpactStripSection from './sections/ImpactStripSection';
import StartupEventsSection from './sections/StartupEventsSection';
import EventsSection from './sections/EventsSection';
import CompetitionsSection from './sections/CompetitionsSection';
import PastSpeakersSection from './sections/PastSpeakersSection';
import CTASection from './sections/CTASection';
import FooterSection from './sections/FooterSection';

const LandingPage = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial fade in and slide up
    if (titleRef.current) {
        tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.5
        });
    }

  }, []);

  return (
    <div className="landing-page-container">
      {/* 3D Background */}
      <PyramidScene />
      
      {/* 2D Content Overlay */}
      <div className="content-overlay">
        <header className={`header-nav ${navOpen ? 'nav-open' : ''}`}>
          <div className="nav-left">
            <Link to="/" className="nav-logo" aria-label="GES E-Cell home">
              <img src={gesLogo} alt="GES E-Cell logo" />
            </Link>
          </div>

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

          <nav className="nav-center">
            <a href="#about" className="nav-link" onClick={() => setNavOpen(false)}>About</a>
            <a href="#events" className="nav-link" onClick={() => setNavOpen(false)}>Events</a>
            <a href="#competitions" className="nav-link" onClick={() => setNavOpen(false)}>Competitions</a>
            <a href="#speakers" className="nav-link" onClick={() => setNavOpen(false)}>Speakers</a>
            <Link to="/sponsors" className="nav-link" onClick={() => setNavOpen(false)}>Sponsors</Link>
            <Link to="/contact" className="nav-link" onClick={() => setNavOpen(false)}>Contact</Link>
            <div className="nav-mobile-register">
              <Link to="/register" className="register-btn-nav" onClick={() => setNavOpen(false)}>
                Register Now
              </Link>
            </div>
          </nav>

          <div className="nav-right">
            <Link to="/register" className="register-btn-nav">Register Now</Link>
          </div>
        </header>

        <main className="hero-section">
          <div ref={titleRef} className="hero-content-wrapper">
           
            <h1 className="hero-title-main">GLOBAL ENTREPRENEURSHIP SUMMIT</h1>
            <div className="hero-year">2026</div>
            <div className="hero-divider"></div>
            <h2 className="hero-theme">ODYSSEY OF OPULENCE</h2>
            <p className="hero-date">30st JANUARY TO 1st FEBRUARY</p>
            <Link to="/register" className="hero-register-btn">
              Register Now
            </Link>
          </div>
        </main>

        <div className="sections-wrap">
          <div className="sections-inner">
            <AboutSection />
            <ImpactStripSection />
            <StartupEventsSection />
            <EventsSection />
            <CompetitionsSection />
            <PastSpeakersSection />
            <CTASection />
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
