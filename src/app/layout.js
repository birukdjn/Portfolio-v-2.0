import "./globals.css";
import Navbar from "./Components/navbar";
import { Providers } from "./providers";

export const metadata = {
  title: "BirukDjn ",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main className="pt-20">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
