"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SimpleLoadingScreenProps {
  onComplete: () => void;
  duration?: number;
}

export default function SimpleLoadingScreen({
  onComplete,
  duration = 4000,
}: SimpleLoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 500);
        }, 500);
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Main Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          DIVYANSHU
        </motion.h1>

        {/* Progress Bar */}
        <div className="w-64 h-0.5 bg-gray-800 mx-auto mb-4 overflow-hidden">
          <motion.div
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress Text */}
        <motion.p
          className="text-gray-400 text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
}
