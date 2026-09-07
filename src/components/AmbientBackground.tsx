import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export const AmbientBackground: React.FC = () => {
  const { theme } = useTheme();
  const isIce = theme === 'water-ice';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-all duration-700" aria-hidden="true">
      {/* Primary Elemental Glow Blobs */}
      <div 
        className={`absolute top-[-100px] right-[-100px] w-[450px] h-[450px] rounded-full blur-[130px] transition-colors duration-700 pointer-events-none ${
          isIce ? 'bg-cyan-500/20' : 'bg-orange-500/25'
        }`} 
      />
      <div 
        className={`absolute bottom-[-100px] left-[-100px] w-[450px] h-[450px] rounded-full blur-[130px] transition-colors duration-700 pointer-events-none ${
          isIce ? 'bg-blue-600/20' : 'bg-red-600/25'
        }`} 
      />

      {/* Floating dynamic element 1 */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute top-1/3 -left-20 w-[380px] h-[380px] rounded-full blur-[130px] transition-colors duration-700 pointer-events-none ${
          isIce ? 'bg-sky-400/18' : 'bg-amber-500/20'
        }`}
      />

      {/* Floating dynamic element 2 */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute top-2/3 right-10 w-[400px] h-[400px] rounded-full blur-[140px] transition-colors duration-700 pointer-events-none ${
          isIce ? 'bg-teal-500/15' : 'bg-rose-600/18'
        }`}
      />

      {/* Floating Sparkles / Embers particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${(i * 8.5) % 100}vw`,
              y: isIce ? '-5vh' : '105vh',
              opacity: 0,
              scale: 0.6
            }}
            animate={{
              y: isIce ? '105vh' : '-5vh',
              opacity: [0, 0.8, 0.9, 0],
              scale: [0.6, 1.2, 0.8]
            }}
            transition={{
              duration: 8 + (i % 6) * 2,
              repeat: Infinity,
              delay: (i * 0.7),
              ease: 'easeInOut'
            }}
            className={`absolute w-2 h-2 rounded-full ${
              isIce 
                ? 'bg-cyan-300 shadow-[0_0_10px_#38bdf8]' 
                : 'bg-amber-400 shadow-[0_0_10px_#f97316]'
            }`}
          />
        ))}
      </div>

      {/* Subtle fine geometric texture */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: isIce
            ? `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`
            : `linear-gradient(to right, #f97316 1px, transparent 1px), linear-gradient(to bottom, #f97316 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
};

