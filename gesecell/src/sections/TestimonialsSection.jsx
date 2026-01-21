import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import "./TestimonialsSection.css";
import SectionHeader from '../components/SectionHeader';

const testimonials = [
  {
    quote: "Amazing event truly inspiring for all budding young entrepreneurs who were there for the event.",
    name: "Mr. Kishore Jayaraman",
    title: "President, Rolls-Royce, India & South Asia",
  },
  {
    quote: "E-Cell is doing a tremendous job in promoting entrepreneurship. India needs more ecosystems like this to become a superpower.",
    name: "Dr. D Subbarao",
    title: "Former RBI Governor",
  },
  {
    quote: "It was great to present to this audience at IIT Kharagpur. A fantastic amount of energy and enthusiasm from this group that I know will change the world. Great being here.",
    name: "Mr. Aditya Mony",
    title: "CTO, JP Morgan Chase & Co",
  },
  {
    quote: "The entrepreneurship cell of IIT Kharagpur does an awesome work increasing the awareness interest desire of the budding ventures. I wish them the very best. Thank you.",
    name: "Mr. Ram Gopal",
    title: "CEO, Barclays Bank",
  },
  {
    quote: "Summit like GES brings Corporates startups VCs together. It is not just an event a field to nurture ideas associated with the commercialization of ideas.",
    name: "Mr. Aloknath De",
    title: "CTO, Samsung R&D",
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <div className="testimonial-quote">"{testimonial.quote}"</div>
    <div className="testimonial-author">
      <div className="testimonial-name">{testimonial.name}</div>
      <div className="testimonial-title">{testimonial.title}</div>
    </div>
  </div>
);

const MobileTestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
    setIsPaused(false);
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <div
      className="mobile-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="carousel-track"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="carousel-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="carousel-quote-section">
              <div className="quote-mark">"</div>
              <p className="carousel-quote">{testimonial.quote}</p>
            </div>
            <div className="carousel-author-section">
              <div className="author-avatar">{testimonial.name.charAt(0)}</div>
              <div className="author-info">
                <div className="carousel-name">{testimonial.name}</div>
                <div className="carousel-title">{testimonial.title}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Dots */}
      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
       <SectionHeader title="Testimonials" />
      
      {/* Desktop Marquee */}
      <div className="testimonials-container">
        {/* Row 1 - Moving Left */}
        <div className="marquee-row">
          <motion.div 
            className="marquee-content"
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20 
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="marquee-row">
          <motion.div 
            className="marquee-content"
            animate={{ x: [-1000, 0] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 25 
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`row2-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <MobileTestimonialCarousel />
    </section>
  );
};

export default TestimonialsSection;
