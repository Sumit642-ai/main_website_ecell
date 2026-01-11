import React, { useMemo, useState } from 'react';
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
    </section>
  );
}
