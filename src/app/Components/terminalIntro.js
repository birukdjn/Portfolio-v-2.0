"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  "$ git clone https://github.com/birukdjn/portfolio-v-2.0.git",
  "$ cd portfolio-v-2.0",
  "$ npm install",
  "$ npm run dev"
];


export default function TerminalIntro({ onFinish }) {
  const [displayed, setDisplayed] = useState([]); // finished lines
  const [currentLine, setCurrentLine] = useState(""); // typing line
  const [finished, setFinished] = useState(false);
  const [bootDots, setBootDots] = useState(""); // booting dots animation

  // Typing effect
  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
      if (lineIndex < commands.length) {
        let line = commands[lineIndex];
        let typing = setInterval(() => {
          if (charIndex < line.length) {
            setCurrentLine((prev) => prev + line[charIndex]);
            charIndex++;
          } else {
            clearInterval(typing);
            setDisplayed((prev) => [...prev, line]);
            setCurrentLine("");
            charIndex = 0;
            lineIndex++;
            setTimeout(typeLine, 300); // wait before next line
          }
        }, 25); // typing speed
      } else {
        setTimeout(() => setFinished(true), 100); // after all commands
      }
    }

    typeLine();
  }, []);

  // Animate booting dots
  useEffect(() => {
    if (finished) {
      let dots = 0;
      const interval = setInterval(() => {
        dots = (dots + 1) % 4; // cycle 0-3
        setBootDots(".".repeat(dots));
      }, 300);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        onFinish();
      }, 1000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [finished, onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <div className="w-[90%] h-[80%] max-w-2xl rounded-lg overflow-hidden shadow-lg">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="ml-3 text-gray-300 text-sm">birukdjn@portfolio-v-2.0: ~</span>
          </div>

          {/* Terminal Body */}
          <div className="bg-black text-green-400 font-mono p-6 text-left min-h-[200px]">
            {/* Finished lines */}
            {displayed.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}

            {/* Current typing line */}
            {!finished && (
              <p>
                {currentLine}
                <span className="animate-pulse">▮</span>
              </p>
            )}

            {/* Booting message */}
            {finished && (
              <p className="mt-4 text-green-300">
                🚀 Booting portfolio-v-2.0{bootDots}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}