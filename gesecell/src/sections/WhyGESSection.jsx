import React from 'react';
import SectionHeader from '../components/SectionHeader';

const reasons = [
  {
    label: 'Inspiration',
    title: 'Ideas that move markets',
    text: 'Keynotes, founder stories, and hands-on sessions spark the mindset shift from campus projects to scalable ventures.',
  },
  {
    label: 'Access',
    title: 'Capital and mentorship collide',
    text: 'Investors, accelerators, and domain mentors gather in one place, shortening discovery cycles for promising founders.',
  },
  {
    label: 'Network',
    title: 'Community for the long game',
    text: 'Meet peers, alumni, and industry leaders who keep collaborating well after the summit wraps.',
  },
  {
    label: 'Impact',
    title: 'Launchpad for real pilots',
    text: 'Product expos, competitions, and workshops convert ideas into pilots with real users and feedback.',
  },
];

export default function WhyGESSection() {
  return (
    <section id="why-ges" className="why-ges-section">
      <SectionHeader subtitle="Beyond a conference" title="Why GES is important?" />
      <div className="why-ges-grid">
        {reasons.map((reason) => (
          <article key={reason.title} className="why-ges-card">
            <span className="why-ges-pill">{reason.label}</span>
            <h3 className="why-ges-card-title">{reason.title}</h3>
            <p className="why-ges-card-text">{reason.text}</p>
          </article>
        ))}
      </div>
      <div className="why-ges-footer">
        <p className="why-ges-footer-text">
          GES bridges curiosity and execution — come ready to experiment, ship, and build lasting partnerships.
        </p>
      </div>
    </section>
  );
}
