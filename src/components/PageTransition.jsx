// "use client";

// // Feature hold
// import { AnimatePresence, motion } from "farmer-motion";
// import { usePathname } from "next/navigation";

// const PageTransition = ({ children }) => {
//   const pathname = usePathname();
//   return (
//     <AnimatePresence>
//       <div key={pathname}>
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{
//             opacity: 0,
//             transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
//           }}
//           classname="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
//         />
//         {children}
//       </div>
//     </AnimatePresence>
//   );
// };

// export default PageTransition;
