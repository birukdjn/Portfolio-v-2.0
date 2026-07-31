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

export const metadata = {
  metadataBase: new URL("https://birukdjn.vercel.app"),
  title: {
    default: "Biruk Dejene | Full-Stack & Payment Gateway Engineer",
    template: "%s | Biruk Dejene",
  },
  description: "Senior Full-Stack Software Engineer specializing in .NET Core, C#, ASP.NET, React 19, Next.js 16, and secure Payment Gateway Integrations. OCI Certified Architect.",
  keywords: [
    "Biruk Dejene",
    "Full Stack Developer",
    "Software Engineer Ethiopia",
    ".NET Developer",
    "React Developer",
    "Payment Gateway Engineer",
    "ASP.NET Core Engineer",
    "Next.js Developer",
    "Remote Software Engineer",
    "Arifpay Software Engineer",
    "Hawassa University Computer Science"
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
    title: "Biruk Dejene | Full-Stack & Payment Gateway Engineer",
    description: "Full-Stack Software Engineer building scalable web applications, .NET microservices, and secure payment processing engines.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Biruk Dejene - Full Stack Engineer Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biruk Dejene | Full-Stack & Payment Gateway Engineer",
    description: "Full-Stack Software Engineer building enterprise .NET backend APIs, React/Next.js frontends, and payment solutions.",
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
      "jobTitle": "Full-Stack Software Engineer",
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
        ".NET Core",
        "C#",
        "Payment Gateway Integration",
        "React",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Oracle Cloud Infrastructure",
        "REST API Architecture"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://birukdjn.vercel.app/#website",
      "url": "https://birukdjn.vercel.app",
      "name": "Biruk Dejene Portfolio",
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
