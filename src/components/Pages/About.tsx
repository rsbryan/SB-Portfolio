import React from 'react';
import { MapPin, GraduationCap, Code, Mountain, Waves, Trophy, Zap, Building, Search } from 'lucide-react';
import { aboutMe } from '../../data/content';

export const About: React.FC = () => {
  const highlights = [
    { icon: GraduationCap, label: 'CS Student', value: 'San Diego State University' },
    { icon: Code, label: 'Current Role', value: 'Software Engineer @ Digital Innovation Lab' },
    { icon: MapPin, label: 'Location', value: 'San Diego, CA' },
  ];

  const activities = [
    { icon: Waves, label: 'Surfing', description: 'Catching waves along the San Diego coast' },
    { icon: Mountain, label: 'Rock Climbing', description: 'Scaling cliffs and indoor walls' },
    { icon: Trophy, label: 'Golf', description: 'Playing courses around San Diego' },
    { icon: Zap, label: 'Triathlons', description: 'Swimming, cycling, and running competitions' },
    { icon: Building, label: 'Business Automation', description: 'Running automation service company' },
    { icon: Search, label: 'Research', description: 'Exploring emerging technologies' },
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">Software engineer, student, and outdoor enthusiast</p>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <div className="intro-text">
            <p className="intro-paragraph">{aboutMe.intro}</p>
            <p className="intro-paragraph">{aboutMe.experience}</p>
            <p className="intro-paragraph">{aboutMe.learning}</p>
            <p className="intro-paragraph">{aboutMe.lifestyle}</p>
          </div>

          <div className="highlights-grid">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="highlight-item">
                  <Icon size={24} className="highlight-icon" />
                  <div>
                    <span className="highlight-label">{item.label}</span>
                    <span className="highlight-value">{item.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="activities-section">
          <h3>When I'm Not Coding</h3>
          <div className="activities-grid">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.label} className="activity-item">
                  <Icon size={32} className="activity-icon" />
                  <h4>{activity.label}</h4>
                  <p>{activity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};