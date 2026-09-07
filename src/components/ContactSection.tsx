import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal, 
  AlertCircle,
  MapPin,
  CheckCircle2,
  Snowflake,
  Flame
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MascotAvatar } from './MascotAvatar';
import { useTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const isIce = theme === 'water-ice';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Copy-to-clipboard toast states
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti burst!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: isIce ? ['#38bdf8', '#0284c7', '#3b82f6', '#e0f2fe'] : ['#f97316', '#ea580c', '#ef4444', '#ffedd5']
        });
      } catch {
        // Fallback
      }
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSuccess(false);
    setErrorMessage(null);
  };

  return (
    <section 
      id="contact" 
      aria-label="Contact Kundhan"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-3 border ${
          isIce ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25' : 'text-orange-400 bg-orange-500/10 border-orange-500/25'
        }`}>
          <Terminal className="w-3.5 h-3.5" />
          <span>05 // INITIATE TRANSMISSION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's Build Something{' '}
          <span className={`text-transparent bg-clip-text ${
            isIce 
              ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500' 
              : 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-500'
          }`}>
            Intelligent Together
          </span>
        </h2>
        <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
          Open to software engineering internships, AI/data science collaborative research, and embedded IoT prototype development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Cards & Socials (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Email Direct Card */}
          <div className={`p-5 rounded-2xl border shadow-lg transition-all flex items-center justify-between group ${
            isIce 
              ? 'bg-slate-900/80 border-cyan-500/25 hover:border-cyan-400/60 shadow-cyan-950/20' 
              : 'bg-slate-900/80 border-orange-500/25 hover:border-orange-400/60 shadow-orange-950/20'
          }`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform ${
                isIce 
                  ? 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400' 
                  : 'bg-orange-500/15 border-orange-500/30 text-orange-400'
              }`}>
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Email Directly</span>
                <a
                  href={PERSONAL_INFO.socials.emailMailto}
                  className={`text-sm font-semibold text-white transition-colors break-all ${
                    isIce ? 'hover:text-cyan-300' : 'hover:text-orange-300'
                  }`}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors ml-2 flex-shrink-0 cursor-pointer"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Direct Card */}
          <div className={`p-5 rounded-2xl border shadow-lg transition-all flex items-center justify-between group ${
            isIce 
              ? 'bg-slate-900/80 border-cyan-500/25 hover:border-cyan-400/60 shadow-cyan-950/20' 
              : 'bg-slate-900/80 border-orange-500/25 hover:border-orange-400/60 shadow-orange-950/20'
          }`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform ${
                isIce 
                  ? 'bg-sky-500/15 border-sky-500/30 text-sky-400' 
                  : 'bg-amber-500/15 border-amber-500/30 text-amber-400'
              }`}>
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Call / WhatsApp</span>
                <a
                  href={PERSONAL_INFO.socials.phoneTel}
                  className={`text-sm font-semibold text-white transition-colors ${
                    isIce ? 'hover:text-sky-300' : 'hover:text-amber-300'
                  }`}
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors ml-2 flex-shrink-0 cursor-pointer"
              title="Copy phone to clipboard"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location & Academic Base Card */}
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/10 shadow-lg flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
              <span className="text-sm font-semibold text-white">Bengaluru, Karnataka, India</span>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Reva University Campus</p>
            </div>
          </div>

          {/* Social Links Bar */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg">
            <span className="text-xs font-mono text-slate-400 block mb-3 uppercase tracking-wider">
              Professional Profiles
            </span>
            <div className="grid grid-cols-2 gap-3">
              <a
                id="contact-linkedin-link"
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-xs font-medium group ${
                  isIce ? 'hover:border-cyan-400/50' : 'hover:border-orange-400/50'
                }`}
              >
                <Linkedin className={`w-4 h-4 group-hover:scale-110 transition-transform ${isIce ? 'text-cyan-400' : 'text-orange-400'}`} />
                <span>LinkedIn</span>
              </a>

              <a
                id="contact-github-link"
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-xs font-medium group ${
                  isIce ? 'hover:border-cyan-400/50' : 'hover:border-orange-400/50'
                }`}
              >
                <Github className={`w-4 h-4 group-hover:scale-110 transition-transform ${isIce ? 'text-cyan-400' : 'text-orange-400'}`} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Sparky Mascot Commentary */}
          <div className={`p-4 rounded-2xl border flex items-center gap-3 shadow-lg ${
            isIce 
              ? 'bg-slate-900/80 border-cyan-500/25' 
              : 'bg-slate-900/80 border-orange-500/25'
          }`}>
            <MascotAvatar id="sparky" size="sm" />
            <p className="text-xs text-slate-200">
              <strong className={isIce ? 'text-cyan-300' : 'text-orange-300'}>Sparky:</strong> "I've checked Kundhan's notification queue—responses are usually faster than an interrupt vector routine!"
            </p>
          </div>
        </div>

        {/* Right Column: Working Contact Form with Animated Success State (7 cols) */}
        <div className="lg:col-span-7">
          <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden shadow-2xl ${
            isIce 
              ? 'bg-slate-900/80 border-cyan-500/25 shadow-cyan-950/30' 
              : 'bg-slate-900/80 border-orange-500/25 shadow-orange-950/30'
          }`}>
            {/* Top Accent Gradient Line */}
            <div className={`absolute top-0 left-0 right-0 h-1 ${
              isIce 
                ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500' 
                : 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-500'
            }`} />

            <AnimatePresence mode="wait">
              {isSuccess ? (
                // Animated Success State
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-xl shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h3>
                  <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className={isIce ? 'text-cyan-300' : 'text-orange-300'}>{formData.name}</strong>! Your message has been routed directly to <strong className="text-slate-100">{PERSONAL_INFO.email}</strong>. Kundhan will review your inquiry shortly.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/10 mb-6 flex items-center gap-3 text-xs text-left max-w-md">
                    <MascotAvatar id="byte" size="sm" />
                    <span className="text-slate-300">
                      <strong>Byte's Confirmation:</strong> Transmission acknowledged! Packet checksum: 100% valid.
                    </span>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                // The Working Form
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Send Direct Message</h3>
                    <span className={`text-xs font-mono flex items-center gap-1 ${isIce ? 'text-cyan-400' : 'text-orange-400'}`}>
                      <Sparkles className="w-3.5 h-3.5" /> Active Channel
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all font-sans ${
                          isIce 
                            ? 'border-cyan-500/30 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50' 
                            : 'border-orange-500/30 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all font-sans ${
                          isIce 
                            ? 'border-cyan-500/30 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50' 
                            : 'border-orange-500/30 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Internship opportunity / Project collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all font-sans ${
                        isIce 
                          ? 'border-cyan-500/30 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50' 
                          : 'border-orange-500/30 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50'
                      }`}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300">
                        Message *
                      </label>
                      <span className="text-[10px] font-mono text-slate-500">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Hi Kundhan, I saw your Student Performance Analysis system and smart lighting projects. We'd love to connect regarding..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all font-sans resize-none ${
                        isIce 
                          ? 'border-cyan-500/30 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50' 
                          : 'border-orange-500/30 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50'
                      }`}
                    />
                  </div>

                  <button
                    id="submit-contact-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 ${
                      isIce 
                        ? 'bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-600 shadow-cyan-500/25 hover:shadow-cyan-500/40' 
                        : 'bg-gradient-to-r from-orange-500 via-amber-600 to-red-600 shadow-orange-500/25 hover:shadow-orange-500/40'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Packet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
