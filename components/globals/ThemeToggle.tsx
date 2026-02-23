'use client';

import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg glass hover:bg-color-glass-border transition-all duration-300 group"
      aria-label="Toggle dark/light mode"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-color-foreground group-hover:text-color-primary transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-color-foreground group-hover:text-color-primary transition-colors" />
      )}
    </button>
  );
}
