import React, { useMemo } from 'react';

export default function StartupEventsSection() {
  const events = useMemo(
    () => [
      {
        title: 'Intern Carnival',
        desc:
          "Intern Carnival is a curated event providing startups an exciting opportunity to hire interns from a pool of talented IIT Kharagpur students and enthusiastic GES '24 participants.",
        image: 'https://placehold.co/600x350/1a1a1a/EB5002?text=Intern+Carnival',
        color: '#eb5002',
      },
      {
        title: 'Investor Startup Connect',
        desc:
          'Provides opportunities to startups for funding and mentoring by industry experts, with a chance to pitch to investors from varied sectors and top VCs from the country and even abroad!',
        image: 'https://placehold.co/600x350/1a1a1a/c10801?text=Investor+Connect',
        color: '#c10801',
      },
      {
        title: 'Product Expo',
        desc:
          'Showcase your innovative products in front of a vast audience comprising the tech-savvy generation of students, eminent entrepreneurs, industry leaders, and professors.',
        image: 'https://placehold.co/600x350/1a1a1a/dc3a3b?text=Product+Expo',
        color: '#dc3a3b',
      },
    ],
    [],
  );

  return (
    <section id="startup-events" className="scroll-stack-section">
      <div className="scroll-stack-header">
        <span className="scroll-stack-badge">For Startups</span>
        <h2 className="scroll-stack-title">Startup Events</h2>
        <p className="scroll-stack-subtitle">
          Exclusive opportunities designed to accelerate your startup journey
        </p>
      </div>

      <div className="scroll-stack-container">
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
