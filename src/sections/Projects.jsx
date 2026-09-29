// ================================================
// src/sections/Projects.jsx
// 🎯 PROJECTS SECTION - THE MOST IMPORTANT
// ================================================

import { useState } from 'react';
import projects from '../data/projects';
import Section from '../ui/Section';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  
  return (
    <Section id="projects">
      <div className="projects-header">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Web projects showcasing my full-stack experience, including a campus
          navigation system for Debre Tabor University.
        </p>
      </div>
      
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="featured-projects">
          {featuredProjects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              featured
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}
      
      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <>
          <h3 className="other-projects-title">More Projects</h3>
          <div className="other-projects">
            {otherProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </>
      )}
      
      {/* Empty State */}
      {projects.length === 0 && (
        <div className="projects-empty">
          <p>No projects yet. Coming soon!</p>
        </div>
      )}
      
      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
}

export default Projects;