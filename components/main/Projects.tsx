"use client"
import React , { useEffect, useState } from "react";
import ProjectCard from "../sub/ProjectCard";
const Projects = () => {
const projectDetails = [
  {
    name: 'Special Meals',
    description: [

      'A to-do list is a simple and effective organizational tool used to keep track of tasks, activities, or goals that need to be accomplished within a certain timeframe. It serves as a visual representation of the work that needs to be completed, helping individuals prioritize and manage their time more efficiently.',
      'To-do lists can be created using various mediums, such as paper and pen, electronic devices, or specialized productivity applications. Many digital tools offer additional features like due dates, reminders, and categorization options, which further enhance their functionality.',
    ],
    image: '/specialsmeals.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/To-Do-List/dist/',
    source:
      'https://github.com/tajulafreen/To-Do-List/blob/main/src/index.html',
  },
  // Project #2
  {
    name: 'Keeping track of hundreds of components #2',
    description: [
      'This is the description of second project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: '/spacetravellers.png',
    technologies: ['Tailwind', 'JavaScript','React','Api'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  {
    name: 'Keeping track of hundreds of components #3',
    description: [
      'This is the description of third project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: '/doctorappointment.png',
    technologies: ['JavaScript','React','Ruby','Rails','Postgresql'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  // Project #4
  {
    name: 'Crytocurrency Track',
    description: [
      'This is the description of forth project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: '/cryptocurrency.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  // Project #5
  {
    name: 'MAMA Food',
    description: [
      'This is the description of fifth project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: '/mamafood.png',
    technologies:['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  // Project #6
  {
    name: 'Leader Board',
    description: [
      'This is the description of sixth project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: '/leaderboard.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
];

return (
  <div className="flex flex-col items-center justify-center py-20" id="projects p-[5%]">
    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
      My Projects
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
      {projectDetails.map((project, index) => (
        <ProjectCard
          key={index}
          src={project.image}
          title={project.name}
          description={project.description[0]}
          technologies={Array.isArray(project.technologies) ? project.technologies.join(", ") : project.technologies}
          source={project.source}
          live={project.live}
        />
      ))}
    </div>
  </div>
);
};


export default Projects;