"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Download, ArrowRight, Globe, Terminal, ShieldCheck } from "lucide-react";

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

export default function HeroSection() {
  const primaryTech = [
    { name: ".NET Core / C#", color: "border-emerald-500/30 text-emerald-400 bg-emerald-950/40" },
    { name: "React 19 / Next.js 16", color: "border-indigo-500/30 text-indigo-400 bg-indigo-950/40" },
    { name: "PostgreSQL", color: "border-blue-500/30 text-blue-400 bg-blue-950/40" },
    { name: "Docker & REST APIs", color: "border-purple-500/30 text-purple-400 bg-purple-950/40" }
  ];

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen bg-slate-950 text-white flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Enhanced Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-16 right-5 w-56 sm:w-96 h-56 sm:h-96 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        
        {/* Subtle Engineering Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] animate-grid-flow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 z-10 w-full">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-5 sm:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Open for Remote Software Engineering Roles</span>
          </motion.div>

          {/* Main Heading & Subheadline */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-xl font-medium text-slate-400 flex items-center justify-center lg:justify-start space-x-2"
            >
              <span>Hi, I&apos;m</span>
              <span className="font-bold text-white tracking-wide">Biruk Dejene</span>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building <span className="font-semibold text-indigo-400">secure, scalable payment systems</span> and high-performance backend microservices for enterprise &amp; global applications.
            </motion.p>
          </div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1"
          >
            {primaryTech.map((tech) => (
              <span
                key={tech.name}
                className={`px-3 py-1 rounded-md border text-xs font-mono font-medium ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </motion.div>

          {/* Professional Context */}
          <motion.p 
            className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Software Engineer at <strong className="text-slate-200 font-semibold">Arifpay Financial Technologies</strong> with experience architecting payment gateways, JWT authenticated APIs, and PostgreSQL EF Core microservices.
          </motion.p>       

          {/* Responsive CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/25 text-sm"
            >
              <Code className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              <span>View Featured Projects</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/resume.pdf"
              download
              className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-slate-900 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 text-slate-200 font-bold rounded-xl transition-all text-sm"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Download Resume</span>
            </Link>

            <div className="flex items-center space-x-2 pt-2 sm:pt-0">
              <a
                href="https://github.com/birukdjn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-400 rounded-xl text-slate-400 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/birukdjn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-400 rounded-xl text-slate-400 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Profile Container */}
        <motion.div
          className="w-full lg:w-1/2 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 max-w-[75vw] max-h-[75vw]">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-full blur-2xl animate-pulse-slow"></div>
            
            {/* Orbiting Rings */}
            <motion.div 
              className="absolute inset-0 border-2 border-indigo-500/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-3 sm:inset-4 border-t-2 border-b-2 border-purple-500/40 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Profile Image */}
            <div className="relative z-10 flex items-center justify-center w-full h-full p-2">
              <Image
                src="/biruk.webp"
                alt="Biruk Dejene - Software Engineer"
                width={500}
                height={500}
                className="rounded-full object-cover w-full h-full border-4 border-slate-800/80 shadow-2xl"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>

            {/* Architecture Floating Badge */}
            <div className="absolute -bottom-2 -left-2 sm:bottom-2 sm:left-2 z-20 bg-slate-900/90 backdrop-blur-md border border-indigo-500/30 px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-2 text-xs font-mono text-indigo-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>OWASP &amp; Security First</span>
            </div>

            {/* Microservices Floating Badge */}
            <div className="absolute -top-2 -right-2 sm:top-2 sm:right-2 z-20 bg-slate-900/90 backdrop-blur-md border border-purple-500/30 px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-2 text-xs font-mono text-purple-300">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span>.NET Microservices</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        className="absolute hidden md:flex bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-center cursor-pointer group"
        >
          <div className="w-6 h-10 border-2 border-indigo-500/50 rounded-full mx-auto flex justify-center group-hover:border-indigo-400 transition-colors">
            <motion.div
              animate={{ y: [4, 18, 4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-indigo-400 rounded-full mt-1"
            />
          </div>
          <div className="text-xs text-slate-400 font-mono mt-2 group-hover:text-white transition-colors">Scroll Down</div>
        </motion.div>
      </motion.a>
    </section>
  );
}