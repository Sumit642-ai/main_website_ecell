import React from 'react';

export default function FooterSection() {
  return (
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
  );
}
