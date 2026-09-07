import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowUp,
  Snowflake,
  Flame
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MascotAvatar } from './MascotAvatar';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isIce = theme === 'water-ice';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Brief Bio (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <div className={`w-8 h-8 rounded-lg border flex items-center justify-center font-mono font-bold text-sm ${
                isIce 
                  ? 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400' 
                  : 'bg-orange-500/15 border-orange-500/30 text-orange-400'
              }`}>
                KR
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mb-4">
              B.Tech in Artificial Intelligence & Data Science at Reva University. Building deterministic C systems, predictive data analytics, and adaptive IoT hardware.
            </p>

            {/* Mascot Trio Salute */}
            <div className={`flex items-center gap-3 p-3 rounded-2xl border shadow-lg ${
              isIce 
                ? 'bg-slate-900/80 border-cyan-500/25' 
                : 'bg-slate-900/80 border-orange-500/25'
            }`}>
              <div className="flex -space-x-2">
                <MascotAvatar id="byte" size="sm" />
                <MascotAvatar id="sparky" size="sm" />
                <MascotAvatar id="pointer" size="sm" />
              </div>
              <span className="text-[11px] text-slate-200">
                Byte, Sparky & Prof. Pointer thank you for stopping by!
              </span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`transition-colors ${isIce ? 'hover:text-cyan-400' : 'hover:text-orange-400'}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold mb-3">
              Direct Channels
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Mail className={`w-3.5 h-3.5 ${isIce ? 'text-cyan-400' : 'text-orange-400'}`} />
                <a href={PERSONAL_INFO.socials.emailMailto} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className={`w-3.5 h-3.5 ${isIce ? 'text-sky-400' : 'text-amber-400'}`} />
                <a href={PERSONAL_INFO.socials.phoneTel} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors ${
                    isIce ? 'hover:border-cyan-400/50' : 'hover:border-orange-400/50'
                  }`}
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors ${
                    isIce ? 'hover:border-sky-400/50' : 'hover:border-amber-400/50'
                  }`}
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} S Kundhan Rao Pawar. Crafted with React, Tailwind CSS & Framer Motion.</p>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer ${
              isIce ? 'hover:text-cyan-300' : 'hover:text-orange-300'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
