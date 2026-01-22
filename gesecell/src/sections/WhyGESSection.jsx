import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function WhyGESSection() {
  return (
    <section id="why-ges" className="why-ges-section">
      <SectionHeader subtitle="Beyond a conference" title="Why GES is important?" />
      <div className="why-ges-grid">
        <article className="why-ges-card">
          <span className="why-ges-pill">GES 2026</span>
          <h3 className="why-ges-card-title">
            India's largest student-led entrepreneurship summit at IIT Kharagpur
          </h3>
          <p className="why-ges-card-text">
            Bringing founders, innovators, researchers, and industry leaders together to accelerate ideas into impact.
          </p>
          <ul className="why-ges-list">
            <li>
              Massive exposure and networking: 3000+ student footfall, 60+ speakers/investors, participation from 3000+ startups nationwide.
            </li>
            <li>
              Beyond classrooms: speaker sessions, Professors' Meet-up, inter-college collaborations, and Intern Carnival (startup hiring platform).
            </li>
            <li>
              High-impact competitions and funding: Business Game, Invest-o-spective and more, with Rs 25 Lakhs+ prize pool and Rs 3Cr+ enabled funding.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
