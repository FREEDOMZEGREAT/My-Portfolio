// ================================================
// src/components/Footer.jsx
// 🎯 SITE FOOTER
// ================================================

import social from '../data/social';
import about from '../data/about';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const logoMark = about.name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-logo">{logoMark}</span>
            <p className="footer-name">{about.name}</p>
            <p className="footer-tagline">{about.title}</p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          {/* Social */}
          <div className="footer-links">
            <h3 className="footer-title">Connect</h3>
            <a href={`mailto:${social.email}`} target="_blank" rel="noreferrer">
              📧 Email
            </a>
            <a href={social.github} target="_blank" rel="noreferrer">
              💻 GitHub
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              💼 LinkedIn
            </a>
            <a href={social.instagram} target="_blank" rel="noreferrer">
              📷 Instagram
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} {about.name}. All rights reserved.</p>
          <p className="footer-note">Built with React + Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;