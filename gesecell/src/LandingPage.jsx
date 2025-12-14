import React, { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import PyramidScene from './PyramidScene';
import './LandingPage.css';
import './Sections.css';

const LandingPage = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const impactItems = useMemo(
    () => [
      { value: '500+', label: 'Leaders' },
      { value: '50+', label: 'Sessions' },
      { value: '$10M+', label: 'Funding' },
    ],
    [],
  );

  const startupEvents = useMemo(
    () => [
      { title: 'Pitch Orbit', subtitle: 'Founder matchmaking' },
      { title: 'Galaxy Mixer', subtitle: 'Networking night' },
      { title: 'Galaxy Mixer', subtitle: 'Industry connects' },
      { title: 'Pitch Orbit', subtitle: 'Lightning pitches' },
    ],
    [],
  );

  const events = useMemo(
    () => [
      { title: 'Leadership Keynote', subtitle: 'Main stage', cta: 'Register' },
      { title: 'Tech Frontier Panel', subtitle: 'Expert panel', cta: 'Register' },
      { title: 'Tech Frontier Panel', subtitle: 'Deep dive', cta: 'Register' },
      { title: 'Galaxy Keynote', subtitle: 'Special address', cta: 'Register' },
    ],
    [],
  );

  const competitions = useMemo(
    () => [
      { title: 'Ascension Pitch', subtitle: 'Startup pitching', cta: 'Apply Now' },
      { title: 'Hack the Future', subtitle: 'Build sprint', cta: 'Apply Now' },
      { title: 'Ascension Pitch', subtitle: 'Demo day', cta: 'Apply Now' },
      { title: 'Hack the Future', subtitle: 'Team challenge', cta: 'Apply Now' },
    ],
    [],
  );

  const speakers = useMemo(
    () => [
      { name: 'Jatin Purohit', role: 'Product' },
      { name: 'Arjun Pradhan', role: 'Founder' },
      { name: 'Sneha Kane', role: 'Design' },
      { name: 'John Brown', role: 'Engineering' },
      { name: 'Riya Desai', role: 'Growth' },
      { name: 'Saurav Kumar', role: 'AI' },
      { name: 'Aimee Johnson', role: 'Community' },
      { name: 'Marco Collins', role: 'Strategy' },
    ],
    [],
  );

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial fade in and slide up
    if (titleRef.current && subtitleRef.current) {
        tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.5
        })
        .to(subtitleRef.current, {
        opacity: 1,
        duration: 1,
        }, "-=1");

        // Continuous pulse effect for title glow
        gsap.to(titleRef.current, {
        textShadow: "0 0 20px rgba(255, 255, 255, 0.35), 0 0 40px rgba(235, 80, 2, 0.75), 0 0 60px rgba(193, 8, 1, 0.45)",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        delay: 2 // Start after initial animation
        });
    }

  }, []);

  return (
    <div className="landing-page-container">
      {/* 3D Background */}
      <PyramidScene />
      
      {/* 2D Content Overlay */}
      <div className="content-overlay">
        <header className="header-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#competitions" className="nav-link">Competitions</a>
          <a href="#speakers" className="nav-link">Speakers</a>
          <a href="#sponsors" className="nav-link">Sponsors</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#register" className="nav-link">Register</a>
        </header>

        <main className="hero-section">
          <h1 ref={titleRef} className="hero-title">
            ASCENSION: THE INNOVATION CATACLYST
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            Annual Leadership Summit
          </p>
        </main>

        <div className="sections-wrap">
          <div className="sections-inner">
            {/* 1. About section */}
            <section id="about">
              <div className="section-title">About Section</div>
              <div className="grid-2">
                <div className="panel star-bg">
                  <div className="panel-pad">
                    <div className="panel-header">
                      <div>
                        <div className="panel-kicker">About</div>
                        <h2 className="panel-heading">Ascension Summit</h2>
                      </div>
                      <span className="badge">2025</span>
                    </div>
                    <div className="panel-body">
                      A focused innovation summit bringing founders, builders, and leaders into one room for sharp conversations, high-signal networking, and real opportunities.
                    </div>
                  </div>
                </div>

                {/* 2. Number impact strip section */}
                <div>
                  <div className="section-title" style={{ marginBottom: '0.75rem' }}>Number Impact Strip</div>
                  <div className="impact-strip">
                    {impactItems.map((it) => (
                      <div key={it.label} className="impact-item">
                        <div className="impact-value">{it.value}</div>
                        <div className="impact-label">{it.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Startup events */}
            <section id="startup-events">
              <div className="section-title">Startup Events</div>
              <div className="grid-4">
                {startupEvents.map((it, idx) => (
                  <div key={`${it.title}-${idx}`} className="card star-bg">
                    <div className="card-top">
                      <div>
                        <h3 className="card-title">{it.title}</h3>
                        <p className="card-subtitle">{it.subtitle}</p>
                      </div>
                      <span className="badge">Startup</span>
                    </div>
                    <div className="card-actions">
                      <a className="secondary-btn" href="#register">Register</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Events */}
            <section id="events">
              <div className="section-title">Events</div>
              <div className="grid-4">
                {events.map((it, idx) => (
                  <div key={`${it.title}-${idx}`} className="card star-bg">
                    <div className="card-top">
                      <div>
                        <h3 className="card-title">{it.title}</h3>
                        <p className="card-subtitle">{it.subtitle}</p>
                      </div>
                      <span className="badge">Event</span>
                    </div>
                    <div className="card-actions">
                      <a className="primary-btn" href="#register">{it.cta}</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Competitions */}
            <section id="competitions">
              <div className="section-title">Competitions</div>
              <div className="grid-4">
                {competitions.map((it, idx) => (
                  <div key={`${it.title}-${idx}`} className="card star-bg">
                    <div className="card-top">
                      <div>
                        <h3 className="card-title">{it.title}</h3>
                        <p className="card-subtitle">{it.subtitle}</p>
                      </div>
                      <span className="badge">Compete</span>
                    </div>
                    <div className="card-actions">
                      <a className="primary-btn" href="#register">{it.cta}</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Past speakers */}
            <section id="speakers">
              <div className="section-title">Past Speakers</div>
              <div className="speakers-grid">
                {speakers.map((sp) => {
                  const initials = sp.name
                    .split(' ')
                    .slice(0, 2)
                    .map((p) => p[0]?.toUpperCase())
                    .join('');
                  return (
                    <div key={sp.name} className="speaker">
                      <div className="avatar">{initials}</div>
                      <div>
                        <p className="speaker-name">{sp.name}</p>
                        <p className="speaker-role">{sp.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 7. CTA to register */}
            <section id="cta">
              <div className="section-title">CTA</div>
              <div className="cta">
                <div className="cta-hero star-bg">
                  <div className="cta-hero-inner">
                    <h2 className="cta-title">Register for Ascension</h2>
                    <p className="cta-desc">Secure your spot for sessions, competitions, and networking.</p>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <a className="primary-btn" href="#register">Secure Your Spot</a>
                      <a className="secondary-btn" href="#contact">Contact Us</a>
                    </div>
                  </div>
                </div>

                {/* 8. Sponsors section */}
                <div id="sponsors" className="panel">
                  <div className="panel-pad">
                    <div className="panel-header">
                      <div>
                        <div className="panel-kicker">Sponsors</div>
                        <h2 className="panel-heading">Partners</h2>
                      </div>
                      <span className="badge">Support</span>
                    </div>

                    <div className="sponsors">
                      <div className="sponsor-tier">
                        <h3 className="sponsor-tier-title">Gold</h3>
                        <div className="sponsor-grid">
                          <div className="sponsor-card">Gold 1</div>
                          <div className="sponsor-card">Gold 2</div>
                          <div className="sponsor-card">Gold 3</div>
                        </div>
                      </div>
                      <div className="sponsor-tier">
                        <h3 className="sponsor-tier-title">Silver</h3>
                        <div className="sponsor-grid">
                          <div className="sponsor-card">Silver 1</div>
                          <div className="sponsor-card">Silver 2</div>
                          <div className="sponsor-card">Silver 3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Contact us section */}
            <section id="contact">
              <div className="section-title">Contact Us</div>
              <div className="grid-2">
                <div className="panel">
                  <div className="panel-pad">
                    <div className="panel-header">
                      <div>
                        <div className="panel-kicker">Contact</div>
                        <h2 className="panel-heading">Get in touch</h2>
                      </div>
                    </div>
                    <form className="form" onSubmit={(e) => e.preventDefault()}>
                      <input className="field" placeholder="Name" />
                      <input className="field" placeholder="Email" type="email" />
                      <textarea className="field textarea" placeholder="Message" />
                      <button className="primary-btn" type="submit">Send</button>
                    </form>
                  </div>
                </div>

                {/* 11. Registration page (as section) */}
                <div id="register" className="panel star-bg">
                  <div className="panel-pad">
                    <div className="panel-header">
                      <div>
                        <div className="panel-kicker">Registration</div>
                        <h2 className="panel-heading">Register</h2>
                      </div>
                    </div>

                    <div className="panel-body" style={{ marginBottom: '0.85rem' }}>
                      Complete the form to confirm your participation.
                      <div className="step-bar" aria-hidden="true">
                        <div className="step active" />
                        <div className="step" />
                        <div className="step" />
                      </div>
                    </div>

                    <form className="form" onSubmit={(e) => e.preventDefault()}>
                      <div className="panel-kicker">Personal Info</div>
                      <div className="grid-2" style={{ gap: '0.75rem' }}>
                        <input className="field" placeholder="First name" />
                        <input className="field" placeholder="Last name" />
                      </div>
                      <input className="field" placeholder="Email" type="email" />
                      <div className="panel-kicker" style={{ marginTop: '0.25rem' }}>Ticket Info</div>
                      <input className="field" placeholder="Ticket type" />
                      <button className="primary-btn" type="submit">Complete Registration</button>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Footer */}
            <footer className="footer">
              <div className="footer-links">
                <a className="footer-link" href="#about">About</a>
                <a className="footer-link" href="#events">Events</a>
                <a className="footer-link" href="#competitions">Competitions</a>
                <a className="footer-link" href="#speakers">Speakers</a>
                <a className="footer-link" href="#sponsors">Sponsors</a>
                <a className="footer-link" href="#contact">Contact</a>
                <a className="footer-link" href="#register">Register</a>
              </div>
              <div>© {new Date().getFullYear()} Ascension Event</div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
