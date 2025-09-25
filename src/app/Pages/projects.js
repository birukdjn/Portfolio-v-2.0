"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "/biruk.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses and sentiment analysis",
    image: "/project2.jpg",
    technologies: ["Next.js", "Socket.io", "OpenAI", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true
  },
  {
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates",
    image: "/project3.jpg",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl animate-float-fast delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Particles */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl  font-black text-white mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-500" />
              
              {/* Project Card */}
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-indigo-400/50">
                {/* Project Image */}
                <div className="h-50 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <Link
                      href={project.github}
                      className="flex-1  hover:bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-2 rounded-lg transition-all duration-300 border border-slate-600/50 hover:border-indigo-600 flex items-center justify-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </Link>
                    <Link
                      href={project.live}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-center py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 border border-indigo-500/30"
          >
            <span>View All Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}