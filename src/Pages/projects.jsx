"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { manualProjects } from "../Data/manualProjects";
import { 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  Search,
  X,
  Maximize2,
  GitBranch,
  Code,
  ArrowRight
} from "lucide-react";

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "C#", "TypeScript", "JavaScript", "Python"];

  const filteredProjects = manualProjects.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" ||
      p.language === selectedCategory ||
      p.tags.includes(selectedCategory);

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query)) ||
      (p.problemSolved && p.problemSolved.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  return (
    <section id="projects" className="relative w-full py-16 sm:py-20 bg-slate-950 text-white overflow-hidden">
      {/* Subtle Ambient Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">
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
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto px-2">
            Production solutions, enterprise microservices, and open-source applications engineered for high performance and reliability.
          </p>

          {/* Search Bar & Filter Controls */}
          <div className="max-w-xl mx-auto space-y-3 pt-2 w-full">
            {/* Live Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tech, keyword, or feature (C#, Payment, Next.js)..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 border border-slate-800 rounded-2xl max-w-md mx-auto space-y-2 px-4">
            <p className="text-slate-300 font-semibold text-sm">No matching projects found</p>
            <p className="text-xs text-slate-500">Try adjusting your search query or filter selection.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-2 text-xs font-mono text-indigo-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-5 sm:p-7 shadow-xl transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                {/* Title & Quick View */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-indigo-400 bg-indigo-950/80 px-2.5 py-0.5 rounded border border-indigo-500/30">
                        {project.language}
                      </span>
                      {project.branch && (
                        <span className="text-[11px] font-mono text-slate-400 flex items-center space-x-1">
                          <GitBranch className="w-3 h-3 text-indigo-400" />
                          <span>{project.branch}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-indigo-300 hover:text-white rounded-lg transition-colors shrink-0"
                    title="Quick View Details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Problem Solved */}
                {project.problemSolved && (
                  <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 space-y-1 text-xs">
                    <div className="text-indigo-300 font-semibold flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Problem Solved:</span>
                    </div>
                    <p className="text-slate-300 leading-normal">
                      {project.problemSolved}
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
                      {project.keyFeatures.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card Footer: Side-by-Side Action Buttons & Tags */}
              <div className="space-y-4 pt-3 border-t border-slate-800">
                {/* Technologies Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      onClick={() => setSearchQuery(t)}
                      className="px-2.5 py-0.5 bg-indigo-950/50 border border-indigo-500/20 text-indigo-300 text-[11px] rounded-md font-mono cursor-pointer hover:border-indigo-400/50 transition-colors"
                      title={`Filter by ${t}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Side-by-Side Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-2.5 rounded-xl text-xs font-semibold transition-all border border-slate-700 hover:border-slate-600"
                    >
                      <GithubIcon className="w-4 h-4 shrink-0" />
                      <span>Code Repo</span>
                    </a>
                  ) : (
                    <div />
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-3 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-md"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call-To-Action Buttons: View All Projects & Visit GitHub Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <Link
            href="/allProjects"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all transform hover:scale-105"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://github.com/birukdjn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 text-slate-200 hover:text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all transform hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit GitHub Profile</span>
          </a>
        </motion.div>
      </div>

      {/* Project Quick View Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <h3 className="text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-950 px-3 py-1 rounded border border-indigo-500/30">
                    {activeModalProject.language}
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded">
                    {activeModalProject.status || "Active"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModalProject.description}
              </p>

              {/* Problem Solved */}
              {activeModalProject.problemSolved && (
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-1">
                  <div className="text-indigo-300 font-semibold text-xs flex items-center space-x-1.5">
                    <AlertCircle className="w-4 h-4 text-indigo-400" />
                    <span>Problem Solved</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {activeModalProject.problemSolved}
                  </p>
                </div>
              )}

              {/* Architecture */}
              {activeModalProject.architecture && (
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-1">
                  <div className="text-purple-300 font-semibold text-xs flex items-center space-x-1.5">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>System Architecture</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {activeModalProject.architecture}
                  </p>
                </div>
              )}

              {/* Key Features */}
              {activeModalProject.keyFeatures && (
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 flex items-center space-x-1.5">
                    <Code className="w-4 h-4 text-indigo-400" />
                    <span>All Key Features</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {activeModalProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons inside Modal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                {activeModalProject.repoUrl && (
                  <a
                    href={activeModalProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-colors border border-slate-700"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Open GitHub Repository</span>
                  </a>
                )}
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-xs font-semibold transition-colors shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live Application</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
