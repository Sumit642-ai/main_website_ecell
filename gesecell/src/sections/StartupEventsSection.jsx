import React, { useMemo } from 'react';
import internCarnivalImg from '../assets/initiatives/ini1.jpeg';
import investorConnectImg from '../assets/initiatives/ini2.avif';
import productExpoImg from '../assets/initiatives/ini3.jpg';
import SectionHeader from '../components/SectionHeader';

export default function StartupEventsSection() {
  const events = useMemo(
    () => [
      {
        title: 'Intern Carnival',
        desc:
          "Intern Carnival is a curated event providing startups an exciting opportunity to hire interns from a pool of talented IIT Kharagpur students and enthusiastic GES '24 participants.",
        image: internCarnivalImg,
        color: '#eb5002',
      },
      {
        title: 'Investor Startup Connect',
        desc:
          'Provides opportunities to startups for funding and mentoring by industry experts, with a chance to pitch to investors from varied sectors and top VCs from the country and even abroad!',
        image: investorConnectImg,
        color: '#c10801',
      },
      {
        title: 'Product Expo',
        desc:
          'Showcase your innovative products in front of a vast audience comprising the tech-savvy generation of students, eminent entrepreneurs, industry leaders, and professors.',
        image: productExpoImg,
        color: '#dc3a3b',
      },
    ],
    [],
  );

  return (
    <section id="startup-events" className="scroll-stack-section">
      <SectionHeader title="For Startups" />
      
      <div className="scroll-stack-container">
        {events.map((event, idx) => (
          <div 
            key={event.title} 
            className="scroll-stack-card"
            style={{ 
              '--card-index': idx,
              '--card-color': event.color,
              '--total-cards': events.length,
            }}
          >
            <div className="scroll-stack-card-inner">
              <div className="scroll-stack-content">
                <span className="scroll-stack-number">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="scroll-stack-card-title">{event.title}</h3>
                <p className="scroll-stack-card-desc">{event.desc}</p>
              </div>
              <div className="scroll-stack-visual">
                <img src={event.image} alt={event.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
