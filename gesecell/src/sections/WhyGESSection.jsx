import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function WhyGESSection() {
  const categories = [
    {
      title: 'Startups',
      items: [
        'Mentorship, team-building, resource access and funding opportunities for selected student teams',
        'Access to free incubation and patenting support by IIT Kharagpur for selected startup teams'
      ]
    },
    {
      title: 'Students',
      items: [
        'Access to structured upskilling modules, projects and internship programs for students'
      ]
    },
    {
      title: 'Partnering Institutes',
      items: [
        'Long term collaborations of partnering institutes with IIT Kharagpur for Entrepreneurship activities',
        'Collaboration with IIT Kharagpur labs for product development and Research',
        'Opportunities to co-host IIC activities'
      ]
    }
  ];

  return (
    <section id="why-ges" className="why-ges-section">
      <SectionHeader subtitle="Attention - startups, students and faculty!" title="Why Attend GES?" />
      
      <div className="why-ges-intro">
        <h3>Forge Long Term Bonds: Associate with E-Cell IIT Kharagpur for:</h3>
      </div>

      <div className="why-ges-grid-three">
        {categories.map((category) => (
          <article key={category.title} className="why-ges-card-three">
            <h4 className="why-ges-category-title">{category.title}</h4>
            <ul className="why-ges-list">
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
