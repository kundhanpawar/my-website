import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { Snowflake, Flame, Sparkles, Zap, ArrowRight, Play, RefreshCw, Smile, Laugh, Shuffle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { MascotAvatar } from './MascotAvatar';
import confetti from 'canvas-confetti';

export const FunnyElementalPlayground: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isIce = theme === 'water-ice';

  const [slideSpeed, setSlideSpeed] = useState<number>(100);
  const [slideStatus, setSlideStatus] = useState<string>('Ready on track');
  const [isSuperSliding, setIsSuperSliding] = useState<boolean>(false);
  const [mascotCostume, setMascotCostume] = useState<number>(0);
  const [funScore, setFunScore] = useState<number>(42);

  // Motion value for interactive dragging puck
  const x = useMotionValue(0);

  const iceCostumes = [
    { title: "Cryogenic Chill", desc: "Byte wearing sub-zero laser goggles & eating double scoop ice cream", icon: "🍦" },
    { title: "Penguin Protocol", desc: "Sparky strapped onto miniature ice skates with turbo rocket boosters", icon: "🐧" },
    { title: "Liquid Nitrogen Prof", desc: "Prof. Pointer using an icicle as a laser pointer in lecture", icon: "🧊" }
  ];

  const fireCostumes = [
    { title: "Lava Overclocker", desc: "Byte wearing flame-retardant sunglasses with smoke exhaust pipes", icon: "🕶️" },
    { title: "Sparky's BBQ Grill", desc: "Sparky roasting digital marshmallows directly on an overclocked GPU", icon: "🥓" },
    { title: "Volcano Professor", desc: "Prof. Pointer holding a fire extinguisher labeled 'C Dynamic Memory'", icon: "🌋" }
  ];

  const currentCostumes = isIce ? iceCostumes : fireCostumes;

  const triggerSuperSlide = () => {
    setIsSuperSliding(true);
    setSlideStatus('⚡ HYPER VELOCITY: 9,999 km/h! Friction physics broken!');
    setFunScore(prev => prev + 15);

    // Audio cartoon spring sound
    if (typeof window !== 'undefined') {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = isIce ? 'sine' : 'sawtooth';
        osc.frequency.setValueAtTime(isIce ? 350 : 220, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(isIce ? 1400 : 750, ctx.currentTime + 0.35);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } catch {}
    }

    setTimeout(() => {
      setIsSuperSliding(false);
      setSlideStatus('Smooth stop! Puck safely parked in memory register.');
    }, 1800);
  };

  const cycleCostume = () => {
    setMascotCostume((prev) => (prev + 1) % currentCostumes.length);
    setFunScore(prev => prev + 5);

    // Mini confetti
    confetti({
      particleCount: 15,
      spread: 50,
      origin: { x: 0.5, y: 0.6 },
      colors: isIce ? ['#38bdf8', '#0284c7', '#e0f2fe'] : ['#f97316', '#ef4444', '#facc15']
    });
  };

  return (
    <div className="w-full my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 overflow-hidden shadow-2xl relative ${
          isIce
            ? 'bg-gradient-to-br from-slate-950 via-cyan-950/40 to-slate-900 border-cyan-400/30 shadow-cyan-500/10'
            : 'bg-gradient-to-br from-slate-950 via-orange-950/40 to-slate-900 border-orange-500/35 shadow-orange-500/10'
        }`}>
          {/* Top Header Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-2">
                {isIce ? (
                  <span className="text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                    <Snowflake className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                    INTERACTIVE ICE SLIDER & FUN ARCADE
                  </span>
                ) : (
                  <span className="text-orange-300 bg-orange-500/15 border border-orange-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 animate-pulse" />
                    INTERACTIVE FIRE ACCELERATOR & FUN ARCADE
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                {isIce ? 'Glacial Ice Sliding Arena' : 'Molten Flame Acceleration Zone'}
                <span className="text-xs font-normal px-2.5 py-1 rounded-full bg-white/10 font-mono text-slate-300">
                  Fun Meter: {funScore}%
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Drag or fling the elemental puck below across the frictionless track, or dress our mascots in silly outfits!
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 shadow-lg active:scale-95 ${
                  isIce
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/25'
                    : 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-cyan-500/25'
                }`}
                title="Switch to opposite element"
              >
                {isIce ? <Flame className="w-4 h-4" /> : <Snowflake className="w-4 h-4" />}
                <span>{isIce ? 'Ignite Fire Theme 🔥' : 'Freeze Water-Ice Theme 🧊'}</span>
              </button>
            </div>
          </div>

          {/* Playground Grid: Left Track Slider, Right Funny Mascot Dress-up */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-center">
            
            {/* Left 7 cols: The Interactive Sliding Physics Track */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>[TRACK: 0m] START</span>
                <span className={`font-semibold ${isIce ? 'text-cyan-300' : 'text-orange-300'}`}>
                  STATUS: {slideStatus}
                </span>
                <span>[FINISH: 100m]</span>
              </div>

              {/* The Slide Runway Track */}
              <div className={`relative h-28 rounded-2xl border p-2 flex items-center overflow-hidden select-none transition-all ${
                isIce 
                  ? 'bg-slate-900/90 border-cyan-500/30 shadow-inner shadow-cyan-950'
                  : 'bg-slate-900/90 border-orange-500/35 shadow-inner shadow-orange-950'
              }`}>
                {/* Visual Track Lines / Speed Strips */}
                <div className="absolute inset-0 flex items-center justify-around opacity-15 pointer-events-none font-mono text-[10px] text-white">
                  <span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span>
                </div>

                {/* Animated Background Drift Lines */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  animate={{ backgroundPosition: ['0px 0px', '200px 0px'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                  style={{
                    backgroundImage: isIce
                      ? 'radial-gradient(circle at 10px 10px, #38bdf8 1.5px, transparent 0)'
                      : 'radial-gradient(circle at 10px 10px, #f97316 1.5px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* The Draggable / Super-Sliding Object */}
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 340 }}
                  dragElastic={0.2}
                  style={{ x }}
                  animate={isSuperSliding ? {
                    x: [0, 320, 20, 340, 0],
                    rotate: [0, 360, 720, 1080, 1440]
                  } : {}}
                  transition={isSuperSliding ? {
                    duration: 1.6,
                    ease: "easeInOut"
                  } : {}}
                  onDragEnd={(_, info) => {
                    const speed = Math.round(Math.abs(info.velocity.x));
                    setSlideSpeed(speed);
                    if (speed > 800) {
                      setSlideStatus(`🚀 CRAZY FAST SLIDE! Speed: ${speed} px/s!`);
                      setFunScore(prev => prev + 10);
                    } else {
                      setSlideStatus(`Slid at ${speed} px/s. Very graceful!`);
                    }
                  }}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-20 h-20 rounded-2xl cursor-grab active:cursor-grabbing flex flex-col items-center justify-center p-2 shadow-xl border relative z-10 ${
                    isIce
                      ? 'bg-gradient-to-tr from-cyan-500 to-sky-300 border-cyan-200 text-slate-950 shadow-cyan-500/40'
                      : 'bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-300 border-orange-200 text-slate-950 shadow-orange-500/40'
                  }`}
                >
                  <span className="text-2xl">{isIce ? '🧊' : '🔥'}</span>
                  <span className="text-[9px] font-mono font-extrabold uppercase mt-0.5 tracking-tighter">
                    {isIce ? 'Ice Puck' : 'Fireball'}
                  </span>
                </motion.div>

                {/* Target Finish Goal on right */}
                <div className={`ml-auto px-3 py-1.5 rounded-xl border text-[11px] font-mono font-bold flex items-center gap-1.5 ${
                  isIce ? 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300' : 'bg-orange-500/10 border-orange-400/30 text-orange-300'
                }`}>
                  <span>🎯 GOAL</span>
                </div>
              </div>

              {/* Action Trigger Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={triggerSuperSlide}
                  disabled={isSuperSliding}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-xs transition-all cursor-pointer flex items-center gap-2 active:scale-95 shadow-md ${
                    isIce
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
                      : 'bg-orange-500 hover:bg-orange-400 text-slate-950 shadow-orange-500/20'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>Launch Super Slide 🚀</span>
                </button>

                <span className="text-xs text-slate-400 font-mono">
                  (Or grab the {isIce ? 'ice puck' : 'fireball'} and fling it!)
                </span>
              </div>
            </div>

            {/* Right 5 cols: Funny Mascot Outfit & Banter Card */}
            <div className="lg:col-span-5">
              <div className={`p-5 rounded-2xl border transition-all ${
                isIce 
                  ? 'bg-slate-900/80 border-cyan-400/20' 
                  : 'bg-slate-900/80 border-orange-500/20'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Smile className="w-4 h-4 text-amber-400" />
                    Funny Mascot Look
                  </span>

                  <button
                    onClick={cycleCostume}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                      isIce
                        ? 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40'
                        : 'bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 border border-orange-500/40'
                    }`}
                  >
                    <Shuffle className="w-3 h-3" />
                    <span>Change Costume</span>
                  </button>
                </div>

                <div className="flex items-center gap-4 my-2">
                  <div className="relative flex-shrink-0">
                    <MascotAvatar id={mascotCostume === 0 ? 'byte' : mascotCostume === 1 ? 'sparky' : 'pointer'} size="lg" />
                    <span className="absolute -bottom-1 -right-1 text-xl bg-slate-950 p-0.5 rounded-full border border-white/20">
                      {currentCostumes[mascotCostume].icon}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {currentCostumes[mascotCostume].title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      "{currentCostumes[mascotCostume].desc}"
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Mascot Rating: ⭐⭐⭐⭐⭐</span>
                  <span className={isIce ? 'text-cyan-400' : 'text-orange-400'}>
                    Style: 100% {isIce ? 'Sub-Zero' : 'Blazing Hot'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
