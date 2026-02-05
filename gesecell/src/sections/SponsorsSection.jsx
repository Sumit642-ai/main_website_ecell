import React from 'react';

export default function SponsorsSection() {
  const sponsorTiers = [
    {
      title: 'Title Partner',
      logos: ['/sponsors/titleparterner.png'],
    },
    {
      title: 'Co-Title Partner',
      logos: ['/sponsors/cotitilepartner.png.png'],
    },
    {
      title: 'Major Partner',
      logos: ['/sponsors/majorpartner.png.png'],
    },
    {
      title: 'Strategic Partner',
      logos: ['/sponsors/strategicpartner.png.png'],
    },
    {
      title: 'Title Media Partner',
      logos: ['/sponsors/Titlemediapartner.png.png'],
    },
    {
      title: 'Product Expo Title Partner',
      logos: ['/sponsors/productexpotitlepartner.png.png'],
    },
    {
      title: 'Associate Partners',
      logos: ['/sponsors/associatepartners.png.png'],
    },
    {
      title: 'Media Partners',
      logos: ['/sponsors/mediapartners.png.png'],
    },
    {
      title: 'Corporate Partners',
      logos: ['/sponsors/coorporatepartner1.png', '/sponsors/coorporatepartners2.png'],
    },
    {
      title: 'Automobile Partners',
      logos: ['/sponsors/automobilepartners1.png', '/sponsors/automobilepartner2.png', '/sponsors/automobilepartner3.png'],
    },
    {
      title: 'Silver Sponsors 2023',
      logos: ['/sponsors/silversponsors2023.png.png'],
    },
    {
      title: 'Other Partners',
      logos: ['/sponsors/otherpartners.png.png'],
    },
  ];

  return (
    <section id="sponsors">
      <div className="section-title">Sponsors Section</div>
      <div className="panel">
        <div className="panel-pad">
          <div className="panel-header">
            <div>
              <div className="panel-kicker">Sponsors</div>
              <h2 className="panel-heading">Partners</h2>
            </div>
            <span className="badge">Support</span>
          </div>

          <div className="sponsors">
            {sponsorTiers.map((tier) => (
              <div key={tier.title} className="sponsor-tier">
                <h3 className="sponsor-tier-title">{tier.title}</h3>
                <div className="sponsor-grid">
                  {tier.logos.map((logo, index) => (
                    <div key={logo} className="sponsor-card">
                      <img src={logo} alt={`${tier.title} ${index + 1}`} className="sponsor-logo" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
