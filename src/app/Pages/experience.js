"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Developed and maintained web applications using React, Node.js, and MongoDB. Led a team of 3 developers on key projects.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
    description: "Created responsive websites and web applications for various clients. Collaborated with designers to implement UI/UX designs.",
    technologies: ["JavaScript", "Vue.js", "CSS3", "Git"]
  },
  {
    title: "Junior Developer",
    company: "Startup XYZ",
    period: "2020 - 2021",
    description: "Started my career building small applications and learning modern web development practices.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-indigo-600">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My journey through the world of software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-indigo-200 dark:bg-indigo-900/50"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full z-10"></div>
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}