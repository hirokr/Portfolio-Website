"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
require('dotenv').config();

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 1780141196",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "work.hrr25@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Dit Project, Merul Badda, Dhaka, Bangladesh",
  },
];

const Contact = () => {
  const templateID = process.env.templateID;
  const serviceId = process.env.serviceId;
  const PUBLIC_KEY = process.env.PUBLIC_KEY;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS service
    const { firstName, lastName, email, phone, service, message } = formData;

    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
    };
    
    // console.log(process.env.PUBLIC_KEY,templateID)
    try {
      emailjs.init(process.env.PUBLIC_KEY)
      emailjs.send(
        serviceId, // Replace with your service ID
        templateID, // Replace with your template ID
        templateParams,
        PUBLIC_KEY// Replace with your user ID
      );
      // console.log("Email sent successfully", result.text);
      alert("Message sent successfully!");
    } catch (error) {
      // console.error("Error sending email:", error);
      alert("This Feature is currently unavailable");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form
              className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
              onSubmit={handleSubmit}
            >
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>
                Want to create something and solve a problem. <br />
                You came into the right place
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  name='firstName'
                  type='text'
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder='FirstName'
                />
                <Input
                  name='lastName'
                  type='text'
                  placeholder='LastName'
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  name='email'
                  type='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name='phone'
                  type='phone'
                  placeholder='Phone'
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select
                onValueChange={(value) => {
                  setFormData((prev) => ({
                    ...prev,
                    service: value,
                  }));
                }}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent className='w-full'>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='Web Development'>
                      Web Development
                    </SelectItem>
                    <SelectItem value='AI Apps'>AI Apps</SelectItem>
                    <SelectItem value='Video Editing'>Video Editing</SelectItem>
                    <SelectItem value='Python Automation'>
                      {" "}
                      Python Automation
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name='message'
                className='h-[200px]'
                placeholder='Type your message here'
                value={formData.message}
                onChange={handleChange}
              />
              <Button size='md' type='submit' className='max-w-40'>
                Send Message
              </Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-6'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
