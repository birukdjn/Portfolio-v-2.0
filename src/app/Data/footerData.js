import { Github, Linkedin, Twitter,Codepen, Mail } from "lucide-react";

// Custom Icons
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
      icon: Github, 
      username: "@birukdjn",
      commits: "1.2k+"
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/birukdjn", 
      icon: Linkedin, 
      username: "@birukdjn",
      connections: "500+"
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/birukdjn", 
      icon: Twitter, 
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
      icon: Codepen, 
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
    { label: "Years Coding", value: currentYear-2022+"+" , branch: "feature/experience" },
    { label: "Technologies", value: "20+", branch: "main" }
  ];

  export {stats, socialLinks, quickLinks}