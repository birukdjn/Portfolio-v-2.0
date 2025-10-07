const PROJECTIMAGES = "/projects/"

const projects = [
  {
    title: "AI News Hub",
    description: "Smart AI-powered platform that curates and summarizes global news in real time.",
    stars: 42,
    forks: 18,
    watches: 25,
    language: "JavaScript",
    languageColor: "bg-yellow-500",
    lastCommit: "2 days ago",
    branch: "main",
    status: "active",
    tags: ["Next.js", "Tailwind", "OpenAI", "Vercel","Redis" ],
    repoUrl: "https://github.com/birukdjn/ai-news-hub",
    liveUrl: "https://ai-news-hub-livid.vercel.app",
    images: [
      `${PROJECTIMAGES}ai-news-hub1.png`,
      `${PROJECTIMAGES}ai-news-hub4.png`,
      `${PROJECTIMAGES}ai-news-hub2.png`
    ]
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation platform with real-time collaboration",
    stars: 89,
    forks: 34,
    watches: 67,
    language: "Python",
    languageColor: "bg-green-500",
    lastCommit: "1 week ago",
    branch: "develop",
    status: "feature",
    tags: ["Python", "FastAPI", "React", "OpenAI", "Docker"],
    repoUrl: "https://github.com/birukdjn/ai-content-generator",
    liveUrl: "https://ai-demo.biruk.com",
    images: [
      "https://placehold.co/600x400/1e293b/6ee7b7?text=Editor",
      "https://placehold.co/600x400/1e293b/a7f3d0?text=History",
      "https://placehold.co/600x400/1e293b/34d399?text=Settings"
    ]
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS specifically designed for developer portfolios",
    stars: 156,
    forks: 72,
    watches: 89,
    language: "JavaScript",
    languageColor: "bg-yellow-500",
    lastCommit: "3 days ago",
    branch: "main",
    status: "stable",
    tags: ["Next.js", "MongoDB", "GraphQL", "Tailwind", "Vercel"],
    repoUrl: "https://github.com/birukdjn/portfolio-cms",
    liveUrl: "https://cms-demo.biruk.com",
    images: [
      "https://placehold.co/600x400/1e293b/fde047?text=Dashboard",
      "https://placehold.co/600x400/1e293b/facc15?text=Content+Editor",
      "https://placehold.co/600x400/1e293b/eab308?text=API+Explorer"
    ]
  },
  {
    title: "Task Management API",
    description: "RESTful API for task management with real-time updates",
    stars: 31,
    forks: 12,
    watches: 19,
    language: "Go",
    languageColor: "bg-cyan-500",
    lastCommit: "5 hours ago",
    branch: "feature/auth",
    status: "active",
    tags: ["Go", "Redis", "WebSocket", "JWT", "Docker"],
    repoUrl: "https://github.com/birukdjn/task-management-api",
    liveUrl: "https://api-docs.biruk.com",
    images: [
      "https://placehold.co/600x400/1e293b/67e8f9?text=API+Endpoints",
      "https://placehold.co/600x400/1e293b/a5f3fc?text=Swagger+UI",
      "https://placehold.co/600x400/1e293b/22d3ee?text=Real-time+Logs"
    ]
  },
  {
    title: "Data Visualization Dashboard",
    description: "Real-time data visualization dashboard for analytics",
    stars: 67,
    forks: 28,
    watches: 45,
    language: "TypeScript",
    languageColor: "bg-blue-500",
    lastCommit: "1 day ago",
    branch: "main",
    status: "stable",
    tags: ["D3.js", "React", "Express", "MongoDB", "WebSocket"],
    repoUrl: "https://github.com/birukdjn/data-viz-dashboard",
    liveUrl: "https://dashboard.biruk.com",
    images: [
      "https://placehold.co/600x400/1e293b/93c5fd?text=Main+Chart",
      "https://placehold.co/600x400/1e293b/a5b4fc?text=Live+Data",
      "https://placehold.co/600x400/1e293b/818cf8?text=Filters"
    ]
  },
  {
    title: "Mobile Learning App",
    description: "Cross-platform mobile application for online learning",
    stars: 124,
    forks: 56,
    watches: 78,
    language: "Dart",
    languageColor: "bg-teal-500",
    lastCommit: "2 weeks ago",
    branch: "release/v1.2",
    status: "release",
    tags: ["Flutter", "Firebase", "GetX", "Stripe", "AWS"],
    repoUrl: "https://github.com/birukdjn/mobile-learning-app",
    liveUrl: "https://learn-demo.biruk.com",
    images: [
      "https://placehold.co/600x400/1e293b/5eead4?text=Course+List",
      "https://placehold.co/600x400/1e293b/99f6e4?text=Video+Player",
      "https://placehold.co/600x400/1e293b/2dd4bf?text=Profile"
    ]
  }
];

export default projects;