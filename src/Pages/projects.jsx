"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { manualProjects } from "../Data/manualProjects";
import Image from "next/image";
import { 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  Code,
  ArrowUpRight
} from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "C#", "TypeScript", "JavaScript", "Python"];

  const filteredProjects = selectedCategory === "All"
    ? manualProjects
    : manualProjects.filter(p => p.language === selectedCategory || p.tags.includes(selectedCategory));

  return (
    <section id="projects" className="relative w-full py-20 bg-slate-950 text-white overflow-hidden">
      {/* Subtle Ambient Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Production solutions, enterprise microservices, and open-source applications engineered for high performance and reliability.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Title & Links */}
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center space-x-2">
                      <span>{project.title}</span>
                    </h3>
                    <span className="inline-block mt-1 text-xs font-mono text-indigo-400 bg-indigo-950/80 px-2.5 py-0.5 rounded border border-indigo-500/30">
                      {project.language}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Problem Solved */}
                {project.problemSolved && (
                  <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 space-y-1 text-xs">
                    <div className="text-indigo-300 font-semibold flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Problem Solved:</span>
                    </div>
                    <p className="text-slate-300 leading-normal">
                      {project.problemSolved}
                    </p>
                  </div>
                )}

                {/* Architecture */}
                {project.architecture && (
                  <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 space-y-1 text-xs">
                    <div className="text-purple-300 font-semibold flex items-center space-x-1">
                      <Layers className="w-3.5 h-3.5 text-purple-400" />
                      <span>Architecture:</span>
                    </div>
                    <p className="text-slate-300 leading-normal">
                      {project.architecture}
                    </p>
                  </div>
                )}

                {/* Key Features */}
                {project.keyFeatures && (
                  <div className="space-y-1.5 pt-1">
                    <div className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                      <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Key Features:</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {project.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-indigo-950/50 border border-indigo-500/20 text-indigo-300 text-xs rounded-md font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
