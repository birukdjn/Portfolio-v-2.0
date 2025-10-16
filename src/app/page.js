"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./Pages/hero"), { ssr: false });
const About = dynamic(() => import("./Pages/about"), { ssr: false });
const Skills = dynamic(() => import("./Pages/skills"), { ssr: false });
const Projects = dynamic(() => import("./Pages/projects"), { ssr: false });
const Experience = dynamic(() => import("./Pages/experience"), { ssr: false });
const Blogs = dynamic(() => import("./Pages/blogs"), { ssr: false });
const Contact = dynamic(() => import("./Pages/contact"), { ssr: false });


export default function Home() {

  return (
    <div className="min-h-screen transition-colors duration-300">
        
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Blogs />
          <Contact />
        
    </div>
  );
}