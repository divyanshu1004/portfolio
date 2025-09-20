"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI-BASED AUTO TAGGING SYSTEM",
      description:
        "SMART DSA NOTES ORGANIZER USING NLP AND TRIE DATA STRUCTURE. AUTOMATICALLY CATEGORIZES AND TAGS DATA STRUCTURE PROBLEMS WITH 60% EFFICIENCY IMPROVEMENT.",
      technologies: ["PYTHON", "NLP", "MACHINE LEARNING"],
      github: "https://github.com/divyanshu1004/ai-tagging-system",
      live: "#",
      image: "/api/placeholder/600/400",
    },
    {
      id: 2,
      title: "TALKAI - CONVERSATIONAL AI PLATFORM",
      description:
        "MODERN CHAT APPLICATION WITH AI INTEGRATION, AUTHENTICATION, AND REAL-TIME MESSAGING. BUILT WITH NEXT.JS, TYPESCRIPT, AND MODERN AUTHENTICATION.",
      technologies: ["NEXT.JS", "TYPESCRIPT", "AI INTEGRATION"],
      github: "https://github.com/divyanshu1004/talkai",
      live: "#",
      image: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "BLOCKCHAIN VOTING SYSTEM",
      description:
        "DECENTRALIZED VOTING PLATFORM USING ETHEREUM SMART CONTRACTS. ENSURES TRANSPARENCY, SECURITY, AND IMMUTABILITY IN ELECTORAL PROCESSES.",
      technologies: ["SOLIDITY", "ETHEREUM", "WEB3"],
      github: "https://github.com/divyanshu1004/blockchain-voting",
      live: "#",
      image: "/api/placeholder/600/400",
    },
    {
      id: 4,
      title: "REALTIME COLLABORATION TOOL",
      description:
        "COLLABORATIVE WORKSPACE WITH REAL-TIME EDITING, VIDEO CALLS, AND PROJECT MANAGEMENT. BUILT FOR REMOTE TEAMS AND DISTRIBUTED WORKFLOWS.",
      technologies: ["REACT", "NODE.JS", "SOCKET.IO"],
      github: "https://github.com/divyanshu1004/collaboration-tool",
      live: "#",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-black py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-display text-white mb-8">
            HERE'S SOME OF MY PROJECTS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Project Info */}
                <div
                  className={`order-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <motion.h3
                    className="text-heading text-white mb-6"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-body-large text-gray-300 leading-relaxed mb-8"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 border border-gray-600 text-gray-300 text-sm tracking-wider uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="w-4 h-4" />
                      GITHUB
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      LIVE DEMO
                    </motion.a>
                  </div>
                </div>

                {/* Project Image */}
                <div
                  className={`order-1 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <motion.div
                    className="relative group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="aspect-video bg-gray-900 border border-gray-800 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <span className="text-gray-600 text-lg">
                          PROJECT IMAGE
                        </span>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-6 h-6" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Separator Line */}
              {index < projects.length - 1 && (
                <div className="mt-32 w-full h-px bg-gray-800" />
              )}
            </motion.div>
          ))}
        </div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <motion.a
            href="https://github.com/divyanshu1004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-white hover:text-black tracking-wider uppercase"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL PROJECTS
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
