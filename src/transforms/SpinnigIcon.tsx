import * as motion  from "motion/react-client";
import img from "@/assests/b-7.jpg";

const SpinningIcon = () => {
  return (
    <motion.img
      src={img.src} // Next Image static import gives .src path
      alt="Spinning icon"
      className="w-100 h-100 object-cover rounded-xl shadow-md"
      animate={{ rotate: 360 }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default SpinningIcon;
