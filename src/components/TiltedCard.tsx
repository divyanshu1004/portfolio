"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  perspective?: number;
  scale?: number;
  rotateOnHover?: boolean;
  glowEffect?: boolean;
}

const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = "",
  tiltIntensity = 15,
  perspective = 1000,
  scale = 1.05,
  rotateOnHover = true,
  glowEffect = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring configuration for smooth animations
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  // Transform mouse position to rotation values
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [tiltIntensity, -tiltIntensity]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-tiltIntensity, tiltIntensity]
  );

  // Always create these transforms even if not used
  const glowOpacity = useTransform(mouseXSpring, [-0.5, 0, 0.5], [0, 0.5, 0]);
  const glowBoxShadow = useTransform(
    [mouseXSpring, mouseYSpring],
    (latest: number[]) => {
      const [x, y] = latest;
      const intensity = Math.sqrt(x * x + y * y);
      return `0 0 ${intensity * 20}px rgba(99, 102, 241, ${intensity * 0.3})`;
    }
  );

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative transform-gpu ${className}`}
      style={{
        perspective: perspective,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: scale }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX: rotateOnHover ? rotateX : 0,
          rotateY: rotateOnHover ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow effect */}
        {glowEffect && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
            style={{
              transform: "translateZ(-1px)",
              opacity: glowOpacity,
            }}
          />
        )}

        {/* Main card content */}
        <div className="relative z-10 w-full h-full">{children}</div>

        {/* Shine effect overlay */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 pointer-events-none"
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring],
              (latest: number[]) => {
                const [x, y] = latest;
                return `linear-gradient(${
                  Math.atan2(y, x) * (180 / Math.PI) + 90
                }deg, 
                rgba(255,255,255,0.1) 0%, 
                rgba(255,255,255,0.05) 50%, 
                transparent 100%)`;
              }
            ),
            opacity: useTransform(
              [mouseXSpring, mouseYSpring],
              (latest: number[]) => {
                const [x, y] = latest;
                return Math.min(Math.sqrt(x * x + y * y) * 2, 0.3);
              }
            ),
          }}
        />

        {/* Border glow */}
        {glowEffect && (
          <motion.div
            className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none"
            style={{
              boxShadow: glowBoxShadow,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default TiltedCard;
