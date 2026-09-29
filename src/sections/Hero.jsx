import about from '../data/about';
import social from '../data/social';
import Button from '../ui/Button';
import './Hero.css';

function Hero() {
  const initials = about.name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="hero">
      <div className="hero-gradient" />
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Online · Available for opportunities
          </div>
          
          {/* Name */}
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">{about.name}</span>
          </h1>
          
          {/* Title */}
          <h2 className="hero-subtitle">
            {about.title}
          </h2>
          
          {/* Tagline */}
          <p className="hero-tagline">
            {about.tagline}
          </p>
          
          {/* Bio */}
          <p className="hero-bio">
            {about.shortBio}
          </p>
          
          {/* CTAs */}
          <div className="hero-actions">
            <Button 
              variant="primary" 
              size="large"
              onClick={scrollToProjects}
            >
              View My Work →
            </Button>
            <Button 
              variant="outline" 
              size="large"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="hero-socials">
            <a 
              href={social.github} 
              target="_blank" 
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span className="social-divider">•</span>
            <a 
              href={social.linkedin} 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="social-divider">•</span>
            <a
              href={social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <span className="social-divider">•</span>
            <a 
              href={`mailto:${social.email}`}
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
        
        {/* Right: Visual */}
        <div className="hero-visual">
          <div className="hero-photo-wrapper" data-initials={initials}>
            <span className="hero-photo-fallback" aria-hidden="true">
              {initials}
            </span>
            <img 
              src={about.photo} 
              alt={about.name}
              className="hero-photo"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          
          {/* Floating badges */}
          <div className="floating-badge badge-1">
            <span>GO</span> Backend
          </div>
          <div className="floating-badge badge-3">
            <span> Full Stack </span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}

export default Hero;