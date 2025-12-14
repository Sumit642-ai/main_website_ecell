import React, { useMemo } from 'react';

export default function CompetitionsSection() {
  const competitions = useMemo(
    () => [
      {
        title: 'R&D Symposium',
        highlight: 'Incentives • 5L+',
        desc:
          'The R&D Symposium bridges entrepreneurship with research, empowering scholars to transform their work into real-life applications while advancing their research.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Invest-O-Spective',
        highlight: 'Prize Money • 1L+',
        desc:
          'A unique competition to explore startup analysis for informed investment decisions while showcasing your analytical, communication, and presentation skills.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Business Game',
        highlight: 'Prize Money • 2L+',
        desc:
          'Make high-stakes business calls under pressure. Compete in immersive simulations that test your strategy, presence of mind, and ability to lead teams through ambiguity.',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Empresario',
        highlight: 'Prize Money • 1Cr+',
        desc:
          "Empresario, IIT Kharagpur's annual business model competition, offers mentorship and a platform to pitch ideas to venture capitalists, angel investors, and industry leaders.",
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
      },
    ],
    [],
  );

  return (
    <section id="competitions" className="competition-section">
      <div className="section-title" style={{ textAlign: 'center', marginBottom: '2.8rem' }}>
        Competitions
      </div>

      <div className="competition-track">
        {competitions.map((competition, idx) => (
          <article
            key={competition.title}
            className={`competition-pod ${idx % 2 === 0 ? 'align-left' : 'align-right'}`}
            style={{ '--index': idx }}
          >
            <div className="competition-card">
              <div className="competition-card-media">
                <img
                  src={competition.image}
                  alt={competition.title}
                  className="competition-card-image"
                  loading="lazy"
                />
              </div>
              <div className="competition-card-body">
                <p className="competition-card-kicker">{competition.highlight}</p>
                <h3 className="competition-card-title">{competition.title}</h3>
                <p className="competition-card-desc">{competition.desc}</p>
                <a href="#register" className="competition-card-link">
                  Register <span className="competition-card-arrow">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
