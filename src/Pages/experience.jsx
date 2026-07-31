"use client";

import { motion } from "framer-motion";
import experiences from "../Data/experienceData";
import { GitBranch, GitCommit, MapPin, Calendar, Building2, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-20 bg-slate-950 text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Work <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            Track record in software engineering, payment integrations, backend microservices, and enterprise applications.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 lg:ml-12 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Timeline Dot Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 p-2 bg-slate-900 border-2 border-indigo-500 rounded-full text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg">
                {exp.icon}
              </div>

              {/* Card Body */}
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all space-y-4">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-indigo-300 font-semibold mt-1">
                      <span className="flex items-center space-x-1">
                        <Building2 className="w-4 h-4 text-indigo-400" />
                        <span>{exp.company}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-slate-400 text-xs font-normal">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Commit Highlights */}
                {exp.commits && (
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                      <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Key Highlights &amp; Responsibilities:</span>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                      {exp.commits.map((c, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 rounded-md text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}