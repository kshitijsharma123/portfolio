import React from "react";
import { useRef } from "react";

import ProjectCard from "./ProjectCard";


import frontendpfp from './../assets/youtubeicon.webp'
import backendpfp from './../assets/backednpfp.png'
import musicplayerpfp from './../assets/musicplayer.png'
import sharingpfp from './../assets/sharingpfp.png'

const projectData = [
  {
    image: backendpfp,
    name: "Youtube Backend Clone",
    description:
      "A powerful backend built with Node.js, Express, and MongoDB, replicating core YouTube functionalities. It supports user authentication, video uploads, streaming, likes, comments, and more, delivering a seamless video-sharing experience..",
  },
  {
    image: frontendpfp,
    name: "Youtube Frontend Clone",
    description: "A dynamic and responsive frontend built with React, Redux, and React Router DOM, designed to replicate YouTube’s user experience. It includes features like video playback, user authentication, video uploads, likes, comments, and seamless navigation for an engaging video-sharing platform.",
  },
  {
    image: musicplayerpfp,
    name: "React Music Player",
    description: "A basic music player built with React, featuring play, pause, and search functionality. Users can easily browse songs, control playback, and enjoy a smooth, responsive music experience with a clean UI..",
  },
  {
    image: sharingpfp,
    name: "Secure File Sharing Platform",
    description: "A MERN-based file-sharing website that allows users to upload and download files securely. Files are protected with passwords, ensuring privacy and controlled access. With a user-friendly interface and robust backend, it offers seamless file management and secure sharing..",
  },
];


function Projects() {
   const PorjectsRef=useRef(null)

  return (
    <div id="projects">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
