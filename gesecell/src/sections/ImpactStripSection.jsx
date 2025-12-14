import React, { useMemo } from 'react';

export default function ImpactStripSection() {
  const impactItems = useMemo(
    () => [
      { value: '500+', label: 'Leaders' },
      { value: '50+', label: 'Sessions' },
      { value: '$10M+', label: 'Funding' },
    ],
    [],
  );

  return (
    <section id="impact">
      <div className="section-title">Number Impact Strip</div>
      <div className="impact-strip" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {impactItems.map((it) => (
          <div key={it.label} className="impact-item">
            <div className="impact-value">{it.value}</div>
            <div className="impact-label">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
