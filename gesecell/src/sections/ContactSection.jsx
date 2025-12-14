import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="section-title">Contact Us</div>
      <div className="panel">
        <div className="panel-pad">
          <div className="panel-header">
            <div>
              <div className="panel-kicker">Contact</div>
              <h2 className="panel-heading">Get in touch</h2>
            </div>
          </div>

          <form className="form" onSubmit={(e) => e.preventDefault()} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <input className="field" placeholder="Name" />
            <input className="field" placeholder="Email" type="email" />
            <textarea className="field textarea" placeholder="Message" />
            <button className="primary-btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
