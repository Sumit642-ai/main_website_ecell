import React, { useMemo } from 'react';

export default function EventsSection() {
  const eventFormats = useMemo(
    () => [
      {
        title: 'Keynote Sessions',
        desc:
          'Distinguished speakers deliver impactful addresses, providing insights, inspiration, and setting the tone for GES with their expertise in entrepreneurship.',
        image: 'https://placehold.co/1200x700/0b0b0f/EB5002?text=Keynote+Sessions',
      },
      {
        title: 'Workshops',
        desc:
          'Interactive sessions where participants engage in hands-on activities, fostering skill development, and practical knowledge in various aspects of entrepreneurship.',
        image: 'https://placehold.co/1200x700/0b0b0f/EB5002?text=Workshops',
      },
      {
        title: 'Fireside Chats',
        desc:
          'Intimate conversations between accomplished individuals, offering a relaxed platform to discuss personal experiences, challenges, and strategies in the entrepreneurial journey.',
        image: 'https://placehold.co/1200x700/0b0b0f/EB5002?text=Fireside+Chats',
      },
    ],
    [],
  );

  return (
    <section id="events">
      <div className="section-title">Events</div>

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
