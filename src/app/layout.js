import "./globals.css";
import RootClient from "../Components/RootClient"; 
import { Suspense } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://birukdjn.vercel.app"),
  title: {
    default: "Biruk Dejene | Software Engineer & Payment Systems Developer",
    template: "%s | Biruk Dejene",
  },
  description: "Software Engineer specializing in .NET Core, C#, ASP.NET, React 19, Next.js 16, microservices, and secure Payment Gateway Integrations. Open for international remote opportunities.",
  keywords: [
    "Biruk Dejene",
    "Software Engineer",
    "Full Stack Engineer",
    "Remote Software Engineer",
    ".NET Core Engineer",
    "C# Developer",
    "ASP.NET Core Web API",
    "Payment Gateway Engineer",
    "React 19 Developer",
    "Next.js 16 Developer",
    "Microservices Developer",
    "PostgreSQL",
    "OCI Certified Architect"
  ],
  authors: [{ name: "Biruk Dejene", url: "https://github.com/birukdjn" }],
  creator: "Biruk Dejene",
  publisher: "Biruk Dejene",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://birukdjn.vercel.app",
    siteName: "Biruk Dejene Portfolio",
    title: "Biruk Dejene | Software Engineer & Payment Systems Developer",
    description: "Software Engineer building scalable web applications, enterprise .NET microservices, and secure payment processing engines. Open for international remote roles.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Biruk Dejene - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biruk Dejene | Software Engineer & Payment Gateway Specialist",
    description: "Software Engineer building enterprise .NET backend APIs, React/Next.js frontends, and payment solutions. Available for remote roles.",
    creator: "@birukdjn",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://birukdjn.vercel.app/#person",
      "name": "Biruk Dejene",
      "jobTitle": "Software Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Arifpay Financial Technologies",
        "url": "https://arifpay.net"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Hawassa University",
        "sameAs": "https://www.hu.edu.et"
      },
      "url": "https://birukdjn.vercel.app",
      "sameAs": [
        "https://github.com/birukdjn",
        "https://linkedin.com/in/birukdjn",
        "https://twitter.com/birukdjn"
      ],
      "knowsAbout": [
        "Software Engineering",
        "Payment Gateway Systems",
        ".NET Core / C#",
        "ASP.NET Core Web API",
        "React & Next.js",
        "TypeScript",
        "PostgreSQL & Database Design",
        "MySQL & Relational Database Design",
        "Microservices Architecture",
        "Docker & CI/CD",
        "OWASP & Application Security"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://birukdjn.vercel.app/#website",
      "url": "https://birukdjn.vercel.app",
      "name": "Biruk Dejene - Software Engineer Portfolio",
      "publisher": {
        "@id": "https://birukdjn.vercel.app/#person"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
        <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
          <RootClient>{children}</RootClient>
        </Suspense>
      </body>
    </html>
  );
}
