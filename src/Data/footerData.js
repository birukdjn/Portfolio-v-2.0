import { Mail } from "lucide-react";

// Custom Brand Icons
const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const StackOverflowIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="currentColor">
    <path d="M87 90v21H18V90h-9v30h87V90zM27 111h51V99H27v12zm56-31l2-9-46-10-2 9 46 10zm6-26l4-8-42-20-4 9 42 19zm11-23l6-7-35-30-6 7 35 30zm16-24L91 0l-5 8 25 28 5-9z"/>
  </svg>
);

const DevToIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 40" fill="currentColor">
    <path d="M7.5 0h35A7.5 7.5 0 0 1 50 7.5v25A7.5 7.5 0 0 1 42.5 40h-35A7.5 7.5 0 0 1 0 32.5v-25A7.5 7.5 0 0 1 7.5 0zm9.7 11.5h-5.4v17h5.4c2.7 0 4.8-2.2 4.8-4.8v-7.4c0-2.7-2.1-4.8-4.8-4.8zm1.6 12.4c0 0.9-0.7 1.6-1.6 1.6h-2.2V14.5h2.2c0.9 0 1.6 0.7 1.6 1.6v7.8zm9.5-8.4h-3.8v10.8h3.8c2.9 0 5.2-2.3 5.2-5.2v-0.4c0-2.9-2.3-5.2-5.2-5.2zm0 7.8h-1.2v-4.8h1.2c1.3 0 2.4 1.1 2.4 2.4v0.1c0 1.3-1.1 2.3-2.4 2.3zm12.7-9.8h-6.3v2.8h3.5v2.5h-3.5v2.8h6.3v2.5H34V13.5h7.5v2.5z"/>
  </svg>
);

const LeetCodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
    <path d="M222.3 223.3a12 12 0 0 1-17 0l-92-92a12 12 0 0 1 0-17l92-92a12 12 0 0 1 17 17L144.7 128l77.6 77.6a12 12 0 0 1 0 17zM116 196a12 12 0 0 1-8.5-3.5l-64-64a12 12 0 0 1 0-17l64-64a12 12 0 1 1 17 17L68.5 128l56 56a12 12 0 0 1-8.5 20z"/>
  </svg>
);

const CodePenIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" y1="22" x2="12" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
    <polyline points="2 15.5 12 8.5 22 15.5" />
    <line x1="12" y1="2" x2="12" y2="8.5" />
  </svg>
);

const quickLinks = [
  { name: "Home", href: "#home", branch: "main" },
  { name: "About", href: "#about", branch: "feature/about" },
  { name: "Skills", href: "#skills", branch: "develop" },
  { name: "Projects", href: "#projects", branch: "feature/projects" },
  { name: "Experience", href: "#experience", branch: "main" },
  { name: "Blog", href: "#blogs", branch: "feature/blog" },
  { name: "Contact", href: "#contact", branch: "main" },
  { name: "Certifications", href: "/certifications", branch: "Certifications" }
];

const socialLinks = [
  { 
    name: "GitHub", 
    href: "https://github.com/birukdjn", 
    icon: GithubIcon, 
    username: "@birukdjn",
    commits: "1.2k+"
  },
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/birukdjn", 
    icon: LinkedinIcon, 
    username: "@birukdjn",
    connections: "500+"
  },
  { 
    name: "Twitter", 
    href: "https://twitter.com/birukdjn", 
    icon: TwitterIcon, 
    username: "@birukdjn",
    followers: "2.4k"
  },
  { 
    name: "Stack", 
    href: "https://stackoverflow.com/users/30361757/birukdjn", 
    icon: StackOverflowIcon, 
    username: "@birukdjn",
    followers: "2.4k"
  },
  { 
    name: "Dev.to", 
    href: "https://Dev.to/birukdjn", 
    icon: DevToIcon, 
    username: "@birukdjn",
    followers: "2.4k"
  },
  { 
    name: "LeetCode", 
    href: "https://leetcode.com/birukdjn/", 
    icon: LeetCodeIcon, 
    username: "@birukdjn",
    followers: "2.4k"
  },
  { 
    name: "CodePen", 
    href: "https://codepen.io/birukdjn", 
    icon: CodePenIcon, 
    username: "@birukdjn",
    followers: "2.4k"
  },
  { 
    name: "Email", 
    href: "mailto:birukedjn@gmail.com", 
    icon: Mail, 
    username: "birukedjn@gmail.com",
    status: "active"
  }
];

const currentYear = new Date().getFullYear();

const stats = [
  { label: "Projects Completed", value: "20+", branch: "main" },
  { label: "Code Commits", value: "1.2k+", branch: "develop" },
  { label: "Years Coding", value: currentYear - 2022 + "+", branch: "feature/experience" },
  { label: "Technologies", value: "20+", branch: "main" }
];

export { stats, socialLinks, quickLinks };