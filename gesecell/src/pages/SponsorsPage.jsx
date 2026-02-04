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
        { name: 'Title Partner', logo: '/sponsors/titleparterner.png' }
      ]
    },
    {
      title: 'Co-Title Partner',
      size: 'lg',
      sponsors: [
        { name: 'Co-Title Partner', logo: '/sponsors/cotitilepartner.png.png' }
      ]
    },
    {
      title: 'Major Partner',
      size: 'lg',
      sponsors: [
        { name: 'Major Partner', logo: '/sponsors/majorpartner.png.png' }
      ]
    },
    {
      title: 'Strategic Partner',
      size: 'md',
      sponsors: [
        { name: 'Strategic Partner', logo: '/sponsors/strategicpartner.png.png' }
      ]
    },
    {
      title: 'Title Media Partner',
      size: 'md',
      sponsors: [
        { name: 'Title Media Partner', logo: '/sponsors/Titlemediapartner.png.png' }
      ]
    },
    {
      title: 'Product Expo Title Partner',
      size: 'md',
      sponsors: [
        { name: 'Product Expo Title Partner', logo: '/sponsors/productexpotitlepartner.png.png' }
      ]
    },
    {
      title: 'Associate Partners',
      size: 'md',
      sponsors: [
        { name: 'Associate Partners', logo: '/sponsors/associatepartners.png.png' }
      ]
    },
    {
      title: 'Media Partners',
      size: 'md',
      sponsors: [
        { name: 'Media Partners', logo: '/sponsors/mediapartners.png.png' }
      ]
    },
    {
      title: 'Corporate Partners',
      size: 'sm',
      sponsors: [
        { name: 'Corporate Partner 1', logo: '/sponsors/coorporatepartner1.png' },
        { name: 'Corporate Partner 2', logo: '/sponsors/coorporatepartners2.png' }
      ]
    },
    {
      title: 'Automobile Partners',
      size: 'sm',
      sponsors: [
        { name: 'Automobile Partner 1', logo: '/sponsors/automobilepartners1.png' },
        { name: 'Automobile Partner 2', logo: '/sponsors/automobilepartner2.png' },
        { name: 'Automobile Partner 3', logo: '/sponsors/automobilepartner3.png' }
      ]
    },
    {
      title: 'Silver Sponsors 2023',
      size: 'sm',
      sponsors: [
        { name: 'Silver Sponsors 2023', logo: '/sponsors/silversponsors2023.png.png' }
      ]
    },
    {
      title: 'Other Partners',
      size: 'sm',
      sponsors: [
        { name: 'Other Partners', logo: '/sponsors/otherpartners.png.png' }
      ]
    }
  ];
  // const sponsorTiers2026 = [
  //   {
  //     title: 'Title Partner',
  //     size: 'xl',
  //     sponsors: [
  //       { name: 'Title Partner', logo: '/sponsors/titleparterner.png' }
  //     ]
  //   },
  //   {
  //     title: 'Co-Title Partner',
  //     size: 'lg',
  //     sponsors: [
  //       { name: 'Co-Title Partner', logo: '/sponsors/cotitilepartner.png.png' }
  //     ]
  //   },
  //   {
  //     title: 'Major Partner',
  //     size: 'lg',
  //     sponsors: [
  //       { name: 'Major Partner', logo: '/sponsors/majorpartner.png.png' }
  //     ]
  //   },
  //   {
  //     title: 'Strategic Partner',
  //     size: 'md',
  //     sponsors: [
  //       { name: 'Strategic Partner', logo: '/sponsors/strategicpartner.png.png' }
  //     ]
  //   },
  //   {
  //     title: 'Title Media Partner',
  //     size: 'md',
  //     sponsors: [
  //       { name: 'Title Media Partner', logo: '/sponsors/Titlemediapartner.png.png' }
  //     ]
  //   },
  //   {
  //     title: 'Product Expo Title Partner',
  //     size: 'md',
  //     sponsors: [
  //       { name: 'Product Expo Title Partner', logo: '/sponsors/productexpotitlepartner.png.png' }
  //     ]
  //   },
  //   {
  //     title: 'Associate Partners',
  //     size: 'md',
  //     sponsors: [
  //       { name: 'Associate Partners', logo: '/sponsors/associatepartners.png.png' }
  //     ]
  //   },
  //   {
  //     title: 'Media Partners',
  //     size: 'md',
  //     sponsors: [
  //       { name: 'Media Partners', logo: '/sponsors/mediapartners.png.png' }
  //     ]
  //   },
  //   {
  //     title: 'Corporate Partners',
  //     size: 'sm',
  //     sponsors: [
  //       { name: 'Corporate Partner 1', logo: '/sponsors/coorporatepartner1.png' },
  //       { name: 'Corporate Partner 2', logo: '/sponsors/coorporatepartners2.png' }
  //     ]
  //   },
  //   {
  //     title: 'Automobile Partners',
  //     size: 'sm',
  //     sponsors: [
  //       { name: 'Automobile Partner 1', logo: '/sponsors/automobilepartners1.png' },
  //       { name: 'Automobile Partner 2', logo: '/sponsors/automobilepartner2.png' },
  //       { name: 'Automobile Partner 3', logo: '/sponsors/automobilepartner3.png' }
  //     ]
  //   },
  //   {
  //     title: 'Silver Sponsors 2023',
  //     size: 'sm',
  //     sponsors: [
  //       { name: 'Silver Sponsors 2023', logo: '/sponsors/silversponsors2023.png.png' }
  //     ]
  //   },
  //   {
  //     title: 'Other Partners',
  //     size: 'sm',
  //     sponsors: [
  //       { name: 'Other Partners', logo: '/sponsors/otherpartners.png.png' }
  //     ]
  //   }
  // ];
  const contacts = [
    {
      name: 'Divyansh Singh Solanki',
      role: 'Senior Manager',
      focus: 'Corporate and Media Relations',
      email: 'singh.divyansh@ecell-iitkgp.in',
      phone: '7869709748',
      image: './divyansh.jpg',
    },
    {
      name: 'Samarth Sharma',
      role: 'Senior Manager',
      focus: 'Corporate and Media Relations| Public Relations',
      email: 'sharma.samarth@ecell-iitkgp.in',
      phone: '8890054499',
      image: './samartth.png',
    },
    {
      name: 'Khush Duggar',
      role: 'Senior Manager',
      focus: 'Corporate and Media Relations| Social Media Marketing',
      email: 'duggar.khush@ecell-iitkgp.in',
      phone: '9922168000',
      image: './khush.jpg',
    }
  ];
  const sponsorTiers2026 = [
  {
    title: 'Title Partner',
    size: 'xl',
    sponsors: [
      { name: 'Title Media Partner', logo: '/sponsor26/Title_Media_Partner_2_2026.png' }
    ]
  },
  {
    title: 'Co-Title Partner',
    size: 'xl',
    sponsors: [
      { name: 'Co-Title Partner', logo: '/sponsor26/C0_Title_Partner_2026.png' }
    ]
  },
  {
      title: 'Title Media Partner',
      size: 'md',
      sponsors: [
        { name: 'Title Media Partner', logo: '/sponsors/Titlemediapartner.png.png' }
      ]
    },
  {
    title: 'Associate Partners',
    size: 'md',
    sponsors: [
      { name: 'Associate Partner 1', logo: '/sponsor26/Associate_Partner_1_2026.png' },
      { name: 'Associate Partner 2', logo: '/sponsor26/Associate_partner_2_2026.jpg' },
      { name: 'Associate Partner 3', logo: '/sponsor26/Associate_Partner_3_2026.jpeg' },
      { name: 'Associate Partner 4', logo: '/sponsor26/Associate_partner_4_2026.png' }
    ]
  },
  {
    title: 'Strategic Partner',
    size: 'md',
    sponsors: [
      { name: 'Strategic Partner', logo: '/sponsor26/Strategic_Partner_2026.jpg' }
    ]
  },
  {
    title: 'CAP Title Partners',
    size: 'md',
    sponsors: [
      { name: 'CAP Title Partner 1', logo: '/sponsor26/CAP_Title_Partner_1_2026.png' },
      { name: 'CAP Title Partner 2', logo: '/sponsor26/CAP_Title_Partner_2_2026.png' },
      { name: 'CAP Title Partner 3', logo: '/sponsor26/CAP_Title_Partner_3_2026.png' },
      { name: 'CAP Title Partner 4', logo: '/sponsor26/CAP_Title_Partner_4_2026.png' },
      { name: 'CAP Title Partner 5', logo: '/sponsor26/CAP_Title_Partner_5_2026.png' },
      { name: 'CAP Title Partner 6', logo: '/sponsor26/CAP_Title_Partner_6_2026.jpeg' },
      { name: 'CAP Title Partner 7', logo: '/sponsor26/CAP_Title_Partner_7_2026.jpeg' }
    ]
  },
  {
    title: 'Automobile Partners',
    size: 'md',
    sponsors: [
      { name: 'Automobile Partner', logo: '/sponsor26/Automobile_Partner_2026.png' }
    ]
  },
  {
    title: 'Corporate Partners',
    size: 'sm',
    sponsors: [
      { name: 'Corporate Partner 1', logo: '/sponsor26/Corporate_Partner_1_2026.svg' },
      { name: 'Corporate Partner 2', logo: '/sponsor26/Corporate_Partner_2_2026.png' },
      { name: 'Corporate Partner 3', logo: '/sponsor26/Corporate_Partner_3_2026.jpeg' }
    ]
  },
  {
    title: 'Accommodation Partner',
    size: 'sm',
    sponsors: [
      { name: 'Accommodation Partner', logo: '/sponsor26/Accomodation_partner_2026.PNG' }
    ]
  },
  
  {
    title: 'Merchandise Partner',
    size: 'sm',
    sponsors: [
      { name: 'Merchandise Partner', logo: '/sponsor26/Merchandise_Partner_2026.jpeg' }
    ]
  },
  {
    title: 'Ticketing Partner',
    size: 'sm',
    sponsors: [
      { name: 'Ticketing Partner', logo: '/sponsor26/Ticketing_Partner_2026.svg' }
    ]
  },
  {
    title: 'Technology Partner',
    size: 'sm',
    sponsors: [
      { name: 'Technology Partner', logo: '/sponsor26/Technology_Partner_2026.png' }
    ]
  },
  {
    title: 'Study Abroad Partners',
    size: 'sm',
    sponsors: [
      { name: 'Study Abroad Partner 2', logo: '/sponsor26/Study_Abroad_Partner_2026.jpeg' }
    ]
  },
  {
    title: 'Official Beverage Partner',
    size: 'sm',
    sponsors: [
      { name: 'Official Beverage Partner', logo: '/sponsor26/Official_Beverage_Partner_2026.png' }
    ]
  },
  {
    title: 'Entertainment Partner',
    size: 'sm',
    sponsors: [
      { name: 'Entertainment Partner', logo: '/sponsor26/Entertainment_Partner_2026.png' }
    ]
  },
  {
    title: 'Exclusive Experience Partner',
    size: 'sm',
    sponsors: [
      { name: 'Exclusive Experience Partner', logo: '/sponsor26/Klook-Logo.png' }
    ]
  },
  {
    title: 'Gaming Partner',
    size: 'sm',
    sponsors: [
      { name: 'Gaming Partner', logo: '/sponsor26/Gaming_Partner_2026.png' }
    ]
  },
  {
    title: 'Hospitality Partner',
    size: 'sm',
    sponsors: [
      { name: 'Hospitality Partner', logo: '/sponsor26/Hospitality_Partner_2026.png' }
    ]
  },
  {
    title: 'Hydration Partner',
    size: 'sm',
    sponsors: [
      { name: 'Hydration Partner', logo: '/sponsor26/Hydration_Partner_2026.png' },
      { name: 'Hydration Partner', logo: '/sponsor26/Hydration_Partner_2026_1.png' }
    ]
  },
  {
    title: 'Incubation Partner',
    size: 'sm',
    sponsors: [
      { name: 'Incubation Partner', logo: '/sponsor26/Incubation_Partner_2026.jpeg' }
    ]
  },
  {
    title: 'Knowledge Partner',
    size: 'sm',
    sponsors: [
      { name: 'Knowledge Partner', logo: '/sponsor26/Knowledge_Partner_2026.webp' }
    ]
  },
  {
    title: 'Luxury Partner',
    size: 'sm',
    sponsors: [
      { name: 'Luxury Partner', logo: '/sponsor26/Luxury_Partner_2026.jpeg' }
    ]
  },
  {
    title: 'Media Partners',
    size: 'sm',
    sponsors: [
      { name: 'Media Partner 1', logo: '/sponsor26/Media_Partner_1_2026.png' },
      { name: 'Media Partner 2', logo: '/sponsor26/Media_Partner_2_2026.jpg' },
      { name: 'Media Partner 3', logo: '/sponsor26/Media_Partner_3_2026.jpeg' },
      { name: 'Media Partner 4', logo: '/sponsor26/Media_Partner_4_2026.jpeg' },
      { name: 'Media Partner 5', logo: '/sponsor26/Media_Partner_5_2026.png' },
      { name: 'Media Partner 6', logo: '/sponsor26/Media_Partner_6_2026.jpg' },
      { name: 'Media Partner 7', logo: '/sponsor26/Media_Partner_7_2026.jpg' },
      { name: 'Media Partner 8', logo: '/sponsor26/Media_Partner_8_2026.png' },
      { name: 'Media Partner 9', logo: '/sponsor26/Media_Partner_9_2026.jpg' },
      { name: 'Media Partner 10', logo: '/sponsor26/Media_Partner_10_2026.png' },
      { name: 'Media Partner 11', logo: '/sponsor26/Media_Partner_11_2026.jpeg' },
      { name: 'Media Partner 12', logo: '/sponsor26/Media_Partner_12_2026.jpeg' },
      { name: 'Media Partner 13', logo: '/sponsor26/Media_Partner_13_2026.jpg' },
      { name: 'Media Partner 14', logo: '/sponsor26/Media_Partner_14_2026.png' },
      { name: 'Media Partner 15', logo: '/sponsor26/Media_Partner_15_2026.png' },
      { name: 'Media Partner 16', logo: '/sponsor26/Media_Partner_16_2026.png' }
    ]
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
        <span className="sponsors-badge">Partners </span>
        <div>

        </div>
        <span className="sponsors-badge" style={{marginLeft: '20px', marginRight: '20px'}}> <a href="#currentyear">GES 2026</a></span>
        <span className="sponsors-badge"> <a href="#lastyear">GES 2025</a></span>
         <h1 className="sponsors-title">Current Sponsors</h1>
          <p className="sponsors-subtitle">
          Explore the brands, institutions, and innovation partners powering the Global Entrepreneurship Summit
        </p>
        <section className="sponsors-showcase " id="currentyear">
        {sponsorTiers2026.map((tier, tierIndex) => (
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
        <h1 className="sponsors-title">Previous Sponsors</h1>
      </section>
      {/* Sponsors Grid */}
      <section className="sponsors-showcase " id="lastyear">
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
