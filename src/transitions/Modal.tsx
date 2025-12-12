"use client";

import {  useState } from "react";
import {motion } from "motion/react";
const Modal = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="flex flex-col items-center ">
        <button 
        onClick={() =>setIsOpen(!isOpen)}
        className="mb-4 px-4 py-2 bg-teal-900 text-white rounded ">
            Toggle
        </button>
        {isOpen &&(
            <motion.div 
            onClick={() => setIsOpen(!isOpen)}
            className="fixed inset-0 bg-black/50 flex justify-center items-center">
               <motion.div
               onClick={(e) => e.stopPropagation()}
               initial={{y:"-100vh", opacity:0}}
               animate={{y:"0vh", opacity: 1}}
               exit={{y:"100vh"}}
               transition={{duration : 0.8}}
               className="bg-white p-4 rounded "
               >
                 <h2 className="text-lg font-bold "> Modal Title </h2>
                 <p className=""> This is paragraph </p>
                 <button
                 onClick={() => setIsOpen(!isOpen)}
                 className="mb-4 px-4 py-2 bg-red-600 text-white rounded "
                 >Close </button>
               </motion.div>
            </motion.div>
        )}
    </div>
  )
}

export default Modal