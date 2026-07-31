"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { 
  GitBranch, 
  GitCommit, 
  Terminal, 
  Award, 
  Calendar, 
  Code, 
  Trophy,
  ShieldCheck,
  Server,
  Cpu,
  Layers,
  CheckCircle2
} from "lucide-react";

export default function About() {
  const [total, setTotal] = useState("100+");

  useEffect(() => {
    let isMounted = true; 
    fetch("/api/contributions")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data.totalContributions) {
          setTotal(`${data.totalContributions}`);
        }
      })
      .catch(() => {
        if (isMounted) setTotal("250+");
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
      value: "2+ Years Production",
      branch: "main/exp",
      commits: "1.2k+ commits",
      description: "Full-stack & backend",
      linkto: "#experience",
    },
    {
      id: 2,
      icon: Trophy,
      label: "Projects",
      value: "15+ Enterprise & Open Source",
      branch: "projects/all",
      commits: "20+ repos",
      description: "Production deployments",
      linkto: "#projects",
    },
    {
      id: 3,
      icon: Award,
      label: "Certifications",
      value: "OCI Certified Architect",
      branch: "cloud/oci",
      commits: "Oracle & Microsoft",
      description: "Cloud & C# validated",
      linkto: "/certifications",
    },
    {
      id: 4,
      icon: Code,
      label: "Contributions",
      value: `${total} Contributions`,
      branch: "github/activity",
      commits: "Active daily",
      description: "Verified GitHub history",
      linkto: "https://github.com/birukdjn",
      openInNewTab: true
    }
  ], [total]);

  const corePillars = [
    {
      icon: Server,
      title: "Enterprise Backend Engineering",
      description: "Specializing in building resilient RESTful APIs, payment processing gateways, and recurring subscription engines with C# / ASP.NET Core and Node.js.",
      status: "production"
    },
    {
      icon: Layers,
      title: "Clean Architecture & Design Patterns",
      description: "Applying Domain-Driven Design (DDD), SOLID principles, repository patterns, and modular microservices to keep codebases scalable and maintainable.",
      status: "architecture"
    },
    {
      icon: ShieldCheck,
      title: "Security Awareness & Compliance",
      description: "Enforcing OWASP security standards, JWT bearer tokens, role-based access control (RBAC), and custom HTTP security headers (CSP, HSTS).",
      status: "security"
    },
    {
      icon: Cpu,
      title: "Cloud & Microservices Infrastructure",
      description: "Certified Oracle Cloud Infrastructure Architect leveraging Docker containers, Redis caching, and PostgreSQL databases for high-availability apps.",
      status: "cloud"
    }
  ];

  return (
    <section id="about" className="relative w-full py-20 bg-slate-950 text-white overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-float-medium" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">Biruk Dejene</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Full-Stack Software Engineer dedicated to crafting robust payment platforms, high-performance web applications, and scalable backend infrastructure.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative & Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
                <Terminal className="w-6 h-6 text-indigo-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Engineering Background</h3>
                  <p className="text-xs text-indigo-300 font-mono">BSc Computer Science • Hawassa University (3.51 CGPA)</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a passionate <strong className="text-white font-semibold">Full-Stack Software Engineer</strong> with hands-on production experience engineering secure financial payment gateways and web applications.
                </p>
                <p>
                  At <strong className="text-white font-semibold">Arifpay Financial Technologies</strong>, I work on mission-critical payment integration clients, merchant backoffice microservices, and recurring subscription API engines handling sensitive financial transactions.
                </p>
                <p>
                  I graduated with <strong className="text-white font-semibold">Distinction (CGPA 3.51)</strong> from Hawassa University in July 2024, acquiring a rigorous foundation in computer science theory, algorithms, database management, and object-oriented design patterns.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>OWASP Security Conscious</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>OCI Certified Cloud Architect</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>REST API &amp; Microservices</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Remote Collaboration Ready</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-center space-x-2 text-indigo-400 text-xs font-mono mb-1">
                    <stat.icon className="w-3.5 h-3.5" />
                    <span>{stat.label}</span>
                  </div>
                  <div className="text-base font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Core Engineering Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-4"
          >
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-xl p-5 transition-all shadow-md group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-indigo-950 border border-indigo-500/30 rounded-lg text-indigo-400 group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}