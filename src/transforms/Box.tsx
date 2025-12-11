"use client";

import { motion } from "motion/react";

const Box = () => {
  return (
    <motion.div
      className="w-[120px] h-[120px] bg-blue-600 rounded-2xl shadow-lg"
      initial={{ x: -60, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          delay: 0,
          duration: 0.8,
          ease: "easeOut",
        },
      }}
    />
  );
};

export default Box;

