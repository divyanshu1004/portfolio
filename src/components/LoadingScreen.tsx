"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AssetPreloader, AssetToLoad } from "@/utils/assetPreloader";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  assets?: AssetToLoad[];
  minLoadTime?: number;
}

export default function LoadingScreen({
  onLoadingComplete,
  assets = [],
  minLoadTime = 3000,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [startTime] = useState(Date.now());

  const loadingTexts = [
    "INITIALIZING",
    "LOADING ASSETS",
    "PREPARING EXPERIENCE",
    "WELCOME",
  ];

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let assetLoadingComplete = false;
    let simulatedProgress = 0;

    const completeLoading = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setProgress(100);
        setIsComplete(true);
        setTimeout(() => {
          onLoadingComplete();
        }, 800);
      }, remainingTime);
    };

    if (assets.length > 0) {
      // Real asset loading
      const preloader = new AssetPreloader(
        assets,
        (assetProgress) => {
          setProgress(Math.min(95, assetProgress)); // Cap at 95% until minimum time is met
        },
        () => {
          assetLoadingComplete = true;
          if (Date.now() - startTime >= minLoadTime) {
            completeLoading();
          }
        }
      );
      preloader.loadAssets();

      // Check if minimum time has passed
      setTimeout(() => {
        if (assetLoadingComplete) {
          completeLoading();
        }
      }, minLoadTime);
    } else {
      // Simulated loading
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          simulatedProgress = prev + 2;
          if (simulatedProgress >= 100) {
            clearInterval(progressInterval);
            completeLoading();
            return 100;
          }
          return simulatedProgress;
        });
      }, 50);
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [onLoadingComplete, assets, minLoadTime, startTime]);

  useEffect(() => {
    // Change text based on progress
    if (progress < 25) setCurrentText(0);
    else if (progress < 50) setCurrentText(1);
    else if (progress < 80) setCurrentText(2);
    else setCurrentText(3);
  }, [progress]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Background Grid Effect */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center max-w-md w-full px-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h1 className="text-2xl font-bold text-white tracking-wider">
              DIVYANSHU
            </h1>
            <div className="w-12 h-0.5 bg-white mx-auto mt-2" />
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="mb-12 h-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentText}
                className="text-gray-400 text-sm tracking-widest uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {loadingTexts[currentText]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Progress Bar Container */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-full h-0.5 bg-gray-800 rounded-full mb-6 overflow-hidden"
          >
            {/* Progress Bar Fill */}
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-white via-gray-300 to-white rounded-full"
              style={{
                width: `${progress}%`,
              }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />

            {/* Glow Effect */}
            <motion.div
              className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm"
              style={{
                left: `${Math.max(0, progress - 4)}%`,
              }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </motion.div>

          {/* Progress Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white text-xs tracking-wider font-mono"
          >
            {progress.toFixed(0)}%
          </motion.div>
        </div>

        {/* Bottom Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-gray-600 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
