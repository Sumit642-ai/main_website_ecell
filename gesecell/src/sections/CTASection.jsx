import React from 'react';

export default function CTASection() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-luminary">
        <p className="cta-kicker">GES 2026 • 31 JAN – 1 FEB</p>
        <h2 className="cta-headline">
          Empowering the Leaders of
          <span>Tomorrow</span>
        </h2>
        <p className="cta-subline">
          Join us to inspire innovation, foster entrepreneurship, and create a future without limits through marquee
          keynotes, hands-on workshops, intimate fireside chats, and global networking.
        </p>
        <a className="cta-button primary-btn" href="#register">
          Register <span className="cta-button-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
