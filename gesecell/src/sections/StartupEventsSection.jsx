import React, { useMemo, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StartupEventsSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const events = useMemo(
    () => [
      {
        title: 'Intern Carnival',
        desc:
          "Intern Carnival is a curated event providing startups an exciting opportunity to hire interns from a pool of talented IIT Kharagpur students and enthusiastic GES '24 participants.",
        image: 'https://placehold.co/1200x700/1a1a1a/EB5002?text=Intern+Carnival',
        color: '#eb5002',
      },
      {
        title: 'Investor Startup Connect',
        desc:
          'Provides opportunities to startups for funding and mentoring by industry experts, with a chance to pitch to investors from varied sectors and top VCs from the country and even abroad!',
        image: 'https://placehold.co/1200x700/1a1a1a/c10801?text=Investor+Connect',
        color: '#c10801',
      },
      {
        title: 'Product Expo',
        desc:
          'Showcase your innovative products in front of a vast audience comprising the tech-savvy generation of students, eminent entrepreneurs, industry leaders, and professors.',
        image: 'https://placehold.co/1200x700/1a1a1a/dc3a3b?text=Product+Expo',
        color: '#dc3a3b',
      },
    ],
    [],
  );

  useLayoutEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    // Get all cards from the DOM
    const cards = gsap.utils.toArray('.scroll-stack-card', container);
    
    if (cards.length === 0) return;

    // Clear any existing ScrollTriggers for these elements
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id && trigger.vars.id.startsWith('startup-card-')) {
        trigger.kill();
      }
    });

    // Create ScrollTrigger for each card (except the last one)
    cards.forEach((card, i) => {
      // Don't pin the last card - it flows normally
      if (i === cards.length - 1) return;
      
      ScrollTrigger.create({
        trigger: card,
        start: `top ${32 + (i * 50)}px`,
        end: () => {
          // End when the last card's bottom reaches the viewport bottom
          const lastCard = cards[cards.length - 1];
          const lastCardHeight = lastCard.offsetHeight;
          return `+=${lastCardHeight + 100}`;
        },
        pin: true,
        pinSpacing: false,
        id: `startup-card-${i + 1}`,
      });
    });

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.startsWith('startup-card-')) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="startup-events" className="scroll-stack-section" ref={sectionRef}>
      <div className="scroll-stack-header">
        <span className="scroll-stack-badge">For Startups</span>
        <h2 className="scroll-stack-title">Startup Events</h2>
        <p className="scroll-stack-subtitle">
          Exclusive opportunities designed to accelerate your startup journey
        </p>
      </div>

      <div className="scroll-stack-container" ref={containerRef}>
        {events.map((event, idx) => (
          <div 
            key={event.title} 
            className="scroll-stack-card"
            style={{ 
              '--card-index': idx,
              '--card-color': event.color,
              '--total-cards': events.length,
            }}
          >
            <div className="scroll-stack-card-inner">
              <div className="scroll-stack-content">
                <span className="scroll-stack-number">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="scroll-stack-card-title">{event.title}</h3>
                <p className="scroll-stack-card-desc">{event.desc}</p>
                <a href="#" className="scroll-stack-link">
                  <span>Learn More</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
              <div className="scroll-stack-visual">
                <img src={event.image} alt={event.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
