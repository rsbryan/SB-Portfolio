import { Theme } from '../types';

export const themes: Theme[] = [
  {
    name: 'cream',
    colors: {
      bg: '#f5f5dc',
      bgSecondary: '#f0f0e6',
      text: '#87ceeb',
      textSecondary: '#6bb6d6',
      textMuted: '#a0a0a0',
      primary: '#4682b4',
      secondary: '#5f9ea0',
      accent: '#20b2aa',
      error: '#cd5c5c',
      success: '#32cd32',
      warning: '#ffd700',
      border: '#d3d3d3',
    },
  },
  {
    name: 'dark',
    colors: {
      bg: '#1a1a1a',
      bgSecondary: '#2a2a2a',
      text: '#e2e2e2',
      textSecondary: '#b8b8b8',
      textMuted: '#888888',
      primary: '#e2b714',
      secondary: '#646cff',
      accent: '#ff6b6b',
      error: '#ff4757',
      success: '#2ed573',
      warning: '#ffa726',
      border: '#3a3a3a',
    },
  },
  {
    name: 'navy-gold',
    colors: {
      bg: '#0f1419',
      bgSecondary: '#1a1f2e',
      text: '#ffd700',
      textSecondary: '#b8860b',
      textMuted: '#556b8d',
      primary: '#ffd700',
      secondary: '#daa520',
      accent: '#ffed4e',
      error: '#ff6b6b',
      success: '#4ecdc4',
      warning: '#ffe066',
      border: '#2d3748',
    },
  },
  {
    name: 'terminal-green',
    colors: {
      bg: '#000000',
      bgSecondary: '#0a0a0a',
      text: '#00ff00',
      textSecondary: '#00cc00',
      textMuted: '#006600',
      primary: '#00ff00',
      secondary: '#00cc00',
      accent: '#33ff33',
      error: '#ff0000',
      success: '#00ff00',
      warning: '#ffff00',
      border: '#003300',
    },
  },
  {
    name: 'neon',
    colors: {
      bg: '#0d0221',
      bgSecondary: '#1a0933',
      text: '#ff00ff',
      textSecondary: '#00ffff',
      textMuted: '#6a0dad',
      primary: '#ff00ff',
      secondary: '#00ffff',
      accent: '#ff1493',
      error: '#ff073a',
      success: '#39ff14',
      warning: '#ffff00',
      border: '#4b0082',
    },
  },
  {
    name: 'minimalist',
    colors: {
      bg: '#ffffff',
      bgSecondary: '#f8f9fa',
      text: '#000000',
      textSecondary: '#333333',
      textMuted: '#666666',
      primary: '#000000',
      secondary: '#333333',
      accent: '#555555',
      error: '#dc3545',
      success: '#28a745',
      warning: '#ffc107',
      border: '#dee2e6',
    },
  },
  {
    name: 'sunset',
    colors: {
      bg: '#2d1b69',
      bgSecondary: '#3d2777',
      text: '#ff6b35',
      textSecondary: '#ff8c42',
      textMuted: '#8b5a3c',
      primary: '#ff6b35',
      secondary: '#ff8c42',
      accent: '#ffa726',
      error: '#e74c3c',
      success: '#2ecc71',
      warning: '#f39c12',
      border: '#5d4e75',
    },
  },
];

export const generateRandomTheme = (): Theme => {
  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 50) + 50;
    const lightness = Math.floor(Math.random() * 30) + 20;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const getRandomLightColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 40) + 60;
    const lightness = Math.floor(Math.random() * 20) + 70;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const primaryHue = Math.floor(Math.random() * 360);
  const complementaryHue = (primaryHue + 180) % 360;

  return {
    name: 'random',
    colors: {
      bg: getRandomColor(),
      bgSecondary: getRandomColor(),
      text: `hsl(${primaryHue}, 70%, 80%)`,
      textSecondary: `hsl(${primaryHue}, 60%, 70%)`,
      textMuted: `hsl(${primaryHue}, 40%, 50%)`,
      primary: `hsl(${primaryHue}, 80%, 70%)`,
      secondary: `hsl(${complementaryHue}, 70%, 65%)`,
      accent: `hsl(${(primaryHue + 90) % 360}, 75%, 75%)`,
      error: '#ff4757',
      success: '#2ed573',
      warning: '#ffa726',
      border: `hsl(${primaryHue}, 30%, 40%)`,
    },
  };
};