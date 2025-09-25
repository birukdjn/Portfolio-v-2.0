"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, GitBranch, GitCommit, Code2 } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Addis Systems Integration",
    period: "2022 - Present",
    location: "Addis Ababa, Ethiopia",
    description: "Leading development of scalable web applications using modern technologies. Mentoring junior developers and implementing CI/CD pipelines.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    icon: "🚀",
    branch: "main",
    commits: ["Team Leadership", "Architecture", "Deployment"]
  },
   {
    title: "Full Stack Developer",
    company: "Addis Systems Integration",
    period: "2022 - Present",
    location: "Addis Ababa, Ethiopia",
    description: "Leading development of scalable web applications using modern technologies. Mentoring junior developers and implementing CI/CD pipelines.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    icon: "🚀",
    branch: "main",
    commits: ["Team Leadership", "Architecture", "Deployment"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
    location: "New York, NY",
    description: "Built responsive interfaces and collaborated with design teams. Optimized performance and implemented advanced animations.",
    technologies: ["JavaScript", "Vue.js", "CSS3", "Git", "Figma"],
    icon: "💻",
    branch: "feature/ui-ux",
    commits: ["UI/UX", "Performance", "Animations"]
  },
  {
    title: "Junior Developer",
    company: "Startup XYZ",
    period: "2020 - 2021",
    location: "Austin, TX",
    description: "Started my coding journey, learning best practices and contributing to small features. Built foundation in web development.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
    icon: "🌟",
    branch: "develop",
    commits: ["Learning", "Foundation", "Contributions"]
  },
  {
    title: "Junior Developer",
    company: "Startup XYZ",
    period: "2020 - 2021",
    location: "Austin, TX",
    description: "Started my coding journey, learning best practices and contributing to small features. Built foundation in web development.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
    icon: "🌟",
    branch: "develop",
    commits: ["Learning", "Foundation", "Contributions"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.15)_1px,transparent_0)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Gradient Nodes */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-sm"></div>
        </div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-500"></div>

        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(0.5px)' }}>
          {/* Main trunk line */}
          <motion.path
            d="M50% 0 V 100%"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          {/* Branch connections */}
          <motion.path
            d="M50% 30% H 30%"
            stroke="url(#circuitGradient)"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          <motion.path
            d="M50% 60% H 70%"
            stroke="url(#circuitGradient)"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
          
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
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
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{ 
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 mb-4">
            <Code2 className="w-8 h-8 text-indigo-400" />
            <GitBranch className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Development <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            My coding journey through different branches and commits
          </p>
        </motion.div>

        {/* Circuit Timeline */}
        <div className="relative">
          {/* Main Timeline Trunk */}
          <div className="absolute md:left-1/2 transform -translate-x-1/2 w-1 h-full mt-50 bg-gradient-to-b from-indigo-500/40 to-purple-500/40 rounded-full">
            {/* Animated pulse along the trunk */}
            <motion.div
              className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-indigo-400 to-transparent rounded-full"
              animate={{ y: [0, "100vh", 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Branch Connection Line */}
              <div className={`absolute w-1/4 h-1 bg-gradient-to-r ${
                index % 2 === 0 
                  ? 'from-indigo-500/40 to-transparent left-1/2 ' 
                  : 'from-transparent to-indigo-500/40 right-1/2'
              } rounded-full`}></div>

              {/* Commit Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full z-20 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <GitCommit className="w-4 h-4 text-white" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />
              </div>

              {/* Experience Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Branch Label */}
                  <div className={`absolute -top-8 ${
                    index % 2 === 0 ? 'right-0' : 'left-0'
                  } flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-indigo-500/30`}>
                    <GitBranch className="w-3 h-3 text-indigo-400" />
                    <span className="text-xs font-mono text-indigo-300">{exp.branch}</span>
                  </div>

                  {/* Card Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-500" />
                  
                  {/* Card Content */}
                  <div className="relative bg-slate-800/80 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-indigo-400/50">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl">{exp.icon}</span>
                          <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                            {exp.title}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-300 text-sm">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-indigo-300 font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 bg-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/20 text-sm">
                        <Calendar className="w-3 h-3" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    {/* Commit Messages */}
                    <div className="mb-6 space-y-2">
                      {exp.commits.map((commit, commitIndex) => (
                        <div key={commitIndex} className="flex items-center space-x-2 text-xs">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-400 font-mono">commit:</span>
                          <span className="text-green-300">{commit}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-xs border border-indigo-500/20 hover:bg-indigo-800/40 transition-colors font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal-like Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-6 font-mono text-left hover:border-indigo-400/50 transition-all duration-300">
            <div className="flex items-center space-x-2 text-indigo-400 mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">~/career-timeline</span>
            </div>
            <div className="text-gray-300 space-y-1 text-sm">
              <p><span className="text-purple-400">$</span> git log --oneline --graph --all</p>
              <p><span className="text-green-400">*</span> 2022-present: Full Stack Developer at Tech Solutions Inc. [main]</p>
              <p><span className="text-green-400">*</span> 2021-2022: Frontend Developer at Digital Agency [feature/ui-ux]</p>
              <p><span className="text-green-400">*</span> 2020-2021: Junior Developer at Startup XYZ [develop]</p>
              <p className="text-indigo-400"> Continue coding...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}