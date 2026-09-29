// src/sections/About.jsx (UPDATED)
import about from '../data/about';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import './About.css';

function About() {
  const initials = about.name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <Section id="about" variant="alt">
      <Reveal>
        <div className="about-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Get to know me</h2>
        </div>
      </Reveal>
      
      <div className="about-content">
        <Reveal direction="right" delay={100}>
          <div className="about-visual">
            <div className="about-photo-wrapper" data-initials={initials}>
              <span className="about-photo-fallback" aria-hidden="true">
                {initials}
              </span>
              <img 
                src={about.photo} 
                alt={about.name}
                className="about-photo"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            <div className="about-facts">
              {about.facts.map((fact, i) => (
                <div key={i} className="about-fact">
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        
        <Reveal direction="left" delay={200}>
          <div className="about-text">
            <h3 className="about-heading">
              Hi, I'm {about.name.split(' ')[0]} 👋
            </h3>
            
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="about-paragraph">
                {paragraph}
              </p>
            ))}
            
            <div className="about-actions">
              <Button 
                href={about.resumeUrl} 
                variant="primary"
                target="_blank"
                rel="noreferrer"
              >
                📄 Download Resume
              </Button>
              <Button 
                href="#contact" 
                variant="outline"
              >
                Let's Talk →
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default About;