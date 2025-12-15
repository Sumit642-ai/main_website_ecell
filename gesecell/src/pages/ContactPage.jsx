import React from 'react';
import ContactSection from '../sections/ContactSection';
import FooterSection from '../sections/FooterSection';
import '../LandingPage.css';
import '../Sections.css';

export default function ContactPage() {
  return (
    <div className="route-page route-page-fullscreen">
      <ContactSection />
      <FooterSection />
    </div>
  );
}
