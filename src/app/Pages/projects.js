"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "/project1.jpg",
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
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <Link
                    href={project.github}
                    className="flex-1 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-900 dark:text-white text-center py-2 rounded-lg transition-colors"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={project.live}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 rounded-lg transition-colors"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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