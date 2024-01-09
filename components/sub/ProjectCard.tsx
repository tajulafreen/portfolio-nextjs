import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
  onReadMoreClick: () => void;
}

const ProjectCard = ({ src, title, description, onReadMoreClick }: Props) => {
  return (
    <div className="flex flex-col relative items-center overflow-hidden rounded-3xl shadow-lg border border-[#2A0E61] h-[500px] mx-[2%] py-[5px]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="h-[50%] object-contain w-[110%] bg-opacity-10"
      />

      <div className=" pt-[-16px]  h-[50%] px-3 md:h-[40%] my-[3%]">
        <h1 className="text-2xl font-semibold text-white text-center">{title}</h1>
        <p className="mt-2 md:text-[15px] max-sm:text-[13px]  text-gray-300">{description}</p>
      </div>
      <button
        type="button"
        onClick={onReadMoreClick}
        className="bottom-3 h-[40px] w-[150px] button-primary text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white cursor-pointer rounded-xl items-center"
      >
        read more
      </button>
    </div>
  );
};

export default ProjectCard;