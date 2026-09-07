import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  ShieldCheck, 
  Terminal, 
  Sparkles, 
  ExternalLink, 
  BookOpen, 
  X, 
  Calendar
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';
import { MascotAvatar } from './MascotAvatar';
import { useTheme } from '../context/ThemeContext';

export const CertificationsSection: React.FC = () => {
  const { theme } = useTheme();
  const isIce = theme === 'water-ice';

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section 
      id="certifications" 
      aria-label="Certifications and Continuous Learning"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-3 border ${
          isIce ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25' : 'text-orange-400 bg-orange-500/10 border-orange-500/25'
        }`}>
          <Terminal className="w-3.5 h-3.5" />
          <span>04 // CREDENTIALS & SPECIALIZATIONS</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Certifications &{' '}
              <span className={`text-transparent bg-clip-text ${
                isIce 
                  ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500' 
                  : 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-500'
              }`}>
                Industry Learning
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              Standardized industry validations verifying deep competence in Python data analysis, high-scale system design, and structured problem formulation.
            </p>
          </div>

          <span className={`text-xs font-mono flex items-center gap-1.5 self-start sm:self-auto ${
            isIce ? 'text-cyan-400' : 'text-orange-400'
          }`}>
            <ShieldCheck className="w-4 h-4" />
            Verified Curriculums
          </span>
        </div>
      </div>

      {/* Certification Cards Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => {
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedCert(cert)}
              className={`p-6 rounded-3xl border shadow-2xl transition-all cursor-pointer flex flex-col justify-between group ${
                isIce 
                  ? 'bg-slate-900/80 border-cyan-500/25 hover:border-cyan-400/60 shadow-cyan-950/30' 
                  : 'bg-slate-900/80 border-orange-500/25 hover:border-orange-400/60 shadow-orange-950/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl border group-hover:scale-110 transition-transform ${
                    isIce 
                      ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' 
                      : 'bg-orange-500/15 text-orange-400 border-orange-500/30'
                  }`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${
                    isIce ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25' : 'bg-orange-500/10 text-orange-300 border-orange-500/25'
                  }`}>
                    {cert.issuer}
                  </span>
                </div>

                <h3 className={`text-lg font-bold text-white mb-1.5 transition-colors ${
                  isIce ? 'group-hover:text-cyan-300' : 'group-hover:text-orange-300'
                }`}>
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-3">
                  Credential ID: {cert.credentialId}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {cert.skillsLearned.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className={`mt-4 flex items-center justify-between text-xs font-mono group-hover:underline ${
                  isIce ? 'text-cyan-400' : 'text-orange-400'
                }`}>
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mascot Assurance Banner */}
      <div className={`mt-8 p-5 rounded-3xl border flex items-center gap-4 shadow-xl ${
        isIce 
          ? 'bg-slate-900/80 border-cyan-500/25 shadow-cyan-950/20' 
          : 'bg-slate-900/80 border-orange-500/25 shadow-orange-950/20'
      }`}>
        <MascotAvatar id="byte" size="md" />
        <div className="text-xs">
          <span className={`font-bold block ${isIce ? 'text-cyan-300' : 'text-orange-300'}`}>
            Byte's Authenticity Scanner:
          </span>
          <p className="text-slate-200 mt-0.5">
            "All 3 certifications scanned and verified! From IBM Python foundations to Scaler's Instagram system design, Kundhan ensures architectural theory pairs with clean execution."
          </p>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`w-full max-w-lg rounded-3xl border p-6 sm:p-8 shadow-2xl relative overflow-hidden ${
                isIce 
                  ? 'bg-slate-950 border-cyan-500/40 shadow-cyan-950/60' 
                  : 'bg-slate-950 border-orange-500/40 shadow-orange-950/60'
              }`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                isIce 
                  ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500' 
                  : 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-500'
              }`} />

              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl border ${
                    isIce 
                      ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' 
                      : 'bg-orange-500/15 text-orange-400 border-orange-500/30'
                  }`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">{selectedCert.issuer}</span>
                    <h3 className="text-xl font-bold text-white leading-tight">{selectedCert.title}</h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/5 border border-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-1">Credential ID & Verification</h4>
                  <p className={`font-mono text-xs ${isIce ? 'text-cyan-300' : 'text-orange-300'}`}>
                    {selectedCert.credentialId}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-1">Curriculum Focus</h4>
                  <p className="leading-relaxed text-slate-300">
                    {selectedCert.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-1.5">Acquired Technical Competencies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skillsLearned.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                    isIce 
                      ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500/40 hover:bg-cyan-500/30' 
                      : 'bg-orange-500/20 text-orange-200 border-orange-500/40 hover:bg-orange-500/30'
                  }`}
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
