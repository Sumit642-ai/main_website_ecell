import React from 'react';

export default function RegistrationSection() {
  return (
    <section id="register">
      <div className="section-title">Registration Page</div>
      <div className="panel star-bg">
        <div className="panel-pad">
          <div className="panel-header">
            <div>
              <div className="panel-kicker">Registration</div>
              <h2 className="panel-heading">Register</h2>
            </div>
          </div>

          <div className="panel-body" style={{ marginBottom: '0.85rem' }}>
            Complete the form to confirm your participation.
            <div className="step-bar" aria-hidden="true">
              <div className="step active" />
              <div className="step" />
              <div className="step" />
            </div>
          </div>

          <form className="form" onSubmit={(e) => e.preventDefault()} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="panel-kicker">Personal Info</div>
            <div className="grid-2" style={{ gap: '0.75rem' }}>
              <input className="field" placeholder="First name" />
              <input className="field" placeholder="Last name" />
            </div>
            <input className="field" placeholder="Email" type="email" />
            <div className="panel-kicker" style={{ marginTop: '0.25rem' }}>Ticket Info</div>
            <input className="field" placeholder="Ticket type" />
            <button className="primary-btn" type="submit">Complete Registration</button>
          </form>
        </div>
      </div>
    </section>
  );
}
