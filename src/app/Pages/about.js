"use client";
import { motion } from "framer-motion";
import { 
  GitBranch, 
  GitCommit, 
  GitPullRequest, 
  Terminal, 
  User, 
  Award, 
  Sparkles, 
  Calendar, 
  Target, 
  Heart, 
  Code, 
  Trophy,
  BookOpen,
  Zap,
  Shield
} from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: Calendar,
      label: "Experience",
      value: "2+ Years",
      branch: "main",
      commits: "1.2k+",
      description: "Active development"
    },
    {
      icon: Trophy,
      label: "Projects",
      value: "20+ Completed",
      branch: "feature/projects",
      commits: "856+",
      description: "Successful deployments"
    },
    {
      icon: Award,
      label: "Certifications",
      value: "10+",
      branch: "develop",
      commits: "342+",
      description: "Skills validated"
    },
    {
      icon: Code,
      label: "GitHub Repos",
      value: "100+",
      branch: "main",
      commits: "2.1k+",
      description: "Open source contributions"
    }
  ];

  const values = [
    {
      icon: User,
      title: "User-Centric Approach",
      description: "I believe the best products are built with the end-user in mind. Every decision is guided by creating intuitive and enjoyable experiences.",
      branch: "feature/ux",
      commits: 24,
      status: "active"
    },
    {
      icon: Sparkles,
      title: "Innovation Focused",
      description: "Staying ahead of technology trends allows me to implement cutting-edge solutions that give projects a competitive advantage.",
      branch: "feature/innovation",
      commits: 18,
      status: "active"
    },
    {
      icon: Shield,
      title: "Quality Driven",
      description: "Clean code, thorough testing, and attention to detail are non-negotiable in my development process.",
      branch: "main",
      commits: 42,
      status: "stable"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "The tech landscape evolves rapidly, and I'm committed to constantly expanding my skills and knowledge.",
      branch: "feature/learning",
      commits: 56,
      status: "active"
    }
  ];

  return (
    <section id="about" className="relative w-full py-16 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        
        {/* Git-inspired Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Code-like Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
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
                y: [0, -60],
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Story</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            From curious beginner to passionate developer - the journey that shaped my love for technology
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-300" />
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-indigo-400/50 transition-all duration-250">
                {/* Branch Header */}
                <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-indigo-500/20">
                  <GitCommit className="w-5 h-5 text-indigo-400" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Development Journey</h3>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <GitBranch className="w-3 h-3" />
                      <span className="font-mono">feature/my-story</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-md leading-relaxed text-gray-300 mb-9">
                  My journey in tech started with a simple curiosity about how websites work. 
                  What began as tinkering with HTML and CSS evolved into a deep passion for 
                  creating digital solutions that solve real-world problems.
                </p>

                {/* Mission Section */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-500/20">
                      <Target className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-md font-bold text-white mb-1">My Mission</h4>
                      <p className="text-sm text-gray-300">
                        To bridge the gap between complex technology and user-friendly experiences, 
                        creating solutions that are both powerful and accessible to everyone.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-500/20">
                      <Heart className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-md font-bold text-white mb-1">What Drives Me</h4>
                      <p className="text-sm text-gray-300">
                        The thrill of turning ideas into reality, the challenge of solving complex problems, 
                        and the satisfaction of creating something that makes a difference.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl blur-lg transform scale-105 group-hover:scale-110 transition-all duration-300" />
                  
                  <div className="relative bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-3 hover:border-indigo-400/50 transition-all duration-250">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <stat.icon className="w-4 h-4 text-indigo-400" />
                        <span className="text-xs font-semibold text-indigo-300">{stat.label}</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-slate-700/50 px-1.5 py-0.5 rounded text-xs">
                        <GitBranch className="w-2.5 h-2.5 text-indigo-400" />
                        <span className="text-indigo-300 font-mono">{stat.branch}</span>
                      </div>
                    </div>
                    
                    <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <GitCommit className="w-3 h-3 text-green-400" />
                        <span className="font-mono">{stat.commits}</span>
                      </div>
                      <span>{stat.description}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Values & Approach */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-xl blur-lg transform scale-105 group-hover:scale-110 transition-all duration-300" />
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 shadow-lg hover:shadow-xl hover:border-indigo-400/50 transition-all duration-250">
                  {/* Value Header with Git Info */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-500/20">
                        <value.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-md font-bold text-white">{value.title}</h3>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      value.status === 'stable' ? 'bg-green-500/20 text-green-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {value.status}
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-3">
                    {value.description}
                  </p>

                  {/* Git Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-indigo-500/20">
                    <div className="flex items-center space-x-2">
                      <GitBranch className="w-3 h-3 text-indigo-400" />
                      <span className="font-mono">{value.branch}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitCommit className="w-3 h-3 text-green-400" />
                      <span className="font-mono">{value.commits} commits</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-6 hover:border-indigo-400/50 transition-all duration-250">
            <h4 className="text-xl font-bold text-white mb-3 flex items-center justify-center space-x-2">
              <GitPullRequest className="w-5 h-5 text-indigo-400" />
              <span>Let's Build Something Amazing Together</span>
            </h4>
            <p className="text-gray-300 max-w-2xl mx-auto mb-4 text-sm">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Whether you need a website, web application, or technical consultation, I'm here to help.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-250 shadow-lg hover:shadow-xl"
            >
              <Zap className="w-4 h-4" />
              <span>Get in touch</span>
              <GitCommit className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}