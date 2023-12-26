import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies: string | string[]; // Update the type for technologies
  source: string;
  live: string;
}

const ProjectCard = ({ src, title, description, technologies, source, live }: Props) => {
  return (
    <div className="relative  rounded-lg shadow-lg border border-[#2A0E61] ">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <p>{Array.isArray(technologies) ? technologies.join(", ") : technologies}</p>
        <ul className="flex justify-between">
          <li><p>{source}</p></li>
          <li><p>{live}</p></li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;