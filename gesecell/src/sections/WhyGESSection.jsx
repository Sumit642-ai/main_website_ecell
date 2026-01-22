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
              3000+ attendees, 80+ speakers/investors, 3000+ startups nationwide
            </li>
            <li>
              Speaker sessions, Professors' Meet-up, inter-college collaborations & Intern Carnival
            </li>
            <li>
              Rs 25L+ prize pool, Rs 3Cr+ enabled funding through competitions
            </li>
          </ul>
        </article>

        <article className="why-ges-card">
          <span className="why-ges-pill">For Startups</span>
          <h3 className="why-ges-card-title">
            Empowering early-stage ventures to scale
          </h3>
          <p className="why-ges-card-text">
            Strategic mentorship, elite talent acquisition, and high-stakes exposure for ambitious founders.
          </p>
          <ul className="why-ges-list">
            <li>
              Recruit top talent via Intern Carnival from IIT Kharagpur & premier institutions
            </li>
            <li>
              Validate your business model in high-impact competitions
            </li>
            <li>
              80+ investors for mentorship, validation & strategic partnerships
            </li>
            <li>
              Engage with seasoned founders on scaling & market trends
            </li>
            <li>
              Showcase to 3000+ attendees including collaborators & early adopters
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
