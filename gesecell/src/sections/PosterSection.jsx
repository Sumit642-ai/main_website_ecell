import React, { useRef, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import '../styles/PosterSection.css';

export default function PosterSection() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const posters = [
  'ph1.png',
  'ph2.png',
  'ph3.png',
  'ph4.png',
  'ph5.png',
  'ph6.png',
  'ph7.png',
  'ph8.png',
  'ph9.png',
  'ph10.png',
  'ph11.png',
  'ph12.png',
  'ph13.png',
  'ph14.png',
  'ph15.png',
  'ph16.png',
  'ph17.png',
  'ph18.png',
  'ph19.png',
  'ph20.png',
  'ph21.png',
  'ph22.png',
  'ph23.png',
  'ph24.png',
  'ph25.png',
  'ph26.png',
  'ph27.png',
  'ph28.png',
  'ph29.png'
];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % posters.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + posters.length) % posters.length);
  };

  return (
    <section className="poster-section" ref={containerRef}>
      <div className="poster-section-inner">
        <SectionHeader
          title="Event Moments"
          subtitle="Explore highlights from our exclusive events"
        />

        <div className="carousel-container">
          <button
            className="carousel-btn prev-btn"
            onClick={handlePrev}
            aria-label="Previous poster"
          >
            ‹
          </button>

          <div
            className="carousel-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {posters.map((poster, idx) => (
              <div key={idx} className="carousel-slide">
                <img
                  src={`/poster/${poster}`}
                  alt={`Event Moment ${idx + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-btn next-btn"
            onClick={handleNext}
            aria-label="Next poster"
          >
            ›
          </button>
        </div>

        <div className="carousel-counter">
          <span className="counter-text">
            {currentIndex + 1} / {posters.length}
          </span>
        </div>
      </div>
    </section>
  );
}
