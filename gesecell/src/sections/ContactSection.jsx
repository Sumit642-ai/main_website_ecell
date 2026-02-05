import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  const contacts = useMemo(
    () => [
      {
        name: 'Satakshi Chauhan',
        role: 'Public Relations, EAD-LSM Coordinator',
        
        email: 'satakshi@ecell-iitkgp.in',
        phone: '+91 91133 76876',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      },
    ],
    [],
  );

  return (
    <section id="contact" className="contact-scene">
      {/* Back to Summit Button */}
      <Link to="/" className="contact-back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back to Summit</span>
      </Link>

      {/* Animated background elements */}
      <div className="contact-bg-grid"></div>
      <div className="contact-glow contact-glow-1"></div>
      <div className="contact-glow contact-glow-2"></div>
      <div className="contact-glow contact-glow-3"></div>
      
      {/* Floating particles */}
      <div className="contact-particles">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="contact-particle" style={{
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${15 + Math.random() * 10}s`,
            '--x': `${Math.random() * 100}%`,
            '--size': `${2 + Math.random() * 4}px`
          }}></span>
        ))}
      </div>

      <div className="contact-content">
        <div className="contact-header">
          <span className="contact-badge">Get In Touch</span>
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Connect with our team to explore partnerships, sponsorships, and collaboration opportunities
          </p>
        </div>

        <div className="contact-grid">
          {contacts.map((person, index) => (
            <article 
              key={person.email} 
              className="contact-card"
              style={{ '--index': index }}
            >
              <div className="contact-card-image">
                <div className="contact-card-overlay"></div>
              </div>
              
              <div className="contact-card-content">
                <h3 className="contact-card-name">{person.name}</h3>
                <span className="contact-card-role">{person.role}</span>
                
                
                <div className="contact-card-links">
                  <a href={`mailto:${person.email}`} className="contact-link contact-link-email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span>{person.email}</span>
                  </a>
                  <a href={`tel:${person.phone}`} className="contact-link contact-link-phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>{person.phone}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
