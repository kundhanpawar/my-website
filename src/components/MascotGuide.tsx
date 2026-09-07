import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Laugh, 
  Volume2, 
  VolumeX, 
  Bot, 
  Zap, 
  Glasses,
  ArrowRight,
  Flame,
  Snowflake
} from 'lucide-react';
import { MASCOTS } from '../data/portfolioData';
import { MascotAvatar } from './MascotAvatar';
import { useTheme } from '../context/ThemeContext';

interface MascotGuideProps {
  activeSection: string;
}

export const MascotGuide: React.FC<MascotGuideProps> = ({ activeSection }) => {
  const { theme } = useTheme();
  const isIce = theme === 'water-ice';

  const [selectedMascotIndex, setSelectedMascotIndex] = useState<number>(0);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [customSpeech, setCustomSpeech] = useState<string | null>(null);
  const [speechKey, setSpeechKey] = useState<number>(0);
  const [jokeCount, setJokeCount] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  const activeMascot = MASCOTS[selectedMascotIndex];

  // Pick quote based on active section unless custom joke is active
  const currentQuote = customSpeech || (activeMascot.sectionQuotes as Record<string, string>)[activeSection] || activeMascot.sectionQuotes.hero;

  // Clear custom speech after section changes
  useEffect(() => {
    setCustomSpeech(null);
  }, [activeSection, selectedMascotIndex]);

  const handleNextJoke = () => {
    const jokes = activeMascot.randomJokes;
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setCustomSpeech(randomJoke);
    setSpeechKey(prev => prev + 1);
    setJokeCount(prev => prev + 1);

    // Subtle audio blip using Web Audio API if user has enabled sound
    if (soundEnabled && typeof window !== 'undefined' && window.AudioContext) {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(selectedMascotIndex === 0 ? 580 : selectedMascotIndex === 1 ? 750 : 380, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } catch {
        // Safe fallback
      }
    }
  };

  const handleScrollToNextSection = () => {
    const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact'];
    const currentIndex = sections.indexOf(activeSection);
    const nextSection = sections[(currentIndex + 1) % sections.length];
    const element = document.getElementById(nextSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside 
      id="mascot-guide-dock" 
      aria-label="Interactive Mascot Tour Guide"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-sm sm:max-w-md pointer-events-auto"
    >
      <AnimatePresence mode="wait">
        {isMinimized ? (
          // Minimized Floating Pill
          <motion.button
            key="minimized-pill"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={() => setIsMinimized(false)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md shadow-2xl text-slate-200 hover:text-white transition-all group cursor-pointer border ${
              isIce 
                ? 'bg-slate-900/95 border-cyan-400/50 hover:border-cyan-300 shadow-cyan-950/50' 
                : 'bg-slate-900/95 border-orange-400/50 hover:border-orange-300 shadow-orange-950/50'
            }`}
            title="Open Mascot Tour Guide"
          >
            <MascotAvatar id={activeMascot.id} size="sm" animated={false} />
            <div className="text-left">
              <span className={`text-xs font-semibold block leading-tight ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}>
                {activeMascot.name} Guide
              </span>
              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> Click to chat!
              </span>
            </div>
            <ChevronUp className="w-4 h-4 text-slate-400 group-hover:text-white ml-1" />
          </motion.button>
        ) : (
          // Expanded Interactive Dialogue Card
          <motion.div
            key="expanded-card"
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 24, stiffness: 260 }}
            className={`backdrop-blur-xl p-4 sm:p-5 rounded-3xl border shadow-2xl relative overflow-hidden ${
              isIce 
                ? 'bg-slate-950/95 border-cyan-500/35 shadow-cyan-950/50' 
                : 'bg-slate-950/95 border-orange-500/35 shadow-orange-950/50'
            }`}
          >
            {/* Top Accent Gradient Line */}
            <div className={`absolute top-0 left-0 right-0 h-1 ${
              isIce 
                ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500' 
                : 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-500'
            }`} />

            {/* Header: Mascot info + actions */}
            <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase border ${
                  isIce ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' : 'bg-orange-500/10 text-orange-300 border-orange-500/30'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-ping ${isIce ? 'bg-cyan-400' : 'bg-orange-400'}`} />
                  TOUR GUIDE
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Exploring: <strong className="text-slate-200 capitalize font-medium">{activeSection}</strong>
                </span>
              </div>

              <div className="flex items-center gap-1">
                {/* Sound FX toggle */}
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    soundEnabled 
                      ? (isIce ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-500/40' : 'text-orange-300 bg-orange-500/20 border border-orange-500/40') 
                      : 'text-slate-400 hover:text-slate-300'
                  }`}
                  title={soundEnabled ? 'Disable Mascot Sounds' : 'Enable Mascot Sounds'}
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                </button>

                {/* Minimize button */}
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  title="Minimize Tour Guide"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mascot Avatar and Speech Bubble Area */}
            <div className="flex items-start gap-3 my-2">
              <div className="flex-shrink-0 flex flex-col items-center">
                <MascotAvatar id={activeMascot.id} size="md" />
                <span className="text-[10px] font-mono text-slate-400 mt-1 text-center font-medium">
                  {activeMascot.name}
                </span>
              </div>

              {/* Speech Bubble */}
              <div className="flex-1 bg-white/5 rounded-2xl p-3.5 border border-white/10 relative text-left backdrop-blur-sm">
                <div className="absolute top-4 -left-1.5 w-3 h-3 bg-slate-900 border-l border-t border-white/10 rotate-[-45deg]" />

                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-slate-300">
                    {activeMascot.title}
                  </span>
                  {customSpeech && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Witty Joke #{jokeCount}
                    </span>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${activeMascot.id}-${activeSection}-${speechKey}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-slate-200 leading-relaxed"
                  >
                    "{currentQuote}"
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Mascot Switcher Tabs */}
            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-slate-500 uppercase font-mono mr-1">Switch:</span>
                {MASCOTS.map((mascot, index) => {
                  const isCurrent = index === selectedMascotIndex;
                  return (
                    <button
                      key={mascot.id}
                      onClick={() => {
                        setSelectedMascotIndex(index);
                        setCustomSpeech(null);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all flex items-center gap-1 cursor-pointer ${
                        isCurrent
                          ? isIce
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                            : 'bg-orange-500/20 text-orange-300 border border-orange-500/40'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      {index === 0 && <Bot className="w-3 h-3" />}
                      {index === 1 && <Zap className="w-3 h-3" />}
                      {index === 2 && <Glasses className="w-3 h-3" />}
                      {mascot.name}
                    </button>
                  );
                })}
              </div>

              {/* Action: Tell me a joke or Next section */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleNextJoke}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                  title="Hear a funny developer joke from this mascot"
                >
                  <Laugh className="w-3 h-3" />
                  <span className="hidden xs:inline">Tell Joke</span>
                </button>

                <button
                  onClick={handleScrollToNextSection}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/10 transition-colors cursor-pointer"
                  title="Next Section"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};
