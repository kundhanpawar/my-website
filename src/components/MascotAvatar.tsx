import React from 'react';
import { motion } from 'motion/react';

interface MascotAvatarProps {
  id: 'byte' | 'sparky' | 'pointer';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

export const MascotAvatar: React.FC<MascotAvatarProps> = ({
  id,
  size = 'md',
  animated = true,
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
  };

  const renderContent = () => {
    switch (id) {
      case 'byte':
        // Byte: The AI Neural Drone
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]">
            <defs>
              <linearGradient id="byte-body" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="byte-visor" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            {/* Floating shadow */}
            <ellipse cx="50" cy="92" rx="24" ry="5" fill="rgba(0,0,0,0.3)" />
            
            {/* Top antenna */}
            <line x1="50" y1="20" x2="50" y2="8" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="7" r="4" fill="#a855f7" className="animate-pulse" />

            {/* Side thruster wings */}
            <path d="M18 45 C12 40, 10 55, 18 60 Z" fill="#0284c7" />
            <path d="M82 45 C88 40, 90 55, 82 60 Z" fill="#0284c7" />

            {/* Drone main chassis */}
            <rect x="22" y="20" width="56" height="56" rx="20" fill="url(#byte-body)" stroke="#7dd3fc" strokeWidth="2" />

            {/* Visor screen */}
            <rect x="28" y="32" width="44" height="26" rx="10" fill="url(#byte-visor)" stroke="#38bdf8" strokeWidth="1.5" />

            {/* Digital Eyes */}
            <circle cx="40" cy="45" r="4" fill="#38bdf8" />
            <circle cx="60" cy="45" r="4" fill="#38bdf8" />
            <circle cx="41.5" cy="43.5" r="1.5" fill="#ffffff" />
            <circle cx="61.5" cy="43.5" r="1.5" fill="#ffffff" />

            {/* Visor soundwave / smile */}
            <path d="M44 51 Q50 54 56 51" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Subtle tech decal */}
            <rect x="34" y="64" width="32" height="4" rx="2" fill="#0369a1" />
            <circle cx="39" cy="66" r="1" fill="#7dd3fc" />
            <circle cx="44" cy="66" r="1" fill="#7dd3fc" />
            <circle cx="49" cy="66" r="1" fill="#7dd3fc" />
          </svg>
        );

      case 'sparky':
        // Sparky: The IoT Luminary Bug
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]">
            <defs>
              <linearGradient id="sparky-head" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <radialGradient id="sparky-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a7f3d0" stopOpacity="1" />
                <stop offset="60%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Ground shadow */}
            <ellipse cx="50" cy="92" rx="22" ry="4" fill="rgba(0,0,0,0.3)" />

            {/* Glowing abdomen bulb */}
            <circle cx="50" cy="68" r="18" fill="url(#sparky-glow)" />
            <circle cx="50" cy="68" r="14" fill="#6ee7b7" stroke="#059669" strokeWidth="2" />
            {/* Filament inside bulb */}
            <path d="M46 68 L48 64 L52 64 L54 68" stroke="#047857" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Glass wings */}
            <path d="M26 40 C14 26, 36 18, 44 38 Z" fill="rgba(255,255,255,0.45)" stroke="#34d399" strokeWidth="1" />
            <path d="M74 40 C86 26, 64 18, 56 38 Z" fill="rgba(255,255,255,0.45)" stroke="#34d399" strokeWidth="1" />

            {/* Head */}
            <circle cx="50" cy="38" r="16" fill="url(#sparky-head)" stroke="#6ee7b7" strokeWidth="2" />

            {/* Antennae with spark tips */}
            <path d="M42 24 Q36 12 30 16" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <circle cx="30" cy="16" r="3" fill="#facc15" className="animate-ping" />
            <path d="M58 24 Q64 12 70 16" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <circle cx="70" cy="16" r="3" fill="#facc15" className="animate-ping" />

            {/* Cute big anime bug eyes */}
            <ellipse cx="44" cy="36" rx="4" ry="5.5" fill="#0f172a" />
            <ellipse cx="56" cy="36" rx="4" ry="5.5" fill="#0f172a" />
            <circle cx="45" cy="34" r="1.8" fill="#ffffff" />
            <circle cx="57" cy="34" r="1.8" fill="#ffffff" />

            {/* Happy smile */}
            <path d="M47 43 Q50 46 53 43" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'pointer':
        // Prof. Pointer: The C/C++ Memory Hound
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]">
            <defs>
              <linearGradient id="pointer-coat" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#7e22ce" />
              </linearGradient>
            </defs>
            {/* Ground shadow */}
            <ellipse cx="50" cy="92" rx="22" ry="4" fill="rgba(0,0,0,0.3)" />

            {/* Floppy Hound Ears */}
            <ellipse cx="25" cy="46" rx="8" ry="18" fill="#6b21a8" transform="rotate(15 25 46)" />
            <ellipse cx="75" cy="46" rx="8" ry="18" fill="#6b21a8" transform="rotate(-15 75 46)" />

            {/* Head */}
            <ellipse cx="50" cy="46" rx="24" ry="22" fill="url(#pointer-coat)" stroke="#c084fc" strokeWidth="2" />

            {/* Snout */}
            <ellipse cx="50" cy="56" rx="14" ry="10" fill="#e9d5ff" />
            <ellipse cx="50" cy="51" rx="5" ry="3.5" fill="#1e1b4b" />
            <path d="M50 54.5 L50 60" stroke="#1e1b4b" strokeWidth="2" />
            <path d="M45 59 Q50 63 55 59" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Scholar Monocle on right eye */}
            <circle cx="58" cy="42" r="7" stroke="#facc15" strokeWidth="2" fill="rgba(250,204,21,0.15)" />
            <line x1="64" y1="46" x2="72" y2="58" stroke="#facc15" strokeWidth="1.5" />

            {/* Eyes */}
            <circle cx="42" cy="42" r="3.5" fill="#1e1b4b" />
            <circle cx="58" cy="42" r="3.5" fill="#1e1b4b" />
            <circle cx="43" cy="40.5" r="1.2" fill="#ffffff" />
            <circle cx="59" cy="40.5" r="1.2" fill="#ffffff" />

            {/* Smart Graduation / Nerd Bowtie with *ptr symbol */}
            <path d="M42 74 L58 74 L54 79 L58 84 L42 84 L46 79 Z" fill="#4c1d95" stroke="#a855f7" strokeWidth="1" />
            <circle cx="50" cy="79" r="2.5" fill="#facc15" />
            
            {/* Bone labeled &addr */}
            <rect x="36" y="86" width="28" height="5" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="36" cy="88.5" r="3.5" fill="#f8fafc" />
            <circle cx="64" cy="88.5" r="3.5" fill="#f8fafc" />
            <text x="50" y="90" fontSize="4.5" fill="#475569" fontWeight="bold" textAnchor="middle" fontFamily="monospace">&amp;0x7F</text>
          </svg>
        );
    }
  };

  return (
    <motion.div
      whileHover={animated ? { scale: 1.1, rotate: [0, -4, 4, 0] } : undefined}
      animate={
        animated
          ? {
              y: [0, -4, 0],
            }
          : undefined
      }
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}
    >
      {renderContent()}
    </motion.div>
  );
};
