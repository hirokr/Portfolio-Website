"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// import { motion } from "farmer-motion";

const about = {
  title: "About me",
  Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  info: [
    { fieldName: "Name", fieldValue: "Hirok Roy Rahul" },
    { fieldName: "Phone", fieldValue: "(+880) 178 014 1196" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "LinkedIn", fieldValue: "hirokr" },
    { fieldName: "Email", fieldValue: "work.hrr25@gmail.com" },
    { fieldName: "Freelancer", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Bangla, Hindi" },
  ],
};

const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "My experiences",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      company: "Nebulae-Soft",
      position: "Web Developer Intern",
      duration: "November,2024 - Present",

      company: "YSSE",
      position: "video Editor Intern",
      duration: "December,2023 - March,2024",

      company: "GAO TEK",
      position: "IT Support Intern",
      duration: "September,2023 - November,2024",

      company: "BRACU DUBURI",
      position: "Junior Machine Vision Engineer  ",
      duration: "September,2023 - November,2024",
    },
  ],
};

const Education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      institution: "BRACU",
      degree: "B.Sc. in computer science and engineering",
      duration: "2022-2026",

      institution: "COURSERA",
      degree: "Python For Everybody",
      duration: "2022-2026",

      institution: "COURSERA",
      degree: "Machine Learning For Beginners",
      duration: "2022-2026",

      institution: "HackerRank",
      degree: "Python Basics",
      duration: "2022-2026",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
  ],
};

const Resume = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1, transition: { delay: 0.4, ease: "easeIn" } }}
    //   className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    // >
    <div className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">experience</TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
    // </motion.div>
  );
};

export default Resume;
