// ================================================
// src/sections/Skills.jsx
// 🎯 SKILLS SECTION
// ================================================

import skills from '../data/skills';
import Section from '../ui/Section';
import './Skills.css';

function Skills() {
  const categories = Object.entries(skills);
  
  return (
    <Section id="skills" variant="alt">
      <div className="skills-header">
        <span className="section-label">Tech Stack</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="skills-subtitle">
          Full-stack application development, specializing in Go with experience across multiple backend and frontend technologies.
        </p>
      </div>
      
      <div className="skills-grid">
        {categories.map(([key, category]) => (
          <div key={key} className="skill-category">
            <div className="skill-category-header">
              <span className="skill-icon">{category.icon}</span>
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            
            <div className="skill-items">
              {category.items.map(item => (
                <div key={item.name} className="skill-item">
                  <span className="skill-name">{item.name}</span>
                  <span className={`skill-level level-${item.level.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;