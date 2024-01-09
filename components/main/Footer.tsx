"use client"
import React from "react";
import {
    RxAngle,
  RxGithubLogo,
  RxShadowInner,
  RxTwitterLogo,
} from "react-icons/rx";

import { FaDiscord, FaLinkedin} from "react-icons/fa";
import { motion } from "framer-motion";


const Footer = () => {


  return (
    <motion.div 
    initial="hidden"
      animate="visible"
      
    className="w-full h-full  text-gray-200 shadow-lg p-[15px] z-[30] "
    // style={footerStyle} 
    >
        <motion.div 
        initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        className="w-full flex flex-col items-center justify-center m-auto ">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap ">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500">
          
                    <FaLinkedin />
                    <a href="https://www.linkedin.com/in/tajul-afreen" target="_blank" ><span className="text-[15px] ml-[6px]">Linkedin</span></a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500">
                    <RxGithubLogo />
                    <a href="https://www.github.com/tajulafreen " target="_blank"> <span className="text-[15px] ml-[6px]">Github</span></a>   
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500">
                        <RxAngle />
                        <a href="https://wellfound.com/u/tajul-afreen" target="_blank"><span className="text-[15px] ml-[6px]">Well Found</span></a>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500">
                    <FaDiscord />
                        <span className="text-[15px] ml-[6px]"><a href="https://discord.gg/4ffR2vaHAG" target="_blank">Discord</a></span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500">
                   <RxTwitterLogo />
                   <a href="https://www.twitter.com/tajulafreen" target="_blank"><span className="text-[15px] ml-[6px]">Twitter</span></a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500">
                    <RxShadowInner />
                        <a href="https://join.slack.com/t/newworkspace-xcz8151/shared_invite/zt-29l1d1dx2-~ew5PeeAjPwrrWRp6TJLmA" target="_blank"><span className="text-[15px] ml-[6px]">Slack</span> </a>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500">
                      
                        <a href="https://docs.google.com/document/d/1EbIrEA_zuzbal2X17RwAQ5tPWRHYu7ift3Ei_46H-Ek/edit?usp=sharing" target="_blank"><span className="text-[15px] ml-[6px]">Learning about me</span></a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500">
                  
                        <a href="https://affushaik9493@gmail.com" target="_blank"><span className="text-[15px] ml-[6px]">affushaik9493@gmail.com</span> </a>   
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Created by Tajul Afreen 2023 Inc. All rights reserved
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Footer