import React, { useMemo } from 'react';
import { StickyScroll } from '../components/ui/StickyScrollReveal';
import rdSymposiumImg from '../assets/competition/RD.jpg';
import investImg from '../assets/competition/invest-o-spective.jpg';
import businessGameImg from '../assets/competition/businessgame.jpg';
import empresarioImg from '../assets/competition/empresario.jpg';

export default function CompetitionsSection() {
  const content = useMemo(
    () => [
      {
        title: 'R&D Symposium',
        description:
          'The R&D Symposium bridges entrepreneurship with research, empowering scholars to transform their work into real-life applications while advancing their research. Incentives • 5L+',
        content: (
          <div className="h-full w-full flex items-center justify-center text-white">
            <img
              src={rdSymposiumImg}
              className="h-full w-full object-cover"
              alt="R&D Symposium"
            />
          </div>
        ),
      },
      {
        title: 'Invest-O-Spective',
        description:
          'A unique competition to explore startup analysis for informed investment decisions while showcasing your analytical, communication, and presentation skills. Prize Money • 1L+',
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <img
              src={investImg}
              className="h-full w-full object-cover"
              alt="Invest-O-Spective"
            />
          </div>
        ),
      },
      {
        title: 'Business Game',
        description:
          'Make high-stakes business calls under pressure. Compete in immersive simulations that test your strategy, presence of mind, and ability to lead teams through ambiguity. Prize Money • 2L+',
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <img
              src={businessGameImg}
              className="h-full w-full object-cover"
              alt="Business Game"
            />
          </div>
        ),
      },
      {
        title: 'Empresario',
        description:
          "Empresario, IIT Kharagpur's annual business model competition, offers mentorship and a platform to pitch ideas to venture capitalists, angel investors, and industry leaders. Prize Money • 1Cr+",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <img
              src={empresarioImg}
              className="h-full w-full object-cover"
              alt="Empresario"
            />
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <section id="competitions" className="competition-section py-20 bg-slate-950">
      <div className="section-title text-center mb-12 text-4xl font-bold text-white">
        Competitions
      </div>
      <StickyScroll content={content} />
    </section>
  );
}
