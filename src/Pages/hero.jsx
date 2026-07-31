"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Download, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen bg-slate-950 text-white flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-5 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-16 right-5 w-56 sm:w-96 h-56 sm:h-96 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-40 sm:w-64 h-40 sm:h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float-fast delay-500"></div>
        
        {/* Grid Pattern with Animation */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] animate-grid-flow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 z-10 w-full">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-5 sm:space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl font-bold text-indigo-200 justify-center lg:justify-start flex"
            >
              {"Hi, I'm Biruk Dejene"}
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
                Full Stack Software Engineer
              </span> 
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Crafting <span className="font-semibold text-indigo-400">digital excellence</span> through 
              innovative code and enterprise payment gateway solutions.
            </motion.p>
          </div>

          {/* Description */}
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl font-normal mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Specializing in building scalable web applications with <strong className="text-white">.NET Core / C#</strong>, <strong className="text-white">React 19</strong>, and <strong className="text-white">Next.js 16</strong>, integrating payment processing gateways and microservices.
          </motion.p>       

          {/* Responsive CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-center lg:justify-start pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/25 text-sm"
            >
              <Code className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              <span>Explore My Work</span>
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
          </motion.div>
        </motion.div>

        {/* Responsive Visual Image Container */}
        <motion.div
          className="w-full lg:w-1/2 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 max-w-[75vw] max-h-[75vw]">
            {/* Background Glow */}
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
                alt="Biruk Dejene - Full Stack Software Engineer"
                width={500}
                height={500}
                className="rounded-full object-cover w-full h-full border-4 border-slate-800/80 shadow-2xl"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute hidden md:flex bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
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