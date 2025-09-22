'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <p className="text-gray-400 text-sm tracking-wider uppercase">
              DESIGN & DEV BY DIVYANSHU RAWAT
            </p>
          </motion.div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase flex items-center gap-2"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            BACK TO TOP
            <svg 
              className="w-4 h-4 transform rotate-180" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}