import React, { useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';

const getInitials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((chunk) => chunk[0]?.toUpperCase())
    .join('');

// Predefined gradient colors for variety
const avatarColors = [
  { bg: 'linear-gradient(135deg, #f59e0b, #d97706)', glow: 'rgba(245, 158, 11, 0.4)' },
  { bg: 'linear-gradient(135deg, #ec4899, #db2777)', glow: 'rgba(236, 72, 153, 0.4)' },
  { bg: 'linear-gradient(135deg, #10b981, #059669)', glow: 'rgba(16, 185, 129, 0.4)' },
  { bg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', glow: 'rgba(139, 92, 246, 0.4)' },
  { bg: 'linear-gradient(135deg, #3b82f6, #2563eb)', glow: 'rgba(59, 130, 246, 0.4)' },
  { bg: 'linear-gradient(135deg, #ef4444, #dc2626)', glow: 'rgba(239, 68, 68, 0.4)' },
  { bg: 'linear-gradient(135deg, #14b8a6, #0d9488)', glow: 'rgba(20, 184, 166, 0.4)' },
  { bg: 'linear-gradient(135deg, #f97316, #ea580c)', glow: 'rgba(249, 115, 22, 0.4)' },
  { bg: 'linear-gradient(135deg, #a855f7, #9333ea)', glow: 'rgba(168, 85, 247, 0.4)' },
  { bg: 'linear-gradient(135deg, #06b6d4, #0891b2)', glow: 'rgba(6, 182, 212, 0.4)' },
];

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
    <section id="speakers" className="speakers-scene">

        <SectionHeader title="Past Speakers" />
    
      
      <div className="speakers-marquee-container">
        <div className="speakers-marquee-card">
          {rows.map((row, rowIdx) => {
            const extendedRow = [...row, ...row];
            return (
              <div
                key={`speaker-row-${rowIdx}`}
                className={`speakers-marquee-row${rowIdx % 2 === 1 ? ' reverse' : ''}`}
              >
                <div className="speakers-marquee-track">
                  {extendedRow.map((speaker, idx) => {
                    const colorIdx = (idx + rowIdx * 7) % avatarColors.length;
                    const color = avatarColors[colorIdx];
                    return (
                      <div
                        key={`${speaker.name}-${rowIdx}-${idx}`}
                        className="speaker-pill"
                        aria-hidden={idx >= row.length}
                      >
                        <div 
                          className="speaker-pill-avatar"
                          style={{ 
                            background: color.bg,
                            boxShadow: `0 0 20px ${color.glow}`
                          }}
                        >
                          {getInitials(speaker.name)}
                        </div>
                        <div className="speaker-pill-info">
                          <span className="speaker-pill-name">{speaker.name}</span>
                          <span className="speaker-pill-role">{speaker.role}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
