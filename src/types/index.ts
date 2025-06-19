export interface Theme {
  name: string;
  colors: {
    bg: string;
    bgSecondary: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    primary: string;
    secondary: string;
    accent: string;
    error: string;
    success: string;
    warning: string;
    border: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  image?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Contact {
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface PerformanceStats {
  bundleSize: string;
  loadTime: string;
  lighthouseScore: number;
  framework: string;
  uptime: string;
}

export interface StatusInfo {
  location: string;
  weather: string;
  temperature: string;
  activity: string;
}

export interface LiveMetrics {
  bundleSize: number;
  loadTime: number;
  lighthouseScore: number;
  uptime: number;
  lastUpdated: Date;
}

export type PageType = 'projects' | 'skills' | 'experience' | 'contact' | 'about';