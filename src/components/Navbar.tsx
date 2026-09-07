import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Menu, 
  X, 
  Terminal, 
  Code2, 
  FolderGit2, 
  Award, 
  Mail,
  Snowflake,
  Flame
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const isIce = theme === 'water-ice';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: Terminal },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isIce
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20 shadow-xl shadow-cyan-950/30 py-3'
            : 'bg-slate-950/85 backdrop-blur-md border-b border-orange-500/20 shadow-xl shadow-orange-950/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2.5 text-white font-bold tracking-tight text-xl transition-colors cursor-pointer"
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg transition-transform group-hover:scale-105 ${
            isIce 
              ? 'bg-gradient-to-br from-cyan-400 to-blue-600 shadow-cyan-500/30' 
              : 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 shadow-orange-500/30'
          }`}>
            {isIce ? '❄️' : '🔥'}
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Kundhan <span className={isIce ? 'text-cyan-400' : 'text-orange-400'}>Rao</span>
          </span>
        </a>

        {/* Desktop Nav Links in Elemental Container */}
        <nav className={`hidden md:flex items-center gap-6 px-5 py-2 rounded-2xl text-sm font-medium transition-all shadow-lg ${
          isIce
            ? 'bg-slate-900/80 border border-cyan-500/25 text-slate-300 shadow-cyan-950/20'
            : 'bg-slate-900/80 border border-orange-500/25 text-slate-300 shadow-orange-950/20'
        }`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors cursor-pointer ${
                  isActive 
                    ? isIce ? 'text-cyan-400 font-semibold' : 'text-orange-400 font-semibold'
                    : isIce ? 'text-slate-300 hover:text-cyan-300' : 'text-slate-300 hover:text-orange-300'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Elemental Switcher & Social Links */}
        <div className="hidden sm:flex items-center gap-3 border-l border-white/10 pl-5">
          
          {/* Animated Elemental Sliding Toggle */}
          <button
            id="elemental-theme-toggle"
            onClick={toggleTheme}
            className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold transition-all cursor-pointer shadow-md active:scale-95 ${
              isIce
                ? 'bg-cyan-950/70 border-cyan-400/40 text-cyan-200 hover:border-cyan-300 shadow-cyan-500/10'
                : 'bg-orange-950/70 border-orange-500/40 text-orange-200 hover:border-orange-400 shadow-orange-500/10'
            }`}
            title={isIce ? 'Switch to Fire Theme' : 'Switch to Water-Ice Theme'}
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                isIce ? 'bg-cyan-400 text-slate-950' : 'bg-orange-500 text-white'
              }`}
            >
              {isIce ? <Snowflake className="w-3 h-3" /> : <Flame className="w-3 h-3" />}
            </motion.div>
            <span>{isIce ? 'Glacial Ice 🧊' : 'Inferno Fire 🔥'}</span>
          </button>

          <a
            id="nav-github-link"
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-xl border text-slate-300 transition-all shadow-sm ${
              isIce
                ? 'bg-slate-900/80 border-cyan-500/20 hover:text-cyan-300 hover:border-cyan-400'
                : 'bg-slate-900/80 border-orange-500/20 hover:text-orange-300 hover:border-orange-400'
            }`}
            aria-label="GitHub Profile"
            title="GitHub Profile (kundhanpawar)"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            id="nav-linkedin-link"
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-xl border text-slate-300 transition-all shadow-sm ${
              isIce
                ? 'bg-slate-900/80 border-cyan-500/20 hover:text-cyan-300 hover:border-cyan-400'
                : 'bg-slate-900/80 border-orange-500/20 hover:text-orange-300 hover:border-orange-400'
            }`}
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile (S Kundhan Rao Pawar)"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`px-4 py-2 text-white rounded-xl text-xs font-semibold shadow-lg active:scale-95 transition-all cursor-pointer ${
              isIce
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/25 hover:shadow-cyan-500/40'
                : 'bg-gradient-to-r from-orange-500 to-red-600 shadow-orange-500/25 hover:shadow-orange-500/40'
            }`}
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu & Quick Elemental Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border text-xs cursor-pointer ${
              isIce ? 'bg-cyan-950 border-cyan-400/40 text-cyan-300' : 'bg-orange-950 border-orange-500/40 text-orange-300'
            }`}
            title="Toggle theme"
          >
            {isIce ? '🧊' : '🔥'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl ${
              isIce ? 'bg-slate-950/95 border-cyan-500/30' : 'bg-slate-950/95 border-orange-500/30'
            }`}
          >
            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive 
                        ? isIce ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' : 'bg-orange-500/15 text-orange-300 border border-orange-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={toggleTheme}
                className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 cursor-pointer"
              >
                {isIce ? '🔥 Switch to Fire Theme' : '🧊 Switch to Water-Ice Theme'}
              </button>
              <div className="flex gap-2">
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-white">
                  <Github className="w-4 h-4" />
                </a>
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
