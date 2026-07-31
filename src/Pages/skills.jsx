"use client";

import { motion } from "framer-motion";
import skills, { currentlyExploring } from "../Data/skillsData";
import { Cpu, ShieldCheck, Database, Cloud, Code2, CheckCircle2, Sparkles } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Backend & APIs":
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case "Frontend & Web Apps":
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case "Databases & Storage":
        return <Database className="w-5 h-5 text-indigo-400" />;
      case "Cloud, DevOps & Security":
        return <Cloud className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="relative w-full py-14 sm:py-20 bg-slate-950 text-white overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Technical <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">Proficiency</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto px-2">
            Comprehensive tech stack specializing in .NET Core backend systems, RESTful microservices, React/Next.js, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {Object.entries(skills).map(([category, items], categoryIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl transition-all space-y-5"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
                <div className="p-2 bg-indigo-950 border border-indigo-500/30 rounded-lg">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">{category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {items.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-slate-200 flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/20">
                        {skill.experience}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Exploring / Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 bg-slate-900/60 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-6 text-center space-y-4"
        >
          <div className="flex items-center justify-center space-x-2 text-indigo-400 font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Currently Exploring &amp; Expanding</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {currentlyExploring.map((tech) => (
              <div 
                key={tech.name} 
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs sm:text-sm font-mono text-slate-300"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
