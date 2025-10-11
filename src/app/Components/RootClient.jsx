"use client";

import { useState } from "react";
import TerminalIntro from "./terminalIntro";
import Navbar from "./navbar";
import Footer from "./footer";

export default function RootClient({ children }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <TerminalIntro onFinish={() => setShowContent(true)} />}

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
