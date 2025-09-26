"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GitBranch, GitCommit, ExternalLink, Globe, Star, Eye, GitFork } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    stars: 42,
    forks: 18,
    watches: 25,
    language: "TypeScript",
    languageColor: "bg-blue-500",
    lastCommit: "2 days ago",
    branch: "main",
    status: "active",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    repoUrl: "https://github.com/birukdjn/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.biruk.com"
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation platform with real-time collaboration",
    stars: 89,
    forks: 34,
    watches: 67,
    language: "Python",
    languageColor: "bg-green-500",
    lastCommit: "1 week ago",
    branch: "develop",
    status: "feature",
    tags: ["Python", "FastAPI", "React", "OpenAI", "Docker"],
    repoUrl: "https://github.com/birukdjn/ai-content-generator",
    liveUrl: "https://ai-demo.biruk.com"
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS specifically designed for developer portfolios",
    stars: 156,
    forks: 72,
    watches: 89,
    language: "JavaScript",
    languageColor: "bg-yellow-500",
    lastCommit: "3 days ago",
    branch: "main",
    status: "stable",
    tags: ["Next.js", "MongoDB", "GraphQL", "Tailwind", "Vercel"],
    repoUrl: "https://github.com/birukdjn/portfolio-cms",
    liveUrl: "https://cms-demo.biruk.com"
  },
  {
    title: "Task Management API",
    description: "RESTful API for task management with real-time updates",
    stars: 31,
    forks: 12,
    watches: 19,
    language: "Go",
    languageColor: "bg-cyan-500",
    lastCommit: "5 hours ago",
    branch: "feature/auth",
    status: "active",
    tags: ["Go", "Redis", "WebSocket", "JWT", "Docker"],
    repoUrl: "https://github.com/birukdjn/task-management-api",
    liveUrl: "https://api-docs.biruk.com"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Real-time data visualization dashboard for analytics",
    stars: 67,
    forks: 28,
    watches: 45,
    language: "TypeScript",
    languageColor: "bg-blue-500",
    lastCommit: "1 day ago",
    branch: "main",
    status: "stable",
    tags: ["D3.js", "React", "Express", "MongoDB", "WebSocket"],
    repoUrl: "https://github.com/birukdjn/data-viz-dashboard",
    liveUrl: "https://dashboard.biruk.com"
  },
  {
    title: "Mobile Learning App",
    description: "Cross-platform mobile application for online learning",
    stars: 124,
    forks: 56,
    watches: 78,
    language: "Dart",
    languageColor: "bg-teal-500",
    lastCommit: "2 weeks ago",
    branch: "release/v1.2",
    status: "release",
    tags: ["Flutter", "Firebase", "GetX", "Stripe", "AWS"],
    repoUrl: "https://github.com/birukdjn/mobile-learning-app",
    liveUrl: "https://learn-demo.biruk.com"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl animate-float-fast delay-500"></div>
        
        {/* Git-inspired Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Code-like Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/20 rounded-full"
              initial={{ 
                opacity: 0,
                x: Math.random() * 1000,
                y: Math.random() * 1000 
              }}
              animate={{ 
                opacity: [0, 0.5, 0],
                y: [0, -80],
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >         
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            A curated collection of my open-source contributions and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-500" />
              
              {/* Project Card */}
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-indigo-400/50 h-full flex flex-col">
                {/* Card Header */}
                <div className="p-6 border-b border-indigo-500/20">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-1 bg-slate-700/50 px-2 py-1 rounded-full">
                      <GitBranch className="w-3 h-3 text-indigo-400" />
                      <span className="text-xs text-indigo-300 font-mono">{project.branch}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="p-4 bg-slate-900/30 border-b border-indigo-500/10">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-3 h-3 text-blue-400" />
                        <span>{project.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3 text-green-400" />
                        <span>{project.watches}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${project.languageColor}`}></div>
                      <span className="font-mono">{project.language}</span>
                    </div>
                  </div>
                </div>

                {/* Project Metadata */}
                <div className="p-4 flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-xs border border-indigo-500/20 hover:bg-indigo-800/40 transition-colors font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Last Commit Info */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <GitCommit className="w-3 h-3 text-green-400" />
                      <span className="font-mono">Last commit:</span>
                      <span>{project.lastCommit}</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'stable' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'active' ? 'bg-blue-500/20 text-blue-400' :
                      project.status === 'feature' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Updated to Repository URL and Live Demo */}
                <div className="p-4 border-t border-indigo-500/20">
                  <div className="flex space-x-3">
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-700/60 hover:bg-slate-600/60 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/repo border border-indigo-500/20 hover:border-indigo-400/40"
                    >
                      <GitBranch className="w-4 h-4 group-hover/repo:text-blue-400 transition-colors" />
                      <span>Repository</span>
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/live shadow-lg hover:shadow-xl"
                    >
                      <Globe className="w-4 h-4 group-hover/live:scale-110 transition-transform" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 group-hover/live:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="https://github.com/birukdjn"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
          >
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <GitBranch className="w-5 h-5 relative" />
            <span className="relative">View All on GitHub</span>
            <ExternalLink className="w-4 h-4 relative" />
          </Link>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-8 mt-8 text-gray-400"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">{projects.length}+</div>
              <div className="text-sm">Active Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">
                {projects.reduce((total, proj) => total + proj.stars, 0)}+
              </div>
              <div className="text-sm">Total Stars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">
                {projects.reduce((total, proj) => total + proj.forks, 0)}+
              </div>
              <div className="text-sm">Total Forks</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}