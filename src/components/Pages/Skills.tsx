import React from 'react';
import { Code, Database, Cloud, Layers } from 'lucide-react';
import { skills } from '../../data/content';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      items: skills.languages,
      description: 'Programming languages I work with'
    },
    {
      title: 'Libraries',
      icon: Layers,
      items: skills.libraries,
      description: 'Frameworks and libraries I use'
    },
    {
      title: 'Infrastructure',
      icon: Cloud,
      items: skills.infrastructure,
      description: 'DevOps and cloud technologies'
    },
    {
      title: 'Frameworks',
      icon: Database,
      items: skills.frameworks,
      description: 'Web development frameworks'
    },
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h1 className="page-title">Skills</h1>
        <p className="page-subtitle">Technical expertise and proficiencies</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.title} className="skill-category">
              <div className="skill-header">
                <Icon size={24} className="skill-icon" />
                <div>
                  <h3 className="skill-title">{category.title}</h3>
                  <p className="skill-description">{category.description}</p>
                </div>
              </div>
              
              <div className="skill-items">
                {category.items.map((item) => (
                  <span key={item} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};