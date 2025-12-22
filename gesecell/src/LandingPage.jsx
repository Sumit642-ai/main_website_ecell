import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './LandingPage.css';
import './Sections.css';
import gesLogo from './assets/ges.png';

import AboutSection from './sections/AboutSection';
import ImpactStripSection from './sections/ImpactStripSection';
import StartupEventsSection from './sections/StartupEventsSection';
import EventsSection from './sections/EventsSection';
import CompetitionsSection from './sections/CompetitionsSection';
import PastSpeakersSection from './sections/PastSpeakersSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';
import FooterSection from './sections/FooterSection';

const LandingPage = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleTimeUpdate = () => {
        if (video.currentTime >= 2) {
          video.currentTime = 0;
          video.play().catch(e => console.log("Video play error:", e));
        }
      };
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial fade in and slide up
    if (titleRef.current) {
        // Set initial visibility to prevent flash of invisible content if GSAP fails or delays
        titleRef.current.style.opacity = '1';
        
        // tl.fromTo(titleRef.current, 
        //   { opacity: 0, y: 30 },
        //   { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
        // );
    }

  }, []);

  return (
    <div className="landing-page-container">
      {/* Fixed Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/earth.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* 2D Content Overlay */}
      <div className="content-overlay">
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
            <Link to="/" className="nav-logo" aria-label="GES E-Cell home">
              <img src={gesLogo} alt="GES E-Cell logo" />
            </Link>
          </div>

          <div className="nav-right">
            <Link to="/register" className="register-btn-nav">Register Now</Link>
          </div>

          <nav className={`main-nav-menu ${navOpen ? 'active' : ''}`}>
            <a href="#about" className="nav-link" onClick={() => setNavOpen(false)}>About</a>
            <a href="#events" className="nav-link" onClick={() => setNavOpen(false)}>Events</a>
            <a href="#competitions" className="nav-link" onClick={() => setNavOpen(false)}>Competitions</a>
            <a href="#speakers" className="nav-link" onClick={() => setNavOpen(false)}>Speakers</a>
            <Link to="/sponsors" className="nav-link" onClick={() => setNavOpen(false)}>Sponsors</Link>
            <Link to="/contact" className="nav-link" onClick={() => setNavOpen(false)}>Contact</Link>
          </nav>
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
            <TestimonialsSection />
            <CTASection />
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
