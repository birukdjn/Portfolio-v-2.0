import { FolderGit2 , GraduationCap, MonitorSmartphone, BookKey } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Addis Systems Integration",
    period: "Sep 2025 - Present",
    location: "Addis Ababa, Ethiopia",
    description: "Developing and maintaining full-stack web applications. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    icon: <FolderGit2 />,
    branch: "main",
    commits: ["Full-Stack Development", "API Design", "Database Management"]
  },
  {
    title: "Frontend Developer Intern",
    company: "Addis Systems Integration",
    period: "Jun 2025 - Sep 2025",
    location: "Addis Ababa, Ethiopia",
    description: "Gained hands-on experience in frontend development, contributing to user interface components and collaborating with the development team on real-world projects.",
    technologies: ["JavaScript", "React", "CSS3", "Git", "Figma"],
    icon: <MonitorSmartphone />,
    branch: "feature/internship-tasks",
    commits: ["UI Components", "Code Review", "Collaboration"]
  },
  {
    title: "Self-Study & Project Work",
    company: "Personal Development",
    period: "Jul 2024 - Jun 2025",
    location: "Remote",
    description: "Dedicated a year to intensive self-learning, focusing on full-stack development, modern frameworks, and building a portfolio of personal projects.",
    technologies: ["Next.js", "TypeScript", "Python", "Express", "PostgreSQL"],
    icon: <BookKey />,
    branch: "develop",
    commits: ["Project Scaffolding", "Feature Implementation", "Continuous Learning"]
  },
  {
    title: "BSc in Computer Science",
    company: "Hawassa University",
    period: "2020 - 2024",
    location: "Hawassa, Ethiopia",
    description: "Graduated on July 4, 2024, with a CGPA of 3.51. Acquired a strong foundation in computer science principles, algorithms, and software development.",
    technologies: ["Java", "C++", "Data Structures", "Algorithms", "SQL"],
    icon: <GraduationCap />,
    branch: "education",
    commits: ["Final Year Project", "Coursework", "Academic Excellence"]
  },
];

export default experiences; 