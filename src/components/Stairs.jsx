// "use client";
// import { AnimatePresence, motion } from "farmer-motion";

// const StairAnimation = {
//   initial: {
//     top: "0%",
//   },
//   animate: {
//     top: "100%",
//   },
//   exit: {
//     top: ["100%", "0%"],
//   },
// };

// const reverseIndex = (index) => {
//   const totalSteps = 6;
//   return totalSteps - index - 1;
// };

// const Stairs = () => {
//   return (
//     <>
//       {[
//         ...Array(9).map((_, index) => {
//           return (
//             <motion.div
//               key={index}
//               variants={StairAnimation}
//               initial='initial'
//               animate='animate'
//               exit='exit'
//               transition={{
//                 duration: 0.4,
//                 ease: "easeInOut",
//                 delay: reverseIndex(index) * 0.1,
//               }}
//               className='h-full w-full relative-to bg-white '
//             />
//           );
//         }),
//       ]}
//     </>
//   );
// };

// export default Stairs;