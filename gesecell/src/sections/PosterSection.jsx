import React, { useRef, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import '../styles/PosterSection.css';

export default function PosterSection() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const posters = [
    'ph1.png',
    'ph2.png',
    'ph3.png',
    'ph4.png',
    'ph5.png',
    'ph6.png',
    'ph7.png',
  ];

  const handleNext = () => {
    if (currentIndex < posters.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (!touchStart || !touchEndX) return;

    const distance = touchStart - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
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
            disabled={currentIndex === 0}
            aria-label="Previous poster"
          >
            ‹
          </button>

          <div
            className="carousel-wrapper"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
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
            disabled={currentIndex === posters.length - 1}
            aria-label="Next poster"
          >
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {posters.map((_, idx) => (
            <button
              key={idx}
              className={`indicator ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to moment ${idx + 1}`}
            />
          ))}
        </div>

        <div className="carousel-counter">
          <span className="current">{currentIndex + 1}</span>
          <span className="divider">/</span>
          <span className="total">{posters.length}</span>
        </div>
      </div>
    </section>
  );
}
