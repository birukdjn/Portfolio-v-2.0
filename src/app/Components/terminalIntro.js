"use client";
import { useEffect, useState } from "react";

export default function TerminalIntro() {
  const commands = [
    "$ git clone birukdjn/portfolio",
    "$ cd portfolio",
    "$ npm run start",
  ];

  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < commands.length) {
        setDisplayed((prev) => [...prev, commands[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1200); // show each command after 1.2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-400 font-mono p-6 rounded-lg shadow-lg max-w-xl mx-auto mt-12">
      {displayed.map((line, idx) => (
        <p key={idx} className="whitespace-pre">
          {line}
        </p>
      ))}
      <span className="animate-pulse">▮</span>
    </div>
  );
}