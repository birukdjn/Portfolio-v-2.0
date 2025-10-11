"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitBranch, GitCommit, GitPullRequest, Terminal, Calendar, Clock, ArrowRight, ExternalLink, BookOpen, Eye } from "lucide-react";

const blogs = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn how to structure your React apps for scalability and maintainability with modern patterns and best practices",
    date: "2024-01-15",
    readTime: 5,
    category: "React",
    image: "/biruk.png",
    tags: ["React", "Architecture", "Performance"],
    branch: "feature/react-patterns",
    commits: 12,
    views: 245,
    lastCommit: "2 days ago"
  },
  {
    title: "Introduction to Next.js 14",
    excerpt: "Exploring the new features and improvements in Next.js 14 including App Router, Server Components and enhanced performance",
    date: "2024-01-10",
    readTime: 8,
    category: "Next.js",
    image: "⚡",
    tags: ["Next.js", "Framework", "Updates"],
    branch: "main",
    commits: 8,
    views: 189,
    lastCommit: "1 day ago"
  },
  {
    title: "AI Integration in Web Apps",
    excerpt: "How to integrate AI capabilities into your web applications using modern APIs and machine learning libraries",
    date: "2024-01-05",
    readTime: 6,
    category: "AI",
    image: "🤖",
    tags: ["AI", "Integration", "Innovation"],
    branch: "feature/ai-integration",
    commits: 15,
    views: 312,
    lastCommit: "3 days ago"
  }
];

let readTime = blogs.reduce((total, blog) => total + blog.readTime, 0);
readTime = Math.round(readTime / blogs.length);

export default function Blogs() {
  return (
    <section id="blogs" className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Consistent Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl animate-float-fast delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Particles */}
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
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Sharing insights, tutorials, and thoughts about web development and modern technologies
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-300" />
              
              {/* Blog Card */}
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-250 hover:border-indigo-400/50 h-full flex flex-col">
                {/* Blog Header with Git Info */}
                <div className="relative h-40 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  
                  {/* Branch Label */}
                  <div className="absolute top-3 left-3 flex items-center space-x-1 bg-slate-800/80 backdrop-blur-sm px-2 py-1 rounded-full border border-indigo-500/30">
                    <GitBranch className="w-3 h-3 text-indigo-400" />
                    <span className="text-xs font-mono text-indigo-300">{blog.branch}</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-indigo-600 px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      {blog.category}
                    </span>
                  </div>
                  
                  {blog.image && blog.image.startsWith('/') ? (
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={160}
                      className="object-cover w-full h-full"
                      priority={index < 3}
                    />
                  ) : (
                    <div className="absolute bottom-3 right-3 text-4xl opacity-20">
                      {blog.image}
                    </div>
                  )}

                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1.2 }}
                  />
                </div>

                {/* Blog Content */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Git Stats */}
                  <div className="flex justify-between items-center mb-3 text-xs text-gray-400">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <GitCommit className="w-3 h-3 text-green-400" />
                        <span className="font-mono">{blog.commits}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3 text-blue-400" />
                        <span className="font-mono">{blog.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-purple-400">
                      <span className="font-mono">last:</span>
                      <span>{blog.lastCommit}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-indigo-200 transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2 flex-1 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Read Time & Date */}
                  <div className="flex justify-between items-center mb-3 text-xs text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <time>{blog.date}</time>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime} min read</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 bg-indigo-900/30 text-indigo-300 rounded-full text-xs border border-indigo-500/20 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link - Git Inspired */}
                  <Link
                    href={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center justify-between group/link text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors mt-auto pt-3 border-t border-indigo-500/20"
                  >
                    <span className="flex items-center space-x-1.5">
                      <GitPullRequest className="w-3.5 h-3.5" />
                      <span>Read Article</span>
                    </span>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blogs"
            className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-250 shadow-lg hover:shadow-xl overflow-hidden"
          >
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <GitBranch className="w-4 h-4 relative" />
            <span className="relative">View All Articles</span>
            <ExternalLink className="w-4 h-4 relative" />
          </Link>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-6 mt-6 text-gray-400 text-sm"
          >
            <div className="text-center">
              <div className="text-xl font-bold text-indigo-400 flex items-center justify-center space-x-1">
                <GitCommit className="w-4 h-4" />
                <span>{blogs.length}+</span>
              </div>
              <div className="text-xs">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-indigo-400 flex items-center justify-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}m</span>
              </div>
              <div className="text-xs">Avg Read</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-indigo-400 flex items-center justify-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{blogs.reduce((acc, blog) => acc + blog.views, 0)}+</span>
              </div>
              <div className="text-xs">Total Views</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Terminal-like Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 font-mono text-left hover:border-indigo-400/50 transition-all duration-250 max-w-2xl mx-auto text-xs">
            <div className="flex items-center space-x-2 text-indigo-400 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>~/blog-terminal</span>
            </div>
            <div className="text-gray-300 space-y-0.5">
              <p><span className="text-purple-400">$</span> git log --blog --oneline</p>
              <p><span className="text-green-400">→</span> Building Scalable React Applications [feature/react-patterns]</p>
              <p><span className="text-green-400">→</span> Introduction to Next.js 14 [main]</p>
              <p><span className="text-green-400">→</span> AI Integration in Web Apps [feature/ai-integration]</p>
              <p className="text-indigo-400 mt-1"># Sharing knowledge through commits! 📝</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}