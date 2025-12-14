import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PyramidScene from './PyramidScene';
import './LandingPage.css';
import './Sections.css';

import AboutSection from './sections/AboutSection';
import ImpactStripSection from './sections/ImpactStripSection';
import StartupEventsSection from './sections/StartupEventsSection';
import EventsSection from './sections/EventsSection';
import CompetitionsSection from './sections/CompetitionsSection';
import PastSpeakersSection from './sections/PastSpeakersSection';
import CTASection from './sections/CTASection';
import SponsorsSection from './sections/SponsorsSection';
import ContactSection from './sections/ContactSection';
import RegistrationSection from './sections/RegistrationSection';
import FooterSection from './sections/FooterSection';

const LandingPage = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

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
        <header className="header-nav">
          <div className="nav-left">
            <div className="nav-logo">GES E-CELL</div>
          </div>
          <nav className="nav-center">
            <a href="#about" className="nav-link">About</a>
            <a href="#events" className="nav-link">Events</a>
            <a href="#competitions" className="nav-link">Competitions</a>
            <a href="#speakers" className="nav-link">Speakers</a>
            <a href="#sponsors" className="nav-link">Sponsors</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="nav-right">
            <a href="https://unstop.com" target="_blank" rel="noopener noreferrer" className="register-btn-nav">Register Now</a>
          </div>
        </header>

        <main className="hero-section">
          <div ref={titleRef} className="hero-content-wrapper">
            <h1 className="hero-title-main">GLOBAL ENTREPRENEURSHIP SUMMIT</h1>
            <div className="hero-year">2026</div>
            <div className="hero-divider"></div>
            <h2 className="hero-theme">ODYSSEY OF OPULENCE</h2>
            <p className="hero-date">31st JANUARY TO 1st FEBRUARY</p>
            <a href="#register" className="hero-register-btn">
              Register Now
            </a>
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
            <SponsorsSection />
            <ContactSection />
            <RegistrationSection />
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
