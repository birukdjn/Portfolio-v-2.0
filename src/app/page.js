import Hero from "./Pages/hero";
import About from "./Pages/about";
import Skills from "./Pages/skills";
import Projects from "./Pages/projects";
import Experience from "./Pages/experience";
import Blogs from "./Pages/blogs";
import Contact from "./Pages/contact";
import TerminalIntro from "./components/terminalIntro";


export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <TerminalIntro />
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