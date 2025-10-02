"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TerminalIntro({ onFinish }) {
  const commands = [
    "$ git clone birukdjn/portfolio",
    "$ cd portfolio",
    "$ npm run start",
  ];

  const [displayed, setDisplayed] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < commands.length) {
        setDisplayed((prev) => [...prev, commands[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setFinished(true), 1200); // wait, then show boot message
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (finished) {
      setTimeout(() => onFinish(), 2000); // after boot msg, go to portfolio
    }
  }, [finished, onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="bg-black text-green-400 font-mono p-6 rounded-lg shadow-lg max-w-xl mx-auto mt-20"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, transition: { duration: 1 } }}
      >
        {displayed.map((line, idx) => (
          <p key={idx} className="whitespace-pre">
            {line}
          </p>
        ))}
        {!finished && <span className="animate-pulse">▮</span>}
        {finished && (
          <p className="mt-4 animate-pulse text-green-300">🚀 Booting portfolio...</p>
        )}
      </motion.div>
    </AnimatePresence>
  );
}