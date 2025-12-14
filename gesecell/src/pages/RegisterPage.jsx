import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationSection from '../sections/RegistrationSection';
import FooterSection from '../sections/FooterSection';
import '../LandingPage.css';
import '../Sections.css';

export default function RegisterPage() {
  return (
    <div className="route-page">
      <div className="route-page-hero">
        <Link to="/" className="route-back-link">← Back to Summit</Link>
        <p className="route-kicker">Secure Your Access</p>
        <h1 className="route-title">Register For GES 2026</h1>
        <p className="route-subtitle">
          Choose your track and lock your seat for Odyssey of Opulence. Students, professors, and startups can register
          now for early access to workshops, competitions, and networking with global leaders.
        </p>
      </div>

      <div className="sections-wrap route-sections">
        <div className="sections-inner">
          <RegistrationSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
