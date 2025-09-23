import "./globals.css";
import Navbar from "./Components/navbar";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Biruk Djn Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" enableSystem={true}>
          <Navbar />
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}