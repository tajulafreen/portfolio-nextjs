"use client"
import { useState } from 'react';
import { FaBars, FaTimes, FaTwitter } from 'react-icons/fa';
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDiscord} from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-[90%] h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.jpeg"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin rounded-[50%]"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Full-Stack Dev
          </span>
        </a>

        <div className=" md:flex  hidden w-[90%] h-auto border border-[#7042f861] bg-[#0300145e]  md:px-[20px] md:py-[10px] md:rounded-full text-gray-200 ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-5">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#projects" className="cursor-pointer">
              Get My Resume
            </a>
          </div>
        </div>

        <div className="hidden md:flex md:flex-row md:justify-between  md:gap-5 md:text-gray-200 md:text-[24px]">
        <a href="https://www.linkedin.com/in/tajul-afreen"><FaLinkedin /></a>
          <a href="https://www.github.com/tajulafreen"><FaGithub /></a>
          <a href="https://discord.gg/2gUVQxZ4"><FaDiscord /></a>
           <a href="https://www.twitter.com/tajulafreen"><FaTwitter /></a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden mt-[-25px]">
          <button type="button" onClick={toggleMenu} className="text-gray-200 focus:outline-none absolute text-right ">
            {isMenuOpen ? <FaTimes className="close w-9 h-9 p-1 " /> : <FaBars className="open w-9 h-9 p-1" />}
          </button>
        </div>

        {/* Responsive Menu */}
        {isMenuOpen && (
          <div
          className="w-full absolute top-[65px] left-0 bg-[#000000ec] items-center justify-center border border-[#7042f861] rounded-b-lg py-2 px-4 h-screen p-[10%]">
            <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center bg-[#2b1537ec] shadow-2xl text-fuchsia-900  h-[80%] w-[80%] border border-[gray-200] rounded-3xl p-[10%] gap-9 m-[10%]">
            
            <li className='bg-gray-100  h-[50px] items-center w-[50%] text-center p-[15px] border border-[fuchsia-900] rounded-3xl'><Link href="#about-me" className="cursor-pointer" onClick={handleClick}>About me</Link></li>
            <li className='bg-gray-100  h-[50px] items-center w-[50%] text-center p-[15px] border border-[fuchsia-900] rounded-3xl'><Link href="#skills" className="cursor-pointer mb-2" onClick={handleClick}>Skills</Link></li>
            <li className='bg-gray-100  h-[50px] items-center w-[50%] text-center p-[15px] border border-[fuchsia-900] rounded-3xl'><Link href="#projects" className="cursor-pointer mb-2" onClick={handleClick}>Projects</Link></li>
            <li className='bg-gray-100  h-[50px] items-center w-[50%] text-center p-[15px] border border-[fuchsia-900] rounded-3xl'><a href="#projects" className="cursor-pointer">
              Get My Resume
            </a></li>
            <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-row gap-5 text-gray-200 text-[24px]"
        >
          <a href="https://www.linkedin.com/in/tajul-afreen"><FaLinkedin /></a>
          <a href="https://www.github.com/tajulafreen"><FaGithub /></a>
          <a href="https://discord.gg/2gUVQxZ4"><FaDiscord /></a>
           <a href="https://www.twitter.com/tajulafreen"><FaTwitter /></a>
        </motion.div>  
            </motion.ul>
               
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;