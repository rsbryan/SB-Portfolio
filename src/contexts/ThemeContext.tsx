import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '../types';
import { themes, generateRandomTheme } from '../data/themes';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
  randomizeTheme: () => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = (themeName: string) => {
    const theme = themes.find(t => t.name === themeName) || themes[0];
    setCurrentTheme(theme);
    localStorage.setItem('preferred-theme', themeName);
  };

  const randomizeTheme = () => {
    // Exclude current theme from available options
    const availableThemes = themes.filter(t => t.name !== currentTheme.name);
    
    // 70% chance to pick from predefined themes, 30% chance for completely random
    if (Math.random() < 0.7 && availableThemes.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableThemes.length);
      setCurrentTheme(availableThemes[randomIndex]);
    } else {
      const randomTheme = generateRandomTheme();
      setCurrentTheme(randomTheme);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const colors = currentTheme.colors;
    
    root.style.setProperty('--color-bg', colors.bg);
    root.style.setProperty('--color-bg-secondary', colors.bgSecondary);
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-text-secondary', colors.textSecondary);
    root.style.setProperty('--color-text-muted', colors.textMuted);
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-error', colors.error);
    root.style.setProperty('--color-success', colors.success);
    root.style.setProperty('--color-warning', colors.warning);
    root.style.setProperty('--color-border', colors.border);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, randomizeTheme, availableThemes: themes }}>
      {children}
    </ThemeContext.Provider>
  );
};