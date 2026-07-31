"use client";

import { motion } from "framer-motion";
import skills from "../Data/skillsData";
import { Cpu, Terminal, ShieldCheck, Database, Cloud, Code2, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Backend & Security":
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case "Frontend Engineering":
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case "Databases & Caching":
        return <Database className="w-5 h-5 text-indigo-400" />;
      case "Cloud & Infrastructure":
        return <Cloud className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="relative w-full py-20 bg-slate-950 text-white overflow-hidden">
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
          className="text-center mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technical <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">Proficiency</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            Comprehensive full-stack tech stack specializing in .NET backend systems, modern React/Next.js frontends, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], categoryIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
                <div className="p-2 bg-indigo-950 border border-indigo-500/30 rounded-lg">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-xl font-bold text-white">{category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {items.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-200 flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-xs font-mono text-slate-400">{skill.experience}</span>
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
      </div>
    </section>
  );
}
