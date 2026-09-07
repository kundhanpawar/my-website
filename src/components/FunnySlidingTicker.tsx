import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Snowflake, Sparkles, Laugh, Zap, Wind, RefreshCw, AlertTriangle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

export const FunnySlidingTicker: React.FC = () => {
  const { theme } = useTheme();
  const isIce = theme === 'water-ice';
  const [clickedMessage, setClickedMessage] = useState<string | null>(null);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [isWobbly, setIsWobbly] = useState<boolean>(false);

  const iceNews = [
    { icon: '🧊', text: "BREAKING: C Pointer slipped on black ice and safely landed inside malloc'd heap!", tag: "WINTER FIX" },
    { icon: '🐧', text: "Penguin OS kernel reported: 0° Kelvin achieved through pure compiler optimization.", tag: "SUB-ZERO" },
    { icon: '🌊', text: "Liquid cooling leak: Code is now literally streaming in real-time.", tag: "HYDRO LOGIC" },
    { icon: '🍦', text: "Prof. Pointer caught eating vanilla ice cream during an operating system lecture.", tag: "FACULTY NEWS" },
    { icon: '⚡', text: "Byte the Bot installed cryogenic fan: +400% FPS, -100% bugs, +99% goosebumps.", tag: "BENCHMARK" },
    { icon: '❄️', text: "Fun Fact: Kundhan's smart lighting system can freeze photons if you look at it nicely.", tag: "PHYSICS EXCEPTION" }
  ];

  const fireNews = [
    { icon: '🔥', text: "ALERT: Infinite loop generated enough thermal wattage to heat all of Reva campus!", tag: "THERMAL RUNAWAY" },
    { icon: '☕', text: "Coffee intake reached critical 120°C: Kundhan wrote 400 lines of C in 3 seconds flat.", tag: "SUPERCHARGED" },
    { icon: '🌋', text: "Volcanic GPU status: Model training accuracy is so hot it melted the loss curve.", tag: "INFERNO AI" },
    { icon: '🥓', text: "Sparky roasted a tiny digital marshmallow over an overclocked Arduino resistor.", tag: "HARDWARE HACK" },
    { icon: '🧨', text: "Git commit pushed with 50 flame emojis: Merge conflict resolved by total annihilation.", tag: "FIRE WALL" },
    { icon: '🌶️', text: "Spice warning: Algorithms calibrated to Extra Spicy tier.", tag: "HOT ALGO" }
  ];

  const activeNews = isIce ? iceNews : fireNews;

  const handleItemClick = (text: string, e: React.MouseEvent) => {
    setClickedMessage(text);
    setIsWobbly(true);
    setTimeout(() => setIsWobbly(false), 800);

    // Funny celebratory confetti burst
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
      colors: isIce ? ['#38bdf8', '#0284c7', '#e0f2fe', '#06b6d4'] : ['#f97316', '#ef4444', '#facc15', '#b91c1c']
    });

    setTimeout(() => setClickedMessage(null), 3500);
  };

  const toggleSpeed = () => {
    setSpeedMultiplier(prev => (prev === 1 ? 2.5 : prev === 2.5 ? 0.4 : 1));
  };

  return (
    <div className="relative z-20 w-full overflow-hidden my-6 select-none">
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <div className={`relative rounded-2xl border transition-all duration-500 overflow-hidden shadow-xl ${
          isIce 
            ? 'bg-gradient-to-r from-sky-950/70 via-cyan-950/60 to-blue-950/70 border-cyan-400/30 shadow-cyan-500/10'
            : 'bg-gradient-to-r from-orange-950/70 via-amber-950/60 to-red-950/70 border-orange-500/35 shadow-orange-500/10'
        }`}>
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isIce ? 'bg-cyan-400' : 'bg-orange-400'
                }`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${
                  isIce ? 'bg-cyan-400' : 'bg-orange-500'
                }`} />
              </span>
              <span className={`font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                isIce ? 'text-cyan-300' : 'text-orange-300'
              }`}>
                {isIce ? <Snowflake className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} /> : <Flame className="w-3.5 h-3.5 animate-pulse" />}
                {isIce ? '🧊 GLACIAL SLIDING NEWSFEED' : '🔥 INFERNO SLIDING NEWSWIRE'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-[11px] text-slate-400">
                (Click any headline for funny confetti!)
              </span>
              <button
                onClick={toggleSpeed}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                  isIce
                    ? 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40'
                    : 'bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 border border-orange-500/40'
                }`}
                title="Change sliding speed"
              >
                <Wind className="w-3 h-3" />
                <span>Slide: {speedMultiplier === 1 ? '1x' : speedMultiplier === 2.5 ? '⚡ TURBO' : '🐢 CHILL'}</span>
              </button>
            </div>
          </div>

          {/* Continuous Sliding Marquee Track */}
          <div className="relative py-3 overflow-hidden flex items-center">
            {/* Left/Right Fade Gradients for smooth fade */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-950/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-950/80 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex items-center gap-6 whitespace-nowrap"
              animate={{
                x: ['0%', '-50%']
              }}
              transition={{
                ease: 'linear',
                duration: 32 / speedMultiplier,
                repeat: Infinity
              }}
            >
              {/* Double array for seamless infinite sliding loop */}
              {[...activeNews, ...activeNews].map((item, idx) => (
                <button
                  key={`${item.tag}-${idx}`}
                  onClick={(e) => handleItemClick(item.text, e)}
                  className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl border text-xs cursor-pointer transition-all ${
                    isIce
                      ? 'bg-cyan-900/30 border-cyan-400/20 hover:border-cyan-300 hover:bg-cyan-800/40 text-slate-200'
                      : 'bg-orange-900/30 border-orange-500/25 hover:border-orange-400 hover:bg-orange-800/40 text-slate-200'
                  } hover:scale-105 active:scale-95`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isIce ? 'bg-cyan-500/20 text-cyan-300' : 'bg-orange-500/20 text-orange-300'
                  }`}>
                    {item.tag}
                  </span>
                  <span className="font-medium text-slate-200">{item.text}</span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Interactive Popover Feedback */}
          <AnimatePresence>
            {clickedMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className={`p-2.5 text-center text-xs font-mono font-semibold border-t ${
                  isIce
                    ? 'bg-cyan-500/15 border-cyan-400/30 text-cyan-200'
                    : 'bg-orange-500/15 border-orange-400/30 text-orange-200'
                }`}
              >
                🎉 <span className="underline">CONFIRMED REAL CODEBASE EVENT:</span> "{clickedMessage}"
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
