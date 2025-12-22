import React, { useState } from 'react';
import RegistrationSun from './RegistrationSun';

export default function RegistrationSection() {
  const [activeTab, setActiveTab] = useState('student');
  const [step, setStep] = useState(1);

  const roles = [
    { id: 'student', label: 'Student', icon: '' },
    { id: 'professor', label: 'Professor', icon: '' },
    { id: 'startup', label: 'Startup', icon: '' },
  ];

  return (
    <section className="registration-section">
      {/* Left Side - Half Sun */}
      <div className="registration-sun-side">
        <div className="registration-sun-container">
          <RegistrationSun />
        </div>
        <div className="registration-sun-overlay">
          <div className="registration-pill">Odyssey of Opulence</div>
          <h2 className="registration-sun-title">
            Step into the<br />Summit Orbit
          </h2>
          <p className="registration-sun-subtitle">
            Unlock priority seats for workshops, investor connects, and startup showcases.
          </p>

          <div className="registration-sun-stats">
            <div className="registration-sun-stat">
              <span className="stat-value">10K+</span>
              <span className="stat-label">Attendees</span>
            </div>
            <div className="registration-sun-stat">
              <span className="stat-value">120+</span>
              <span className="stat-label">Speakers</span>
            </div>
            <div className="registration-sun-stat">
              <span className="stat-value">48 hrs</span>
              <span className="stat-label">Non-stop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="registration-form-side">
        <div className="registration-form-container">
          <div className="registration-form-header">
            <div className="registration-badge">Limited priority slots</div>
            <h3 className="registration-form-title">Claim your summit pass</h3>
            <p className="registration-form-subtitle">Choose your track and tell us how to tailor your experience.</p>
          </div>

          <div className="registration-steps">
            {[1, 2].map((s) => (
              <div key={s} className={`registration-step ${step === s ? 'active' : ''}`}>
                <span className="registration-step-dot" />
                <span className="registration-step-label">{s === 1 ? 'Basics' : 'Goals'}</span>
              </div>
            ))}
          </div>

          {/* Role Selector */}
          <div className="registration-role-selector">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                className={`registration-role-btn ${activeTab === role.id ? 'active' : ''}`}
                onClick={() => setActiveTab(role.id)}
              >
                <span className="registration-role-icon">{role.icon}</span>
                <span className="registration-role-label">{role.label}</span>
              </button>
            ))}
          </div>

          {/* Form Fields */}
          <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <>
                <div className="registration-form-grid">
                  <div className="registration-field">
                    <label className="registration-label">First Name</label>
                    <input type="text" className="registration-input" placeholder="John" />
                  </div>
                  <div className="registration-field">
                    <label className="registration-label">Last Name</label>
                    <input type="text" className="registration-input" placeholder="Doe" />
                  </div>
                </div>

                <div className="registration-field">
                  <label className="registration-label">Email Address</label>
                  <input type="email" className="registration-input" placeholder="john@example.com" />
                </div>

                <div className="registration-field">
                  <label className="registration-label">Phone Number</label>
                  <input type="tel" className="registration-input" placeholder="+91 98765 43210" />
                </div>

                <button type="button" className="registration-submit-btn primary-btn" onClick={() => setStep(2)}>
                  <span>Next: goals</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {step === 2 && (
              <>
                {activeTab === 'student' && (
                  <div className="registration-field">
                    <label className="registration-label">University / College</label>
                    <input type="text" className="registration-input" placeholder="IIT Kharagpur" />
                  </div>
                )}

                {activeTab === 'professor' && (
                  <div className="registration-field">
                    <label className="registration-label">Department / Institution</label>
                    <input type="text" className="registration-input" placeholder="Department of Computer Science" />
                  </div>
                )}

                {activeTab === 'startup' && (
                  <div className="registration-field">
                    <label className="registration-label">Startup Name</label>
                    <input type="text" className="registration-input" placeholder="Your Startup Inc." />
                  </div>
                )}

                <div className="registration-field">
                  <label className="registration-label">What do you want to achieve?</label>
                  <textarea className="registration-input registration-textarea" rows="3" placeholder="Networking with investors, showcasing product, hiring interns..." />
                </div>

                <div className="registration-field registration-checkbox-row">
                  <label className="registration-checkbox">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-custom" />
                    <span className="checkbox-label">Keep me posted about speaker drops and masterclasses.</span>
                  </label>
                </div>

                <div className="registration-actions">
                  <button type="button" className="registration-secondary-btn" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button type="submit" className="registration-submit-btn primary-btn">
                    <span>Register as {roles.find(r => r.id === activeTab)?.label}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <p className="registration-footnote">By registering you agree to our code of conduct and consent to receive event updates.</p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
