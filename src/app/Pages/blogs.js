"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const blogs = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn how to structure your React apps for scalability and maintainability",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "React"
  },
  {
    title: "Introduction to Next.js 14",
    excerpt: "Exploring the new features and improvements in Next.js 14",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Next.js"
  },
  {
    title: "AI Integration in Web Apps",
    excerpt: "How to integrate AI capabilities into your web applications",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "AI"
  }
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest <span className="text-indigo-600">Blogs</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing knowledge and insights about web development and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Blog Image */}
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <time>{blog.date}</time>
                  <span>{blog.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center space-x-2 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>View All Blogs</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}