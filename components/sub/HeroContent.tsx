"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaDiscord, FaTwitter} from "react-icons/fa";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 md:text-6xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Hi there, I&apos;m <b className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-xl ">Tajul Afreen</b>, a Full Stack Software Developer with experience in Website,
           Mobile, and Software development. Please check out my projects and skills.
        </motion.p>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-row gap-5 text-gray-200 text-[22px]"
        >
          
          <a href="https://www.linkedin.com/in/tajul-afreen" target="_blank"><FaLinkedin /></a>
          <a href="https://www.github.com/tajulafreen" target="_blank"><FaGithub /></a>
          <a href="https://discord.gg/4ffR2vaHAG" target="_blank"><FaDiscord /></a>
           <a href="https://www.twitter.com/tajulafreen" target="_blank"><FaTwitter /></a>
        </motion.div>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-lg max-w-[200px]"
          href="#about-me"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;