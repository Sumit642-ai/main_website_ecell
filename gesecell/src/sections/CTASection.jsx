import React from 'react';

export default function CTASection() {
  return (
    <section id="cta">
      <div className="section-title">CTA</div>
      <div className="cta-hero star-bg">
        <div className="cta-hero-inner" style={{ alignItems: 'center', textAlign: 'center' }}>
          <h2 className="cta-title">Register for Ascension</h2>
          <p className="cta-desc">Secure your spot for sessions, competitions, and networking.</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a className="primary-btn" href="#register">Secure Your Spot</a>
            <a className="secondary-btn" href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
