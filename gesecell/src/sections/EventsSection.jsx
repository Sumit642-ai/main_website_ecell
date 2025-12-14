import React, { useMemo } from 'react';

export default function EventsSection() {
  const events = useMemo(
    () => [
      { title: 'Leadership Keynote', subtitle: 'Main stage', cta: 'Register' },
      { title: 'Tech Frontier Panel', subtitle: 'Expert panel', cta: 'Register' },
      { title: 'Tech Frontier Panel', subtitle: 'Deep dive', cta: 'Register' },
      { title: 'Galaxy Keynote', subtitle: 'Special address', cta: 'Register' },
    ],
    [],
  );

  return (
    <section id="events">
      <div className="section-title">Events</div>
      <div className="grid-4">
        {events.map((it, idx) => (
          <div key={`${it.title}-${idx}`} className="card star-bg">
            <div className="card-top">
              <div>
                <h3 className="card-title">{it.title}</h3>
                <p className="card-subtitle">{it.subtitle}</p>
              </div>
              <span className="badge">Event</span>
            </div>
            <div className="card-actions">
              <a className="primary-btn" href="#register">{it.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
