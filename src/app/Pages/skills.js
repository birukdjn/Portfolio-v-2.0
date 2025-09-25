"use client";
import { motion } from "framer-motion";
import { Code, Server, Settings } from "lucide-react";

const skills = {
  "Frontend": [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 }
  ],
  "Backend": [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 70 }
  ],
  "Tools": [
    { name: "Git", level: 90 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "Figma", level: 75 }
  ]
};

const categoryIcons = {
  "Frontend": Code,
  "Backend": Server,
  "Tools": Settings
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to transform ideas into powerful, scalable digital solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillsList], categoryIndex) => {
            const IconComponent = categoryIcons[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-3xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-300" />
                
                {/* Skills Card */}
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category}
                    </h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-6">
                    {skillsList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + categoryIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, delay: index * 0.1 + categoryIndex * 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full shadow-lg shadow-indigo-500/25 relative overflow-hidden"
                          >
                            {/* Animated Shine Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              initial={{ x: "-100%" }}
                              whileInView={{ x: "100%" }}
                              transition={{ duration: 1.5, delay: 1 + index * 0.1, repeat: Infinity, repeatDelay: 2 }}
                              viewport={{ once: true }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning, Always Growing
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of web development. 
              Currently diving deeper into AI integration and cloud architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}