"use client";

import { useEffect, useState, useCallback } from "react";
import {motion, AnimatePresence } from "motion/react";
const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 32,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 28,
    },
  },
};

const overlayVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close with ESC key
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 mb-4 bg-teal-600 text-white rounded-md shadow hover:bg-teal-700 transition"
      >
        Toggle Sidebar
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP / OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.aside
              className="fixed top-0 left-0 h-full w-72 bg-gray-800 text-white p-6 shadow-xl z-50"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Sidebar</h2>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-300 leading-relaxed">My personal content goes here.</p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
