import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projectDetails = [
  {
    name: 'TO-DO-LIST',
    description: [

      'A to-do list is a simple and effective organizational tool used to keep track of tasks, activities, or goals that need to be accomplished within a certain timeframe. It serves as a visual representation of the work that needs to be completed, helping individuals prioritize and manage their time more efficiently.',
      'To-do lists can be created using various mediums, such as paper and pen, electronic devices, or specialized productivity applications. Many digital tools offer additional features like due dates, reminders, and categorization options, which further enhance their functionality.',
    ],
    image: './firstproject.png',
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
    image: './Snapshoot Portfolio (2).png',
    technologies: ['HTML', 'CSS', 'Tailwind'],
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
    image: './Snapshoot Portfolio (2).png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  // Project #4
  {
    name: 'Keeping track of hundreds of components #4',
    description: [
      'This is the description of forth project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: './Snapshoot Portfolio (2).png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  // Project #5
  {
    name: 'Keeping track of hundreds of components #5',
    description: [
      'This is the description of fifth project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: './Snapshoot Portfolio (2).png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  // Project #6
  {
    name: 'Keeping track of hundreds of components #6',
    description: [
      'This is the description of sixth project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: './Snapshoot Portfolio (2).png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
];

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          technologies=""
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          technologies=""
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          technologies=""
        />
      </div>
    </div>
  );
};

export default Projects;