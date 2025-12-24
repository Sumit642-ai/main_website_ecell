import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import aboutHero from '../assets/about/ges2.png';
import aboutLeaders from '../assets/about/ges3.png';
import aboutFuture from '../assets/about/ges4.jpg';

export default function AboutSection() {
  const sectionRef = useRef(null);

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
      <span className="scroll-stack-badge">About GES</span>
      
      <div className="about-container">
        
        {/* Block 1 */}
        <div className="about-grid">
           <div className="about-image">
             <img src={aboutHero} alt="Attendees gathered at GES" />
           </div>
          <div className="about-content">
            <div className="panel-kicker" style={{ color: 'var(--palette-orange)', marginBottom: '0.5rem' }}>Fueling Ideas</div>
            <h3>About GES?</h3>
            <p>
              The Global Entrepreneurship Summit (GES) is IIT Kharagpur's annual international corporate summit, organized by the Entrepreneurship Cell. Since its inception in 2007, GES has become India's largest student-run entrepreneurial summit, attracting visionaries from across industries.
            </p>
          </div>
        </div>

        {/* Block 2 - Reverse */}
        <div className="about-grid reverse">
           <div className="about-image">
             <img src={aboutLeaders} alt="Speakers connecting with participants" />
           </div>
          <div className="about-content">
            <div className="panel-kicker" style={{ color: 'var(--palette-orange)', marginBottom: '0.5rem' }}>Connecting Leaders</div>
            <h3>A Hub for Visionaries</h3>
            <p>
              GES brings together academicians, innovative entrepreneurs, industry leaders, venture capitalists, and ambitious students. It’s a space for sharing ideas, showcasing entrepreneurial journeys, and building connections that inspire growth.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="about-grid">
           <div className="about-image">
             <img src={aboutFuture} alt="Stage lighting at GES" />
           </div>
          <div className="about-content">
            <div className="panel-kicker" style={{ color: 'var(--palette-orange)', marginBottom: '0.5rem' }}>Shaping Tomorrow</div>
            <h3>Empowering the Future</h3>
            <p>
              With a commitment to driving innovation and fostering entrepreneurial excellence, GES empowers individuals to dream big, collaborate, and shape the future of global business and innovation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
