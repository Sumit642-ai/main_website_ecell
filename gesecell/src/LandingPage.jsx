import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './LandingPage.css';
import './Sections.css';

import AboutSection from './sections/AboutSection';
import WhyGESSection from './sections/WhyGESSection';
import ImpactStripSection from './sections/ImpactStripSection';
import StartupEventsSection from './sections/StartupEventsSection';
import EventsSection from './sections/EventsSection';
import CompetitionsSection from './sections/CompetitionsSection';
import PastSpeakersSection from './sections/PastSpeakersSection';
import PosterSection from './sections/PosterSection';
import TestimonialsSection from './sections/TestimonialsSection';
import VideoSection from './sections/VideoSection';
import CTASection from './sections/CTASection';
import FooterSection from './sections/FooterSection';

const LandingPage = () => {
  const titleRef = useRef(null);
  const videoRef = useRef(null);

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
        <video
          ref={videoRef}
          className="hero-video-desktop"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/earth.mp4" type="video/mp4" />
        </video>
        <video
          className="hero-video-mobile"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/videos/phoneweb.webm" type="video/webm" />
        </video>
      </div>
      
      {/* 2D Content Overlay */}
      <div className="content-overlay">
        <main className="hero-section">
          <div ref={titleRef} className="hero-content-wrapper">
           
            <h1 className="hero-title-main">GLOBAL ENTREPRENEURSHIP SUMMIT 2026</h1>
         
            <div className="hero-divider"></div>
            <h2 className="hero-theme">ODYSSEY OF OPULENCE</h2>
            <p className="hero-date">30st JANUARY TO 1st FEBRUARY</p>
            <a href="https://clients.forms.meraevents.ai/customForms/ges-2026" className="hero-register-btn primary-btn" target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </div>
        </main>

        <VideoSection />
        
        <PosterSection />

        <div className="section-transition" />
        <div className="sections-wrap">
          <div className="sections-inner">
            <AboutSection />
            <WhyGESSection />
            <ImpactStripSection />
            <StartupEventsSection />
            <CompetitionsSection />
            <EventsSection />
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
