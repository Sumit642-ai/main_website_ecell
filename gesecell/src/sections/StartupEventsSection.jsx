import React, { useMemo } from 'react';

export default function StartupEventsSection() {
  const events = useMemo(
    () => [
      {
        title: 'Intern Carnival',
        desc:
          "Intern Carnival is a curated event providing startups an exciting opportunity to hire interns from a pool of talented IIT Kharagpur students and enthusiastic GES '24 participants.",
        image: 'https://placehold.co/1200x700/1a1a1a/EB5002?text=Intern+Carnival',
      },
      {
        title: 'Investor Startup Connect',
        desc:
          'Provides opportunities to startups for funding and mentoring by industry experts, with a chance to pitch to investors from varied sectors and top VCs from the country and even abroad!',
        image: 'https://placehold.co/1200x700/1a1a1a/EB5002?text=Investor+Connect',
      },
      {
        title: 'Product Expo',
        desc:
          'Showcase your innovative products in front of a vast audience comprising the tech-savvy generation of students, eminent entrepreneurs, industry leaders, and professors.',
        image: 'https://placehold.co/1200x700/1a1a1a/EB5002?text=Product+Expo',
      },
    ],
    [],
  );

  return (
    <section id="startup-events" className="startup-stack-section">
      <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        Startup Events
      </div>

      <div className="startup-stack">
        {events.map((event, idx) => (
          <div key={event.title} className="startup-stack-item" style={{ '--i': idx }}>
            <article className="startup-stack-card">
              <div className="startup-stack-media">
                <img src={event.image} alt={event.title} className="startup-stack-image" />
              </div>
              <div className="startup-stack-body">
                <h3 className="startup-stack-title">{event.title}</h3>
                <p className="startup-stack-desc">{event.desc}</p>
                <a href="#" className="startup-stack-link">
                  Read more <span className="startup-stack-arrow">→</span>
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
