"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../styles/scrollbarstyles.css'
interface PopwindowProps {
  project: {
    name: string;
    description: string[];
    image: string;
    technologies: string[];
    live: string;
    source: string;
  } | null;
  onClosePopUp: () => void;
}

const Popwindow = ({ project, onClosePopUp }: PopwindowProps) => {
  if (!project) return null;

  return (
    <motion.div 
    initial='hidden'
    animate='visible'
    className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center overflow-hidden z-[30]'
    >
      <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[80%] mt-[2%] lg:w-[50%]
      w-[80%] bg-black overflow-auto rounded-xl border-[4px] border-[#2A0E61] p-8 flex flex-col gap-4'>
        <button
          onClick={onClosePopUp}
          className='absolute top-2 right-4 text-xl button-primary text-gray-50   h-7 w-7 '
        >
          X
        </button>
        <Image
          src={project.image}
          alt={project.name}
          width={500}
          height={500}
          className='w-full h-[60%] '
        />
        <h2 className='text-gray-200 text-start text-2xl '>{project.name}</h2>
        <ul className='text-gray-200 flex gap-4 flex-wrap '>
          {project.technologies.map((tech, index) => (
            <li key={index} className='border border-[#2A0E61] p-[3px] '><button className='text-[12px]' >{tech}</button></li>
          ))}
        </ul>
        <ul className='flex flex-col text-gray-200'>
          {project.description.map((desc, index) => (
            <li key={index} className='text-[16px]'>{desc}</li>
          ))}
        </ul>
        <div className='flex flex-row gap-[3%] justify-end '>
        <button type='button' className='button-primary text-gray-200 p-3 w-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-2xl border border-[#2A0E61]'><a href={project.live} target="_blank">Live</a></button>
        <button type='button' className='button-primary text-gray-200 p-3 w-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-2xl border border-[#2A0E61]'><a href={project.source} target="_blank">Source</a></button>
      </div>
      </motion.div>
    </motion.div>
  );
};

export default Popwindow;