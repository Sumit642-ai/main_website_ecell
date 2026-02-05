import React, { useMemo, useEffect, useRef } from 'react';
import gsap from 'gsap';
import keynoteImg from '../assets/events/event1.png';
import workshopImg from '../assets/events/event2.png';
import firesideImg from '../assets/events/event3.png';
import SectionHeader from '../components/SectionHeader';

export default function EventsSection() {
  const sectionRef = useRef(null);

  const eventFormats = useMemo(
    () => [
      {
        title: 'Keynote Sessions',
        desc:
          'Distinguished speakers deliver impactful addresses, providing insights, inspiration, and setting the tone for GES with their expertise in entrepreneurship.',
        image: keynoteImg,
      },
      {
        title: 'Workshops',
        desc:
          'Interactive sessions where participants engage in hands-on activities, fostering skill development, and practical knowledge in various aspects of entrepreneurship.',
        image: workshopImg,
      },
      {
        title: 'Fireside Chats',
        desc:
          'Intimate conversations between accomplished individuals, offering a relaxed platform to discuss personal experiences, challenges, and strategies in the entrepreneurial journey.',
        image: firesideImg,
      },
    ],
    [],
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.event-feature-card'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      },
    );
  }, []);

  return (
    <section
      id="events"
      ref={sectionRef}
      style={{ padding: '4rem 0', backgroundColor: '#000' }}
    >
      
      <SectionHeader title="Events" />
      <div className="grid-3">
        {eventFormats.map((item) => (
          <article key={item.title} className="event-feature-card">
            <h3 className="event-feature-title">{item.title}</h3>

            <div className="event-feature-media">
              <img
                className="event-feature-image"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
            </div>

            <p className="event-feature-desc">{item.desc}</p>

            <a href="#" className="event-feature-link">
              Read more <span className="event-feature-arrow">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
