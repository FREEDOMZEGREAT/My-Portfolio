
import PropTypes from 'prop-types';
import './ProjectCard.css';

function ProjectCard({ project, featured = false, onClick }) {
  return (
    <article 
      className={`project-card ${featured ? 'featured' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Image */}
      <div className="project-image">
        <img 
          src={project.images[0]} 
          alt={project.title}
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400?text=' + project.title;
          }}
        />
        
        {/* Overlay on hover */}
        <div className="project-overlay">
          <span className="view-details">View Details →</span>
        </div>
        
        {/* Status badge */}
        <span className="project-status">{project.status}</span>
        
        {/* Year */}
        {project.year && <span className="project-year">{project.year}</span>}
      </div>
      
      {/* Content */}
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        {/* Tech tags */}
        <div className="project-tech">
          {project.tech.slice(0, featured ? 6 : 3).map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
          {project.tech.length > (featured ? 6 : 3) && (
            <span className="tech-tag more">
              +{project.tech.length - (featured ? 6 : 3)}
            </span>
          )}
        </div>
        
        {/* Featured: show features preview */}
        {featured && (
          <ul className="project-features-preview">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i}>✓ {feature}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string,
    year: PropTypes.number,
  }).isRequired,
  featured: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;