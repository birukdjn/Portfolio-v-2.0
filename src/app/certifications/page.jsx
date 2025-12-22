"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import {
  GitBranch,
  GitCommit,
  GitPullRequest,
  Terminal,
  ExternalLink,
  Download,
  X,
  Calendar,
  Clock,
  Award,
  BookOpen,
  Eye,
  Star,
  Shield,
  Zap,
  Loader2,
  Search,
  Filter,
  Grid3x3,
  List,
  ChevronDown
} from "lucide-react";
import Image from "next/image";
import certificatesData from '../../Data/certificatesData';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [viewMode, setViewMode] = useState("grid");
  const [isSearching, setIsSearching] = useState(false);

  // Categories with counts
  const categories = useMemo(() => {
    const categoryList = ["all", "Frontend", "Backend", "Cloud", "Framework", "Programing", "DevOps", "Full Stack"];
    
    // Calculate counts for each category
    const categoryCounts = { all: certificatesData.length };
    
    certificatesData.forEach(cert => {
      cert.tags.forEach(tag => {
        const lowerTag = tag.toLowerCase();
        // Find matching category (case-insensitive)
        const matchedCategory = categoryList.find(cat => 
          cat.toLowerCase() === lowerTag
        );
        if (matchedCategory && matchedCategory !== "all") {
          categoryCounts[matchedCategory] = (categoryCounts[matchedCategory] || 0) + 1;
        }
      });
    });
    
    return categoryList.map(category => ({
      id: category,
      name: category.charAt(0).toUpperCase() + category.slice(1),
      count: categoryCounts[category] || 0
    }));
  }, []);

  // Filter and sort certificates
  const filteredCertificates = useMemo(() => {
    setIsSearching(true);
    
    let filtered = certificatesData.filter(cert => {
      const matchesFilter = filter === "all" || 
        cert.tags.some(tag => tag.toLowerCase() === filter.toLowerCase());
      
      const matchesSearch = searchQuery === "" ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesFilter && matchesSearch;
    });

    // Apply sorting
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch(sortBy) {
        case "date":
          comparison = new Date(b.date) - new Date(a.date);
          break;
        case "level":
          const levelOrder = { "Advanced": 3, "Intermediate": 2, "Beginner": 1 };
          comparison = (levelOrder[b.level] || 0) - (levelOrder[a.level] || 0);
          break;
        case "name":
          comparison = a.title.localeCompare(b.title);
          break;
        case "duration":
          comparison = (parseInt(b.duration) || 0) - (parseInt(a.duration) || 0);
          break;
      }
      
      return sortOrder === "desc" ? comparison : -comparison;
    });

    // Simulate search delay for better UX
    setTimeout(() => setIsSearching(false), 300);
    return filtered;
  }, [filter, searchQuery, sortBy, sortOrder]);

  const stats = {
    total: certificatesData.length,
    verified: certificatesData.filter(c => c.status === "verified").length,
    advanced: certificatesData.filter(c => c.level === "Advanced").length,
    recent: certificatesData.filter(c => new Date(c.date) > new Date('2024-01-01')).length
  };

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      // Search logic is handled in useMemo
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <section id="certificates" className="relative min-h-screen py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl animate-float-fast delay-500"></div>

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Validated skills and expertise through industry-recognized certifications and continuous learning
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Total Certifications", value: stats.total, icon: Award, color: "indigo" },
            { label: "Verified", value: stats.verified, icon: Shield, color: "green" },
            { label: "Advanced Level", value: stats.advanced, icon: Star, color: "yellow" },
            { label: "Recent (2024)", value: stats.recent, icon: Zap, color: "purple" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl blur-lg transform scale-105 group-hover:scale-110 transition-all duration-300" />

              <div className="relative bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-4 text-center hover:border-indigo-400/50 transition-all duration-250">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <GitCommit className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-indigo-300 font-mono">main</span>
                </div>
                <stat.icon className={`w-8 h-8 mx-auto mb-2 text-${stat.color}-400`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Active Learning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 overflow-hidden group hover:border-blue-400/50 transition-all duration-300">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6">
              {/* Icon Section */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">
                    Microsoft Learn — ASP.NET Core Web API <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      Active Student
                    </span>
                  </h3>
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30 animate-pulse">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    In Progress
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Actively learning how to build scalable, secure, and high-performance Web APIs using ASP.NET Core.
                  Focus on RESTful principles, authentication, and microservices architecture.
                </p>

                {/* Learning Status */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  {/* Level & XP */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-blue-400">
                      <Star className="w-4 h-4" />
                      <span className="font-medium">Level: Developer (Microsoft Learn)</span>
                    </div>

                    <div className="flex items-center gap-2 text-cyan-400">
                      <Zap className="w-4 h-4" />
                      <span className="font-medium">XP: 80K+</span>
                    </div>
                  </div>

                  {/* Live Indicator */}
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Data shown from Microsoft Learn profile" />
                    Live on Microsoft Learn
                  </div>
                </div>
              </div>

              <div className="gap-10 flex flex-col">
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {["ASP.NET Core Web API", "C#", "REST"].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs border border-blue-500/20 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://learn.microsoft.com/en-us/users/birukdejene-3431/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-700 to-purple-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 whitespace-nowrap"
                >
                  <Eye className="w-4 h-4" />
                  View Live Progress
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Updated Controls Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 hover:border-indigo-400/50 transition-all duration-250">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-indigo-400" />
                  <input
                    type="text"
                    placeholder="Search certifications, skills, or issuers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900/50 border border-indigo-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
                  />
                  {isSearching && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Loader2 className="w-4 h-4 text-indigo-400 animate-spin" />
                    </div>
                  )}
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid" 
                      ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30" 
                      : "bg-slate-800/50 text-slate-400 hover:text-slate-300 hover:border-indigo-400/50 border border-slate-700/50"
                  }`}
                  title="Grid View"
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list" 
                      ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30" 
                      : "bg-slate-800/50 text-slate-400 hover:text-slate-300 hover:border-indigo-400/50 border border-slate-700/50"
                  }`}
                  title="List View"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-slate-900/50 border border-indigo-500/30 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors pr-10 cursor-pointer"
                >
                  <option value="date">Sort by Date</option>
                  <option value="level">Sort by Level</option>
                  <option value="name">Sort by Name</option>
                  <option value="duration">Sort by Duration</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-indigo-400 pointer-events-none" />
              </div>

              {/* Order Toggle */}
              <button
                onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
                className="p-2.5 bg-slate-900/50 border border-indigo-500/30 rounded-lg text-indigo-400 hover:text-indigo-300 hover:border-indigo-400/50 transition-colors"
                title={sortOrder === "desc" ? "Descending" : "Ascending"}
              >
                {sortOrder === "desc" ? "↓" : "↑"}
              </button>
            </div>

            {/* Filter Categories with Counts */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-slate-300">Filter by category:</span>
                <span className="text-xs text-slate-500 ml-auto">
                  {filteredCertificates.length} of {certificatesData.length} showing
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                      filter === category.id
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 border-transparent text-white shadow-lg shadow-indigo-500/25"
                        : "bg-slate-800/40 border-indigo-500/20 text-slate-300 hover:bg-slate-700/40 hover:border-indigo-400/50"
                    }`}
                  >
                    {category.name}
                    <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                      filter === category.id 
                        ? "bg-white/20 text-white" 
                        : "bg-slate-700/50 text-slate-400"
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search Results Info */}
            {searchQuery && (
              <div className="mt-4 pt-4 border-t border-indigo-500/20">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-300">
                    Search results for:{" "}
                    <span className="text-indigo-400 font-medium">"{searchQuery}"</span>
                  </div>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    Clear search
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Results Count and View Toggle Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between mb-6 px-2"
        >
          <div className="text-slate-300 text-sm">
            Showing <span className="text-white font-semibold">{filteredCertificates.length}</span> certificates
            {filter !== "all" && (
              <span>
                {" "}in <span className="text-indigo-400 font-medium">{filter}</span>
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <div className={`flex items-center gap-1 ${viewMode === "grid" ? "text-indigo-400" : ""}`}>
              <Grid3x3 className="w-3 h-3" />
              <span>Grid</span>
            </div>
            <span className="text-slate-700">|</span>
            <div className={`flex items-center gap-1 ${viewMode === "list" ? "text-indigo-400" : ""}`}>
              <List className="w-3 h-3" />
              <span>List</span>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        <AnimatePresence>
          {isSearching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-20"
            >
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-400">Searching certificates...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Certificates Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`${viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"} mb-12`}
        >
          {filteredCertificates.length === 0 && !isSearching ? (
            <div className="col-span-full text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-full flex items-center justify-center border border-slate-700/50">
                <Search className="w-12 h-12 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No certificates found</h3>
              <p className="text-slate-400 max-w-md mx-auto">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilter("all");
                }}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group relative cursor-pointer ${viewMode === "list" ? "flex gap-4 bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-4 hover:border-indigo-400/50" : ""}`}
                onClick={() => setSelectedCertificate(cert)}
              >
                {viewMode === "grid" ? (
                  // Grid View Card
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-300" />

                    {/* Certificate Card */}
                    <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-250 hover:border-indigo-400/50 h-full flex flex-col">
                      {/* Certificate Image */}
                      <div className="relative h-48 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                        {/* Certificate Image */}
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          layout="fill"
                          objectFit="cover"
                          className="object-cover"
                        />

                        {/* Branch Label */}
                        <div className="absolute top-3 left-3 flex items-center space-x-1 bg-slate-800/80 backdrop-blur-sm px-2 py-1 rounded-full border border-indigo-500/30">
                          <GitBranch className="w-3 h-3 text-indigo-400" />
                          <span className="text-xs font-mono text-indigo-300">{cert.branch}</span>
                        </div>

                        {/* Status Badge */}
                        <div className="absolute top-3 right-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${cert.status === "verified"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            }`}>
                            {cert.status}
                          </span>
                        </div>

                        {/* Level Badge */}
                        <div className="absolute bottom-3 left-3">
                          <span className="bg-white/90 text-indigo-600 px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                            {cert.level}
                          </span>
                        </div>

                        <div className="w-full h-full flex items-center justify-center">
                          <Award className="w-16 h-16 text-white/20" />
                        </div>

                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 1.2 }}
                        />
                      </div>

                      {/* Certificate Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        {/* Git Stats */}
                        <div className="flex justify-between items-center mb-3 text-xs text-gray-400">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <GitCommit className="w-3 h-3 text-green-400" />
                              <span className="font-mono">{cert.commits} commits</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-purple-400">
                            <Calendar className="w-3 h-3" />
                            <span>{cert.date}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-indigo-200 transition-colors leading-tight">
                          {cert.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-3 line-clamp-2 flex-1 leading-relaxed">
                          {cert.description}
                        </p>

                        {/* Issuer and Duration */}
                        <div className="flex justify-between items-center mb-3 text-xs text-gray-400">
                          <div className="flex items-center space-x-2">
                            <BookOpen className="w-3 h-3" />
                            <span>{cert.issuer}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-3 h-3" />
                            <span>{cert.duration}</span>
                          </div>
                        </div>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {cert.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="px-1.5 py-0.5 bg-indigo-900/30 text-indigo-300 rounded-full text-xs border border-indigo-500/20 font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="px-1.5 py-0.5 bg-slate-700/50 text-gray-400 rounded-full text-xs border border-slate-600/20">
                              +{cert.skills.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Action Button */}
                        <div className="inline-flex items-center justify-between group/link text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors mt-auto pt-3 border-t border-indigo-500/20">
                          <span className="flex items-center space-x-1.5">
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  // List View Card
                  <>
                    <div className="flex-shrink-0 w-32 h-24 relative overflow-hidden rounded-lg">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-white truncate group-hover:text-indigo-200 transition-colors">
                            {cert.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-slate-400">
                            <BookOpen className="w-3 h-3" />
                            <span>{cert.issuer}</span>
                            <span className="text-slate-600">•</span>
                            <Calendar className="w-3 h-3" />
                            <span>{cert.date}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            cert.status === "verified" 
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}>
                            {cert.status}
                          </span>
                          <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-semibold">
                            {cert.level}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                        {cert.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-xs border border-slate-600/50"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="px-2 py-1 text-slate-500 text-xs">
                            +{cert.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Terminal-like Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 font-mono text-left hover:border-indigo-400/50 transition-all duration-250 max-w-2xl mx-auto text-xs">
            <div className="flex items-center space-x-2 text-indigo-400 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>~/certificates-terminal</span>
            </div>
            <div className="text-gray-300 space-y-0.5">
              <p><span className="text-purple-400">$</span> git log --certificates --oneline</p>
              <p><span className="text-green-400">→</span> Total certifications: {stats.total}</p>
              <p><span className="text-green-400">→</span> Verified: {stats.verified} | Advanced: {stats.advanced}</p>
              <p><span className="text-green-400">→</span> Recent additions: {stats.recent} in 2024</p>
              <p className="text-indigo-400 mt-1"># Committed to continuous learning and skill validation! 📚</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Popup Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900/95 backdrop-blur-xl border border-indigo-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-indigo-500/20">
                <div className="flex items-center space-x-3">
                  <GitBranch className="w-5 h-5 text-indigo-400" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Certificate Details</h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <span className="font-mono">{selectedCertificate.branch}</span>
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Certificate Image */}
                  <div className="relative">
                    <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 flex items-center justify-center w-full h-70">
                      <Image
                        src={selectedCertificate.image}
                        alt={selectedCertificate.title}
                        layout="fill"
                        objectFit="cover"
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex gap-3 mt-4">
                      <a
                        href={selectedCertificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Verify Credential</span>
                      </a>
                      <a
                        href={selectedCertificate.image}
                        download
                        className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors border border-indigo-500/20"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {selectedCertificate.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedCertificate.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="text-sm text-gray-400">Issuer</div>
                        <div className="text-white font-medium">{selectedCertificate.issuer}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-400">Issue Date</div>
                        <div className="text-white font-medium">{selectedCertificate.date}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-400">Duration</div>
                        <div className="text-white font-medium">{selectedCertificate.duration}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-400">Level</div>
                        <div className="text-white font-medium">{selectedCertificate.level}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                        <GitCommit className="w-4 h-4 text-green-400" />
                        <span>Skills Acquired</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-indigo-900/30 text-indigo-300 rounded-lg text-sm border border-indigo-500/20 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                        <GitPullRequest className="w-4 h-4 text-blue-400" />
                        <span>Git Stats</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Branch</span>
                          <span className="text-indigo-300 font-mono">{selectedCertificate.branch}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Commits</span>
                          <span className="text-green-400 font-mono">{selectedCertificate.commits}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Status</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${selectedCertificate.status === "verified"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                            }`}>
                            {selectedCertificate.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Tags</span>
                          <div className="flex gap-1">
                            {selectedCertificate.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="text-purple-300 text-xs">#{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}