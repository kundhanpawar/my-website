import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Cpu, 
  Terminal, 
  Sparkles, 
  ChevronRight,
  X,
  Snowflake,
  Flame,
  BrainCircuit,
  Layers,
  Radio
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { MascotAvatar } from './MascotAvatar';
import { useTheme } from '../context/ThemeContext';

export const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const isIce = theme === 'water-ice';

  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    category: string;
    level: string;
    highlight: string;
    experience: string;
    sampleCode: string;
  } | null>(null);

  const sampleCodeSnippets: Record<string, string> = {
    Python: `# Python: Exploratory Data Pipeline & ML
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression

# Load student records & calculate correlation
data = pd.read_csv("student_records.csv")
correlation = data['attendance_rate'].corr(data['final_score'])
print(f"Attendance-Score Pearson r: {correlation:.3f}")`,

    C: `/* C: Low-Level Memory Allocation & Node Traversal */
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* createNode(int value) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = value;
    newNode->next = NULL;
    return newNode; // Always free() after usage!
}`,

    'C++': `// C++: Object-Oriented Simulation Engine
#include <iostream>
#include <vector>
#include <algorithm>

template <typename T>
class TelemetryStream {
private:
    std::vector<T> buffer;
public:
    void push(T val) { buffer.push_back(val); }
    double average() const {
        if(buffer.empty()) return 0.0;
        double sum = 0;
        for(const auto& v : buffer) sum += v;
        return sum / buffer.size();
    }
};`,

    'Advance C': `/* Advance C: Function Pointers & Hardware Registers */
#include <stdint.h>

typedef void (*SensorCallback)(uint16_t reading);

typedef struct {
    volatile uint32_t* CTRL_REG;
    SensorCallback onThreshold;
} HardwareDriver;

void registerInterrupt(HardwareDriver* drv, SensorCallback cb) {
    drv->onThreshold = cb;
    *(drv->CTRL_REG) |= 0x01; // Enable interrupt line
}`,

    'Machine Learning Foundations': `# ML: Ridge Regression & Cross-Validation
from sklearn.linear_model import Ridge
from sklearn.model_selection import cross_val_score

model = Ridge(alpha=1.0)
scores = cross_val_score(model, X_train, y_train, cv=5)
print(f"Mean CV Accuracy: {scores.mean():.4f}")`,

    'Data Analysis': `# Pandas: Exploratory Feature Cleaning
df['engagement_score'] = df['quiz_attempts'] * 0.4 + df['lab_hours'] * 0.6
outliers = df[df['engagement_score'] > df['engagement_score'].quantile(0.99)]
clean_df = df.drop(outliers.index)`,

    'IoT & Hardware': `// Embedded PWM Smart Light Loop
#define LDR_ANALOG_PIN A0
#define PWM_OUT_PIN 9

void setup() {
    pinMode(PWM_OUT_PIN, OUTPUT);
    Serial.begin(9600);
}

void loop() {
    int sensorVal = analogRead(LDR_ANALOG_PIN);
    int pwmDuty = map(sensorVal, 0, 1023, 255, 0);
    analogWrite(PWM_OUT_PIN, pwmDuty);
    delay(50);
}`
  };

  const handleOpenSkill = (skill: typeof SKILL_CATEGORIES[0]['skills'][0], category: string) => {
    setSelectedSkill({
      ...skill,
      category,
      sampleCode: sampleCodeSnippets[skill.name] || `// Implementation details for ${skill.name}\n// Tested & compiled in Kundhan's lab environment.`
    });
  };

  return (
    <section 
      id="skills" 
      aria-label="Technical Skills Matrix"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-3 border ${
          isIce ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25' : 'text-orange-400 bg-orange-500/10 border-orange-500/25'
        }`}>
          <Cpu className="w-3.5 h-3.5" />
          <span>02 // SKILLS & TECHNICAL ARSENAL</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Languages, Frameworks &{' '}
              <span className={`text-transparent bg-clip-text ${
                isIce 
                  ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500' 
                  : 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-500'
              }`}>
                Core Competencies
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              Synthesizing rigorous low-level systems programming with high-level data intelligence and embedded hardware architecture.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Sparkles className={`w-4 h-4 ${isIce ? 'text-cyan-400' : 'text-orange-400'}`} />
            <span>Click any card for code inspection</span>
          </div>
        </div>
      </div>

      {/* Bento-Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Column 1: Programming Languages (Bento 7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <div className={`flex items-center gap-2 font-mono text-sm font-semibold ${
              isIce ? 'text-cyan-400' : 'text-orange-400'
            }`}>
              <Code2 className="w-4 h-4" />
              <span>Programming Languages</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">C • C++ • Advance C • Python</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_CATEGORIES[0].skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleOpenSkill(skill, 'Programming Languages')}
                className={`p-5 rounded-3xl border shadow-xl transition-all cursor-pointer relative overflow-hidden group ${
                  isIce
                    ? 'bg-slate-900/80 border-cyan-500/25 hover:border-cyan-400/60 hover:shadow-cyan-950/40'
                    : 'bg-slate-900/80 border-orange-500/25 hover:border-orange-400/60 hover:shadow-orange-950/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-lg font-bold text-white transition-colors ${
                    isIce ? 'group-hover:text-cyan-300' : 'group-hover:text-orange-300'
                  }`}>
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                  {skill.highlight}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400">
                  <span className={`group-hover:underline flex items-center gap-1 ${
                    isIce ? 'text-cyan-400' : 'text-orange-400'
                  }`}>
                    Inspect snippet <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-slate-500">View code</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Mascot Banner */}
          <div className={`p-4 rounded-2xl border flex items-center gap-3 mt-2 shadow-lg ${
            isIce 
              ? 'bg-slate-900/80 border-cyan-500/25' 
              : 'bg-slate-900/80 border-orange-500/25'
          }`}>
            <MascotAvatar id="pointer" size="sm" />
            <p className="text-xs text-slate-200">
              <strong className={isIce ? 'text-cyan-300' : 'text-orange-300'}>Prof. Pointer says:</strong> "Most developers run away from pointer arithmetic. Kundhan embraces Advance C with custom allocators. Zero memory leaks!"
            </p>
          </div>
        </div>

        {/* Column 2: Core Competencies (Bento 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <div className={`flex items-center gap-2 font-mono text-sm font-semibold ${
              isIce ? 'text-sky-400' : 'text-amber-400'
            }`}>
              <Cpu className="w-4 h-4" />
              <span>Core Competencies</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">Algorithmic & Systems</span>
          </div>

          <div className="flex flex-col gap-4">
            {SKILL_CATEGORIES[1].skills.map((skill, index) => {
              const icons = [BrainCircuit, Layers, Radio];
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleOpenSkill(skill, 'Core Competencies')}
                  className={`p-5 rounded-3xl border shadow-xl transition-all cursor-pointer group ${
                    isIce 
                      ? 'bg-slate-900/80 border-cyan-500/25 hover:border-cyan-400/50' 
                      : 'bg-slate-900/80 border-orange-500/25 hover:border-orange-400/50'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`p-2.5 rounded-xl border group-hover:scale-105 transition-transform ${
                      isIce 
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25' 
                        : 'bg-orange-500/10 text-orange-300 border-orange-500/25'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`text-sm font-bold text-white transition-colors ${
                          isIce ? 'group-hover:text-cyan-300' : 'group-hover:text-orange-300'
                        }`}>
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {skill.highlight}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className={`group-hover:underline flex items-center gap-1 ${
                          isIce ? 'text-cyan-400' : 'text-orange-400'
                        }`}>
                          Implementation insights <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Sparky Mascot cameo */}
          <div className={`p-4 rounded-2xl border flex items-center gap-3 mt-2 shadow-lg ${
            isIce 
              ? 'bg-slate-900/80 border-cyan-500/25' 
              : 'bg-slate-900/80 border-orange-500/25'
          }`}>
            <MascotAvatar id="sparky" size="sm" />
            <p className="text-xs text-slate-200">
              <strong className={isIce ? 'text-cyan-300' : 'text-orange-300'}>Sparky says:</strong> "Hardware without good software is just an expensive paperweight! Kundhan pairs C++ with IoT sensors for optimal responsiveness."
            </p>
          </div>
        </div>

      </div>

      {/* Interactive Code Inspection Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className={`w-full max-w-xl rounded-3xl border p-6 shadow-2xl relative overflow-hidden ${
                isIce 
                  ? 'bg-slate-950 border-cyan-500/40 shadow-cyan-950/60' 
                  : 'bg-slate-950 border-orange-500/40 shadow-orange-950/60'
              }`}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                isIce 
                  ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500' 
                  : 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-500'
              }`} />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wide ${
                    isIce ? 'text-cyan-400' : 'text-orange-400'
                  }`}>
                    {selectedSkill.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {selectedSkill.name}
                  </h3>
                  <span className="inline-block mt-1 text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    Proficiency: {selectedSkill.level}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedSkill(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-4">
                <h4 className="text-xs font-mono text-slate-400 uppercase mb-1">Practical Application</h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedSkill.experience}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-slate-400">Technical Code Pattern:</span>
                  <span className={`text-[10px] font-mono ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}>
                    Syntactically Verified
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 font-mono text-xs text-slate-200 overflow-x-auto max-h-56 leading-relaxed">
                  <pre>
                    <code>{selectedSkill.sampleCode}</code>
                  </pre>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                    isIce 
                      ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border-cyan-500/40' 
                      : 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-200 border-orange-500/40'
                  }`}
                >
                  Close Inspector
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
