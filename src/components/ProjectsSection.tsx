import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Sparkles, 
  Terminal, 
  Lightbulb, 
  CheckCircle2, 
  Code2, 
  X, 
  Play, 
  Sun, 
  BarChart2,
  FileText,
  GitBranch,
  Star,
  Snowflake,
  Flame
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

export const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const isIce = theme === 'water-ice';

  // Modal states for simulated demo or simulated github
  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null);
  const [activeGithubProject, setActiveGithubProject] = useState<Project | null>(null);

  // States for Student Analytics Simulation
  const [attendance, setAttendance] = useState<number>(85);
  const [studyHours, setStudyHours] = useState<number>(14);

  // States for Smart Lighting IoT Simulation
  const [ambientLux, setAmbientLux] = useState<number>(450);

  // Calculations for Student Analytics
  const calculatedScore = Math.min(100, Math.max(35, Math.round(attendance * 0.48 + studyHours * 2.6 + 12)));
  const calculatedGPA = (calculatedScore / 10).toFixed(1);
  const riskCategory = calculatedScore >= 85 ? 'High Honors / Dean\'s List' : calculatedScore >= 70 ? 'Satisfactory Progress' : 'Academic Focus Recommended';

  // Calculations for Smart Lighting IoT
  const calculatedPwmDuty = Math.round(Math.max(25, Math.min(255, 255 - (ambientLux / 1000) * 230)));
  const calculatedBrightnessPercent = Math.round((calculatedPwmDuty / 255) * 100);
  const calculatedEnergySavings = Math.round((1 - calculatedPwmDuty / 255) * 60 + 5);

  return (
    <section 
      id="projects" 
      aria-label="Featured Projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-3 border ${
          isIce ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25' : 'text-orange-400 bg-orange-500/10 border-orange-500/25'
        }`}>
          <Terminal className="w-3.5 h-3.5" />
          <span>03 // FEATURED ENGINEERING WORK</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured{' '}
              <span className={`text-transparent bg-clip-text ${
                isIce 
                  ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500' 
                  : 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-500'
              }`}>
                Projects
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              Tangible systems built to solve real-world problems in academic analytics and environmental energy management.
            </p>
          </div>

          <span className={`text-xs font-mono flex items-center gap-1.5 self-start sm:self-auto ${
            isIce ? 'text-cyan-400' : 'text-orange-400'
          }`}>
            <Sparkles className="w-4 h-4" />
            Interactive simulations available for each project
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => {
          const isIoT = project.category === 'IoT & Hardware';

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 ${
                isIce 
                  ? 'bg-slate-900/80 border-cyan-500/25 hover:border-cyan-400/60 hover:shadow-cyan-950/40' 
                  : 'bg-slate-900/80 border-orange-500/25 hover:border-orange-400/60 hover:shadow-orange-950/40'
              }`}
            >
              {/* Card Header & Badges */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                    isIce
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                      : 'bg-orange-500/10 text-orange-300 border-orange-500/30'
                  }`}>
                    {project.category}
                  </span>

                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full animate-pulse ${isIce ? 'bg-cyan-400' : 'bg-orange-400'}`} />
                    Production Ready
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className={`text-sm font-medium mb-4 ${isIce ? 'text-cyan-300' : 'text-orange-300'}`}>
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics / Stats */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/60 border border-white/5 mb-6 text-center">
                  {project.stats.map((stat, sIdx) => (
                    <div key={sIdx}>
                      <div className="text-[11px] font-mono text-slate-400">{stat.label}</div>
                      <div className={`text-sm sm:text-base font-bold mt-0.5 ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Core Features list */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isIce ? 'text-cyan-400' : 'text-orange-400'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Interactive Actions */}
              <div className="px-6 py-4 sm:px-8 sm:py-5 bg-slate-950/40 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveDemoProject(project)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-lg flex items-center gap-2 cursor-pointer active:scale-95 transition-all ${
                    isIce 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/20 hover:shadow-cyan-500/40' 
                      : 'bg-gradient-to-r from-orange-500 to-red-600 shadow-orange-500/20 hover:shadow-orange-500/40'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Simulation</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveGithubProject(project)}
                    className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
                    title="View Simulated GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">Repo</span>
                  </button>

                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors ${
                      isIce ? 'hover:text-cyan-400' : 'hover:text-orange-400'
                    }`}
                    title="External GitHub Link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Interactive Demo Modal */}
      <AnimatePresence>
        {activeDemoProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`w-full max-w-2xl rounded-3xl border p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto ${
                isIce ? 'bg-slate-950 border-cyan-500/40 shadow-cyan-950/60' : 'bg-slate-950 border-orange-500/40 shadow-orange-950/60'
              }`}
            >
              {/* Modal Topbar */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${
                    isIce 
                      ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' 
                      : 'bg-orange-500/10 text-orange-400 border-orange-500/30'
                  }`}>
                    {activeDemoProject.demoType === 'iot-light' ? <Lightbulb className="w-6 h-6" /> : <BarChart2 className="w-6 h-6" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Interactive Prototype Simulation</span>
                    <h3 className="text-xl font-bold text-white">{activeDemoProject.title}</h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveDemoProject(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* DEMO 1: Student Analytics Interactive Simulator */}
              {activeDemoProject.demoType === 'analytics' && (
                <div className="space-y-6">
                  <div className={`p-4 rounded-2xl border text-xs text-slate-300 leading-relaxed ${
                    isIce ? 'bg-cyan-950/40 border-cyan-500/30' : 'bg-orange-950/40 border-orange-500/30'
                  }`}>
                    <strong>Simulator Instructions:</strong> Adjust the academic input variables below to see how Kundhan's predictive logic model correlates classroom attendance and weekly study hours to project cumulative grades.
                  </div>

                  {/* Sliders */}
                  <div className="space-y-4 bg-slate-900/80 p-5 rounded-2xl border border-white/10">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-slate-300">Attendance Rate (%):</span>
                        <span className={`font-bold ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}>{attendance}%</span>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="100"
                        value={attendance}
                        onChange={(e) => setAttendance(Number(e.target.value))}
                        className={`w-full h-2 bg-slate-800 rounded-lg cursor-pointer ${isIce ? 'accent-cyan-400' : 'accent-orange-400'}`}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-slate-300">Weekly Study Hours:</span>
                        <span className={`font-bold ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}>{studyHours} hrs/week</span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="35"
                        value={studyHours}
                        onChange={(e) => setStudyHours(Number(e.target.value))}
                        className={`w-full h-2 bg-slate-800 rounded-lg cursor-pointer ${isIce ? 'accent-cyan-400' : 'accent-orange-400'}`}
                      />
                    </div>
                  </div>

                  {/* Calculated Results Dashboard */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-slate-400">Predicted Score</span>
                      <div className={`text-3xl font-extrabold mt-1 ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}>{calculatedScore}%</div>
                      <span className="text-[10px] text-slate-400 font-mono">Academic Benchmark</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-slate-400">Estimated GPA</span>
                      <div className="text-3xl font-extrabold text-sky-400 mt-1">{calculatedGPA} / 10</div>
                      <span className="text-[10px] text-slate-400 font-mono">Reva Univ Scale</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-slate-400">Trajectory Status</span>
                      <div className="text-sm font-bold text-emerald-400 mt-2 line-clamp-1">{riskCategory}</div>
                      <span className="text-[10px] text-slate-400 font-mono">Action Category</span>
                    </div>
                  </div>

                  {/* Visual Bar Indicator */}
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10">
                    <div className="flex justify-between text-xs text-slate-400 mb-2">
                      <span>Historical Cohort Distribution</span>
                      <span className={`font-mono ${isIce ? 'text-cyan-300' : 'text-orange-300'}`}>r = 0.89 correlation index</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                      <div 
                        style={{ width: `${calculatedScore}%` }} 
                        className={`h-full transition-all duration-300 ${
                          isIce ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gradient-to-r from-orange-500 to-red-500'
                        }`} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 2: Smart Lighting IoT Interactive Simulator */}
              {activeDemoProject.demoType === 'iot-light' && (
                <div className="space-y-6">
                  <div className={`p-4 rounded-2xl border text-xs text-slate-300 leading-relaxed ${
                    isIce ? 'bg-cyan-950/40 border-cyan-500/30' : 'bg-orange-950/40 border-orange-500/30'
                  }`}>
                    <strong>IoT Hardware Simulator:</strong> Move the Ambient Sunlight slider below to simulate sunlight falling onto the LDR light sensor. Notice how the C/C++ firmware dynamically computes the inverted PWM duty cycle to dim the artificial LED and conserve power!
                  </div>

                  {/* Visual Smart Lamp Chamber */}
                  <div 
                    className="p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center transition-all duration-300 relative overflow-hidden"
                    style={{
                      backgroundColor: `rgba(15, 23, 42, ${1 - ambientLux / 2000})`,
                      boxShadow: isIce 
                        ? `inset 0 0 ${calculatedBrightnessPercent}px rgba(56, 189, 248, ${calculatedBrightnessPercent / 200})`
                        : `inset 0 0 ${calculatedBrightnessPercent}px rgba(249, 115, 22, ${calculatedBrightnessPercent / 200})`
                    }}
                  >
                    {/* Simulated Bulb Visual */}
                    <div className="relative mb-4">
                      <Lightbulb 
                        className="w-16 h-16 transition-all duration-300"
                        style={{
                          color: calculatedBrightnessPercent > 30 ? (isIce ? '#38bdf8' : '#f97316') : '#64748b',
                          filter: `drop-shadow(0 0 ${calculatedBrightnessPercent / 4}px ${isIce ? 'rgba(56, 189, 248, 0.8)' : 'rgba(249, 115, 22, 0.8)'})`
                        }}
                      />
                    </div>

                    <div className="text-center z-10">
                      <span className={`text-xs font-mono uppercase tracking-wide ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}>
                        Adaptive LED Output: {calculatedBrightnessPercent}%
                      </span>
                      <p className="text-xs text-slate-400 mt-1">
                        PWM Duty: {calculatedPwmDuty} / 255 • Status: Auto-Calibrated
                      </p>
                    </div>
                  </div>

                  {/* Sunlight / LDR Slider */}
                  <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/10">
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Sun className="w-3.5 h-3.5 text-amber-400" />
                        Ambient Daylight (LDR Reading):
                      </span>
                      <span className={`font-bold ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}>{ambientLux} Lux</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={ambientLux}
                      onChange={(e) => setAmbientLux(Number(e.target.value))}
                      className={`w-full h-2 bg-slate-800 rounded-lg cursor-pointer ${isIce ? 'accent-cyan-400' : 'accent-orange-400'}`}
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                      <span>Pitch Dark Night (0 Lux)</span>
                      <span>High Noon Sun (1000 Lux)</span>
                    </div>
                  </div>

                  {/* Telemetry Readouts */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-slate-400">PWM Duty</span>
                      <div className="text-lg font-bold text-white mt-0.5">{calculatedPwmDuty}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-slate-400">LED Lumens</span>
                      <div className={`text-lg font-bold mt-0.5 ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}>{calculatedBrightnessPercent}%</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-slate-400">Power Conserved</span>
                      <div className="text-lg font-bold text-emerald-400 mt-0.5">~{calculatedEnergySavings}%</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-slate-400">Loop Latency</span>
                      <div className="text-lg font-bold text-sky-400 mt-0.5">15 ms</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveDemoProject(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  Close Simulation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Simulated GitHub Repository Modal */}
      <AnimatePresence>
        {activeGithubProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`w-full max-w-xl rounded-2xl border p-6 shadow-2xl relative ${
                isIce ? 'bg-slate-950 border-cyan-500/40 shadow-cyan-950/60' : 'bg-slate-950 border-orange-500/40 shadow-orange-950/60'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-slate-300" />
                  <span className="text-sm font-mono text-slate-300">
                    kundhanpawar / <strong className="text-white">{activeGithubProject.id}</strong>
                  </span>
                </div>
                <button
                  onClick={() => setActiveGithubProject(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/5 border border-white/10 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <GitBranch className={`w-3.5 h-3.5 ${isIce ? 'text-cyan-400' : 'text-orange-400'}`} /> main
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400" /> 24 stars
                </span>
                <span className="text-emerald-400">MIT License</span>
              </div>

              {/* File Tree Preview */}
              <div className="rounded-xl border border-white/10 bg-slate-900 overflow-hidden text-xs font-mono mb-4">
                <div className="px-3.5 py-2 bg-slate-950 border-b border-white/10 text-slate-400 flex items-center justify-between">
                  <span>Latest commit: "optimize feedback loop & add telemetry"</span>
                  <span className="text-slate-500 text-[10px]">2 days ago</span>
                </div>
                <div className="p-3 space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2 hover:text-cyan-300 cursor-pointer">
                    <FileText className="w-3.5 h-3.5 text-slate-400" /> README.md
                  </div>
                  <div className="flex items-center gap-2 hover:text-cyan-300 cursor-pointer">
                    <Code2 className="w-3.5 h-3.5 text-slate-400" /> {activeGithubProject.demoType === 'iot-light' ? 'src/main_controller.cpp' : 'src/analytics_model.py'}
                  </div>
                  <div className="flex items-center gap-2 hover:text-cyan-300 cursor-pointer">
                    <Code2 className="w-3.5 h-3.5 text-slate-400" /> {activeGithubProject.demoType === 'iot-light' ? 'include/pwm_config.h' : 'notebooks/eda_exploration.ipynb'}
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-400 leading-relaxed mb-4">
                <strong className="text-slate-200">Repository Description:</strong> {activeGithubProject.longDescription}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs hover:underline flex items-center gap-1 font-mono ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}
                >
                  Open in GitHub profile <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setActiveGithubProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
