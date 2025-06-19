import React from 'react';
import { Activity, Zap, Package, TrendingUp } from 'lucide-react';
import { performanceStats } from '../../data/content';

export const PerformanceStats: React.FC = () => {
  const stats = [
    { icon: Package, label: 'Bundle', value: performanceStats.bundleSize },
    { icon: Zap, label: 'Load Time', value: performanceStats.loadTime },
    { icon: Activity, label: 'Lighthouse', value: performanceStats.lighthouseScore.toString() },
    { icon: TrendingUp, label: 'Uptime', value: performanceStats.uptime },
  ];

  return (
    <div className="performance-stats">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="stat-item">
            <Icon size={14} />
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
          </div>
        );
      })}
    </div>
  );
};