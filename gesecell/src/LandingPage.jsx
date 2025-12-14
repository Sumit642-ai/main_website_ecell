import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PyramidScene from './PyramidScene';
import './LandingPage.css';

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
          <a href="#agenda" className="nav-link active">Agenda</a>
          <a href="#partners" className="nav-link">Partners</a>
          <a href="#apply" className="nav-link">Apply Now</a>
        </header>

        <main className="hero-section">
          <h1 ref={titleRef} className="hero-title">
            ASCENSION: THE INNOVATION CATACLYST
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            Annual Leadership Summit
          </p>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
