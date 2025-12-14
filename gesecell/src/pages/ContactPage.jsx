import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../sections/ContactSection';
import FooterSection from '../sections/FooterSection';
import '../LandingPage.css';
import '../Sections.css';

export default function ContactPage() {
  return (
    <div className="route-page">
      <div className="route-page-hero">
        <Link to="/" className="route-back-link">← Back to Summit</Link>
        <p className="route-kicker">Let’s Collaborate</p>
        <h1 className="route-title">Connect With GES E-Cell</h1>
        <p className="route-subtitle">
          Have partnership ideas, speaker suggestions, or questions about registrations? Reach out to the organising team
          and we’ll get back with the next steps.
        </p>
      </div>

      <div className="sections-wrap route-sections">
        <div className="sections-inner">
          <ContactSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
