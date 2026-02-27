"use client";
import React from "react"
import { motion } from "framer-motion";
import { Code2, Palette, Layers, Zap } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 size={28} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js"],
    },
    {
      title: "Styling & UI",
      icon: <Palette size={28} />,
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "UI/UX Basics"],
    },
    {
      title: "Core Concepts",
      icon: <Layers size={28} />,
      skills: ["DOM Manipulation", "Component-Based Architecture", "Reusable UI"],
    },
    {
      title: "Performance & Tools",
      icon: <Zap size={28} />,
      skills: ["Web Optimization", "Git & GitHub"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white py-20 px-6 md:px-16 overflow-x-clip relative"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">
          My Skills
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          A blend of modern frontend technologies, UI design principles,
          and performance-focused development skills.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-linear-to-b from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-6 hover:scale-105 hover:border-yellow-500 transition-all duration-300 shadow-lg"
          >
            {/* Icon */}
            <div className="text-yellow-500 mb-4">
              {category.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4">
              {category.title}
            </h3>

            {/* Skills List */}
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}