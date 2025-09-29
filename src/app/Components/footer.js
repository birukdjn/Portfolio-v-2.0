"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  GitBranch, 
  GitCommit, 
  GitPullRequest, 
  Terminal, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  Heart,
  Code,
  Calendar,
  Codepen
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

// Custom Icons
const StackOverflowIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="currentColor">
    <path d="M87 90v21H18V90h-9v30h87V90zM27 111h51V99H27v12zm56-31l2-9-46-10-2 9 46 10zm6-26l4-8-42-20-4 9 42 19zm11-23l6-7-35-30-6 7 35 30zm16-24L91 0l-5 8 25 28 5-9z"/>
  </svg>
);

const DevToIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 40" fill="currentColor">
    <path d="M7.5 0h35A7.5 7.5 0 0 1 50 7.5v25A7.5 7.5 0 0 1 42.5 40h-35A7.5 7.5 0 0 1 0 32.5v-25A7.5 7.5 0 0 1 7.5 0zm9.7 11.5h-5.4v17h5.4c2.7 0 4.8-2.2 4.8-4.8v-7.4c0-2.7-2.1-4.8-4.8-4.8zm1.6 12.4c0 0.9-0.7 1.6-1.6 1.6h-2.2V14.5h2.2c0.9 0 1.6 0.7 1.6 1.6v7.8zm9.5-8.4h-3.8v10.8h3.8c2.9 0 5.2-2.3 5.2-5.2v-0.4c0-2.9-2.3-5.2-5.2-5.2zm0 7.8h-1.2v-4.8h1.2c1.3 0 2.4 1.1 2.4 2.4v0.1c0 1.3-1.1 2.3-2.4 2.3zm12.7-9.8h-6.3v2.8h3.5v2.5h-3.5v2.8h6.3v2.5H34V13.5h7.5v2.5z"/>
  </svg>
);

const LeetCodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
    <path d="M222.3 223.3a12 12 0 0 1-17 0l-92-92a12 12 0 0 1 0-17l92-92a12 12 0 0 1 17 17L144.7 128l77.6 77.6a12 12 0 0 1 0 17zM116 196a12 12 0 0 1-8.5-3.5l-64-64a12 12 0 0 1 0-17l64-64a12 12 0 1 1 17 17L68.5 128l56 56a12 12 0 0 1-8.5 20z"/>
  </svg>
);


  const quickLinks = [
    { name: "Home", href: "#home", branch: "main" },
    { name: "About", href: "#about", branch: "feature/about" },
    { name: "Skills", href: "#skills", branch: "develop" },
    { name: "Projects", href: "#projects", branch: "feature/projects" },
    { name: "Experience", href: "#experience", branch: "main" },
    { name: "Blog", href: "#blogs", branch: "feature/blog" },
    { name: "Contact", href: "#contact", branch: "main" },
    { name: "All Projects", href: "https://github.com/birukdjn", branch: "main" }
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/birukdjn", 
      icon: Github, 
      username: "@birukdjn",
      commits: "1.2k+"
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/birukdjn", 
      icon: Linkedin, 
      username: "@birukdjn",
      connections: "500+"
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/birukdjn", 
      icon: Twitter, 
      username: "@birukdjn",
      followers: "2.4k"
    },
     { 
      name: "Stack", 
      href: "https://stackoverflow.com/users/1234567/birukdjn", 
      icon: StackOverflowIcon, 
      username: "@birukdjn",
      followers: "2.4k"
    },
     { 
      name: "Dev.to", 
      href: "https://Dev.to/birukdjn", 
      icon: DevToIcon, 
      username: "@birukdjn",
      followers: "2.4k"
    },
     { 
      name: "LeetCode", 
      href: "https://leetcode.com/birukdjn/", 
      icon: LeetCodeIcon, 
      username: "@birukdjn",
      followers: "2.4k"
    },
       { 
      name: "CodePen", 
      href: "https://codepen.io/birukdjn", 
      icon: Codepen, 
      username: "@birukdjn",
      followers: "2.4k"
    },
    
    { 
      name: "Email", 
      href: "mailto:birukedjn@gmail.com", 
      icon: Mail, 
      username: "birukedjn@gmail.com",
      status: "active"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "20+", branch: "main" },
    { label: "Code Commits", value: "1.2k+", branch: "develop" },
    { label: "Years Coding", value: "2+", branch: "feature/experience" },
    { label: "Technologies", value: "15+", branch: "main" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden border-t border-indigo-500/20">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-32 right-1/3 w-72 h-72 bg-gradient-to-r from-blue-600/8 to-indigo-600/8 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        
        {/* Git-inspired Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Code-like Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/15 rounded-full"
              initial={{ 
                opacity: 0,
                x: Math.random() * 1000,
                y: Math.random() * 1000 
              }}
              animate={{ 
                opacity: [0, 0.3, 0],
                y: [0, -40],
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
                      
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Let's <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Collaborate</span>
            </h2>
            <p className="text-gray-300 max-w-md mx-auto text-sm">
              Ready to bring your next project to life? Let's connect and build something amazing together.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
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
                
                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-4 text-center hover:border-indigo-400/50 transition-all duration-250">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <GitCommit className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-indigo-300 font-mono">{stat.branch}</span>
                  </div>
                  <div className="text-2xl font-bold text-indigo-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        {/* Links Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Quick Links */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-bold text-white flex items-center space-x-2 mb-4">
                        <GitPullRequest className="w-5 h-5 text-indigo-400" />
                        <span>Quick Links</span>
                      </h3>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {quickLinks.map((link, index) => (
                          <motion.li
                            key={link.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Link
                              href={link.href}
                              className="group flex items-center justify-between py-2 text-gray-300 hover:text-white transition-colors duration-200"
                            >
                              <span className="flex items-center space-x-2">
                                <GitBranch className="w-3 h-3 text-indigo-400" />
                                <span>{link.name}</span>
                              </span>
                              <span className="text-xs text-indigo-300 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                {link.branch}
                              </span>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                      
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <div className=" bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-4 hover:border-indigo-400/50 transition-all duration-250">
                        <ul className="flex justify-between space-y-4 flex-wrap">
                          <li className="flex items-start space-x-3 text-sm">
                            <Code className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-300 font-mono">08:00 - 12:00</span>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3 text-sm">
                            <GitPullRequest className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-300 font-mono">13:00 - 17:00</span>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3 text-sm">
                            <Terminal className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-300 font-mono">19:00 - 21:00</span>
                            </div>
                          </li>
                           <li className="flex items-start space-x-3 text-sm">
                            <Heart className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-300 font-mono">23:00 onwards</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>

                      
                    </motion.div>

                    

                    {/* Social Links */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-bold text-white flex items-center space-x-2 mb-4">
                        <Terminal className="w-5 h-5 text-indigo-400" />
                        <span>Connect With Me</span>
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {socialLinks.map((social, index) => (
                          <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group relative"
                          >
                            <div className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-lg p-3 hover:border-indigo-400/50 transition-all duration-250">
                              <div className="flex items-center space-x-2">
                                <social.icon className="w-5 h-5 text-indigo-400" />
                                <div className="flex-1 min-w-0">
                                  <div className="text-md font-medium text-white truncate">{social.name}</div>
                                  <div className="text-xs text-gray-400 truncate">{social.username}</div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                              </div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>

                                        <motion.div
                                          initial={{ opacity: 0, x: 20 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.5, delay: 0.2 }}
                                          viewport={{ once: true }}
                                          className="space-y-4"
                                        >
                                          <h3 className="text-lg font-bold text-white flex items-center space-x-2 mb-4">
                                            <Code className="w-5 h-5 text-indigo-400" />
                                            <span>Current Status</span>
                                          </h3>
                                          <div className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-4 hover:border-indigo-400/50 transition-all duration-250">
                                            <div className="space-y-3">
                                              <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-300">Availability</span>
                                                <span className="flex items-center space-x-1 text-green-400">
                                                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                  <span className="font-mono">Open to work</span>
                                                </span>
                                              </div>
                                              <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-300">Response Time</span>
                                                <span className="text-indigo-300 font-mono">&lt; 24h</span>
                                              </div>
                                              <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-300">Current Focus</span>
                                                <span className="text-purple-300 font-mono">Next.js 14</span>
                                              </div>
                                              <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-300">Preferred Stack</span>
                                                <span className="text-gray-300 font-mono">MERN</span>
                                              </div>
                                              <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-300">Learning</span>
                                                <span className="text-gray-300 font-mono">DevOps</span>
                                              </div>
                                              <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-300">Last Deploy</span>
                                                <span className="text-blue-300 font-mono">Today</span>
                                              </div>
                                              <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-300">Location</span>
                                                <span className="text-gray-300 font-mono">Remote</span>
                                              </div>
                                              <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-300">Timezone</span>
                                                <span className="text-gray-300 font-mono">EAT (UTC+3)</span>
                                              </div>
                                              <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-300">Fun Fact</span>
                                                <span className="text-gray-300 font-mono">Loves Coffee</span>
                                              </div>
                                              
                                            </div>
                                          </div>
                                        </motion.div>
                                      </div>
                            </div>

                            {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-indigo-500/20 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>© {currentYear} Biruk. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center space-x-1">
                <Code className="w-4 h-4" />
                <span>Built with</span>
              </div>
              <div className="flex items-center space-x-1 text-indigo-400">
                <Heart className="w-4 h-4 fill-current" />
                <span>by Biruk</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <GitCommit className="w-4 h-4" />
              <span className="font-mono">v1.0.0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}