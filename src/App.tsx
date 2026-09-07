import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FunnySlidingTicker } from './components/FunnySlidingTicker';
import { FunnyElementalPlayground } from './components/FunnyElementalPlayground';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MascotGuide } from './components/MascotGuide';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section as user scrolls
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for navbar
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive Ambient Floating Glow Background (reacts to Water-Ice and Fire) */}
      <AmbientBackground />

      {/* Sticky Navigation Bar with Elemental Switcher */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        
        {/* Continuous Funny Sliding Developer Marquee Ticker */}
        <FunnySlidingTicker />

        {/* Interactive Sliding Physics & Mascot Funny Costume Playground */}
        <FunnyElementalPlayground />

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Whimsical Mascot Tour Guide Companion */}
      <MascotGuide activeSection={activeSection} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
