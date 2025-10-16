// app/layout.jsx
import "./globals.css";
import RootClient from "./Components/RootClient"; 
import { Suspense } from "react";

export const metadata = {
  title: "Birukdjn",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body>
        <Suspense fallback={<div />}>
          <RootClient>{children}</RootClient>
        </Suspense>
      </body>

    </html>
  );
}
