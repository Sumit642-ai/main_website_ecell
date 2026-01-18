import React from 'react';
import { Link } from 'react-router-dom';
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
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <iframe 
          src="https://clients.forms.meraevents.ai/customForms/ges-2026" 
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '12px'
          }}
          title="GES 2026 Registration"
        />
      </div>
    </div>
  );
}
