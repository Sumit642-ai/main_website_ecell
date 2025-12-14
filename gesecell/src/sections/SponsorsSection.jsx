import React from 'react';

export default function SponsorsSection() {
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
            <div className="sponsor-tier">
              <h3 className="sponsor-tier-title">Gold</h3>
              <div className="sponsor-grid">
                <div className="sponsor-card">Gold 1</div>
                <div className="sponsor-card">Gold 2</div>
                <div className="sponsor-card">Gold 3</div>
              </div>
            </div>
            <div className="sponsor-tier">
              <h3 className="sponsor-tier-title">Silver</h3>
              <div className="sponsor-grid">
                <div className="sponsor-card">Silver 1</div>
                <div className="sponsor-card">Silver 2</div>
                <div className="sponsor-card">Silver 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
