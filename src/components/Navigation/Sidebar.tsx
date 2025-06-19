import React from 'react';
import { 
  FolderOpen, 
  User, 
  Briefcase, 
  Mail, 
  Settings,
  Palette,
  Github,
  ExternalLink,
  UserCircle,
  Shuffle,
  Download
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { PageType } from '../../types';

interface SidebarProps {
  currentPage: PageType | null;
  onPageChange: (page: PageType) => void;
  onLogoClick: () => void;
  onThemeChange?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, 
  onPageChange, 
  onLogoClick, 
  onThemeChange 
}) => {
  const { currentTheme, setTheme, randomizeTheme, availableThemes } = useTheme();
  const [showThemes, setShowThemes] = React.useState(false);

  const navItems = [
    { id: 'about' as PageType, icon: UserCircle, label: 'About' },
    { id: 'projects' as PageType, icon: FolderOpen, label: 'Projects' },
    { id: 'skills' as PageType, icon: User, label: 'Skills' },
    { id: 'experience' as PageType, icon: Briefcase, label: 'Experience' },
    { id: 'contact' as PageType, icon: Mail, label: 'Contact' },
  ];

  const handleDownloadResume = () => {
    // Create a simple resume download (placeholder)
    const resumeContent = `Steven Bryan - Software Engineer
San Diego State University - Computer Science Student
Digital Innovation Lab - Software Engineer

Contact: sbryancs@gmail.com | (805) 607-3805
GitHub: https://github.com/rsbryan
LinkedIn: https://www.linkedin.com/in/stevenbryan-/

Experience:
- Software Engineer @ Digital Innovation Lab (Feb 2025 – Present)
- Engineering Intern @ FATHOMWERX Defense R&D Lab (Mar 2023 – Sep 2023)

Skills: Python, C++, JavaScript, TypeScript, React, Node.js, AWS, PostgreSQL`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Steven_Bryan_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleThemeChange = (themeName: string) => {
    setTheme(themeName);
    setShowThemes(false);
    if (onThemeChange) onThemeChange();
  };

  const handleRandomizeTheme = () => {
    randomizeTheme();
    setShowThemes(false);
    if (onThemeChange) onThemeChange();
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button onClick={onLogoClick} className="logo-button">
          <h1 className="sidebar-title">Steven Bryan</h1>
          <p className="sidebar-subtitle">Software Engineer</p>
        </button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button
          onClick={handleDownloadResume}
          className="download-resume-btn"
        >
          <Download size={18} />
          <span>Resume</span>
        </button>

        <div className="theme-selector">
          <button
            onClick={() => setShowThemes(!showThemes)}
            className="theme-toggle"
          >
            <Palette size={18} />
            <span>Theme</span>
          </button>
          
          {showThemes && (
            <div className="theme-dropdown">
              {availableThemes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme.name)}
                  className={`theme-option ${currentTheme.name === theme.name ? 'active' : ''}`}
                >
                  {theme.name.replace('-', ' ')}
                </button>
              ))}
              <button
                onClick={handleRandomizeTheme}
                className="theme-option randomize"
              >
                <Shuffle size={14} />
                Randomize
              </button>
            </div>
          )}
        </div>

        <div className="sidebar-links">
          <a
            href="https://github.com/rsbryan"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/stevenbryan-/"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};