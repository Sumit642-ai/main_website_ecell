import React, { useMemo } from 'react';

export default function CompetitionsSection() {
  const competitions = useMemo(
    () => [
      { title: 'Ascension Pitch', subtitle: 'Startup pitching', cta: 'Apply Now' },
      { title: 'Hack the Future', subtitle: 'Build sprint', cta: 'Apply Now' },
      { title: 'Ascension Pitch', subtitle: 'Demo day', cta: 'Apply Now' },
      { title: 'Hack the Future', subtitle: 'Team challenge', cta: 'Apply Now' },
    ],
    [],
  );

  return (
    <section id="competitions">
      <div className="section-title">Competitions</div>
      <div className="grid-4">
        {competitions.map((it, idx) => (
          <div key={`${it.title}-${idx}`} className="card star-bg">
            <div className="card-top">
              <div>
                <h3 className="card-title">{it.title}</h3>
                <p className="card-subtitle">{it.subtitle}</p>
              </div>
              <span className="badge">Compete</span>
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
