const skills = {
  "Frontend": [
    { name: "React", level: 90, branch: "main", projects: 15, experience: `${new Date().getFullYear() - 2023} years` },
    { name: "Next.js", level: 85, branch: "feature/ssr", projects: 8, experience: `${new Date().getFullYear() - 2024} years` },
    { name: "TypeScript", level: 80, branch: "develop", projects: 10, experience: `${new Date().getFullYear() - 2024} years` },
    { name: "Tailwind CSS", level: 95, branch: "main", projects: 20, experience: `${new Date().getFullYear() - 2023} years` }
  ],
  "Backend": [
    { name: "Django", level: 85, branch: "main", projects: 7, experience: `${new Date().getFullYear() - 2022} years` },
    { name: ".NET", level: 80, branch: "feature/api", projects: 6, experience: `${new Date().getFullYear() - 2024} years` },
    { name: "Java", level: 75, branch: "feature/enterprise", projects: 5, experience: `${new Date().getFullYear() - 2022} years` },
    { name: "C++", level: 70, branch: "feature/system", projects: 4, experience: `${new Date().getFullYear() - 2021} years` }
  ],
  "Database": [
    { name: "PostgreSQL", level: 85, branch: "main", projects: 6, experience: `${new Date().getFullYear() - 2023} years` },
    { name: "MySQL", level: 90, branch: "feature/relational", projects: 9, experience: `${new Date().getFullYear() - 2021} years` },
    { name: "MongoDB", level: 75, branch: "feature/nosql", projects: 6, experience: `${new Date().getFullYear() - 2023} years` },
    { name: "Redis", level: 80, branch: "feature/cache", projects: 5, experience: `${new Date().getFullYear() - 2024} years` }
  ],
  "DevOps & Tools": [
    { name: "Docker", level: 85, branch: "feature/containers", projects: 10, experience: `${new Date().getFullYear() - 2024} years` },
    { name: "Kubernetes", level: 80, branch: "feature/orchestration", projects: 6, experience: `${new Date().getFullYear() - 2024} years` },
    { name: "CI/CD", level: 85, branch: "feature/pipeline", projects: 8, experience: `${new Date().getFullYear() - 2023} years` },
    { name: "Git", level: 90, branch: "main", projects: 50, experience: `${new Date().getFullYear() - 2022} years` }
  ],
  "Cloud & APIs": [
    { name: "REST API", level: 90, branch: "main", projects: 18, experience: `${new Date().getFullYear() - 2023} years` },
    { name: "Azure", level: 80, branch: "feature/cloud", projects: 7, experience: `${new Date().getFullYear() - 2024} years` },
    { name: "WebSocket", level: 75, branch: "feature/realtime", projects: 5, experience: `${new Date().getFullYear() - 2023} years` },
    { name: "Security", level: 80, branch: "feature/security", projects: 6, experience: `${new Date().getFullYear() - 2022} years` }
  ],
  "Fundamentals": [
    { name: "HTML", level: 95, branch: "main", projects: 30, experience: `${new Date().getFullYear() - 2021} years` },
    { name: "CSS", level: 90, branch: "main", projects: 25, experience: `${new Date().getFullYear() - 2021} years` },
    { name: "JavaScript", level: 85, branch: "main", projects: 20, experience: `${new Date().getFullYear() - 2021} years` },
    { name: "Figma", level: 85, branch: "design", projects: 12, experience: `${new Date().getFullYear() - 2021} years` }
  ]
};

export default skills;