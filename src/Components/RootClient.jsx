"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, Suspense } from "react";
const TerminalIntro = dynamic(() => import("./terminalIntro"), { ssr: false });
const Navbar = dynamic(() => import("./navbar"), { ssr: false });
const Footer = dynamic(() => import("./footer"), { ssr: false });


export default function RootClient({ children }) {
  const [showContent, setShowContent] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  // Check if intro already played this session
  useEffect(() => {
    const played = sessionStorage.getItem("introPlayed");
    if (played) {
      setShowContent(true);
      setHasPlayed(true);
    }
  }, []);

  // When intro finishes, save it in sessionStorage
  const handleFinish = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowContent(true);
    setHasPlayed(true);
  };

  return (
    <>
      {!hasPlayed && !showContent && (
        <TerminalIntro onFinish={handleFinish} />
      )}

      <Suspense fallback={<div />}>
        <div
          className={`transition-opacity duration-300 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </div>
      </Suspense>
    </>
  );
}
