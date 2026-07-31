import { CreditCard, Server, GraduationCap, Code2 } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Arifpay Financial Technologies",
    period: "Oct 2024 - Present",
    location: "Addis Ababa, Ethiopia",
    description:
      "Architecting and maintaining enterprise-grade payment gateway systems, backend microservices, recurring payment engines, and merchant backoffice solutions. Spearheaded RESTful API development with JWT authentication, role-based access control (RBAC), and OWASP security compliance across all services.",
    technologies: [
      ".NET Core / C#",
      "React",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "RESTful APIs",
      "JWT",
      "Payment Gateways",
    ],
    icon: <CreditCard />,
    branch: "main/payment-gateway",
    commits: [
      "Payment Engine API Design",
      "Recurring Billing Engine",
      "Merchant Backoffice Integration",
      "Rate Limiting & Security Headers",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Addis Systems Integration",
    period: "Sep 2024 - Oct 2024",
    location: "Addis Ababa, Ethiopia",
    description:
      "Transitioned from intern to full-time Full Stack Developer, designing and delivering end-to-end web applications and internal tooling. Collaborated with cross-functional teams on relational database schemas, API performance optimization, and automated deployment pipelines.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Tailwind CSS",
    ],
    icon: <Server />,
    branch: "main/enterprise-apps",
    commits: [
      "Full-Stack Feature Development",
      "Database Schema Design",
      "API Integration & Optimization",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Addis Systems Integration",
    period: "Jun 2024 - Sep 2024",
    location: "Addis Ababa, Ethiopia",
    description:
      "Built and refined core UI components, responsive layouts, and API integrations for client-facing software applications. Participated in daily standups, code reviews, and agile sprint cycles.",
    technologies: [
      "JavaScript (ES6+)",
      "React",
      "Tailwind CSS",
      "Git",
      "Figma",
    ],
    icon: <Code2 />,
    branch: "feature/internship-ui",
    commits: [
      "Reusable UI Components",
      "Responsive Layout Implementations",
      "API Consumer Integration",
    ],
  },
  {
    title: "BSc in Computer Science",
    company: "Hawassa University",
    period: "2020 - 2024",
    location: "Hawassa, Ethiopia",
    description:
      "Graduated with Distinction (CGPA 3.51 / 4.00) on July 4, 2024. Mastered core computer science principles: software engineering, data structures, algorithms, object-oriented design, database management systems (SQL / MySQL), computer networks, and operating systems.",
    technologies: [
      "C# / .NET",
      "Java",
      "C++",
      "SQL / MySQL",
      "Data Structures & Algorithms",
      "System Design",
    ],
    icon: <GraduationCap />,
    branch: "academic/computer-science",
    commits: [
      "Graduated with Distinction (CGPA 3.51)",
      "Software Engineering Capstone",
      "Academic Excellence Award",
    ],
  },
];

export default experiences;