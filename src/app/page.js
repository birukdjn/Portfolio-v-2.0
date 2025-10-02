"use client";
import { useState } from "react";

import Hero from "./Pages/hero";
import About from "./Pages/about";
import Skills from "./Pages/skills";
import Projects from "./Pages/projects";
import Experience from "./Pages/experience";
import Blogs from "./Pages/blogs";
import Contact from "./Pages/contact";
import TerminalIntro from "./components/TerminalIntro";

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="min-h-screen transition-colors duration-300">
      {!showPortfolio && (
        <TerminalIntro onFinish={() => setShowPortfolio(true)} />
      )}

      {showPortfolio && (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Blogs />
          <Contact />
        </>
      )}
    </div>
  );
}