"use client";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  GitPullRequest,
  Terminal,
  Code,
  Server,
  Settings,
  Briefcase,
  Clock,
  Database,
  Cloud,
  Layers,
} from "lucide-react";
import skills from "../Data/skillsData";

const categoryIcons = {
  Frontend: Code,
  Backend: Server,
  Database,
  "DevOps & Tools": Settings,
  "Cloud & APIs": Cloud,
  Fundamentals: Layers,
};

// Animation variants for reuse
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, delay } },
});

const Skills = () => {
  const categories = useMemo(() => Object.entries(skills), []);

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden"
    >
      {/* Light Animated Background (optimized for performance) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-64 h-64 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow will-change-transform"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000 will-change-transform"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl animate-float-fast delay-500 will-change-transform"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Technologies and tools I use to transform ideas into powerful digital
            solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([category, skillsList], categoryIndex) => {
            const IconComponent = categoryIcons[category];
            return (
              <motion.div
                key={category}
                variants={fadeIn(categoryIndex * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative will-change-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl scale-105 group-hover:scale-110 transition-all duration-300" />
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-indigo-400/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl mb-3 shadow-lg group-hover:shadow-indigo-500/25 transition-shadow">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white flex items-center justify-center space-x-2">
                      <span>{category}</span>
                      <GitBranch className="w-4 h-4 text-indigo-400" />
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {skillsList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={fadeIn(index * 0.05)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="text-sm font-semibold text-gray-200 truncate">
                                {skill.name}
                              </h4>
                              <div className="flex items-center space-x-1 bg-slate-700/50 px-1.5 py-0.5 rounded text-xs">
                                <GitBranch className="w-3 h-3 text-indigo-400" />
                                <span className="text-indigo-300 font-mono">
                                  {skill.branch}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 text-xs text-gray-400">
                              <div className="flex items-center space-x-1">
                                <Briefcase className="w-3 h-3 text-green-400" />
                                <span className="font-mono">
                                  {skill.projects} projects
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3 text-purple-400" />
                                <span className="font-mono">
                                  {skill.experience}
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="text-indigo-200 font-bold text-sm">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-900/50 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-indigo-500/20">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.05,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full shadow-lg shadow-indigo-500/25 relative overflow-hidden"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-indigo-500/20">
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <div className="flex items-center space-x-2">
                        <GitPullRequest className="w-3 h-3 text-blue-400" />
                        <span className="font-mono">
                          {skillsList.length} technologies
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Terminal className="w-3 h-3 text-green-400" />
                        <span className="font-mono">
                          {Math.round(
                            skillsList.reduce(
                              (acc, skill) => acc + skill.level,
                              0
                            ) / skillsList.length
                          )}
                          % avg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Terminal */}
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 font-mono text-left hover:border-indigo-400/50 transition-all duration-250 max-w-2xl mx-auto text-xs">
            <div className="flex items-center space-x-2 text-indigo-400 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>~/skills-terminal</span>
            </div>
            <div className="text-gray-300 space-y-0.5">
              <p>
                <span className="text-purple-400">$</span> git log --skills
                --oneline
              </p>
              <p>
                <span className="text-green-400">→</span> Frontend: React, Next.js,
                TypeScript, Tailwind
              </p>
              <p>
                <span className="text-green-400">→</span> Backend: Django, .NET,
                Java, C++
              </p>
              <p>
                <span className="text-green-400">→</span> Database: PostgreSQL,
                MySQL, MongoDB, Redis
              </p>
              <p>
                <span className="text-green-400">→</span> DevOps: Docker,
                Kubernetes, CI/CD, Git
              </p>
              <p>
                <span className="text-green-400">→</span> Cloud: Azure, REST API,
                WebSocket, Security
              </p>
              <p>
                <span className="text-green-400">→</span> Fundamentals: HTML, CSS,
                JavaScript, Figma
              </p>
              <p className="text-indigo-400 mt-1">
                # Full-stack developer with {new Date().getFullYear() - 2022}+ years
                of experience! 🚀
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Skills);
