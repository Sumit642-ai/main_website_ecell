import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out quart
      const ease = 1 - Math.pow(1 - percentage, 4);
      
      const newCount = end * ease;
      setCount(newCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count.toFixed(decimals)}</span>;
};

export default function ImpactStripSection() {
  const impactItems = [
    { value: 60, label: 'Speakers', suffix: '+', decimals: 0 },
    { value: 2700, label: 'Participants', suffix: '+', decimals: 0 },
    { value: 300, label: 'Startups', suffix: '+', decimals: 0 },
    { value: 18, label: 'Million at Stake', suffix: 'M+', decimals: 0 },
    { value: 1.2, label: 'Empresario', suffix: 'CR+', decimals: 1 },
  ];

  return (
    <section id="impact" className="impact-section-new">
      <div className="impact-container-new">
        <div className="impact-stats-new">
          {impactItems.map((it, idx) => (
            <div key={idx} className="impact-item-new">
              <div className="impact-value-new">
                <CountUp end={it.value} decimals={it.decimals} />{it.suffix}
              </div>
              <div className="impact-label-new">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
