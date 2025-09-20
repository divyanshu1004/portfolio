"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Server, Zap } from "lucide-react";

export default function About() {
  const skills = [
    {
      name: "FRONTEND",
      icon: Globe,
      description: "REACT, NEXT.JS, TYPESCRIPT",
    },
    { name: "BACKEND", icon: Server, description: "NODE.JS, EXPRESS, PYTHON" },
    {
      name: "DATABASE",
      icon: Database,
      description: "MONGODB, POSTGRESQL, MYSQL",
    },
    { name: "MOBILE", icon: Smartphone, description: "REACT NATIVE, FLUTTER" },
    { name: "BLOCKCHAIN", icon: Code, description: "SOLIDITY, WEB3, ETHEREUM" },
    { name: "AI/ML", icon: Zap, description: "TENSORFLOW, PYTORCH, NLP" },
  ];

  return (
    <section id="about" className="min-h-screen bg-black py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* About Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 max-w-4xl"
        >
          <motion.h2
            className="text-display text-white mb-12"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            I LOVE DESIGN & MOTION
          </motion.h2>

          <motion.h3
            className="text-heading text-white mb-12"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            AND BRING IDEAS TO LIFE WITH CODE
          </motion.h3>

          <motion.div
            className="space-y-8"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-body-large text-gray-300 leading-relaxed">
              I&apos;M A DIGITAL DEVELOPER BASED IN INDIA, FOCUSED ON WEB
              EXPERIENCE & MODERN TECHNOLOGIES.
            </p>
            <p className="text-body-large text-gray-300 leading-relaxed">
              PASSIONATE ABOUT BUILDING INNOVATIVE SOLUTIONS WITH MODERN
              TECHNOLOGIES AND EXPLORING THE DECENTRALIZED WEB. CURRENTLY
              WORKING ON AI-POWERED APPLICATIONS AND BLOCKCHAIN PROJECTS.
            </p>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h3
            className="text-subheading text-white mb-16"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            WHAT I&apos;VE BEEN CRAFTING ALONG THE WAY
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, _index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: _index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="border border-gray-800 p-8 hover:border-gray-600 transition-all duration-300 cursor-pointer"
                  whileHover={{
                    x: 10,
                    backgroundColor: "rgba(255,255,255,0.02)",
                  }}
                >
                  <skill.icon className="w-8 h-8 text-gray-400 mb-6 group-hover:text-white transition-colors duration-300" />
                  <h4 className="text-xl font-semibold text-white mb-3 tracking-wider">
                    {skill.name}
                  </h4>
                  <p className="text-gray-400 text-sm tracking-wide group-hover:text-gray-300 transition-colors duration-300">
                    {skill.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {[
            { number: "20+", label: "PROJECTS COMPLETED" },
            { number: "2+", label: "YEARS OF EXPERIENCE" },
            { number: "10+", label: "TECHNOLOGIES MASTERED" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-6xl font-bold text-white mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm tracking-wider uppercase group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
