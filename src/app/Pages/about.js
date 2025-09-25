"use client";
import { motion } from "framer-motion";
import { User, MapPin, Mail, Award, Sparkles, Calendar, Target, Heart, Code, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Story</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            From curious beginner to passionate developer - the journey that shaped my love for technology
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-300" />
              <div className="relative space-y-6  bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-indigo-600 transition-all duration-300">
                <p className="text-md leading-relaxed  text-gray-300">
                  My journey in tech started with a simple curiosity about how websites work. 
                  What began as tinkering with HTML and CSS evolved into a deep passion for 
                  creating digital solutions that solve real-world problems.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg">
                    <Target className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">My Mission</h3>
                </div>
                <p className="text-gray-300 ">
                  To bridge the gap between complex technology and user-friendly experiences, 
                  creating solutions that are both powerful and accessible to everyone.
                </p>
               <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg">
                    <Heart className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">What Drives Me</h3>
                </div>
                <p className="text-gray-300">
                  The thrill of turning ideas into reality, the challenge of solving complex problems, 
                  and the satisfaction of creating something that makes a difference.
                </p>
                
              </div>
            </motion.div>

            

            {/* Personal Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
               <div className="flex items-center space-x-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 px-4 py-3 rounded-xl backdrop-blur-xl">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <div>
                  <div className="text-xs font-semibold text-indigo-300">Experience</div>
                  <div className="text-sm text-gray-300 font-medium">2+ Years</div>
                </div>
              </div>
  
              <div className="flex items-center space-x-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 px-4 py-3 rounded-xl backdrop-blur-xl">
                <Trophy className="w-4 h-4 text-indigo-400" />
                <div>
                  <div className="text-xs font-semibold text-indigo-300">Projects</div>
                  <div className="text-sm text-gray-300 font-medium">20+ Completed</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 px-4 py-3 rounded-xl backdrop-blur-xl">
                <Award className="w-4 h-4 text-indigo-400" />
                <div>
                  <div className="text-xs font-semibold text-indigo-300">Certifications</div>
                  <div className="text-sm text-gray-300 font-medium">10+  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 px-4 py-3 rounded-xl backdrop-blur-xl">
                <Code className="w-4 h-4 text-indigo-400" />
                <div>
                  <div className="text-xs font-semibold text-indigo-300">Github Repos </div>
                  <div className="text-sm text-gray-300 font-medium">100+  </div>
                </div>
              </div>
             
            </motion.div>
          </motion.div>

          {/* Values & Approach */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: User,
                title: "User-Centric Approach",
                description: "I believe the best products are built with the end-user in mind. Every decision is guided by creating intuitive and enjoyable experiences.",
                color: "from-indigo-600 to-purple-600"
              },
              {
                icon: Sparkles,
                title: "Innovation Focused",
                description: "Staying ahead of technology trends allows me to implement cutting-edge solutions that give projects a competitive advantage.",
                color: "from-indigo-600 to-purple-600"
              },
              {
                icon: Target,
                title: "Quality Driven",
                description: "Clean code, thorough testing, and attention to detail are non-negotiable in my development process.",
                color: "from-indigo-600 to-purple-600"
              },
              {
                icon: Heart,
                title: "Continuous Learning",
                description: "The tech landscape evolves rapidly, and I'm committed to constantly expanding my skills and knowledge.",
                color: "from-indigo-600 to-purple-600"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}/20 rounded-xl blur-lg transform scale-105 group-hover:scale-110 transition-all duration-300`} />
                
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${item.color}/20 rounded-lg border border-white/10`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-8 backdrop-blur-xl">
            <h4 className="text-2xl font-bold text-white mb-4">
              {"Let's Build Something Amazing Together"}
            </h4>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
              {"I'm always excited to take on new challenges and collaborate on innovative projects. "}
              {"Whether you need a website, web application, or technical consultation, I'm here to help."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 px-6 py-3 rounded-2xl backdrop-blur-xl">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <div>
                  <div className="text-sm font-semibold text-indigo-300">Based in</div>
                  <div className="text-gray-300 font-medium">Addis Ababa, Ethiopia</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 px-6 py-3 rounded-2xl backdrop-blur-xl">
                <Mail className="w-5 h-5 text-indigo-400" />
                <div>
                  <div className="text-sm font-semibold text-indigo-300">Get in touch</div>
                  <div className="text-gray-300 font-medium">biruk@example.com</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}