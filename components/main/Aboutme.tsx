"use client"
import React from 'react'
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
            <p className='text-lg text-gray-200 text-center'>As a digital product developer, I specialize in creating exceptional websites, features, and products that meet the diverse needs of businesses. With a strong portfolio that showcases my skills and expertise, I excel at turning ideas into visually appealing and functional realities. My experience spans various industries and technologies, allowing me to develop full-fledged websites, innovative features, and entire products. I focus on delivering high-quality solutions that are tailored to meet unique project requirements, including responsive designs and seamless user experiences. If you&apos;re looking for a reliable and skilled developer to bring your vision to life, I&apos;m here to help you turn your concepts into remarkable digital experiences. Please feel free to explore my portfolio and get in touch to discuss your project needs further.</p>
           <div className='flex gap-3 p-4 my-4 text-gray-200 text-[24px]'>
           <a href="https://www.linkedin.com/in/tajul-afreen" target="_blank" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'><FaLinkedin /></a>
          <a href="https://www.github.com/tajulafreen" target="_blank" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'><FaGithub /></a>
          <a href="https://discord.gg/4ffR2vaHAG" target="_blank" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'><FaDiscord /></a>
           <a href="https://www.twitter.com/tajulafreen" target="_blank" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'><FaTwitter /></a>
           </div>
           <button 
           className='h-[40px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[200px] button-primary text-center text-white cursor-pointer rounded-xl '>
            <a href="\Resume.pdf" download="Resume">Get My Resume </a></button>
        </motion.div>
    </motion.div>
  )
}

export default Aboutme