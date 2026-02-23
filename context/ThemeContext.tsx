'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const applyTheme = (newTheme: Theme) => {
  if (typeof window === 'undefined') return;
  
  const html = document.documentElement;
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  if (newTheme === 'light') {
    // Light mode CSS variables
    html.style.setProperty('--color-background', '#ffffff');
    html.style.setProperty('--color-foreground', '#0f0e17');
    html.style.setProperty('--color-muted', '#9ca3af');
    html.style.setProperty('--color-muted-foreground', '#374151');
    html.style.setProperty('--color-card', 'rgba(0, 0, 0, 0.04)');
    html.style.setProperty('--color-card-border', 'rgba(0, 0, 0, 0.1)');
    html.style.setProperty('--color-glass', 'rgba(255, 255, 255, 0.9)');
    html.style.setProperty('--color-glass-border', 'rgba(0, 0, 0, 0.15)');
    document.body.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)';
  } else {
    // Dark mode CSS variables
    html.style.setProperty('--color-background', '#0f0e17');
    html.style.setProperty('--color-foreground', '#ffffff');
    html.style.setProperty('--color-muted', '#6b7280');
    html.style.setProperty('--color-muted-foreground', '#e5e7eb');
    html.style.setProperty('--color-card', 'rgba(255, 255, 255, 0.08)');
    html.style.setProperty('--color-card-border', 'rgba(255, 255, 255, 0.15)');
    html.style.setProperty('--color-glass', 'rgba(255, 255, 255, 0.08)');
    html.style.setProperty('--color-glass-border', 'rgba(255, 255, 255, 0.15)');
    document.body.style.background = 'linear-gradient(135deg, #0f0e17 0%, #1a1925 100%)';
  }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {isMounted && children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
