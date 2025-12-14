import React, { useMemo } from 'react';

export default function ContactSection() {
  const contacts = useMemo(
    () => [
      {
        name: 'Nihal Reddy',
        role: 'Senior Manager',
        focus: 'Events, Startups and Alumni Relations',
        email: 'nihal.reddy@ecell-iitkgp.org',
        phone: '+91 63026 93175',
        image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Akriti Mishra',
        role: 'Senior Manager',
        focus: 'Events, Social Media Marketing',
        email: 'akriti.mishra@ecell-iitkgp.org',
        phone: '+91 63886 38591',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Unnat Agarwal',
        role: 'Senior Manager',
        focus: 'Public Relations, EAD-LSM Coordinator',
        email: 'unnat.agarwal@ecell-iitkgp.org',
        phone: '+91 91302 70679',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Hrushabh Bodhe',
        role: 'Senior Manager',
        focus: 'Public Relations, CMR',
        email: 'hrushabh.bodhe@ecell-iitkgp.org',
        phone: '+91 87676 30519',
        image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
      },
    ],
    [],
  );

  return (
    <section id="contact" className="contact-gallery">
      <h2 className="contact-gallery-heading">Contact Us</h2>
      <div className="contact-card-grid">
        {contacts.map((person) => (
          <article key={person.email} className="contact-person-card">
            <div className="contact-person-media">
              <img src={person.image} alt={person.name} loading="lazy" />
            </div>
            <div className="contact-person-body">
              <h3 className="contact-person-name">{person.name}</h3>
              <p className="contact-person-role">{person.role}</p>
              <p className="contact-person-focus">{person.focus}</p>
              <a href={`mailto:${person.email}`} className="contact-person-link">{person.email}</a>
              <a href={`tel:${person.phone.replace(/[^\d+]/g, '')}`} className="contact-person-link">{person.phone}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
