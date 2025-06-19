import React, { useState, useEffect } from 'react';
import { Clock, Mouse, Eye, Palette, Monitor } from 'lucide-react';

interface PersonalStatsProps {
  onThemeChange?: () => void;
}

export const PersonalStats: React.FC<PersonalStatsProps> = ({ onThemeChange }) => {
  const [stats, setStats] = useState({
    sessionTime: 0,
    clicks: 0,
    pagesVisited: 1,
    themesTriedCount: 0,
    device: 'desktop' as 'desktop' | 'mobile' | 'tablet'
  });

  const [startTime] = useState(Date.now());

  // Detect device type
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      if (width < 768) return 'mobile';
      if (width < 1024) return 'tablet';
      return 'desktop';
    };

    setStats(prev => ({ ...prev, device: detectDevice() }));

    const handleResize = () => {
      setStats(prev => ({ ...prev, device: detectDevice() }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track session time
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setStats(prev => ({ ...prev, sessionTime: elapsed }));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  // Track clicks
  useEffect(() => {
    const handleClick = () => {
      setStats(prev => ({ ...prev, clicks: prev.clicks + 1 }));
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Track page visits
  useEffect(() => {
    const handlePageChange = () => {
      setStats(prev => ({ 
        ...prev, 
        pagesVisited: Math.min(prev.pagesVisited + 1, 5) 
      }));
    };

    // Listen for navigation events
    window.addEventListener('popstate', handlePageChange);
    return () => window.removeEventListener('popstate', handlePageChange);
  }, []);

  // Track theme changes
  useEffect(() => {
    if (onThemeChange) {
      setStats(prev => ({ ...prev, themesTriedCount: prev.themesTriedCount + 1 }));
    }
  }, [onThemeChange]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const personalStats = [
    { 
      icon: Clock, 
      label: 'Session', 
      value: formatTime(stats.sessionTime),
      color: 'primary' 
    },
    { 
      icon: Mouse, 
      label: 'Clicks', 
      value: stats.clicks.toString(),
      color: 'success' 
    },
    { 
      icon: Eye, 
      label: 'Pages', 
      value: `${stats.pagesVisited}/5`,
      color: 'accent' 
    },
    { 
      icon: Palette, 
      label: 'Themes', 
      value: stats.themesTriedCount.toString(),
      color: 'secondary' 
    },
    { 
      icon: Monitor, 
      label: 'Device', 
      value: stats.device,
      color: 'warning' 
    },
  ];

  return (
    <div className="personal-stats">
      <div className="stats-container">
        {personalStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={`stat-item ${stat.color}`}>
              <Icon size={14} />
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};