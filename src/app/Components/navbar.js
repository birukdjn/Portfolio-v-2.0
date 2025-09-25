"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Monitor, X, Menu, FileText } from "lucide-react";
import { useTheme } from "next-themes";
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
  const { theme, setTheme } = useTheme();
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


  const ThemeButton = ({ themeName, icon, label }) => (
    <button
      onClick={() => setTheme(themeName)}
      className={`p-1.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
        theme === themeName
          ? "bg-indigo-600 text-white shadow-lg"
          : "text-gray-400 hover:bg-gray-700 hover:text-white"
      }`}
      aria-label={`Switch to ${label} theme`}
    >
      {icon}
    </button>
  );

  const ThemeSelector = ({ mobile = false }) => mounted && (
    <div className={`flex items-center space-x-1 bg-gray-800 rounded-full p-1 ${mobile ? "ml-2" : ""}`}>
      <ThemeButton 
        themeName="light" 
        icon={<Sun className="h-4 w-4" />} 
        label="light" 
      />
      <ThemeButton 
        themeName="dark" 
        icon={<Moon className="h-4 w-4" />} 
        label="dark" 
      />
      <ThemeButton 
        themeName="system" 
        icon={<Monitor className="h-4 w-4" />} 
        label="system" 
      />
    </div>
  );

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
            <li><NavLink href="#home" activeSection={activeSection}>Home</NavLink></li>
            <li><NavLink href="#about" activeSection={activeSection}>About</NavLink></li>
            <li><NavLink href="#skills" activeSection={activeSection}>Skills</NavLink></li>
            <li><NavLink href="#projects" activeSection={activeSection}>Projects</NavLink></li>
            <li><NavLink href="#experience" activeSection={activeSection}>Experience</NavLink></li>
            <li><NavLink href="#blogs" activeSection={activeSection}>Blogs</NavLink></li>
            <li><NavLink href="#contact" activeSection={activeSection}>Contact</NavLink></li>
          </ul>

        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-4">
           {/* Resume Download Button - Desktop */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md transition-colors duration-200"
          >
            <FileText className="h-4 w-4" />
            <span className="text-sm font-medium">Resume</span>
          </a>
          {/* Theme Changer (Desktop) */}
          <div className="hidden md:flex items-center">
            <ThemeSelector />
          </div>
          {/* Mobile Icons */}
          <div className="flex md:hidden items-center space-x-3">
            <ThemeSelector mobile={true} />
          </div>
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
          <ul className="flex flex-col py-2">
            <li>
              <NavLink href="/" mobile onClick={() => setOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink href="/about" mobile onClick={() => setOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink href="/skills" mobile onClick={() => setOpen(false)}>Skills</NavLink>
            </li>
             <li>
              <NavLink href="/projects" mobile onClick={() => setOpen(false)}>Projects</NavLink>
            </li> 
            <li>
              <NavLink href="/experience" mobile onClick={() => setOpen(false)}>Experience </NavLink>
            </li> 
            <li>
              <NavLink href="/blog" mobile onClick={() => setOpen(false)}>blog</NavLink>
            </li>
            <li>
              <NavLink href="/contact" mobile onClick={() => setOpen(false)}>Contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}