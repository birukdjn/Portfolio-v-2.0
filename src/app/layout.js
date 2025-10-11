// app/layout.jsx
import "./globals.css";
import RootClient from "./Components/RootClient"; 

export const metadata = {
  title: "Birukdjn",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}
