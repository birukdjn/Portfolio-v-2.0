"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, ExternalLink, BookOpen } from "lucide-react";

const blogs = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn how to structure your React apps for scalability and maintainability with modern patterns and best practices",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "React",
    image: "/biruk.png",
    tags: ["React", "Architecture", "Performance"]
  },
  {
    title: "Introduction to Next.js 14",
    excerpt: "Exploring the new features and improvements in Next.js 14 including App Router, Server Components and enhanced performance",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Next.js",
    image: "⚡",
    tags: ["Next.js", "Framework", "Updates"]
  },
  {
    title: "AI Integration in Web Apps",
    excerpt: "How to integrate AI capabilities into your web applications using modern APIs and machine learning libraries",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "AI",
    image: "🤖",
    tags: ["AI", "Integration", "Innovation"]
  }
];

export default function Blogs() {
  return (
    <section id="blogs" className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Consistent Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl animate-float-fast delay-500"></div>
        
        {/* Grid Pattern */}
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
      
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            Sharing insights, tutorials, and thoughts about web development, AI integration, and modern technologies
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-500" />
              
              {/* Blog Card */}
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-indigo-400/50 h-full flex flex-col">
                {/* Blog Header with Gradient */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                      {blog.category}
                    </span>
                  </div>
                  {blog.image && blog.image.startsWith('/') ? (
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      className="object-cover w-full h-full"
                      priority={index < 3}
                    />
                  ) : (
                    <div className="absolute bottom-4 right-4 text-6xl opacity-20">
                      {blog.image}
                    </div>
                  )}

                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1.5 }}
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <time>{blog.date}</time>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-indigo-200 transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3 flex-1 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-xs border border-indigo-500/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center justify-between group/link text-indigo-400 hover:text-indigo-300 font-semibold transition-colors mt-auto pt-4 border-t border-indigo-500/20"
                  >
                    <span>Read Article</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blogs"
            className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
          >
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <span className="relative">View All Articles</span>
            <ExternalLink className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-8 mt-8 text-gray-400"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">3+</div>
              <div className="text-sm">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">5min+</div>
              <div className="text-sm">Avg. Read Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">100%</div>
              <div className="text-sm">Useful Content</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}