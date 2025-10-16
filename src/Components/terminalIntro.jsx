"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  "$ git clone https://github.com/birukdjn/portfolio-v2.0.0.git",
  "$ cd portfolio-v2.0.0",
  "$ npm install",
  "$ npm run dev",
];

export default function TerminalIntro({ onFinish }) {
  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [finished, setFinished] = useState(false);
  const [bootDots, setBootDots] = useState("");
  const [visible, setVisible] = useState(true);

  const hasRun = useRef(false);

  // Typing effect
  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
      if (lineIndex < commands.length) {
        const line = commands[lineIndex];
        const typing = setInterval(() => {
          if (charIndex < line.length) {
            setCurrentLine((prev) => prev + line[charIndex]);
            charIndex++;
          } else {
            clearInterval(typing);
            setDisplayed((prev) => [...prev, line]);
            setCurrentLine("");
            charIndex = 0;
            lineIndex++;
            setTimeout(typeLine, 100);
          }
        }, 10);
      } else {
        setTimeout(() => setFinished(true), 100);
      }
    }

    typeLine();
  }, []);

  // Booting animation and fade out
  useEffect(() => {
    if (finished) {
      let dots = 0;
      const interval = setInterval(() => {
        dots = (dots + 1) % 4;
        setBootDots(".".repeat(dots));
      }, 300);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        // Smooth fade out before showing portfolio
        setVisible(false);
        setTimeout(() => onFinish?.(), 800);
      }, 1000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [finished, onFinish]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 z-50 flex justify-center items-center bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <div className="w-[90%] h-[80%] max-w-2xl rounded-lg overflow-hidden shadow-lg border border-gray-700">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="ml-3 text-gray-300 text-sm">
              birukdjn@portfolio-v-2.0: ~
            </span>
          </div>

          {/* Terminal Body */}
          <div className="bg-black text-green-400 font-mono p-6 text-left min-h-[200px]">
            {displayed.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}

            {!finished && (
              <p>
                {currentLine}
                <span className="animate-pulse">▮</span>
              </p>
            )}

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
