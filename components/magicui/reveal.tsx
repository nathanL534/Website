"use client";

import { motion, useInView } from "framer-motion"; // <-- plain hyphen
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  amount?: number;
};

export function Reveal({ children, delay = 0.1, amount = 0.3 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
