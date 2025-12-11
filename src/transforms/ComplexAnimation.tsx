import * as motion  from "motion/react-client";

const ComplexAnimation = () => {
  return (
    <motion.div
    className="bg-purple-600 w-50 h-50 rounded-lg "
    initial={{x:0, opacity:0}}
    animate={{x:200, opacity:1, rotate:360, scale:1.2}}
    transition={{duration:1.5, }}
    >

    </motion.div>
  )
}

export default ComplexAnimation