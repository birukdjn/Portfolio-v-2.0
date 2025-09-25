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
    <section id="skills" className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-5 w-72 h-72 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl animate-float-fast delay-500"></div>
        
        {/* Grid Pattern with Animation */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
                duration: 4 + Math.random() * 3,
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-500" />
                
                {/* Skills Card */}
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-indigo-400/50">
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-indigo-500/25 transition-shadow">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category}
                    </h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-5">
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
                          <span className="text-md font-semibold text-gray-200">
                            {skill.name}
                          </span>
                          <span className="text-indigo-200 font-bold text-md">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-900/50 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, delay: index * 0.1 + categoryIndex * 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full shadow-lg shadow-indigo-500/25 relative overflow-hidden"
                          >
                            {/* Animated Shine Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
      </div>
    </section>
  );
}