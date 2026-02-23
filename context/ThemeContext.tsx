'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const applyTheme = (newTheme: Theme) => {
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

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
