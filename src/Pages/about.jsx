"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

import { 
  GitBranch, 
  GitCommit, 
  GitPullRequest, 
  User, 
  Award, 
  Calendar, 
  Target, 
  Code, 
  Trophy,
  BookOpen,
  Zap,
  Shield,
  CheckCircle2,
  Cpu,
  Layers,
  Lock
} from "lucide-react";

const EyeIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-4 h-4 inline-block mr-1 align-middle"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.437 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
    />
  </svg>
);

export default function About() {
  const [isHovered, setIsHovered] = useState(null);
  const [total, setTotal] = useState("100+");

  useEffect(() => {
    let isMounted = true; 
    fetch("/api/contributions")
      .then(res => res.json())
      .then(data => {
        if (isMounted && data.totalContributions) {
          setTotal(String(data.totalContributions));
        }
      })
      .catch(() => {
        if (isMounted) {
          setTotal("500+");
        };
      });
    return () => {
      isMounted = false; 
    };
  }, []);

  const stats = useMemo(() => [
    {
      id: 1,
      icon: Calendar,
      label: "Experience",
      value: "2+ Years",
      branch: "main",
      commits: "1.2k+ Commits",
      description: "Production software engineering",
      linkto: "#experience",
      goto: (
        <span className="text-indigo-400 font-semibold"><EyeIcon />Experience</span>
      ),
      openInNewTab: false
    },
    {
      id: 2,
      icon: Trophy,
      label: "Production Systems",
      value: "20+ Built",
      branch: "projects",
      commits: "15+ Repos",
      description: "APIs & Web Platforms",
      linkto: "#projects",
      goto: (       
        <span className="text-indigo-400 font-semibold"><EyeIcon />Projects</span>
      ),
      openInNewTab: false
    },
    {
      id: 3,
      icon: Award,
      label: "Certifications",
      value: "OCI Certified",
      branch: "main/cloud",
      commits: "Oracle Cloud",
      description: "Architect Associate",
      linkto: "/certifications",
      goto: (
        <span className="text-indigo-400 font-semibold"><EyeIcon />Certificates</span>
      ),
      openInNewTab: false
    },
    {
      id: 4,
      icon: Code,
      label: "GitHub Metrics",
      value: `${total} Contribs`,
      branch: "develop",
      commits: "Active",
      description: "Open source & personal",
      linkto: "https://github.com/birukdjn",
      goto: (
        <span className="text-indigo-400 font-semibold"><EyeIcon />GitHub</span>
      ),
      openInNewTab: true
    }
  ], [total]);

  const engineeringPrinciples = [
    {
      icon: Layers,
      title: "Clean Architecture & Decoupling",
      description: "Designing modular, layered microservices using Domain-Driven Design (DDD) principles that separate business logic from external dependencies.",
      branch: "arch/clean-code",
      status: "core principle"
    },
    {
      icon: Lock,
      title: "Security-First Development",
      description: "Enforcing OWASP Top 10 defenses, strict rate limiting, JWT token security, role-based access control, and defense-in-depth API design.",
      branch: "sec/owasp-hardening",
      status: "non-negotiable"
    },
    {
      icon: Cpu,
      title: "Performance & Scalability",
      description: "Optimizing PostgreSQL database indexing, EF Core queries, Redis edge caching, and server side rendering for sub-second response times.",
      branch: "perf/high-throughput",
      status: "production"
    },
    {
      icon: Shield,
      title: "Quality & System Resilience",
      description: "Writing maintainable, self-documenting code with comprehensive error handling, audit logging, and structured automated CI/CD pipelines.",
      branch: "main/ci-cd",
      status: "active"
    }
  ];

  return (
    <section id="about" className="relative w-full py-14 sm:py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* Ambient Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-float-medium delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            About <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto px-2">
            Software engineer focused on enterprise backend microservices, payment processing engines, and high-performance full-stack applications.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side: Professional Journey & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Story Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-all duration-300" />
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
                  <GitCommit className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Software Engineering Profile</h3>
                    <div className="flex items-center space-x-2 text-xs text-indigo-300 font-mono mt-0.5">
                      <GitBranch className="w-3 h-3" />
                      <span>main / backend-engineering</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  I hold a <strong className="text-white">BSc in Computer Science with Distinction</strong> (CGPA 3.51/4.00) from Hawassa University. Currently, I serve as a <strong className="text-white">Software Engineer at Arifpay Financial Technologies</strong>, where I design and maintain critical payment gateway engines, merchant backoffice microservices, and automated subscription billing systems using ASP.NET Core and PostgreSQL.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-indigo-950 border border-indigo-500/30 rounded-lg shrink-0 mt-0.5">
                      <Target className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Target Roles &amp; Focus</h4>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Full Stack Engineer, Backend (.NET / C#), API / Microservices Engineer, and Payment Systems Engineer for international remote teams.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-indigo-950 border border-indigo-500/30 rounded-lg shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Proven Track Record</h4>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Delivered secure RESTful APIs processing real merchant payment flows, custom authorization engines, and localized e-commerce solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/40 rounded-xl p-4 transition-all cursor-pointer"
                    onMouseEnter={() => setIsHovered(stat.id)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <Link 
                      href={stat.linkto} 
                      target={stat.openInNewTab ? "_blank" : "_self"}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <stat.icon className="w-4 h-4 text-indigo-400" />
                          <span className="text-xs font-semibold text-indigo-300">{stat.label}</span>
                        </div>
                        <div className="flex items-center space-x-1 bg-slate-800 px-2 py-0.5 rounded text-[11px] font-mono text-slate-400">
                          <GitBranch className="w-2.5 h-2.5 text-indigo-400" />
                          <span>{stat.branch}</span>
                        </div>
                      </div>

                      <div className="flex justify-between text-base sm:text-lg font-bold text-white mb-1 items-center">
                        {isHovered === stat.id ? (
                          <span className="text-indigo-300 text-sm transition-opacity">
                            {stat.goto}
                          </span>
                        ) : (
                          <span className="text-white font-mono">
                            {stat.value}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="font-mono text-emerald-400">{stat.commits}</span>
                        <span>{stat.description}</span>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Engineering Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="pb-2">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
                <Zap className="w-5 h-5 text-indigo-400" />
                <span>Engineering Philosophy &amp; Standards</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                How I write, architect, and ship production software.
              </p>
            </div>

            {engineeringPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/40 rounded-xl p-4 sm:p-5 shadow-lg transition-all space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-indigo-950 border border-indigo-500/30 rounded-lg">
                        <principle.icon className="w-4 h-4 text-indigo-400" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white">{principle.title}</h4>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-indigo-950 text-indigo-300 border border-indigo-500/20">
                      {principle.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {principle.description}
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                    <div className="flex items-center space-x-1.5 text-indigo-300">
                      <GitBranch className="w-3 h-3 text-indigo-400" />
                      <span>{principle.branch}</span>
                    </div>
                    <span className="text-emerald-400">PASSED CI/CD</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-indigo-500/40 transition-all max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center space-x-2">
              <GitPullRequest className="w-5 h-5 text-indigo-400" />
              <span>Looking for a Dedicated Software Engineer?</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I am available for remote full-stack, backend, and payment systems engineering positions worldwide. Let&apos;s build resilient systems together.
            </p>
            
            <div className="pt-2 flex justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/25"
              >
                <Zap className="w-4 h-4" />
                <span>Initiate Contact</span>
                <GitCommit className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}