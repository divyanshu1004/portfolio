"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PrismaticBurstProps {
  className?: string;
  intensity?: "low" | "medium" | "high";
  colors?: string[];
  particleCount?: number;
}

const PrismaticBurst: React.FC<PrismaticBurstProps> = ({
  className = "",
  intensity = "medium",
  colors = [
    "from-pink-500 to-rose-500",
    "from-purple-500 to-violet-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-yellow-500 to-orange-500",
    "from-indigo-500 to-purple-500",
    "from-red-500 to-pink-500",
    "from-cyan-500 to-blue-500",
  ],
  particleCount = 20,
}) => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      color: string;
      delay: number;
      duration: number;
      rotation: number;
    }>
  >([]);

  const intensityConfig = {
    low: { scale: 0.5, opacity: 0.3, speed: 0.8 },
    medium: { scale: 1, opacity: 0.5, speed: 1 },
    high: { scale: 1.5, opacity: 0.7, speed: 1.2 },
  };

  const config = intensityConfig[intensity];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 200 + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
        rotation: Math.random() * 360,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, [particleCount, colors]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Main prismatic burst container */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-gradient-to-br ${particle.color} blur-xl opacity-20`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * config.scale}px`,
              height: `${particle.size * config.scale}px`,
              transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
              rotate: particle.rotation,
            }}
            animate={{
              scale: [0, 1.2, 0.8, 1],
              opacity: [
                0,
                config.opacity,
                config.opacity * 0.7,
                config.opacity,
              ],
              rotate: [
                particle.rotation,
                particle.rotation + 180,
                particle.rotation + 360,
              ],
              x: [0, Math.sin(particle.id) * 50, 0],
              y: [0, Math.cos(particle.id) * 30, 0],
            }}
            transition={{
              duration: particle.duration * config.speed,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central burst effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
              style={{
                transformOrigin: "0 50%",
                transform: `rotate(${i * 45}deg)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Floating orbs */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className={`absolute w-4 h-4 rounded-full bg-gradient-to-br ${
              colors[i % colors.length]
            } opacity-40 blur-sm`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/5 to-transparent" />
      </div>
    </div>
  );
};

export default PrismaticBurst;
