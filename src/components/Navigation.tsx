"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GradualBlur from "./GradualBlur";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <GradualBlur
        target="page"
        position="top"
        height="6rem"
        strength={3}
        divCount={15}
        curve="bezier"
        exponential={true}
        opacity={1}
      />

      {/* Fixed navigation overlay */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 right-4 z-[9999]"
      >
        {/* High-contrast glassmorphism navigation bar */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Strong glassmorphism background */}
          <div className="absolute inset-0 rounded-full backdrop-blur-50xl bg-black/0 shadow-2xl" />

          {/* Navigation Links */}
          <div className="relative flex items-center gap-6 px-8 py-4">
            <motion.a
              href="#about"
              className="text-white font-semibold text-sm tracking-wider uppercase relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 drop-shadow-lg">About</span>
              <motion.div
                className="absolute inset-0 rounded-lg bg-white/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>

            <div className="w-px h-6 bg-white/30" />

            <motion.a
              href="mailto:vedi05962@gmail.com"
              className="text-white font-semibold text-sm tracking-wider uppercase relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 drop-shadow-lg">Contact</span>
              <motion.div
                className="absolute inset-0 rounded-lg bg-white/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
