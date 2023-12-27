import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description}: Props) => {
  return (
    <div className="flex flex-col relative  items-center overflow-hidden rounded-3xl shadow-lg border border-[#2A0E61] h-[500px] mx-[2%] ">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="h-[50%] object-contain w-full "
      />

      <div className=" pt-0 mt-0 px-3 h-[40%]">
        <h1 className="text-2xl font-semibold text-white text-center">{title}</h1>
        <p className="mt-2 text-[14px]  text-gray-300">{description}</p>
        
      </div>
      <button type="button"  className="bottom-3 h-[40px]  w-[150px] button-primary text-center text-white cursor-pointer rounded-xl items-center">read more</button>
    </div>
  );
};

export default ProjectCard;