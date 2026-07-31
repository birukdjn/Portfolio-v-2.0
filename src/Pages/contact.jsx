"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Copy, Check } from "lucide-react";

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "birukdejene45@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 bg-slate-950 text-white overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-20 right-6 z-50 bg-slate-900 border border-indigo-500/40 text-indigo-300 px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2 text-sm font-mono"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Get In <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            Available for remote software engineering roles, full-stack development contracts, and technical consulting.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                {/* Email Card with 1-Click Copy */}
                <div
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 hover:border-indigo-500/40 rounded-xl transition-all group cursor-pointer"
                  title="Click to copy email address"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-950 border border-indigo-500/30 rounded-lg text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Email (Click to Copy)</div>
                      <div className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        {emailAddress}
                      </div>
                    </div>
                  </div>

                  <button className="p-1.5 text-slate-400 group-hover:text-indigo-300">
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <a
                  href="https://linkedin.com/in/birukdjn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-slate-950 border border-slate-800 hover:border-indigo-500/40 rounded-xl transition-all group"
                >
                  <div className="p-2 bg-indigo-950 border border-indigo-500/30 rounded-lg text-indigo-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">LinkedIn Profile</div>
                    <div className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      linkedin.com/in/birukdjn
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/birukdjn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-slate-950 border border-slate-800 hover:border-indigo-500/40 rounded-xl transition-all group"
                >
                  <div className="p-2 bg-indigo-950 border border-indigo-500/30 rounded-lg text-indigo-400">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">GitHub Profile</div>
                    <div className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      github.com/birukdjn
                    </div>
                  </div>
                </a>

                <div className="flex items-center space-x-3 p-3 bg-slate-950 border border-slate-800 rounded-xl">
                  <div className="p-2 bg-indigo-950 border border-indigo-500/30 rounded-lg text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Location</div>
                    <div className="font-semibold text-white">
                      Addis Ababa, Ethiopia (UTC+3) • Open to Remote
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-5"
            >
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>

              {submitted && (
                <div className="p-4 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-emerald-300 text-sm flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="block text-xs font-mono text-slate-400">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-mono text-slate-400">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@company.com"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-mono text-slate-400">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Biruk, I saw your portfolio and would like to discuss a software engineering opportunity..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/25 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}