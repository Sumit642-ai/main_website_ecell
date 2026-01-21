import React from 'react';
import { Link } from 'react-router-dom';
import FooterSection from '../sections/FooterSection';
import '../LandingPage.css';
import '../Sections.css';


export default function SponsorsPage() {
  const sponsorTiers = [
    {
      title: 'Title Partner',
      size: 'xl',
      sponsors: [
        { name: 'Coming Soon', logo: null }
      ]
    },
    {
      title: 'Powered By',
      size: 'lg',
      sponsors: [
        { name: 'Coming Soon', logo: null }
      ]
    },
    {
      title: 'Co-Powered By',
      size: 'lg',
      sponsors: [
        { name: 'Coming Soon', logo: null }
      ]
    },
    {
      title: 'Associate Partner',
      size: 'md',
      sponsors: [
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null }
      ]
    },
    {
      title: 'Banking Partner',
      size: 'md',
      sponsors: [
        { name: 'Coming Soon', logo: null }
      ]
    },
    {
      title: 'Outreach Partner',
      size: 'md',
      sponsors: [
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null }
      ]
    },
    {
      title: 'Media Partner',
      size: 'md',
      sponsors: [
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null }
      ]
    },
    {
      title: 'Hospitality Partner',
      size: 'md',
      sponsors: [
        { name: 'Coming Soon', logo: null }
      ]
    },
    {
      title: 'Technology Partner',
      size: 'md',
      sponsors: [
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null }
      ]
    },
    {
      title: 'Education Partner',
      size: 'sm',
      sponsors: [
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null }
      ]
    },
    {
      title: 'Ecosystem Partner',
      size: 'sm',
      sponsors: [
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null }
      ]
    },
    {
      title: 'Community Partner',
      size: 'sm',
      sponsors: [
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null },
        { name: 'Coming Soon', logo: null }
      ]
    }
  ];

  const contacts = [
    {
      name: 'Divyansh Singh Solanki',
      role: 'Senior Manager',
      focus: 'Sponsorship & Partnerships',
      email: 'singh.divyansh@ecell-iitkgp.in',
      phone: '7869709748',
      image: './public/divyansh.jpg',
    },
    {
      name: 'Samarth Sharma',
      role: 'Senior Manager',
      focus: 'Corporate Relations',
      email: 'sharma.samarth@ecell-iitkgp.org',
      phone: '8890054499',
      image: './public/samartth.png',
    }
  ];

  return (
    <div className="sponsors-page">
      {/* Back Button */}
      <Link to="/" className="sponsors-back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back to Summit</span>
      </Link>

      {/* Background Effects */}
      <div className="sponsors-bg-grid"></div>
      <div className="sponsors-glow sponsors-glow-1"></div>
      <div className="sponsors-glow sponsors-glow-2"></div>

      {/* Hero Section */}
      <section className="sponsors-hero">
        <span className="sponsors-badge">Partners • GES 2026</span>
        <h1 className="sponsors-title">Our Sponsors</h1>
        <p className="sponsors-subtitle">
          Explore the brands, institutions, and innovation partners powering the Global Entrepreneurship Summit
        </p>
      </section>

      {/* Sponsors Grid */}
      <section className="sponsors-showcase">
        {sponsorTiers.map((tier, tierIndex) => (
          <div 
            key={tier.title} 
            className={`sponsor-tier-block sponsor-tier-${tier.size}`}
            style={{ '--tier-index': tierIndex }}
          >
            <div className="sponsor-tier-header">
              <h3 className="sponsor-tier-label">{tier.title}</h3>
              <div className="sponsor-tier-line"></div>
            </div>
            <div className={`sponsor-tier-grid sponsor-tier-grid-${tier.size}`}>
              {tier.sponsors.map((sponsor, idx) => (
                <div key={idx} className={`sponsor-logo-card sponsor-logo-${tier.size}`}>
                  {sponsor.logo ? (
                    <img src={sponsor.logo} alt={sponsor.name} />
                  ) : (
                    <span className="sponsor-placeholder">{sponsor.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section id="sponsor-contact" className="sponsors-contact-section">
        <div className="sponsors-contact-header">
          <span className="sponsors-badge">Get In Touch</span>
          <h2 className="sponsors-contact-title">Sponsorship Inquiries</h2>
          <p className="sponsors-contact-subtitle">
            Connect with our team to explore partnership opportunities
          </p>
        </div>

        <div className="sponsors-contact-grid">
          {contacts.map((person, index) => (
            <article 
              key={person.email} 
              className="sponsors-contact-card"
              style={{ '--card-index': index }}
            >
              <div className="sponsors-contact-image">
                <img src={person.image} alt={person.name} loading="lazy" />
                <div className="sponsors-contact-overlay"></div>
              </div>
              
              <div className="sponsors-contact-body">
                <h3 className="sponsors-contact-name">{person.name}</h3>
                <span className="sponsors-contact-role">{person.role}</span>
                <p className="sponsors-contact-focus">{person.focus}</p>
                
                <div className="sponsors-contact-links">
                  <a href={`mailto:${person.email}`} className="sponsors-contact-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span>{person.email}</span>
                  </a>
                  <a href={`tel:${person.phone}`} className="sponsors-contact-link">
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
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
