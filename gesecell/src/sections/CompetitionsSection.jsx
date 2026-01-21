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
        title: 'R&D Symposium',
        description:
          'The R&D Symposium bridges entrepreneurship with research, empowering scholars to transform their work into real-life applications while advancing their research. Incentives • 5L+',
        image: rdSymposiumImg,
      },
      {
        title: 'Invest-O-Spective',
        description:
          'A unique competition to explore startup analysis for informed investment decisions while showcasing your analytical, communication, and presentation skills. Prize Money • 1L+',
        image: investImg,
      },
      {
        title: 'Business Game',
        description:
          'Make high-stakes business calls under pressure. Compete in immersive simulations that test your strategy, presence of mind, and ability to lead teams through ambiguity. Prize Money • 2L+',
        image: businessGameImg,
      },
      {
        title: 'Empresario',
        description:
          "Empresario, IIT Kharagpur's annual business model competition, offers mentorship and a platform to pitch ideas to venture capitalists, angel investors, and industry leaders. Prize Money • 1Cr+",
        image: empresarioImg,
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
                aria-expanded={isOpen}
              >
                <div className="competition-item-top">
                  <span className="competition-item-title">{item.title}</span>
                  
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
              <h3 className="competition-card-title">{item.title}</h3>
              <p className="competition-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
