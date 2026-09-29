// ================================================
// src/projects/ProjectModal.jsx
// 🎯 PROJECT DETAIL MODAL
// ================================================

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  // 🎯 Close on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button 
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        
        {/* Header */}
        <div className="modal-header">
          <div>
            <h2 id="modal-title" className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          {project.year && <span className="modal-year">{project.year}</span>}
        </div>
        
        {/* Image Gallery */}
        {project.images.length > 0 && (
          <div className="modal-gallery">
            {project.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="modal-main-image"
              />
            ))}
          </div>
        )}
        
        {/* Body */}
        <div className="modal-body">
          {/* Description */}
          <div className="modal-section">
            <h3 className="modal-section-title">About This Project</h3>
            <p className="modal-description">{project.longDescription}</p>
          </div>
          
          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">Key Features</h3>
              <ul className="modal-features">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Tech Stack */}
          {project.tech.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">Tech Stack</h3>
              <div className="modal-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="modal-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
          
          {/* Learnings */}
          {project.learnings && project.learnings.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">What I Learned</h3>
              <ul className="modal-learnings">
                {project.learnings.map((learning, i) => (
                  <li key={i}>💡 {learning}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Footer - Links */}
        <div className="modal-footer">
          {project.links.live && (
            <a 
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="modal-btn primary"
            >
              🌐 Live Demo
            </a>
          )}
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="modal-btn secondary"
            >
              💻 Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;