"use client"
import React from 'react'
import { Socials } from "@/constants";
import Image from 'next/image';
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
function Aboutme() {
  return (
    <motion.div 
    initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
    className='w-full h-full relative overflow-hidden isolate my-0 z-[20]' id='about-me'>
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(1)}
        className='flex flex-col items-center justify-center px-9 lg:px-64  md:px-32 relative'>
            <h1 className='text-[40px]  text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>About Me</h1>
            <p className='text-lg text-gray-200 text-center'>I specialize in crafting top-notch digital products, features, and websites that cater to diverse business 
            needs. With a robust portfolio showcasing my work and expertise, I excel in translating ideas into functional and visually captivating
             realities. Whether its developing a full-fledged website, creating innovative features, or building an entire product, my experience 
             spans various industries and technologies. From responsive designs to seamless user experiences, my focus is on delivering high-quality
             solutions tailored to meet unique project requirements. If you are seeking a reliable and skilled developer to bring your vision to life,
             I am here to turn your concepts into remarkable digital experiences. Feel free to explore my portfolio and reach out to discuss your
              project needs further.</p>
           <div className='flex gap-3 p-4 my-4 text-gray-200 text-[24px]'>
           <a href="https://www.linkedin.com/in/tajul-afreen"><FaLinkedin /></a>
          <a href="https://www.github.com/tajulafreen"><FaGithub /></a>
          <a href="https://discord.gg/2gUVQxZ4"><FaDiscord /></a>
           <a href="https://www.twitter.com/tajulafreen"><FaTwitter /></a>
           </div>
           <motion.button 
           variants={slideInFromLeft(1)}
           className='h-[40px]  w-[200px] button-primary text-center text-white cursor-pointer rounded-xl '>Get My Resume</motion.button>
        </motion.div>
    </motion.div>
  )
}

export default Aboutme