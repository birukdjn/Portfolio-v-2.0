"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu, FileText, Award } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, mobile = false, onClick, activeSection }) => {
  const id = href.replace("/#", "").replace("#", ""); 
  const isActive = activeSection === id;

  if (mobile) {
    return (
      <Link 
        href={href} 
        onClick={onClick}
        className={`block py-3 px-6 text-base font-medium transition-colors ${
          isActive ? "text-indigo-400 bg-slate-800/80 font-bold" : "text-slate-300 hover:text-white"
        }`}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <Link
      href={href}
      className={`py-1 text-sm font-medium transition-colors ${
        isActive
          ? "text-indigo-400 font-semibold"
          : "text-slate-300 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "blogs", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="w-full bg-slate-950/90 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/logo.png"
            alt="Biruk Dejene Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg group-hover:scale-105 transition-transform"
            priority
          />
          <span className="font-extrabold text-lg text-white group-hover:text-indigo-300 transition-colors">
            Biruk Dejene
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-7">
          <li><NavLink href="/#about" activeSection={activeSection}>About</NavLink></li>
          <li><NavLink href="/#skills" activeSection={activeSection}>Skills</NavLink></li>
          <li><NavLink href="/#projects" activeSection={activeSection}>Projects</NavLink></li>
          <li><NavLink href="/#experience" activeSection={activeSection}>Experience</NavLink></li>
          <li><NavLink href="/#contact" activeSection={activeSection}>Contact</NavLink></li>
          <li><NavLink href="/certifications" activeSection={activeSection}>Certifications</NavLink></li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 shadow-2xl py-2">
          <NavLink href="/#about" mobile activeSection={activeSection} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink href="/#skills" mobile activeSection={activeSection} onClick={() => setOpen(false)}>Skills</NavLink>
          <NavLink href="/#projects" mobile activeSection={activeSection} onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink href="/#experience" mobile activeSection={activeSection} onClick={() => setOpen(false)}>Experience</NavLink>
          <NavLink href="/#contact" mobile activeSection={activeSection} onClick={() => setOpen(false)}>Contact</NavLink>
          <NavLink href="/certifications" mobile activeSection={activeSection} onClick={() => setOpen(false)}>Certifications</NavLink>
          <div className="px-6 py-3">
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
