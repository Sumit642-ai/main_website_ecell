import React, { useMemo } from 'react';

export default function PastSpeakersSection() {
  const speakers = useMemo(
    () => [
      { name: 'Jatin Purohit', role: 'Product' },
      { name: 'Arjun Pradhan', role: 'Founder' },
      { name: 'Sneha Kane', role: 'Design' },
      { name: 'John Brown', role: 'Engineering' },
      { name: 'Riya Desai', role: 'Growth' },
      { name: 'Saurav Kumar', role: 'AI' },
      { name: 'Aimee Johnson', role: 'Community' },
      { name: 'Marco Collins', role: 'Strategy' },
    ],
    [],
  );

  return (
    <section id="speakers">
      <div className="section-title">Past Speakers</div>
      <div className="speakers-grid">
        {speakers.map((sp) => {
          const initials = sp.name
            .split(' ')
            .slice(0, 2)
            .map((p) => p[0]?.toUpperCase())
            .join('');

          return (
            <div key={sp.name} className="speaker">
              <div className="avatar">{initials}</div>
              <div>
                <p className="speaker-name">{sp.name}</p>
                <p className="speaker-role">{sp.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
