"use client";

import { usePathname } from "next/navigation";
import Stairs from "./Stairs";
import { AnimatePresence, motion } from "framer-motion";



const StairTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode='wait'>
        <div key={pathname}>
          <div className='h-screen w-screen fixed top-0 left-0 pointer-events-none z-40 flex'>
            <Stairs />
          </div>
          <motion.div
            className='top-0 left-0 w-screen h-screen fixed pointer-events-none bg-primary'
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {
                delay: 1,
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
