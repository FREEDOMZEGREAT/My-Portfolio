
import { useState, useEffect } from 'react';
const STORAGE_KEY = 'portfolio-theme';

export function useTheme() {
  // 🎯 STATE: current theme
  const [theme, setTheme] = useState(() => {
    // 1. Check localStorage first
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    
    // 2. Fall back to system preference
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // 3. Default to the portfolio's dark theme
    return 'dark';
  });
  
  // 🎯 EFFECT: Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);
  
  // 🎯 EFFECT: Listen to system preference changes
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only change if user hasn't set a preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);
  
  // 🎯 Toggle
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  };
}

export default useTheme;