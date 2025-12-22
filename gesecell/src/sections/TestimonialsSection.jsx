import React from "react";
import { motion } from "motion/react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    quote: "Entrepreneurship is about turning what excites you in life into capital, so that you can do more of it and move forward with it.",
    name: "Richard Branson",
    title: "Founder of Virgin Group",
  },
  {
    quote: "The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    name: "Mark Zuckerberg",
    title: "Co-founder of Facebook",
  },
  {
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    name: "Steve Jobs",
    title: "Co-founder of Apple",
  },
  {
    quote: "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.",
    name: "Jeff Bezos",
    title: "Founder of Amazon",
  },
  {
    quote: "Don't worry about failure; you only have to be right once.",
    name: "Drew Houston",
    title: "Co-founder of Dropbox",
  },
  {
    quote: "It’s not about ideas. It’s about making ideas happen.",
    name: "Scott Belsky",
    title: "Co-founder of Behance",
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

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="section-title">Words of Wisdom</h2>
        <p className="section-subtitle">Inspiration from world-renowned entrepreneurs</p>
      </div>
      
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
    </section>
  );
};

export default TestimonialsSection;
