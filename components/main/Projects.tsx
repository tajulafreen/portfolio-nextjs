"use client"
import React, { useState, useEffect } from 'react';
import ProjectCard from '../sub/ProjectCard';
import { projectDetails } from '@/constants/Project';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Popwindow from './Popwindow';
import ContactForm from './Contactform';

const Projects = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const togglePopUp = (project: any) => {
    setSelectedProject(project);
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  useEffect(() => {
    if (showPopUp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPopUp]);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='z-[20]'>
      <div className="p-20 mx-auto " id="projects">
        <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="gap-20">
          <Slider {...settings}>
            {projectDetails.map((project, index) => (
              <ProjectCard
                key={index}
                src={project.image}
                title={project.name}
                description={project.description[0]}
                onReadMoreClick={() => togglePopUp(project)}
              />
            ))}
          </Slider>
        </div>
        {showPopUp && (
          <Popwindow
            project={selectedProject}
            onClosePopUp={closePopUp}
          />
        )}
      </div>
        <ContactForm visible={showPopUp}/>
    </div>
  );
};

export default Projects;