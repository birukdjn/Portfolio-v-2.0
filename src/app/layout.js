import "./globals.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

export const metadata = {
  title: "Birukdjn ",
  description: "My personal portfolio website",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
