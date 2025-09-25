"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: "biruk@example.com",
    link: "mailto:biruk@example.com"
  },
  {
    icon: "📱",
    title: "Phone",
    value: "+251 9XX XXX XXX",
    link: "tel:+251900000000"
  },
  {
    icon: "📍",
    title: "Location",
    value: "Addis Ababa, Ethiopia",
    link: "#"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Talk
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new opportunities, creative ideas, 
                or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span className="text-2xl">{method.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {method.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Follow me on
              </h4>
              <div className="flex space-x-4">
                {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="bg-white dark:bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                  >
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      {social[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}