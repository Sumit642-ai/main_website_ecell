import React, { useMemo, useState, useEffect, useRef } from 'react';
import rdSymposiumImg from '../assets/competition/RD.jpg';
import investImg from '../assets/competition/invest-o-spective.jpg';
import businessGameImg from '../assets/competition/businessgame.jpg';
import empresarioImg from '../assets/competition/empresario.jpg';
import SectionHeader from '../components/SectionHeader';

export default function CompetitionsSection() {
  const competitions = useMemo(
    () => [
      {
        title: 'Empresario',
        description:
          "Empresario, IIT Kharagpur's annual business model competition, offers mentorship and a platform to pitch ideas to venture capitalists, angel investors, and industry leaders. Prize Money • 1Cr+",
        image: empresarioImg,
        link: 'https://unstop.com/competitions/empresario-global-business-model-competition-iit-kharagpur-1538824',
      },
      {
        title: 'The Delhivery Way',
        description:
          'Master the art of logistics with The Delhivery Way, presented by E-Cell, IIT Kharagpur in association with Delhivery. Solve high-stakes operational and customer experience challenges for a chance to win prizes worth Rs 1.5 Lakhs.',
        image: rdSymposiumImg,
        link: 'https://tinyurl.com/3p94xwhd',
      },
      {
        title: 'TrueFoundry GenAI ProdEdge',
        description:
          'Solve high-impact product challenges and sharpen your positioning strategy with ProdEdge, presented by E-Cell, IIT Kharagpur in association with TrueFoundry. Step into the world of product leadership to bridge the gap between thinking and execution for a chance to win prizes worth Rs 1.5 Lakhs.',
        image: businessGameImg,
        link: 'https://tinyurl.com/mr2ky4hk',
      },
      {
        title: 'Business Game',
        description:
          'Unleash your entrepreneurial flair in Business Game, the ultimate test of strategic acumen where teams navigate complex market scenarios to build a winning venture. Compete on a national stage for a Rs 50,000 prize pool and prove your business brilliance.',
        image: businessGameImg,
        link: 'https://unstop.com/competitions/business-game-iit-kharagpur-1627404',
      },
      {
        title: 'Invest-O-Spective',
        description:
          'Step into the shoes of an investor to synthesize data, refine your logical reasoning, and pitch innovative startup solutions. Join this premier case study competition by E-Cell IIT Kharagpur to showcase your financial acumen and claim your share of Rs 1.5 Lakhs.',
        image: investImg,
        link: 'https://unstop.com/competitions/invest-o-spective-iit-kharagpur-1627504',
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('fade-in-visible');
              }, index * 150);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="competitions" className="competition-section py-20">
      <SectionHeader title="Competitions" />

      <div className="competition-accordion">
        <div className="competition-accordion-list">
          {competitions.map((item, index) => {
            const isOpen = index === activeIndex;
            return (
              <button
                key={item.title}
                className={`competition-item ${isOpen ? 'is-open' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => item.link && window.open(item.link, '_blank')}
                aria-expanded={isOpen}
                style={{ cursor: item.link ? 'pointer' : 'default' }}
              >
                <div className="competition-item-top">
                  <span className="competition-item-title">{item.title}</span>
                  {item.link && (
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      style={{ marginLeft: '0.5rem', opacity: 0.7 }}
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  )}
                </div>
                <div className="competition-item-desc">{item.description}</div>
              </button>
            );
          })}
        </div>

        <div className="competition-visual">
          <div className="competition-visual-inner">
            <img
              src={competitions[activeIndex]?.image}
              alt={competitions[activeIndex]?.title}
              className="competition-visual-image"
            />
            <div className="competition-visual-overlay" />
          </div>
          <div className="competition-visual-caption">
            {competitions[activeIndex]?.title}
          </div>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="competition-cards-mobile">
        {competitions.map((item, index) => (
          <div
            key={item.title}
            ref={(el) => (cardRefs.current[index] = el)}
            className="competition-card-mobile fade-in-card"
            onClick={() => item.link && window.open(item.link, '_blank')}
            style={{ cursor: item.link ? 'pointer' : 'default' }}
          >
            <div className="competition-card-image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="competition-card-image"
              />
              <div className="competition-card-overlay" />
            </div>
            <div className="competition-card-content">
              <h3 className="competition-card-title">
                {item.title}
                {item.link && (
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    style={{ marginLeft: '0.5rem', opacity: 0.7, display: 'inline' }}
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                )}
              </h3>
              <p className="competition-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
