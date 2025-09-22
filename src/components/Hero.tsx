"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const rotatingTexts = [
    "FULL-STACK DEVELOPER",
    "CREATIVE CODER",
    "PROBLEM SOLVER",
    "TECH ENTHUSIAST",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-start pt-24 relative overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-5xl">
          {/* Large name display */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-display text-white mb-6"
          >
            DIVYANSHU
            <br />
            RAWAT
          </motion.h1>

          {/* Rotating text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 h-16 flex items-center"
          >
            <span className="text-gray-400 text-lg mr-4">I&apos;M A</span>
            <div className="overflow-hidden">
              <motion.span
                key={currentText}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-heading text-white block"
              >
                {rotatingTexts[currentText]}
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mb-16"
          >
            <p className="text-body-large text-gray-300 leading-relaxed">
              BASED IN INDIA, FOCUSED ON WEB DEVELOPMENT &
              <br />
              MODERN DIGITAL EXPERIENCES.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden bg-white text-black px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-200"
            >
              <span className="relative z-10">VIEW MY WORK</span>
            </a>
            <a
              href="#contact"
              className="group border border-white text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-white hover:text-black"
            >
              GET IN TOUCH
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-8"
          >
            <a
              href="https://github.com/divyanshu1004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/divyanshu1004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:contact@divyanshu.dev"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
            >
              EMAIL
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <ArrowDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
