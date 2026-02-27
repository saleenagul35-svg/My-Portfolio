"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Burger Builder App",
      tech: "HTML, CSS, JavaScript (Vanilla JS)",
      description:
        "A dynamic burger customization application built in vanilla JavaScript. Users can add and remove ingredients in real-time with DOM manipulation, updating pricing logic instantly for an interactive user experience.",
      github: "https://github.com/saleenagul35-svg/Burger-Builder.git",
      live: "https://saleenagul35-svg.github.io/Burger-Builder/",
      image: "/pics/Burger Builder.png",
    },
    {
      title: "Project Management Dashboard",
      tech: "HTML, CSS, JavaScript (Vanilla JS)",
      description:
        "A fully interactive task and workflow dashboard developed using pure JavaScript. Features task tracking, dynamic UI updates, and structured component logic for managing projects efficiently.",
      github:
        "https://github.com/saleenagul35-svg/Project-management-dashboard.git",
      live:
        "https://saleenagul35-svg.github.io/Project-management-dashboard/",
      image: "/pics/Dashboard.png",
    },
    {
      title: "Mythical Creature Explorer",
      tech: "HTML, CSS, JavaScript (Vanilla JS)",
      description:
        "An interactive web application that allows users to explore various mythical creatures with dynamic content rendering using pure JavaScript. Built with advanced DOM manipulation, structured data handling, and responsive UI to deliver an engaging browsing experience.",
      github:
        "https://github.com/saleenagul35-svg/Mythical-Creatures-Explorer.git",
      live:
        "https://saleenagul35-svg.github.io/Mythical-Creatures-Explorer/",
      image: "/pics/Mythical Creature Explorer.png",
    },
    {
      title: "React To-Do App",
      tech: "React, Tailwind CSS",
      description:
        "A modern task management application built with React and styled using Tailwind CSS. Implements component-based architecture, dynamic state management, and a clean responsive design.",
      github: "#",
      live: "#",
      image: "/pics/To do list.png",
    },
    {
      title: "Next.js Calculator",
      tech: "Next.js, Tailwind CSS",
      description:
        "A responsive and optimized calculator application built using Next.js. Demonstrates efficient state handling, reusable components, and clean UI design principles.",
      github: "https://github.com/saleenagul35-svg/Calculator.git",
      live: "#",
      image: "/pics/Calculator.png",
    },
    {
      title: "Finance Tracker App",
      tech: "React, Tailwind CSS",
      description:
        "A personal finance tracking application that allows users to manage income and expenses effectively. Focused on clean UI structure, reusable components, and performance optimization.",
      github:
        "https://github.com/saleenagul35-svg/finance-Tracker-App.git",
      live: "#",
      image: "/pics/Finance Tracker.png",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Animated Golden Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[80vw] max-w-[600px] 
                   h-[80vw] max-h-[600px] 
                   bg-yellow-500/10 blur-[140px] rounded-full"
      />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">
          Featured Projects
        </h2>

        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 
                        shadow-[0_0_20px_#facc15]"></div>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          A collection of projects demonstrating my expertise in
          frontend development, UI design, and application architecture.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-gray-900 to-black 
                       border border-yellow-500/20 
                       rounded-2xl overflow-hidden
                       transition duration-500 
                       hover:scale-[1.03] 
                       hover:border-yellow-500
                       hover:shadow-[0_0_45px_rgba(250,204,21,0.35)]"
          >
            {/* Project Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 relative">
              {/* Inner Glow */}
              <div
                className="absolute inset-0 rounded-2xl bg-yellow-500/5 
                           opacity-0 group-hover:opacity-100 
                           transition duration-500 blur-2xl"
              ></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-yellow-500">
                  {project.title}
                </h3>

                <p className="text-sm text-yellow-400 mt-2">
                  {project.tech}
                </p>

                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm border border-yellow-500 
                               rounded-lg hover:bg-yellow-500 
                               hover:text-black transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-yellow-500 
                               text-black rounded-lg 
                               hover:shadow-[0_0_15px_#facc15] transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}