"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import Link from "next/link";
import WorkSliderButton from "@/components/WorkSliderButton";

const Project = [
  {
    num: "01",
    category: "Frontend",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/works/img.jpg",
    live: "https://youtube-loop-omega.vercel.app/",
    github: "https://github.com/hirokr/Nebulae-soft-task1",
  },
  {
    num: "02",
    category: "project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/works/img.jpg",
    live: "https://youtube-loop-omega.vercel.app/",
    github: "https://github.com/hirokr/Nebulae-soft-task1",
  },
  {
    num: "03",
    category: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/works/img.jpg",
    live: "https://youtube-loop-omega.vercel.app/",
    github: "https://github.com/hirokr/Nebulae-soft-task1",
  },
  {
    num: "04",
    category: "project 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/works/img.jpg",
    live: "https://youtube-loop-omega.vercel.app/",
    github: "https://github.com/hirokr/Nebulae-soft-task1",
  },
];

const Work = () => {
  const [project, setProject] = useState(Project[0]);

  const handleSlideChange = (swiper)=>{
    const currentIndex = swiper.activeIndex;
    setProject(Project[currentIndex]);
  } 

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 ,
        transition: { delay: 1.4, duration:0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 '
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <ul>
                <div className='border border-white/20'></div>
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center flex group ">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center flex group ">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className="xh:h-[520px] mb-12"
            onSlideChange={handleSlideChange}>

              {Project.map((project,index)=>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative h-full w-full">
                    <Image 
                      src={project.image} 
                      alt="Github" 
                      fill 
                      className="object-cover"/>
                  </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderButton  containerStyle="flex gap-2 absolute right-0 bottom-[50%] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
              
              btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
