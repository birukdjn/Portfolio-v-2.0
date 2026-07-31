"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  GitBranch,
  GitCommit,
  GitPullRequest,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Eye,
  X,
  Share2,
  Check,
  Search,
  Home
} from "lucide-react";
import blogs from "../../Data/blogsData";

export default function BlogsPage() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const categories = ["All", ".NET 10", "Docker", "Spring Boot", "Redis", "Security", "Kafka", "System Design", "Performance", "Deployment"];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCat = selectedCategory === "All" || blog.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      blog.title.toLowerCase().includes(query) ||
      blog.excerpt.toLowerCase().includes(query) ||
      blog.tags.some((t) => t.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <main className="relative py-24 sm:py-28 bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-10">
        {/* Navigation back */}
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-mono text-indigo-400 hover:text-indigo-300 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition-all"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-2">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Technical Write-ups &amp; System Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Engineering <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">Articles &amp; Benchmarks</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-2">
            In-depth guides on building high-throughput .NET 10 microservices, Docker containerization, Spring Boot, Redis caching, OWASP security, and event-driven architecture.
          </p>

          {/* Search & Filters */}
          <div className="max-w-2xl mx-auto pt-4 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword (Kafka, Security, Docker, .NET 10)..."
                className="w-full pl-10 pr-9 py-3 bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blogs Grid — 12 articles in 4×3 layout */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-mono text-slate-400">
            Showing <span className="text-indigo-400 font-semibold">{Math.min(filteredBlogs.length, 12)}</span> of <span className="text-indigo-400 font-semibold">{filteredBlogs.length}</span> articles
          </p>
          <span className="text-[11px] font-mono text-slate-600">4 × 3 grid</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredBlogs.slice(0, 12).map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative cursor-pointer"
              onClick={() => setActiveArticle(blog)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-300" />

              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-indigo-500/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-250 hover:border-indigo-400/50 h-full flex flex-col">
                <div className="relative h-40 bg-slate-950 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center space-x-1 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-indigo-500/30">
                    <GitBranch className="w-3 h-3 text-indigo-400" />
                    <span className="text-[11px] font-mono text-indigo-300">
                      {blog.branch}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="bg-indigo-600/90 text-white px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md border border-indigo-400/30">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col space-y-3">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1 font-mono text-emerald-400">
                        <GitCommit className="w-3 h-3" />
                        <span>{blog.commits} commits</span>
                      </span>
                      <span className="flex items-center space-x-1 font-mono text-indigo-400">
                        <Eye className="w-3 h-3" />
                        <span>{blog.views} views</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-1">
                    {blog.excerpt}
                  </p>

                  <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono pt-1">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      <span>{blog.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-indigo-400" />
                      <span>{blog.readTime} min read</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-indigo-950/60 text-indigo-300 rounded-md text-[10px] border border-indigo-500/20 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center justify-between text-indigo-400 group-hover:text-indigo-300 font-semibold text-xs transition-colors pt-3 border-t border-slate-800">
                    <span className="flex items-center space-x-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Full Article</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-indigo-500/30 rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Cover Header */}
              <div className="relative h-56 sm:h-72 bg-slate-950 shrink-0">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  className="object-cover w-full h-full"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full transition-colors border border-slate-700 z-10"
                  aria-label="Close Article"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-bold rounded-md">
                      {activeArticle.category}
                    </span>
                    <span className="text-xs font-mono text-slate-300 flex items-center space-x-1 bg-slate-800/80 px-2.5 py-1 rounded-md">
                      <Clock className="w-3 h-3 text-indigo-400" />
                      <span>{activeArticle.readTime} min read</span>
                    </span>
                    <span className="text-xs font-mono text-slate-300 flex items-center space-x-1 bg-slate-800/80 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      <span>{activeArticle.date}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm">
                      BD
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Biruk Dejene</div>
                      <div className="text-xs text-slate-400 font-mono">Software Engineer @ Arifpay</div>
                    </div>
                  </div>

                  <button
                    onClick={handleShare}
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors flex items-center space-x-1.5 text-xs"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                    <span>{copied ? "Link Copied!" : "Share"}</span>
                  </button>
                </div>

                <div className="prose prose-invert max-w-none space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: formatMarkdown(activeArticle.content) }} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function formatMarkdown(content) {
  if (!content) return "";
  return content
    .replace(/^# (.*$)/gim, '<h1 class="text-xl sm:text-2xl font-black text-white mt-4 mb-2">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-lg sm:text-xl font-bold text-indigo-300 mt-5 mb-2">$2</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-base font-bold text-slate-200 mt-4 mb-1">$3</h3>')
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-950 border border-slate-800 p-4 rounded-xl font-mono text-xs overflow-x-auto text-emerald-300 my-4"><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="bg-slate-950 text-indigo-300 px-1.5 py-0.5 rounded font-mono text-xs border border-slate-800">$1</code>')
    .replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc text-slate-300 my-1">$1</li>')
    .replace(/\n\n/g, '<p class="my-3 text-slate-300 leading-relaxed"></p>');
}