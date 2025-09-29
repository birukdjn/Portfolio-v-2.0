"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Download, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row w-full min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float-fast delay-500"></div>
        
        {/* Grid Pattern with Animation */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] animate-grid-flow"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
              initial={{ 
                opacity: 0,
                x: Math.random() * 1000,
                y: Math.random() * 1000 
              }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [0, -100],
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 z-10">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          
          {/* Enhanced Main Heading */}
          <div className="space-y-2">
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className=" flex text-2xl font-bold text-indigo-100 justify-center md:justify-start"
              >
                 {"Hi, I'm Biruk"}
              </motion.div>
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Full Stack Developer</span> 
              
            </motion.h1>
            
            <motion.p 
              className="text-md md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Crafting <span className="font-semibold text-indigo-600">digital excellence</span> through 
              innovative code and cutting-edge technology solutions.
            </motion.p>
          </div>

          {/* Enhanced Description */}
          <motion.p 
            className="text-sm text-gray-400 leading-relaxed max-w-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            I specialize in building scalable web applications, integrating AI capabilities, 
            and creating seamless user experiences that drive business growth and innovation.
          </motion.p>       

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <Link
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3  hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl  bg-gradient-to-r from-indigo-600 to-purple-600 "
            >
              <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              <span>Explore My Work</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/resume.pdf"
              download
              className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-6 py-3 bg-transparent border-2 border-indigo-600 hover:text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Visual Content with Image */}
        <motion.div
          className="lg:w-1/2 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, x: 80 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="relative w-80 h-80 md:w-100 md:h-100">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-3xl animate-pulse-slow"></div>
            
            {/* Orbiting Rings */}
            <motion.div 
              className="absolute inset-0 border-2 border-indigo-500/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-4 border-t-2 border-b-2 border-purple-500/40 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Image Container */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
               <Image
                 src="/biruk.png" // IMPORTANT: Replace with your image path
                 alt="Biruk - Full Stack Developer"
                 width={600}
                 height={600}
                 className="rounded-full object-cover w-full h-full p-2 border-4 border-slate-800/50"
                 priority
               />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute hidden md:flex md:bottom-30 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-center cursor-pointer group"
        >
          <div className="w-6 h-10 border-2 border-indigo-500/50 rounded-full mx-auto flex justify-center group-hover:border-indigo-400 transition-colors">
            <motion.div
              animate={{ y: [4, 20, 4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="w-1 h-2 bg-indigo-400 rounded-full mt-1"
            />
          </div>
          <div className="text-sm text-gray-400 font-medium mt-3 group-hover:text-white transition-colors">Scroll Down</div>
        </motion.div>
      </motion.a>
    </section>
  );
}