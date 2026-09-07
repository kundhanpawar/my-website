import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Play, 
  Code2, 
  Copy, 
  Check,
  Snowflake,
  Flame,
  Laugh
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const { theme } = useTheme();
  const isIce = theme === 'water-ice';

  const [activeTab, setActiveTab] = useState<'status' | 'skills' | 'iot'>('status');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [runningScript, setRunningScript] = useState<boolean>(false);
  const [scriptOutput, setScriptOutput] = useState<string | null>(null);
  const [jokeIndex, setJokeIndex] = useState<number>(0);

  const funnyJokes = isIce ? [
    "\"Why do programmers prefer cold weather? Because hot laptops sound like jet engines! Kundhan's code runs cool & optimized at 0°C!\"",
    "\"Did you know Kundhan wrote a Python script so slick it slid right past runtime errors without slipping? (Just kidding, tests passed!)\"",
    "\"Glacial truth: Kundhan's IoT sensors detected sub-zero ambient light and saved 48% energy without breaking a sweat!\"",
    "\"Warning: Viewing this portfolio may cause sudden cravings for ice cream and high-performance machine learning models.\""
  ] : [
    "\"Why do engineers love fire? Because nothing compiles code faster than sheer overclocked heat and caffeine!\"",
    "\"Did you know Kundhan's C code is so fiery it melted a breadboard once? (Now with thermal throttling built-in!)\"",
    "\"Flame protocol active: Kundhan's neural net reached 98% accuracy because the training loss was literally roasted!\"",
    "\"Warning: Kundhan's IoT circuits generate pure spark-energy. Keep a virtual fire extinguisher handy!\""
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunScript = () => {
    setRunningScript(true);
    setScriptOutput(null);
    setTimeout(() => {
      setRunningScript(false);
      setScriptOutput(`[${isIce ? 'GLACIAL-OK' : 'INFERNO-OK'}] Diagnostics Completed in 12ms
⚡ Student Profile: S Kundhan Rao Pawar
🎓 Reva University - AI & Data Science
🔋 Microcontroller: Active (${isIce ? 'Cryo-stabilized' : 'Overclocked'} duty: 74%)
🤖 Model Status: Scikit-learn Ready
💡 Next Action: Try the interactive slider & arcade below!`);

      confetti({
        particleCount: 25,
        spread: 60,
        origin: { x: 0.75, y: 0.5 },
        colors: isIce ? ['#38bdf8', '#0284c7', '#e0f2fe'] : ['#f97316', '#ef4444', '#facc15']
      });
    }, 700);
  };

  const codeSnippets = {
    status: `// status.json
{
  "developer": "${PERSONAL_INFO.name}",
  "university": "Reva University",
  "major": "B.Tech AI & Data Science",
  "year": "2nd Year Undergraduate",
  "elemental_mode": "${isIce ? 'Glacial Ice' : 'Blazing Fire'}",
  "focus": ["AI/ML Models", "Data Insights", "IoT Hardware"],
  "status": "${PERSONAL_INFO.status}",
  "open_to": "Internships & Collaborative Projects"
}`,
    skills: `# data_pipeline.py
import pandas as pd
from sklearn.model_selection import train_test_split

class StudentAnalytics:
    def __init__(self, dataset):
        self.df = pd.read_csv(dataset)
    
    def predict_performance(self, attendance, study_hours):
        # Correlation: r = 0.89 (${isIce ? 'Rock solid like ice' : 'Fire predictions'})
        return round(0.45 * attendance + 0.55 * study_hours * 8, 2)`,
    iot: `// smart_light.c
#define LDR_PIN A0
#define LED_PWM_PIN 9

void loop() {
    int ambientLux = analogRead(LDR_PIN);
    // Invert reading: brighter outside -> dimmer LED
    int dutyCycle = map(ambientLux, 0, 1023, 255, 0);
    analogWrite(LED_PWM_PIN, constrain(dutyCycle, 15, 255));
    // Measured Energy Savings: ~48% (${isIce ? 'Cool & green' : 'Hot efficiency'})
}`
  };

  return (
    <section 
      id="hero" 
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headlines & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Live Status Pill with theme styling */}
          <div className={`mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border transition-all ${
            isIce 
              ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300' 
              : 'bg-orange-500/10 border-orange-500/30 text-orange-300'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isIce ? 'bg-cyan-400' : 'bg-orange-400'
              }`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                isIce ? 'bg-cyan-500' : 'bg-orange-500'
              }`} />
            </span>
            <span className="flex items-center gap-1.5 font-bold">
              {isIce ? <Snowflake className="w-3.5 h-3.5" /> : <Flame className="w-3.5 h-3.5" />}
              {isIce ? 'Sub-Zero Mode: Active in AI/ML & IoT' : 'Inferno Mode: Active in AI/ML & IoT'}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            Hi, I'm{' '}
            <span className={`text-transparent bg-clip-text ${
              isIce 
                ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500' 
                : 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-500'
            }`}>
              {PERSONAL_INFO.shortName || 'Kundhan'}
            </span>
          </h1>

          {/* Subtitle & Bio */}
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
            B.Tech Student at Reva University. Building high-performance AI models, data pipelines, and smart embedded IoT hardware that actually solve real problems.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 mb-8 w-full sm:w-auto">
            <a
              id="hero-view-projects-btn"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-8 py-3 rounded-xl font-semibold shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isIce
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/25 hover:shadow-cyan-500/40'
                  : 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-orange-500/25 hover:shadow-orange-500/40'
              }`}
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              id="hero-contact-btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                isIce
                  ? 'bg-slate-900/80 border-cyan-500/30 text-white hover:border-cyan-400 hover:bg-slate-800'
                  : 'bg-slate-900/80 border-orange-500/30 text-white hover:border-orange-400 hover:bg-slate-800'
              }`}
            >
              <span>Contact Kundhan</span>
            </a>
          </div>

          {/* Funny Mascot Quip Box with Joke Button */}
          <div className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all mt-auto max-w-xl shadow-xl ${
            isIce 
              ? 'bg-slate-900/80 border-cyan-500/25 shadow-cyan-950/30' 
              : 'bg-slate-900/80 border-orange-500/25 shadow-orange-950/30'
          }`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg flex-shrink-0 ${
              isIce 
                ? 'bg-gradient-to-tr from-cyan-400 to-blue-600' 
                : 'bg-gradient-to-tr from-amber-400 to-red-600'
            }`}>
              {isIce ? '🤖' : '🔥'}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${
                  isIce ? 'bg-cyan-950 border-cyan-500/40 text-cyan-300' : 'bg-orange-950 border-orange-500/40 text-orange-300'
                }`}>
                  BYTE THE BOT (YOUR TOUR GUIDE)
                </span>
                
                <button
                  onClick={() => setJokeIndex((prev) => (prev + 1) % funnyJokes.length)}
                  className={`text-[11px] font-mono flex items-center gap-1 cursor-pointer transition-colors ${
                    isIce ? 'text-cyan-400 hover:text-cyan-200' : 'text-orange-400 hover:text-orange-200'
                  }`}
                  title="Next funny quote"
                >
                  <Laugh className="w-3 h-3" />
                  <span>Next joke</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm italic font-medium text-slate-200 mt-1.5 leading-relaxed">
                {funnyJokes[jokeIndex]}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Code Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          {/* Terminal Window Card */}
          <div className={`border rounded-3xl p-6 flex flex-col shadow-2xl relative overflow-hidden transition-all ${
            isIce 
              ? 'bg-slate-900/85 border-cyan-500/30 shadow-cyan-950/40' 
              : 'bg-slate-900/85 border-orange-500/35 shadow-orange-950/40'
          }`}>
            {/* Terminal Topbar */}
            <div className="pb-3 border-b border-white/10 flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className={`ml-2 text-xs font-mono flex items-center gap-1.5 ${
                  isIce ? 'text-cyan-400' : 'text-orange-400'
                }`}>
                  <Terminal className="w-3.5 h-3.5" />
                  kundhan@reva-terminal
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(codeSnippets[activeTab])}
                  className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Copy code"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={handleRunScript}
                  disabled={runningScript}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono border transition-colors flex items-center gap-1 cursor-pointer ${
                    isIce
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30'
                      : 'bg-orange-500/20 text-orange-300 border-orange-500/40 hover:bg-orange-500/30'
                  }`}
                  title="Run simulation"
                >
                  <Play className={`w-3 h-3 ${runningScript ? 'animate-spin' : ''}`} />
                  <span>Execute</span>
                </button>
              </div>
            </div>

            {/* Terminal File Tabs */}
            <div className="flex gap-2 mb-3 text-xs font-mono">
              {(['status', 'skills', 'iot'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setScriptOutput(null); }}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                    activeTab === tab
                      ? isIce 
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm'
                        : 'bg-orange-500/20 text-orange-300 border-orange-500/40 shadow-sm'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab === 'status' ? 'status.json' : tab === 'skills' ? 'data_pipeline.py' : 'smart_light.c'}
                </button>
              ))}
            </div>

            {/* Code Body */}
            <div className="p-4 bg-slate-950/70 rounded-2xl border border-white/5 font-mono text-xs text-slate-200 overflow-x-auto max-h-64 min-h-52 leading-relaxed select-text">
              <pre>
                <code>{codeSnippets[activeTab]}</code>
              </pre>

              {/* Simulated Script Output */}
              {scriptOutput && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`mt-3 pt-3 border-t text-[11px] p-2.5 rounded-xl border font-mono ${
                    isIce
                      ? 'text-cyan-300 bg-cyan-950/60 border-cyan-500/30'
                      : 'text-amber-300 bg-orange-950/60 border-orange-500/30'
                  }`}
                >
                  <pre className="whitespace-pre-wrap">{scriptOutput}</pre>
                </motion.div>
              )}
            </div>

            {/* Terminal Footer badges */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full animate-pulse ${
                  isIce ? 'bg-cyan-400' : 'bg-orange-400'
                }`} />
                Cluster: AI & Edge IoT
              </span>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10 text-slate-300 text-[11px]">Python 3.11</span>
                <span className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10 text-slate-300 text-[11px]">Scikit-Learn</span>
                <span className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10 text-slate-300 text-[11px]">C / Embedded</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
