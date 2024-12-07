"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
// import { motion } from "farmer-morion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Experienced MERN Stack Developer with 2 years of expertise in building robust and dynamic web applications. Skilled in crafting innovative solutions, I have completed various projects showcasing my proficiency in full-stack development.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Video Editing",
    description: "Professional Video Editor with 2 years of experience, skilled in crafting high-quality content through hands-on expertise in a variety of professional video editing projects",
    href: "/contact",
  },
  {
    num: "03",
    title: "Python Automation",
    description: "Automation Specialist with 3 years of Python expertise/. I excel at streamlining workflows and building dynamic web applications, demonstrated through a diverse portfolio of projects",
    href: "/contact",
  },
  {
    num: "04",
    title: "Data Science",
    description: "Deep Learning enthusiast with 1 year of experience, specializing in training and fine-tuning various models to solve real-world problems effectively",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className=' min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        > */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] ">
          {services.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                  <Link href={item.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl "/>
                  </Link>
                </div>
                <h2 className="test-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
                <p className="text-white/60">{item.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default Services;
