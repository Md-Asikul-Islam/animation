import * as motion from "motion/react-client";

const BouncingCircle = () => {
  return (
    <motion.div
      className="bg-red-500 rounded-full w-[200px] h-[200px] "
      animate={{ y: [0, -70, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    ></motion.div>
  );
};

export default BouncingCircle;
