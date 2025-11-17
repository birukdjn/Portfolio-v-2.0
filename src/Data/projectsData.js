const PROJECTIMAGES = "/projects/"

const projects = [
  {
    title: "Movies Store",
    description: "MoviesStore is a web application with a backend API to manage movies. You can perform CRUD and AUth operations.",
    stars: 42,
    forks: 18,
    watches: 25,
    language: "C#",
    languageColor: "bg-green-500",
    lastCommit: "2 days ago",
    branch: "main",
    status: "active",
    tags: ["REST API", ".NET Web API", "C#","SQL Server" ],
    repoUrl: "https://github.com/birukdjn/moviesApi",
    liveUrl: "https://github.com/birukdjn/MoviesApi/blob/master/README.md",
    images: [
      `${PROJECTIMAGES}MoviesStore.png`,
    ]
  },

   {
    title: "Netflix-Clone",
    description: "netflix clone is a Netflix-like web application built with Next.js using api from moviesApi.",
    stars: 42,
    forks: 18,
    watches: 25,
    language: "js",
    languageColor: "bg-green-500",
    lastCommit: "2 days ago",
    branch: "main",
    status: "active",
    tags: ["Next.js", "React", "Authentication"],
    repoUrl: "https://github.com/birukdjn/netflix-clone",
    liveUrl: "https://github.com/birukdjn/",
    images: [
      `${PROJECTIMAGES}netflix-clone.png`,
        ]
  },

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
      `${PROJECTIMAGES}ai-news-hub1.png`
    ]
  },
  {
    title: "University Cafe Acces Control",
    description: "Smart café access system for universities with secure entry built using Next.js, Django, and PostgreSQL",
    stars: 89,
    forks: 34,
    watches: 67,
    language: "Python",
    languageColor: "bg-green-500",
    lastCommit: "1 week ago",
    branch: "develop",
    status: "feature",
    tags: ["Python", "RestAPI", "Nextjs", "PostgreSQL", "Redis"],
    repoUrl: "https://github.com/birukdjn/University-Cafe-System",
    liveUrl: "https://cafe-system-rt4e.onrender.com/",
    images: [
      `${PROJECTIMAGES}cafe4.png`,
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
  }
  
];

export default projects;