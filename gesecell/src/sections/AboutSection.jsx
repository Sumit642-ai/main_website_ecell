import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionHeader from '../components/SectionHeader';
// Import all 11 images
import about1 from '../assets/about/about1.jpg';
import about2 from '../assets/about/about2.jpg';
import about5 from '../assets/about/about5.JPG';
import about6 from '../assets/about/about6.JPG';
import about9 from '../assets/about/about9.png';
import about10 from '../assets/about/about10.png';
import about11 from '../assets/about/about11.jpg';

export default function AboutSection() {
  const sectionRef = useRef(null);
  // For slideshow state
  const [slot1Index, setSlot1Index] = React.useState(0);
  const [slot2Index, setSlot2Index] = React.useState(0);
  const [slot3Index, setSlot3Index] = React.useState(0);

  // Images for each slot
  const slot1Images = [about1, about2];
  const slot2Images = [about5, about6];
  const slot3Images = [about9, about10, about11];

  // Animation state for fade
  const [slot1Fade, setSlot1Fade] = React.useState(true);
  const [slot2Fade, setSlot2Fade] = React.useState(true);
  const [slot3Fade, setSlot3Fade] = React.useState(true);

  // Animated slideshow effect
  useEffect(() => {
    // Helper for fade sync
    function startFade(setFade, setIndex, imagesLength) {
      setFade(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % imagesLength);
        setFade(true);
      }, 400);
    }
    const timers = [];
    timers.push(setInterval(() => {
      startFade(setSlot1Fade, setSlot1Index, slot1Images.length);
    }, 2500));
    timers.push(setInterval(() => {
      startFade(setSlot2Fade, setSlot2Index, slot2Images.length);
    }, 2500));
    timers.push(setInterval(() => {
      startFade(setSlot3Fade, setSlot3Index, slot3Images.length);
    }, 2500));
    return () => timers.forEach(clearInterval);
  }, [slot1Images.length, slot2Images.length, slot3Images.length]);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.about-grid'),
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: null,
      },
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: '4rem 0', backgroundColor: '#000' }}
    >
      {/* Video Gallery */}
      <div style={{ 
        display: 'flex', 
        gap: '2rem', 
        justifyContent: 'center', 
        marginBottom: '4rem',
        padding: '0 2rem',
        flexWrap: 'wrap',
        overflow: 'visible'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '550px',
          minWidth: '350px',
          aspectRatio: '16/9',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.1)',
          overflow: 'hidden',
          position: 'relative',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <video 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              transform: 'rotate(-90deg)',
              maxWidth: '150%',
              maxHeight: '150%'
            }}
            controls
            controlsList="nodownload"
            preload="metadata"
          >
            <source src="/videos/v11.mp4" type="video/mp4" />
          </video>
        </div>
        <div style={{
          width: '100%',
          maxWidth: '550px',
          minWidth: '350px',
          aspectRatio: '16/9',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.1)',
          overflow: 'hidden',
          position: 'relative',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <video 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              transform: 'rotate(-90deg)',
              maxWidth: '150%',
              maxHeight: '150%'
            }}
            controls
            controlsList="nodownload"
            preload="metadata"
          >
            <source src="/videos/v22.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      
      <SectionHeader title="About GES" />
      <div className="about-container">
        {/* Slot 1: 2 images slideshow with fade animation */}
        <div className="about-grid">
          <div className="about-image">
            <img
              src={slot1Images[slot1Index]}
              alt={`About slot 1 image ${slot1Index + 1}`}
              style={{
                opacity: slot1Fade ? 1 : 0,
                transition: 'opacity 0.4s ease',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            />
          </div>
          <div className="about-content">
            <div className="panel-kicker" style={{ color: 'var(--palette-orange)', marginBottom: '0.5rem' }}>Fueling Ideas</div>
            <h3>About GES?</h3>
            <p>
              The <a href="https://www.gesecell.com" target="_blank" rel="noopener noreferrer" className="about-link">Global Entrepreneurship Summit (GES)</a> is IIT Kharagpur's annual international corporate summit, organized by the <a href="https://www.iitkharagpur.ac.in" target="_blank" rel="noopener noreferrer" className="about-link">Entrepreneurship Cell</a>. Since its inception in 2007, GES has become India's largest student-run entrepreneurial summit, attracting visionaries from across industries.
            </p>
          </div>
        </div>

        {/* Slot 2: 2 images slideshow with fade animation */}
        <div className="about-grid reverse">
          <div className="about-image">
            <img
              src={slot2Images[slot2Index]}
              alt={`About slot 2 image ${slot2Index + 1}`}
              style={{
                opacity: slot2Fade ? 1 : 0,
                transition: 'opacity 0.4s ease',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            />
          </div>
          <div className="about-content">
            <div className="panel-kicker" style={{ color: 'var(--palette-orange)', marginBottom: '0.5rem' }}>Connecting Leaders</div>
            <h3>A Hub for Visionaries</h3>
            <p>
              GES brings together academicians, innovative entrepreneurs, industry leaders, <a href="https://www.nassauom.org" target="_blank" rel="noopener noreferrer" className="about-link">venture capitalists</a>, and ambitious students. It's a space for sharing ideas, showcasing entrepreneurial journeys, and building connections that inspire growth.
            </p>
          </div>
        </div>

        {/* Slot 3: 3 images slideshow with fade animation */}
        <div className="about-grid">
          <div className="about-image">
            <img
              src={slot3Images[slot3Index]}
              alt={`About slot 3 image ${slot3Index + 1}`}
              style={{
                opacity: slot3Fade ? 1 : 0,
                transition: 'opacity 0.4s ease',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            />
          </div>
          <div className="about-content">
            <div className="panel-kicker" style={{ color: 'var(--palette-orange)', marginBottom: '0.5rem' }}>Shaping Tomorrow</div>
            <h3>Empowering the Future</h3>
            <p>
              With a commitment to driving <a href="#about" className="about-link">innovation</a> and fostering entrepreneurial excellence, GES empowers individuals to dream big, collaborate, and shape the future of global business and innovation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
