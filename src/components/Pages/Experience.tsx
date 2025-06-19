import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experience } from '../../data/content';

export const Experience: React.FC = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">Professional work history and achievements</p>
      </div>

      <div className="experience-timeline">
        {experience.map((exp, index) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-marker">
              <div className="marker-dot"></div>
              {index < experience.length - 1 && <div className="marker-line"></div>}
            </div>
            
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-meta">
                  <span className="experience-company">{exp.company}</span>
                  <div className="experience-period">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="experience-description">
                <ul>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};