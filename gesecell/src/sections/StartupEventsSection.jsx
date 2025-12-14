import React, { useMemo } from 'react';

export default function StartupEventsSection() {
  const startupEvents = useMemo(
    () => [
      { title: 'Pitch Orbit', subtitle: 'Founder matchmaking' },
      { title: 'Galaxy Mixer', subtitle: 'Networking night' },
      { title: 'Galaxy Mixer', subtitle: 'Industry connects' },
      { title: 'Pitch Orbit', subtitle: 'Lightning pitches' },
    ],
    [],
  );

  return (
    <section id="startup-events">
      <div className="section-title">Startup Events</div>
      <div className="grid-4">
        {startupEvents.map((it, idx) => (
          <div key={`${it.title}-${idx}`} className="card star-bg">
            <div className="card-top">
              <div>
                <h3 className="card-title">{it.title}</h3>
                <p className="card-subtitle">{it.subtitle}</p>
              </div>
              <span className="badge">Startup</span>
            </div>
            <div className="card-actions">
              <a className="secondary-btn" href="#register">Register</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
