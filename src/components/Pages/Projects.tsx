import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp, Star, Image } from 'lucide-react';
import { projects } from '../../data/content';

export const Projects: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

  const toggleProject = (projectId: string) => {
    setExpandedProjects(prev =>
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">Featured work and innovative solutions</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const isExpanded = expandedProjects.includes(project.id);
          return (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder">
                    <Image size={48} />
                    <span>Project Screenshot</span>
                  </div>
                )}
              </div>

              <div className="project-header">
                <div className="project-info">
                  <div className="project-title-row">
                    <h3 className="project-title">{project.title}</h3>
                    {project.featured && <Star size={20} className="featured-star" />}
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>
                
                <div className="project-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="expand-button"
                  >
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="project-details">
                  <div className="project-detail-content">
                    <h4>Key Features</h4>
                    <ul className="project-features">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};