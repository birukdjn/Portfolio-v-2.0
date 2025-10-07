"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu, FileText, Download } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, mobile = false, onClick, activeSection }) => {
  const id = href.replace("#", ""); 
  const isActive = activeSection === id;

  if (mobile) {
    return (
      <Link 
        href={href} 
        onClick={onClick}
        className={`block py-3 px-6 text-lg hover:text-white transition-colors duration-200 ${
          isActive ? "text-white bg-indigo-600" : "text-gray-300"
        }`}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <Link
      href={href}
      className={`py-2 border-b-2 transition-colors duration-200 ${
        isActive
          ? "border-indigo-600 text-white"
          : "border-transparent text-slate-300 hover:text-white hover:border-indigo-600"
      }`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "blogs", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('nav')) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [open]);

  return (
    <nav className="w-full bg-slate-900 fixed top-0 left-0 z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo and Main Nav */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3 text-white hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Birukdjn Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-lg"
              quality={100}
              priority
            />
            <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Birukdjn
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-sm">
            <li><NavLink href="/" activeSection={activeSection}>Home</NavLink></li>
            <li><NavLink href="#about" activeSection={activeSection}>About</NavLink></li>
            <li><NavLink href="#skills" activeSection={activeSection}>Skills</NavLink></li>
            <li><NavLink href="#projects" activeSection={activeSection}>Projects</NavLink></li>
            <li><NavLink href="#experience" activeSection={activeSection}>Experience</NavLink></li>
            <li><NavLink href="#blogs" activeSection={activeSection}>Blogs</NavLink></li>
            <li><NavLink href="#contact" activeSection={activeSection}>Contact</NavLink></li>
          </ul>
        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-1">
           {/* Resume Download Button - Desktop */}
          <a
            href="/resume.pdf"
            download
            className=" flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md transition-colors duration-200"
          >
            <span className="group flex items-center space-x-2">
              <FileText className="h-4 w-4 group-hover:hidden" />
              <Download className="hidden h-4 w-4 group-hover:flex" />
              <span className="text-sm font-medium">Resume</span>
            </span>
          </a>
          {/* Mobile Icons */}
          <div className="flex md:hidden items-center space-x-3"></div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-400 focus:outline-none hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 shadow-xl animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col py-2 ">
            <li>
              <NavLink href="#home" mobile activeSection={activeSection} onClick={() => setOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink href="#about" mobile activeSection={activeSection} onClick={() => setOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink href="#skills" mobile activeSection={activeSection} onClick={() => setOpen(false)}>Skills</NavLink>
            </li>
             <li>
              <NavLink href="#projects" mobile activeSection={activeSection} onClick={() => setOpen(false)}>Projects</NavLink>
            </li> 
            <li>
              <NavLink href="#experience" mobile activeSection={activeSection} onClick={() => setOpen(false)}>Experience </NavLink>
            </li> 
            <li>
              <NavLink href="#blogs" mobile activeSection={activeSection} onClick={() => setOpen(false)}>Blogs</NavLink>
            </li>
            <li>
              <NavLink href="#contact" mobile activeSection={activeSection} onClick={() => setOpen(false)}>Contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
