import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionHeader from '../components/SectionHeader';
import '../styles/PosterSection.css';

export default function PosterSection() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const posters = [
    'ph1.png',
    'ph2.png',
    'ph3.png',
    'ph4.png',
    'ph5.png',
    'ph6.png',
    'ph7.png',
  ];

  useEffect(() => {
    if (!scrollRef.current) return;

    // Wait for images to load before calculating dimensions
    const scroll = scrollRef.current;
    const images = scroll.querySelectorAll('img');
    
    if (images.length === 0) return;

    // Use a small delay to ensure layout is calculated
    const timer = setTimeout(() => {
      const scrollWidth = scroll.scrollWidth;
      const clientWidth = scroll.clientWidth;
      const distance = scrollWidth - clientWidth;

      if (distance > 0) {
        // Animate the scroll horizontally continuously
        gsap.to(scroll, {
          x: -distance,
          duration: 25,
          ease: 'none',
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      gsap.killTweensOf(scroll);
    };
  }, []);

  return (
    <section className="poster-section" ref={containerRef}>
      <div className="poster-section-inner">
        <SectionHeader
          title="Poster Gallery"
          
        />

        <div className="poster-scroll-container">
          <div className="poster-scroll" ref={scrollRef}>
            {posters.map((poster, idx) => (
              <div key={idx} className="poster-item">
                <img
                  src={`/poster/${poster}`}
                  alt={`Poster ${idx + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
