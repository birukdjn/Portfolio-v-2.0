"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  GitBranch, 
  GitCommit, 
  Terminal, 
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  User,
  MessageCircle,
  FileText
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "birukedjn@gmail.com",
    link: "mailto:birukedn@gmail.com",
    branch: "main",
    status: "active"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+251 908 574 808",
    link: "tel:+251908574808",
    branch: "feature/contact",
    status: "available"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Addis Ababa, Ethiopia",
    link: "https://maps.app.goo.gl/TNa5UAdrdUPk9M1s6",
    branch: "location",
    status: "online"
  }
];

const socialPlatforms = [
  {
    name: "GitHub",
    url: "https://github.com/birukdjn",
    icon: Github,
    username: "@birukdjn",
    commits: "1.2k+"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/birukdjn",
    icon: Linkedin,
    username: "@birukdjn",
    connections: "500+"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/birukdjn",
    icon: Twitter,
    username: "@birukdjn",
    followers: "2.4k"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl animate-float-fast delay-500"></div>
        
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Get In <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            {"Ready to collaborate? Let's discuss your next project."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information - Git Inspired */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-indigo-400" />
                <span>{"Let's Collaborate"}</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {"I'm always open to discussing new opportunities and creative projects."}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  className="block group"
                >
                  <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-250 hover:border-indigo-400/50">
                    {/* Branch Label */}
                    <div className="absolute -top-2 right-4 flex items-center space-x-1 bg-indigo-900/80 backdrop-blur-sm px-2 py-1 rounded-full border border-indigo-500/30">
                      <GitBranch className="w-2.5 h-2.5 text-indigo-400" />
                      <span className="text-xs font-mono text-indigo-300">{method.branch}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <method.icon className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-semibold text-white text-sm group-hover:text-indigo-200 transition-colors">
                            {method.title}
                          </div>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            method.status === 'active' ? 'bg-green-400' :
                            method.status === 'available' ? 'bg-blue-400' :
                            'bg-yellow-400'
                          } animate-pulse`} />
                        </div>
                        <div className="text-gray-300 text-xs font-mono">
                          {method.value}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links - Circular */}
            <div className="pt-2">
              <h4 className="font-semibold text-white mb-4 flex items-center space-x-2 text-sm">
                <GitCommit className="w-4 h-4 text-indigo-400" />
                <span>Follow my commits</span>
              </h4>
              <div className="flex space-x-3">
                {socialPlatforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="group relative"
                  >
                    <div className="w-12 h-12 bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-full flex items-center justify-center hover:border-indigo-400/50 transition-all duration-250 shadow-lg hover:shadow-xl">
                      <platform.icon className="w-5 h-5 text-gray-300 group-hover:text-indigo-300 transition-colors" />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                      <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {platform.username} • {platform.commits || platform.connections || platform.followers}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Git Inspired */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="relative"
          >
            {/* Form Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl blur-lg transform scale-105" />
            
            <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-250 hover:border-indigo-400/50">
              {/* Form Header */}
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-indigo-500/20">
                <Terminal className="w-5 h-5 text-indigo-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">Send Message</h3>
                  <div className="flex items-center space-x-1 text-xs text-gray-400">
                    <GitBranch className="w-3 h-3" />
                    <span className="font-mono">feature/contact-form</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1 flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm bg-slate-700/50 border border-indigo-500/30 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-250"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1 flex items-center space-x-1">
                      <Mail className="w-3 h-3" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm bg-slate-700/50 border border-indigo-500/30 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-250"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-300 mb-1 flex items-center space-x-1">
                    <FileText className="w-3 h-3" />
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-slate-700/50 border border-indigo-500/30 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-250"
                    placeholder="Project discussion"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1 flex items-center space-x-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-slate-700/50 border border-indigo-500/30 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-250"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-250 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                 
                  <span className="relative flex items-center justify-center space-x-1.5">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                        <GitCommit className="w-3 h-3" />
                      </>
                    )}
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>

        {/* Terminal-like Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 font-mono text-left hover:border-indigo-400/50 transition-all duration-250  mx-auto max-w-2xl text-xs">
            <div className="flex items-center space-x-4 text-indigo-400 mb-2">
              <div className="w-4 h-4  bg-indigo-600 rounded-full animate-pulse"></div>
              <span className=" font-bold text-indigo-400">~/contact-terminal</span>
            </div>
            <div className="text-gray-300  space-y-0.5 leading-snug pr-4">
              <p><span className="text-purple-400">$</span> git status --contact</p>
              <p><span className="text-green-400">→</span> Status: Available for projects</p>
              <p><span className="text-green-400">→</span> Response: Within 24 hours</p>
              <p className="text-indigo-400 mt-1"># {"Let's build something amazing!"} 🚀</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}