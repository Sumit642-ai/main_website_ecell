import React, { useMemo } from 'react';

const getInitials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((chunk) => chunk[0]?.toUpperCase())
    .join('');

export default function PastSpeakersSection() {
  const speakers = useMemo(
    () => [
      { name: 'Kunal Shah', role: 'Founder, CRED' },
      { name: 'Falguni Nayar', role: 'Founder, Nykaa' },
      { name: 'Bhavish Aggarwal', role: 'Co-founder, Ola' },
      { name: 'Deepinder Goyal', role: 'CEO, Zomato' },
      { name: 'Vijay Shekhar Sharma', role: 'Founder, Paytm' },
      { name: 'Byju Raveendran', role: "Founder, Byju's" },
      { name: 'Divya Gokulnath', role: "Co-founder, Byju's" },
      { name: 'Nithin Kamath', role: 'Co-founder, Zerodha' },
      { name: 'Peyush Bansal', role: 'CEO, Lenskart' },
      { name: 'Ghazal Alagh', role: 'Co-founder, Mamaearth' },
      { name: 'Varun Alagh', role: 'Co-founder, Mamaearth' },
      { name: 'Harsh Mariwala', role: 'Chairman, Marico' },
      { name: 'Sridhar Vembu', role: 'Founder, Zoho' },
      { name: 'Ananth Narayanan', role: 'Founder, Mensa Brands' },
      { name: 'Ritesh Agarwal', role: 'Founder, OYO' },
      { name: 'Neha Singh', role: 'Co-founder, Tracxn' },
      { name: 'Ashneer Grover', role: 'Co-founder, BharatPe' },
      { name: 'Aman Gupta', role: 'Co-founder, boAt' },
      { name: 'Anupam Mittal', role: 'Founder, Shaadi.com' },
      { name: 'Sanjeev Bikhchandani', role: 'Founder, Info Edge' },
      { name: 'Shantanu Deshpande', role: 'Founder, Bombay Shaving' },
      { name: 'Upasana Taku', role: 'Co-founder, MobiKwik' },
      { name: 'Munish Varma', role: 'Managing Partner, SoftBank' },
      { name: 'Padmasree Warrior', role: 'Founder, Fable' },
      { name: 'Priya Mohan', role: 'General Partner, Venture Highway' },
      { name: 'Rajiv Srivatsa', role: 'Co-founder, Urban Ladder' },
      { name: 'Rishi Vasudev', role: 'Co-founder, G.O.A.T' },
      { name: 'Shailendra Singh', role: 'Managing Director, Peak XV' },
      { name: 'Smriti Tomar', role: 'Founder, Stack Finance' },
      { name: 'Tanvi Bhardwaj', role: 'Lightspeed India' },
      { name: 'Utsav Somani', role: 'Partner, AngelList' },
      { name: 'Vineeta Singh', role: 'CEO, Sugar Cosmetics' },
      { name: 'Abhiraj Bhal', role: 'Co-founder, Urban Company' },
      { name: 'Alakh Pandey', role: 'Founder, PhysicsWallah' },
      { name: 'Tarun Mehta', role: 'Co-founder, Ather' },
      { name: 'Suhail Sameer', role: 'Executive Chair, BharatPe' },
      { name: 'Kanika Tekriwal', role: 'Founder, JetSetGo' },
      { name: 'Ankur Warikoo', role: 'Founder, Nearbuy' },
      { name: 'Sairee Chahal', role: 'Founder, SHEROES' },
      { name: 'Ritu Verma', role: 'Managing Partner, Ankur Capital' },
    ],
    [],
  );

  const midpoint = Math.ceil(speakers.length / 2);
  const rows = [speakers.slice(0, midpoint), speakers.slice(midpoint)];

  return (
    <section id="speakers" className="speaker-section">
      <div className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        Past Speakers
      </div>
      <div className="speaker-marquee">
        {rows.map((row, rowIdx) => {
          const extendedRow = [...row, ...row];
          return (
            <div
              key={`speaker-row-${rowIdx}`}
              className={`speaker-row${rowIdx % 2 === 1 ? ' reverse' : ''}`}
              data-speed={rowIdx % 2 === 0 ? 'fast' : 'slow'}
            >
              <div className="speaker-track">
                {extendedRow.map((speaker, idx) => (
                  <div
                    key={`${speaker.name}-${rowIdx}-${idx}`}
                    className="speaker-chip"
                    style={{ '--speaker-hue': `${(idx * 37 + rowIdx * 53) % 360}` }}
                    aria-hidden={idx >= row.length}
                  >
                    <div className="speaker-chip-avatar">{getInitials(speaker.name)}</div>
                    <div className="speaker-chip-body">
                      <p className="speaker-chip-name">{speaker.name}</p>
                      <p className="speaker-chip-role">{speaker.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
