import { useState } from "react";
import { motion } from "framer-motion";
import ProjectsData from './listOfProject'


export default function Projects() {
  


  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="px-4 py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {ProjectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: false }}
            className="bg-blue-50 p-4 shadow rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-48 object-cover"
            />

            {/* Title & Description */}
            <h3 className="mt-4 font-semibold text-lg">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-3">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-900 text-sm"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
