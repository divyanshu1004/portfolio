"use client";

import { motion } from "framer-motion";
import CircularGallery from "./CircularGallery";

export default function Projects() {
  // Project data - keeping for future use if needed
  // const projects = [
  //   {
  //     id: 1,
  //     title: "AI-BASED AUTO TAGGING SYSTEM",
  //     description:
  //       "SMART DSA NOTES ORGANIZER USING NLP AND TRIE DATA STRUCTURE. AUTOMATICALLY CATEGORIZES AND TAGS DATA STRUCTURE PROBLEMS WITH 60% EFFICIENCY IMPROVEMENT.",
  //     technologies: ["PYTHON", "NLP", "MACHINE LEARNING"],
  //     github: "https://github.com/divyanshu1004/ai-tagging-system",
  //     live: "#",
  //     image: "/api/placeholder/600/400",
  //   },
  //   {
  //     id: 2,
  //     title: "TALKAI - CONVERSATIONAL AI PLATFORM",
  //     description:
  //       "MODERN CHAT APPLICATION WITH AI INTEGRATION, AUTHENTICATION, AND REAL-TIME MESSAGING. BUILT WITH NEXT.JS, TYPESCRIPT, AND MODERN AUTHENTICATION.",
  //     technologies: ["NEXT.JS", "TYPESCRIPT", "AI INTEGRATION"],
  //     github: "https://github.com/divyanshu1004/talkai",
  //     live: "#",
  //     image: "/api/placeholder/600/400",
  //   },
  //   {
  //     id: 3,
  //     title: "BLOCKCHAIN VOTING SYSTEM",
  //     description:
  //       "DECENTRALIZED VOTING PLATFORM USING ETHEREUM SMART CONTRACTS. ENSURES TRANSPARENCY, SECURITY, AND IMMUTABILITY IN ELECTORAL PROCESSES.",
  //     technologies: ["SOLIDITY", "ETHEREUM", "WEB3"],
  //     github: "https://github.com/divyanshu1004/blockchain-voting",
  //     live: "#",
  //     image: "/api/placeholder/600/400",
  //   },
  //   {
  //     id: 4,
  //     title: "REALTIME COLLABORATION TOOL",
  //     description:
  //       "COLLABORATIVE WORKSPACE WITH REAL-TIME EDITING, VIDEO CALLS, AND PROJECT MANAGEMENT. BUILT FOR REMOTE TEAMS AND DISTRIBUTED WORKFLOWS.",
  //     technologies: ["REACT", "NODE.JS", "SOCKET.IO"],
  //     github: "https://github.com/divyanshu1004/collaboration-tool",
  //     live: "#",
  //     image: "/api/placeholder/600/400",
  //   },
  // ];

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
          <h2 className="text-display text-white mb-8">MY PROJECTS</h2>
        </motion.div>

        {/* Projects Grid */}
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={0}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.12}
          />
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
