"use client";

import { motion } from "motion/react";
import { useState } from "react";

const ToastNotification = () => {
  const [visible, setVisible] = useState(false);

  const showToast = () => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={showToast}
        className="mb-4 px-3 py-2 bg-amber-700 text-white rounded"
      >
        Show Notification
      </button>

      {visible && (
        <motion.div
          initial={{ opacity: 0, translateY:-20 }}
          animate={{ opacity: 1, translateY:0 }}
          exit={{ opacity: 0, translateY:-20}}
          transition={{ duration: 0.5 }}
          className="fixed top-4 right-4  bg-green-600 text-white px-4 py-2  shadow rounded"
        >
          Toast Message : Action Successfull
        </motion.div>
      )}
    </div>
  );
};

export default ToastNotification;
