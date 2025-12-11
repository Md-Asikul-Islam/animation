"use client";
import { motion } from "motion/react";
import { useState } from "react";
const SkewRectangle = () => {
  const [isSkewed, setSkewed] = useState(true);
  return (
    <motion.div
      className="bg-yellow-600 w-40 h-20"
      onClick={() => setSkewed(!isSkewed)}
      animate={{ skewX: isSkewed ? 20 : 0 }}
      transition={{ duration: 0.8 }}
    ></motion.div>
  );
};

export default SkewRectangle;
