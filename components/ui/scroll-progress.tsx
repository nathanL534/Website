"use client";

import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.0001,
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-sky-500 to-cyan-400 transform-gpu z-50 ${className}`}
      style={{
        scaleX,
        transformOrigin: "0%",
      }}
    />
  );
}
