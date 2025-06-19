import React from 'react';
import { Activity, Zap, Package, TrendingUp, Clock } from 'lucide-react';

export const LiveMetrics: React.FC = () => {
  const [metrics, setMetrics] = React.useState({
    bundleSize: 142,
    loadTime: 0.8,
    lighthouseScore: 98,
    uptime: 99.9,
    lastUpdated: new Date()
  });

  React.useEffect(() => {
    const calculateMetrics = () => {
      // Simulate real-time metrics with slight variations
      const bundleSize = Math.round(142 + (Math.random() - 0.5) * 10);
      const loadTime = Math.round((0.8 + (Math.random() - 0.5) * 0.4) * 100) / 100;
      const lighthouseScore = Math.floor(Math.random() * 6) + 95;
      const uptime = Math.round((99.5 + Math.random() * 0.5) * 100) / 100;
      
      setMetrics({
        bundleSize,
        loadTime,
        lighthouseScore,
        uptime,
        lastUpdated: new Date()
      });
    };

    calculateMetrics();
    const interval = setInterval(calculateMetrics, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Package, label: 'Bundle', value: `${metrics.bundleSize}kb`, color: 'primary' },
    { icon: Zap, label: 'Load', value: `${metrics.loadTime}s`, color: 'success' },
    { icon: Activity, label: 'Score', value: metrics.lighthouseScore.toString(), color: 'accent' },
    { icon: TrendingUp, label: 'Uptime', value: `${metrics.uptime}%`, color: 'secondary' },
  ];

  return (
    <div className="live-metrics">
      <div className="metrics-container">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={`metric-item ${stat.color}`}>
              <Icon size={14} />
              <span className="metric-label">{stat.label}</span>
              <span className="metric-value">{stat.value}</span>
            </div>
          );
        })}
        <div className="last-updated">
          <Clock size={12} />
          <span>{metrics.lastUpdated.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
};