import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Binary, 
  Terminal, 
  CheckCircle2,
  Radio,
  Snowflake,
  Flame
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MascotAvatar } from './MascotAvatar';
import { useTheme } from '../context/ThemeContext';

export const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const isIce = theme === 'water-ice';

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Reva University',
      subtitle: 'B.Tech in AI & Data Science (2nd Year)',
      desc: 'Deepening foundations in machine learning math, algorithms, and computational data pipelines.',
      color: isIce ? 'cyan' : 'orange'
    },
    {
      icon: Binary,
      title: 'Systems & Low-Level Code',
      subtitle: 'C, C++ & Advance C',
      desc: 'Mastering manual memory management, custom pointer logic, and deterministic runtime speed.',
      color: isIce ? 'blue' : 'amber'
    },
    {
      icon: Radio,
      title: 'IoT & Real-World Sensors',
      subtitle: 'Microcontrollers & PWM',
      desc: 'Building intelligent hardware prototypes with closed-loop feedback and energy optimization.',
      color: isIce ? 'sky' : 'red'
    }
  ];

  return (
    <section 
      id="about" 
      aria-label="About Kundhan"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-3 border ${
          isIce ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25' : 'text-orange-400 bg-orange-500/10 border-orange-500/25'
        }`}>
          <Terminal className="w-3.5 h-3.5" />
          <span>01 // BACKGROUND & PHILOSOPHY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineering at the Intersection of{' '}
          <span className={`text-transparent bg-clip-text ${
            isIce 
              ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500' 
              : 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-500'
          }`}>
            Data, Logic & Hardware
          </span>
        </h2>
        <p className="mt-3 text-base text-slate-300 max-w-3xl leading-relaxed">
          From analyzing behavioral student metrics with predictive Python routines to designing closed-loop adaptive IoT smart lighting, I build solutions that deliver measurable real-world value.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Card: In-depth Bio & Academic Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border shadow-2xl relative overflow-hidden transition-all ${
            isIce 
              ? 'bg-slate-900/80 border-cyan-500/30 shadow-cyan-950/30' 
              : 'bg-slate-900/80 border-orange-500/35 shadow-orange-950/30'
          }`}
        >
          {/* Subtle accent glow */}
          <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
            isIce ? 'bg-cyan-500/10' : 'bg-orange-500/10'
          }`} />

          <div className="flex items-center gap-3 mb-6">
            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-md ${
              isIce 
                ? 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400 shadow-cyan-500/10' 
                : 'bg-orange-500/15 border-orange-500/30 text-orange-400 shadow-orange-500/10'
            }`}>
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">The Academic Journey</h3>
              <p className={`text-xs font-mono ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}>
                Reva University, Bengaluru • 2nd Year B.Tech
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4">
            {PERSONAL_INFO.bio}
          </p>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            My engineering philosophy centers on <strong className="text-white">empiricism and efficiency</strong>. Rather than treating AI as an isolated black box, I explore how predictive algorithms can be paired with edge devices and embedded sensors to react autonomously in real-time.
          </p>

          {/* Key Facts List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
            {[
              "B.Tech AI & Data Science (In Progress)",
              "Hands-on IoT Hardware & PWM Systems",
              "Advance C & Pointer Memory Optimization",
              "Data Pipelines (Pandas / Scikit-learn)"
            ].map((fact, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${isIce ? 'text-cyan-400' : 'text-orange-400'}`} />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: 3 Pillar Highlights & Mascot Commentary */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-5 rounded-3xl border shadow-xl transition-all ${
                  isIce 
                    ? 'bg-slate-900/80 border-cyan-500/25 hover:border-cyan-400/50 shadow-cyan-950/20' 
                    : 'bg-slate-900/80 border-orange-500/25 hover:border-orange-400/50 shadow-orange-950/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl border ${
                    isIce 
                      ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' 
                      : 'bg-orange-500/15 text-orange-400 border-orange-500/30'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white leading-tight">{item.title}</h4>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">{item.subtitle}</p>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Prof. Pointer's Section Stamp */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-4 rounded-2xl border flex items-center gap-3.5 shadow-xl transition-all ${
              isIce 
                ? 'bg-slate-900/80 border-cyan-500/25 shadow-cyan-950/20' 
                : 'bg-slate-900/80 border-orange-500/25 shadow-orange-950/20'
            }`}
          >
            <MascotAvatar id="pointer" size="md" />
            <div className="text-xs">
              <span className={`font-semibold block ${isIce ? 'text-cyan-300' : 'text-orange-300'}`}>
                Prof. Pointer's Inspection:
              </span>
              <p className="text-slate-200 italic mt-0.5">
                "Verified! Kundhan doesn't just read tutorials; he writes real pointer arithmetic and solders actual sensor breadboards!"
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
