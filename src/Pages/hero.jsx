"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Download, ArrowRight, ShieldCheck, Terminal, Award, Briefcase } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-slate-950 text-white flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float-medium" />
        
        {/* Crisp Technical Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10 w-full">
        {/* Left Column: Text & Profile Content */}
        <motion.div
          className="lg:w-7/12 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Developer Identity Pill Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            <span className="inline-flex items-center space-x-1.5 bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs px-3 py-1.5 rounded-full font-mono shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>Software Engineer @ Arifpay</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs px-3 py-1.5 rounded-full font-mono shadow-sm">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>OCI Certified Architect</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 bg-slate-900 border border-slate-700 text-gray-300 text-xs px-3 py-1.5 rounded-full font-mono">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>BSc CS Distinction (CGPA 3.51)</span>
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">Biruk Dejene</span>
            </motion.h1>

            <motion.p 
              className="text-xl sm:text-2xl font-semibold text-indigo-200/90 leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Full-Stack Software Engineer building scalable web applications &amp; enterprise payment solutions.
            </motion.p>
          </div>

          {/* Subtitle & Value Proposition */}
          <motion.p 
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Specializing in high-performance backend architecture with <strong className="text-white font-semibold">.NET Core / C#</strong>, responsive modern web frontends with <strong className="text-white font-semibold">React 19 &amp; Next.js 16</strong>, secure payment gateway integrations, and cloud infrastructure.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transform hover:-translate-y-0.5"
            >
              <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              <span>Explore Featured Work</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-slate-900 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Optimized Profile Visual */}
        <motion.div
          className="lg:w-5/12 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/40 via-purple-600/30 to-indigo-400/20 rounded-full blur-2xl animate-pulse-slow" />
            
            {/* Outer Decorative Ring */}
            <div className="absolute -inset-2 border border-indigo-500/20 rounded-full" />

            {/* Profile Picture */}
            <div className="relative z-10 w-full h-full rounded-full p-2 bg-slate-900 border-2 border-indigo-500/30 shadow-2xl overflow-hidden">
              <Image
                src="/biruk.webp"
                alt="Biruk Dejene - Full Stack Software Engineer"
                width={400}
                height={400}
                className="rounded-full object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}