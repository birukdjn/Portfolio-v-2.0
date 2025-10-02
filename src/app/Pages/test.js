"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TerminalIntro({ onFinish }) {
  const commands = [
    "$ git clone birukdjn/portfolio",
    "$ cd portfolio",
    "$ npm run start",
  ];

  const [displayed, setDisplayed] = useState([]);   // finished lines
  const [currentLine, setCurrentLine] = useState(""); // typing line
  const [finished, setFinished] = useState(false);
  const [bootDots, setBootDots] = useState("");       // for boot message

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
            setTimeout(typeLine, 800); // wait before next command
          }
        }, 50); // typing speed
      } else {
        setTimeout(() => setFinished(true), 1000); // after all commands
      }
    }

    typeLine();
  }, []);

  // Animate booting dots: ".", "..", "..."
  useEffect(() => {
    if (finished) {
      let dots = 0;
      const interval = setInterval(() => {
        dots = (dots + 1) % 4; // cycle through 0-3
        setBootDots(".".repeat(dots));
      }, 500);

      // after 2s, transition to portfolio
      const timeout = setTimeout(() => {
        clearInterval(interval);
        onFinish();
      }, 2000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [finished, onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="bg-black text-green-400 font-mono rounded-lg shadow-lg max-w-xl mx-auto mt-20 text-left overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, transition: { duration: 1 } }}
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 bg-gray-800 px-3 py-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-3 text-gray-300 text-sm">birukdjn@portfolio: ~</span>
        </div>

        {/* Terminal Body */}
        <div className="p-6">
          {/* Render finished lines */}
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

          {/* Booting with dots */}
          {finished && (
            <p className="mt-4 text-green-300">
              🚀 Booting portfolio{bootDots}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}