import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationSection from '../sections/RegistrationSection';
import '../LandingPage.css';
import '../Sections.css';

export default function RegisterPage() {
  return (
    <div className="register-page">
      <Link to="/" className="register-back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span>Back to Summit</span>
      </Link>
      <RegistrationSection />
    </div>
  );
}
