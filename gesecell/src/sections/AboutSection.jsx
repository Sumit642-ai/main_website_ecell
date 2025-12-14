import React from 'react';

export default function AboutSection() {
  return (
    <section id="about">
      <div className="section-title">About Section</div>
      <div className="panel star-bg">
        <div className="panel-pad">
          <div className="panel-header">
            <div>
              <div className="panel-kicker">About</div>
              <h2 className="panel-heading">Ascension Summit</h2>
            </div>
            <span className="badge">2025</span>
          </div>
          <div className="panel-body" style={{ maxWidth: '800px' }}>
            A focused innovation summit bringing founders, builders, and leaders into one room for sharp conversations, high-signal networking, and real opportunities.
          </div>
        </div>
      </div>
    </section>
  );
}
