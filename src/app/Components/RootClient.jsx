"use client";

import { useEffect, useState } from "react";
import TerminalIntro from "./terminalIntro";
import Navbar from "./navbar";
import Footer from "./footer";

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

      {showContent && (
        <>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
