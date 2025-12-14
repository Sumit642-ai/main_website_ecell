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
    if (titleRef.current && subtitleRef.current) {
        tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.5
        })
        .to(subtitleRef.current, {
        opacity: 1,
        duration: 1,
        }, "-=1");

        // Continuous pulse effect for title glow
        gsap.to(titleRef.current, {
        textShadow: "0 0 20px rgba(255, 255, 255, 0.35), 0 0 40px rgba(235, 80, 2, 0.75), 0 0 60px rgba(193, 8, 1, 0.45)",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        delay: 2 // Start after initial animation
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
          <a href="#about" className="nav-link">About</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#competitions" className="nav-link">Competitions</a>
          <a href="#speakers" className="nav-link">Speakers</a>
          <a href="#sponsors" className="nav-link">Sponsors</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#register" className="nav-link">Register</a>
        </header>

        <main className="hero-section">
          <h1 ref={titleRef} className="hero-title">
            ASCENSION: THE INNOVATION CATACLYST
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            Annual Leadership Summit
          </p>
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
