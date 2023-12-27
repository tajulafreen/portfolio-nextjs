"use client"
import React from 'react';
import { projectDetails } from '@/constants/Project';
import Image from 'next/image';

interface ProjectProps {
  project: {
    name: string;
    description: string[];
    image: string;
    technologies: string[];
    live: string;
    source: string;
  };
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div key={project.name} className='flex flex-col'>
      <Image 
      src={project.image} 
      alt={project.name} 
      width={1000}
        height={1000}
      />
      <h2>{project.name}</h2>
      <ul>
        {project.technologies.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <ul>
        {project.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <p>Live: <a href={project.live}>{project.live}</a></p>
      <p>Source: <a href={project.source}>{project.source}</a></p>
      
       
    </div>
  );
}

interface PopwindowProps {
    visible: boolean;
  }
const Popwindow = ({visible}: PopwindowProps) => {
    if(!visible) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center'>
      <h1>All Projects</h1>
      {projectDetails.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}

export default Popwindow;