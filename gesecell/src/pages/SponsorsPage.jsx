import React from 'react';
import { Link } from 'react-router-dom';
import SponsorsSection from '../sections/SponsorsSection';
import FooterSection from '../sections/FooterSection';
import '../LandingPage.css';
import '../Sections.css';

export default function SponsorsPage() {
  return (
    <div className="route-page">
      <div className="route-page-hero">
        <Link to="/" className="route-back-link">← Back to Summit</Link>
        <p className="route-kicker">Partners • GES 2026</p>
        <h1 className="route-title">Sponsorship Showcase</h1>
        <p className="route-subtitle">
          Explore the brands, institutions, and innovation partners powering the Global Entrepreneurship Summit. Dive into
          the curated collaborations that make Odyssey of Opulence possible.
        </p>
      </div>

      <div className="sections-wrap route-sections">
        <div className="sections-inner">
          <SponsorsSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
