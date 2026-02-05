import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function PastSpeakersSection() {
  const speakers = [
    {
      name: 'Alakh Pandey',
      designation: 'Founder',
      company: 'PhysicsWallah',
      image: '/speaker/AlakhPandey.founder.PW.webp'
    },
    {
      name: 'Anupam Mittal',
      designation: 'Co-founder',
      company: 'Shaadi.com',
      image: '/speaker/AnupamMittal.Cofounder.Shaadi.com.webp'
    },
    {
      name: 'Arjun Malhotra',
      designation: 'Co-founder',
      company: 'HCL',
      image: '/speaker/ArjunMalhotra.cofounder.HCL.webp'
    },
    {
      name: 'Kartik Kumar Marshan',
      designation: 'Former CMO',
      company: 'Mastercard',
      image: '/speaker/KartiKumarMarshan.FormerCMO.Mastercard.webp'
    },
    {
      name: 'Nitin Gadkari',
      designation: 'Minister',
      company: 'Ministry of Road Transport and Highways',
      image: '/speaker/NitinGadkari.Minister.MinistryofRoadtransportandHighways.webp'
    },
    {
      name: 'Rajat Sharma',
      designation: 'Chairman',
      company: 'India TV',
      image: '/speaker/RajatSharma.Chairman.India.webp'
    },
    {
      name: 'Rajni Hasija',
      designation: 'Former Director',
      company: 'IRCTC',
      image: '/speaker/RajniHasija.FormerDirector.IRCTC.webp'
    },
    {
      name: 'Ritesh Aggarwal',
      designation: 'Co-founder',
      company: 'OYO',
      image: '/speaker/RiteshAggarwal.Cofounder.OYO.webp'
    },
    {
      name: 'Sean Sohn',
      designation: 'CEO',
      company: 'Krafton',
      image: '/speaker/SeanSohn.CEO.Krafton.webp'
    },
    {
      name: 'Smriti Irani',
      designation: 'Former Minister',
      company: 'Ministry of Women and Child Development',
      image: '/speaker/Smritiirani.Formerminister.ministryofwomenandchilddev.webp'
    },
    {
      name: 'Sundar Pichai',
      designation: 'CEO',
      company: 'Google',
      image: '/speaker/SundarPichai.CEO.Google.webp'
    },
    {
      name: 'Suresh Prabhu',
      designation: 'Former Minister',
      company: 'Ministry of Railways',
      image: '/speaker/SureshPrabhu.FormerMinister.MinistryofRailways.webp'
    }
  ];

  // Split speakers into 3 rows for parallax effect
  const row1 = speakers.slice(0, 4);
  const row2 = speakers.slice(4, 8);
  const row3 = speakers.slice(8, 12);

  const SpeakerCard = ({ speaker }) => (
    <div className="speaker-marquee-card">
      <div className="speaker-card-inner">
        <div className="speaker-card-image">
          <img src={speaker.image} alt={speaker.name} />
          <div className="speaker-card-gradient"></div>
        </div>
        <div className="speaker-card-content">
          <div className="speaker-card-badge">{speaker.designation}</div>
          <h3 className="speaker-card-name">{speaker.name}</h3>
          <p className="speaker-card-company">{speaker.company}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="speakers" className="speakers-marquee-section">
      <SectionHeader title="Past Speakers" />
      
      <div className="speakers-marquee-wrapper">
        {/* Row 1 - Fastest */}
        <div className="speakers-marquee-row" data-speed="fast">
          <div className="speakers-marquee-track">
            {[...row1, ...row1, ...row1].map((speaker, index) => (
              <SpeakerCard key={`row1-${index}`} speaker={speaker} />
            ))}
          </div>
        </div>

        {/* Row 2 - Medium (Reverse) */}
        <div className="speakers-marquee-row" data-speed="medium">
          <div className="speakers-marquee-track reverse">
            {[...row2, ...row2, ...row2].map((speaker, index) => (
              <SpeakerCard key={`row2-${index}`} speaker={speaker} />
            ))}
          </div>
        </div>

        {/* Row 3 - Slow */}
        <div className="speakers-marquee-row" data-speed="slow">
          <div className="speakers-marquee-track">
            {[...row3, ...row3, ...row3].map((speaker, index) => (
              <SpeakerCard key={`row3-${index}`} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
