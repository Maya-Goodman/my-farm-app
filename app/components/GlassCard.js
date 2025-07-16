"use client";

import { motion } from "framer-motion";

export default function GlassCard({ children, className, ...props }) {
  const glassEffectStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  };

  return (
    <motion.div
      className={`rounded-xl p-6 shadow-lg ${className}`}
      style={glassEffectStyle}
      whileHover={{ scale: 1.02, boxShadow: "0 8px 60px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
