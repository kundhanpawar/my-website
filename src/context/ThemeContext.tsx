import React, { createContext, useContext, useState, useEffect } from 'react';

export type ElementalTheme = 'water-ice' | 'fire';

interface ThemeContextType {
  theme: ElementalTheme;
  setTheme: (theme: ElementalTheme) => void;
  toggleTheme: () => void;
  playThemeSound: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ElementalTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kr_elemental_theme');
      if (saved === 'fire' || saved === 'water-ice') return saved;
    }
    return 'water-ice'; // Default to glacial water-ice theme
  });

  const playThemeSound = (targetTheme?: ElementalTheme) => {
    if (typeof window === 'undefined') return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const current = targetTheme || theme;
      
      if (current === 'water-ice') {
        // Glacial Ice Crystal Chime / Splash
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1046, ctx.currentTime + 0.18);
        osc.frequency.exponentialRampToValueAtTime(1567, ctx.currentTime + 0.35);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } else {
        // Fire Sizzle / Whoosh
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.12);
        osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      }
    } catch {
      // Audio fallback silent
    }
  };

  const setTheme = (newTheme: ElementalTheme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kr_elemental_theme', newTheme);
    }
    playThemeSound(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'water-ice' ? 'fire' : 'water-ice';
    setTheme(nextTheme);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('theme-water-ice', 'theme-fire');
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, playThemeSound }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
