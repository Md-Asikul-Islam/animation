"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Fade() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setVisible((v) => !v)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition"
      >
        Toggle Fade
      </button>

      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key="fade-box"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="p-4 bg-gray-300 rounded-lg shadow"
          >
            This is a fading component
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
