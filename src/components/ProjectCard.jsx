import React from "react";
import frontendpfp from './../assets/frontendpfp.png'

const ProjectCard = ({ image ={frontendpfp}, name, description }) => {
  
  return (
    <div className="
    relative max-w-sm rounded-2xl overflow-hidden shadow-lg bg-purple-700 p-5 border border-purple-500
    transform transition-transform duration-300 hover:scale-105
">
  <div className="relative">
    <img
      className="w-96 h-48 object-cover rounded-xl"
      src={image}
      alt={name}
    />
    {/* Dark Tint Overlay */}
    <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
  </div>
  <div className="mt-4">
  <a href={`/projectPage/${name.replace(/\s+/g, '-')}`} >   <h2 className="text-2xl font-bold text-white">{name}</h2> </a>
    <p className="text-gray-200 mt-2 leading-relaxed">{description}</p>
  </div>
</div>
  )
};

export default ProjectCard;
